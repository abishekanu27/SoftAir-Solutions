import React, { useState } from 'react';

export default function Footer({ theme, onShowToast }) {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      onShowToast('Subscribed to SoftAir Tech Intelligence briefings!');
      setEmail('');
    }
  };

  const logoSrc = theme === 'dark' 
    ? '/assets/images/logo-full-darkmode.png' 
    : '/assets/images/logo-full.png';

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
              SoftAir Solutions Pvt Ltd is an enterprise technology powerhouse delivering cutting-edge cloud infrastructure, bespoke software, and cognitive digital transformation globally.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#hero" className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>IMAGINE</a>
              <a href="#hero" className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>INNOVATE</a>
              <a href="#hero" className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>TRANSFORM</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Capabilities</h4>
            <div className="footer-links">
              <a href="#services">Cloud Architecture</a>
              <a href="#services">Enterprise Software</a>
              <a href="#services">Cognitive AI Solutions</a>
              <a href="#services">Mobile Applications</a>
              <a href="#services">Data Modernization</a>
              <a href="#services">Zero-Trust Security</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <div className="footer-links">
              <a href="#pillars">About SoftAir</a>
              <a href="#cases">Impact & Case Studies</a>
              <a href="#estimator">Cost Estimator</a>
              <a href="#testimonials">Client Reviews</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact Careers</a>
            </div>
          </div>

          <div className="footer-col footer-newsletter">
            <h4>Tech Intelligence</h4>
            <p>Subscribe to our monthly engineering digest covering multi-cloud patterns, AI architectures, and DevOps.</p>
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
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
            <a href="#contact">Security Standards</a>
            <a href="#contact">ISO/IEC 27001</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
