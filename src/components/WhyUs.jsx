import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './WhyUs.css';

const WhyUs = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding why-us-section">
      <div className="container">
        <h2 className="section-title">{t.whyUs.title}</h2>
        <div className="why-us-grid">
          <div className="why-card">
            <h3 className="why-number">01</h3>
            <h4>{t.whyUs.card1.title}</h4>
            <p>{t.whyUs.card1.desc}</p>
          </div>
          <div className="why-card">
            <h3 className="why-number">02</h3>
            <h4>{t.whyUs.card2.title}</h4>
            <p>{t.whyUs.card2.desc}</p>
          </div>
          <div className="why-card">
            <h3 className="why-number">03</h3>
            <h4>{t.whyUs.card3.title}</h4>
            <p>{t.whyUs.card3.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
