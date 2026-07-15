import React from 'react';
import styles from './Contact.module.css';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroTextContent}>
              <h1 className={styles.heroTitle}>
                CONNECT<br />WITH<br />US
              </h1>
              <p className={styles.heroDesc}>
                Whether you are looking to book an appointment, inquire about our bespoke services, or discuss a collaboration, our concierge team is here to assist you.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.tourBtn}>
                  <span className={styles.playIcon}><i className="fa-solid fa-phone"></i></span> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Form Side */}
            <div className={styles.formContainer}>
              <h3 className={styles.sectionTitle}>Send a Message</h3>
              <form className={styles.contactForm}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" id="name" placeholder="Jane Doe" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" id="email" placeholder="jane@example.com" required />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="service">SERVICE OF INTEREST</label>
                  <select id="service">
                    <option>Hair Artistry</option>
                    <option>Skin Therapy</option>
                    <option>Makeup Design</option>
                    <option>Bridal Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">MESSAGE</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button className={styles.submitBtn}>SEND INQUIRY &rarr;</button>
              </form>
            </div>

            {/* Info Side */}
            <div className={styles.infoContainer}>
              <div className={styles.infoBlock}>
                <h3 className={styles.sectionTitle}>Our Sanctuaries</h3>
                
                <div className={styles.location}>
                  <h4>THRISSUR (FLAGSHIP)</h4>
                  <p>Fathima Nagar<br/>Thrissur, Kerala</p>
                </div>
                
                <div className={styles.location}>
                  <h4>EDAPPAL</h4>
                  <p>Main Branch<br/>Edappal, Kerala</p>
                </div>
                
                <div className={styles.location}>
                  <h4>PATTAMBI</h4>
                  <p>City Center<br/>Pattambi, Kerala</p>
                </div>
                
                <div className={styles.location}>
                  <h4>K MALL KAKKATIL</h4>
                  <p>Premium Lounge<br/>Kakkatil, Kerala</p>
                </div>
                
                <div className={styles.location}>
                  <h4>PERUMPILAVU</h4>
                  <p>Coming Soon...</p>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.sectionTitle}>General Inquiries</h3>
                <a href="mailto:info@lstudio.com" className={styles.emailLink}>info@lstudio.com</a>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.sectionTitle}>Hours of Operation</h3>
                <ul className={styles.hoursList}>
                  <li><span>Monday - Saturday</span> <span>9:30 AM - 8:00 PM</span></li>
                  <li><span>Sunday</span> <span>10:00 AM - 7:00 PM</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
