import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'filled', to, className = '', onClick, ...props }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
