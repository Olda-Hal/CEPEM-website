import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Clinics } from './pages/Clinics';
import { Reservation } from './pages/Reservation';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Career } from './pages/Career';
import { Gdpr } from './pages/Gdpr';
import { Contact } from './pages/Contact';
import { News } from './pages/News';
import { NewsLectures } from './pages/NewsLectures';
import { NewsNetwork } from './pages/NewsNetwork';
import { NewsEvents } from './pages/NewsEvents';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'clinics':
        return <Clinics />;
      case 'reservation':
        return <Reservation />;
      case 'products':
        return <Products />;
      case 'news':
        return <News onNavigate={setActivePage} />;
      case 'news-lectures':
        return <NewsLectures />;
      case 'news-network':
        return <NewsNetwork />;
      case 'news-events':
        return <NewsEvents />;
      case 'about':
        return <About />;
      case 'career':
        return <Career />;
      case 'gdpr':
        return <Gdpr />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar activePage={activePage} onPageChange={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setActivePage} />
    </div>
  );
}
