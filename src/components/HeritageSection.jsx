import React from 'react';
import styles from './HeritageSection.module.css';

const HeritageSection = ({ 
  title, 
  subtitle, 
  paragraphs = [], 
  images = [] 
}) => {
  return (
    <section className={styles.heritageSection}>
      <div className={styles.heritageContainer}>
        {/* Corner Images - Absolute Positioned */}
        <div className={`${styles.cornerImage} ${styles.topLeft}`}>
          <img src={images[0]} alt="Heritage 1" />
        </div>

        <div className={`${styles.cornerImage} ${styles.topRight}`}>
          <img src={images[1]} alt="Heritage 2" />
        </div>

        <div className={`${styles.cornerImage} ${styles.bottomLeft}`}>
          <img src={images[2]} alt="Heritage 3" />
        </div>

        <div className={`${styles.cornerImage} ${styles.bottomRight}`}>
          <img src={images[3]} alt="Heritage 4" />
        </div>

        {/* Center Content - Overlays the images */}
        <div className={styles.heritageContent}>
          <h2 className={styles.quoteText}>
            {title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </h2>
          <div className={styles.quoteBody}>
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
