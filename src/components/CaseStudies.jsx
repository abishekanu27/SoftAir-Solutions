import React from 'react';

const cases = [
  {
    category: 'Enterprise Web Platform',
    title: 'Custom B2B Billing & Client Portal',
    description: 'Engineered a high-performance web platform featuring automated invoicing, real-time client management, and dynamic reporting dashboards.',
    metric1: '3.8x',
    label1: 'Faster Portal Loading',
    metric2: '99.99%',
    label2: 'Platform Availability',
    tech: 'React, Next.js, Node.js, PostgreSQL, REST APIs'
  },
  {
    category: 'Mobile Application',
    title: 'Cross-Platform Patient Care & Scheduling App',
    description: 'Developed an intuitive iOS & Android app for appointment bookings, real-time doctor messaging, and offline consultation history.',
    metric1: '4.8★',
    label1: 'App Store Rating',
    metric2: '120k+',
    label2: 'Active Mobile Users',
    tech: 'Flutter, React Native, Firebase, Node.js'
  },
  {
    category: 'Custom Software & IT Services',
    title: 'Warehouse Operations & Managed IT Infrastructure',
    description: 'Designed a bespoke inventory management application with barcode tracking alongside 24/7 server monitoring and IT support.',
    metric1: '-40%',
    label1: 'Order Processing Time',
    metric2: '24/7',
    label2: 'Guaranteed IT Support SLA',
    tech: 'TypeScript, MySQL, Express, Linux Administration'
  }
];

export default function CaseStudies() {
  return (
    <section className="section" id="cases" style={{ background: 'var(--bg-surface-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Proven Impact</span>
          <h2 className="section-title">
            Real World <span className="gradient-text">Transformation Stories</span>
          </h2>
          <p className="section-subtitle">
            How SoftAir Solutions delivers high-impact web apps, mobile solutions, custom software, and dependable IT services.
          </p>
        </div>

        <div className="case-studies-grid">
          {cases.map((c, i) => (
            <div key={i} className="case-card">
              <div className="case-card-header">
                <span className="case-category">{c.category}</span>
                <h3 className="case-title">{c.title}</h3>
              </div>
              <div className="case-card-body">
                <p>{c.description}</p>
                <div className="case-impact-metric">
                  <div>
                    <div className="impact-figure">{c.metric1}</div>
                    <div className="impact-desc">{c.label1}</div>
                  </div>
                  <div>
                    <div className="impact-figure">{c.metric2}</div>
                    <div className="impact-desc">{c.label2}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Tech: {c.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
