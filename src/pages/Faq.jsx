import React, { useState, useMemo, useEffect } from 'react';

const faqData = [
  // Category 1: About SoftAir Solutions
  {
    id: 1,
    category: 'About SoftAir',
    question: 'What is SoftAir Solutions?',
    answer: (
      <p>
        SoftAir Solutions is an emerging technology company focused on software development, web and mobile applications, SaaS products, IT support, and technology solutions. Our goal is to help businesses solve real-world problems through innovative and practical technology.
      </p>
    )
  },
  {
    id: 2,
    category: 'About SoftAir',
    question: 'What services does SoftAir Solutions offer?',
    answer: (
      <div>
        <p>Our areas of focus include:</p>
        <ul className="faq-bullet-list">
          <li>Web application development</li>
          <li>Mobile application development</li>
          <li>Custom software development</li>
          <li>SaaS products and solutions</li>
          <li>IT support and services</li>
          <li>Marine IT solutions</li>
        </ul>
        <p style={{ marginTop: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          The availability of specific services may depend on project requirements and our current capabilities.
        </p>
      </div>
    )
  },
  {
    id: 3,
    category: 'About SoftAir',
    question: 'Where is SoftAir Solutions located?',
    answer: (
      <p>
        SoftAir Solutions is based in Palakkad, Kerala, India and aims to serve businesses globally through digital technology solutions. Specific service availability may depend on project requirements.
      </p>
    )
  },
  {
    id: 4,
    category: 'About SoftAir',
    question: 'What is the motto of SoftAir Solutions?',
    answer: (
      <div>
        <p>Our motto is:</p>
        <div className="faq-callout-motto">
          <strong>IMAGINE. INNOVATE. TRANSFORM.</strong>
        </div>
        <p>
          It represents our belief in imagining new possibilities, innovating through technology, and transforming ideas into practical solutions.
        </p>
      </div>
    )
  },

  // Category 2: Services & Development
  {
    id: 5,
    category: 'Services & Dev',
    question: 'Do you develop custom software for businesses?',
    answer: (
      <p>
        Yes, custom software development is one of our primary areas of focus. We aim to develop solutions tailored to individual business requirements, workflows, and operational needs.
      </p>
    )
  },
  {
    id: 6,
    category: 'Services & Dev',
    question: 'Can you develop both web and mobile applications?',
    answer: (
      <p>
        Yes, we focus on both web and mobile application development. The appropriate technologies and development approach will depend on the project's functionality, target users, and business objectives.
      </p>
    )
  },
  {
    id: 7,
    category: 'Services & Dev',
    question: 'Can you develop software based on my business idea?',
    answer: (
      <p>
        Yes. We welcome discussions about new software ideas and business requirements. We can evaluate the concept, identify the essential features, and discuss a suitable development approach.
      </p>
    )
  },
  {
    id: 8,
    category: 'Services & Dev',
    question: 'Do you provide SaaS solutions?',
    answer: (
      <p>
        SaaS, or Software as a Service, is one of our core areas of focus. We engineer ready-to-deploy software products (such as SoftAir SFA with dual Spot Sales and Advance Orders engines, Clinical healthcare software, KOT kitchen management, and POS billing systems) that businesses can access online or on premise.
      </p>
    )
  },
  {
    id: 9,
    category: 'Services & Dev',
    question: 'Do you provide IT support for businesses?',
    answer: (
      <p>
        We aim to provide practical IT support and technology services to help businesses address technical issues and maintain reliable IT operations. The scope of support depends on the service requested.
      </p>
    )
  },

  // Category 3: Pricing & Projects
  {
    id: 10,
    category: 'Pricing & Projects',
    question: 'How much does software development cost?',
    answer: (
      <p>
        The cost depends on the project's complexity, required features, design, integrations, technology stack, and maintenance requirements. After understanding your requirements, we can discuss the project scope and provide a transparent, customized quotation.
      </p>
    )
  },
  {
    id: 11,
    category: 'Pricing & Projects',
    question: 'How long does it take to develop an application?',
    answer: (
      <p>
        Development timelines vary according to the application's complexity, required features, integrations, and testing requirements. A realistic milestone timeline can be estimated after reviewing your project specifications.
      </p>
    )
  },
  {
    id: 12,
    category: 'Pricing & Projects',
    question: 'How can I start a project with SoftAir Solutions?',
    answer: (
      <p>
        You can contact us through our website or email us directly at{' '}
        <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          info@softair.co.in
        </a>
        . Share your idea, business requirements, and expected outcome, and our team will connect with you to discuss the next steps.
      </p>
    )
  },
  {
    id: 13,
    category: 'Pricing & Projects',
    question: 'Can you improve or maintain existing software?',
    answer: (
      <p>
        We can evaluate requests to improve, maintain, or extend existing applications. The feasibility depends on the current system, available source code, technology stack, and project requirements.
      </p>
    )
  },
  {
    id: 14,
    category: 'Pricing & Projects',
    question: 'Do you provide ongoing maintenance and technical support?',
    answer: (
      <p>
        Maintenance and support can be discussed as part of a project delivery or arranged under a separate service agreement. The scope, availability, and associated charges are agreed upon before work begins.
      </p>
    )
  },

  // Category 4: Security & Privacy
  {
    id: 15,
    category: 'Security & Privacy',
    question: 'How do you protect customer information?',
    answer: (
      <p>
        We aim to handle customer information responsibly and apply appropriate security measures based on the services we provide. Please refer to our{' '}
        <a href="/privacy-policy" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/security-standards" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          Security Standards
        </a>{' '}
        pages for comprehensive details on our data protection practices.
      </p>
    )
  },
  {
    id: 16,
    category: 'Security & Privacy',
    question: 'Will my project information remain confidential?',
    answer: (
      <p>
        We understand the vital importance of protecting business ideas and project information. Confidentiality arrangements can be discussed before sharing sensitive details and formally documented in an appropriate Non-Disclosure Agreement (NDA) where required.
      </p>
    )
  },
  {
    id: 17,
    category: 'Security & Privacy',
    question: 'Do you provide secure applications?',
    answer: (
      <p>
        We aim to incorporate appropriate security practices into application development, including access controls, secure data handling, and thorough testing where applicable. Specific security requirements depend on the nature and scope of each project.
      </p>
    )
  },

  // Category 5: Contact & Support
  {
    id: 18,
    category: 'Contact & Support',
    question: 'How can I contact SoftAir Solutions?',
    answer: (
      <div>
        <p>You can reach our team directly through our website or official channels:</p>
        <ul className="faq-bullet-list">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              info@softair.co.in
            </a>
          </li>
          <li>
            <strong>Website:</strong>{' '}
            <a href="https://softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              softair.co.in
            </a>
          </li>
          <li>
            <strong>Direct Advisory Desk:</strong> +91 70127 51254 / +91 77366 40292
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 19,
    category: 'Contact & Support',
    question: 'How quickly will I receive a response?',
    answer: (
      <p>
        We aim to respond to all enquiries as promptly as possible. Response times may vary depending on the nature of the enquiry, and initial responses are typically provided within 24 to 48 hours.
      </p>
    )
  },
  {
    id: 20,
    category: 'Contact & Support',
    question: 'Can individuals and startups work with SoftAir Solutions?',
    answer: (
      <p>
        Yes, we warmly welcome enquiries from individuals, early-stage startups, and established enterprises seeking modern technology solutions. Project suitability depends on your specific requirements and scope of work.
      </p>
    )
  }
];

const categories = [
  'All',
  'About SoftAir',
  'Services & Dev',
  'Pricing & Projects',
  'Security & Privacy',
  'Contact & Support'
];

export default function Faq({ onNavigateHome, onNavigateContact, onNavigateProducts, onNavigateAbout }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default

  useEffect(() => {
    document.title = 'Frequently Asked Questions (FAQ) — SoftAir Solutions Pvt Ltd';
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

  const handleGoAbout = (e) => {
    if (e) e.preventDefault();
    if (onNavigateAbout) {
      onNavigateAbout();
    } else {
      window.location.href = '/about-us';
    }
  };

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const logoSrc = '/assets/images/logo-full.png';

  return (
    <div className="policy-page">
      {/* Top Header Bar */}
      <header className="policy-header-bar">
        <div className="policy-header-content">
          <a href="/" onClick={handleBackHome} className="brand-logo-wrap" style={{ textDecoration: 'none' }}>
            <img 
              src={logoSrc} 
              alt="SoftAir Solutions Pvt Ltd" 
              style={{ height: '38px', width: 'auto' }} 
            />
          </a>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a 
              href="/" 
              onClick={handleBackHome} 
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>&larr; Home</span>
            </a>

            <a 
              href="/#products" 
              onClick={handleGoProducts} 
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>Our Products</span>
            </a>

            <a 
              href="/about-us" 
              onClick={handleGoAbout} 
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>About Us</span>
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

      {/* Main Content Container */}
      <main className="policy-container" style={{ maxWidth: '1000px', paddingBottom: '4rem' }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <a href="/" onClick={handleBackHome} style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Resources</span>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Frequently Asked Questions</span>
        </nav>

        {/* Hero Section Card */}
        <section className="policy-hero" style={{ marginBottom: '2rem' }}>
          <div className="policy-badge">
            <span className="pulse-dot"></span>
            <span>Knowledge Base &amp; Technical Guidance</span>
          </div>

          <h1 className="policy-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '780px', margin: '0 0 1.5rem 0' }}>
            Find clear, transparent answers to common questions about SoftAir Solutions, our ready-to-deploy software products, custom software engineering, and technical support.
          </p>

          {/* Quick-Stats Highlights */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>20</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>Curated Questions</span>
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>5</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>Knowledge Categories</span>
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>24-48h</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>Enquiry Response Time</span>
            </div>
          </div>
        </section>

        {/* Search & Filter Controls Bar */}
        <div className="faq-controls" style={{ marginBottom: '1.5rem' }}>
          {/* Category Tabs */}
          <div className="faq-category-tabs" role="tablist" aria-label="FAQ Categories">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? faqData.length
                  : faqData.filter((f) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`faq-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  type="button"
                >
                  <span>{cat}</span>
                  <span className="faq-cat-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="faq-search-wrap">
            <svg
              className="faq-search-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search questions (e.g. SFA, cost, mobile app, security, timeline...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
              aria-label="Search FAQs"
            />
            {searchQuery && (
              <button
                className="faq-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                type="button"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-wrap">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    type="button"
                  >
                    <div className="faq-question-left">
                      <span className="faq-num">Q{faq.id}</span>
                      <span className="faq-q-text">{faq.question}</span>
                    </div>
                    <div className="faq-question-right">
                      <span className="faq-pill-tag">{faq.category}</span>
                      <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <div className="faq-answer-inner">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="faq-empty-state">
              <p>No questions found matching "{searchQuery}".</p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                type="button"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Assistance & Discovery Call Card */}
        <div className="faq-bottom-card" style={{ marginTop: '2.5rem' }}>
          <div className="faq-bottom-text">
            <h3>Still have questions? We're here to help.</h3>
            <p>
              Can't find the answer you need? Reach out directly to our technical advisory team to discuss custom application requirements, licensing, or live software demonstrations.
            </p>
          </div>
          <div className="faq-bottom-actions">
            <a 
              href="/#contact" 
              onClick={handleGoContact} 
              className="btn btn-primary btn-md"
            >
              Start a Conversation &rarr;
            </a>
            <a 
              href="mailto:info@softair.co.in" 
              className="btn btn-secondary btn-md"
            >
              Email info@softair.co.in
            </a>
          </div>
        </div>
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
            <a href="/about-us" onClick={handleGoAbout} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Us</a>
            <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/privacy-policy'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/privacy-policy'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms-of-service" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/terms-of-service'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/terms-of-service'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="/security-standards" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/security-standards'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/security-standards'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Standards</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
