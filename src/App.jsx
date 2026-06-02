import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TeamPortfolio from './components/TeamPortfolio';

function App() {
  const [currentView, setView] = useState(() => {
    return localStorage.getItem('adat_current_view') || 'home';
  });

  const handleNavigate = (view) => {
    setView(view);
    localStorage.setItem('adat_current_view', view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar currentView={currentView} setView={handleNavigate} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Services />
            <Projects />
            <Contact />
          </>
        ) : (
          <TeamPortfolio />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

