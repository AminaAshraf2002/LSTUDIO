import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import HeroSection from '../components/HeroSection';
import { Search, MapPin, Phone, ArrowLeft, ArrowRight, Quote, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import store from '../assets/bridal.png';
import store1 from '../assets/hair.png';
import store3 from '../assets/haidra.png';
import store4 from '../assets/store6.webp';
import store5 from '../assets/loriel.webp';
import store6 from '../assets/nail.webp';
import store7 from '../assets/store3.webp';
import store8 from '../assets/store.webp';
import bannerImg from '../assets/banner.png';
import signatureImg from '../assets/unnamed.webp';
import vitaminoImg from '../assets/Vitamino.jpg';
import loriel1Img from '../assets/Loriel1.webp';
import lissImg from '../assets/Liss.jpg';
import oiImg from '../assets/oi.webp';
import loveImg from '../assets/love.jpg';
import oialliImg from '../assets/oialli.webp';

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

      // Banner Parallax
      if (bannerImgRef.current) {
        gsap.to(bannerImgRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.bannerSection}`,
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

      // 7. Hair & Beauty Services - Row 1
      const row1 = gsap.utils.toArray(`.${styles.replicaGrid}`)[0];
      if (row1) {
        gsap.from(row1.querySelector(`.${styles.replicaFeatured}`), {
          scrollTrigger: { trigger: row1, start: "top 80%", toggleActions: "play none none none" },
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out"
        });
        gsap.from(row1.querySelectorAll(`.${styles.replicaStandard}`), {
          scrollTrigger: { trigger: row1, start: "top 80%", toggleActions: "play none none none" },
          y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
        });
      }

      // 7. Hair & Beauty Services - Row 2
      const row2 = gsap.utils.toArray(`.${styles.replicaGridReverse}`)[0];
      if (row2) {
        gsap.from(row2.querySelector(`.${styles.replicaFeatured}`), {
          scrollTrigger: { trigger: row2, start: "top 80%", toggleActions: "play none none none" },
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out"
        });
        gsap.from(row2.querySelectorAll(`.${styles.replicaStandard}`), {
          scrollTrigger: { trigger: row2, start: "top 80%", toggleActions: "play none none none" },
          y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
        });
      }

      // 7. Hair & Beauty Services - Row 3
      const row3 = gsap.utils.toArray(`.${styles.replicaGridLast}`)[0];
      if (row3) {
        gsap.from(row3.querySelector(`.${styles.replicaFeatured}`), {
          scrollTrigger: { trigger: row3, start: "top 80%", toggleActions: "play none none none" },
          x: -50, scale: 0.9, opacity: 0, duration: 0.8, ease: "power3.out"
        });
        gsap.from(row3.querySelectorAll(`.${styles.replicaStandard}`), {
          scrollTrigger: { trigger: row3, start: "top 80%", toggleActions: "play none none none" },
          y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
        });
      }

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
      });

      // 10. Testimonial Slider Layered Reveal
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
      {/* 2. Mosaic Grid */}
      <section className={styles.mosaicSection}>
        <div className="container">
          <div className={styles.mosaicGrid}>
            <div className={styles.mosaicCol}>
              <div className={`${styles.mosaicItem} ${styles.mosaicItemTall}`}>
                <img src={store8} alt="Sobha City Mall" />
                <div className={styles.mosaicOverlay}>
                  <h3>SOBHA CITY MALL</h3>
                  <p>LOCATION</p>
                </div>
              </div>
              <div className={`${styles.mosaicItem} ${styles.mosaicItemShort}`}>
                <img src={store5} alt="L'OREAL" />
                <div className={styles.mosaicOverlay}>
                  <h3>L'OREAL</h3>
                  <p>PRODUCT</p>
                </div>
              </div>
            </div>
            
            <div className={styles.mosaicCol}>
              <div className={`${styles.mosaicItem} ${styles.mosaicItemShort}`}>
                <img src={store6} alt="Services" />
                <div className={styles.mosaicOverlay}>
                  <h3>TOP CLASS</h3>
                   <p>SERVICES</p>
                </div>
              </div>
              <div className={`${styles.mosaicItem} ${styles.mosaicItemTall}`}>
                <img src={store7} alt="Professionals" />
                <div className={styles.mosaicOverlay}>
                  <h3>PROFESSIONALS</h3>
                  <p>STAFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. EcoGlow Style About Section */}
      <section className={styles.ecoHeaderSection}>
        <div className="container">
          <div className={styles.ecoHeaderGrid}>
            <div className={styles.ecoHeaderLeft}>
              <h1 className={styles.ecoTitle}>
                <span className={styles.ecoHighlight}>L STUDIO • SINCE 2012</span><br/>READY TO IMPRESS
              </h1>
            </div>
            <div className={styles.ecoHeaderRight}>
              <p className={styles.ecoDesc}>
                You dream about sleek, healthy looking hair that looks picture perfect, ready to rock on any occasion? We will make your dreams come true. Our expert stylists are dedicated to bringing out your natural beauty with precision and care. Step into our sanctuary and let us transform your everyday look into an absolute masterpiece.
              </p>
              <button className={styles.ecoKnowMoreBtn}>READ MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ecoBottomSection}>
        <div className="container">
          <div className={styles.ecoBottomGrid}>
            <div className={styles.ecoImageContainer}>
              <div className={styles.ecoParallaxWrapper}>
                <img 
                  ref={parallaxImgRef}
                  src={store4} 
                  alt="L Studio Interior" 
                  className={styles.ecoParallaxImage}
                />
              </div>
            </div>

            <div className={styles.ecoAccordionContainer}>
              <div className={styles.ecoAccordionItem}>
                <div className={styles.ecoAccordionHeader} onClick={() => toggleAccordion('artistry')}>
                  <h2>The Artistry</h2>
                  <div className={styles.ecoIconWrapper}>
                    {openAccordion === 'artistry' ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                <div className={`${styles.ecoAccordionContent} ${openAccordion === 'artistry' ? styles.ecoOpen : ''}`}>
                  <div className={styles.ecoContentInner}>
                    <img src="https://lstudiosalons.in/wp-content/uploads/2023/08/DFGS-300x300.jpg" alt="The Artistry" className={styles.ecoContentImage} />
                    <p>Our master stylists blend classic techniques with modern trends to craft bespoke looks. Every cut, color, and treatment is tailored exclusively to complement your unique features and lifestyle.</p>
                  </div>
                </div>
              </div>

              <div className={styles.ecoAccordionItem}>
                <div className={styles.ecoAccordionHeader} onClick={() => toggleAccordion('experience')}>
                  <h2>The Experience</h2>
                  <div className={styles.ecoIconWrapper}>
                    {openAccordion === 'experience' ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                <div className={`${styles.ecoAccordionContent} ${openAccordion === 'experience' ? styles.ecoOpen : ''}`}>
                  <div className={styles.ecoContentInner}>
                    <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHzsr65ZT9Ihn1WX2BB9cxXDorNKQIvW_FL2YdsZJBgeEzWyym_8iGEusEvdMHn1iQONP16K_t-SRizDMLYjX7tJEAnt1q0y2U9NwCh60fSkUkBeuOnUEG9rqls1NK-6GqvusQlFi-d8r46=w612-h765-n-k-no-nu" alt="The Experience" className={styles.ecoContentImage} />
                    <p>From the moment you arrive, you're enveloped in a luxurious sanctuary. We prioritize your comfort and relaxation, ensuring every visit is a rejuvenating escape from the everyday.</p>
                  </div>
                </div>
              </div>

              <div className={styles.ecoAccordionItem}>
                <div className={styles.ecoAccordionHeader} onClick={() => toggleAccordion('philosophy')}>
                  <h2>The Philosophy</h2>
                  <div className={styles.ecoIconWrapper}>
                    {openAccordion === 'philosophy' ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                <div className={`${styles.ecoAccordionContent} ${openAccordion === 'philosophy' ? styles.ecoOpen : ''}`}>
                  <div className={styles.ecoContentInner}>
                    <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGd_gVEvFogYElyvnYx28c55yXLpNi6fEK6tJQ_871SUd5sASuLrvRqKLstZjr_Xhu-Wx2CyYyp3z65XAOha1mg9LMqcmGWN-WV1LC7IdeqvZdpQcecHqtno2yEtheDy6BF3zM=w612-h612-n-k-no-nu" alt="The Philosophy" className={styles.ecoContentImage} />
                    <p>We believe that true beauty stems from healthy hair and confident self-expression. We exclusively use premium, eco-friendly products that nourish your hair without compromising on breathtaking results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerBackground}>
          <img ref={bannerImgRef} src={bannerImg} alt="L Studio Branches" />
        </div>
        <div className="container">
          <div className={styles.bannerContent}>
            <h2>L STUDIO  PREMIUM <br /> FAMILY SALON</h2>
            <p>
              We have a total of 4 branches, one of which <br /> is situated in Sobha City mall and boasts an <br /> impressive entrance space on the ground floor. <br /> Additionally, we have plans to open 2 more <br /> branches in the near future, located in Cochin <br /> and Calicut.
            </p>
            <Button className={styles.bannerButton}>VIEW MORE</Button>
          </div>
        </div>
      </section>

      {/* 4. Hair & Beauty Services */}
      <section className={styles.replicaSection}>
        <div className="container">
          <div className={styles.replicaHeader}>
            <h3>Hair & Beauty Services</h3>
            <p>We carry the finest beauty products and offer the largest selection of beauty services in the area.</p>
          </div>

          {/* Row 1 - Hair Styling */}
          <div className={styles.replicaGrid}>
            <div className={styles.replicaFeatured}>
              <div className={styles.replicaFeaturedImg}>
                <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" alt="Hair Styling" />
              </div>
              <div className={styles.replicaFeaturedContent}>
                <h4>HAIR STYLING</h4>
                <p>
                  Our expert stylists create bespoke looks tailored to your unique features and lifestyle.
                </p>
                <button>READ MORE</button>
              </div>
            </div>
            <div className={styles.replicaStandard}>
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" alt="Hair Color" />
            </div>
            <div className={styles.replicaStandard}>
              <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800" alt="Hair Treatment" />
            </div>
          </div>

          {/* Row 2 - Makeup & Bridal */}
          <div className={styles.replicaGridReverse}>
            <div className={styles.replicaStandard}>
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" alt="Bridal Makeup" />
            </div>
            <div className={styles.replicaStandard}>
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800" alt="Makeup Brushes" />
            </div>
            <div className={styles.replicaFeatured}>
              <div className={styles.replicaFeaturedContent}>
                <h4>MAKEUP & BRIDAL</h4>
                <p>
                  Flawless makeup application for your most important days, ensuring you look breathtaking.
                </p>
                <button>READ MORE</button>
              </div>
              <div className={styles.replicaFeaturedImg}>
                <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800" alt="Professional Makeup" />
              </div>
            </div>
          </div>

          {/* Row 3 - Spa & Wellness */}
          <div className={`${styles.replicaGrid} ${styles.replicaGridLast}`}>
            <div className={styles.replicaFeatured}>
              <div className={styles.replicaFeaturedImg}>
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" alt="Spa & Wellness" />
              </div>
              <div className={styles.replicaFeaturedContent}>
                <h4>SPA & WELLNESS</h4>
                <p>
                  A complete sanctuary for your mind and body, offering premium massages and skin treatments.
                </p>
                <button>READ MORE</button>
              </div>
            </div>
            <div className={styles.replicaStandard}>
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" alt="Facial" />
            </div>
            <div className={styles.replicaStandard}>
              <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800" alt="Relaxation" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Selection */}
      <section className={styles.signatureSection}>
        <div className="container">
          <div className={styles.signatureGrid}>
            <div className={styles.signatureImage}>
              <img src={signatureImg} alt="Signature Selection" />
              <div className={styles.imageBadge}>
                <span>L STUDIO</span>
                <small>Est. 2008</small>
              </div>
            </div>
            <div className={styles.signatureList}>
              <h2>HAIR CARE <br/><span className="gold-text italic">PRICES</span></h2>
              <div className={styles.priceItems}>
                <div className={styles.priceItem}>
                  <span className={styles.priceName}>HAIR CUT</span>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 699</span>
                </div>
                <div className={styles.priceItem}>
                  <span className={styles.priceName}>HAIR SPA</span>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 1299</span>
                </div>
                <div className={styles.priceItem}>
                  <span className={styles.priceName}>SMOOTHENING</span>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 4999</span>
                </div>
                <div className={styles.priceItem}>
                  <span className={styles.priceName}>KERATIN TREATMENT</span>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 7999</span>
                </div>
                <div className={styles.priceItem}>
                  <span className={styles.priceName}>HIGHLIGHTS</span>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 399</span>
                </div>
                <div className={styles.priceItem}>
                  <span className={styles.priceName}>GLOBAL COLOUR</span>
                  <span className={styles.priceLine}></span>
                  <span className={styles.priceValue}>₹ 4999</span>
                </div>
              </div>
              <a href="#" className={styles.downloadLink}>DOWNLOAD FULL MENU (PDF)</a>
            </div>
          </div>
        </div>
      </section>

      
      {/* 7. Testimonial Slider */}
      <div ref={testimonialWrapperRef}>
        <TestimonialSlider />
      </div>
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
                <Button variant="filled">VIEW INTERACTIVE MAP</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
