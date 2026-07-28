import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';

const SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
gsap.registerPlugin(ScrollTrigger);

function HeroSection({ data }) {
  const [services, setServices] = useState([]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [displayTextIndex, setDisplayTextIndex] = useState(0);
  const [cardPositions, setCardPositions] = useState([]);
  const [isExpanding, setIsExpanding] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  const expandingCloneRef = useRef(null);
  const bgOverlayRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (data && data.slides) {
      const slides = data.slides;
      setServices(slides);

      const initialPositions = slides.map((_, index) => ({
        serviceIndex: (index + 1) % slides.length,
        position: index
      }));
      setCardPositions(initialPositions);
    }
  }, [data]);

  useEffect(() => {
    if (cardPositions.length > 0 && cardsContainerRef.current) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setTimeout(() => {
          if (cardsContainerRef.current) {
            cardsContainerRef.current.style.opacity = '1';
          }
        }, 100);
      }
    }
  }, [cardPositions]);

  const getImgUrl = (path) => {
    if (!path) return "";
    const formatted = path.replace(/\\/g, "/");
    return (formatted.startsWith("http") || formatted.startsWith("data:") || formatted.startsWith("/")) ? formatted : `${SERVER_URL}/${formatted}`;
  };

  const globalLink = data?.sectionLink || "https://api.whatsapp.com/send/?phone=%2B971585766424&text&type=phone_number&app_absent=0";

  const handleKnowMoreClick = () => {
    if (globalLink.startsWith('http')) {
      window.open(globalLink, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = globalLink;
    }
  };

  const getCardStep = () => {
    const w = window.innerWidth;
    if (w >= 5120) return 360;
    if (w >= 4480) return 315;
    if (w >= 3456) return 275;
    if (w >= 3024) return 250;
    if (w >= 2880) return 240;
    if (w >= 2560) return 225;
    if (w >= 1920) return 205;
    if (w >= 1728) return 175;
    if (w >= 1536) return 168;
    if (w >= 1440) return 163;
    if (w >= 1280) return 155;
    if (w >= 1024) return 135;
    if (w >= 900) return 123;
    if (w >= 834) return 118;
    if (w <= 768) return 165;
    if (w >= 640) return 180;
    if (w >= 576) return 160;
    if (w >= 480) return 150;
    if (w >= 428) return 140;
    if (w >= 375) return 135;
    if (w >= 320) return 112;
    return 100;
  };

  const animateCardExpansion = useCallback((direction) => {
    if (isExpanding || services.length === 0) return;

    const topCardElement = cardsContainerRef.current?.querySelector('[data-position="0"]');
    if (!topCardElement || !expandingCloneRef.current) return;

    setIsExpanding(true);
    const rect = topCardElement.getBoundingClientRect();
    const clone = expandingCloneRef.current;
    const sectionRect = clone.parentElement.getBoundingClientRect();
    const relativeTop = rect.top - sectionRect.top;
    const relativeLeft = rect.left - sectionRect.left;
    const bgOverlay = bgOverlayRef.current;

    const topCardData = cardPositions.find(c => c.position === 0);
    const nextService = services[topCardData.serviceIndex];
    const nextBgImage = getImgUrl(nextService.image);
    const nextBgIndex = topCardData.serviceIndex;

    const isMobile = window.innerWidth <= 768;

    gsap.set(clone, {
      display: 'block',
      top: relativeTop,
      left: relativeLeft,
      width: rect.width,
      height: rect.height,
      backgroundImage: `url(${nextBgImage})`,
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      borderRadius: '8px',
      zIndex: 50,
      force3D: true
    });

    const masterTL = gsap.timeline({
      onComplete: () => {
        gsap.set(clone, { display: 'none' });
        gsap.set(".card-item", { clearProps: "all" });
        setIsExpanding(false);
      }
    });

    masterTL.to([titleRef.current, subtitleRef.current, buttonRef.current], {
      opacity: 0, y: -20, duration: isMobile ? 0.25 : 0.3, ease: "power2.in", force3D: true
    }, 0);

    masterTL.to(clone, {
      top: 0, left: 0, width: '100%', height: '100%',
      borderRadius: 0, duration: isMobile ? 0.6 : 0.8, ease: "power3.inOut", force3D: true
    }, 0);

    const currentStep = getCardStep();
    const allCards = cardsContainerRef.current.querySelectorAll('.card-item');
    allCards.forEach((card) => {
      const currentPos = parseInt(card.getAttribute('data-position'));
      let targetPos, targetOpacity = 1;

      if (direction === 'next') {
        if (currentPos === 0) {
          targetPos = currentStep * (services.length - 1);
          targetOpacity = 1;
        } else {
          targetPos = currentStep * (currentPos - 1);
        }
      } else {
        if (currentPos === services.length - 1) {
          targetPos = 0;
        } else if (currentPos === services.length - 2) {
          targetPos = currentStep * (services.length - 1);
          targetOpacity = 1;
        } else {
          targetPos = currentStep * (currentPos + 1);
        }
      }

      masterTL.to(card, {
        [isMobile ? 'x' : 'y']: targetPos, 
        [isMobile ? 'y' : 'x']: 0,
        opacity: targetOpacity, duration: isMobile ? 0.6 : 0.8, ease: "power3.inOut", force3D: true
      }, 0);
    });

    masterTL.call(() => {
      if (bgOverlay) bgOverlay.style.backgroundImage = `url(${nextBgImage})`;
    }, null, 0.6);

    masterTL.call(() => {
      setCurrentBgIndex(nextBgIndex);
      setDisplayTextIndex(nextBgIndex);
      setCardPositions(prev => prev.map(c => ({
        ...c,
        position: direction === 'next'
          ? (c.position === 0 ? services.length - 1 : c.position - 1)
          : (c.position === services.length - 1 ? 0 : c.position + 1)
      })));
    }, null, 0.8);

    masterTL.to(clone, {
      opacity: 0, duration: isMobile ? 0.4 : 0.5, ease: "power2.out", force3D: true
    }, isMobile ? 0.6 : 0.8);

    masterTL.fromTo([titleRef.current, subtitleRef.current, buttonRef.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: isMobile ? 0.5 : 0.6, stagger: 0.1, ease: "power2.out", force3D: true },
      isMobile ? 0.65 : 0.85
    );

  }, [isExpanding, cardPositions, services]);

  const moveToNext = useCallback(() => animateCardExpansion('next'), [animateCardExpansion]);
  const moveToPrevious = useCallback(() => animateCardExpansion('prev'), [animateCardExpansion]);

  useEffect(() => {
    if (!autoPlayEnabled || services.length === 0) return;
    const timer = setInterval(moveToNext, 4000);
    return () => clearInterval(timer);
  }, [autoPlayEnabled, moveToNext, services]);

  if (!services || services.length === 0) return null;

  return (
    <section className="hero-section">
      <div
        ref={bgOverlayRef}
        className="hero-bg-overlay"
        style={{ backgroundImage: `url(${getImgUrl(services[currentBgIndex]?.image)})` }}
      />
      <div ref={expandingCloneRef} className="expanding-card-clone-gsap" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="text-box">
            <h1 ref={titleRef} className="hero-title">{services[displayTextIndex]?.title}</h1>
            <p ref={subtitleRef} className="hero-subtitle">{services[displayTextIndex]?.subtitle}</p>
            <button ref={buttonRef} className="know-more-btn" id="hero-know-more-btn" onClick={handleKnowMoreClick}>Know More</button>
          </div>
        </div>

        <div 
          ref={cardsContainerRef} 
          className="cards-stack-container"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            setAutoPlayEnabled(false);
          }}
          onTouchEnd={(e) => {
            if (!touchStartX.current) return;
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX.current - touchEndX;
            if (diff > 50) {
              moveToNext();
            } else if (diff < -50) {
              moveToPrevious();
            }
            touchStartX.current = null;
          }}
        >
          {cardPositions.map((cardData, idx) => (
            <div key={idx} className="card-item" data-position={cardData.position}>
              <img
                src={getImgUrl(services[cardData.serviceIndex]?.image)}
                alt={services[cardData.serviceIndex]?.title || "Hero slide"}
                loading={cardData.position === 0 ? "eager" : "lazy"}
              />
              <div className="card-label">{services[cardData.serviceIndex]?.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="arrows">
        <div
          className="arrow"
          onClick={() => { setAutoPlayEnabled(false); moveToPrevious(); }}
          onTouchStart={(e) => { e.preventDefault(); setAutoPlayEnabled(false); moveToPrevious(); }}
        >
          <ChevronUp size={20} />
        </div>
        <div
          className="arrow"
          onClick={() => { setAutoPlayEnabled(false); moveToNext(); }}
          onTouchStart={(e) => { e.preventDefault(); setAutoPlayEnabled(false); moveToNext(); }}
        >
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
