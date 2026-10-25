import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import OurStorySection from '../components/OurStorySection';

export default function AboutUs({ onNavigateHome, onNavigateContact, onNavigateProducts }) {
  useEffect(() => {
    document.title = 'About Us — SoftAir Solutions Pvt Ltd | Imagine. Innovate. Transform.';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBackHome = (e) => {
    if (e) e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  const handleGoContact = (e) => {
    if (e) e.preventDefault();
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.location.href = '/#contact';
    }
  };

  const handleGoProducts = (e) => {
    if (e) e.preventDefault();
    if (onNavigateProducts) {
      onNavigateProducts();
    } else {
      window.location.href = '/#products';
    }
  };

  const logoSrc = '/assets/images/logo-full.png';

  const capabilities = [
    {
      num: '01',
      title: 'Web Application Development',
      desc: 'We build modern, responsive, and functional web applications designed to support business operations and improve user experiences.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Mobile Application Development',
      desc: 'We develop mobile applications that help businesses connect with customers, manage operations, and access important information on the go.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      num: '03',
      title: 'SaaS & Software Products',
      desc: 'We aim to develop scalable software products that simplify workflows, automate processes, and help businesses manage their operations more efficiently.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      num: '04',
      title: 'IT Support & Solutions',
      desc: 'We provide technology support and practical IT solutions to help businesses maintain reliable systems and address technical challenges.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      num: '05',
      title: 'Marine IT Solutions',
      desc: 'We aim to apply our technology expertise to marine and maritime IT requirements, developing solutions that address operational challenges and connectivity needs.',
      badge: 'Focus Domain',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <circle cx="12" cy="5" r="3"></circle>
          <line x1="12" y1="22" x2="12" y2="8"></line>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
        </svg>
      )
    }
  ];

  const values = [
    {
      title: 'Innovation',
      desc: 'We explore new ideas and technologies to create better solutions.',
      icon: '💡'
    },
    {
      title: 'Quality',
      desc: 'We strive to build dependable, maintainable, and user-friendly products.',
      icon: '✨'
    },
    {
      title: 'Integrity',
      desc: 'We value honesty, transparency, and responsible business practices.',
      icon: '🛡️'
    },
    {
      title: 'Customer Focus',
      desc: "We aim to understand our clients' challenges and develop solutions that address their needs.",
      icon: '🤝'
    },
    {
      title: 'Continuous Improvement',
      desc: 'We believe progress comes from learning, adapting, and improving with every project.',
      icon: '📈'
    },
    {
      title: 'Simplicity',
      desc: 'We believe technology should solve problems, not create unnecessary complexity.',
      icon: '⚡'
    }
  ];

  return (
    <div className="about-page">
      {/* Sticky Header */}
      <header className="policy-header-bar">
        <div className="policy-header-content">
          <a href="/" onClick={handleBackHome} className="brand-logo-wrap" aria-label="SoftAir Solutions Home">
            <img 
              src={logoSrc} 
              alt="SoftAir Solutions Pvt Ltd" 
              className="brand-logo-img" 
              style={{ height: '42px' }}
            />
          </a>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a 
              href="/#products" 
              onClick={handleGoProducts}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>Our Products</span>
            </a>

            <a 
              href="/#contact" 
              onClick={handleGoContact}
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="about-main-container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <a href="/" onClick={handleBackHome} style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Company</span>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>About Us</span>
        </nav>

        {/* Recreated Showcase matching reference design */}
        <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '3rem', border: '1px solid rgba(0, 0, 0, 0.06)' }}>
          <AboutSection />
        </div>

        {/* Our Story — A Vision to Build. A Passion to Innovate. (Recreated matching reference design) */}
        <OurStorySection onNavigateContact={handleGoContact} />

        {/* What We Do */}
        <section className="about-services-section">
          <div className="section-header">
            <span className="section-tag">Areas of Focus</span>
            <h2 className="section-title">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="section-subtitle">
              We focus on delivering technology solutions designed around business needs.
            </p>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((cap) => (
              <div key={cap.num} className="about-capability-card">
                <div className="capability-top">
                  <div className="capability-icon">{cap.icon}</div>
                  <div className="capability-num">{cap.num}</div>
                </div>
                <h3 className="capability-title">
                  {cap.title}
                  {cap.badge && <span className="capability-badge">{cap.badge}</span>}
                </h3>
                <p className="capability-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Core Values */}
        <section className="about-values-section">
          <div className="section-header">
            <span className="section-tag">Guiding Principles</span>
            <h2 className="section-title">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="section-subtitle">
              The foundational pillars that guide how we engineer software, communicate with partners, and deliver results.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((val) => (
              <div key={val.title} className="about-value-card">
                <div className="value-icon">{val.icon}</div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder's Message */}
        <section className="about-founder-section">
          <div className="founder-message-card">
            <div className="founder-quote-mark">&ldquo;</div>
            <span className="section-tag">Leadership Perspective</span>
            <h2 className="founder-heading">
              A Message from the Founder &mdash; <span className="gradient-text">Building the Future, One Idea at a Time</span>
            </h2>

            <blockquote className="founder-quote-body">
              <p>
                "SoftAir Solutions begins with a simple belief: every great idea deserves the opportunity to become something meaningful.
              </p>
              <p>
                I founded SoftAir Solutions with a vision to combine technology, creativity, and practical problem-solving to develop solutions that make a real difference.
              </p>
              <p>
                My goal is to build a company that not only develops software but also understands the challenges businesses face and helps them overcome those challenges through technology.
              </p>
              <p>
                As we begin this journey, I am committed to continuous learning, delivering quality solutions, building trusted relationships, and turning innovative ideas into practical results.
              </p>
              <p>
                This is just the beginning, and I look forward to what we can build together."
              </p>
            </blockquote>

            <div className="founder-signature">
              <div className="founder-avatar-badge">AJ</div>
              <div>
                <strong>Abishek J</strong>
                <span>Founder of SoftAir Solutions Private Limited</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Motto */}
        <section className="about-motto-section">
          <div className="section-header">
            <span className="section-tag">Our Founding Motto</span>
            <h2 className="section-title">
              IMAGINE. INNOVATE. <span className="gradient-text">TRANSFORM.</span>
            </h2>
            <p className="section-subtitle">
              This is the philosophy that inspires our journey and shapes the future we aim to build.
            </p>
          </div>

          <div className="about-motto-grid">
            <div className="about-motto-card">
              <div className="motto-badge">Pillar 1</div>
              <h3 className="motto-title">IMAGINE</h3>
              <p className="motto-desc">
                 We challenge conventional limitations. Our strategic architects in Palakkad work alongside your stakeholders to discover untapped possibilities, design groundbreaking digital experiences, and envision high-ROI roadmaps.
              </p>
            </div>

            <div className="about-motto-card">
              <div className="motto-badge">Pillar 2</div>
              <h3 className="motto-title">INNOVATE</h3>
              <p className="motto-desc">
                Engineering excellence without compromise. We leverage modern web frameworks, Android mobile SDKs, and clean software architecture to craft resilient, scalable software systems built for the long run.
              </p>
            </div>

            <div className="about-motto-card">
              <div className="motto-badge">Pillar 3</div>
              <h3 className="motto-title">TRANSFORM</h3>
              <p className="motto-desc">
                Measurable business outcomes. We deliver seamless production deployments, empower your sales and operational teams, and transform legacy bottlenecks into competitive market advantages.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action: Let's Build Something Great Together */}
        <section className="about-cta-section">
          <div className="about-cta-card">
            <span className="section-tag">
              Partnership Opportunity
            </span>
            <h2 className="about-cta-title">
              Let's Build Something Great Together
            </h2>
            <p className="about-cta-subtitle">
              Have an idea, a business challenge, or a project in mind? Let's work together to transform your vision into a practical digital solution. Contact SoftAir Solutions to start a conversation.
            </p>

            <div className="about-cta-actions">
              <a 
                href="/#contact" 
                onClick={handleGoContact} 
                className="about-cta-btn-primary"
              >
                Get in Touch
              </a>
              <a 
                href="/" 
                onClick={handleBackHome} 
                className="about-cta-btn-secondary"
              >
                Back to Homepage
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Page Footer */}
      <footer style={{ background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', padding: '2.5rem 1.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            &copy; {new Date().getFullYear()} SoftAir Solutions Pvt Ltd. Palakkad, Kerala. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/" onClick={handleBackHome} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</a>
            <a href="/#products" onClick={handleGoProducts} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Our Products</a>
            <a href="/faq" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/faq'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/faq'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>FAQ</a>
            <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/privacy-policy'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/privacy-policy'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms-of-service" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/terms-of-service'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/terms-of-service'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="/security-standards" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/security-standards'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/security-standards'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Standards</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
