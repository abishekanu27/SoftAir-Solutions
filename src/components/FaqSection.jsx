import React, { useState, useMemo } from 'react';

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
        SaaS, or Software as a Service, is one of our core areas of focus. We aim to develop software products that users can access online, subject to the availability and scope of the particular product.
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

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default

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
        item.question.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Frequently Asked Questions</span>
          <h2 className="section-title">
            Answers &amp; <span className="gradient-text">Insights</span>
          </h2>
          <p className="section-subtitle">
            Find clear answers to common questions about our company, software services, development process, and security standards.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="faq-controls">
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
              placeholder="Search questions (e.g. cost, mobile app, security, timeline...)"
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
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Assistance Box */}
        <div className="faq-bottom-card">
          <div className="faq-bottom-text">
            <h3>Still have questions? We're here to help.</h3>
            <p>
              Can't find what you're looking for? Reach out to our technical advisory desk for a direct conversation about your project requirements.
            </p>
          </div>
          <div className="faq-bottom-actions">
            <a href="#contact" className="btn btn-primary btn-md">
              Start a Conversation &rarr;
            </a>
            <a href="mailto:info@softair.co.in" className="btn btn-secondary btn-md">
              Email info@softair.co.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
