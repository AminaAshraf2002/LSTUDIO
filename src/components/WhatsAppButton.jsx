import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = "+919400333894", message = "Hello! I would like to book an appointment." }) => {
  // Format the link
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float-btn" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
