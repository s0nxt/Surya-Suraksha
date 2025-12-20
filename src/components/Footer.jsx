import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={logo} alt="Suryasuraksha" />
            <span>Suryasuraksha</span>
          </div>
          <p>{t.footer.desc}</p>
        </div>
        
        <div className="footer-col links-col">
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li><a href="#hero">{t.nav.home}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#products">{t.nav.products}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </div>
        
        <div className="footer-col contact-col">
          <h4>{t.footer.contactUs}</h4>
          <p>Email: balasahebmulekar1994@gmail.com</p>
          <p>Phone: {t.contact.phoneNumber}</p>
          <div className="footer-socials">
             {/* Icons can be added here */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
