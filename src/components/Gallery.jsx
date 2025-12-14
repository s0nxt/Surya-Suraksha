import React from 'react';
import prod1 from '../assets/images/Gemini_Generated_Image_omsy0gomsy0gomsy.png';
import prod2 from '../assets/images/Gemini_Generated_Image_ot5ua2ot5ua2ot5u.png';
import prod3 from '../assets/images/Gemini_Generated_Image_ybx37vybx37vybx3.png';
import prod4 from '../assets/images/Gemini_Generated_Image_lnn8q9lnn8q9lnn8.png';
import prod5 from '../assets/images/Gemini_Generated_Image_inabcfinabcfinab.png';
import prod6 from '../assets/images/Gemini_Generated_Image_mf16ztmf16ztmf16.png';
import './Gallery.css';

import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // Re-define products inside component to access 't'
  const products = [
    { 
      id: 1, 
      img: prod1, 
      name: t.gallery.products.stove3.name, 
      category: t.gallery.products.stove3.cat,
      description: t.gallery.products.stove3.desc,
      specs: ["Toughened Glass Top", "Brass Burners", "Anti-skid Feet", "360-degree Swivel Nozzle"], // Keeping specs English for now as they are technical, or could translate if needed
      safety: t.gallery.products.stove3.safety
    },
    { 
      id: 2, 
      img: prod2, 
      name: t.gallery.products.chimney.name, 
      category: t.gallery.products.chimney.cat,
      description: t.gallery.products.chimney.desc,
      specs: ["1200 m3/hr Suction", "Filterless Technology", "Touch & Gesture Control", "LED Lamps"],
      safety: t.gallery.products.chimney.safety
    },
    { 
      id: 3, 
      img: prod3, 
      name: t.gallery.products.regulator.name, 
      category: t.gallery.products.regulator.cat,
      description: t.gallery.products.regulator.desc,
      specs: ["Heavy Duty Zinc Alloy", "Dual Lock System", "Pressure Gauge Indicator"],
      safety: t.gallery.products.regulator.safety
    },
    { 
      id: 4, 
      img: prod4, 
      name: t.gallery.products.stove2.name, 
      category: t.gallery.products.stove2.cat,
      description: t.gallery.products.stove2.desc,
      specs: ["Utensil Support", "Easy-clean Drip Trays", "Ergonomic Knobs"],
      safety: t.gallery.products.stove2.safety
    },
    { 
      id: 5, 
      img: prod5, 
      name: t.gallery.products.fan.name, 
      category: t.gallery.products.fan.cat,
      description: t.gallery.products.fan.desc,
      specs: ["High RPM Motor", "Rust-proof Blades", "Low Noise Operation"],
      safety: t.gallery.products.fan.safety
    },
    { 
      id: 6, 
      img: prod6, 
      name: t.gallery.products.kit.name, 
      category: t.gallery.products.kit.cat,
      description: t.gallery.products.kit.desc,
      specs: ["Fire Blanket (1x1m)", "Digital Gas Detector", "Long-neck Lighter"],
      safety: t.gallery.products.kit.safety
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="products" className="section-padding gallery-section">
      <div className="container">
        <h2 className="section-title">{t.gallery.title}</h2>
        <p className="section-subtitle">{t.gallery.subtitle}</p>

        <div className="gallery-grid">
          {products.map((product) => (
            <div className="gallery-item" key={product.id}>
              <div className="gallery-img-wrapper" onClick={() => openModal(product)}>
                <img src={product.img} alt={product.name} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="view-details">{t.gallery.viewDetails}</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-cat">{product.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="product-modal-overlay" onClick={closeModal}>
            <div className="product-modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              
              <div className="modal-body">
                <div className="modal-image">
                   <img src={selectedProduct.img} alt={selectedProduct.name} />
                </div>
                
                <div className="modal-details">
                  <span className="modal-cat">{selectedProduct.category}</span>
                  <h3 className="modal-title">{selectedProduct.name}</h3>
                  <p className="modal-desc">{selectedProduct.description}</p>
                  
                  <div className="modal-specs">
                    <h4>{t.gallery.specs}</h4>
                    <ul>
                      {selectedProduct.specs.map((spec, i) => <li key={i}>{spec}</li>)}
                    </ul>
                  </div>

                  <div className="modal-safety">
                    <strong>{t.gallery.safetyFirst}</strong> {selectedProduct.safety}
                  </div>

                  <button className="btn btn-primary btn-block" style={{marginTop: '20px'}} onClick={() => {
                    closeModal();
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                  }}>
                    {t.gallery.enquire}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
