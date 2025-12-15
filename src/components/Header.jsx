import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const { t, switchLanguage, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src={logo} alt="Suryasuraksha Logo" />
          {/* Fallback text if logo fails or for SEO */}
          <span className="logo-text">Suryasuraksha</span>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={() => scrollToSection('hero')}>{t.nav.home}</li>
            <li onClick={() => scrollToSection('about')}>{t.nav.about}</li>
            <li onClick={() => scrollToSection('features')}>{t.nav.features}</li>
            <li onClick={() => scrollToSection('products')}>{t.nav.products}</li>
            <li onClick={() => scrollToSection('contact')}>{t.nav.contact}</li>
            
            <li className="lang-switcher">
              <select 
                value={language} 
                onChange={(e) => switchLanguage(e.target.value)}
                className="lang-select"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
                <option value="ta">தமிழ்</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
            </li>
          </ul>
        </nav>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
