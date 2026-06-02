import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Nexus ERP',
    category: 'Software Empresarial',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Skyline FinTech',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Flutter', 'Firebase', 'Cloud Functions']
  },
  {
    title: 'BioCore Analytics',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'AWS', 'TensorFlow']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros <span className="text-gradient">Proyectos</span></h2>
          <p className="section-subtitle">Casos de éxito donde la tecnología se encuentra con la excelencia operativa.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="overlay-icons">
                    <button className="icon-btn"><ExternalLink size={20} /></button>
                    <button className="icon-btn"><Globe size={20} /></button>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;
