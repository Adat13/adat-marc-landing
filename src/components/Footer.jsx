import React from 'react';
import { Cpu, Users, Send, Globe, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Cpu className="logo-icon" size={32} />
              <span className="logo-text">ADAT <span className="text-gradient">MARC</span></span>
            </div>
            <p className="brand-desc">Impulsando el futuro digital con soluciones de software de clase mundial y servicios tecnológicos innovadores.</p>
            <div className="social-links">
              <a href="#"><Users size={20} /></a>
              <a href="#"><Send size={20} /></a>
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Camera size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Adat Marc S.A.C. Todos los derechos reservados.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
