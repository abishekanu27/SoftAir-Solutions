import React, { useEffect, useState } from 'react';

export default function PrivacyPolicy({ onNavigateHome }) {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    // Set document title for SEO & compliance
    document.title = 'Privacy Policy — SoftAir Solutions';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const sections = document.querySelectorAll('.policy-section-block');
      const scrollPos = window.scrollY + 140;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(sec.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    { id: 'section-1', title: '1. Introduction & Scope' },
    { id: 'section-2', title: '2. Information We Collect' },
    { id: 'section-3', title: '3. How We Use Information' },
    { id: 'section-4', title: '4. Cookies & Web Technologies' },
    { id: 'section-5', title: '5. Data Sharing & Zero Selling' },
    { id: 'section-6', title: '6. Storage & Security Safeguards' },
    { id: 'section-7', title: '7. Cloud Services & Third Parties' },
    { id: 'section-8', title: '8. Data Retention & Secure Disposal' },
    { id: 'section-9', title: '9. Your Statutory Rights (DPDP)' },
    { id: 'section-10', title: '10. Children\'s Privacy' },
    { id: 'section-11', title: '11. Cross-Border Data Transfers' },
    { id: 'section-12', title: '12. Policy Revisions & Updates' },
    { id: 'section-13', title: '13. Grievance Desk & Contact' }
  ];

  return (
    <div className="policy-page">
      {/* Printable Document Letterhead (Visible ONLY in print output) */}
      <div className="print-only-letterhead">
        <div className="print-letterhead-top">
          <div className="print-brand-col">
            <div className="print-company-name">SOFTAIR SOLUTIONS</div>
            <div className="print-company-tagline">Enterprise Software Architecture, Custom Applications & IT Services</div>
            <div className="print-company-sub">Palakkad, Kerala, India · info@softair.co.in · +91 70127 51254 · softair.co.in</div>
          </div>
          <div className="print-meta-col">
            <div><strong>Document Ref:</strong> SAS-POL-PRIV-2026-V2</div>
            <div><strong>Effective Date:</strong> 9 October 2026</div>
            <div><strong>Entity:</strong> SoftAir Solutions</div>
            <div><strong>Jurisdiction:</strong> Palakkad, Kerala, India</div>
          </div>
        </div>
        <div className="print-letterhead-rule"></div>
        <div className="print-title-banner">
          <h1 className="print-doc-title">OFFICIAL PRIVACY POLICY & DATA GOVERNANCE FRAMEWORK</h1>
          <span className="print-compliance-seal">DPDP ACT 2023 COMPLIANT</span>
        </div>
      </div>

      {/* Sticky Policy Header (Hidden in Print) */}
      <header className="policy-header-bar no-print">
        <div className="policy-header-content">
          <a href="/" onClick={handleBackHome} className="brand-logo-wrap" aria-label="SoftAir Solutions Home">
            <img 
              src={logoSrc} 
              alt="SoftAir Solutions" 
              className="brand-logo-img" 
              style={{ height: '42px' }}
            />
          </a>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button 
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              title="Print / Save Document as Clean PDF"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.45rem 0.9rem' }}
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
        {/* Breadcrumb Navigation (Hidden in Print) */}
        <nav aria-label="Breadcrumb" className="no-print" style={{ marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <a href="/" onClick={handleBackHome} style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Legal & Compliance</span>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Privacy Policy</span>
        </nav>

        {/* Hero Banner (Hidden in Print, replaced by print-only-letterhead) */}
        <div className="policy-hero no-print">
          <div className="policy-badge-row">
            <span className="policy-pill green">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
              DPDP Act 2023 Aligned
            </span>
            <span className="policy-pill cyan">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              ISO 27001 Aligned Security
            </span>
            <span className="policy-pill purple">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              Zero Sale of Personal Data
            </span>
            <span className="policy-pill">
              <span>●</span> Active & Enforced
            </span>
          </div>

          <h1 className="policy-title">Privacy Policy & Data Governance</h1>
          <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.65, maxWidth: '820px', marginBottom: '1.25rem' }}>
            Comprehensive statutory disclosure detailing how SoftAir Solutions protects, collects, manages, and respects personal, client, and technical data across all applications and engineering engagements.
          </p>

          <div className="policy-meta-grid">
            <div className="policy-meta-card">
              <div className="policy-meta-card-label">Official Entity</div>
              <div className="policy-meta-card-value">SoftAir Solutions</div>
            </div>
            <div className="policy-meta-card">
              <div className="policy-meta-card-label">Effective Date</div>
              <div className="policy-meta-card-value">9 October 2026</div>
            </div>
            <div className="policy-meta-card">
              <div className="policy-meta-card-label">Jurisdiction</div>
              <div className="policy-meta-card-value">Palakkad, Kerala, India</div>
            </div>
            <div className="policy-meta-card">
              <div className="policy-meta-card-label">Grievance Desk</div>
              <div className="policy-meta-card-value">info@softair.co.in</div>
            </div>
          </div>

          <div className="legal-highlight-box" style={{ margin: '1rem 0 0 0' }}>
            <strong>Commitment to Data Privacy:</strong> At SoftAir Solutions, we respect your privacy and are committed to protecting the personal information of our website visitors, customers, business partners, and users of our software products and services. We do not sell personal information as part of our intended business practices.
          </div>

          <div className="policy-actions-bar">
            <button 
              onClick={handlePrint} 
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print / Download PDF</span>
            </button>
            <a 
              href="mailto:info@softair.co.in"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Contact Privacy Officer</span>
            </a>
          </div>
        </div>

        {/* Policy Layout with Sticky Sidebar TOC */}
        <div className="policy-layout">
          {/* Quick Jump Sidebar (Hidden in Print) */}
          <aside className="policy-sidebar no-print" aria-label="Table of Contents">
            <div className="policy-sidebar-title">Table of Contents</div>
            <ul className="policy-toc-list">
              {sections.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className={`policy-toc-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(item.id);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        setActiveSection(item.id);
                      }
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Privacy Inquiries</div>
              <div>Direct Grievance Desk:</div>
              <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '0.2rem' }}>
                info@softair.co.in
              </a>
              <div style={{ marginTop: '0.5rem', fontSize: '0.78rem' }}>
                Hotline: +91 70127 51254
              </div>
            </div>
          </aside>

          {/* Detailed Printable Content */}
          <article className="policy-content-card">
            {/* 1. Introduction */}
            <section id="section-1" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">01</span>
                <h2 className="policy-section-title">Introduction & Scope</h2>
              </div>
              <p className="policy-text">Welcome to SoftAir Solutions.</p>
              <p className="policy-text">
                At SoftAir Solutions ("we," "our," or "us"), headquartered in Palakkad, Kerala, India, we respect your privacy and are committed to protecting the personal and proprietary information of our website visitors, customers, business partners, and users of our software products and services.
              </p>
              <p className="policy-text">
                This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website (<strong>softair.co.in</strong>), contact us for software engineering, or use our custom software products, mobile applications, and managed IT services.
              </p>
              <p className="policy-text">
                By accessing our website or engaging our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="section-2" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">02</span>
                <h2 className="policy-section-title">Information We Collect</h2>
              </div>
              <p className="policy-text">
                We collect information only to the extent necessary to deliver high-quality technology consulting, application engineering, and client support. We categorize collected information as follows:
              </p>

              <div className="policy-info-grid">
                <div className="policy-info-card">
                  <div className="policy-info-card-header">
                    <div className="policy-info-card-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h3 className="policy-info-card-title">Personal & Contact Information</h3>
                  </div>
                  <ul className="policy-list" style={{ margin: 0, paddingLeft: '1.2rem' }}>
                    <li>Full Name and Professional Title</li>
                    <li>Business Email Address</li>
                    <li>Direct Phone / Mobile Number</li>
                    <li>Company / Enterprise Name</li>
                    <li>Information submitted through contact and project enquiry forms</li>
                  </ul>
                </div>

                <div className="policy-info-card">
                  <div className="policy-info-card-header">
                    <div className="policy-info-card-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <h3 className="policy-info-card-title">Technical Diagnostics & Telemetry</h3>
                  </div>
                  <ul className="policy-list" style={{ margin: 0, paddingLeft: '1.2rem' }}>
                    <li>Internet Protocol (IP) Address</li>
                    <li>Browser Engine, Version, and Platform</li>
                    <li>Operating System and Device Specifications</li>
                    <li>Security server access logs and telemetry diagnostics</li>
                  </ul>
                </div>

                <div className="policy-info-card">
                  <div className="policy-info-card-header">
                    <div className="policy-info-card-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      </svg>
                    </div>
                    <h3 className="policy-info-card-title">Customer & Application Data</h3>
                  </div>
                  <ul className="policy-list" style={{ margin: 0, paddingLeft: '1.2rem' }}>
                    <li>Client solution specifications and scope documents</li>
                    <li>Authorized deployment credentials (encrypted)</li>
                    <li>Database integration configurations</li>
                    <li>Technical issue descriptions and maintenance support logs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="section-3" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">03</span>
                <h2 className="policy-section-title">How We Use Your Information</h2>
              </div>
              <p className="policy-text">SoftAir Solutions processes collected data strictly for lawful, legitimate business objectives:</p>
              <ul className="policy-list">
                <li><strong>Enquiry Response:</strong> Responding to client enquiries, scheduling technical discovery calls, and preparing engineering cost proposals.</li>
                <li><strong>Service Delivery:</strong> Providing custom web development, Android mobile apps, custom business software, and enterprise IT support.</li>
                <li><strong>Product Maintenance:</strong> Delivering, configuring, maintaining, and updating our software platforms and deployed client solutions.</li>
                <li><strong>Customer Communications:</strong> Keeping clients updated on project milestones, security updates, and SLA support tickets.</li>
                <li><strong>Performance Optimization:</strong> Improving website responsiveness, optimizing software workflows, and user interface accessibility.</li>
                <li><strong>Security & Access Control:</strong> Maintaining network and server security, preventing unauthorized access, and detecting vulnerabilities.</li>
                <li><strong>Statutory Compliance:</strong> Fulfilling obligations under the Digital Personal Data Protection (DPDP) Act, 2023 of India and other applicable laws.</li>
              </ul>
              <p className="policy-text">
                We use personal information only for appropriate, designated purposes and in accordance with applicable legal frameworks.
              </p>
            </section>

            {/* 4. Cookies and Tracking Technologies */}
            <section id="section-4" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">04</span>
                <h2 className="policy-section-title">Cookies and Tracking Technologies</h2>
              </div>
              <p className="policy-text">
                Our website may use essential cookies and similar lightweight technologies to support website functionality, ensure session stability, and monitor aggregated traffic diagnostics.
              </p>
              <p className="policy-text">
                Third-party services integrated into our website (such as font delivery or map integrations) may also utilize functional cookies in accordance with their respective privacy policies.
              </p>
              <p className="policy-text">
                Where required by applicable law, we will obtain consent before deploying non-essential cookies. You can manage or disable cookies through your web browser preferences; however, disabling certain cookies may impact technical features of our website.
              </p>
            </section>

            {/* 5. How We Share Information */}
            <section id="section-5" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">05</span>
                <h2 className="policy-section-title">Data Sharing & Zero Data Selling</h2>
              </div>
              
              <div className="legal-highlight-box">
                <strong>Zero Commercial Sale Guarantee:</strong> SoftAir Solutions does not sell, rent, trade, or lease personal or client information to third-party data brokers, advertising agencies, or marketing companies under any circumstances.
              </div>

              <p className="policy-text">We may share information only in the following controlled, legitimate circumstances:</p>
              <ul className="policy-list">
                <li>
                  <strong>Authorized Service Providers:</strong> With trusted infrastructure providers supporting our cloud hosting, server security, database backups, or email communication, bound by strict confidentiality agreements.
                </li>
                <li>
                  <strong>Customer-Authorized Sharing:</strong> When a client explicitly instructs or authorizes us to connect or share data with a third-party API, external vendor, or payment gateway.
                </li>
                <li>
                  <strong>Statutory & Legal Requirements:</strong> When disclosure is required by applicable law, regulatory audit, judicial order, or valid legal summons.
                </li>
                <li>
                  <strong>Protection of Rights & Safety:</strong> When reasonably necessary to defend our legal rights, enforce contracts, investigate fraud, or safeguard systems against security intrusions.
                </li>
              </ul>
              <p className="policy-text">
                Where appropriate, we take reasonable steps to ensure that third parties handle information in accordance with applicable privacy and security requirements.
              </p>
            </section>

            {/* 6. Data Storage and Security */}
            <section id="section-6" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">06</span>
                <h2 className="policy-section-title">Data Storage and Security Standards</h2>
              </div>
              <p className="policy-text">
                We implement comprehensive technical and organizational safeguards designed to protect personal and enterprise records against unauthorized access, destruction, loss, alteration, or disclosure:
              </p>

              <div className="policy-security-grid">
                <div className="policy-security-item">
                  <div className="policy-security-item-title">TLS 1.3 Encryption</div>
                  <div className="policy-security-item-desc">
                    All data in transit across our websites, web applications, and APIs is encrypted using industry-standard TLS 1.3 protocols.
                  </div>
                </div>

                <div className="policy-security-item">
                  <div className="policy-security-item-title">AES-256 at Rest</div>
                  <div className="policy-security-item-desc">
                    Sensitive database records, access keys, and client documents are stored using strong AES-256 cryptographic standards.
                  </div>
                </div>

                <div className="policy-security-item">
                  <div className="policy-security-item-title">Access Governance</div>
                  <div className="policy-security-item-desc">
                    Strict Principle of Least Privilege (PoLP) and multi-factor authentication (MFA) are enforced across all internal workstations and server logins.
                  </div>
                </div>

                <div className="policy-security-item">
                  <div className="policy-security-item-title">Disaster Recovery</div>
                  <div className="policy-security-item-desc">
                    Automated encrypted daily snapshots with periodic restoration dry-runs to ensure zero data loss during unforeseen hardware disruptions.
                  </div>
                </div>
              </div>

              <p className="policy-text">
                However, while we employ state-of-the-art security measures, no method of internet transmission or electronic storage is completely impenetrable, and absolute security cannot be guaranteed.
              </p>
            </section>

            {/* 7. Third-Party Services and External Links */}
            <section id="section-7" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">07</span>
                <h2 className="policy-section-title">Third-Party Services and External Links</h2>
              </div>
              <p className="policy-text">
                Our website and software solutions may integrate with or link to external platforms, cloud hosts, payment gateways, and client tools.
              </p>
              <p className="policy-text">
                These external entities maintain independent privacy policies and data practices. We strongly recommend reviewing the privacy notices of any third-party services you access.
              </p>
              <p className="policy-text">
                SoftAir Solutions is not responsible for the privacy practices, content, or policies of third-party platforms that we do not own or control.
              </p>
            </section>

            {/* 8. Data Retention */}
            <section id="section-8" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">08</span>
                <h2 className="policy-section-title">Data Retention & Secure Disposal</h2>
              </div>
              <p className="policy-text">
                We retain personal information only for as long as necessary to fulfill the purposes set out in this Privacy Policy, provide ongoing technical services, resolve billing disputes, and comply with legal, tax, and regulatory requirements.
              </p>
              <p className="policy-text">
                Retention durations vary according to the nature of the information, service agreements, and statutory mandates. Upon expiration of the required retention period, records are securely deleted or irreversibly anonymized using industry-standard sanitization protocols.
              </p>
            </section>

            {/* 9. Your Privacy Rights */}
            <section id="section-9" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">09</span>
                <h2 className="policy-section-title">Your Statutory Privacy Rights</h2>
              </div>
              <p className="policy-text">
                Under the Digital Personal Data Protection (DPDP) Act, 2023 of India and applicable international privacy frameworks, you have specific legal rights regarding your personal records:
              </p>

              <div className="policy-rights-grid">
                <div className="policy-right-card">
                  <div className="policy-right-card-num">01</div>
                  <div>
                    <div className="policy-right-card-title">Right to Access</div>
                    <div className="policy-right-card-desc">Request a summary of personal data held about you and details of processing activities.</div>
                  </div>
                </div>

                <div className="policy-right-card">
                  <div className="policy-right-card-num">02</div>
                  <div>
                    <div className="policy-right-card-title">Right to Correction</div>
                    <div className="policy-right-card-desc">Request correction, rectification, or updating of inaccurate, outdated, or incomplete data.</div>
                  </div>
                </div>

                <div className="policy-right-card">
                  <div className="policy-right-card-num">03</div>
                  <div>
                    <div className="policy-right-card-title">Right to Erasure</div>
                    <div className="policy-right-card-desc">Request deletion of personal records that are no longer necessary for the original lawful purpose.</div>
                  </div>
                </div>

                <div className="policy-right-card">
                  <div className="policy-right-card-num">04</div>
                  <div>
                    <div className="policy-right-card-title">Right to Withdraw Consent</div>
                    <div className="policy-right-card-desc">Withdraw previously granted consent at any time without impacting prior lawful processing.</div>
                  </div>
                </div>

                <div className="policy-right-card">
                  <div className="policy-right-card-num">05</div>
                  <div>
                    <div className="policy-right-card-title">Right to Grievance Redressal</div>
                    <div className="policy-right-card-desc">Lodge formal inquiries or complaints with our designated Data Grievance Desk for prompt remediation.</div>
                  </div>
                </div>
              </div>

              <p className="policy-text">
                To exercise any of these rights, please email our privacy desk at <strong>info@softair.co.in</strong>. We may verify your identity before fulfilling statutory data requests.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section id="section-10" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">10</span>
                <h2 className="policy-section-title">Children's Privacy Protection</h2>
              </div>
              <p className="policy-text">
                Our website, enterprise software, and engineering services are targeted exclusively toward business professionals and enterprises. We do not knowingly solicit or collect personal information from individuals under the age of 18 without verifiable parental or guardian authorization.
              </p>
              <p className="policy-text">
                If you believe a child has provided us with personal information without proper consent, please contact us immediately so we can promptly delete the data from our active systems.
              </p>
            </section>

            {/* 11. International Data Transfers */}
            <section id="section-11" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">11</span>
                <h2 className="policy-section-title">International Data Transfers</h2>
              </div>
              <p className="policy-text">
                SoftAir Solutions operates primarily from Palakkad, Kerala, India. Depending on the client's deployment architecture and third-party cloud infrastructure (e.g., AWS, GCP), personal or technical records may be processed or backed up in secure data centers located outside your country of residence.
              </p>
              <p className="policy-text">
                Whenever cross-border transfers occur, we implement appropriate contractual safeguards and encryption protocols to ensure adequate data protection in compliance with applicable laws.
              </p>
            </section>

            {/* 12. Changes to This Privacy Policy */}
            <section id="section-12" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">12</span>
                <h2 className="policy-section-title">Policy Revisions and Updates</h2>
              </div>
              <p className="policy-text">
                We periodically review and update this Privacy Policy to reflect advancements in our technology, changes in software offerings, industry best practices, and new statutory obligations.
              </p>
              <p className="policy-text">
                The latest version will always be published on this page with a revised "Last Updated" timestamp. We encourage clients and visitors to review this page periodically.
              </p>
            </section>

            {/* 13. Contact Us */}
            <section id="section-13" className="policy-section-block">
              <div className="policy-section-header">
                <span className="policy-section-num">13</span>
                <h2 className="policy-section-title">Contact & Grievance Redressal Desk</h2>
              </div>
              <p className="policy-text">
                If you have questions regarding this Privacy Policy, wish to exercise statutory data rights, or want to raise a privacy-related concern, our official team is ready to assist:
              </p>

              <div className="policy-contact-box">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Company Entity
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>SoftAir Solutions</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                      Palakkad, Kerala, India
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Official Portal
                    </span>
                    <a href="https://softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      softair.co.in ↗
                    </a>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Web & Mobile Engineering
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                      Grievance & Legal Desk
                    </span>
                    <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                      info@softair.co.in
                    </a>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Tel: +91 70127 51254 / +91 77366 40292
                    </div>
                  </div>
                </div>
              </div>

              <p className="policy-text" style={{ marginTop: '1.25rem' }}>
                We acknowledge and review all formal privacy and compliance communications within 24 to 48 business hours.
              </p>
            </section>

            {/* Bottom Actions (Hidden in Print) */}
            <div className="no-print" style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/" onClick={handleBackHome} className="btn btn-secondary btn-sm">
                &larr; Back to SoftAir Solutions Home
              </a>
              <button onClick={handlePrint} className="btn btn-primary btn-sm">
                Print / Save Privacy Policy
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* Printable Document Footer (Visible ONLY in print) */}
      <div className="print-only-footer">
        Official Compliance Document · SoftAir Solutions · Palakkad, Kerala, India · info@softair.co.in · softair.co.in
      </div>

      {/* Policy Page Footer (Hidden in Print) */}
      <footer className="no-print" style={{ background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', padding: '2rem 1.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            &copy; {new Date().getFullYear()} SoftAir Solutions. All rights reserved.
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
