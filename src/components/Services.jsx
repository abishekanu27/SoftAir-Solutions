import React from 'react';

export const servicesData = {
  web: {
    id: 'web',
    num: '01',
    title: 'Digital Experience',
    heading: 'Web Application Development',
    description: 'Modern, responsive web applications, progressive web apps (PWAs), high-performance frontend interfaces, and API-driven web portals built for speed and engagement.',
    points: [
      'Responsive UI/UX & fluid cross-device layouts',
      'Modern React, Next.js & Progressive Web Apps',
      'Ultra-fast load velocity & SEO-friendly architecture',
      'Secure RESTful and GraphQL API backend integrations'
    ],
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
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#ff5e36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="24" rx="3" />
        <line x1="12" y1="20" x2="24" y2="20" />
        <line x1="12" y1="25" x2="36" y2="25" />
        <line x1="24" y1="32" x2="24" y2="38" />
        <line x1="16" y1="38" x2="32" y2="38" />
      </svg>
    )
  },
  custom: {
    id: 'custom',
    num: '02',
    title: 'Business Planning',
    heading: 'Custom Application Software & IT Services',
    description: 'Tailored enterprise software platforms, bespoke SaaS systems, business workflow automation, and robust database applications crafted to solve your exact business needs.',
    points: [
      'Bespoke ERP, CRM & tailored business workflow automation',
      'Scalable PostgreSQL & MySQL database schema architecture',
      'Multi-tier role permissions, audit logging & enterprise security',
      '24/7 dedicated IT infrastructure support & SLA guarantees'
    ],
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
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#ff5e36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="16" height="28" rx="2" />
        <circle cx="14" cy="18" r="2" fill="#ff5e36" />
        <circle cx="14" cy="24" r="2" fill="#ff5e36" />
        <line x1="10" y1="32" x2="18" y2="32" />
        <rect x="26" y="12" width="16" height="14" rx="2" />
        <path d="M34 26v6" />
        <path d="M30 32h8" />
        <path d="M22 35h6" />
      </svg>
    )
  },
  mobile: {
    id: 'mobile',
    num: '03',
    title: 'App Development',
    heading: 'Mobile Application Engineering',
    description: 'High-performance Android mobile apps engineered for fluid touch navigation, background services, offline sync, and Google Play Store deployment.',
    points: [
      'High-performance Android & cross-platform mobile apps',
      'Offline-first local SQLite database synchronization',
      'Live GPS Beat route tracking & background telemetry',
      'Complete Google Play Store deployment, signing & updates'
    ],
    tags: ['Android', 'React Native', 'Offline-First'],
    deliverables: [
      'Native and cross-platform mobile apps for Android with React Native',
      'Intuitive UI/UX design following modern Google Material guidelines',
      'Real-time push notifications and background telemetry sync',
      'Offline SQLite and local storage synchronization',
      'End-to-end Google Play Store deployment, signing, and updates'
    ],
    tech: 'React Native, Java, Firebase, SQLite',
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#ff5e36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="6" width="24" height="36" rx="4" />
        <line x1="20" y1="12" x2="28" y2="12" />
        <line x1="18" y1="34" x2="18" y2="28" />
        <line x1="24" y1="34" x2="24" y2="22" />
        <line x1="30" y1="34" x2="30" y2="18" />
        <circle cx="24" cy="38" r="1.5" fill="#ff5e36" />
      </svg>
    )
  }
};

export default function Services({ onSelectService }) {
  const serviceList = Object.values(servicesData);

  return (
    <section className="services-split-section" id="services">
      {/* Dark Top Half Header Container */}
      <div className="services-dark-band">
        <div className="container">
          <div className="services-header-grid">
            <div className="services-header-left">
              <span className="services-orange-tag"># OUR BENEFITS</span>
              <h2 className="services-main-heading">
                We Deal With Aspects<br />
                <span className="services-underline-text">Professional IT Services</span>
              </h2>
            </div>

            <div className="services-header-right">
              <p className="services-header-desc">
                SoftAir Solutions provides specialized engineering services spanning responsive digital web platforms, bespoke business software planning, and high-performance Android mobile applications built for measurable enterprise growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Overlapping Cards Grid */}
      <div className="container services-cards-wrapper">
        <div className="services-split-grid">
          {serviceList.map((svc) => (
            <div 
              key={svc.id} 
              className="services-split-card"
              onClick={() => {
                if (onSelectService) onSelectService(svc);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (onSelectService) onSelectService(svc);
                }
              }}
              title="Click to view full technical specifications"
            >
              {/* Top Row: Icon on Left, Watermark Number on Right */}
              <div className="split-card-top-row">
                <div className="split-card-icon-wrap">
                  {svc.icon}
                </div>
                <div className="split-card-number">
                  {svc.num}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="split-card-title">{svc.title}</h3>

              {/* Checklist Items */}
              <ul className="split-card-checklist">
                {svc.points.map((pt, i) => (
                  <li key={i}>
                    <span className="split-card-tick">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="#ff5e36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2.5 8 6 11.5 13.5 4" />
                      </svg>
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Interactive Link */}
              <div className="split-card-footer">
                <span className="split-card-link">
                  Explore Capabilities &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
