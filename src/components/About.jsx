import React from 'react';
import aboutImg from '../assets/images/Gemini_Generated_Image_5h5prb5h5prb5h5p.png';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About Suryasuraksha Factory/Office" />
          <div className="experience-badge">
            <div className="badge-item">
              <span className="years">5+</span>
              <span className="text">{t.about.yearsTrust}</span>
            </div>
            <div className="badge-divider"></div>
            <div className="badge-item">
              <span className="years">2000+</span>
              <span className="text">{t.about.customers}</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title" style={{textAlign: 'left'}}>{t.about.title}</h2>
          <p className="about-text">
            <strong>Suryasuraksha</strong> - {t.about.text1}
          </p>
          <p className="about-text">
            {t.about.text2}
          </p>
          <ul className="about-points">
            <li>✅ {t.about.point1}</li>
            <li>✅ {t.about.point2}</li>
            <li>✅ {t.about.point3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
