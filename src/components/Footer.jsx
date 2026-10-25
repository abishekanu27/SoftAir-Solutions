import React from 'react';
import logoSrc from '../assets/images/logo-full.png';


export default function Footer({ onShowToast, onOpenLegal, onNavigate }) {
  const handleLegal = (e, docId) => {
    e.preventDefault();
    if (onOpenLegal) {
      onOpenLegal(docId);
    } else if (onNavigate) {
      if (docId === 'privacy') onNavigate('/privacy-policy');
      else if (docId === 'terms') onNavigate('/terms-of-service');
      else if (docId === 'security') onNavigate('/security-standards');
    } else {
      window.location.href = `/${docId === 'privacy' ? 'privacy-policy' : docId === 'terms' ? 'terms-of-service' : 'security-standards'}`;
    }
  };

  const handleNavSection = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const handleFaqNav = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/faq');
    } else {
      window.location.href = '/faq';
    }
  };

  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/softair-solutions-19b745445',
    instagram: 'https://www.instagram.com/softairsolutions/',
    facebook: 'https://www.facebook.com/profile.php?id=61595790140550',
    twitter: 'https://twitter.com'
  };

  return (
    <footer className="recreated-site-footer" id="footer">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col-brand">
            <a 
              href="#main" 
              className="footer-brand-logo-wrap" 
              aria-label="SoftAir Solutions Home"
              onClick={(e) => handleNavSection(e, 'main')}
            >
              <img 
                src={logoSrc} 
                alt="SoftAir Solutions - IMAGINE. INNOVATE. TRANSFORM." 
                className="footer-brand-logo-img" 
              />
            </a>

            <p className="footer-brand-desc">
              Empowering businesses worldwide with cutting-edge software engineering, scalable cloud solutions, and dependable IT support. Transform your operations, unlock insights, and drive sustainable growth.
            </p>

            {/* Social Icons Row */}
            <div className="footer-social-row" aria-label="Social Media Links">
              {/* Twitter / X */}
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="footer-col-nav">
            <h4 className="footer-nav-title">Products</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#products" onClick={(e) => handleNavSection(e, 'products')}>
                  SoftAir SFA (Sales)
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavSection(e, 'products')}>
                  Clinical Softwares
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavSection(e, 'products')}>
                  KOT Kitchen Order
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavSection(e, 'products')}>
                  Restaurant & Retail POS
                </a>
              </li>
              <li>
                <a href="#what-we-do" onClick={(e) => handleNavSection(e, 'what-we-do')}>
                  Custom Software
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col-nav">
            <h4 className="footer-nav-title">Company</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#about" onClick={(e) => handleNavSection(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#what-we-do" onClick={(e) => handleNavSection(e, 'what-we-do')}>
                  What We Do
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavSection(e, 'services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#our-story" onClick={(e) => handleNavSection(e, 'our-story')}>
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavSection(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col-nav">
            <h4 className="footer-nav-title">Resources</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="/faq" onClick={handleFaqNav}>
                  Documentation & FAQ
                </a>
              </li>
              <li>
                <a href="/security-standards" onClick={(e) => handleLegal(e, 'security')}>
                  Security Standards
                </a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={(e) => handleLegal(e, 'privacy')}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" onClick={(e) => handleLegal(e, 'terms')}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavSection(e, 'contact')}>
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="footer-divider-line" />

        {/* Bottom Bar: Copyright, Legal Links, and Badges */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            &copy; 2026 SoftAir Solutions. All rights reserved.
          </div>

          <div className="footer-bottom-legal-links">
            <a href="/privacy-policy" onClick={(e) => handleLegal(e, 'privacy')}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" onClick={(e) => handleLegal(e, 'terms')}>
              Terms of Service
            </a>
            <a href="/privacy-policy" onClick={(e) => handleLegal(e, 'privacy')}>
              Cookie Policy
            </a>
            <a href="/security-standards" onClick={(e) => handleLegal(e, 'security')}>
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
