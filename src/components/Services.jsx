import React from 'react';

export const servicesData = {
  web: {
    id: 'web',
    title: 'Web Application Development',
    description: 'Modern, responsive web applications, progressive web apps (PWAs), high-performance frontend interfaces, and API-driven web portals built for speed and engagement.',
    tags: ['React & Next.js', 'Responsive UI/UX', 'PWA', 'REST & GraphQL'],
    deliverables: [
      'Responsive single-page (SPA) and multi-page web applications',
      'High-performance Next.js and React frontend architecture',
      'Fast-loading Progressive Web Apps (PWA) with offline caching',
      'Secure RESTful and GraphQL API backend integrations',
      'Cross-browser compatibility and SEO-friendly semantic markup'
    ],
    tech: 'React, Next.js, TypeScript, JavaScript, HTML5/CSS3, Node.js, REST APIs',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    )
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile Application Development',
    description: 'High-performance Android mobile apps engineered for fluid touch navigation, background services, offline sync, and Google Play Store deployment.',
    tags: ['Android', 'Flutter', 'React Native', 'Offline-First'],
    deliverables: [
      'Native and cross-platform mobile apps for Android with Flutter and React Native',
      'Intuitive UI/UX design following modern Google Material guidelines',
      'Real-time push notifications and background telemetry sync',
      'Offline SQLite and local storage synchronization',
      'End-to-end Google Play Store deployment, signing, and updates'
    ],
    tech: 'Flutter, React Native, Dart, Kotlin, Java, Firebase, SQLite',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    )
  },
  custom: {
    id: 'custom',
    title: 'Custom Application Software',
    description: 'Tailored enterprise software platforms, bespoke SaaS systems, business workflow automation, and robust database applications crafted to solve your exact business needs.',
    tags: ['Bespoke SaaS', 'Workflow Automation', 'Scalable Architecture', 'Custom ERP/CRM'],
    deliverables: [
      'Custom enterprise business software and automated management portals',
      'Bespoke SaaS platforms and multi-tenant client portals',
      'Role-based Access Control (RBAC), user authentication, and audit logs',
      'Relational & NoSQL database schema design with PostgreSQL & MySQL',
      'Third-party API integrations, payment processing, and reporting dashboards'
    ],
    tech: 'Node.js, Express, Python, TypeScript, PostgreSQL, MySQL, MongoDB, Redis',
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  itservices: {
    id: 'itservices',
    title: 'IT Services & Technical Support',
    description: 'End-to-end IT consulting, system integration, server and network administration, ongoing software maintenance, database management, and dedicated technical support.',
    tags: ['IT Consulting', 'System Integration', 'Server Administration', '24/7 SLA Support'],
    deliverables: [
      'Comprehensive IT consulting, technical infrastructure audits, and strategy',
      'Server administration, scheduled backups, and OS maintenance',
      'Database administration, performance tuning, and data recovery',
      'Ongoing software maintenance, bug fixes, and feature enhancements',
      'Dedicated technical helpdesk support and SLA-backed response times'
    ],
    tech: 'Linux/Windows Administration, Apache/Nginx, MySQL/PostgreSQL, Git, Docker, System Monitoring',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    )
  }
};

export default function Services({ onSelectService }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Performance, Scalability, & Impact</span>
          </h2>
          <p className="section-subtitle">
            SoftAir Solutions provides specialized engineering services spanning responsive web platforms, native mobile applications, bespoke custom software, and dependable enterprise IT services.
          </p>
        </div>

        <div className="services-grid">
          {Object.values(servicesData).map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="service-icon-box">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.description}</p>
              
              <div className="service-tags">
                {svc.tags.map((tag, i) => (
                  <span key={i} className="service-tag-item">{tag}</span>
                ))}
              </div>

              <button 
                className="service-btn" 
                onClick={() => onSelectService(svc)}
              >
                Explore Specifications &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
