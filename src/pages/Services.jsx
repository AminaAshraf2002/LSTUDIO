import React, { useState } from 'react';
import styles from './Services.module.css';
import Button from '../components/Button';
import storeImg from '../assets/store.webp';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = {
  'Hair Care': [
    { id: 'h1', title: 'Hair cuts', desc: 'Skilled professionals sculpt and transform hair, crafting personalized looks.', price: 'from ₹800', img: 'https://i.pinimg.com/736x/d3/94/0b/d3940b17db908e6eb6aadb81b8c9723f.jpg' },
    { id: 'h2', title: 'Hair styling', desc: 'Expert styling for any occasion, from classic blowouts to intricate updos.', price: 'from ₹1000', img: 'https://i.pinimg.com/736x/e5/b1/b2/e5b1b2c63ddbb5a776235ce86b56a1b0.jpg' },
    { id: 'h3', title: 'Hair treatments', desc: 'Deep conditioning and restorative therapies for optimal hair health.', price: 'from ₹1500', img: 'https://i.pinimg.com/1200x/8a/a1/4f/8aa14fcc15ea81074dcd4d59bdc58f3b.jpg' },
    { id: 'h4', title: 'Hair protein treatment', desc: 'Strengthening treatments that repair damage and reduce frizz.', price: 'from ₹2500', img: 'https://i.pinimg.com/736x/29/23/42/2923423dc6eff03892ea874898c565e8.jpg' },
    { id: 'h5', title: 'Hair transformation', desc: 'Complete makeovers combining cuts, color, and styling.', price: 'from ₹5000', img: 'https://i.pinimg.com/736x/8a/48/9e/8a489e79bdf45946f751842c06e58759.jpg' },
    { id: 'h6', title: 'Hair colouring', desc: 'Precision color application, from natural highlights to bold fashion colors.', price: 'from ₹3000', img: 'https://i.pinimg.com/736x/4f/e5/b5/4fe5b51264b573557317085dfde44827.jpg' },
    { id: 'h7', title: 'Hair dusting', desc: 'Careful removal of split ends without sacrificing length.', price: 'from ₹500', img: 'https://i.pinimg.com/736x/42/28/84/422884eba9e0e6cec528cdaded5eeb38.jpg' },
  ],
  'Skin Care': [
    { id: 's1', title: 'Facials', desc: 'Tailored treatments that cleanse, nourish, and refresh your skin, revealing a radiant glow.', price: 'from ₹1200', img: 'https://i.pinimg.com/1200x/34/e4/5b/34e45b6b6158f541b6fa9f70c55fe41a.jpg' },
    { id: 's2', title: 'Skin treatments', desc: 'Advanced therapies to address specific skin concerns and restore vitality.', price: 'from ₹2000', img: 'https://i.pinimg.com/1200x/4b/69/09/4b6909891a03b8e86e6c9607663ca51a.jpg' },
    { id: 's3', title: 'Waxing', desc: 'Smooth, long-lasting hair removal using premium quality wax.', price: 'from ₹500', img: 'https://i.pinimg.com/736x/c7/1d/70/c71d7048ef2998fbc85ad1efd3422f70.jpg' },
    { id: 's4', title: 'Scrubs', desc: 'Exfoliating body scrubs that remove dead skin cells and promote circulation.', price: 'from ₹1500', img: 'https://i.pinimg.com/736x/6c/5d/99/6c5d99fe6bd38e0ee5ad839beb617d0c.jpg' },
    { id: 's5', title: 'Body polishing', desc: 'A luxurious treatment that leaves your entire body soft, smooth, and glowing.', price: 'from ₹3000', img: 'https://i.pinimg.com/736x/2b/82/e4/2b82e488ef1e6473f44dab4e672dbfb5.jpg' },
    { id: 's6', title: 'Hydra facials', desc: 'Deep cleansing and hydration for a visibly refreshed and plump complexion.', price: 'from ₹2500', img: 'https://i.pinimg.com/1200x/e7/4b/c0/e74bc0b82a06981cf7e0afba039eb65b.jpg' },
  ],
  'Makeup': [
    { id: 'm1', title: 'Bridal makeup', desc: 'Professional artistry enhancing features for a glamorous wedding look.', price: 'from ₹15000', img: 'https://i.pinimg.com/736x/ea/3b/43/ea3b436267f976071e35c16817d63b2f.jpg' },
    { id: 'm2', title: 'Groom makeup', desc: 'Subtle and flawless grooming for the perfect wedding day look.', price: 'from ₹5000', img: 'https://i.pinimg.com/736x/89/34/e5/8934e5e421984a0dc537e5b94ed774e8.jpg' },
    { id: 'm3', title: 'Light makeup', desc: 'A natural, everyday look that enhances your best features.', price: 'from ₹2000', img: 'https://i.pinimg.com/1200x/67/85/4a/67854a800c1d973296c4ae0009b1fd45.jpg' },
    { id: 'm4', title: 'Airbrush makeup', desc: 'Flawless, long-lasting coverage perfect for high-definition photography.', price: 'from ₹5000', img: 'https://i.pinimg.com/1200x/57/18/ae/5718ae05d11055f018052a134de6cc5f.jpg' },
    { id: 'm5', title: 'Simple makeups', desc: 'Quick and elegant makeup applications for casual events.', price: 'from ₹1500', img: 'https://i.pinimg.com/736x/62/1f/f4/621ff4bf9038dc441c1d9fdfe2eef9bb.jpg' },
    { id: 'm6', title: 'Eye makeup', desc: 'Dramatic or subtle eye enhancements tailored to your eye shape.', price: 'from ₹1000', img: 'https://i.pinimg.com/736x/de/68/9e/de689eb7251e1083918ac6ea6d081c76.jpg' },
  ]
};

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('Hair Care');

  return (
    <div className={styles.servicesPage}>
      
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroTextContent}>
              <h1 className={styles.heroTitle}>
                ELEVATE<br />YOUR BEAUTY
              </h1>
              <p className={styles.heroDesc}>
                Modern cosmetology and salon services for natural beauty and confidence.
              </p>
              <div className={styles.heroActions}>
                <Button to="/contact" variant="primary" className={styles.primaryBtn} id="services-hero-book-btn">
                  Book Consultation &rarr;
                </Button>
                <button className={styles.tourBtn} id="services-hero-tour-btn">
                  <span className={styles.playIcon}>&#9654;</span> Tour the clinic
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Bar */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><i className="fa-solid fa-wand-magic-sparkles"></i></div>
              <div className={styles.featureText}>
                <h4>Highly qualified specialists</h4>
                <p>Experienced doctors with medical education</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><i className="fa-solid fa-shield-halved"></i></div>
              <div className={styles.featureText}>
                <h4>Safety and quality</h4>
                <p>Licensed, certified preparations and equipment</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><i className="fa-solid fa-leaf"></i></div>
              <div className={styles.featureText}>
                <h4>Individual approach</h4>
                <p>Personal programs tailored to your goals</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><i className="fa-solid fa-couch"></i></div>
              <div className={styles.featureText}>
                <h4>Comfort and privacy</h4>
                <p>Premium service and care for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Procedures (Grid with Filter) */}
      <section className={styles.proceduresSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Procedures</h2>
            
            <div className={styles.filterGroup}>
              {['Hair Care', 'Skin Care', 'Makeup'].map(filter => {
                const iconMap = {
                  'Hair Care': <i className="fa-solid fa-scissors" style={{ marginRight: '8px' }}></i>,
                  'Skin Care': <i className="fa-solid fa-spa" style={{ marginRight: '8px' }}></i>,
                  'Makeup': <i className="fa-solid fa-wand-magic-sparkles" style={{ marginRight: '8px' }}></i>
                };
                
                return (
                  <button 
                    key={filter} 
                    id={`services-filter-btn-${filter.replace(/\s+/g, '-').toLowerCase()}`}
                    className={`${styles.filterBtn} ${activeFilter === filter ? styles.activeFilter : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {iconMap[filter]}
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className={styles.proceduresGrid}>
            <AnimatePresence mode="popLayout">
              {servicesData[activeFilter].map((service, index) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={styles.procedureCard} 
                  key={service.id}
                >
                  <div className={styles.cardImgWrapper}>
                    <img src={service.img} alt={service.title} />
                    <div className={styles.cardTag}>0{index + 1}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.price}>{service.price}</span>
                      <button className={styles.arrowBtn} id={`services-card-arrow-btn-${service.id}`}>&rarr;</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. About Clinic */}
      <section className={styles.aboutClinicSection}>
        <div className="container">
          <div className={styles.aboutClinicLayout}>
            <div className={styles.aboutImageWrapper}>
              <img src={storeImg} alt="L Studio Clinic" />
              <div className={styles.logoOverlay}>L STUDIO</div>
            </div>
            
            <div className={styles.aboutContent}>
              <h3 className={styles.aboutTitle}>ABOUT THE CLINIC</h3>
              <p className={styles.aboutDesc}>
                L Studio is a space of aesthetics and professionalism. We combine advanced technologies, medical approach, and care for your beauty at every stage.
              </p>
              <ul className={styles.aboutChecklist}>
                <li><span className={styles.check}>&check;</span> Modern equipment</li>
                <li><span className={styles.check}>&check;</span> Signature techniques</li>
                <li><span className={styles.check}>&check;</span> High service standards</li>
              </ul>
            </div>
            
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <h4>7+</h4>
                <p>years of work</p>
              </div>
              <div className={styles.statItem}>
                <h4>15 000+</h4>
                <p>satisfied clients</p>
              </div>
              <div className={styles.statItem}>
                <h4>20+</h4>
                <p>professional doctors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Approach */}
      <section className={styles.approachSection}>
        <div className="container">
          <h2 className={styles.approachTitle}>Comprehensive approach to your beauty</h2>
          
          <div className={styles.approachGrid}>
            <div className={styles.stepItem}>
              <div className={styles.stepIconWrap}>
                <span className={styles.stepIcon}><i className="fa-solid fa-pen-to-square"></i></span>
              </div>
              <h4>Consultation</h4>
              <p>Analyzing your needs</p>
            </div>
            
            <div className={styles.stepArrow}>&rarr;</div>
            
            <div className={styles.stepItem}>
              <div className={styles.stepIconWrap}>
                <span className={styles.stepIcon}><i className="fa-solid fa-clipboard-list"></i></span>
              </div>
              <h4>Planning</h4>
              <p>Creating a personal program</p>
            </div>
            
            <div className={styles.stepArrow}>&rarr;</div>
            
            <div className={styles.stepItem}>
              <div className={styles.stepIconWrap}>
                <span className={styles.stepIcon}><i className="fa-solid fa-spa"></i></span>
              </div>
              <h4>Procedures</h4>
              <p>Conducting procedures with care</p>
            </div>
            
            <div className={styles.stepArrow}>&rarr;</div>
            
            <div className={styles.stepItem}>
              <div className={styles.stepIconWrap}>
                <span className={styles.stepIcon}><i className="fa-solid fa-star"></i></span>
              </div>
              <h4>Result</h4>
              <p>Maintaining your beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Promotional Banner */}
      <section className={styles.promoSection}>
        <div className="container">
          <div className={styles.promoBanner}>
            <div className={styles.promoContent}>
              <h2>We give 10% on the first procedure</h2>
              <p>Care for your beauty starts here. Sign up and get a personal offer.</p>
              <button className={styles.promoBtn} id="services-promo-signup-btn">Sign up with a discount &rarr;</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
