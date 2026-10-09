import React, { useState } from 'react';

export default function Footer({ onShowToast, onOpenLegal, onNavigate }) {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      onShowToast('Subscribed to SoftAir Tech Intelligence briefings!');
      setEmail('');
    }
  };

  const handleLegalClick = (e, docId) => {
    e.preventDefault();
    if (onOpenLegal) {
      onOpenLegal(docId);
    }
    window.location.hash = docId;
  };

  const logoSrc = '/assets/images/logo-full.png';

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img 
              src={logoSrc} 
              alt="SoftAir Solutions Pvt Ltd" 
              className="brand-logo-img" 
              style={{ height: '48px' }} 
            />
            <p>
              SoftAir Solutions Pvt Ltd specializes in scalable web development, cross-platform mobile apps, custom software platforms, and dependable enterprise IT services.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#motto" className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>IMAGINE</a>
              <a href="#motto" className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>INNOVATE</a>
              <a href="#motto" className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>TRANSFORM</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Software Products</h4>
            <div className="footer-links">
              <a href="#products">SoftAir SFA (Sales & Orders)</a>
              <a href="#products">Clinical Healthcare Software</a>
              <a href="#products">KOT Kitchen Order System</a>
              <a href="#products">Retail & Restaurant POS</a>
              <a href="#services">Custom Web & Mobile Apps</a>
              <a href="#services">Dedicated IT Services</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company & Contact</h4>
            <div className="footer-links">
              <a href="#main">Home</a>
              <a 
                href="/about-us" 
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('/about-us');
                  } else {
                    window.location.href = '/about-us';
                  }
                }}
              >
                About Us
              </a>
              <a href="#products">Our Products</a>
              <a 
                href="/faq" 
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('/faq');
                  } else {
                    window.location.href = '/faq';
                  }
                }}
              >
                FAQ
              </a>
              <a href="mailto:info@softair.co.in">info@softair.co.in</a>
              <a href="tel:+917012751254">+91 70127 51254 <br></br>+91 77366 40292</a>
              <a href="https://maps.app.goo.gl/H1YdfNmCzfuRGkXR7" target="_blank" rel="noopener noreferrer">Palakkad, Kerala ↗</a>
            </div>
          </div>

          <div className="footer-col footer-newsletter">
            <h4>Tech Intelligence</h4>
            <p>Subscribe to our monthly engineering digest covering modern web frameworks, mobile strategies, and IT insights.</p>
            <form onSubmit={handleNewsletter} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your work email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="btn btn-primary btn-sm">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} SoftAir Solutions Pvt Ltd. All rights reserved. Registered Enterprise.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a 
              href="/privacy-policy" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('/privacy-policy');
                } else {
                  window.location.href = '/privacy-policy';
                }
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('/terms-of-service');
                } else {
                  window.location.href = '/terms-of-service';
                }
              }}
            >
              Terms of Service
            </a>
            <a 
              href="/security-standards" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('/security-standards');
                } else {
                  window.location.href = '/security-standards';
                }
              }}
            >
              Security Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
