import React, { useEffect } from 'react';

export default function PrivacyPolicy({ onNavigateHome }) {
  useEffect(() => {
    // Set document title for SEO & compliance
    document.title = 'Privacy Policy — SoftAir Solutions Pvt Ltd';
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
    { id: 'section-1', title: '1. Introduction' },
    { id: 'section-2', title: '2. Information We Collect' },
    { id: 'section-3', title: '3. How We Use Your Information' },
    { id: 'section-4', title: '4. Cookies and Tracking Technologies' },
    { id: 'section-5', title: '5. How We Share Information' },
    { id: 'section-6', title: '6. Data Storage and Security' },
    { id: 'section-7', title: '7. Third-Party Services and External Links' },
    { id: 'section-8', title: '8. Data Retention' },
    { id: 'section-9', title: '9. Your Privacy Rights' },
    { id: 'section-10', title: '10. Children\'s Privacy' },
    { id: 'section-11', title: '11. International Data Transfers' },
    { id: 'section-12', title: '12. Changes to This Privacy Policy' },
    { id: 'section-13', title: '13. Contact Us' }
  ];

  return (
    <div className="policy-page">
      {/* Sticky Policy Header */}
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
              title="Print Privacy Policy document"
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
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Privacy Policy</span>
        </nav>

        {/* Hero Banner */}
        <div className="policy-hero">
          <div className="policy-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Official Policy Documentation</span>
          </div>

          <h1 className="policy-title">Privacy Policy — SoftAir Solutions</h1>

          <div className="policy-meta">
            <div><strong>Last Updated:</strong> 9 October 2026</div>
            <div>&bull;</div>
            <div><strong>Entity:</strong> SoftAir Solutions Pvt Ltd</div>
            <div>&bull;</div>
            <div><strong>Canonical URL:</strong> softair.co.in/privacy-policy</div>
          </div>

          <div className="legal-highlight-box" style={{ margin: 0 }}>
            <strong>Commitment to Data Privacy:</strong> At SoftAir Solutions, we respect your privacy and are committed to protecting the personal information of our website visitors, customers, business partners, and users of our software products and services. We do not sell personal information as part of our intended business practices.
          </div>
        </div>

        {/* Policy Layout with Sticky Sidebar TOC */}
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
              <div>Questions about privacy?</div>
              <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                info@softair.co.in
              </a>
            </div>
          </aside>

          {/* Detailed Content */}
          <article className="policy-content-card">
            {/* 1. Introduction */}
            <section id="section-1" className="policy-section-block">
              <h2 className="policy-section-title">1. Introduction</h2>
              <p className="policy-text">Welcome to SoftAir Solutions.</p>
              <p className="policy-text">
                At SoftAir Solutions ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information of our website visitors, customers, business partners, and users of our services.
              </p>
              <p className="policy-text">
                This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, contact us, or use our software products and services.
              </p>
              <p className="policy-text">
                By using our website, you acknowledge that you have read this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="section-2" className="policy-section-block">
              <h2 className="policy-section-title">2. Information We Collect</h2>
              <p className="policy-text">
                We may collect the following categories of information, depending on how you interact with our website and services.
              </p>

              <h3 className="policy-subheading">Personal Information</h3>
              <ul className="policy-list">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Information submitted through contact forms and enquiries</li>
              </ul>

              <h3 className="policy-subheading">Technical Information</h3>
              <p className="policy-text">
                When you visit our website, certain technical information may be collected, where applicable, including:
              </p>
              <ul className="policy-list">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device and operating system information</li>
                <li>Pages visited and website usage information</li>
              </ul>

              <h3 className="policy-subheading">Customer and Application Information</h3>
              <p className="policy-text">
                When you use our software products or services, we may process information required to provide those services, such as account details, application data, and technical support information.
              </p>
              <p className="policy-text">
                The information collected depends on the particular service and its configuration.
              </p>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="section-3" className="policy-section-block">
              <h2 className="policy-section-title">3. How We Use Your Information</h2>
              <p className="policy-text">We may use the information we collect to:</p>
              <ul className="policy-list">
                <li>Respond to customer enquiries.</li>
                <li>Provide software development and IT support services.</li>
                <li>Deliver and maintain our products and applications.</li>
                <li>Communicate with customers and business partners.</li>
                <li>Improve website performance and user experience.</li>
                <li>Maintain system security and prevent unauthorized access.</li>
                <li>Troubleshoot technical issues.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
              <p className="policy-text">
                We will use personal information only for appropriate purposes and in accordance with applicable law.
              </p>
            </section>

            {/* 4. Cookies and Tracking Technologies */}
            <section id="section-4" className="policy-section-block">
              <h2 className="policy-section-title">4. Cookies and Tracking Technologies</h2>
              <p className="policy-text">
                Our website may use cookies and similar technologies to support website functionality, improve performance, and understand how visitors interact with our services.
              </p>
              <p className="policy-text">
                Third-party services integrated into our website may also use cookies or similar technologies.
              </p>
              <p className="policy-text">
                Where required by applicable law, we will obtain consent before using non-essential cookies or tracking technologies.
              </p>
              <p className="policy-text">
                You can manage cookies through your browser settings, although disabling certain cookies may affect website functionality.
              </p>
            </section>

            {/* 5. How We Share Information */}
            <section id="section-5" className="policy-section-block">
              <h2 className="policy-section-title">5. How We Share Information</h2>
              <p className="policy-text">
                We do not sell personal information as part of our intended business practices.
              </p>
              <p className="policy-text">We may share information in the following circumstances:</p>
              <ul className="policy-list">
                <li>
                  <strong>Service providers:</strong> With third-party providers that support website hosting, infrastructure, security, communication, or application delivery.
                </li>
                <li>
                  <strong>Customer-authorized sharing:</strong> When a customer requests or authorizes us to share information.
                </li>
                <li>
                  <strong>Legal requirements:</strong> When disclosure is required by applicable law or a valid legal process.
                </li>
                <li>
                  <strong>Security and protection:</strong> When reasonably necessary to protect our systems, customers, or legal rights.
                </li>
              </ul>
              <p className="policy-text">
                Where appropriate, we take reasonable steps to ensure that third parties handle information in accordance with applicable privacy and security requirements.
              </p>
            </section>

            {/* 6. Data Storage and Security */}
            <section id="section-6" className="policy-section-block">
              <h2 className="policy-section-title">6. Data Storage and Security</h2>
              <p className="policy-text">
                We implement reasonable technical and organizational measures designed to protect personal information against unauthorized access, alteration, loss, misuse, or disclosure.
              </p>
              <p className="policy-text">
                Depending on the service, these measures may include access controls, authentication mechanisms, security monitoring, and appropriate infrastructure safeguards.
              </p>
              <p className="policy-text">
                However, no method of electronic storage or transmission is completely secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* 7. Third-Party Services and External Links */}
            <section id="section-7" className="policy-section-block">
              <h2 className="policy-section-title">7. Third-Party Services and External Links</h2>
              <p className="policy-text">
                Our website and applications may use or link to third-party services, platforms, or websites.
              </p>
              <p className="policy-text">
                These services may have their own privacy policies and data-handling practices. We encourage users to review the relevant policies before providing personal information to third parties.
              </p>
              <p className="policy-text">
                SoftAir Solutions is not responsible for the privacy practices of independent third-party websites that we do not control.
              </p>
            </section>

            {/* 8. Data Retention */}
            <section id="section-8" className="policy-section-block">
              <h2 className="policy-section-title">8. Data Retention</h2>
              <p className="policy-text">
                We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this Privacy Policy, provide our services, resolve disputes, and meet applicable legal obligations.
              </p>
              <p className="policy-text">
                Retention periods may vary depending on the type of information, the service involved, contractual requirements, and applicable law.
              </p>
              <p className="policy-text">
                When information is no longer required, we will take appropriate steps to delete it or otherwise dispose of it securely, subject to applicable legal obligations.
              </p>
            </section>

            {/* 9. Your Privacy Rights */}
            <section id="section-9" className="policy-section-block">
              <h2 className="policy-section-title">9. Your Privacy Rights</h2>
              <p className="policy-text">
                Depending on applicable law, you may have rights relating to your personal information, including the right to:
              </p>
              <ul className="policy-list">
                <li>Request access to your personal information.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of personal information where applicable.</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>Raise concerns about how your information is processed.</li>
              </ul>
              <p className="policy-text">
                To exercise an applicable right, please contact us using the details provided below.
              </p>
              <p className="policy-text">
                We may need to verify your identity before processing certain requests.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section id="section-10" className="policy-section-block">
              <h2 className="policy-section-title">10. Children's Privacy</h2>
              <p className="policy-text">
                Our website and services are not intentionally designed to collect personal information from children without appropriate authorization where required by law.
              </p>
              <p className="policy-text">
                If you believe that a child has provided personal information to us inappropriately, please contact us so that we can review the situation and take appropriate action.
              </p>
            </section>

            {/* 11. International Data Transfers */}
            <section id="section-11" className="policy-section-block">
              <h2 className="policy-section-title">11. International Data Transfers</h2>
              <p className="policy-text">
                Depending on the services used, personal information may be processed or stored in locations outside your country of residence.
              </p>
              <p className="policy-text">
                Where international transfers occur, we will take appropriate steps to comply with applicable legal requirements relating to those transfers.
              </p>
            </section>

            {/* 12. Changes to This Privacy Policy */}
            <section id="section-12" className="policy-section-block">
              <h2 className="policy-section-title">12. Changes to This Privacy Policy</h2>
              <p className="policy-text">
                We may update this Privacy Policy from time to time to reflect changes in our services, business practices, technology, or legal obligations.
              </p>
              <p className="policy-text">
                The updated version will be published on this page with a revised "Last Updated" date.
              </p>
              <p className="policy-text">
                We encourage visitors to review this page periodically.
              </p>
            </section>

            {/* 13. Contact Us */}
            <section id="section-13" className="policy-section-block">
              <h2 className="policy-section-title">13. Contact Us</h2>
              <p className="policy-text">
                If you have questions about this Privacy Policy or wish to raise a concern regarding your personal information, please contact us.
              </p>

              <div className="policy-contact-box">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Company
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>SoftAir Solutions</strong>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Official Website
                    </span>
                    <a href="https://softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      softair.co.in ↗
                    </a>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Official Privacy Email
                    </span>
                    <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      info@softair.co.in
                    </a>
                  </div>
                </div>
              </div>

              <p className="policy-text" style={{ marginTop: '1.25rem' }}>
                We will review privacy-related enquiries and respond as appropriate.
              </p>
            </section>

            {/* Bottom Actions */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/" onClick={handleBackHome} className="btn btn-secondary btn-sm">
                &larr; Back to SoftAir Solutions Home
              </a>
              <button onClick={handlePrint} className="btn btn-primary btn-sm">
                Print Privacy Policy
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
            <a href="/terms-of-service" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/terms-of-service'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/terms-of-service'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="/security-standards" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/security-standards'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/security-standards'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Standards</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
