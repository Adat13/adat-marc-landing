import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, BarChart, Smartphone, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Desarrollo de Software',
    description: 'Sistemas a medida, aplicaciones empresariales y soluciones escalables utilizando las últimas tecnologías.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Apps Móviles',
    description: 'Experiencias móviles nativas e híbridas diseñadas para deleitar a tus usuarios y optimizar procesos.'
  },
  {
    icon: <Cloud size={32} />,
    title: 'Soluciones Cloud',
    description: 'Arquitecturas en la nube seguras y eficientes para garantizar la disponibilidad y escalabilidad de tu negocio.'
  },
  {
    icon: <BarChart size={32} />,
    title: 'Consultoría IT',
    description: 'Asesoramiento estratégico para alinear tu tecnología con los objetivos de crecimiento de tu empresa.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Ciberseguridad',
    description: 'Protección integral de datos e infraestructura contra amenazas modernas y vulnerabilidades.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Optimización de Procesos',
    description: 'Automatización inteligente para reducir costos operativos y mejorar la eficiencia de tu equipo.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros <span className="text-gradient">Servicios</span></h2>
          <p className="section-subtitle">Ofrecemos un ecosistema de soluciones tecnológicas diseñadas para impulsar la transformación digital.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: 'rgba(0, 245, 255, 0.4)' }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;
