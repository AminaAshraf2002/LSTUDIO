import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
     
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                <img src="/logo.svg" alt="L Studio Premium Family Salon" />
              </div>
              <p className={styles.brandDesc}>
                Elevating self-care to an art form. The premier destination for the modern family.
              </p>
              <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/lstudio_salon_?igsh=cDc5MmttODQ3ands" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.facebook.com/lstudiosalontrissur/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="X (Twitter)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>EXPLORE</h4>
              <ul className={styles.linkList}>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>LEGAL</h4>
              <ul className={styles.linkList}>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>CONNECT</h4>
              
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <MapPin size={20} className={styles.contactIcon} />
                  <div>
                    <p>East Fort, Thrissur, Kerala 680005</p>
                    <p>Sobha city mall, Thrissur, Kerala 680553</p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <Phone size={20} className={styles.contactIcon} />
                  <div>
                    <p>
                      <a href="tel:+919400333894">+91 9400333894</a> ,{' '}
                      <a href="tel:+919995383895">+91 9995383895</a>
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <Mail size={20} className={styles.contactIcon} />
                  <div>
                    <p>
                      <a href="mailto:lstudio.ef@gmail.com">lstudio.ef@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <p>&copy; 2024 L Studio Premium Family Salon. All Rights Reserved.</p>
            <p>Crafted with Excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
