import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Sky } from '@react-three/drei';
import * as THREE from 'three';
import { Keyboard } from 'lucide-react';

// ---- ADVENTURE PATH WAYPOINTS (smooth curve will be generated) ----
const PATH_WAYPOINTS = [
  new THREE.Vector3(0, 0, 2),
  new THREE.Vector3(2, 0, -6),
  new THREE.Vector3(6, 0, -14),
  new THREE.Vector3(4, 0, -22),
  new THREE.Vector3(-2, 0, -28),
  new THREE.Vector3(-4, 0, -36),
  new THREE.Vector3(2, 0, -42),
  new THREE.Vector3(8, 0, -48),
  new THREE.Vector3(6, 0, -56),
  new THREE.Vector3(-2, 0, -62),
  new THREE.Vector3(-4, 0, -68),
  new THREE.Vector3(2, 0, -74),
  new THREE.Vector3(7, 0, -80),
  new THREE.Vector3(4, 0, -88),
  new THREE.Vector3(-3, 0, -94),
  new THREE.Vector3(-5, 0, -100),
  new THREE.Vector3(0, 0, -108),
  new THREE.Vector3(4, 0, -114),
  new THREE.Vector3(2, 0, -120),
  new THREE.Vector3(0, 0, -126),
];

// Generate smooth road curve from waypoints
const roadCurve = new THREE.CatmullRomCurve3(PATH_WAYPOINTS, false, 'catmullrom', 0.5);
const ROAD_POINTS = roadCurve.getPoints(300);
const ROAD_WIDTH = 4.8;

// Station positions along the curve (parametric t values)
const STATION_T_VALUES = [0.0, 0.08, 0.17, 0.27, 0.38, 0.50, 0.62, 0.76, 0.92];
const PLATFORM_POSITIONS = STATION_T_VALUES.map(t => {
  const p = roadCurve.getPoint(t);
  return { x: p.x, z: p.z, t };
});

// Check if a point is too close to the road
const isNearRoad = (x, z, minDist) => {
  for (const rp of ROAD_POINTS) {
    if (Math.hypot(x - rp.x, z - rp.z) < minDist) return true;
  }
  return false;
};

// Generate trees safely away from road
const generateTrees = () => {
  const trees = [];
  let attempts = 0;
  while (trees.length < 80 && attempts < 600) {
    attempts++;
    const x = (Math.random() - 0.5) * 40;
    const z = -(Math.random() * 135);
    if (!isNearRoad(x, z, ROAD_WIDTH * 0.75 + 0.8)) {
      trees.push({ x, z });
    }
  }
  return trees;
};

// ---- KEYBOARD HOOK ----
const useKeyboardControls = () => {
  const [keys, setKeys] = useState({
    forward: false, backward: false, left: false, right: false, handbrake: false
  });
  useEffect(() => {
    const handle = (e, down) => {
      if (['arrowup','arrowdown','arrowleft','arrowright',' '].includes(e.key.toLowerCase())) e.preventDefault();
      const k = e.key.toLowerCase();
      if (['w','arrowup'].includes(k)) setKeys(p => ({ ...p, forward: down }));
      if (['s','arrowdown'].includes(k)) setKeys(p => ({ ...p, backward: down }));
      if (['a','arrowleft'].includes(k)) setKeys(p => ({ ...p, left: down }));
      if (['d','arrowright'].includes(k)) setKeys(p => ({ ...p, right: down }));
      if (k === ' ') setKeys(p => ({ ...p, handbrake: down }));
    };
    const d = e => handle(e, true);
    const u = e => handle(e, false);
    window.addEventListener('keydown', d, { passive: false });
    window.addEventListener('keyup', u, { passive: false });
    return () => { window.removeEventListener('keydown', d); window.removeEventListener('keyup', u); };
  }, []);
  return keys;
};

// ---- SMOOTH CURVED ROAD ----
const CurvedRoad = () => {
  const roadMesh = useMemo(() => {
    const segments = 300;
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const p = roadCurve.getPointAt(t);
      const tan = roadCurve.getTangentAt(t);
      const right = new THREE.Vector3().crossVectors(tan, new THREE.Vector3(0, 1, 0)).normalize();
      
      const w = ROAD_WIDTH / 2;
      vertices.push(p.x + right.x * w, 0.02, p.z + right.z * w);
      vertices.push(p.x - right.x * w, 0.02, p.z - right.z * w);
    }
    
    for (let i = 0; i < segments; i++) {
      const a = i * 2;
      const b = i * 2 + 1;
      const c = (i + 1) * 2;
      const d = (i + 1) * 2 + 1;
      indices.push(a, c, b);
      indices.push(b, c, d);
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Center dashed yellow lines (Curved ribbons)
  const dashMeshGeo = useMemo(() => {
    const segments = 400; // High resolution for smooth curves
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];
    let indexOffset = 0;

    for (let i = 0; i < segments; i++) {
      if (i % 8 < 4) { // Dash length 4 segments, gap 4 segments
        const t1 = i / segments;
        const t2 = (i + 1) / segments;
        
        const p1 = roadCurve.getPointAt(t1);
        const tan1 = roadCurve.getTangentAt(t1);
        const right1 = new THREE.Vector3().crossVectors(tan1, new THREE.Vector3(0, 1, 0)).normalize();
        
        const p2 = roadCurve.getPointAt(t2);
        const tan2 = roadCurve.getTangentAt(t2);
        const right2 = new THREE.Vector3().crossVectors(tan2, new THREE.Vector3(0, 1, 0)).normalize();
        
        const w = 0.05; // Half width of center line

        // Right vertex 1
        vertices.push(p1.x + right1.x * w, 0.035, p1.z + right1.z * w);
        // Left vertex 1
        vertices.push(p1.x - right1.x * w, 0.035, p1.z - right1.z * w);
        // Right vertex 2
        vertices.push(p2.x + right2.x * w, 0.035, p2.z + right2.z * w);
        // Left vertex 2
        vertices.push(p2.x - right2.x * w, 0.035, p2.z - right2.z * w);
        
        const a = indexOffset;
        const b = indexOffset + 1;
        const c = indexOffset + 2;
        const d = indexOffset + 3;
        
        indices.push(a, c, b);
        indices.push(b, c, d);
        
        indexOffset += 4;
      }
    }
    
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Solid white edge lines (Continuous Ribbons)
  const edgeMeshGeo = useMemo(() => {
    const segments = 300;
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const p = roadCurve.getPointAt(t);
      const tan = roadCurve.getTangentAt(t);
      const right = new THREE.Vector3().crossVectors(tan, new THREE.Vector3(0, 1, 0)).normalize();
      
      const wOuter = ROAD_WIDTH / 2 - 0.05;
      const wInner = ROAD_WIDTH / 2 - 0.15;
      
      // Right edge
      vertices.push(p.x + right.x * wOuter, 0.035, p.z + right.z * wOuter);
      vertices.push(p.x + right.x * wInner, 0.035, p.z + right.z * wInner);
      
      // Left edge
      vertices.push(p.x - right.x * wInner, 0.035, p.z - right.z * wInner);
      vertices.push(p.x - right.x * wOuter, 0.035, p.z - right.z * wOuter);
    }
    
    for (let i = 0; i < segments; i++) {
      const r_a = i * 4;
      const r_b = i * 4 + 1;
      const r_c = (i + 1) * 4;
      const r_d = (i + 1) * 4 + 1;
      indices.push(r_a, r_c, r_b);
      indices.push(r_b, r_c, r_d);
      
      const l_a = i * 4 + 2;
      const l_b = i * 4 + 3;
      const l_c = (i + 1) * 4 + 2;
      const l_d = (i + 1) * 4 + 3;
      indices.push(l_a, l_c, l_b);
      indices.push(l_b, l_c, l_d);
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <group>
      {/* Main road surface */}
      <mesh geometry={roadMesh} receiveShadow>
        <meshStandardMaterial color="#505565" roughness={0.85} side={THREE.DoubleSide} />
      </mesh>

      {/* Solid white edge lines */}
      <mesh geometry={edgeMeshGeo} receiveShadow>
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>

      {/* Dashed center lines */}
      <mesh geometry={dashMeshGeo} receiveShadow>
        <meshBasicMaterial color="#ffd700" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

// ---- NEON ARCHES ----
const NeonArches = ({ tPos, count = 5 }) => {
  const arches = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const t = tPos + (i * 0.008);
      if (t > 1) break;
      const p = roadCurve.getPoint(t);
      const tang = roadCurve.getTangent(t);
      const angle = Math.atan2(tang.x, tang.z);
      items.push({ x: p.x, z: p.z, angle });
    }
    return items;
  }, [tPos, count]);

  return (
    <group>
      {arches.map((arch, i) => (
        <group key={i} position={[arch.x, 0, arch.z]} rotation={[0, arch.angle, 0]}>
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <torusGeometry args={[3.2, 0.1, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={2} />
          </mesh>
          <pointLight position={[0, 2.5, 0]} intensity={0.5} distance={6} color="#00f5ff" />
        </group>
      ))}
    </group>
  );
};

// ---- PINE TREE ----
const PineTree = ({ position }) => (
  <group position={position}>
    <mesh position={[0, 0.9, 0]} castShadow>
      <cylinderGeometry args={[0.1, 0.18, 1.8, 6]} />
      <meshStandardMaterial color="#5c3a21" roughness={0.9} />
    </mesh>
    <mesh position={[0, 2.1, 0]} castShadow>
      <coneGeometry args={[0.95, 1.4, 7]} />
      <meshStandardMaterial color="#2d6b35" roughness={0.7} flatShading />
    </mesh>
    <mesh position={[0, 2.85, 0]} castShadow>
      <coneGeometry args={[0.7, 1.1, 7]} />
      <meshStandardMaterial color="#358540" roughness={0.7} flatShading />
    </mesh>
    <mesh position={[0, 3.5, 0]} castShadow>
      <coneGeometry args={[0.42, 0.8, 7]} />
      <meshStandardMaterial color="#3d9a48" roughness={0.7} flatShading />
    </mesh>
  </group>
);

// ---- WEEK STATION ----
const WeekStation = ({ weekNum, position, color, isActive }) => (
  <group position={[position.x, 0, position.z]}>
    <mesh receiveShadow position={[0, 0.04, 0]}>
      <cylinderGeometry args={[2.0, 2.1, 0.1, 24]} />
      <meshStandardMaterial color={isActive ? "#4a506a" : "#404555"} roughness={0.7} />
    </mesh>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
      <ringGeometry args={[1.9, 2.05, 32]} />
      <meshBasicMaterial color={color} transparent opacity={isActive ? 0.95 : 0.3} />
    </mesh>
    {/* Light post */}
    <mesh position={[2.3, 0.75, 0]} castShadow>
      <cylinderGeometry args={[0.05, 0.06, 1.5, 8]} />
      <meshStandardMaterial color="#3a3d4a" metalness={0.7} roughness={0.2} />
    </mesh>
    <mesh position={[2.3, 1.55, 0]}>
      <sphereGeometry args={[0.1, 10, 10]} />
      <meshBasicMaterial color={color} />
    </mesh>
    <pointLight position={[2.3, 1.4, 0]} intensity={1.5} distance={5} color={color} />
    <Html position={[0, 2.6, 0]} center distanceFactor={22}>
      <div className={`threed-week-label ${isActive ? 'active' : ''}`}
        style={{ borderColor: color, boxShadow: isActive ? `0 0 12px ${color}` : 'none' }}>
        Semana {weekNum}
      </div>
    </Html>
  </group>
);

// ---- DUST PARTICLES ----
const DustParticles = ({ carPos, speed, braking }) => {
  const ref = useRef();
  const count = 50;
  const [positions] = useState(() => new Float32Array(count * 3).fill(-10));
  const vels = useRef(new Float32Array(count * 3));
  const lifes = useRef(new Float32Array(count));
  const next = useRef(0);

  useFrame(() => {
    if (!ref.current) return;
    const attr = ref.current.geometry.attributes.position;
    const absSpd = Math.abs(speed);
    const rate = braking ? 4 : absSpd > 0.04 ? 3 : absSpd > 0.02 ? 1 : 0;

    for (let s = 0; s < rate; s++) {
      const i = next.current;
      attr.array[i*3] = carPos.x + (Math.random()-0.5)*0.7;
      attr.array[i*3+1] = 0.06;
      attr.array[i*3+2] = carPos.z + (Math.random()-0.5)*0.7;
      vels.current[i*3] = (Math.random()-0.5)*0.035;
      vels.current[i*3+1] = Math.random()*0.025+0.012;
      vels.current[i*3+2] = (Math.random()-0.5)*0.035;
      lifes.current[i] = 1.0;
      next.current = (next.current+1) % count;
    }

    for (let i = 0; i < count; i++) {
      if (lifes.current[i] > 0) {
        attr.array[i*3] += vels.current[i*3];
        attr.array[i*3+1] += vels.current[i*3+1];
        attr.array[i*3+2] += vels.current[i*3+2];
        lifes.current[i] -= 0.022;
        if (lifes.current[i] <= 0) attr.array[i*3+1] = -10;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.18} color="#c4a87a" transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
};

// ---- SCULPTED CAR ----
const Car = ({ keys, onZoneCheck, onPosUpdate, startPos }) => {
  const carRef = useRef();
  const wheels = [useRef(), useRef(), useRef(), useRef()];
  const brakeRef = useRef();
  const brakeRef2 = useRef();
  const isFirstFrame = useRef(true);

  const phy = useRef({
    x: startPos[0], z: startPos[2], theta: Math.PI, speed: 0,
    maxF: 0.17, maxR: -0.06, acc: 0.005, fric: 0.95, steer: 0.035
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('adat_car_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === 'number' && typeof parsed.z === 'number') {
          phy.current.x = parsed.x;
          phy.current.z = parsed.z;
          phy.current.theta = parsed.theta || Math.PI;
        }
      }
    } catch (e) { }

    const interval = setInterval(() => {
      localStorage.setItem('adat_car_state', JSON.stringify({
        x: phy.current.x,
        z: phy.current.z,
        theta: phy.current.theta
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (!carRef.current) return;
    const p = phy.current;

    if (keys.forward) p.speed = Math.min(p.speed + p.acc, p.maxF);
    else if (keys.backward) p.speed = Math.max(p.speed - p.acc, p.maxR);
    else { p.speed *= p.fric; if (Math.abs(p.speed) < 0.0008) p.speed = 0; }
    if (keys.handbrake) p.speed *= 0.82;

    if (Math.abs(p.speed) > 0.008) {
      const d = p.speed > 0 ? 1 : -1;
      if (keys.left) p.theta += p.steer * d;
      if (keys.right) p.theta -= p.steer * d;
    }

    let nx = p.x + Math.sin(p.theta) * p.speed;
    let nz = p.z + Math.cos(p.theta) * p.speed;

    // Tree collisions
    let hit = false;
    for (const t of TREE_DATA) {
      if (Math.hypot(nx - t.x, nz - t.z) < 0.75) { p.speed *= -0.35; hit = true; break; }
    }
    if (!hit) { p.x = nx; p.z = nz; }

    p.x = Math.max(-20, Math.min(20, p.x));
    if (p.z > 5) { p.z = 5; p.speed *= -0.3; }
    if (p.z < -132) { p.z = -132; p.speed *= -0.3; }

    carRef.current.position.set(p.x, 0.16, p.z);
    carRef.current.rotation.y = p.theta;

    const wr = p.speed * 5;
    wheels.forEach(w => { if (w.current) w.current.rotation.x += wr; });
    const sa = keys.left ? 0.32 : keys.right ? -0.32 : 0;
    if (wheels[0].current) wheels[0].current.rotation.y = sa;
    if (wheels[1].current) wheels[1].current.rotation.y = sa;

    if (brakeRef.current) brakeRef.current.material.emissiveIntensity = (keys.handbrake || keys.backward) ? 3 : 0.3;
    if (brakeRef2.current) brakeRef2.current.material.emissiveIntensity = (keys.handbrake || keys.backward) ? 3 : 0.3;

    const camOff = new THREE.Vector3(-Math.sin(p.theta)*5.5, 3.5, -Math.cos(p.theta)*5.5);
    if (isFirstFrame.current) {
      state.camera.position.set(p.x+camOff.x, camOff.y, p.z+camOff.z);
      state.camera.lookAt(new THREE.Vector3(p.x, 0.5, p.z));
      isFirstFrame.current = false;
    } else {
      state.camera.position.lerp(new THREE.Vector3(p.x+camOff.x, camOff.y, p.z+camOff.z), 0.07);
      state.camera.lookAt(new THREE.Vector3(p.x, 0.5, p.z));
    }

    onZoneCheck(p.x, p.z);
    onPosUpdate({ x: p.x, z: p.z }, p.speed, keys.handbrake);
  });

  const WheelAssembly = ({ wRef, pos, bigger }) => {
    const r = bigger ? 0.23 : 0.21;
    return (
      <group ref={wRef} position={pos}>
        <mesh castShadow rotation={[0,0,Math.PI/2]}>
          <cylinderGeometry args={[r, r, 0.14, 20]} />
          <meshStandardMaterial color="#1a1a1d" roughness={0.9} />
        </mesh>
        <mesh rotation={[0,0,Math.PI/2]}>
          <cylinderGeometry args={[r*0.55, r*0.55, 0.15, 8]} />
          <meshStandardMaterial color="#d0d5e0" metalness={0.96} roughness={0.05} />
        </mesh>
      </group>
    );
  };

  return (
    <group ref={carRef} position={startPos}>
      {/* Chassis pan */}
      <mesh castShadow position={[0, 0.07, 0]}>
        <boxGeometry args={[1.0, 0.06, 2.05]} />
        <meshStandardMaterial color="#0e1015" roughness={0.9} />
      </mesh>

      {/* Main body - with side curvature simulated via multiple layers */}
      <mesh castShadow position={[0, 0.19, 0.05]}>
        <boxGeometry args={[0.96, 0.17, 1.92]} />
        <meshStandardMaterial color="#c91010" metalness={0.93} roughness={0.07} />
      </mesh>
      {/* Rounded side panels */}
      <mesh castShadow position={[0.42, 0.17, 0.05]}>
        <boxGeometry args={[0.14, 0.22, 1.85]} />
        <meshStandardMaterial color="#9e0505" metalness={0.93} roughness={0.08} />
      </mesh>
      <mesh castShadow position={[-0.42, 0.17, 0.05]}>
        <boxGeometry args={[0.14, 0.22, 1.85]} />
        <meshStandardMaterial color="#9e0505" metalness={0.93} roughness={0.08} />
      </mesh>

      {/* Hood slope */}
      <mesh castShadow position={[0, 0.26, 0.7]} rotation={[-0.18, 0, 0]}>
        <boxGeometry args={[0.92, 0.05, 0.55]} />
        <meshStandardMaterial color="#e31212" metalness={0.93} roughness={0.07} />
      </mesh>

      {/* Trunk slope */}
      <mesh castShadow position={[0, 0.26, -0.68]} rotation={[0.14, 0, 0]}>
        <boxGeometry args={[0.88, 0.05, 0.5]} />
        <meshStandardMaterial color="#b50c0c" metalness={0.93} roughness={0.07} />
      </mesh>

      {/* Cabin + Glass */}
      <mesh castShadow position={[0, 0.37, -0.08]}>
        <boxGeometry args={[0.8, 0.19, 0.88]} />
        <meshStandardMaterial color="#0b0e14" roughness={0.02} metalness={0.98} transparent opacity={0.82} />
      </mesh>

      {/* Roof with slight curve */}
      <mesh castShadow position={[0, 0.475, -0.1]}>
        <boxGeometry args={[0.76, 0.035, 0.72]} />
        <meshStandardMaterial color="#163562" metalness={0.92} roughness={0.07} />
      </mesh>

      {/* Front bumper */}
      <mesh castShadow position={[0, 0.1, 1.0]}>
        <boxGeometry args={[1.02, 0.12, 0.1]} />
        <meshStandardMaterial color="#121418" roughness={0.5} />
      </mesh>

      {/* Rear bumper */}
      <mesh castShadow position={[0, 0.1, -1.0]}>
        <boxGeometry args={[1.02, 0.12, 0.1]} />
        <meshStandardMaterial color="#121418" roughness={0.5} />
      </mesh>

      {/* Front grille */}
      <mesh position={[0, 0.17, 1.01]}>
        <boxGeometry args={[0.5, 0.05, 0.02]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* LED Headlights */}
      <mesh position={[0.35, 0.19, 1.01]}>
        <boxGeometry args={[0.2, 0.05, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.35, 0.19, 1.01]}>
        <boxGeometry args={[0.2, 0.05, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Brake lights */}
      <mesh ref={brakeRef} position={[0.35, 0.19, -1.01]}>
        <boxGeometry args={[0.2, 0.04, 0.02]} />
        <meshStandardMaterial color="#cc0000" emissive="#cc0000" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={brakeRef2} position={[-0.35, 0.19, -1.01]}>
        <boxGeometry args={[0.2, 0.04, 0.02]} />
        <meshStandardMaterial color="#cc0000" emissive="#cc0000" emissiveIntensity={0.3} />
      </mesh>

      {/* Side mirrors */}
      <mesh position={[0.54, 0.31, 0.25]} castShadow>
        <boxGeometry args={[0.08, 0.04, 0.1]} />
        <meshStandardMaterial color="#9e0505" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.54, 0.31, 0.25]} castShadow>
        <boxGeometry args={[0.08, 0.04, 0.1]} />
        <meshStandardMaterial color="#9e0505" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Spoiler */}
      <mesh position={[0, 0.33, -0.9]} castShadow>
        <boxGeometry args={[0.9, 0.025, 0.12]} />
        <meshStandardMaterial color="#0e1a30" metalness={0.95} roughness={0.08} />
      </mesh>
      <mesh position={[0.38, 0.24, -0.9]} castShadow>
        <boxGeometry args={[0.025, 0.16, 0.04]} />
        <meshStandardMaterial color="#0e1a30" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.38, 0.24, -0.9]} castShadow>
        <boxGeometry args={[0.025, 0.16, 0.04]} />
        <meshStandardMaterial color="#0e1a30" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Wheels */}
      <WheelAssembly wRef={wheels[0]} pos={[0.52, 0.06, 0.6]} bigger={false} />
      <WheelAssembly wRef={wheels[1]} pos={[-0.52, 0.06, 0.6]} bigger={false} />
      <WheelAssembly wRef={wheels[2]} pos={[0.52, 0.06, -0.6]} bigger={true} />
      <WheelAssembly wRef={wheels[3]} pos={[-0.52, 0.06, -0.6]} bigger={true} />
    </group>
  );
};

// Cached tree data for collision checks
let TREE_DATA = [];

// ---- MAIN 3D SCENE ----
const Portfolio3D = ({ weeks, activeWeek, onActiveWeekChange }) => {
  const keys = useKeyboardControls();
  const [carState, setCarState] = useState({ pos: { x: 0, z: 0 }, speed: 0, braking: false });
  const [trees] = useState(() => { const t = generateTrees(); TREE_DATA = t; return t; });

  const handleZone = (x, z) => {
    let zone = null;
    for (let i = 1; i < PLATFORM_POSITIONS.length; i++) {
      const p = PLATFORM_POSITIONS[i];
      if (Math.hypot(x - p.x, z - p.z) < 2.0) { zone = i; break; }
    }
    if (zone !== activeWeek) onActiveWeekChange(zone);
  };

  return (
    <div className="canvas-3d-wrapper" style={{ height: '72vh', position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
      
      <div className="controls-panel glassmorphism" style={{ zIndex: 100, pointerEvents: 'auto' }}>
        <h4><Keyboard size={16} /> Controles</h4>
        <div className="keys-info">
          <span><kbd>W</kbd> / <kbd>↑</kbd> Acelerar</span>
          <span><kbd>S</kbd> / <kbd>↓</kbd> Retroceder</span>
          <span><kbd>A</kbd> / <kbd>←</kbd> Girar izq.</span>
          <span><kbd>D</kbd> / <kbd>→</kbd> Girar der.</span>
          <span><kbd>Espacio</kbd> Freno</span>
        </div>
        <p className="hint">Conduce por la pista y estacionate en cada semana. Cuidado con los arboles.</p>
        <button 
          onClick={() => { localStorage.removeItem('adat_car_state'); window.location.reload(); }}
          style={{ marginTop: '0.8rem', width: '100%', padding: '0.6rem', background: 'rgba(255, 0, 0, 0.1)', border: '1px solid rgba(255, 0, 0, 0.3)', color: '#ff6b6b', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.2s' }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255, 0, 0, 0.2)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 0, 0, 0.1)'}
        >
          Volver a Línea de Salida
        </button>
      </div>

      <Canvas shadows camera={{ position: [0, 4, 6], fov: 50 }} style={{ background: '#6aafe6' }}>
        <Sky sunPosition={[80, 40, -40]} turbidity={3} rayleigh={0.5} />
        <fog attach="fog" args={["#a8d0f0", 20, 55]} />

        <ambientLight intensity={0.8} color="#f0f4ff" />
        <hemisphereLight intensity={0.65} color="#87ceeb" groundColor="#4a8a3a" />
        <directionalLight position={[30, 50, 20]} intensity={1.5} color="#fff8e8" castShadow shadow-mapSize={[1024, 1024]} />

        {/* Green grass ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, -65]} receiveShadow>
          <planeGeometry args={[65, 170]} />
          <meshStandardMaterial color="#4a8a3a" roughness={0.9} />
        </mesh>

        {/* Smooth curved road */}
        <CurvedRoad />

        {/* Starting area */}
        <group position={[PLATFORM_POSITIONS[0].x, 0, PLATFORM_POSITIONS[0].z]}>
          <mesh receiveShadow position={[0, 0.03, 0]}>
            <cylinderGeometry args={[2.5, 2.6, 0.08, 24]} />
            <meshStandardMaterial color="#556070" roughness={0.65} />
          </mesh>
          <Html position={[0, 2.2, 0]} center distanceFactor={22}>
            <div className="threed-week-label" style={{ borderColor: '#00f5ff', fontWeight: 800 }}>INICIO</div>
          </Html>
        </group>

        {/* Neon Arches along the path */}
        <NeonArches tPos={0.22} count={4} />
        <NeonArches tPos={0.43} count={6} />
        <NeonArches tPos={0.68} count={5} />

        {/* Week stations */}
        {weeks.map((w, i) => (
          <WeekStation key={w.number} weekNum={w.number} position={PLATFORM_POSITIONS[i+1]} color={w.color} isActive={activeWeek === i+1} />
        ))}

        {/* Trees */}
        {trees.map((t, i) => <PineTree key={i} position={[t.x, 0, t.z]} />)}

        {/* Dust */}
        <DustParticles carPos={carState.pos} speed={carState.speed} braking={carState.braking} />

        {/* Car */}
        <Car keys={keys} onZoneCheck={handleZone} onPosUpdate={(p,s,b) => setCarState({pos:p,speed:s,braking:b})} startPos={[0, 0.16, 0]} />
      </Canvas>

      {activeWeek && (
        <div className="active-zone-banner" style={{ borderLeft: `5px solid ${weeks[activeWeek-1].color}` }}>
          <div>
            <span className="badge-pulsing" style={{ backgroundColor: `${weeks[activeWeek-1].color}22`, color: weeks[activeWeek-1].color, borderColor: weeks[activeWeek-1].color }}>
              Estacionado en Semana {activeWeek}
            </span>
            <h5>{weeks[activeWeek-1].title.split(': ')[1]}</h5>
          </div>
          <div className="instructions-hint">Ver bitacora abajo</div>
        </div>
      )}
    </div>
  );
};

export default Portfolio3D;
