import React from 'react';
import './Donate.css';
import qrCode from '../assets/images/payment-qr.jpg';

const Donate = () => {
  return (
    <section id="donate" className="section-padding donate-section">
      <div className="container donate-container">
        <h2 className="section-title">Scan to Pay</h2>
        <div className="donate-content">
          <div className="qr-card">
            <h3>Balasaheb Mulekar</h3>
            <div className="qr-image-wrapper">
              <img src={qrCode} alt="Payment QR Code" className="qr-image" />
            </div>
            <p>Scan using any UPI app</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
