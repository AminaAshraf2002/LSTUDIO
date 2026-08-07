import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import WhatsAppButton from './components/WhatsAppButton';

import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  return (
    <>
      <ScrollToTop />
      {!isMenuPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      {!isMenuPage && <Footer />}
      {!isMenuPage && <WhatsAppButton />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
