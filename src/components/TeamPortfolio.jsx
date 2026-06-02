import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../../167634689.jpeg';
import { 
  User, Code, Cpu, BookOpen, ChevronRight, Calendar, Award, 
  Terminal, Globe, Layers, ArrowLeft, ExternalLink, Sparkles, GitBranch,
  Wrench, CheckCircle, Flame, Star, Coffee, Code2, Play, Link, Video, Image as ImageIcon
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
    image: "https://images.unsplash.com/photo-1627398240411-8ac59774139a?auto=format&fit=crop&q=80&w=800",
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
  }
];

const teamMember = {
  name: "David Angel Toribio Anselmo",
  role: "Desarrollador Full Stack & UI/UX",
  bio: "Estudiante de Ingeniería de Sistemas apasionado por el desarrollo de software y la arquitectura web. Me especializo en crear interfaces web hermosas, dinámicas y altamente interactivas usando herramientas modernas como React, CSS avanzado, Framer Motion y gráficos web en 3D.",
  education: [
    { degree: "Estudiante de Ingeniería de Sistemas", institution: "Universidad Nacional del Centro del Perú (UNCP)", period: "2022 - Presente" },
    { degree: "Desarrollo Frontend Moderno & Web 3D", institution: "Especialización Autónoma / Cursos en línea", period: "2024 - 2026" }
  ],
  experience: [
    { position: "Desarrollador Frontend Freelance", company: "Proyectos Independientes", period: "2025 - Presente", desc: "Diseño y desarrollo de sitios web corporativos utilizando React, Vite, Framer Motion y Three.js." },
    { position: "Desarrollador de Aplicaciones de Laboratorio", company: "Cátedra de Desarrollo Web UNCP", period: "2025", desc: "Implementación de dashboards, maquetaciones adaptativas Mobile-First, y simulaciones 3D interactivas." }
  ],
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

const projectsConcluidos = [
  {
    title: "Pastelería Dulzemi",
    description: "Sitio web de pastelería con maquetación semántica estructurada, metadatos optimizados para SEO y accesibilidad completa.",
    tools: ["HTML5", "SEO", "Semantic Markup"],
    link: "https://github.com/Adat13/Dulzemi",
    deploy: "https://adat13.github.io/Dulzemi/",
    category: "Semana 2"
  },
  {
    title: "Alfa Green",
    description: "Plataforma web con diseño adaptable Mobile-First utilizando CSS Grid y Flexbox avanzado para un impacto visual moderno.",
    tools: ["CSS3 Flexbox", "CSS Grid", "Responsive Design"],
    link: "https://github.com/Adat13/alfa-green",
    deploy: "https://adat13.github.io/alfa-green/",
    category: "Semana 3"
  },
  {
    title: "DESARROLLO-WEB-FIS",
    description: "Laboratorio interactivo y manipulaciones avanzadas de DOM para el registro y gestión de datos académicos.",
    tools: ["JavaScript ES6+", "DOM Manipulation", "EventListeners"],
    link: "https://github.com/Adat13/DESARROLLO-WEB-FIS",
    deploy: "https://adat13.github.io/DESARROLLO-WEB-FIS/",
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
    deploy: "https://adat13.github.io/adat-marc-landing/",
    category: "Semana 8"
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
                  <a 
                    href={project.deploy} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    style={{ flex: 1, fontSize: '0.8rem', padding: '0.5rem 0.5rem', borderRadius: '8px', background: 'var(--accent-gradient)', border: 'none', color: '#fff', boxShadow: '0 2px 8px var(--primary-glow)', whiteSpace: 'nowrap' }}
                  >
                    <Globe size={14} /> Sitio Web
                  </a>
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

      {/* Reflexión Final */}
      <div className="reflexion-final-section" style={{ marginTop: '8rem', borderTop: '1px solid var(--glass-border)', paddingTop: '5rem' }}>
        <div className="section-header-centered">
          <span className="badge">Meta-evaluación</span>
          <h2 className="section-title">Reflexión a la <span className="text-gradient">Semana 8</span></h2>
          <p className="section-subtitle">
            Un análisis metacognitivo sobre el progreso personal, los retos superados y los conocimientos integrados hasta la octava semana del curso.
          </p>
        </div>

        <div className="glassmorphism" style={{ padding: '3rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '200px', height: '200px', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)', opacity: 0.5, pointerEvents: 'none' }}></div>
          
          <div className="reflexion-grid">
            <div>
              <p style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, lineHeight: '1.7', marginBottom: '1.5rem' }}>
                "El camino del desarrollo web no es aprender líneas de código de memoria, sino comprender cómo se integran las tecnologías para resolver problemas reales del usuario."
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                A lo largo de este curso, he transitado por un camino que transformó mi perspectiva sobre el desarrollo frontend. Comencé aprendiendo a organizar código de manera profesional con Git y VS Code. Posteriormente, la transición hacia HTML5 semántico me enseñó a valorar la accesibilidad y el impacto en motores de búsqueda (SEO). Con CSS3 y el diseño Mobile-First, comprendí que una web no es verdaderamente útil si no es adaptable y fluida en pantallas pequeñas como celulares.
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
                El gran salto ocurrió al dotar de interactividad al sitio mediante manipulación de DOM con JavaScript, abriendo las puertas al desarrollo con React 18, donde la modularidad y el estado reactivo redefinieron mi forma de programar. Finalmente, la integración de micro-interacciones mediante Framer Motion y experiencias inmersivas tridimensionales con Three.js (React Three Fiber) me demostraron que la web moderna no tiene límites.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(0, 245, 255, 0.03)', border: '1px solid rgba(0, 245, 255, 0.1)', borderLeft: '4px solid var(--primary)', padding: '1.5rem', borderRadius: '16px' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={16} /> ¿Qué aprendió?
                </h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Aprendí no solo tecnologías de punta (React, Three.js, Framer Motion), sino también la importancia de la arquitectura limpia, el rendimiento web y el diseño Mobile-First enfocado en el usuario final.
                </p>
              </div>

              <div style={{ background: 'rgba(112, 0, 255, 0.03)', border: '1px solid rgba(112, 0, 255, 0.1)', borderLeft: '4px solid var(--secondary)', padding: '1.5rem', borderRadius: '16px' }}>
                <h4 style={{ color: 'var(--secondary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Coffee size={16} /> ¿Cómo aprendió?
                </h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Mi aprendizaje fue 100% práctico. Cada semana se consolidó con laboratorios y entregables reales (Dulzemi, Alfa Green, Chifa Richi, etc.), enfrentándome a la depuración de errores, a la optimización de código y al despliegue real en producción en servidores como GitHub Pages.
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
