import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic Validation
    if (!formData.name || !formData.phone || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    // Simulate Submission
    console.log('Form Submitted:', formData);
    setFormStatus('success');
    setFormData({ name: '', phone: '', message: '' });
    
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{textAlign: 'left'}}>{t.contact.title}</h2>
          <p className="contact-subtitle">{t.contact.subtitle}</p>
          
          <div className="info-item">
            <h4>{t.contact.address}</h4>
            <p>{t.contact.addressText}</p>
          </div>
          
          <div className="info-item">
            <h4>{t.contact.email}</h4>
            <p>balasahebmulekar1994@gmail.com</p>
          </div>

          <div className="info-item">
            <h4>{t.contact.phone}</h4>
            <p>{t.contact.phoneNumber}</p>
          </div>
          
          <div className="social-links">
            <a href="https://wa.me/917499217265" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              {t.socials.whatsapp}
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder={t.contact.form.placeholderName}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">{t.contact.form.phone}</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder={t.contact.form.placeholderPhone}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder={t.contact.form.placeholderMessage}
              ></textarea>
            </div>
            
            {formStatus === 'error' && <p className="error-msg">{t.contact.form.error}</p>}
            {formStatus === 'success' && <p className="success-msg">{t.contact.form.success}</p>}
            
            <button type="submit" className="btn btn-primary btn-block">{t.contact.form.submit}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
