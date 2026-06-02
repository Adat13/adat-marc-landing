import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, view, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (view !== currentView) {
      setView(view);
      if (view === 'home' && targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo" style={{ cursor: 'pointer' }} onClick={(e) => handleLinkClick(e, 'home', 'hero')}>
          <Cpu className="logo-icon" size={32} />
          <span className="logo-text">ADAT <span className="text-gradient">MARC</span></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" className={currentView === 'home' ? 'active-link' : ''} onClick={(e) => handleLinkClick(e, 'home', 'hero')}>Inicio</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'home', 'services')}>Servicios</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'home', 'projects')}>Proyectos</a>
          <a href="#team" className={currentView === 'team' ? 'active-link' : ''} onClick={(e) => handleLinkClick(e, 'team')}>Equipo</a>
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleLinkClick(e, 'home', 'contact')}>Contacto</a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

