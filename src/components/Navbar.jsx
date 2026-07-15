import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/blacklogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroThreshold = window.innerHeight / 2; // Half height of hero section
      
      // Change background when scrolling past hero
      setIsScrolled(currentScrollY > heroThreshold);

      // Hide/Show based on scroll direction
      if (currentScrollY < 50) {
        setIsHidden(false); // Always show at the very top
      } else if (currentScrollY > lastScrollY.current && currentScrollY > heroThreshold) {
        setIsHidden(true); // Hide when scrolling down past the hero
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false); // Show when scrolling up
      }

      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    // { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logoImg} alt="L Studio Premium Family Salon" />
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={styles.icons}>
            {/* Additional icon buttons could go here based on the design (e.g., search, cart if needed, but not specified directly except in text "icon buttons") */}
          </div>
          <Button to="/contact" variant="white" className={isScrolled ? styles.scrolledBtn : ''}>BOOK NOW</Button>
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <div className={styles.mobileActions}>
             <Button to="/contact" variant="filled" className={styles.mobileBookBtn}>BOOK NOW</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
