import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TeamPortfolio from './components/TeamPortfolio';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  const [heroText, setHeroText] = useState({ title: '', slogan: '' });
  const [textIndex, setTextIndex] = useState(0);

  const titulos = [
    "INNOVA. CONECTA. AVANZA.",
    "CREA. SOLUCIONA. IMPULSA.",
    "IMAGINA. DISEÑA. TRANSFORMA.",
    "EVOLUCIONA. IMPLEMENTA. LIDERA."
  ];
  const slogans = [
    "Tecnología que impulsa tu empresa.",
    "Hardware y Software a tu medida.",
    "Soluciones digitales para tu crecimiento.",
    "Innovación que transforma negocios."
  ];

  useEffect(() => {
    // Initial set
    setHeroText({
      title: titulos[0],
      slogan: slogans[0]
    });

    // 6-second interval
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % titulos.length;
        setHeroText({
          title: titulos[nextIndex],
          slogan: slogans[nextIndex]
        });
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header natively styled with Bootstrap classes */}
      <header id="header" className="fixed-top" style={{ background: 'rgba(10, 13, 20, 0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0', zIndex: 999 }}>
        <div className="container d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center text-decoration-none">
            <img src="./AdatLogo.svg" alt="ADAT Logo" style={{ height: '45px', filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.4))' }} />
          </a>
          
          <nav id="navmenu" className="d-none d-lg-block">
            <ul className="d-flex list-unstyled m-0 gap-4" style={{ fontWeight: 600, fontSize: '14px' }}>
              <li><a href="#hero" className="text-decoration-none" style={{ color: 'var(--primary)' }}>Inicio</a></li>
              <li><a href="#about" className="text-decoration-none text-light">NOSOTROS</a></li>
              <li><a href="#services" className="text-decoration-none text-light">SERVICIOS</a></li>
              <li><a href="#portfolio" className="text-decoration-none text-light">PORTAFOLIO</a></li>
              <li><a href="#week-details-anchor" className="text-decoration-none text-light">CUADERNO</a></li>
              <li><a href="#contact" className="text-decoration-none text-light">CONTACTO</a></li>
            </ul>
          </nav>

          <a className="btn btn-primary rounded-pill px-4" style={{ background: 'var(--accent-gradient)', border: 'none', fontWeight: 'bold', color: '#fff', boxShadow: '0 4px 15px var(--primary-glow)' }} href="#week-details-anchor">CUADERNO</a>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <ParticleBackground />
          <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={textIndex}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h2 className="hero-title" style={{ minHeight: '120px' }}>
                  <span>{heroText.title.split('.')[0]}.</span> <br/>
                  <span style={{ WebkitTextFillColor: '#fff' }}>{heroText.title.substring(heroText.title.indexOf('.') + 1)}</span>
                </h2>
                <p className="hero-description" style={{ minHeight: '30px' }}>
                  {heroText.slogan}
                </p>
              </motion.div>
            </AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="d-flex justify-content-center gap-3 mt-4"
            >
              <a href="#portfolio" className="btn btn-primary rounded-pill px-4 py-3" style={{ background: 'var(--accent-gradient)', border: 'none', fontWeight: 700, boxShadow: '0 4px 20px var(--primary-glow)' }}>Ver Portafolio</a>
              <a href="#week-details-anchor" className="btn btn-outline-light rounded-pill px-4 py-3" style={{ fontWeight: 700 }}>Ver Cuaderno</a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section py-5" style={{ background: 'var(--bg-dark)' }}>
          <div className="container py-5">
            <div className="row gy-5 align-items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-lg-6"
              >
                <h3 style={{ color: '#fff', fontWeight: 800, marginBottom: '20px', fontSize: '2.2rem' }}>
                  Impulsamos tu crecimiento con soluciones tecnológicas de vanguardia
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>
                  En ADAT MARC nos especializamos en el desarrollo de software a medida, integración de sistemas de hardware y asesoría tecnológica para empresas que buscan innovar y crecer.
                </p>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>
                  Con un enfoque basado en la eficiencia, confiabilidad e innovación, diseñamos soluciones que optimizan procesos, mejoran la productividad y fortalecen la infraestructura tecnológica de nuestros clientes.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-lg-6"
              >
                <div className="glass-image-placeholder">
                  <div className="text-center">
                    <i className="bi bi-rocket-takeoff service-icon-large" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 10px var(--primary))' }}></i>
                    <h4 style={{ fontWeight: 700, color: '#fff' }}>Misión ADAT MARC</h4>
                    <p style={{ opacity: 0.9, color: 'var(--text-dim)' }}>Conectar la tecnología con las necesidades reales de tu empresa.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="stats section py-5" style={{ background: 'var(--bg-dark)' }}>
          <div className="container">
            <div className="row gy-4 text-center">
              <div className="col-lg-3 col-md-6">
                <motion.div whileHover={{ y: -10 }} className="p-4 rounded-4 shadow-sm h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <i className="bi bi-code-slash fs-1 mb-3" style={{ color: 'var(--primary)' }}></i>
                  <h2 style={{ fontWeight: 800, color: '#fff' }}>40+</h2>
                  <p className="mb-0 text-secondary fw-bold" style={{ color: 'var(--text-dim)' }}>Proyectos Completados</p>
                </motion.div>
              </div>
              <div className="col-lg-3 col-md-6">
                <motion.div whileHover={{ y: -10 }} className="p-4 rounded-4 shadow-sm h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <i className="bi bi-gear fs-1 mb-3" style={{ color: 'var(--primary)' }}></i>
                  <h2 style={{ fontWeight: 800, color: '#fff' }}>30+</h2>
                  <p className="mb-0 text-secondary fw-bold" style={{ color: 'var(--text-dim)' }}>Implementaciones</p>
                </motion.div>
              </div>
              <div className="col-lg-3 col-md-6">
                <motion.div whileHover={{ y: -10 }} className="p-4 rounded-4 shadow-sm h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <i className="bi bi-lightning fs-1 mb-3" style={{ color: 'var(--primary)' }}></i>
                  <h2 style={{ fontWeight: 800, color: '#fff' }}>100%</h2>
                  <p className="mb-0 text-secondary fw-bold" style={{ color: 'var(--text-dim)' }}>Innovación</p>
                </motion.div>
              </div>
              <div className="col-lg-3 col-md-6">
                <motion.div whileHover={{ y: -10 }} className="p-4 rounded-4 shadow-sm h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <i className="bi bi-people fs-1 mb-3" style={{ color: 'var(--primary)' }}></i>
                  <h2 style={{ fontWeight: 800, color: '#fff' }}>10+</h2>
                  <p className="mb-0 text-secondary fw-bold" style={{ color: 'var(--text-dim)' }}>Clientes Estratégicos</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services section py-5" style={{ background: 'var(--bg-dark)' }}>
          <div className="container py-5 text-center">
            <h2 style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Servicios</h2>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '2.5rem', marginBottom: '50px' }}>Nuestras Especialidades</h3>
            
            <div className="row gy-5">
              <motion.div whileHover={{ scale: 1.05 }} className="col-xl-4 col-md-6">
                <div className="p-5 rounded-4 h-100 border-0" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-lg)' }}>
                  <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(0, 245, 255, 0.1)' }}>
                    <i className="bi bi-database" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
                  </div>
                  <h4 style={{ fontWeight: 700, color: '#fff' }}>Bases de Datos</h4>
                  <p style={{ color: 'var(--text-dim)' }}>Diseñamos, implementamos y gestionamos bases de datos seguras y altamente escalables.</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="col-xl-4 col-md-6">
                <div className="p-5 rounded-4 h-100 border-0 shadow-sm" style={{ background: 'var(--bg-card)', border: '1px solid var(--primary)', boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)' }}>
                  <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(112, 0, 255, 0.1)' }}>
                    <i className="bi bi-braces" style={{ fontSize: '2rem', color: 'var(--secondary)' }}></i>
                  </div>
                  <h4 style={{ fontWeight: 700, color: '#fff' }}>Desarrollo de Software</h4>
                  <p style={{ color: 'var(--text-dim)' }}>Creamos sitios web corporativos modernos, software personalizado y plataformas a medida.</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="col-xl-4 col-md-6">
                <div className="p-5 rounded-4 h-100 border-0" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-lg)' }}>
                  <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(0, 245, 255, 0.1)' }}>
                    <i className="bi bi-cpu" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
                  </div>
                  <h4 style={{ fontWeight: 700, color: '#fff' }}>Hardware</h4>
                  <p style={{ color: 'var(--text-dim)' }}>Instalamos, configuramos y mantenemos equipos de alta calidad para tu infraestructura.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio py-5" style={{ background: 'var(--bg-dark)' }}>
          <div className="container py-4 text-center">
            <h2 style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Portafolio</h2>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '2.5rem', marginBottom: '40px' }}>Mis Proyectos</h3>
          </div>
          <div className="container">
            <TeamPortfolio />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section py-5" style={{ background: 'var(--bg-dark)' }}>
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Contacto</h2>
              <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '2.5rem' }}>Escríbenos</h3>
            </div>

            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="p-4 rounded-4 mb-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,245,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-geo-alt fs-4" style={{ color: 'var(--primary)' }}></i>
                    </div>
                    <div>
                      <h4 className="mb-1 text-light" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Dirección</h4>
                      <p className="mb-0" style={{ color: 'var(--text-dim)' }}>Huancayo, Perú</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-4 mb-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,245,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-telephone fs-4" style={{ color: 'var(--primary)' }}></i>
                    </div>
                    <div>
                      <h4 className="mb-1 text-light" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Llámanos</h4>
                      <p className="mb-0" style={{ color: 'var(--text-dim)' }}>+51 937 480 592</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-4 mb-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,245,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-envelope fs-4" style={{ color: 'var(--primary)' }}></i>
                    </div>
                    <div>
                      <h4 className="mb-1 text-light" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Email</h4>
                      <p className="mb-0" style={{ color: 'var(--text-dim)' }}>david.toribio2610@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,245,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-github fs-4" style={{ color: 'var(--primary)' }}></i>
                    </div>
                    <div>
                      <h4 className="mb-1 text-light" style={{ fontWeight: 700, fontSize: '1.1rem' }}>GitHub</h4>
                      <p className="mb-0">
                        <a href="https://github.com/Adat13" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}>
                          github.com/Adat13
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <form className="p-5 rounded-4 shadow-sm" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" className="form-control py-3 text-light bg-dark border-secondary" placeholder="Tu Nombre" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control py-3 text-light bg-dark border-secondary" placeholder="Tu Email" required />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control py-3 text-light bg-dark border-secondary" placeholder="Asunto" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control py-3 text-light bg-dark border-secondary" rows="5" placeholder="Mensaje" required></textarea>
                    </div>
                    <div className="col-12 text-center mt-4">
                      <button type="button" className="btn btn-primary rounded-pill px-5 py-3 w-100" style={{ background: 'var(--accent-gradient)', border: 'none', fontWeight: 700, fontSize: '1.1rem', color: '#fff', boxShadow: '0 0 15px var(--primary-glow)' }}>
                        Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 text-center" style={{ background: 'rgba(5, 7, 10, 0.95)', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-dim)' }}>
        <div className="container">
          <p className="mb-0">© <span>Copyright</span> <strong className="px-1 text-light">ADAT MARC</strong> <span>All Rights Reserved</span></p>
        </div>
      </footer>
    </>
  );
}

export default App;
