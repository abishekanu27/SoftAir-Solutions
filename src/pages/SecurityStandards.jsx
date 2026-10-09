import React, { useEffect } from 'react';

export default function SecurityStandards({ onNavigateHome }) {
  useEffect(() => {
    // Set document title for SEO & compliance
    document.title = 'Security Standards — SoftAir Solutions Pvt Ltd';
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

  const handlePrint = () => {
    window.print();
  };

  const logoSrc = '/assets/images/logo-full.png';

  const sections = [
    { id: 'section-1', title: '1. Our Commitment to Security' },
    { id: 'section-2', title: '2. Data Protection' },
    { id: 'section-3', title: '3. Access Control' },
    { id: 'section-4', title: '4. Application and Software Security' },
    { id: 'section-5', title: '5. Network and Infrastructure Security' },
    { id: 'section-6', title: '6. Encryption and Secure Communication' },
    { id: 'section-7', title: '7. Monitoring and Logging' },
    { id: 'section-8', title: '8. Vulnerability Management' },
    { id: 'section-9', title: '9. Security Incident Response' },
    { id: 'section-10', title: '10. Third-Party Services' },
    { id: 'section-11', title: '11. Customer Responsibilities' },
    { id: 'section-12', title: '12. Responsible Vulnerability Disclosure' },
    { id: 'section-13', title: '13. Limitations' },
    { id: 'section-14', title: '14. Updates to These Standards' },
    { id: 'section-15', title: '15. Contact Us' }
  ];

  return (
    <div className="policy-page">
      {/* Sticky Security Header */}
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
            <button 
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              title="Print Security Standards document"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.9rem' }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print / PDF</span>
            </button>

            <a 
              href="/" 
              onClick={handleBackHome}
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <span>&larr; Back to Home</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="policy-container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <a href="/" onClick={handleBackHome} style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Legal & Compliance</span>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Security Standards</span>
        </nav>

        {/* Hero Banner */}
        <div className="policy-hero">
          <div className="policy-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Security & Data Governance</span>
          </div>

          <h1 className="policy-title">Security Standards — SoftAir Solutions</h1>

          <div className="policy-meta">
            <div><strong>Effective Date:</strong> 9 October 2026</div>
            <div>&bull;</div>
            <div><strong>Organization:</strong> SoftAir Solutions Pvt Ltd</div>
            <div>&bull;</div>
            <div><strong>Canonical URL:</strong> softair.co.in/security-standards</div>
          </div>

          <div className="legal-highlight-box" style={{ margin: 0 }}>
            <strong>Security Commitment:</strong> At SoftAir Solutions, we recognize the importance of protecting customer information, business data, and digital assets. We implement appropriate technical and organizational security controls to protect our websites, applications, and IT services.
          </div>
        </div>

        {/* Layout with Sticky Sidebar TOC */}
        <div className="policy-layout">
          {/* Quick Jump Sidebar */}
          <aside className="policy-sidebar" aria-label="Table of Contents">
            <div className="policy-sidebar-title">Table of Contents</div>
            <ul className="policy-toc-list">
              {sections.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="policy-toc-link">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <div>Security Advisory Desk</div>
              <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                info@softair.co.in
              </a>
            </div>
          </aside>

          {/* Detailed Content */}
          <article className="policy-content-card">
            {/* 1. Our Commitment to Security */}
            <section id="section-1" className="policy-section-block">
              <h2 className="policy-section-title">1. Our Commitment to Security</h2>
              <p className="policy-text">
                At SoftAir Solutions, we recognize the importance of protecting customer information, business data, and digital assets. We aim to implement appropriate technical and organizational security measures to protect our websites, applications, software products, and related services against unauthorized access, misuse, loss, alteration, and disclosure.
              </p>
              <p className="policy-text">
                Security is an ongoing process, and we continually evaluate opportunities to improve our practices as our services and technologies evolve.
              </p>
            </section>

            {/* 2. Data Protection */}
            <section id="section-2" className="policy-section-block">
              <h2 className="policy-section-title">2. Data Protection</h2>
              <p className="policy-text">
                We aim to protect information entrusted to us through appropriate safeguards, including:
              </p>
              <ul className="policy-list">
                <li>Limiting access to information based on business requirements.</li>
                <li>Handling personal and business information responsibly.</li>
                <li>Using appropriate safeguards when storing and transmitting sensitive information.</li>
                <li>Retaining information only for as long as necessary for legitimate business or legal purposes.</li>
                <li>Taking reasonable steps to prevent unauthorized disclosure, alteration, or destruction of information.</li>
              </ul>
            </section>

            {/* 3. Access Control */}
            <section id="section-3" className="policy-section-block">
              <h2 className="policy-section-title">3. Access Control</h2>
              <p className="policy-text">
                Access to internal systems, administrative interfaces, and customer data should be restricted to authorized individuals.
              </p>
              <p className="policy-text">Our access-control practices may include:</p>
              <ul className="policy-list">
                <li>Role-based access permissions.</li>
                <li>Strong password requirements.</li>
                <li>Multi-factor authentication where available and appropriate.</li>
                <li>Reviewing access permissions periodically.</li>
                <li>Removing or modifying access when it is no longer required.</li>
              </ul>
            </section>

            {/* 4. Application and Software Security */}
            <section id="section-4" className="policy-section-block">
              <h2 className="policy-section-title">4. Application and Software Security</h2>
              <p className="policy-text">
                We aim to incorporate security considerations throughout the software development lifecycle.
              </p>
              <p className="policy-text">Depending on the service, our practices may include:</p>
              <ul className="policy-list">
                <li>Input validation and appropriate output encoding.</li>
                <li>Authentication and authorization controls.</li>
                <li>Secure handling of application secrets and credentials.</li>
                <li>Protection against common web application vulnerabilities.</li>
                <li>Dependency and software update management.</li>
                <li>Testing changes before deployment where appropriate.</li>
                <li>Separating development, testing, and production environments when feasible.</li>
              </ul>
            </section>

            {/* 5. Network and Infrastructure Security */}
            <section id="section-5" className="policy-section-block">
              <h2 className="policy-section-title">5. Network and Infrastructure Security</h2>
              <p className="policy-text">
                We seek to protect the infrastructure supporting our services through appropriate security controls.
              </p>
              <p className="policy-text">These may include:</p>
              <ul className="policy-list">
                <li>Firewalls and network access restrictions.</li>
                <li>Secure configuration of servers and applications.</li>
                <li>Timely installation of relevant security updates.</li>
                <li>Restricting access to administrative services.</li>
                <li>Monitoring systems for suspicious activity where supported.</li>
                <li>Using secure communication protocols, such as HTTPS, where applicable.</li>
              </ul>
            </section>

            {/* 6. Encryption and Secure Communication */}
            <section id="section-6" className="policy-section-block">
              <h2 className="policy-section-title">6. Encryption and Secure Communication</h2>
              <p className="policy-text">
                Where appropriate and supported, we use encryption to protect information during transmission and, where necessary, while stored.
              </p>
              <p className="policy-text">
                Customers should avoid sharing passwords, authentication codes, payment details, or other sensitive information through unsecured communication channels.
              </p>
              <p className="policy-text">
                The availability and scope of encryption may vary depending on the product, service, hosting environment, and technical requirements.
              </p>
            </section>

            {/* 7. Monitoring and Logging */}
            <section id="section-7" className="policy-section-block">
              <h2 className="policy-section-title">7. Monitoring and Logging</h2>
              <p className="policy-text">
                Where appropriate, we may maintain system logs and monitor relevant activities to help:
              </p>
              <ul className="policy-list">
                <li>Identify suspicious access attempts.</li>
                <li>Investigate technical issues.</li>
                <li>Detect potential security incidents.</li>
                <li>Maintain system reliability.</li>
                <li>Support troubleshooting and security investigations.</li>
              </ul>
              <p className="policy-text">
                Access to logs and monitoring information should be restricted to authorized personnel and handled in accordance with applicable privacy requirements.
              </p>
            </section>

            {/* 8. Vulnerability Management */}
            <section id="section-8" className="policy-section-block">
              <h2 className="policy-section-title">8. Vulnerability Management</h2>
              <p className="policy-text">
                We recognize that software and infrastructure may contain vulnerabilities. We aim to address identified security issues based on their severity, potential impact, and available remediation options.
              </p>
              <p className="policy-text">Our approach may include:</p>
              <ul className="policy-list">
                <li>Reviewing reported vulnerabilities.</li>
                <li>Applying relevant security patches.</li>
                <li>Updating vulnerable dependencies.</li>
                <li>Investigating reported weaknesses.</li>
                <li>Prioritizing remediation of significant risks.</li>
              </ul>
              <p className="policy-text">
                We welcome responsible reports from individuals who identify potential security vulnerabilities in our systems.
              </p>
            </section>

            {/* 9. Security Incident Response */}
            <section id="section-9" className="policy-section-block">
              <h2 className="policy-section-title">9. Security Incident Response</h2>
              <p className="policy-text">
                If we identify or receive a credible report of a security incident affecting our services, we aim to investigate and take appropriate steps to contain and address it.
              </p>
              <p className="policy-text">
                Depending on the nature and impact of the incident, these steps may include:
              </p>
              <ul className="policy-list">
                <li>Assessing the reported issue.</li>
                <li>Containing the incident where possible.</li>
                <li>Investigating the potential impact.</li>
                <li>Implementing corrective measures.</li>
                <li>Notifying affected parties or relevant authorities when required by applicable law.</li>
              </ul>
            </section>

            {/* 10. Third-Party Services */}
            <section id="section-10" className="policy-section-block">
              <h2 className="policy-section-title">10. Third-Party Services</h2>
              <p className="policy-text">
                Some services may rely on third-party providers, including hosting platforms, cloud infrastructure, payment processors, analytics providers, and other technology services.
              </p>
              <p className="policy-text">
                The security practices of these providers are governed by their own policies and controls. We seek to select and use third-party services appropriate to the needs of our business and the services we provide.
              </p>
            </section>

            {/* 11. Customer Responsibilities */}
            <section id="section-11" className="policy-section-block">
              <h2 className="policy-section-title">11. Customer Responsibilities</h2>
              <p className="policy-text">
                Customers also play an important role in maintaining security. We recommend that customers:
              </p>
              <ul className="policy-list">
                <li>Use strong, unique passwords.</li>
                <li>Enable multi-factor authentication when available.</li>
                <li>Keep devices, browsers, and applications updated.</li>
                <li>Protect account credentials and API keys.</li>
                <li>Restrict access to authorized users.</li>
                <li>Report suspected unauthorized access promptly.</li>
                <li>Avoid installing software from untrusted sources.</li>
              </ul>
              <p className="policy-text">
                Customers are responsible for maintaining the security of their own devices, accounts, networks, and systems unless otherwise agreed in writing.
              </p>
            </section>

            {/* 12. Responsible Vulnerability Disclosure */}
            <section id="section-12" className="policy-section-block">
              <h2 className="policy-section-title">12. Responsible Vulnerability Disclosure</h2>
              <p className="policy-text">
                If you discover a potential security vulnerability affecting SoftAir Solutions' website, applications, or services, please report it to:
              </p>

              <div className="policy-contact-box" style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Security Report Desk
                    </span>
                    <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                      info@softair.co.in
                    </a>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Subject Line
                    </span>
                    <strong style={{ color: 'var(--text-main)' }}>Security Vulnerability Report</strong>
                  </div>
                </div>
              </div>

              <p className="policy-text">
                Please include a description of the issue, the affected service, the potential impact, and steps to reproduce the issue where safe and appropriate.
              </p>
              <p className="policy-text">
                Please do not access, modify, download, or disclose other people's data; disrupt services; or perform testing beyond what is necessary to demonstrate the suspected vulnerability.
              </p>
              <p className="policy-text">
                We will review reports and determine appropriate next steps. A response or remediation timeframe is not guaranteed unless separately agreed.
              </p>
            </section>

            {/* 13. Limitations */}
            <section id="section-13" className="policy-section-block">
              <h2 className="policy-section-title">13. Limitations</h2>
              <p className="policy-text">
                Although we aim to apply appropriate security measures, no website, application, network, or data transmission method can be guaranteed to be completely secure.
              </p>
              <p className="policy-text">
                We cannot guarantee that our services will always be free from vulnerabilities, interruptions, unauthorized access, or other security incidents.
              </p>
              <p className="policy-text">
                Nothing in this statement excludes any obligation or liability that cannot lawfully be excluded under applicable law.
              </p>
            </section>

            {/* 14. Updates to These Standards */}
            <section id="section-14" className="policy-section-block">
              <h2 className="policy-section-title">14. Updates to These Standards</h2>
              <p className="policy-text">
                We may update these Security Standards as our services, technologies, and security practices change. Updates will be published on this page with a revised effective date where appropriate.
              </p>
            </section>

            {/* 15. Contact Us */}
            <section id="section-15" className="policy-section-block">
              <h2 className="policy-section-title">15. Contact Us</h2>
              <p className="policy-text">
                For security-related questions or concerns, contact:
              </p>

              <div className="policy-contact-box">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Organization
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>SoftAir Solutions</strong>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Website
                    </span>
                    <a href="https://softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      softair.co.in ↗
                    </a>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Security Email
                    </span>
                    <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      info@softair.co.in
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Actions */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/" onClick={handleBackHome} className="btn btn-secondary btn-sm">
                &larr; Back to SoftAir Solutions Home
              </a>
              <button onClick={handlePrint} className="btn btn-primary btn-sm">
                Print Security Standards
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* Policy Page Footer */}
      <footer style={{ background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', padding: '2rem 1.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            &copy; {new Date().getFullYear()} SoftAir Solutions Pvt Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/" onClick={handleBackHome} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</a>
            <a href="/about-us" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/about-us'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/about-us'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Us</a>
            <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/privacy-policy'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/privacy-policy'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms-of-service" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/terms-of-service'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/terms-of-service'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
