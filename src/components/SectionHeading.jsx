import React from 'react';
import styles from './SectionHeading.module.css';

const SectionHeading = ({ eyebrow, title, align = 'left', className = '' }) => {
  return (
    <div className={`${styles.headingContainer} ${styles[align]} ${className}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default SectionHeading;
