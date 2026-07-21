import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../../167634689.jpeg';
import { 
  User, Code, Cpu, BookOpen, ChevronRight, Calendar, Award, 
  Terminal, Globe, Layers, ArrowLeft, ExternalLink, Sparkles, GitBranch,
  Wrench, CheckCircle, Flame, Star, Coffee, Code2, Play, Link, Video, Image as ImageIcon,
  Server, Database
} from 'lucide-react';
import Portfolio3D from './Portfolio3D';

// Custom SVG component for Github since the version of lucide-react lacks the export
const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={props.style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const weeksData = [
  {
    number: 1,
    title: "Semana 1: Fundamentos y Entorno de Desarrollo",
    period: "Semana de Introducción",
    summary: "Configuración del entorno de desarrollo moderno utilizando Node.js, npm y sistemas de control de versiones con Git.",
    extendedDescription: "En esta primera semana, nos sumergimos en las herramientas esenciales que todo desarrollador moderno debe dominar. Desde la configuración de un entorno de trabajo óptimo con VS Code, extensiones clave, hasta el manejo de terminales y la comprensión profunda de Git para el control de versiones. Aprendimos a crear repositorios, gestionar ramas (branches) y entender el flujo de trabajo colaborativo.",
    definitions: "Instalación de Node.js como entorno de ejecución JS y npm como gestor de dependencias. Configuración de Git para el control de versiones distribuido que rastrea cambios en código. Inicialización de repositorios locales y conexión remota con GitHub.",
    procedure: "1. Inicializar repositorio local con git init.\n2. Configurar usuario y email en git config.\n3. Agregar archivos al área de preparación con git add .\n4. Consolidar cambios usando git commit.\n5. Enlazar repositorio de GitHub y subir código mediante git push.",
    labExercises: "Creación y configuración del espacio de trabajo del proyecto base.",
    labResults: "Repositorio remoto en GitHub enlazado con la estructura básica de directorios del proyecto sincronizada.",
    myReflectionWhat: "Aprendí la importancia del control de versiones distribuido y la diferencia clave entre Git (herramienta local) y GitHub (plataforma en la nube).",
    myReflectionHow: "Lo aprendí ejecutando comandos en la consola, resolviendo conflictos de fusión de ramas y sincronizando repositorios paso a paso.",
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
    myNotes: "En esta primera semana de inmersión en la ingeniería de software moderna, comprendí que la consola y Git no son meras herramientas adicionales, sino la base indispensable para el control de versiones. Mis apuntes se centraron en:\n1. El Área de Preparación (Staging Area): Entendí que es un espacio intermedio antes de confirmar cambios, lo que permite seleccionar qué archivos formarán parte del commit de manera precisa.\n2. El árbol de Git (Working Directory, Index, HEAD): Me costó asimilar cómo viajan los archivos entre el directorio de trabajo local, el índice y el HEAD, pero tras realizar múltiples diagramas y comandos como git log --graph --all y git status, logré visualizar el flujo.\n3. El manejo de ramas: Aprendí que las ramas son punteros móviles a commits específicos, facilitando el desarrollo paralelo y limpio. Configuramos el proyecto inicial vinculando la rama remota main con nuestro origen local.",
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
    extendedDescription: "Dejamos atrás los clásicos 'divs' para todo y aprendimos a estructurar la web de forma semántica. Usando etiquetas como <header>, <main>, <article>, y <section>, logramos que nuestro código sea legible para buscadores y lectores de pantalla.",
    definitions: "HTML5 Semántico es la práctica de escribir marcado HTML que describe el significado del contenido en lugar de solo su apariencia. Elementos como main, article, section y header ayudan a los navegadores y robots de búsqueda a interpretar el sitio.",
    procedure: "1. Organizar el documento con <!DOCTYPE html> y etiqueta html.\n2. Estructurar el head con meta tags descriptivos y título.\n3. Segmentar el body con header, nav, main, sections jerárquicas (h1-h6) y footer.",
    labExercises: "Maquetación semántica estructurada de la web corporativa 'Pastelería Dulzemi'.",
    labResults: "Un sitio web funcional libre de divitis, que pasa las pruebas de validación de sintaxis W3C y optimización SEO.",
    myReflectionWhat: "Aprendí que el HTML semántico es vital para que los motores de búsqueda indexen correctamente mi web y para facilitar el uso de lectores de pantalla.",
    myReflectionHow: "Lo aprendí maquetando el proyecto 'Pastelería Dulzemi', validando el código con el validador oficial del W3C y probando la jerarquía de etiquetas.",
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
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    videoId: "pQN-pnXPaVg",
    myNotes: "La transición del HTML básico al HTML5 semántico supuso un cambio cualitativo en la forma de estructurar la información en la web. Anoté los siguientes puntos clave:\n1. Semántica frente a Estética: Las etiquetas semánticas (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>) no tienen un impacto visual inmediato por defecto, pero informan a los motores de búsqueda y lectores de pantalla sobre el propósito y la relevancia jerárquica del contenido.\n2. SEO On-Page: Investigamos la importancia de los metadatos dinámicos (<meta name='description'>, Open Graph, Twitter Cards) y las etiquetas del encabezado (<title>, favicon) para maximizar la indexación en buscadores.\n3. Validación W3C: El uso estricto del validador W3C nos permitió detectar etiquetas mal cerradas o anidamientos inválidos, asegurando la robustez en la maquetación de 'Pastelería Dulzemi'.",
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
    extendedDescription: "La web debe verse increíble en cualquier dispositivo. Esta semana dominamos el arte del diseño responsivo. Utilizamos CSS Grid para maquetaciones bidimensionales complejas y Flexbox para alineaciones fluidas y ordenamiento Mobile-First.",
    definitions: "Flexbox es un modelo de diseño unidireccional ideal para alinear elementos en fila o columna. CSS Grid es bidimensional, permitiendo alinear elementos en filas y columnas simultáneamente. Media Queries aplican estilos según el tamaño de la pantalla.",
    procedure: "1. Declarar variables globales en :root.\n2. Construir la estructura móvil básica (Mobile-First).\n3. Aplicar display: grid para la rejilla principal.\n4. Usar @media (min-width) para expandir y reorganizar el diseño en tablets y desktops.",
    labExercises: "Estilización y adaptabilidad del sitio ecológico 'Alfa Green'.",
    labResults: "Sitio web totalmente responsivo con transiciones de color mediante variables y adaptado a móviles sin desbordes.",
    myReflectionWhat: "Aprendí la diferencia práctica de usar CSS Grid para la plantilla general y Flexbox para la alineación de componentes internos del menú.",
    myReflectionHow: "Lo aprendí experimentando con propiedades de Grid, resolviendo desbordes horizontales y usando las herramientas de desarrollador en modo de simulación móvil.",
    achievements: [
      "Implementación maestra de Flexbox y CSS Grid.",
      "Uso de variables CSS para el manejo dinámico de temas.",
      "Diseño Mobile-First adaptativo 100% responsivo."
    ],
    tools: ["CSS3 Flexbox", "CSS Grid", "Media Queries", "Google Fonts"],
    deliverable: "Layout adaptable con soporte completo para smartphones, tablets and desktops.",
    codeSnippet: `:root {\n  --primary: #00f5ff;\n  --bg: #0a0a0a;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}`,
    icon: Layers,
    color: "#ff007f",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
    videoId: "yfoY53QXEnI",
    myNotes: "CSS3 avanzado nos permitió llevar el diseño semántico a una dimensión visual adaptable y profesional. Mis notas de esta sesión técnica cubren:\n1. Modelos de Caja Avanzados: La integración de Flexbox para la alineación unidireccional y de CSS Grid para maquetaciones bidimensionales complejas. Logré dominar las propiedades grid-template-columns y la función repeat(auto-fit, minmax()) para layouts automáticos.\n2. Variables CSS: Definición en la pseudoclase :root de variables para colores primarios, secundarios, fondos y fuentes, facilitando el mantenimiento y permitiendo transiciones de temas dinámicos.\n3. Mobile-First Design: En lugar de maquetar para pantallas grandes y 'encoger' el diseño, aplicamos media queries para construir desde pantallas de 320px hacia arriba, evitando problemas de desbordamiento horizontal.",
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
    extendedDescription: "Pasamos de páginas estáticas a dinámicas utilizando JavaScript moderno (ES6+). Aprendimos a seleccionar y manipular elementos del DOM, escuchar eventos del usuario (scroll, clics) y cambiar estilos en tiempo real.",
    definitions: "El DOM (Document Object Model) es una interfaz que representa el documento HTML como un árbol de nodos. JavaScript interactúa con él seleccionando nodos con querySelector y asignando acciones mediante EventListeners.",
    procedure: "1. Seleccionar elementos del header y del menú con querySelector.\n2. Escuchar el evento scroll de window.\n3. Añadir o remover clases CSS dinámicamente según window.scrollY para cambiar la opacidad de la barra.",
    labExercises: "Programación de lógica interactiva para menús dinámicos y detector de scroll en 'DESARROLLO-WEB-FIS'.",
    labResults: "Navbar dinámico que cambia de estilo al desplazarse y menú móvil interactivo que abre y cierra fluidamente.",
    myReflectionWhat: "Aprendí cómo conectar la lógica de eventos de JS con las clases CSS de transición para lograr animaciones nativas sin recurrir a librerías externas.",
    myReflectionHow: "Lo aprendí escribiendo funciones en JS, depurando estados con console.log y asociando escuchas de clics a botones de hamburguesa.",
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
    myNotes: "Con JavaScript nativo dotamos de interactividad lógica al cliente. Mis notas abarcan los siguientes conceptos fundamentales:\n1. El ciclo de eventos de JS: Aprendí cómo registrar escuchadores de eventos mediante .addEventListener() para capturar interacciones como scroll, clics y teclados.\n2. Manipulación dinámica del DOM: Métodos para añadir y remover clases CSS (classList.add/remove) y modificar estilos en tiempo real basándonos en variables de scroll (window.scrollY), logrando que la navbar sea fija y reduzca su opacidad al deslizar.\n3. Control de flujo y variables: Empleo de variables modernas de ámbito de bloque (let, const) y funciones flecha para escribir código lógico y mantenible.",
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
    extendedDescription: "El gran salto hacia el desarrollo frontend moderno. Adoptamos React para convertir nuestro proyecto en una SPA. Desglosamos la interfaz en componentes reutilizables, aprendimos JSX, y gestionamos el estado utilizando Hooks como useState y useEffect.",
    definitions: "Vite es un empaquetador ultrarrápido para aplicaciones web. React es una librería declarativa basada en componentes. JSX es una extensión de sintaxis que permite escribir marcado similar a HTML dentro de JavaScript. Los hooks controlan el estado y ciclo de vida.",
    procedure: "1. Configurar un nuevo proyecto React usando npx create-vite.\n2. Descomponer el maquetado en componentes reutilizables como Navbar, Sidebar, Card.\n3. Inicializar variables de estado con useState y sincronizar efectos de carga con useEffect.",
    labExercises: "Migración estructural y de estados interactivos de 'Chifa Richi' a React SPA.",
    labResults: "Panel de administración modularizado en componentes interactivos con actualización de estados en tiempo real sin recargas de página.",
    myReflectionWhat: "Aprendí a estructurar aplicaciones con el paradigma declarativo de React, pasando datos unidireccionalmente a través de props.",
    myReflectionHow: "Lo aprendí instalando dependencias con npm, configurando componentes funcionales y depurando el estado con las React Developer Tools.",
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
    myNotes: "Esta semana marcó la migración hacia React 18 y el desarrollo basado en componentes. Mis apuntes detallan:\n1. Paradigma Declarativo frente a Imperativo: En React, no modificamos directamente el DOM; en su lugar, declaramos cómo debería verse la UI en base al estado actual, y React se encarga de realizar la actualización eficiente de los nodos.\n2. Hooks de Estado y Efectos: El hook useState para declarar variables reactivas locales y useEffect para sincronizar efectos secundarios (como listeners globales o llamadas a APIs).\n3. Arquitectura modular con Vite: Configuración de rutas relativas y paso de información unidireccional estructurada mediante propiedades (Props) desde componentes contenedores hacia componentes de presentación.",
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
    extendedDescription: "Con la introducción de framer-motion, llevamos nuestras animaciones al siguiente nivel. Reemplazamos transiciones CSS por animaciones basadas en físicas de resortes (spring physics), animaciones condicionadas al scroll (whileInView) y AnimatePresence.",
    definitions: "Framer Motion es una librería de animación para React. Utiliza físicas de resortes en lugar de curvas de tiempo para lograr transiciones naturales. AnimatePresence permite animar componentes cuando se desmontan del árbol de React.",
    procedure: "1. Instalar framer-motion vía npm.\n2. Reemplazar elementos estándar por componentes motion (ej. motion.div).\n3. Configurar variantes de animación con estados inicial, animado y transiciones específicas.",
    labExercises: "Integración de micro-interacciones dinámicas y transiciones de carga en 'Web Orion'.",
    labResults: "Tarjetas y menús interactivos con animaciones fluidas basadas en resortes y orquestación de entrada escalonada.",
    myReflectionWhat: "Aprendí a usar la propiedad whileInView de Framer Motion para disparar animaciones controladas por el scroll del usuario de manera fluida.",
    myReflectionHow: "Lo aprendí implementando motion.div en cards, ajustando los valores de dureza (stiffness) y amortiguamiento (damping) para calibrar los resortes.",
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
    myNotes: "Las animaciones con Framer Motion transformaron la experiencia de usuario (UX) del portafolio. Mis apuntes se centran en:\n1. Física de resortes (Spring Physics): Entendí por qué las transiciones lineales tradicionales se sienten mecánicas. Framer Motion utiliza simulaciones físicas reales con propiedades de rigidez (stiffness) y amortiguamiento (damping).\n2. Orquestación de animaciones: Configuración de variantes (variants) para coordinar la entrada secuencial de elementos hijos (staggerChildren), logrando transiciones de carga suaves y sumamente estéticas.\n3. AnimatePresence: Montaje y desmontaje interactivo de componentes del DOM de manera fluida y animada.",
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
    extendedDescription: "Rompimos la barrera del 2D. Exploramos el poder de WebGL a través de Three.js y @react-three/fiber. Aprendimos sobre meshes, geometrías, materiales, luces y cámaras, desarrollando un portafolio interactivo 3D con un vehículo navegable.",
    definitions: "WebGL es una API de bajo nivel para renderizar gráficos 3D en el canvas HTML5. Three.js es una librería que simplifica WebGL. React Three Fiber es un reconciliador de React para Three.js que permite estructurar la escena en componentes.",
    procedure: "1. Configurar un Canvas 3D de R3F.\n2. Agregar luces direccionales y ambientales en el árbol de componentes.\n3. Instanciar geometrías primitivas y aplicar materiales.\n4. Implementar hook useFrame para actualizar posiciones y rotaciones de cámara frame a frame.",
    labExercises: "Maquetación e implementación de un minijuego 3D interactivo con físicas básicas de conducción en 'Práctica 07'.",
    labResults: "Entorno 3D interactivo renderizado a 60fps con cámara seguidora que permite al usuario estacionar sobre zonas activas.",
    myReflectionWhat: "Aprendí a integrar el motor 3D en la interfaz declarativa de React, vinculando las interacciones del teclado con las coordenadas espaciales del auto.",
    myReflectionHow: "Lo aprendí programando mallas personalizadas, depurando la posición de la cámara seguidora en el bucle useFrame y testeando controles.",
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
    myNotes: "El desarrollo en tres dimensiones (WebGL) mediante React Three Fiber fue la sesión más retadora del curso. Anoté los siguientes conceptos matemáticos y espaciales:\n1. Escena, Cámara y Luces: El funcionamiento de la escena WebGL, la configuración de la perspectiva de cámara y el balance de luces ambientales, direccionales y focales para lograr sombras realistas.\n2. Geometrías y Materiales: Creación de mallas (meshes) combinando geometrías (boxes, planes) con materiales estándar reactivos a la iluminación.\n3. Bucle de render (useFrame): Manipulación frame por frame de las posiciones y rotaciones de los modelos mediante el bucle de actualización, permitiendo programar la cámara seguidora que rastrea la posición de nuestro vehículo.",
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
    extendedDescription: "Dedicamos esta fase a unir todas las piezas: HTML semántico, CSS responsivo, interactividad JS, React, animaciones Framer y 3D, optimizando bundles y compilando para producción.",
    definitions: "La optimización de bundles consiste en reducir el tamaño de los scripts de JS generados. Vite compila y minifica usando Rollup. El deploy es el proceso de publicar los archivos de distribución en un hosting web.",
    procedure: "1. Ejecutar npm run build para empaquetar y minificar el código.\n2. Validar el rendimiento del bundle localmente con npm run preview.\n3. Configurar scripts de despliegue automatizados para publicar en GitHub Pages usando la dependencia gh-pages.",
    labExercises: "Consolidación general y despliegue del Portafolio ADAT MARC en la plataforma GitHub Pages.",
    labResults: "Portafolio electrónico unificado, responsivo y de alto rendimiento cargando correctamente desde un servidor público.",
    myReflectionWhat: "Aprendí el ciclo completo de empaquetado de software moderno y a solucionar problemas de rutas relativas para el alojamiento de recursos estáticos.",
    myReflectionHow: "Lo aprendí solucionando advertencias de tamaño de bundle en Vite y ejecutando el flujo de publicación con comandos de consola.",
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
    myNotes: "La etapa de cierre se centró en la optimización de código, compilación y despliegue final en producción. Mis apuntes finales destacan:\n1. Compilación y Minificación: La ejecución de npm run build para compilar y agrupar recursos reduciendo el tamaño del bundle generado mediante Vite.\n2. Configuración de rutas de alojamiento: Solución al problema de carga de recursos utilizando rutas relativas correctas para el servidor.\n3. Automatización del despliegue: Integración de scripts automáticos (gh-pages) para compilar y subir directamente la carpeta /dist/ al servidor remoto de GitHub en una sola línea de comandos.",
    myReflection: "Este curso me demostró que puedo aprender cualquier tecnología si la practico constantemente. Empecé sin saber qué era un componente y terminé con un portafolio 3D en producción.",
    resources: [
      { name: "Vite Deploying a Static Site", url: "https://vitejs.dev/guide/static-deploy.html" },
      { name: "Web Performance Best Practices", url: "https://web.dev/fast/" },
      { name: "Proyecto Semanal: Portafolio ADAT MARC", url: "https://github.com/Adat13/adat-marc-landing" }
    ]
  },
  {
    number: 9,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 9: Tecnología Web Backend",
    period: "Servidores Web & Server-Side (PHP / JSP)",
    summary: "Arquitectura de aplicaciones web, servidores web, funcionamiento del server side, lenguaje y framework backend. Desarrollo con PHP y JSP.",
    extendedDescription: "En esta novena semana iniciamos la Unidad II enfocada en el Desarrollo Web Fullstack. Exploramos la arquitectura cliente-servidor, los protocolos HTTP/HTTPS, servidores web como Apache y Nginx, y la ejecución de código en el lado del servidor. Comparamos el desarrollo backend tradicional con PHP y Java Server Pages (JSP) para entender cómo el servidor procesa peticiones HTTP y genera respuestas dinámicas antes de enviarlas al navegador cliente.",
    definitions: "La arquitectura backend abarca la lógica de negocio, procesamiento de datos y autenticación en el servidor. PHP (Hypertext Preprocessor) y JSP (JavaServer Pages) son tecnologías server-side que interpretan código y renderizan HTML dinámico directo en el servidor.",
    procedure: "1. Configurar un servidor web local (Apache XAMPP / Tomcat).\n2. Crear scripts PHP y JSP para procesar parámetros de solicitudes GET y POST.\n3. Implementar el renderizado dinámico de datos del lado del servidor.\n4. Probar y desplegar el backend en el entorno del servidor web.",
    labExercises: "Laboratorio 9: Despliegue de aplicaciones web backend PHP y JSP.",
    labResults: "Servidor web local configurado con despliegue exitoso de scripts dynamic server-side PHP y JSP procesando solicitudes de usuarios.",
    myReflectionWhat: "Aprendí la diferencia esencial entre la renderización en el cliente (CSR) y la renderización en el servidor (SSR), comprendiendo el flujo completo de la petición HTTP.",
    myReflectionHow: "Lo aprendí configurando un servidor web Apache local, escribiendo plantillas en PHP y JSP, y analizando las respuestas HTTP devueltas al navegador.",
    achievements: [
      "Comprensión profunda de la arquitectura web cliente-servidor y procesamiento server-side.",
      "Configuración y despliegue de servidores web Apache para aplicaciones backend.",
      "Desarrollo y pruebas de scripts en PHP y páginas JSP para renderizado dinámico."
    ],
    tools: ["PHP", "JSP", "Apache Web Server", "Server-Side Architecture", "HTTP Protocol"],
    deliverable: "Aplicaciones web backend desplegadas en PHP y JSP con procesamiento de formularios y peticiones HTTP.",
    codeSnippet: `<?php\n// Servidor PHP: Procesamiento Server-Side\nheader('Content-Type: application/json');\n$data = [\n  "status" => "success",\n  "unidad" => "Unidad II: Fullstack",\n  "week" => 9,\n  "technology" => "PHP Server-Side"\n];\necho json_encode($data);\n?>`,
    icon: Server,
    color: "#ff5722",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    videoId: "8JJ101D3knE",
    myNotes: "En el inicio de la Unidad II pasamos del cliente al servidor. Puntos fundamentales:\n1. Server-Side Execution: El navegador solo recibe HTML/CSS/JS final; el servidor procesa previamente los archivos PHP o JSP.\n2. Servidores Web: Configuración de Apache para manejar peticiones de clientes de manera concurrente.\n3. Protocolo HTTP: Encabezados de solicitud/respuesta (Status codes 200, 404, 500), métodos GET y POST.",
    myReflection: "Comprender la lógica backend me dio una perspectiva completa del ciclo de vida web. Ya no me limito a maquetar en el cliente; ahora entiendo cómo el servidor genera el contenido.",
    resources: [
      { name: "Documentación Oficial PHP", url: "https://www.php.net/manual/es/" },
      { name: "Guía de JavaServer Pages (JSP)", url: "https://docs.oracle.com/javaee/6/tutorial/doc/bnbjn.html" },
      { name: "Repositorio GitHub del Curso", url: "https://github.com/Adat13" }
    ]
  },
  {
    number: 10,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 10: Lenguaje Python",
    period: "Programación Backend en Python (POO & Módulos)",
    summary: "Introducción a Python, sintaxis básica, estructuras de datos (listas, tuplas, diccionarios), funciones, POO (encapsulamiento, herencia múltiple, polimorfismo), excepciones y módulos.",
    extendedDescription: "En la semana 10 profundizamos en el lenguaje Python como pilar moderno para el desarrollo backend y consumo de APIs. Exploramos su sintaxis limpia e indentación obligatoria, el manejo de estructuras de datos nativas (listas, tuplas, diccionarios), programación funcional e imperativa, e implementamos Programación Orientada a Objetos (POO) avanzada con clases, herencia múltiple, polimorfismo, manejo de excepciones y creación de módulos reutilizables.",
    definitions: "Python es un lenguaje interpretado, multiparadigma de alto nivel. La POO en Python permite abstraer entidades reales mediante clases, atributos e instancias, implementando herencia múltiple y polimorfismo dinámico.",
    procedure: "1. Instalar entorno Python 3.x y configurar entorno virtual (venv).\n2. Escribir scripts imperativos con listas, diccionarios y funciones avanzadas.\n3. Diseñar clases POO con constructores (__init__), métodos especiales y herencia múltiple.\n4. Implementar manejo de excepciones (try/except) y modularizar código en paquetes.",
    labExercises: "Laboratorio 10: Desarrollo de Aplicación con Python orientada a objetos.",
    labResults: "Aplicación estructurada modular en Python con soporte de POO, manejo de excepciones personalizadas y reutilización de código mediante módulos.",
    myReflectionWhat: "Aprendí la elegancia y potencia de Python para escribir código limpio, expresivo y con patrones de diseño Orientados a Objetos avanzados.",
    myReflectionHow: "Lo aprendí desarrollando scripts prácticos, definiendo jerarquías de clases con herencia múltiple y capturando excepciones en escenarios de prueba.",
    achievements: [
      "Dominio de sintaxis de Python, tipos de datos mutables e inmutables y estructuras de control.",
      "Implementación de Programación Orientada a Objetos: clases, herencia múltiple y polimorfismo.",
      "Manejo estructurado de excepciones, módulos y paquetes de código backend."
    ],
    tools: ["Python 3", "POO", "Virtualenv", "Módulos Python", "Control de Excepciones"],
    deliverable: "Aplicación en Python modularizada con clases POO, manejo de excepciones y estructura de paquetes.",
    codeSnippet: `class BackendService:\n    def __init__(self, name: str):\n        self.name = name\n    \n    def process_request(self) -> dict:\n        try:\n            return {"status": 200, "service": self.name}\n        except Exception as e:\n            return {"status": 500, "error": str(e)}`,
    icon: Code2,
    color: "#3776ab",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800",
    videoId: "rfscVS0vtbw",
    myNotes: "Python es increíblemente limpio y expresivo. Apuntes principales:\n1. Estructuras de datos: Listas [], Tuplas () inmutables, Diccionarios {} clave-valor.\n2. POO Avanzada: Métodos __init__, __str__, herencia directa y múltiple super(), y polimorfismo.\n3. Gestión de Errores: Bloques try-except-finally para construir sistemas backend resilientes.",
    myReflection: "Python me demostró que se puede escribir lógica compleja con muy pocas líneas de código pero alta legibilidad. Es una herramienta poderosa para cualquier desarrollador backend.",
    resources: [
      { name: "Documentación Oficial Python", url: "https://docs.python.org/es/3/" },
      { name: "Python Real Python Tutorials", url: "https://realpython.com/" },
      { name: "Proyecto Semanal / Repo", url: "https://github.com/Adat13" }
    ]
  },
  {
    number: 11,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 11: Introducción a Django",
    period: "Framework Web Backend & Arquitectura MTV / MVC",
    summary: "Patrones de arquitectura MVC y MTV en Django. Gestión de proyectos y URLs. Vistas basadas en funciones y en clases, plantillas y motor de modelos de base de datos.",
    extendedDescription: "Nos adentramos en Django, el framework web de alto nivel en Python. Comprendimos el patrón de arquitectura MTV (Model-Template-View) derivado del clásico MVC. Aprendimos a crear y gestionar proyectos de Django desde la línea de comandos, configurar enrutamiento de URLs, crear vistas basadas en funciones (FBV) y basadas en clases (CBV), utilizar el motor de plantillas con herencia y bloques, y definir el modelo de datos mediante el ORM de Django con sus tipos de campos y consultas (QuerySets).",
    definitions: "Django es un framework web fullstack en Python con filosofía 'batteries-included'. Utiliza la arquitectura MTV: Model (Capa de datos/ORM), Template (Capa de presentación HTML/JTL), y View (Lógica de control y respuesta HTTP).",
    procedure: "1. Crear proyecto Django con django-admin startproject y app con python manage.py startapp.\n2. Configurar URLs del proyecto y la aplicación (urls.py).\n3. Crear Vistas basadas en funciones (FBV) y clases (CBV) en views.py.\n4. Construir plantillas extendibles con herencia ({% extends %}) y bloques.\n5. Definir modelos de datos en models.py y ejecutar migraciones (makemigrations, migrate).",
    labExercises: "Laboratorio 11: Desarrollo de vistas, plantillas y modelos de datos con Django.",
    labResults: "Proyecto Django funcional con ORM de base de datos, migraciones ejecutadas, vistas configuradas y plantillas dinámicas con herencia HTML.",
    myReflectionWhat: "Aprendí a estructurar aplicaciones web completas aprovechando el ORM de Django y la potencia de la arquitectura MTV para desacoplar datos, vistas y plantillas.",
    myReflectionHow: "Lo aprendí ejecutando la CLI de Django, definiendo modelos con campos específicos (CharField, IntegerField, DateTimeField) y testeando la API de consultas de Django (QuerySet).",
    achievements: [
      "Dominio del patrón de arquitectura MTV (Model-Template-View) en Django.",
      "Creación y gestión de proyectos Django, configuraciones de URLs, FBV y CBV.",
      "Modelado de bases de datos mediante Django ORM, migraciones y ejecución de consultas QuerySet."
    ],
    tools: ["Django", "Python", "MTV Architecture", "Django ORM", "Template Engine"],
    deliverable: "Sistema web en Django con modelos ORM, migraciones aplicadas, vistas enrutadas y plantillas interactivas.",
    codeSnippet: `# Django models.py & views.py\nfrom django.db import models\nfrom django.shortcuts import render\n\nclass Project(models.Model):\n    title = models.CharField(max_length=200)\n    created_at = models.DateTimeField(auto_now_add=True)\n\ndef index(request):\n    projects = Project.objects.all()\n    return render(request, 'index.html', {'projects': projects})`,
    icon: Globe,
    color: "#092e20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    videoId: "F5mRW0jo-U4",
    myNotes: "Django acelera radicalmente el desarrollo backend. Mis apuntes de la arquitectura MTV:\n1. Patrón MTV: Model (datos), Template (interfaz), View (controlador/lógica).\n2. ORM de Django: No escribimos SQL directamente; definimos clases Python y Django genera las migraciones y las tablas en la BD.\n3. Motor de Plantillas: Tags como {% extends %}, {% block %}, {% for %}, e integración de filtros para la capa visual.",
    myReflection: "Django demuestra el valor de un framework robusto 'batteries-included'. Integrar modelos, vistas y plantillas de manera limpia acelera enormemente el desarrollo fullstack.",
    resources: [
      { name: "Documentación Oficial Django", url: "https://docs.djangoproject.com/es/5.0/" },
      { name: "Django Girls Tutorial", url: "https://tutorial.djangogirls.org/es/" },
      { name: "Proyecto Django / Repo", url: "https://github.com/Adat13" }
    ]
  },
  {
    number: 12,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 12: Gestión de formularios y validaciones",
    period: "Formularios en Django, Validación & Procesamiento",
    summary: "Creación y gestión de formularios en Django. Plantillas de formularios, validación de datos del lado servidor, tratamiento de errores y seguridad (CSRF).",
    extendedDescription: "En la semana 12 dominamos la creación y gestión de formularios interactivos y seguros en Django. Aprendimos a construir formularios vinculados a modelos (ModelForm) e independientes (Form), renderizarlos en plantillas con estilos personalizados, aplicar validaciones automáticas y personalizadas del lado del servidor, procesar solicitudes POST y proteger las peticiones contra ataques CSRF (Cross-Site Request Forgery).",
    definitions: "Los formularios de Django abstraen la generación de marcado HTML, la limpieza de datos recibidos y la validación estricta de tipos. El token CSRF previene peticiones malintencionadas de sitios de terceros.",
    procedure: "1. Definir clases de formulario heredando de forms.Form o forms.ModelForm.\n2. Renderizar el formulario en la plantilla utilizando el token {% csrf_token %}.\n3. Procesar el envío POST en la vista verificando form.is_valid().\n4. Guardar datos validados con form.save() o retornar mensajes de error específicos.",
    labExercises: "Laboratorio 12: Creación, validación y procesamiento de formularios interactivos seguros en Django.",
    labResults: "Formulario de captura de datos completamente funcional con validación automática, protección CSRF y almacenamiento seguro en la base de datos.",
    myReflectionWhat: "Aprendí a implementar flujos de entrada de usuario seguros con validación completa del lado servidor en Django, evitando vulnerabilidades y garantizando la integridad de la base de datos.",
    myReflectionHow: "Lo aprendí implementando campos de validación personalizados (clean_<field>), verificando token CSRF y testeando respuestas ante datos inválidos.",
    achievements: [
      "Creación de formularios seguros en Django (forms.Form y ModelForm).",
      "Implementación de reglas de validación personalizadas y manejo seguro del token CSRF.",
      "Procesamiento de peticiones POST y retroalimentación interactiva de errores al usuario."
    ],
    tools: ["Django Forms", "ModelForm", "CSRF Protection", "Server-Side Validation", "HTML5 Forms"],
    deliverable: "Módulo de formularios en Django con validación estricta, protección contra ataques CSRF y renderizado dinámico.",
    codeSnippet: `from django import forms\nfrom .models import Project\n\nclass ProjectForm(forms.ModelForm):\n    class Meta:\n        model = Project\n        fields = ['title']\n    \n    def clean_title(self):\n        title = self.cleaned_data.get('title')\n        if len(title) < 5:\n            raise forms.ValidationError("El título debe tener al menos 5 caracteres.")\n        return title`,
    icon: CheckCircle,
    color: "#44b78b",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    videoId: "F5mRW0jo-U4",
    myNotes: "La gestión de formularios es crucial para cualquier aplicación web real. Puntos clave:\n1. ModelForm: Generación automática de inputs a partir de la definición del modelo en la base de datos.\n2. Token CSRF: Inclusión indispensable de {% csrf_token %} dentro de cada formulario POST.\n3. Métodos clean(): Lógica de validación personalizada para asegurar datos limpios antes del guardado.",
    myReflection: "La validación del lado del servidor es indispensable. Nunca debemos confiar en los datos enviados desde el navegador, y Django hace que asegurarlos sea sumamente limpio y libre de errores.",
    resources: [
      { name: "Django Forms Documentation", url: "https://docs.djangoproject.com/en/5.0/topics/forms/" },
      { name: "Django ModelForms Guide", url: "https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/" },
      { name: "Proyecto Django / Repo", url: "https://github.com/Adat13" }
    ]
  },
  {
    number: 13,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 13: Autenticación y Autorización en Django",
    period: "Control de Acceso & Sesiones (django.contrib.auth)",
    summary: "Autenticación de usuarios en Django, permisos, grupos, control de acceso basado en roles (RBAC), sesiones y middleware de seguridad web.",
    extendedDescription: "En la semana 13 abordamos el control de acceso y seguridad web en Django. Aprendimos a gestionar usuarios nativos de Django (`django.contrib.auth`), crear vistas de login, logout y registro, aplicar decoradores de autenticación (`@login_required`), manejar permisos y grupos, gestionar cookies y sesiones, y asegurar la aplicación contra vulnerabilidades web comunes como XSS y Clickjacking.",
    definitions: "La autenticación verifica la identidad del usuario (¿Quién eres?). La autorización determina qué recursos y acciones tiene permitidas (¿Qué puedes hacer?). Las sesiones mantienen el estado entre peticiones HTTP.",
    procedure: "1. Configurar vistas de autenticación con django.contrib.auth.\n2. Crear formularios de registro y login extendiendo UserCreationForm.\n3. Aplicar decoradores @login_required y mixins de permisos en vistas CBV.\n4. Configurar middleware de seguridad y gestión de cookies/sesiones.",
    labExercises: "Laboratorio 13: Sistema de autenticación y control de accesos con usuarios y roles.",
    labResults: "Aplicación web Django con login, logout, registro seguro de usuarios y restricción de contenido según permisos de usuario.",
    myReflectionWhat: "Aprendí la importancia crucial de separar la autenticación de la autorización y a implementar sesiones seguras utilizando el middleware nativo de Django.",
    myReflectionHow: "Lo aprendí creando roles de usuario, protegiendo rutas con el decorador @login_required y simulando intentos de acceso no autorizados.",
    achievements: [
      "Implementación de autenticación de usuarios y registro con django.contrib.auth.",
      "Gestión de permisos de acceso basado en roles (RBAC) y protecciones de rutas con decoradores.",
      "Manejo de sesiones HTTP, cookies seguras y prevención de vulnerabilidades de seguridad."
    ],
    tools: ["Django Auth", "Sessions & Cookies", "RBAC", "Security Middleware", "User Management"],
    deliverable: "Módulo de autenticación y control de accesos seguro con vistas de registro, login y protección de rutas.",
    codeSnippet: `from django.contrib.auth.decorators import login_required\nfrom django.shortcuts import render\n\n@login_required\ndef dashboard_view(request):\n    user = request.user\n    return render(request, 'dashboard.html', {'user': user})`,
    icon: User,
    color: "#9c27b0",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    videoId: "F5mRW0jo-U4",
    myNotes: "El control de acceso es la piedra angular del backend seguro. Apuntes de la sesión:\n1. User model: Ampliación del modelo User con perfiles personalizados.\n2. RBAC: Asignación de grupos y permisos específicos por módulo.\n3. Cookies y Sesiones: Encriptación de sessionid en galletas HTTP-only.",
    myReflection: "Asegurar que cada recurso tenga los permisos correctos evita filtraciones de información y garantiza un entorno web confiable para los usuarios.",
    resources: [
      { name: "Django Authentication Docs", url: "https://docs.djangoproject.com/en/5.0/topics/auth/" },
      { name: "OWASP Web Security Guidelines", url: "https://owasp.org/www-project-top-ten/" },
      { name: "Proyecto Django Auth / Repo", url: "https://github.com/Adat13" }
    ]
  },
  {
    number: 14,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 14: APIs RESTful con Django REST Framework",
    period: "Web APIs & Serialización (DRF)",
    summary: "Principios de arquitecturas REST, instalación de Django REST Framework (DRF), serializadores, ModelSerializer, ViewSets y enrutadores para endpoints JSON.",
    extendedDescription: "En la semana 14 construimos servicios Web API basados en arquitectura RESTful utilizando Django REST Framework (DRF). Aprendimos los principios de diseño de APIs REST, métodos HTTP (GET, POST, PUT, DELETE), creación de serializadores (`ModelSerializer`) para transformar mallas de datos a JSON, vistas de API (`APIView`, `generics`, `ModelViewSet`) y generación automática de URLs con Routers.",
    definitions: "Una API RESTful es una interfaz que permite la comunicación entre sistemas independientes mediante recursos expuestos a través de URLs estándar y formatos como JSON. Los serializadores convierten objetos complejos de Django ORM a tipos de datos nativos de Python renderizables en JSON.",
    procedure: "1. Instalar djangorestframework y agregarlo a INSTALLED_APPS.\n2. Definir serializadores en serializers.py extendiendo ModelSerializer.\n3. Crear ViewSets o vistas genéricas APIView para exponer recursos CRUD.\n4. Configurar DefaultRouter para mapear URLs de la API automáticamente.",
    labExercises: "Laboratorio 14: Construcción de una API RESTful completa con endpoints CRUD en Django REST Framework.",
    labResults: "Servidor de API RESTful exponiendo recursos JSON con soporte completo de operaciones CRUD y documentación interactiva DRF.",
    myReflectionWhat: "Aprendí a estructurar endpoints de API legibles y estandarizados utilizando los ViewSets y Routers de Django REST Framework.",
    myReflectionHow: "Lo aprendí creando modelos en Django, redactando serializadores para validar cargas JSON y consumiendo la API interactiva con Postman y la consola de DRF.",
    achievements: [
      "Diseño de APIs RESTful siguiendo estándares HTTP y respuestas JSON estructuradas.",
      "Creación de serializadores con DRF para validación y transformación de datos ORM.",
      "Implementación de ViewSets y Routers para generación automática de rutas de API."
    ],
    tools: ["Django REST Framework", "JSON APIs", "Serializers", "ViewSets", "REST Architecture"],
    deliverable: "Servidor API RESTful funcional exponiendo endpoints CRUD probados y documentados en DRF.",
    codeSnippet: `from rest_framework import serializers, viewsets\nfrom .models import Project\n\nclass ProjectSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Project\n        fields = '__all__'\n\nclass ProjectViewSet(viewsets.ModelViewSet):\n    queryset = Project.objects.all()\n    serializer_class = ProjectSerializer`,
    icon: Cpu,
    color: "#e91e63",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    videoId: "F5mRW0jo-U4",
    myNotes: "Django REST Framework simplifica drásticamente la creación de APIs en Python. Puntos clave:\n1. Serializers: Validación de esquema JSON bidireccional (parseo e inyección a ORM).\n2. ViewSets: Consolidación de métodos CRUD en una sola clase limpia.\n3. Routers: Generación automática de patrones de URL enrutados (/api/v1/projects/).",
    myReflection: "La arquitectura decoupled con APIs REST libera al frontend de depender del renderizado server-side clásico, permitiendo que React consuma datos libremente.",
    resources: [
      { name: "Django REST Framework Docs", url: "https://www.django-rest-framework.org/" },
      { name: "REST API Design Best Practices", url: "https://restfulapi.net/" },
      { name: "Proyecto DRF / Repo", url: "https://github.com/Adat13" }
    ]
  },
  {
    number: 15,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 15: Integración Fullstack y Consumo de APIs",
    period: "Conexión Client-Server (React + Django API)",
    summary: "Consumo de APIs RESTful desde el frontend en React utilizando fetch/axios, gestión de CORS (Cross-Origin Resource Sharing), hooks asíncronos y estados globales.",
    extendedDescription: "En la semana 15 logramos la integración fullstack uniendo el frontend en React con el backend de Django REST Framework. Solucionamos políticas CORS (`django-cors-headers`), implementamos peticiones HTTP asíncronas con `fetch` y `axios` dentro de `useEffect`, manejamos estados de carga (loading, error, success) y estructuramos una arquitectura desacoplada cliente-servidor basada en microservicios.",
    definitions: "CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad del navegador que restringe las peticiones HTTP realizadas desde un dominio o puerto distinto al del servidor API. La integración fullstack conecta una SPA cliente con una API server-side.",
    procedure: "1. Configurar django-cors-headers en el backend Django.\n2. Implementar llamadas asíncronas con Fetch/Axios en componentes React.\n3. Gestionar estados reactivos de datos cargados y errores de conexión.\n4. Sincronizar acciones de UI con mutaciones POST/PUT/DELETE hacia el backend.",
    labExercises: "Laboratorio 15: Integración cliente-servidor conectando frontend React con backend Django REST API.",
    labResults: "Aplicación web Fullstack 100% integrada realizando consumo dinámico de APIs en tiempo real con persistencia en base de datos.",
    myReflectionWhat: "Aprendí a gestionar estados asíncronos y a controlar la experiencia de usuario (loaders, manejadores de error) durante el consumo de servicios web API.",
    myReflectionHow: "Lo aprendí conectando peticiones de Axios desde componentes React hacia endpoints de Django corriendo localmente y manejando cabeceras CORS.",
    achievements: [
      "Configuración de seguridad CORS y comunicación asíncrona cliente-servidor.",
      "Consumo de endpoints RESTful desde componentes React con llamadas Fetch/Axios.",
      "Gestión de estados asíncronos (cargando, éxito, error) en la interfaz de usuario."
    ],
    tools: ["React", "Django REST API", "Axios / Fetch", "CORS Headers", "Asynchronous JS"],
    deliverable: "Aplicación Fullstack conectada donde el cliente React consume y actualiza datos de la API backend Django.",
    codeSnippet: `import { useEffect, useState } from 'react';\nimport axios from 'axios';\n\nfunction ProjectList() {\n  const [data, setData] = useState([]);\n  useEffect(() => {\n    axios.get('http://127.0.0.1:8000/api/projects/')\n      .then(res => setData(res.data))\n      .catch(err => console.error(err));\n  }, []);\n  return <div>Proyectos consumidos desde API: {data.length}</div>;\n}`,
    icon: Globe,
    color: "#00bcd4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    videoId: "F5mRW0jo-U4",
    myNotes: "El momento cumbre del curso fue la conexión cliente-servidor. Puntos clave:\n1. Cabeceras CORS: Configuración de CORS_ALLOWED_ORIGINS en el backend.\n2. Axios Interceptors: Manejo centralizado de tokens de autorización Bearer/JWT.\n3. React Hooks Asíncronos: Despliegue de loaders y refresco de estado en UI tras cada mutación POST.",
    myReflection: "Ver al cliente React reaccionar dinámicamente con los datos procesados en la base de datos de Django fue una experiencia sumamente gratificante.",
    resources: [
      { name: "Axios HTTP Client Guide", url: "https://axios-http.com/docs/intro" },
      { name: "MDN CORS Explanation", url: "https://developer.mozilla.org/es/docs/Web/HTTP/CORS" },
      { name: "Proyecto Fullstack / Repo", url: "https://github.com/Adat13" }
    ]
  },
  {
    number: 16,
    unit: "Unidad II",
    unitTitle: "Unidad II: Desarrollo Web Fullstack",
    unitCapacity: "Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.",
    title: "Semana 16: Despliegue Fullstack en Producción y Portafolio Consolidado",
    period: "Deployment Cloud & Evaluación Final del Curso",
    summary: "Despliegue de aplicaciones fullstack en servidores cloud (Render, Vercel, Railway), variables de entorno, compilación de assets, pruebas finales y presentación del portafolio consolidado.",
    extendedDescription: "La semana 16 marcó la culminación exitosa del curso y de la Unidad II. Consolidados los conocimientos de frontend y backend, realizamos el proceso de empaquetado y despliegue en producción de la aplicación fullstack en servidores en la nube. Configuramos variables de entorno (`.env`), base de datos de producción (PostgreSQL/SQLite), servidor WSGI/ASGI (Gunicorn), políticas de seguridad y presentamos el portafolio educativo consolidado con todas las 16 semanas del semestre académico.",
    definitions: "El despliegue fullstack en producción implica trasladar el código cliente y servidor a infraestructura en la nube escalable y accesible públicamente mediante HTTPS, garantizando rendimiento, disponibilidad y seguridad.",
    procedure: "1. Configurar variables de entorno y base de datos de producción en settings.py.\n2. Empaquetar el frontend cliente y compilar assets estáticos con Vite.\n3. Configurar servidor WSGI (Gunicorn) y desplegar backend en la nube (Render/Railway).\n4. Conectar dominio público, verificar protocolos HTTPS y realizar pruebas de carga finales.",
    labExercises: "Laboratorio 16: Despliegue integral de la aplicación Fullstack y entrega final del portafolio educativo.",
    labResults: "Aplicación web Fullstack desplegada en servidores cloud en producción y portafolio consolidado publicado con 16 semanas de aprendizaje.",
    myReflectionWhat: "Aprendí el ciclo de vida completo de ingeniería de software web: desde la ideación del maquetado hasta el despliegue cloud de arquitecturas fullstack complejas.",
    myReflectionHow: "Lo aprendí empaquetando el backend Django con Gunicorn en Render, compilando el frontend React en Vercel/GitHub Pages y realizando auditorías de rendimiento Lighthouse.",
    achievements: [
      "Despliegue exitoso de backend Django y frontend React en infraestructura cloud.",
      "Manejo de variables de entorno, seguridad HTTPS y bases de datos de producción.",
      "Consolidación y presentación oficial del portafolio educativo del curso completo (Semanas 1 a 16)."
    ],
    tools: ["Render / Cloud Hosting", "Gunicorn", "PostgreSQL", "Environment Variables", "Fullstack Deployment"],
    deliverable: "Aplicación Fullstack publicada en producción con acceso público HTTPS y portafolio interactivo completado.",
    codeSnippet: `# Comandos de despliegue producción backend\npip install gunicorn dj-database-url\npython manage.py collectstatic --noinput\npython manage.py migrate\ngunicorn myproject.wsgi:application`,
    icon: Award,
    color: "#ff9800",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    videoId: "KCrXgy8qtjM",
    myNotes: "Cierre triunfal de las 16 semanas del curso. Puntos clave:\n1. Cloud Hosting: Despliegue independiente del servicio de API en Render/Railway y del sitio cliente en Vercel/GitHub Pages.\n2. Variables de entorno: Aislamiento estricto de credenciales (SECRET_KEY, DATABASE_URL) fuera del repositorio.\n3. Consolidación: Portafolio listo para el campo laboral.",
    myReflection: "Completar las 16 semanas de este curso me transformó en un desarrollador Full Stack con visión global, capaz de abordar desde la maquetación UI/UX hasta la arquitectura de servidor y despliegue cloud.",
    resources: [
      { name: "Render Deployment Guide for Django", url: "https://docs.render.com/deploy-django" },
      { name: "Vite Deployment Docs", url: "https://vitejs.dev/guide/static-deploy.html" },
      { name: "Portafolio ADAT MARC en GitHub", url: "https://github.com/Adat13/adat-marc-landing" }
    ]
  }
];

const teamMember = {
  name: "David Angel Toribio Anselmo",
  role: "Desarrollador Full Stack & UI/UX",
  bio: "Estudiante de Ingeniería de Sistemas apasionado por el desarrollo de software y la arquitectura web fullstack. Me especializo en crear aplicaciones web modernas, dinámicas y backend con consumo de APIs del lado servidor usando herramientas como Python, Django, React, Framer Motion y gráficos en 3D.",
  education: [
    { degree: "Estudiante de Ingeniería de Sistemas", institution: "Universidad Nacional del Centro del Perú (UNCP)", period: "2022 - Presente" },
    { degree: "Desarrollo Full Stack & Web 3D", institution: "Especialización Autónoma / Cursos en línea", period: "2024 - 2026" }
  ],
  experience: [
    { position: "Desarrollador Full Stack Freelance", company: "Proyectos Independientes", period: "2025 - Presente", desc: "Diseño y desarrollo de sitios web corporativos y backend con Python, Django, React, Vite y Three.js." },
    { position: "Desarrollador de Aplicaciones de Laboratorio", company: "Cátedra de Desarrollo Web UNCP", period: "2025", desc: "Implementación de dashboards, maquetaciones adaptativas Mobile-First, APIs backend y simulaciones 3D interactivas." }
  ],
  stats: [
    { label: "Proyectos Completados", value: "20+", icon: CheckCircle },
    { label: "Implementaciones", value: "16+", icon: Wrench },
    { label: "Innovación", value: "100%", icon: Sparkles },
    { label: "Clientes Estratégicos", value: "12+", icon: User }
  ],
  skills: [
    { name: "React / JavaScript (ES6+)", level: 92 },
    { name: "Python / Framework Django (MTV & ORM)", level: 90 },
    { name: "HTML5 / CSS3 (Flexbox & Grid)", level: 95 },
    { name: "APIs RESTful (Django REST Framework)", level: 88 },
    { name: "Desarrollo Web Backend (PHP / JSP / APIs)", level: 85 },
    { name: "Animaciones (Framer Motion)", level: 88 },
    { name: "Gráficos Web (Three.js / React Three Fiber)", level: 85 },
    { name: "Control de versiones (Git & GitHub)", level: 90 },
    { name: "Despliegue Cloud & Producción", level: 86 }
  ]
};

const projectsConcluidos = [
  {
    title: "Pastelería Dulzemi",
    description: "Sitio web de pastelería con maquetación semántica estructurada, metadatos optimizados para SEO y accesibilidad completa.",
    tools: ["HTML5", "SEO", "Semantic Markup"],
    link: "https://github.com/Adat13/Dulzemi",
    category: "Semana 2"
  },
  {
    title: "Alfa Green",
    description: "Plataforma web con diseño adaptable Mobile-First utilizando CSS Grid y Flexbox avanzado para un impacto visual moderno.",
    tools: ["CSS3 Flexbox", "CSS Grid", "Responsive Design"],
    link: "https://github.com/Adat13/alfa-green",
    deploy: "https://alfa-green.com/",
    category: "Semana 3"
  },
  {
    title: "DESARROLLO-WEB-FIS",
    description: "Laboratorio interactivo y manipulaciones avanzadas de DOM para el registro y gestión de datos académicos.",
    tools: ["JavaScript ES6+", "DOM Manipulation", "EventListeners"],
    link: "https://github.com/Adat13/DESARROLLO-WEB-FIS",
    category: "Semana 4"
  },
  {
    title: "Dashboard Chifa Richi",
    description: "Panel de administración interactivo desarrollado en React 18 con manejo de estados, componentes reutilizables y props dinámicas.",
    tools: ["React 18+", "Vite", "useState / useEffect"],
    link: "https://github.com/Adat13/chifa-richi",
    deploy: "https://chifa-richi.adat-marc.com/",
    category: "Semana 5"
  },
  {
    title: "Web Orion",
    description: "Portal moderno con micro-interacciones suaves y animaciones de física de resorte mediante Framer Motion.",
    tools: ["Framer Motion", "Spring Physics", "React"],
    link: "https://github.com/Adat13/WebOrion",
    deploy: "https://orionelite.edu.pe/",
    category: "Semana 6"
  },
  {
    title: "Auto 3D Simulator (Práctica 07)",
    description: "Entorno interactivo 3D con físicas básicas de conducción de un vehículo, iluminación de alta gama y WebGL.",
    tools: ["Three.js", "React Three Fiber", "@react-three/drei"],
    link: "https://github.com/Adat13/PRACTICA_07",
    deploy: "https://adat13.github.io/PRACTICA_07/",
    category: "Semana 7"
  },
  {
    title: "Portafolio ADAT MARC",
    description: "Este mismo portafolio integrado con la landing page de ADAT MARC, optimizado para alto rendimiento y desplegado en GitHub Pages.",
    tools: ["Vite Build", "React", "Deployment"],
    link: "https://github.com/Adat13/adat-marc-landing",
    deploy: "https://adat-marc.com/",
    category: "Semana 8"
  },
  {
    title: "Despliegue Backend PHP & JSP",
    description: "Configuración de servidor web Apache y procesamiento dinámico del lado servidor con scripts PHP y Java Server Pages.",
    tools: ["PHP", "JSP", "Apache", "Server-Side"],
    link: "https://github.com/Adat13",
    category: "Semana 9"
  },
  {
    title: "Aplicación POO Python",
    description: "Desarrollo de aplicación modular en Python 3 con Programación Orientada a Objetos, herencia múltiple, polimorfismo y manejo de excepciones.",
    tools: ["Python 3", "POO", "Virtualenv", "Módulos"],
    link: "https://github.com/Adat13",
    category: "Semana 10"
  },
  {
    title: "Portal Web Django MTV",
    description: "Arquitectura web con Django framework utilizando el patrón MTV (Model-Template-View), vistas CBV/FBV y Django ORM para bases de datos.",
    tools: ["Django", "Python", "MTV Pattern", "Django ORM"],
    link: "https://github.com/Adat13",
    category: "Semana 11"
  },
  {
    title: "Formularios Seguros Django",
    description: "Creación y validación de formularios server-side en Django con ModelForm, filtros de saneamiento y protección contra vulnerabilidades CSRF.",
    tools: ["Django Forms", "ModelForm", "CSRF", "Validation"],
    link: "https://github.com/Adat13",
    category: "Semana 12"
  },
  {
    title: "Sistema Autenticación & Roles Django",
    description: "Control de acceso seguro con autenticación de usuarios (django.contrib.auth), protección de rutas por roles, gestión de sesiones y cookies.",
    tools: ["Django Auth", "RBAC", "Sessions", "Security"],
    link: "https://github.com/Adat13",
    category: "Semana 13"
  },
  {
    title: "API RESTful Django REST Framework",
    description: "Construcción de servicios API Web con DRF exponiendo endpoints JSON con serializadores, ViewSets y Routers para operaciones CRUD.",
    tools: ["Django REST Framework", "JSON APIs", "Serializers", "ViewSets"],
    link: "https://github.com/Adat13",
    category: "Semana 14"
  },
  {
    title: "Integración Fullstack React + Django API",
    description: "Consumo de API RESTful desde el frontend React con Fetch/Axios, resolución de políticas CORS y manejo de estados asíncronos.",
    tools: ["React", "Django REST API", "Axios", "CORS"],
    link: "https://github.com/Adat13",
    category: "Semana 15"
  },
  {
    title: "Despliegue Cloud Fullstack & Portafolio",
    description: "Despliegue integral en producción en servidores cloud (Render/Vercel) con variables de entorno, servidor WSGI Gunicorn y entrega final del portafolio.",
    tools: ["Cloud Hosting", "Gunicorn", "PostgreSQL", "Deployment"],
    link: "https://github.com/Adat13/adat-marc-landing",
    deploy: "https://adat13.github.io/adat-marc-landing/",
    category: "Semana 16"
  }
];


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
  const [selectedUnit, setSelectedUnit] = useState('ALL');

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

          <p className="week-detail-desc" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e0e0e0', marginBottom: '1.5rem' }}>
            {week.summary}
          </p>
          
          <p style={{ color: 'var(--text-dim)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '0.95rem' }}>
            {week.extendedDescription}
          </p>

          {/* 1. Temas Aprendidos (Definiciones) */}
          <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
            <h4 style={{ color: week.color, fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <BookOpen size={18} /> Temas Aprendidos (Definiciones)
            </h4>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
              {week.definitions}
            </p>
          </div>

          {/* 2. Procedimiento Realizado */}
          <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <Wrench size={18} style={{ color: week.color }} /> Procedimiento Realizado
            </h4>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-line' }}>
              {week.procedure}
            </p>
          </div>

          {/* 3. Ejercicios de Laboratorio y Resultados */}
          <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '16px', marginBottom: '2rem' }}>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <CheckCircle size={18} style={{ color: week.color }} /> Ejercicio de Laboratorio y Resultados
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0, fontWeight: 700 }}>
                Ejercicio: <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>{week.labExercises}</span>
              </p>
              <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0, fontWeight: 700 }}>
                Resultado: <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>{week.labResults}</span>
              </p>
              <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0, fontWeight: 700 }}>
                Entregable: <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>{week.deliverable}</span>
              </p>
            </div>
          </div>

          {/* 4. Puntos Clave Aprendidos */}
          <div className="week-achievements" style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.05rem' }}><Award size={18} style={{ color: week.color }} /> Hitos de Aprendizaje:</h4>
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

          {/* 5. Reflexión Académica Metacognitiva */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
            {/* ¿Qué aprendió? */}
            <div style={{ background: 'rgba(0, 245, 255, 0.03)', border: '1px solid rgba(0, 245, 255, 0.1)', borderLeft: `4px solid var(--primary)`, padding: '1.2rem', borderRadius: '12px' }}>
              <h5 style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Star size={15} /> ¿Qué aprendió?
              </h5>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                {week.myReflectionWhat}
              </p>
            </div>
            {/* ¿Cómo aprendió? */}
            <div style={{ background: 'rgba(112, 0, 255, 0.03)', border: '1px solid rgba(112, 0, 255, 0.1)', borderLeft: `4px solid var(--secondary)`, padding: '1.2rem', borderRadius: '12px' }}>
              <h5 style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Coffee size={15} /> ¿Cómo aprendió?
              </h5>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                {week.myReflectionHow}
              </p>
            </div>
          </div>

          {/* 6. Apuntes y Notas Personales */}
          {week.myNotes && (
            <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '16px', marginBottom: '2rem' }}>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <Terminal size={18} style={{ color: week.color }} /> Mis Apuntes y Notas Personales
              </h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-line' }}>
                {week.myNotes}
              </p>
            </div>
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
            <div style={{ marginTop: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a 
                href="https://github.com/Adat13" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--primary)', 
                  textDecoration: 'none', 
                  fontSize: '0.85rem', 
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  background: 'rgba(0, 245, 255, 0.05)',
                  border: '1px solid rgba(0, 245, 255, 0.2)',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease'
                }}
                className="github-profile-link"
              >
                <Github size={16} /> GitHub Profile
              </a>
            </div>
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

        {/* Estudios y Experiencia */}
        <div className="education-experience-section" style={{ marginTop: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            
            {/* Column 1: Educación */}
            <div>
              <h3 className="section-title-sm" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} style={{ color: 'var(--primary)' }} /> Estudios y Educación
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {teamMember.education.map((edu, idx) => (
                  <div key={idx} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(0, 245, 255, 0.2)' }}>
                    <div style={{ position: 'absolute', left: '-5px', top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>{edu.period}</span>
                    <h5 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, margin: '0.2rem 0' }}>{edu.degree}</h5>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', margin: 0 }}>{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Experiencia */}
            <div>
              <h3 className="section-title-sm" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Wrench size={20} style={{ color: 'var(--secondary)' }} /> Experiencia y Práctica
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {teamMember.experience.map((exp, idx) => (
                  <div key={idx} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(112, 0, 255, 0.2)' }}>
                    <div style={{ position: 'absolute', left: '-5px', top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700 }}>{exp.period}</span>
                    <h5 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, margin: '0.2rem 0' }}>{exp.position}</h5>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>{exp.company}</p>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Proyectos Concluidos */}
      <div className="projects-concluidos-section" style={{ marginTop: '6rem', marginBottom: '6rem' }}>
        <div className="section-header-centered">
          <span className="badge">Proyectos Concluidos</span>
          <h2 className="section-title">Portafolio de <span className="text-gradient">Aplicaciones Reales</span></h2>
          <p className="section-subtitle">
            Proyectos funcionales desarrollados a lo largo de las sesiones del curso, aplicando maquetación responsiva, lógica dinámica y entornos 3D.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {projectsConcluidos.map((project, idx) => (
            <motion.div 
              key={idx}
              className="week-card glassmorphism"
              whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(0, 245, 255, 0.3)' }}
              transition={{ type: "spring", stiffness: 150 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.8rem', borderTop: '4px solid var(--primary)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge" style={{ margin: 0, padding: '0.2rem 0.6rem', fontSize: '0.75rem', background: 'rgba(0,245,255,0.1)', color: 'var(--primary)', border: '1px solid rgba(0,245,255,0.2)' }}>
                  {project.category}
                </span>
                <Code2 size={20} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.8rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {project.tools.map((tool, tIdx) => (
                  <span key={tIdx} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '4px', color: 'var(--text-dim)' }}>
                    {tool}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', width: '100%', marginTop: 'auto' }}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-light d-flex align-items-center justify-content-center gap-2"
                  style={{ flex: 1, fontSize: '0.8rem', padding: '0.5rem 0.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)', whiteSpace: 'nowrap' }}
                >
                  <Github size={14} /> Repositorio
                </a>
                {project.deploy && (
                  project.title.includes("Auto 3D Simulator") ? (
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setIs3DMode(true);
                        setSelectedWeek(null);
                        setTimeout(() => {
                          const el = document.getElementById('week-details-anchor');
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                      }}
                      className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                      style={{ flex: 1, fontSize: '0.8rem', padding: '0.5rem 0.5rem', borderRadius: '8px', background: 'var(--accent-gradient)', border: 'none', color: '#fff', boxShadow: '0 2px 8px var(--primary-glow)', whiteSpace: 'nowrap' }}
                    >
                      <Globe size={14} /> Probar 3D
                    </button>
                  ) : (
                    <a 
                      href={project.deploy} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                      style={{ flex: 1, fontSize: '0.8rem', padding: '0.5rem 0.5rem', borderRadius: '8px', background: 'var(--accent-gradient)', border: 'none', color: '#fff', boxShadow: '0 2px 8px var(--primary-glow)', whiteSpace: 'nowrap' }}
                    >
                      <Globe size={14} /> Sitio Web
                    </a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bitácora de Clases Semanales */}
      <div className="weeks-section-container" id="week-details-anchor">
        <div className="section-header-centered" style={{ position: 'relative' }}>
          <span className="badge">Bitácora de Aprendizaje Interactiva</span>
          <h2 className="section-title" id="weeks-section-title">Semana a Semana <span className="text-gradient">del Curso</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Un recorrido completo con videos de apoyo, recursos externos, código clave y explicaciones detalladas de nuestro avance a lo largo del curso.
          </p>

          {/* Toggle View Mode Buttons */}
          <div style={{ display: 'inline-flex', gap: '0.5rem', background: '#0e111a', border: '1px solid var(--glass-border)', padding: '0.4rem', borderRadius: '12px', zIndex: 10, marginBottom: '1.5rem' }}>
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

          {/* Unit Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <button 
              onClick={() => setSelectedUnit('ALL')}
              style={{
                padding: '0.5rem 1.2rem', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer',
                background: selectedUnit === 'ALL' ? 'var(--primary)' : 'rgba(255,255,255,0.04)',
                color: selectedUnit === 'ALL' ? '#0a0d14' : '#8a9ab0',
                border: selectedUnit === 'ALL' ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                transition: 'all 0.2s'
              }}
            >
              Todas las Semanas (1 - 16)
            </button>
            <button 
              onClick={() => setSelectedUnit('Unidad I')}
              style={{
                padding: '0.5rem 1.2rem', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer',
                background: selectedUnit === 'Unidad I' ? '#00f5ff' : 'rgba(255,255,255,0.04)',
                color: selectedUnit === 'Unidad I' ? '#0a0d14' : '#8a9ab0',
                border: selectedUnit === 'Unidad I' ? '1px solid #00f5ff' : '1px solid var(--glass-border)',
                transition: 'all 0.2s'
              }}
            >
              Unidad I: Frontend (Sem 1-8)
            </button>
            <button 
              onClick={() => setSelectedUnit('Unidad II')}
              style={{
                padding: '0.5rem 1.2rem', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer',
                background: selectedUnit === 'Unidad II' ? '#ff5722' : 'rgba(255,255,255,0.04)',
                color: selectedUnit === 'Unidad II' ? '#fff' : '#8a9ab0',
                border: selectedUnit === 'Unidad II' ? '1px solid #ff5722' : '1px solid var(--glass-border)',
                transition: 'all 0.2s'
              }}
            >
              Unidad II: Fullstack (Sem 9-16)
            </button>
          </div>

          {/* Unit Capacity Banner */}
          <AnimatePresence mode="wait">
            {selectedUnit !== 'ALL' && (
              <motion.div 
                key={selectedUnit}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ 
                  background: selectedUnit === 'Unidad II' ? 'rgba(255, 87, 34, 0.08)' : 'rgba(0, 245, 255, 0.08)',
                  border: `1px solid ${selectedUnit === 'Unidad II' ? '#ff5722' : '#00f5ff'}55`,
                  borderRadius: '16px', padding: '1.2rem 1.8rem', textAlign: 'left',
                  maxWidth: '900px', margin: '0 auto 2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <span className="badge" style={{ backgroundColor: selectedUnit === 'Unidad II' ? '#ff5722' : '#00f5ff', color: selectedUnit === 'Unidad II' ? '#fff' : '#000', fontWeight: 800, margin: 0 }}>
                    {selectedUnit === 'Unidad II' ? 'UNIDAD II' : 'UNIDAD I'}
                  </span>
                  <h4 style={{ color: selectedUnit === 'Unidad II' ? '#ff5722' : '#00f5ff', margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
                    {selectedUnit === 'Unidad II' ? 'Desarrollo web fullstack' : 'Desarrollo web frontend'}
                  </h4>
                </div>
                <p style={{ margin: 0, color: '#e0e0e0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <strong>Capacidad:</strong> {selectedUnit === 'Unidad II' 
                    ? 'Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estándares internacionales.'
                    : 'Desarrollar aplicaciones web frontend interactivas, responsivas y 3D utilizando estándares modernos HTML5, CSS3, JavaScript, React y WebGL.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
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
              weeks={weeksData.filter(w => selectedUnit === 'ALL' || (w.unit || "Unidad I") === selectedUnit)} 
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
                {weeksData.filter(w => selectedUnit === 'ALL' || (w.unit || "Unidad I") === selectedUnit).map((week) => {
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
                          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                            <div className="week-badge" style={{ backgroundColor: `${week.color}15`, color: week.color, border: `1px solid ${week.color}33` }}>
                              Semana {week.number}
                            </div>
                            <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem', borderRadius: '4px', background: week.unit === 'Unidad II' ? 'rgba(255, 87, 34, 0.15)' : 'rgba(0, 245, 255, 0.15)', color: week.unit === 'Unidad II' ? '#ff7043' : '#00f5ff', border: `1px solid ${week.unit === 'Unidad II' ? '#ff5722' : '#00f5ff'}33`, fontWeight: 700 }}>
                              {week.unit || "Unidad I"}
                            </span>
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

      {/* Reflexión Final */}
      <div className="reflexion-final-section" style={{ marginTop: '8rem', borderTop: '1px solid var(--glass-border)', paddingTop: '5rem' }}>
        <div className="section-header-centered">
          <span className="badge">Meta-evaluación Semestral</span>
          <h2 className="section-title">Reflexión Final del Curso <span className="text-gradient">(Semana 16)</span></h2>
          <p className="section-subtitle">
            Un análisis metacognitivo integral sobre el progreso personal, la evolución técnica y la consolidación de conocimientos a lo largo de las 16 semanas del curso.
          </p>
        </div>

        <div className="glassmorphism" style={{ padding: '3rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '200px', height: '200px', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)', opacity: 0.5, pointerEvents: 'none' }}></div>
          
          <div className="reflexion-grid">
            <div>
              <p style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, lineHeight: '1.7', marginBottom: '1.5rem' }}>
                "El desarrollo web moderno no se limita a maquetar el cliente o construir una base de datos aislada, sino a orquestar arquitecturas fullstack seguras, dinámicas y orientadas al usuario."
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                A lo largo de las 16 semanas del curso, transitamos por una curva de aprendizaje integral dividida en dos grandes pilares. En la <strong>Unidad I (Semanas 1-8)</strong>, dominamos las bases del frontend moderno: control de versiones con Git/GitHub, HTML5 semántico, CSS3 responsivo Mobile-First, interactividad nativa con JavaScript ES6+, la arquitectura SPA modular con React 18, animaciones fluidas con Framer Motion y experiencias inmersivas 3D con Three.js.
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
                Posteriormente, en la <strong>Unidad II (Semanas 9-16)</strong>, cerramos el ciclo convirtiéndonos en desarrolladores Fullstack. Exploramos la ejecución server-side con PHP y JSP, nos adentramos en la elegancia de Python y la arquitectura MTV de Django, implementamos formularios y validaciones avanzadas, diseñamos sistemas de autenticación y permisos con RBAC, construimos servicios API RESTful con Django REST Framework y logramos la integración total del cliente React con el servidor en producción cloud.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(0, 245, 255, 0.03)', border: '1px solid rgba(0, 245, 255, 0.1)', borderLeft: '4px solid var(--primary)', padding: '1.5rem', borderRadius: '16px' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={16} /> ¿Qué aprendió?
                </h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Aprendí la arquitectura limpia Fullstack (Frontend SPA en React + Backend API RESTful en Django), gestión de bases de datos ORM, seguridad con autenticación JWT/Session, políticas CORS y despliegue cloud en producción.
                </p>
              </div>

              <div style={{ background: 'rgba(112, 0, 255, 0.03)', border: '1px solid rgba(112, 0, 255, 0.1)', borderLeft: '4px solid var(--secondary)', padding: '1.5rem', borderRadius: '16px' }}>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Coffee size={16} /> ¿Cómo aprendió?
                </h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Mi aprendizaje se basó 100% en la práctica guiada semana a semana con 16 laboratorios reales, creando entregables desde sitios web estáticos hasta sistemas fullstack autenticados desplegados en servidores web y alojados en GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bibliografía */}
      <div className="bibliografia-section" style={{ marginTop: '6rem', marginBottom: '2rem' }}>
        <div className="section-header-centered">
          <span className="badge">Fuentes Académicas</span>
          <h2 className="section-title">Referencias y <span className="text-gradient">Bibliografía</span></h2>
          <p className="section-subtitle">
            Libros de texto, especificaciones estándar y guías oficiales utilizadas en la investigación y desarrollo de los proyectos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Libros */}
          <div className="week-card glassmorphism" style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} style={{ color: 'var(--primary)' }} /> Libros Clave de Referencia
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.8rem' }}>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>HTML and CSS: Design and Build Websites</p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', margin: 0 }}>Duckett, J. (2011). John Wiley & Sons.</p>
              </li>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.8rem' }}>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>Eloquent JavaScript: A Modern Introduction</p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', margin: 0 }}>Haverbeke, M. (2018). No Starch Press (3rd ed).</p>
              </li>
              <li>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>JavaScript: The Definitive Guide</p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', margin: 0 }}>Flanagan, D. (2020). O'Reilly Media (7th ed).</p>
              </li>
            </ul>
          </div>

          {/* Documentaciones */}
          <div className="week-card glassmorphism" style={{ padding: '2rem', borderTop: '4px solid var(--secondary)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={18} style={{ color: 'var(--secondary)' }} /> Documentaciones y Sitios Oficiales
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.8rem' }}>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>MDN Web Docs</p>
                <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  https://developer.mozilla.org <ExternalLink size={12} />
                </a>
              </li>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.8rem' }}>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>React Documentation</p>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  https://react.dev <ExternalLink size={12} />
                </a>
              </li>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.8rem' }}>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>Python 3.x Documentation</p>
                <a href="https://docs.python.org/es/3/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  https://docs.python.org/es/3/ <ExternalLink size={12} />
                </a>
              </li>
              <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.8rem' }}>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>Django Web Framework Docs</p>
                <a href="https://docs.djangoproject.com/es/5.0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  https://docs.djangoproject.com/es/5.0/ <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 0.2rem' }}>Three.js Docs & Examples</p>
                <a href="https://threejs.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  https://threejs.org <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPortfolio;
