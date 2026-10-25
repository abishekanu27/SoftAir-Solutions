import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import logoSrc from '../assets/images/logo-full.png';

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);
  const toggleMobile = () => setMobileMenuOpen((prev) => !prev);


  const handleAboutClick = (e) => {
    e.preventDefault();
    closeMobile();
    if (onNavigate) {
      onNavigate('/');
    }
    setTimeout(() => {
      const el = document.getElementById('about');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const handleFaqClick = (e) => {
    e.preventDefault();
    closeMobile();
    if (onNavigate) {
      onNavigate('/faq');
    } else {
      window.location.href = '/faq';
    }
  };

  return (
    <>
      {/* Top Notification Announcement */}
      <div className="top-bar">
        <span>Ready-to-Deploy Enterprise Software: SFA, Clinical Softwares, KOT & POS Systems.</span>
        <a href="#products" onClick={closeMobile}>Explore Products &rarr;</a>
      </div>

      {/* Sticky Modern Header — Always on top while scroll */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar">
          <a href="#main" className="brand-logo-wrap" aria-label="SoftAir Solution Home" onClick={closeMobile}>
            <img 
              src={logoSrc} 
              alt="SoftAir Solution - IMAGINE. INNOVATE. TRANSFORM." 
              className="brand-logo-img" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <a href="#products" className="nav-link" style={{ fontWeight: 600, color: 'var(--primary)' }}>
              Our Products
            </a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#what-we-do" className="nav-link">What We Do</a>
            <a href="#about" className="nav-link" onClick={handleAboutClick}>About Us</a>
            <a href="/faq" className="nav-link" onClick={handleFaqClick}>FAQ</a>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary btn-sm">Get Consultation</a>

            {/* Mobile Hamburger / Close Toggle Button */}
            <button 
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobile}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
              title={mobileMenuOpen ? "Close Menu (Esc)" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <span className="close-x-icon" style={{ fontSize: '1.6rem', lineHeight: '1', fontWeight: 700 }}>&times;</span>
              ) : (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop - Mounted Directly to Body to bypass any stacking contexts */}
      {typeof document !== 'undefined' && createPortal(
        <>
          <div 
            className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
            onClick={closeMobile}
            aria-hidden="true"
          />

          <aside 
            className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} 
            aria-label="Mobile Navigation"
            aria-hidden={!mobileMenuOpen}
          >
            <div className="mobile-nav-header">
              <a href="#main" onClick={closeMobile} className="brand-logo-wrap" aria-label="SoftAir Solution Home">
                <img src={logoSrc} alt="SoftAir Solution" className="brand-logo-img" style={{ height: '38px' }} />
              </a>
              <button 
                className="mobile-drawer-close" 
                onClick={closeMobile} 
                aria-label="Close Mobile Menu"
                title="Close Menu (Esc)"
              >
                <span className="close-x-icon">&times;</span>
              </button>
            </div>

            <div className="mobile-nav-links">
              <a href="#products" className="mobile-nav-link" onClick={closeMobile} style={{ fontWeight: 700, color: 'var(--primary)' }}>
                 Our Products
              </a>
              <a href="#services" className="mobile-nav-link" onClick={closeMobile}>
                 Services
              </a>
              <a href="#what-we-do" className="mobile-nav-link" onClick={closeMobile}>
                 What We Do
              </a>
              <a href="#about" className="mobile-nav-link" onClick={handleAboutClick}>
                 About Us
              </a>
              <a href="/faq" className="mobile-nav-link" onClick={handleFaqClick}>
                 Frequently Asked Questions
              </a>
            </div>

            <div className="mobile-nav-footer">
              <a 
                href="#contact" 
                className="btn btn-primary" 
                onClick={closeMobile}
                style={{ width: '100%', justifyContent: 'center', minHeight: '48px', fontSize: '1rem', fontWeight: 700 }}
              >
                Get Consultation &rarr;
              </a>
              <div className="mobile-nav-contact-hint">
                <strong>SoftAir Solutions </strong>
                <small>Palakkad, Kerala &bull; info@softair.co.in</small>
              </div>
            </div>
          </aside>
        </>,
        document.body
      )}
    </>
  );
}
