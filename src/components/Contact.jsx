import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid glass">
          <div className="contact-info">
            <h2 className="contact-title">¿Listo para <span className="text-gradient">Innovar?</span></h2>
            <p className="contact-desc">Déjanos tu mensaje y nuestro equipo de expertos se pondrá en contacto contigo para dar vida a tu próximo proyecto tecnológico.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-wrapper"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>contacto@adatmarc.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-wrapper"><Phone size={20} /></div>
                <div>
                  <h4>Teléfono</h4>
                  <p>+51 987 654 321</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-wrapper"><MapPin size={20} /></div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Lima, Perú - Remote Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Nombre Completo" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Correo Electrónico" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Cuéntanos sobre tu proyecto" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Enviar Mensaje <Send size={20} />
            </button>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Contact;
