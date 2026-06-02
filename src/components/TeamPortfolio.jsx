import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../../167634689.jpeg';
import { 
  User, Code, Cpu, BookOpen, ChevronRight, Calendar, Award, 
  Terminal, Globe, Layers, ArrowLeft, ExternalLink, Sparkles, GitBranch,
  Wrench, CheckCircle, Flame, Star, Coffee, Code2, Play, Link, Video, Image as ImageIcon
} from 'lucide-react';
import Portfolio3D from './Portfolio3D';

const weeksData = [
  {
    number: 1,
    title: "Semana 1: Fundamentos y Entorno de Desarrollo",
    period: "Semana de Introducción",
    summary: "Configuración del entorno de desarrollo moderno utilizando Node.js, npm y sistemas de control de versiones con Git.",
    extendedDescription: "En esta primera semana, nos sumergimos en las herramientas esenciales que todo desarrollador moderno debe dominar. Desde la configuración de un entorno de trabajo óptimo con VS Code, extensiones clave, hasta el manejo de terminales y la comprensión profunda de Git para el control de versiones. Aprendimos a crear repositorios, gestionar ramas (branches) y entender el flujo de trabajo colaborativo que utilizan las grandes empresas tecnológicas.",
    achievements: [
      "Instalación y configuración del entorno local de desarrollo con VS Code y Node.js.",
      "Inicialización de repositorios Git locales y sincronización con GitHub.",
      "Comprensión de la arquitectura cliente-servidor básica."
    ],
    tools: ["VS Code", "Git", "GitHub", "Node.js", "npm"],
    deliverable: "Repositorio Git inicializado y estructura de directorios del proyecto base.",
    codeSnippet: `git init\ngit add .\ngit commit -m "Initial commit of ADAT Portafolio"\ngit push origin main`,
    icon: Terminal,
    color: "#00f5ff",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    videoId: "8JJ101D3knE",
    myNotes: "Esta semana fue clave para entender cómo funciona Git desde cero. Lo que más me costó fue entender las ramas, pero luego de practicar varias veces, ya se me hizo natural.",
    myReflection: "Aprendí que un buen control de versiones es la base de todo proyecto serio. Desde ahora veo Git no como una obligación, sino como mi aliado.",
    resources: [
      { name: "Documentación oficial de Git", url: "https://git-scm.com/doc" },
      { name: "Guía de Node.js", url: "https://nodejs.org/" }
    ]
  },
  {
    number: 2,
    title: "Semana 2: Estructura y Semántica Web",
    period: "HTML5 & Buenas Prácticas",
    summary: "Creación de la base estructural utilizando HTML5 semántico. Organización de información enfocada en SEO y accesibilidad.",
    extendedDescription: "Dejamos atrás los clásicos 'divs' para todo y aprendimos a estructurar la web de forma semántica. Usando etiquetas como <header>, <main>, <article>, y <section>, logramos que nuestro código no solo sea legible para nosotros, sino también para los motores de búsqueda (SEO) y lectores de pantalla (Accesibilidad). Un buen cimiento es vital para cualquier sitio web profesional.",
    achievements: [
      "Dominio de etiquetas semánticas de HTML5.",
      "Estructuración de contenido para mejorar la legibilidad y SEO.",
      "Manejo de metadatos, favicon y enlaces a recursos externos."
    ],
    tools: ["HTML5", "SEO Básico", "W3C Validators", "Semantic Markup"],
    deliverable: "Maquetación semántica del sitio web corporativo con jerarquía H1-H6 correcta.",
    codeSnippet: `<header>\n  <nav aria-label="Main Navigation">\n    <h1 className="logo-text">ADAT MARC</h1>\n  </nav>\n</header>\n<main>\n  <section id="hero">\n    ...\n  </section>\n</main>`,
    icon: Globe,
    color: "#7000ff",
    image: "https://images.unsplash.com/photo-1627398240411-8ac59774139a?auto=format&fit=crop&q=80&w=800",
    videoId: "pQN-pnXPaVg",
    myNotes: "Fue interesante ver la diferencia entre usar divs para todo versus usar etiquetas semánticas. Me sorprendió cuánto afecta la estructura al SEO.",
    myReflection: "Entendí que escribir HTML semántico no es solo para las máquinas, sino también para que cualquier desarrollador lea el código y lo entienda rápido.",
    resources: [
      { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { name: "Guía de SEO para principiantes", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { name: "Proyecto Semanal: Pastelería Dulzemi", url: "https://github.com/Adat13/Dulzemi" }
    ]
  },
  {
    number: 3,
    title: "Semana 3: Diseño Visual y Responsive con CSS3",
    period: "CSS Avanzado & Flexbox / Grid",
    summary: "Estilización adaptativa utilizando CSS3. Implementación de diseño responsivo usando Media Queries, Flexbox y Grid CSS.",
    extendedDescription: "La web debe verse increíble en cualquier dispositivo. Esta semana dominamos el arte del diseño responsivo. Utilizamos CSS Grid para maquetaciones bidimensionales complejas y Flexbox para alineaciones fluidas. Además, implementamos el diseño 'Mobile-First' y adoptamos variables CSS (Custom Properties) para crear un sistema de diseño escalable y soportar temas oscuros (Dark Mode).",
    achievements: [
      "Implementación maestra de Flexbox y CSS Grid.",
      "Uso de variables CSS para el manejo dinámico de temas.",
      "Diseño Mobile-First adaptativo 100% responsivo."
    ],
    tools: ["CSS3 Flexbox", "CSS Grid", "Media Queries", "Google Fonts"],
    deliverable: "Layout adaptable con soporte completo para smartphones, tablets y desktops.",
    codeSnippet: `:root {\n  --primary: #00f5ff;\n  --bg: #0a0a0a;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}`,
    icon: Layers,
    color: "#ff007f",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
    videoId: "yfoY53QXEnI",
    myNotes: "CSS Grid me voló la cabeza. Antes solo usaba Flexbox para todo, pero Grid me dio un control total sobre el layout en dos dimensiones. Las variables CSS también me cambiaron la vida.",
    myReflection: "Esta semana entendí que el diseño responsivo no es un extra, es una responsabilidad. Si tu web no funciona en celular, no sirve.",
    resources: [
      { name: "A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
      { name: "A Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
      { name: "Proyecto Semanal: Alfa Green", url: "https://github.com/Adat13/alfa-green" }
    ]
  },
  {
    number: 4,
    title: "Semana 4: JavaScript y Lógica Interactiva",
    period: "JavaScript Moderno (ES6+)",
    summary: "Programación en JavaScript nativo para agregar dinamismo e interacción con el usuario en el lado del cliente (DOM Manipulation).",
    extendedDescription: "¡Le dimos vida a nuestra web! Pasamos de lo estático a lo dinámico utilizando JavaScript moderno (ES6+). Aprendimos a seleccionar y manipular elementos del DOM, escuchar eventos complejos del usuario (scroll, clics, teclado) y manejar asincronía básica. La interactividad es lo que convierte una página web en una verdadera aplicación.",
    achievements: [
      "Manejo de variables modernas (let/const) y funciones de flecha (Arrow functions).",
      "Escucha y gestión de eventos avanzados en el DOM.",
      "Lógica condicional para menús desplegables y efectos al hacer scroll."
    ],
    tools: ["JavaScript ES6+", "DOM API", "EventListeners", "JSON"],
    deliverable: "Interactividad de menús desplegables y detector de scroll para navbar fijo con cambio de opacidad.",
    codeSnippet: `window.addEventListener('scroll', () => {\n  const nav = document.querySelector('nav');\n  if (window.scrollY > 50) {\n    nav.classList.add('scrolled');\n  } else {\n    nav.classList.remove('scrolled');\n  }\n});`,
    icon: Code,
    color: "#00ff66",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=800",
    videoId: "W6NZfCO5SIk",
    myNotes: "La manipulación del DOM se volvió mi juguete favorito. Ver cómo el scroll cambia la navbar en tiempo real fue muy satisfactorio. Los eventos son más potentes de lo que pensaba.",
    myReflection: "JavaScript le da vida a todo. Esta semana pasé de hacer páginas estáticas a crear experiencias reales de usuario. Fue un salto enorme.",
    resources: [
      { name: "JavaScript Info Tutorial", url: "https://javascript.info/" },
      { name: "MDN DOM Manipulation", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" },
      { name: "Proyecto Semanal: Uso de Canvas Web FIS", url: "https://github.com/Adat13/DESARROLLO-WEB-FIS" }
    ]
  },
  {
    number: 5,
    title: "Semana 5: Introducción a React & Componentes",
    period: "Ecosistema de Componentes SPA",
    summary: "Migración de páginas estáticas al framework React para una arquitectura modular, reutilizable y eficiente con Renderización Dinámica.",
    extendedDescription: "El gran salto hacia el desarrollo frontend moderno. Adoptamos React para convertir nuestro proyecto en una Single Page Application (SPA). Desglosamos la interfaz en componentes reutilizables, aprendimos la sintaxis JSX, y gestionamos el estado de la aplicación utilizando Hooks como \`useState\` y \`useEffect\`. El flujo de datos unidireccional (Props) cambió por completo nuestra forma de pensar.",
    achievements: [
      "Creación de componentes funcionales e interactivos en React con JSX.",
      "Uso de React Hooks fundamentales (useState, useEffect) para lógica de estado.",
      "Estructuración de un proyecto escalable utilizando Vite como empaquetador."
    ],
    tools: ["React 18+", "Vite", "JSX", "useState / useEffect", "Props"],
    deliverable: "Aplicación SPA modularizada en componentes funcionales reutilizables.",
    codeSnippet: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(c => c + 1)}>\n      Clics: {count}\n    </button>\n  );\n}`,
    icon: Cpu,
    color: "#ffaa00",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    videoId: "bMknfKXIFA8",
    myNotes: "Al principio JSX me confundía mucho, mezclar HTML con JavaScript se sentía raro. Pero después de entender el flujo de datos con Props y useState, todo empezó a tener sentido.",
    myReflection: "React cambió por completo mi forma de pensar el código. Ya no pienso en páginas, sino en componentes reutilizables. Es un antes y un después en mi aprendizaje.",
    resources: [
      { name: "React Official Docs", url: "https://react.dev/" },
      { name: "Vite JS Guide", url: "https://vitejs.dev/guide/" },
      { name: "Proyecto Semanal: Dashboard Chifa Richi", url: "https://github.com/Adat13/chifa-richi" }
    ]
  },
  {
    number: 6,
    title: "Semana 6: Animaciones Fluidas con Framer Motion",
    period: "Micro-interacciones y UI Animada",
    summary: "Estudio e implementación de animaciones avanzadas para mejorar la experiencia de usuario y dar vida a los componentes mediante físicas de resorte.",
    extendedDescription: "Una buena UI debe sentirse viva y responder al usuario de forma orgánica. Con la introducción de \`framer-motion\`, llevamos nuestras animaciones al siguiente nivel. Reemplazamos transiciones CSS rígidas por animaciones basadas en físicas de resortes (spring physics). Implementamos animaciones condicionadas al scroll (\`whileInView\`), efectos hover, y controlamos el montaje/desmontaje de componentes usando \`AnimatePresence\`.",
    achievements: [
      "Implementación de transiciones de entrada orquestadas (Stagger children).",
      "Configuración de micro-interacciones hover y tap con resortes.",
      "Uso de AnimatePresence para animar salidas de elementos del DOM de forma segura."
    ],
    tools: ["Framer Motion", "Spring Physics", "AnimatePresence", "Variants Keyframes"],
    deliverable: "Transiciones animadas en la entrada de tarjetas y menú, con efectos de suspensión interactivos.",
    codeSnippet: `<motion.div \n  initial={{ opacity: 0, y: 30 }} \n  whileInView={{ opacity: 1, y: 0 }} \n  viewport={{ once: true }}\n  transition={{ type: 'spring', stiffness: 100 }}\n>\n  Contenido Animado\n</motion.div>`,
    icon: Sparkles,
    color: "#00f5ff",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    videoId: "bMknfKXIFA8",
    myNotes: "Framer Motion me pareció increíble. Con pocas líneas de código logré animaciones que antes me hubieran tomado horas con CSS puro. El AnimatePresence es lo que más usé.",
    myReflection: "Las animaciones no son decoración, son comunicación. Una buena transición le dice al usuario que algo cambió sin necesidad de palabras.",
    resources: [
      { name: "Framer Motion Docs", url: "https://www.framer.com/motion/" },
      { name: "Spring Physics Explained", url: "https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/" },
      { name: "Proyecto Semanal: Web Orion", url: "https://github.com/Adat13/WebOrion" }
    ]
  },
  {
    number: 7,
    title: "Semana 7: Gráficos 3D en la Web",
    period: "Three.js & React Three Fiber",
    summary: "Creación de experiencias inmersivas 3D embebidas directamente en el navegador mediante WebGL, Three.js y React Three Fiber.",
    extendedDescription: "Rompimos la barrera del 2D. En esta semana, exploramos el poder de WebGL a través de \`Three.js\` y su contraparte de React, \`@react-three/fiber\`. Aprendimos sobre mallas (meshes), geometrías, materiales, luces y cámaras. Construimos entornos 3D interactivos, integramos modelos y programamos lógicas de renderizado frame por frame (\`useFrame\`), lo que nos permitió construir este mismo portafolio 3D interactivo en el que puedes conducir un auto.",
    achievements: [
      "Configuración de escenas 3D, cámaras y luces espaciales (Ambient, Point, Directional).",
      "Creación e instanciación de geometrías primitivas y personalizadas.",
      "Manejo del bucle de renderizado (render loop) y físicas básicas de colisión."
    ],
    tools: ["Three.js", "React Three Fiber", "@react-three/drei", "WebGL"],
    deliverable: "Escenario interactivo 3D navegable con cámara seguidora y físicas de vehículo básicas.",
    codeSnippet: `<Canvas camera={{ position: [0, 5, 10] }}>\n  <ambientLight intensity={0.8} />\n  <mesh>\n    <boxGeometry args={[1, 1, 1]} />\n    <meshStandardMaterial color="hotpink" />\n  </mesh>\n  <OrbitControls />\n</Canvas>`,
    icon: Cpu,
    color: "#7000ff",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    videoId: "xJAfLdUgdc4",
    myNotes: "Three.js fue lo más desafiante de todo el curso. Entender meshes, luces y la cámara me tomó bastante tiempo, pero cuando vi el auto moverse en 3D dentro del browser, valió cada minuto.",
    myReflection: "El 3D en la web es el futuro. Esta semana me demostró que el navegador puede hacer cosas que antes solo eran posibles en aplicaciones nativas o videojuegos.",
    resources: [
      { name: "React Three Fiber Docs", url: "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" },
      { name: "Three.js Fundamentals", url: "https://threejs.org/manual/" },
      { name: "Proyecto Semanal: Práctica 07", url: "https://github.com/Adat13/PRACTICA_07" }
    ]
  },
  {
    number: 8,
    title: "Semana 8: Integración Final y Portafolio",
    period: "Optimización y Deployment Listo",
    summary: "Fusión de todos los conceptos aprendidos en un portal consolidado y optimizado. Control de layouts y preparación para producción.",
    extendedDescription: "La recta final. Después de semanas de intenso aprendizaje, dedicamos esta fase a unir todas las piezas: HTML semántico, CSS responsivo, interactividad JS, React, animaciones Framer y 3D. Nos enfocamos en la arquitectura final del proyecto, optimización de assets, refactorización de código limpio, y la compilación de producción con Vite para garantizar tiempos de carga rápidos. Todo culminó en el despliegue del proyecto a la web.",
    achievements: [
      "Consolidación de componentes en una única SPA fluida.",
      "Optimización de bundles y manejo de assets estáticos (imágenes, fuentes).",
      "Ejecución de build de producción y despliegue final."
    ],
    tools: ["Vite Production Build", "Git Branches", "Performance Tuning", "Deployment"],
    deliverable: "Aplicación consolidada y optimizada para producción con carga de alto rendimiento y portafolio interactivo publicado.",
    codeSnippet: `# Construir para producción\nnpm run build\n\n# Previsualizar el build generado localmente\nnpm run preview\n\n# Desplegar a servidor (ej. Vercel, Netlify, GitHub Pages)`,
    icon: GitBranch,
    color: "#00ff66",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    videoId: "KCrXgy8qtjM",
    myNotes: "La semana final fue de unir todo. Optimizar el bundle, limpiar el código y hacer el deploy fue agotador pero muy satisfactorio. Ver la página en vivo fue el mejor premio.",
    myReflection: "Este curso me demostró que puedo aprender cualquier tecnología si la practico constantemente. Empecé sin saber qué era un componente y terminé con un portafolio 3D en producción.",
    resources: [
      { name: "Vite Deploying a Static Site", url: "https://vitejs.dev/guide/static-deploy.html" },
      { name: "Web Performance Best Practices", url: "https://web.dev/fast/" },
      { name: "Proyecto Semanal: Portafolio ADAT MARC", url: "https://github.com/Adat13/adat-marc-landing" }
    ]
  }
];

const teamMember = {
  name: "David Angel Toribio Anselmo",
  role: "Desarrollador Full Stack & UI/UX",
  bio: "Estudiante apasionado de la ingeniería de software y desarrollo web. Me especializo en crear interfaces web hermosas, dinámicas y altamente interactivas usando herramientas modernas como React, CSS avanzado, Framer Motion y gráficos web en 3D.",
  stats: [
    { label: "Proyectos Completados", value: "12+", icon: CheckCircle },
    { label: "Implementaciones", value: "10+", icon: Wrench },
    { label: "Innovación", value: "100%", icon: Sparkles },
    { label: "Clientes Estratégicos", value: "7+", icon: User }
  ],
  skills: [
    { name: "React / JavaScript (ES6+)", level: 92 },
    { name: "HTML5 / CSS3 (Flexbox & Grid)", level: 95 },
    { name: "Animaciones (Framer Motion)", level: 88 },
    { name: "Gráficos Web (Three.js / React Three Fiber)", level: 85 },
    { name: "Control de versiones (Git & GitHub)", level: 90 },
    { name: "Diseño Web Responsivo & UX/UI", level: 93 }
  ]
};

// Framer Motion Variants for Staggered list entries on Scroll
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const profileVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.1 }
  }
};

const TeamPortfolio = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [is3DMode, setIs3DMode] = useState(false);
  const [active3DWeek, setActive3DWeek] = useState(null);

  const handleSelectWeek = (week) => {
    setSelectedWeek(week);
    setTimeout(() => {
      const el = document.getElementById('week-details-anchor');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBackToGrid = () => {
    setSelectedWeek(null);
    setTimeout(() => {
      const el = document.getElementById('weeks-section-title');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const activeWeekData = is3DMode && active3DWeek ? weeksData[active3DWeek - 1] : selectedWeek;

  const renderWeekContent = (week) => {
    if (!week) return null;
    return (
      <div className="week-detail-grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Column: Text Info */}
        <div className="week-detail-info">
          <div className="week-detail-header">
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span className="badge" style={{ color: week.color, border: `1px solid ${week.color}`, background: `${week.color}11`, marginBottom: 0 }}>
                Semana {week.number}
              </span>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Flame size={14} style={{ color: week.color }} /> {is3DMode ? "Conduciendo en Estación" : "Módulo Completado"}
              </span>
            </div>
            <h2 className="week-detail-title text-gradient">{week.title}</h2>
            <span className="week-detail-period"><Calendar size={16} /> {week.period}</span>
          </div>

          <p className="week-detail-desc" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e0e0e0', marginBottom: '1rem' }}>
            {week.summary}
          </p>
          
          <p style={{ color: 'var(--text-dim)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '0.95rem' }}>
            {week.extendedDescription}
          </p>

          <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', padding: '1.2rem', borderRadius: '12px', marginBottom: '2rem' }}>
            <h5 style={{ color: '#fff', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <CheckCircle size={16} style={{ color: week.color }} /> Entregable Principal:
            </h5>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>{week.deliverable}</p>
          </div>

          <div className="week-achievements">
            <h4><Award size={18} style={{ color: week.color }} /> Puntos Clave Aprendidos:</h4>
            <ul>
              {week.achievements.map((achievement, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mis Apuntes y Reflexión */}
          {week.myNotes && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {/* Apuntes */}
              <div style={{
                background: `${week.color}0d`,
                border: `1px solid ${week.color}33`,
                borderLeft: `4px solid ${week.color}`,
                borderRadius: '12px',
                padding: '1.2rem',
              }}>
                <h5 style={{ color: week.color, fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={15} /> Mis Apuntes
                </h5>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                  {week.myNotes}
                </p>
              </div>

              {/* Reflexión */}
              <div style={{
                background: 'rgba(112, 0, 255, 0.07)',
                border: '1px solid rgba(112, 0, 255, 0.25)',
                borderLeft: '4px solid var(--secondary)',
                borderRadius: '12px',
                padding: '1.2rem',
              }}>
                <h5 style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Star size={15} /> Mi Reflexión
                </h5>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
                  "{week.myReflection}"
                </p>
              </div>
            </motion.div>
          )}

          <div style={{ marginTop: '2.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Wrench size={16} /> Stack & Herramientas:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {week.tools.map((tool, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    fontSize: '0.8rem', padding: '0.4rem 0.8rem', background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff',
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem'
                  }}
                >
                  <Star size={10} style={{ color: week.color }} /> {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Media, Video, Links, Code */}
        <div className="week-detail-media" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Main Cover Image */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: `0 10px 30px ${week.color}20` }}>
            <img src={week.image} alt={week.title} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '0.3rem 0.6rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#fff' }}>
              <ImageIcon size={14} style={{ color: week.color }}/> Visual
            </div>
          </div>

          {/* Code Snippet */}
          <div className="week-detail-code" style={{ margin: 0 }}>
            <div className="code-header">
              <span className="code-lang">Código Relevante de la Semana</span>
              <div className="code-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <pre className="code-body">
              <code>{week.codeSnippet}</code>
            </pre>
          </div>

          {/* Video Embed */}
          {week.videoId && (
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)', background: '#0a0d14' }}>
              <div style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--glass-border)', fontSize: '0.85rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Video size={16} style={{ color: '#ff0000' }} /> Material de Apoyo (Video)
              </div>
              <iframe 
                width="100%" 
                height="215" 
                src={`https://www.youtube-nocookie.com/embed/${week.videoId}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ display: 'block' }}
              ></iframe>
            </div>
          )}

          {/* External Resources */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '1.2rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link size={16} style={{ color: week.color }} /> Enlaces y Recursos Útiles
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {week.resources.map((res, i) => (
                <li key={i}>
                  <a href={res.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = week.color} onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}>
                    <ExternalLink size={14} /> {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    );
  };

  return (
    <section className="portfolio-section container">
      {/* Portada del Perfil con animación al Scroll */}
      <motion.div 
        className="profile-container glassmorphism"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={profileVariants}
      >
        <div className="profile-header">
          <div className="profile-avatar-wrapper">
            <motion.div 
              className="profile-avatar"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              style={{ padding: 0, overflow: 'hidden' }}
            >
              <img src={profilePic} alt="David" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <div className="avatar-glow"></div>
          </div>
          
          <div className="profile-info">
            <motion.span 
              className="badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Líder de Proyecto
            </motion.span>
            <h1 className="profile-name text-gradient">{teamMember.name}</h1>
            <p className="profile-role">{teamMember.role}</p>
            <p className="profile-bio">{teamMember.bio}</p>
          </div>
        </div>

        {/* Estadísticas Rápidas */}
        <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2.5rem' }}>
          {teamMember.stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div 
                key={idx} 
                className="stat-box" 
                style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                whileHover={{ scale: 1.05, y: -5, borderColor: 'var(--primary)' }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <StatIcon size={28} className="text-gradient" />
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', fontFamily: 'Outfit' }}>{stat.value}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Habilidades */}
        <div className="skills-section">
          <h3 className="section-title-sm"><Award size={20} /> Mis Habilidades Clave</h3>
          <div className="skills-grid">
            {teamMember.skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <motion.div 
                    className="skill-bar-fill" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bitácora de Clases Semanales */}
      <div className="weeks-section-container" id="week-details-anchor">
        <div className="section-header-centered" style={{ position: 'relative' }}>
          <span className="badge">Bitácora de Aprendizaje Interactiva</span>
          <h2 className="section-title" id="weeks-section-title">Semana a Semana <span className="text-gradient">del Curso</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Un recorrido completo con videos de apoyo, recursos externos, código clave y explicaciones detalladas de nuestro avance a lo largo del curso.
          </p>

          {/* Toggle View Mode Buttons */}
          <div style={{ display: 'inline-flex', gap: '0.5rem', background: '#0e111a', border: '1px solid var(--glass-border)', padding: '0.4rem', borderRadius: '12px', zIndex: 10 }}>
            <button 
              className={`btn ${!is3DMode ? 'btn-primary' : ''}`} 
              onClick={() => { setIs3DMode(false); setSelectedWeek(null); }}
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', borderRadius: '8px', boxShadow: !is3DMode ? '0 0 10px var(--primary-glow)' : 'none', color: !is3DMode ? '#fff' : '#8a9ab0' }}
            >
              Vista de Lista Extendida
            </button>
            <button 
              className={`btn ${is3DMode ? 'btn-primary' : ''}`} 
              onClick={() => { setIs3DMode(true); setSelectedWeek(null); }}
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', borderRadius: '8px', boxShadow: is3DMode ? '0 0 10px var(--primary-glow)' : 'none', color: is3DMode ? '#fff' : '#8a9ab0' }}
            >
              Portafolio Interactivo 3D
            </button>
          </div>
        </div>

        {is3DMode ? (
          // 3D Canvas driving portfolio mode
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            <Portfolio3D 
              weeks={weeksData} 
              activeWeek={active3DWeek} 
              onActiveWeekChange={setActive3DWeek} 
            />
            
            {/* 3D mode information reader panel */}
            <AnimatePresence mode="wait">
              {active3DWeek ? (
                <motion.div 
                  key={active3DWeek}
                  className="week-detail-page glassmorphism"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  style={{ borderTop: `5px solid ${weeksData[active3DWeek-1].color}` }}
                >
                  {renderWeekContent(weeksData[active3DWeek-1])}
                </motion.div>
              ) : (
                <motion.div 
                  className="glassmorphism"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px dashed var(--glass-border)' }}
                >
                  <Play size={40} className="pulse-icon" style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'inline-block' }} />
                  <h3>Modo Conducción Activo</h3>
                  <p style={{ color: 'var(--text-dim)', maxWidth: '450px', margin: '0.5rem auto 0' }}>
                    Utiliza las teclas de dirección del teclado para mover el carro azul sobre una plataforma de color. Al estacionarte, aparecerá toda la información y videos aquí.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Standard List/Grid View mode
          <AnimatePresence mode="wait">
            {selectedWeek === null ? (
              // Grid de Semanas con Scroll y Staggered Animations
              <motion.div 
                key="grid"
                className="weeks-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {weeksData.map((week) => {
                  const IconComponent = week.icon;
                  return (
                    <motion.div 
                      key={week.number}
                      className="week-card glassmorphism"
                      variants={cardVariants}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.03,
                        boxShadow: `0 12px 30px ${week.color}22`
                      }}
                      onClick={() => handleSelectWeek(week)}
                      style={{ borderTop: `4px solid ${week.color}`, overflow: 'hidden', padding: 0 }}
                    >
                      <div style={{ width: '100%', height: '120px', backgroundImage: `url(${week.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '1px solid var(--glass-border)', opacity: 0.8 }} />
                      
                      <div style={{ padding: '1.5rem' }}>
                        <div className="week-card-header">
                          <div className="week-badge" style={{ backgroundColor: `${week.color}15`, color: week.color, border: `1px solid ${week.color}33` }}>
                            Semana {week.number}
                          </div>
                          <IconComponent size={24} style={{ color: week.color }} />
                        </div>
                        <h3 className="week-card-title">{week.title.split(': ')[1]}</h3>
                        <p className="week-card-desc">{week.summary.substring(0, 100)}...</p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                          {week.tools.slice(0, 3).map((tool, idx) => (
                            <span key={idx} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', color: 'var(--text-dim)' }}>
                              {tool}
                            </span>
                          ))}
                        </div>

                        <button className="week-card-btn" style={{ color: week.color }}>
                          Leer reporte completo y ver videos <ChevronRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // Detalle de una semana específica
              <motion.div 
                key="detail"
                className="week-detail-page glassmorphism"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                style={{ borderTop: `5px solid ${selectedWeek.color}` }}
              >
                <motion.button 
                  className="back-btn" 
                  onClick={handleBackToGrid}
                  whileHover={{ scale: 1.05, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ marginBottom: '2rem' }}
                >
                  <ArrowLeft size={18} /> Volver a las semanas
                </motion.button>

                {renderWeekContent(selectedWeek)}
                
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default TeamPortfolio;
