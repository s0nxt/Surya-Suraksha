import React, { useState, useEffect } from 'react';
import heroBg1 from '../assets/images/Gemini_Generated_Image_bcrtdcbcrtdcbcrt.png';
import heroBg2 from '../assets/images/Gemini_Generated_Image_2jki8a2jki8a2jki.png';
import heroBg3 from '../assets/images/Gemini_Generated_Image_5h5prb5h5prb5h5p.png';
import heroBg4 from '../assets/images/Gemini_Generated_Image_omsy0gomsy0gomsy.png';
import heroBg5 from '../assets/images/Gemini_Generated_Image_ot5ua2ot5ua2ot5u.png';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {images.map((img, index) => (
        <div 
          key={index}
          className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay">
        <div className="container hero-content fade-in-up">
          <h1 className="hero-title">
            <span className="brand-name">Suryasuraksha</span>
            <span className="tagline">{t.hero.tagline}</span>
          </h1>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <button className="btn btn-primary hero-btn" onClick={scrollToContact}>
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
