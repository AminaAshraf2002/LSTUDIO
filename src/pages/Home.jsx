import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import HeroSection from '../components/HeroSection';
import { Search, MapPin, Phone, ArrowLeft, ArrowRight, Quote, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '../assets/beauty.png';
import store1 from '../assets/crafted.png';
import store3 from '../assets/premium.png';
import store4 from '../assets/store6.webp';
import store5 from '../assets/loriel.webp';
import store6 from '../assets/nail.webp';
import store7 from '../assets/store3.webp';
import store8 from '../assets/store.webp';
import bannerImg from '../assets/banner2.png';
import signatureImg from '../assets/unnamed.webp';
import vitaminoImg from '../assets/Vitamino.jpg';
import loriel1Img from '../assets/Loriel1.webp';
import lissImg from '../assets/Liss.jpg';
import oiImg from '../assets/oi.webp';
import loveImg from '../assets/love.jpg';
import oialliImg from '../assets/oialli.webp';
import spaImg from '../assets/spa.png';
import bridal2Img from '../assets/bridal2.png';
import hairstylingImg from '../assets/hairstyling.png';
import TestimonialSlider from '../components/TestimonialSlider';
import BannerSection from '../components/BannerSection';
import AOS from 'aos';
import 'aos/dist/aos.css';






gsap.registerPlugin(ScrollTrigger);

const heroData = {
  sectionLink: '/services',
  slides: [
    {
      title: "BEAUTY, REIMAGINED",
      subtitle: "Experience luxury like never before.",
      image: store
    },
    {
      title: "CRAFTED MASTERY",
      subtitle: "Bespoke styling for your unique look.",
      image: store1
    },
    {
      title: "PREMIUM WELLNESS",
      subtitle: "A sanctuary for mind and body.",
      image: store3
    }
  ]
};

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const parallaxImgRef = useRef(null);
  const bannerImgRef = useRef(null);
  const boutiqueSliderRef = useRef(null);
  const testimonialWrapperRef = useRef(null);
  const secondBannerWrapperRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState('vision');
  const [isBoutiqueHovered, setIsBoutiqueHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      easing: 'ease-out-cubic',
    });
  }, []);

  // GSAP Animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      // EcoGlow Parallax
      if (parallaxImgRef.current) {
        gsap.to(parallaxImgRef.current, {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.ecoBottomSection}`,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      }



      // 3. Mosaic Grid
      gsap.from(`.${styles.mosaicItem}`, {
        scrollTrigger: { trigger: `.${styles.mosaicSection}`, start: "top 75%", toggleActions: "play none none none" },
        scale: 0.8, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)"
      });

      // 4. About Section (Eco Header)
      gsap.from(`.${styles.ecoHeaderLeft}`, {
        scrollTrigger: { trigger: `.${styles.ecoHeaderSection}`, start: "top 80%", toggleActions: "play none none none" },
        x: -50, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(`.${styles.ecoHeaderRight}`, {
        scrollTrigger: { trigger: `.${styles.ecoHeaderSection}`, start: "top 80%", toggleActions: "play none none none" },
        x: 50, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      // 5. Eco Accordion
      gsap.from(`.${styles.ecoAccordionItem}`, {
        scrollTrigger: { trigger: `.${styles.ecoBottomSection}`, start: "top 75%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out"
      });

      // 6. First Banner Section Content
      gsap.from(`.${styles.bannerContent}`, {
        scrollTrigger: { trigger: `.${styles.bannerSection}`, start: "top 80%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });



      // 8. Signature Selection Pricing
      gsap.from(`.${styles.signatureImage}`, {
        scrollTrigger: { trigger: `.${styles.signatureSection}`, start: "top 75%", toggleActions: "play none none none" },
        x: -50, opacity: 0, duration: 1, ease: "power3.out"
      });
      gsap.from(`.${styles.signatureList}`, {
        scrollTrigger: { trigger: `.${styles.signatureSection}`, start: "top 75%", toggleActions: "play none none none" },
        x: 50, opacity: 0, duration: 1, ease: "power3.out"
      });


      // 9. Curated Boutique
      gsap.from(`.${styles.boutiqueTitleWrapper}`, {
        scrollTrigger: { trigger: `.${styles.boutiqueSection}`, start: "top 85%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(`.${styles.viewAllLink}`, {
        scrollTrigger: { trigger: `.${styles.boutiqueSection}`, start: "top 85%", toggleActions: "play none none none" },
        x: 30, opacity: 0, duration: 0.8, delay: 0.15, ease: "power3.out"
      });
      gsap.from(`.${styles.boutiqueProductCard}`, {
        scrollTrigger: { trigger: `.${styles.boutiqueSection}`, start: "top 80%", toggleActions: "play none none none" },
        scale: 0.85, opacity: 0, duration: 0.8, stagger: 0.12, ease: "back.out(1.5)"
      });      // 10. Testimonial Slider Layered Reveal
      if (testimonialWrapperRef.current) {
        gsap.from(testimonialWrapperRef.current, {
          scrollTrigger: { trigger: testimonialWrapperRef.current, start: "top 80%", toggleActions: "play none none none" },
          scale: 0.9, y: 30, opacity: 0, duration: 1, ease: "power3.out"
        });
      }

      // 11. Second Banner Section Wrapper
      if (secondBannerWrapperRef.current) {
        gsap.from(secondBannerWrapperRef.current, {
          scrollTrigger: { trigger: secondBannerWrapperRef.current, start: "top 80%", toggleActions: "play none none none" },
          scale: 1.06, opacity: 0, duration: 1.1, ease: "power2.out"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const scrollBoutiqueLeft = () => {
    if (boutiqueSliderRef.current) {
      boutiqueSliderRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollBoutiqueRight = () => {
    if (boutiqueSliderRef.current) {
      boutiqueSliderRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.home} ref={containerRef}>
      {/* 1. Full-bleed GSAP Hero */}
      <HeroSection data={heroData} />


        {/* 3. New About Section */}
      <section className={styles.newAboutSection}>
        <div className="container">
          <div className={styles.newAboutGrid}>
            <div className={styles.newAboutTextCol}>
              <h4 className={styles.newAboutSubtitle}>L STUDIO • SINCE 2012</h4>
              <h2 className={styles.newAboutTitle}>
                READY TO IMPRESS
              </h2>
              <div className={styles.newAboutDesc}>
                <p>You dream about sleek, healthy looking hair that looks picture perfect, ready to rock on any occasion? We will make your dreams come true.</p>
                <p>Our expert stylists are dedicated to bringing out your natural beauty with precision and care. Step into our sanctuary and let us transform your everyday look into an absolute masterpiece.</p>
              </div>
              <button className={styles.newAboutBtn} id="home-eco-read-more-btn" onClick={() => navigate('/about')}>READ MORE</button>
            </div>
            <div className={styles.newAboutImageCol}>
              <img src={store4} alt="L Studio Interior" className={styles.newAboutImage} />
            </div>
          </div>
        </div>
      </section>
      {/* 2. Mosaic Grid */}
      <section className={styles.mosaicSection}>
        <div className="container">
          <div className={styles.newGrid}>
            <div className={styles.largeImageContainer}>
              <img src={store8} alt="Main Image" />
              <div className={styles.mosaicOverlay}>
                <h3>SOBHA CITY MALL</h3>
                <p>LOCATION</p>
              </div>
            </div>
            
            <div className={styles.smallImagesContainer}>
              <div className={styles.smallImageWrapper}>
                <img src={store5} alt="Small Image 1" />
                <div className={styles.mosaicOverlay}>
                  <h3>L'OREAL</h3>
                  <p>PRODUCT</p>
                </div>
              </div>
              <div className={styles.smallImageWrapper}>
                <img src={store7} alt="Small Image 2" />
                <div className={styles.mosaicOverlay}>
                  <h3>PROFESSIONALS</h3>
                  <p>STAFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    

      

      {/* 4. Replica Banner Section */}
      <section className={styles.replicaBannerSection}>
        <div className={styles.replicaBannerGrid}>
          <div className={styles.replicaBannerImageCol}>
            <img src={bannerImg} alt="L Studio Branches" className={styles.replicaBannerImage} />
          </div>
          <div className={styles.replicaBannerTextCol}>
            <div className={styles.replicaBannerTextInner}>
              <h2 className={styles.replicaBannerTitle}>
                L Studio Premium<br/>
                <span className={styles.replicaBannerScript}>Family Salon</span>
              </h2>
              <div className={styles.replicaBannerDesc}>
                <p>We have a total of 4 branches, one of which<br/>is situated in Sobha City mall and boasts an<br/>impressive entrance space on the ground floor.</p>
                <p>Additionally, we have plans to open 2 more<br/>branches in the near future, located in Cochin<br/>and Calicut.</p>
              </div>
              <button className={styles.replicaBannerBtn} id="home-banner-view-more-btn">VIEW MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expertise Section (Services) */}
      <section className={styles.expertiseSection}>
        
        {/* Group 1: Header + Hair Styling */}
        <div className={styles.expertiseTopGroup}>
          <div className={styles.beigeBlockLeft}></div>
          <div className={styles.expertiseContent}>
            
            {/* Header Area */}
            <div className={styles.expertiseHeader}>
              <div className={styles.expertiseHeaderContent}>
                <h3 className={styles.expertiseSubtitle}>Hair Salon in The City</h3>
                <p className={styles.expertiseIntro}>
                  We carry the finest beauty products and offer the largest selection of beauty services in the area.
                </p>
                <h2 className={styles.expertiseTitle}>OUR EXPERTISE</h2>
              </div>
            </div>

            {/* Row 1: Hair Styling (Text Left, Image Right) */}
            <div className={styles.expertiseRow}>
              <div className={styles.expertiseColText}>
                <div className={styles.expertiseTextInner}>
                  <h4 className={styles.expertiseServiceTitle}>Hair Styling</h4>
                  <p className={styles.expertiseServiceIntro}>
                    We pride ourselves in giving you the style that your hair deserves.
                  </p>
                  <p className={styles.expertiseServiceDesc}>
                    Our expert stylists create bespoke looks tailored to your unique features and lifestyle. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                  <button className={styles.expertiseBookBtn}>BOOK</button>
                </div>
              </div>
              <div className={styles.expertiseColImageWrapper}>
                <div className={styles.expertiseImageInner}>
                  <img src={hairstylingImg} alt="Hair Styling" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Group 2: Makeup & Bridal */}
        <div className={styles.expertiseMiddleGroup}>
          <div className={styles.beigeBlockRight}></div>
          <div className={styles.expertiseContent}>

            {/* Row 2: Makeup & Bridal (Image Left, Text Right) */}
            <div className={`${styles.expertiseRow} ${styles.expertiseRowReverse}`}>
              <div className={styles.expertiseColText}>
                <div className={styles.expertiseTextInner}>
                  <h4 className={styles.expertiseServiceTitle}>Makeup & Bridal</h4>
                  <p className={styles.expertiseServiceIntro}>
                    Give an intro to what your offer is about and how it helps them here.
                  </p>
                  <p className={styles.expertiseServiceDesc}>
                    Flawless makeup application for your most important days, ensuring you look breathtaking. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <button className={styles.expertiseBookBtn}>BOOK</button>
                </div>
              </div>
              <div className={styles.expertiseColImageWrapper}>
                <div className={styles.expertiseImageInner}>
                  <img src={bridal2Img} alt="Makeup & Bridal" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Group 3: Spa & Wellness */}
        <div className={styles.expertiseBottomGroup}>
          <div className={styles.beigeBlockLeftBottom}></div>
          <div className={styles.expertiseContent}>

            {/* Row 3: Spa & Wellness (Text Left, Image Right) */}
            <div className={styles.expertiseRow}>
              <div className={styles.expertiseColText}>
                <div className={styles.expertiseTextInner}>
                  <h4 className={styles.expertiseServiceTitle}>Spa & Wellness</h4>
                  <p className={styles.expertiseServiceIntro}>
                    A complete sanctuary for your mind and body.
                  </p>
                  <p className={styles.expertiseServiceDesc}>
                    Offering premium massages and skin treatments to rejuvenate your senses. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                  <button className={styles.expertiseBookBtn}>BOOK</button>
                </div>
              </div>
              <div className={styles.expertiseColImageWrapper}>
                <div className={styles.expertiseImageInner}>
                  <img src={spaImg} alt="Spa & Wellness" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 5. Signature Selection */}
      <section className={styles.signatureSection}>
        <div className="container">
          <div className={styles.signatureLayout}>
            
            {/* Left Column: Typography Title */}
            <div className={styles.signatureTitleWrapper}>
              <h2 className={styles.signatureTitle}>HAIR CARE</h2>
              <h2 className={styles.signatureSubtitle}>PRICES</h2>
            </div>

            {/* Right Column: Price List */}
            <div className={styles.signatureList}>
              <div className={styles.priceItems}>
                <div className={styles.priceItem}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceName}>HAIR CUT</span>
                    <span className={styles.priceDesc}>Curabitur id posuere libero vel aliquet ipsum</span>
                  </div>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 699</span>
                </div>
                <div className={styles.priceItem}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceName}>HAIR SPA</span>
                    <span className={styles.priceDesc}>Curabitur id posuere libero vel aliquet ipsum</span>
                  </div>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 1299</span>
                </div>
                <div className={styles.priceItem}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceName}>SMOOTHENING</span>
                    <span className={styles.priceDesc}>Curabitur id posuere libero vel aliquet ipsum</span>
                  </div>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 4999</span>
                </div>
                <div className={styles.priceItem}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceName}>KERATIN TREATMENT</span>
                    <span className={styles.priceDesc}>Curabitur id posuere libero vel aliquet ipsum</span>
                  </div>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 7999</span>
                </div>
                <div className={styles.priceItem}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceName}>HIGHLIGHTS</span>
                    <span className={styles.priceDesc}>Curabitur id posuere libero vel aliquet ipsum</span>
                  </div>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 399</span>
                </div>
                <div className={styles.priceItem}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceName}>GLOBAL COLOUR</span>
                    <span className={styles.priceDesc}>Curabitur id posuere libero vel aliquet ipsum</span>
                  </div>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 4999</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* 7. Testimonial Slider */}
 
      {/* Banner Section */}
      <div ref={secondBannerWrapperRef}>
        <BannerSection />
      </div>

      {/* 6. Curated Boutique */}
      <section className={styles.boutiqueSection}>
        <div className={styles.boutiqueHeader}>
          <div className={styles.boutiqueTitleWrapper}>
            {/* <SectionHeading title="OUR CURATED BOUTIQUE" /> */}
            <h3 className={styles.boutiqueSubtitle}>Exclusive Haircare & Styling</h3>
            <p className={styles.boutiqueDesc}>
              Discover our exclusive collection of luxury hair care and styling essentials, 
              carefully selected by our experts to maintain your salon-perfect look at home.
            </p>
          </div>
          <a href="#" className={styles.viewAllLink}>
            View all
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div 
          className={styles.boutiqueSliderWrapper}
          onMouseEnter={() => setIsBoutiqueHovered(true)}
          onMouseLeave={() => setIsBoutiqueHovered(false)}
        >
          {/* Left Arrow */}
          <button 
            id="home-boutique-prev-btn"
            className={`${styles.boutiqueSliderArrow} ${styles.boutiqueSliderArrowLeft} ${isBoutiqueHovered ? styles.visible : ''}`}
            onClick={scrollBoutiqueLeft}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Slider */}
          <div className={styles.boutiqueSlider} ref={boutiqueSliderRef}>
            {[
              { id: 1, name: 'Vitamino Shampoo', brand: 'L\'Oreal', price: '₹ 745', img: vitaminoImg },
              { id: 2, name: 'Absolut Repair Shampoo', brand: 'L\'Oreal', price: '₹ 745', img: loriel1Img },
              { id: 3, name: 'Liss Unlimited Shampoo', brand: 'L\'Oreal', price: '₹ 745', img: lissImg },
              { id: 4, name: 'OI Shampoo', brand: 'Davines', price: '₹ 1900', img: oiImg },
              { id: 5, name: 'Love Curl Shampoo', brand: 'Davines', price: '₹ 1600', img: loveImg },
              { id: 6, name: 'OI All in One Milk', brand: 'Davines', price: '₹ 1500', img: oialliImg }
            ].map(product => (
              <div key={product.id} className={styles.boutiqueProductCard}>
                <img 
                  src={product.img} 
                  alt={product.name}
                  className={styles.boutiqueProductBackground}
                />
                <div className={styles.boutiqueProductOverlay}></div>
                <div className={styles.boutiqueProductContent}>
                  <span className={styles.boutiqueProductCategory}>{product.brand}</span>
                  <h3 className={styles.boutiqueProductName}>{product.name}</h3>
                  <p className={styles.boutiqueProductPrice}>{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            id="home-boutique-next-btn"
            className={`${styles.boutiqueSliderArrow} ${styles.boutiqueSliderArrowRight} ${isBoutiqueHovered ? styles.visible : ''}`}
            onClick={scrollBoutiqueRight}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>

      


      {/* 8. Visit Our Studios */}
      {/* <section className={styles.visitSection}>
        <div className="container">
          <SectionHeading title="VISIT OUR STUDIOS" className={styles.visitHeading} />
          <div className={styles.visitGrid}>
            <div className={styles.locationsList}>
              <div className={styles.locationCard}>
                <h3>MAYFAIR FLAGSHIP</h3>
                <p>124 Luxury Lane, Fifth Avenue<br/>New York, NY 10001</p>
                <div className={styles.phone}>
                  <Phone size={16} /> +1 (555) 123-4567
                </div>
                <a href="#" className={styles.directionsLink}>GET DIRECTIONS <ArrowRight size={14} /></a>
              </div>
              <div className={styles.locationCard}>
                <h3>THE CHELSEA STUDIO</h3>
                <p>89 Gallery Walk, Arts District<br/>New York, NY 10011</p>
                <div className={styles.phone}>
                  <Phone size={16} /> +1 (555) 987-6543
                </div>
                <a href="#" className={styles.directionsLink}>GET DIRECTIONS <ArrowRight size={14} /></a>
              </div>
            </div>
            <div className={styles.mapImage}>
              
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" alt="Map Location" />
              <div className={styles.mapOverlay}>
                <Button variant="filled" id="home-map-view-btn">VIEW INTERACTIVE MAP</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
