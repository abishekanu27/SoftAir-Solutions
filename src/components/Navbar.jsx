import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  const logoSrc = theme === 'dark' 
    ? '/assets/images/logo-full-darkmode.png' 
    : '/assets/images/logo-full.png';

  return (
    <>
      {/* Top Notification Announcement */}
      <div className="top-bar">
        <span className="top-bar-badge">2026 Tech Horizons</span>
        <span>Empowering Enterprise Agility with Intelligent Multi-Cloud & AI Infrastructure.</span>
        <a href="#estimator" onClick={closeMobile}>Estimate Project &rarr;</a>
      </div>

      {/* Main Sticky Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <a href="#hero" className="brand-logo-wrap" aria-label="SoftAir Solutions Home">
            <img 
              src={logoSrc} 
              alt="SoftAir Solutions Pvt Ltd - IMAGINE. INNOVATE. TRANSFORM." 
              className="brand-logo-img" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <a href="#services" className="nav-link">Services</a>
            <a href="#estimator" className="nav-link">Cost Estimator</a>
            <a href="#platform" className="nav-link">Platform</a>
            <a href="#pillars" className="nav-link">About Us</a>
            <a href="#cases" className="nav-link">Case Studies</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            <a href="#contact" className="btn btn-primary btn-sm">Get Consultation</a>

            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <aside className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <img src={logoSrc} alt="SoftAir Solutions" className="brand-logo-img" style={{ height: '42px' }} />
          <button className="theme-toggle" onClick={closeMobile} aria-label="Close Mobile Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#services" className="mobile-nav-link" onClick={closeMobile}>Services & Capabilities</a>
          <a href="#estimator" className="mobile-nav-link" onClick={closeMobile}>Project Scope Estimator</a>
          <a href="#platform" className="mobile-nav-link" onClick={closeMobile}>Cloud Platform</a>
          <a href="#pillars" className="mobile-nav-link" onClick={closeMobile}>Why SoftAir</a>
          <a href="#cases" className="mobile-nav-link" onClick={closeMobile}>Proven Case Studies</a>
          <a href="#faq" className="mobile-nav-link" onClick={closeMobile}>FAQ</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMobile} style={{ color: 'var(--cyan)' }}>
            Schedule a Strategy Call &rarr;
          </a>
        </div>
      </aside>
    </>
  );
}
