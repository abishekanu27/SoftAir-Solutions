import React from 'react';

export default function Main() {
  return (
    <section className="hero-section" id="main">
      <div className="container hero-grid">
        <div className="hero-text-content">
          <div className="hero-pill">
            <span className="pulse-dot"></span>
            <span>IMAGINE &bull; INNOVATE &bull; TRANSFORM</span>
          </div>
          
          <h1 className="hero-title">
            Engineering High-Performance <br />
            <span className="gradient-text">Web, Mobile & Custom Software</span> <br />
            & Dedicated IT Services
          </h1>

          <p className="hero-desc">
            SoftAir Solutions Pvt Ltd specializes in scalable web applications, high-performance Android mobile apps, bespoke custom business software, and reliable enterprise IT services tailored for growth.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">Launch Your Project</a>
            <a href="#services" className="btn btn-secondary btn-lg">Explore Capabilities</a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="hero-visual-stage">
          <div className="hero-visual-card">
            <div className="hero-card-header">
              <div className="window-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="status-badge">
                <span className="pulse-dot" style={{ background: '#27c93f', boxShadow: '0 0 8px #27c93f' }}></span>
                <span>SoftAir App Platform &bull; Active</span>
              </div>
            </div>
            <div className="hero-img-wrap">
              <img 
                src="/assets/images/hero-tech.jpg" 
                alt="SoftAir Web, Mobile and Custom Software Development" 
                className="hero-img" 
              />
            </div>
          </div>

          {/* Floating Feature Pills */}
          <div className="floating-pill floating-pill-1">
            <div className="pill-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className="pill-text">
              <strong>Web & Mobile Apps</strong>
              <span>Fast UI &bull; Web & Android</span>
            </div>
          </div>

          <div className="floating-pill floating-pill-2">
            <div className="pill-icon" style={{ background: 'var(--gradient-brand)' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="pill-text">
              <strong>Custom & IT Services</strong>
              <span>Bespoke Software &bull; 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
