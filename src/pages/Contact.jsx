import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Contact.module.css';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const siteUrl = 'https://www.lstudiosalons.in';
const pageTitle = 'Contact L Studio | Family Salon in Thrissur, Kerala';
const pageDescription = 'Contact L Studio Family Salon in Thrissur, Kerala, for salon enquiries, appointments and location details. Get in touch with our team for professional salon care.';
const pageImage = `${siteUrl}/assets/blacklogo-D.png`;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact L Studio Family Salon',
  description: pageDescription,
  url: `${siteUrl}/contact`,
  mainEntity: {
    '@type': 'BeautySalon',
    name: 'L Studio Family Salon',
    url: siteUrl,
    telephone: '+91-9400333894',
    email: 'lstudio.ef@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fathima Nagar',
      addressLocality: 'Thrissur',
      addressRegion: 'Kerala',
      postalCode: '680001',
      addressCountry: 'IN'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '19:00'
      }
    ],
    location: {
      '@type': 'Place',
      name: 'L Studio Family Salon - Thrissur Flagship',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Fathima Nagar',
        addressLocality: 'Thrissur',
        addressRegion: 'Kerala',
        postalCode: '680001',
        addressCountry: 'IN'
      }
    }
  }
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_85xlu3e',
        'template_ldqbstf',
        form.current,
        {
          publicKey: 'Fh3AOsVsxM84Phhxo'
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };
return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/contact`} />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta property="og:site_name" content="L Studio Family Salon" />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className={styles.contactPage}>
      
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroTextContent}>
              <h1 className={styles.heroTitle}>
                CONNECT<br />WITH US
              </h1>
              <p className={styles.heroDesc}>
                Whether you are looking to book an appointment, inquire about our bespoke services, or discuss a collaboration, our concierge team is here to assist you.
              </p>
              <div className={styles.heroActions}>
                <a href="tel:+919400333894" style={{textDecoration: 'none'}}>
                  <button className={styles.tourBtn} id="contact-tour-btn">
                    <span className={styles.playIcon}><i className="fa-solid fa-phone"></i></span> Call Now
                  </button>
                </a>
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
              <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" id="name" name="full_name" placeholder="Jane Doe" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" id="email" name="email" placeholder="jane@example.com" required />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="service">SERVICE OF INTEREST</label>
                  <select id="service" name="service">
                    <option value="Hair Artistry">Hair Artistry</option>
                    <option value="Skin Therapy">Skin Therapy</option>
                    <option value="Makeup Design">Makeup Design</option>
                    <option value="Bridal Consultation">Bridal Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">MESSAGE</label>
                  <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className={styles.submitBtn} id="contact-submit-btn">SEND INQUIRY &rarr;</button>
                {status && <p style={{ marginTop: '15px', color: '#c9a15f', fontSize: '14px', fontWeight: '500' }}>{status}</p>}
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
                <p style={{ marginBottom: '10px' }}><a href="tel:+919400333894" className={styles.emailLink}>+91 9400333894</a></p>
                <p style={{ marginBottom: '10px' }}><a href="tel:+919995383895" className={styles.emailLink}>+91 9995383895</a></p>
                <a href="mailto:lstudio.ef@gmail.com" className={styles.emailLink}>lstudio.ef@gmail.com</a>
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
  </>
  );
};

export default Contact;
