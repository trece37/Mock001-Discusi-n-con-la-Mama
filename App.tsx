import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DataCards from './components/DataCards';
import Narrative from './components/Narrative';
import PriceMap from './components/PriceMap';
import Recipes from './components/Recipes';
import ListilloSection from './components/ListilloSection';
import Footer from './components/Footer';
import ConsentModal from './components/ConsentModal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(true);

  // Toggle Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-background-dark' : 'bg-background-light'}`}>
      
      {showModal && <ConsentModal onAccept={() => setShowModal(false)} />}

      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <DataCards />
        <Narrative />
        <PriceMap />
        <Recipes />
        <ListilloSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;