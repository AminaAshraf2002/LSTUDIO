import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './About.module.css';

import image1 from '../assets/store4.webp';
import image2 from '../assets/store1.webp';
import image3 from '../assets/store3.webp';
import image4 from '../assets/store4.webp';
import image5 from '../assets/store5.webp';
import image6 from '../assets/store6.webp';

/* -------------------------------------------------------------------- */
/*  Content — kept as data so the page reads as one clear source of truth */
/* -------------------------------------------------------------------- */

const stats = [
  { value: '2025', label: 'Est. In Thrissur' },
  { value: '100+', label: 'Professionals' },
  { value: '04', label: 'Branches' },
  { value: '02', label: 'Signature Brands' },
];

const milestones = [
  {
    tag: '2025',
    title: 'The First Chair',
    copy: 'ATMOSOTWELL CARE BEAUTY SERVICES LLP opens its first salon in Fathima Nagar, Thrissur — a proprietorship of 8, built on care over volume.',
    thumb: image2
  },
  {
    tag: 'Today',
    title: 'Two Brands, One Standard',
    copy: '100 talented professionals now carry the name forward across two distinctive houses — L Studio and Hair Studio De Luxe.',
  },
  {
    tag: '04',
    title: 'Branches Across Kerala',
    copy: 'Thrissur, Edappal, Pattambi and K Mall Kakkatil — four rooms, one uncompromising idea of what a salon should feel like.',
    thumb: image3
  },
  {
    tag: 'Next',
    title: 'Perumpilavu',
    copy: 'Our newest chapter is already under construction, and it\u2019s coming soon.',
    badge: 'Coming Soon',
    thumb: image4
  },
];

const partners = [
  { name: "L'ORÉAL", italic: false },
  { name: 'davines', italic: true },
  { name: 'OLAPLEX.', italic: false },
  { name: 'KÉRASTASE', italic: false },
];

const services = [
  { title: 'Hairdressing', desc: 'Cut, colour & keratin artistry', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600' },
  { title: 'Manicure & Pedicure', desc: 'Nail care, refined', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600' },
  { title: 'Facial Treatments', desc: 'Skin rituals that restore', img: 'https://images.unsplash.com/photo-1512496015851-a1cbf5c5617a?auto=format&fit=crop&q=80&w=600' },
  { title: 'Body Procedures', desc: 'Wellness, head to toe', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600' },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.aboutPage}>

      {/* ============================= HERO ============================= */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent} data-aos="fade-up" data-aos-duration="800">
          <h1 className={styles.heroTitle}>ABOUT US.</h1>
          <p className={styles.heroDesc}>
            For over a decade, L Studio has been the sanctuary for those who seek transformation through artistry and a bespoke luxury experience.
          </p>
        </div>
      </section>

      {/* ============================= STORY ============================= */}
      <section className={`${styles.storySection} ${styles.lightSection}`}>
        <div className="container">
          <div className={styles.storyGrid}>

            <div className={styles.storyImageWrapper} data-aos="fade-right" data-aos-duration="1000">
              <span className={styles.storyGhostNumeral} aria-hidden="true">2025</span>
              <div className={styles.storyImageFrame}>
                <img src={image1} alt="L Studio salon interior" className={styles.storyImage} />
              </div>
            </div>

            <div className={styles.storyText} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">
              <span className={styles.eyebrowLabel}>Our Story</span>
              <h2>A Decade of<br />Quiet Ambition</h2>
              <p className={styles.leadPara}>
                ATMOSOTWELL CARE BEAUTY SERVICES LLP — known to Kerala simply as L STUDIO —
                began its journey in Fathima Nagar, Thrissur, the Cultural and Gold Capital
                of Kerala. We opened as a proprietorship of 8, committed to one idea:
                premium care, delivered with genuine professionalism.
              </p>
              <p>
                That single idea grew into one of Kerala&#8217;s leading names in beauty and
                wellness. Today the company proudly manages two distinctive houses —
                L Studio and Hair Studio De Luxe — through a team of 100 talented
                professionals across four branches, with a fifth already taking shape
                in Perumpilavu.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================= TIMELINE ============================= */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timelineLayout}>
            {/* Left Column: Featured Post */}
            <div className={styles.timelineFeatured} data-aos="fade-right">
              <div className={styles.timelineFeaturedImage}>
                <img src={image5} alt="Featured Milestone" />
              </div>
              <span className={styles.featuredEyebrow}>How We Grew</span>
              <h3 className={styles.featuredTitle}>From One Chair to Five Addresses</h3>
            </div>

            {/* Right Column: List Timeline */}
            <div className={styles.timelineList}>
              {milestones.map((m, i) => (
                <div className={styles.timelineItem} key={m.tag} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className={styles.timelineNumWrap}>
                    <span className={styles.timelineNumber}>{String(i + 1).padStart(2, '0')}</span>
                    <div className={styles.timelineLineHorizontal} />
                  </div>
                  
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTextContent}>
                      <span className={styles.timelineTag}>{m.tag}</span>
                      <h4>{m.title}</h4>
                      <p>{m.copy}</p>
                      {m.badge && <span className={styles.timelineBadge}>{m.badge}</span>}
                    </div>
                    {m.thumb && (
                      <div className={styles.timelineThumb}>
                        <img src={m.thumb} alt={m.title} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        {/* ============================= PARTNERSHIPS (dark, inverted) ============================= */}
      <section className={styles.partnersDarkSection}>
        <div className="container">
          <div className={styles.partnersDarkContent}>

            <div data-aos="fade-up">
              <span className={styles.eyebrowLabelDark}>Global Partnerships</span>
              <h2 className={styles.partnersDarkHeading}>
                Trusted Ingredients,<br />Proven Everywhere.
              </h2>
            </div>

            <div className={styles.partnersDarkText} data-aos="fade-up" data-aos-delay="150">
              <p>
                Our salon is exclusively partnered with L&#8217;Or&eacute;al Professional,
                and we&#8217;re authorised retailers of products that pass roughly
                100 quality checks before they ever reach a client. L&#8217;Or&eacute;al,
                headquartered in Paris, is the world&#8217;s largest producer of premium
                cosmetics, perfume, hair care and skin care, with a presence in
                over 150 countries.
              </p>
              <p>
                We chose L&#8217;Or&eacute;al because our focus is the highest quality for
                every client who sits in our chair — which is why we invest in
                continuous training for every member of staff.
              </p>
            </div>

            <div className={styles.partnersDarkList} data-aos="fade-up" data-aos-delay="250">
              {partners.map((p) => (
                <span key={p.name} className={p.italic ? styles.italicPartner : ''}>
                  {p.name}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ============================= PHILOSOPHY ============================= */}
      <section className={styles.innerBeautySection}>
        <div className="container">
          <div className={styles.innerBeautyContent}>

            <div className={styles.philosophyQuoteBlock} data-aos="fade-up">
              <span className={styles.quoteMark} aria-hidden="true">&#8220;</span>
              <p className={styles.quoteText}>
                Beauty comes from the inside — inside the beauty salon.
              </p>
              <span className={styles.quoteAttribution}>Rebecca Gregory</span>

              <div className={styles.innerBeautyColumns}>
                <p>
                  At L Studio, we&#8217;re dedicated to uncovering the beauty that&#8217;s
                  unique within each of our clients and letting it shine, in the ways
                  that matter to them. That passion is reflected in the happiness our
                  clients express, visit after visit.
                </p>
                <p>
                  We promise top-notch products and services that leave every client
                  satisfied. Constant research into the market and how people feel
                  about spa and beauty products keeps us current with the latest
                  technology and trends.
                </p>
              </div>
            </div>

            <div className={styles.magazineImageContainer} data-aos="fade-up" data-aos-delay="150">
              <div className={styles.magazineOverlapBox}>
                <span className={styles.magazineOverlapText}>PHILOSOPHY</span>
              </div>
              <img
                src={image6}
                alt="Inner Beauty"
                className={styles.magazineImage}
              />
              <div className={styles.magazineSmallBox}></div>
            </div>

          </div>
        </div>
      </section>

    

     

      {/* ============================= CTA ============================= */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent} data-aos="zoom-in">
            <span className={styles.heroEyebrow}>Reserve Your Chair</span>
            <h2 className={styles.ctaHeading}>Your Transformation<br />Starts Here.</h2>
            <a href="#book" className={styles.ctaButton}>Book an Appointment</a>
          </div>
        </div>
      </section>

      {/* Floating Chat */}
      {/* <div className={styles.floatingChat}>
        <button className={styles.chatBtn} aria-label="Open chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default About;