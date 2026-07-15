import React from 'react';
import styles from './ServiceCard.module.css';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, features, linkText = 'EXPLORE', linkTo = '/services' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600'} alt={title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {features && features.length > 0 && (
          <ul className={styles.featureList}>
            {features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>
                <span className={styles.bullet}></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className={styles.action}>
          <Link to={linkTo} className={styles.link}>
            {linkText} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
