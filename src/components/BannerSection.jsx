import React from 'react';
import styles from './BannerSection.module.css';

// Import images
import banner1 from '../assets/cre.png';
import banner2 from '../assets/blue.png';

const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerGrid}>
        {/* Left Banner */}
        <div className={styles.bannerItem}>
          <img src={banner1} alt="Davines" />
          <div className={styles.bannerOverlay}></div>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>
              Davines
              <br />
              Haircare
            </h2>
           
          </div>
        </div>

        {/* Right Banner */}
        <div className={styles.bannerItem}>
          <img src={banner2} alt="L'Oreal Paris" />
          <div className={styles.bannerOverlay}></div>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>
              L'Oréal
              <br />
              Paris
            </h2>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
