import React from 'react';

export default function WhatWeDo({ onSelectService }) {
  const capabilities = [
    {
      num: '01',
      id: 'web',
      title: 'Web Application Development',
      desc: 'We build modern, responsive, and functional web applications designed to support business operations and deliver exceptional user experiences.',
      deliverables: [
        'Responsive single-page (SPA) and multi-page web applications',
        'High-performance Next.js and React frontend architecture',
        'Fast-loading Progressive Web Apps (PWA) with offline caching',
        'Secure RESTful and GraphQL API backend integrations',
        'Cross-browser compatibility and SEO-friendly semantic markup'
      ],
      tech: 'React, Next.js, TypeScript, JavaScript, HTML5/CSS3, Node.js, REST APIs',
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
      id: 'app',
      title: 'Mobile Application Development',
      desc: 'We develop high-performance mobile applications that help businesses connect with customers, manage field operations, and access critical data on the go.',
      deliverables: [
        'Native and cross-platform mobile apps for Android with React Native',
        'Intuitive UI/UX design following modern Google Material guidelines',
        'Real-time push notifications and background telemetry sync',
        'Offline SQLite and local storage synchronization',
        'End-to-end Google Play Store deployment, signing, and updates'
      ],
      tech: 'React Native, Flutter, Java, Firebase, SQLite, REST APIs',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      num: '03',
      id: 'custom',
      title: 'SaaS & Software Products',
      desc: 'We engineer scalable SaaS software products that simplify workflows, automate processes, and empower businesses to manage their operations efficiently.',
      deliverables: [
        'Custom enterprise business software and automated management portals',
        'Bespoke SaaS platforms and multi-tenant client portals',
        'Role-based Access Control (RBAC), user authentication, and audit logs',
        'Relational & NoSQL database schema design with PostgreSQL & MySQL',
        'Third-party API integrations, payment processing, and reporting dashboards'
      ],
      tech: 'Node.js, Express, Python, TypeScript, PostgreSQL, MySQL, Redis, Docker',
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
      id: 'it',
      title: 'IT Support & Solutions',
      desc: 'We provide dedicated technology support and practical IT infrastructure solutions to help businesses maintain high uptime and resolve technical challenges.',
      deliverables: [
        '24/7 dedicated IT infrastructure support and helpdesk assistance',
        'Cloud server management, Linux VPS hardening, and SSL/TLS renewals',
        'Scheduled database backups, automated disaster recovery & health monitoring',
        'Network troubleshooting, workstation security, and SLA response guarantees'
      ],
      tech: 'Linux, AWS, DigitalOcean, Nginx, Docker, Uptime Monitoring, Firewall Security',
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
      id: 'marine',
      title: 'Marine IT Solutions',
      desc: 'We apply our technology expertise to marine and maritime IT requirements, developing solutions that address vessel operational challenges and communication needs.',
      badge: 'Focus Domain',
      deliverables: [
        'Maritime operations management and vessel maintenance portals',
        'Offline-capable telemetry logging with satellite uplink sync',
        'Port inventory tracking, voyage cost optimization & digital manifests',
        'High-reliability software architectures built for low-bandwidth conditions'
      ],
      tech: 'IoT Edge Telemetry, Offline Sync, Cloud Sync, React, SQLite, Node.js',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <circle cx="12" cy="5" r="3"></circle>
          <line x1="12" y1="22" x2="12" y2="8"></line>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
        </svg>
      )
    }
  ];

  const handleCardClick = (cap) => {
    if (onSelectService) {
      onSelectService({
        id: cap.id,
        title: cap.title,
        heading: cap.title,
        badge: cap.badge || 'Core Capability',
        tagline: cap.desc,
        description: cap.desc,
        deliverables: cap.deliverables,
        tech: cap.tech
      });
    } else {
      const contactEl = document.getElementById('contact');
      contactEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="what-we-do-section" id="what-we-do">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="services-orange-tag"># WHAT WE DO</span>
          <h2 className="section-title">
            Areas of Focus &mdash; <span className="gradient-text">What We Do</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0.75rem auto 0' }}>
            We focus on delivering dependable software and technology solutions engineered around real business needs.
          </p>
        </div>

        <div className="about-capabilities-grid">
          {capabilities.map((cap) => (
            <div 
              key={cap.num} 
              className="about-capability-card"
              onClick={() => handleCardClick(cap)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(cap);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
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
      </div>
    </section>
  );
}
