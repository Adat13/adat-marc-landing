import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000ff" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#00f5ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="canvas-container">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="badge">Innovación Sin Límites</span>
          <h1 className="hero-title">
            Transformamos Ideas en <br />
            <span className="text-gradient">Realidad Digital</span>
          </h1>
          <p className="hero-description">
            En Adat Marc desarrollamos soluciones de software a medida, 
            infraestructura de IT y servicios tecnológicos de alto nivel 
            para empresas que buscan liderar en la era digital.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Iniciar Proyecto <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-outline">
              Ver Servicios
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
