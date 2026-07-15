import React, { useState, useEffect } from 'react';
import styles from './TestimonialSlider.module.css';

const testimonials = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI.",
    subtext: "Trust her work, that the words that she delivered completely transformed our brand presence.",
    name: "Kathrine Katija",
    role: "Marketing Manager, ABC Ad Services"
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: "The creative direction and aesthetic choices completely elevated our brand identity.",
    subtext: "We saw an immediate increase in bookings and positive feedback from our high-end clientele.",
    name: "Victoria Hastings",
    role: "Fashion Director, Vogue"
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: "Exceptional attention to detail and a true understanding of modern luxury aesthetics.",
    subtext: "The final deliverables exceeded all our expectations and provided a massive ROI.",
    name: "Sarah Williams",
    role: "Creative Director, Style Co."
  }
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            WHAT CLIENTS SAY
          </div>
          <h2 className={styles.title}>Honest Feedback<br/>From Valued People</h2>
          <p className={styles.subtitle}>
            Real feedback from businesses and individuals who trusted my content to<br/>
            elevate their brands. Their words reflect the impact of my work.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.grid}>
          {/* Left Side: Images */}
          <div className={styles.imageCol}>
            <div className={styles.imageTrack}>
              {testimonials.map((t, i) => {
                let offset = i - activeIndex;
                
                // Wrap logic for 3 items to keep them visible at all times
                if (offset === -2) offset = 1;
                if (offset === 2) offset = -1;
                
                const translateY = offset * 140;
                const isActive = offset === 0;
                
                return (
                  <div 
                    key={t.id} 
                    className={`${styles.imageWrapper} ${isActive ? styles.activeImage : styles.inactiveImage}`}
                    style={{
                      transform: `translate(-50%, calc(-50% + ${translateY}px))`,
                      zIndex: isActive ? 10 : 5,
                      opacity: Math.abs(offset) > 1 ? 0 : 1
                    }}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img src={t.image} alt={t.name} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Card */}
          <div className={styles.cardCol}>
            <div className={styles.card}>
              <div className={styles.quoteMark}>”</div>
              
              <div key={activeIndex} className={styles.cardContent}>
                <h3 className={styles.cardText}>{testimonials[activeIndex].text}</h3>
                <p className={styles.cardSubtext}>{testimonials[activeIndex].subtext}</p>
                
                <div className={styles.authorSection}>
                  <div className={styles.authorInfo}>
                    <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className={styles.mobileAuthorImage} />
                    <div className={styles.authorDetails}>
                      <h4>{testimonials[activeIndex].name}</h4>
                      <p>{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                  
                  <div className={styles.divider}></div>
                  
                  <div className={styles.stars}>
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>See how impactful content<br/>makes a difference?</p>
          <button className={styles.ctaButton}>SCHEDULE A CALL</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
