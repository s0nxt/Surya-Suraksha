import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './VideoSection.css';

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="video-demo" className="video-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.video.title}</h2>
          <p className="section-subtitle">{t.video.subtitle}</p>
        </div>
        <div className="video-wrapper fade-in-up">
          <video 
            controls 
            className="promo-video"
            preload="metadata"
          >
            <source src="/video/promo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
