import React, { useEffect } from 'react';

export default function LegalModal({ activeDoc, setActiveDoc }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (activeDoc) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDoc]);

  if (!activeDoc) return null;

  const closeModal = () => {
    setActiveDoc(null);
    if (window.location.hash === '#privacy' || window.location.hash === '#terms' || window.location.hash === '#security' || window.location.hash === '#iso') {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="modal-backdrop open" 
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) closeModal();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="legal-modal-container">
        {/* Modal Top Header (Screen Only) */}
        <div className="legal-modal-header no-print">
          <div>
            <div className="legal-modal-badge">SoftAir Solutions · Legal & Governance</div>
            <h2 className="legal-modal-title">
              {activeDoc === 'privacy' && 'Privacy Policy'}
              {activeDoc === 'terms' && 'Terms of Service'}
              {(activeDoc === 'security' || activeDoc === 'iso') && 'Security Standards & Practices'}
            </h2>
            <div className="legal-modal-subtitle">
              Official compliance documentation · Effective Date: October 2026 · Palakkad, Kerala, India
            </div>
          </div>

          <div className="no-print" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={handlePrint}
              title="Print document as clean PDF"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem' }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print / PDF</span>
            </button>

            <button 
              className="modal-close" 
              style={{ position: 'static' }} 
              onClick={closeModal} 
              aria-label="Close Legal Document"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Tab Navigation (Screen Only) */}
        <div className="legal-tabs-bar no-print">
          <button 
            className={`legal-tab-btn ${activeDoc === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveDoc('privacy')}
          >
            🛡️ Privacy Policy
          </button>
          <button 
            className={`legal-tab-btn ${activeDoc === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveDoc('terms')}
          >
            📄 Terms of Service
          </button>
          <button 
            className={`legal-tab-btn ${(activeDoc === 'security' || activeDoc === 'iso') ? 'active' : ''}`}
            onClick={() => setActiveDoc('security')}
          >
            🔒 Security Standards & ISO
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="legal-modal-body">
          {/* Printable Letterhead (Visible ONLY in print) */}
          <div className="print-only-letterhead">
            <div className="print-letterhead-top">
              <div className="print-brand-col">
                <div className="print-company-name">SOFTAIR SOLUTIONS</div>
                <div className="print-company-tagline">Enterprise Software Architecture, Custom Applications & IT Services</div>
                <div className="print-company-sub">Palakkad, Kerala, India · info@softair.co.in · +91 70127 51254 · softair.co.in</div>
              </div>
              <div className="print-meta-col">
                <div><strong>Document:</strong> {activeDoc === 'privacy' ? 'Privacy Policy' : activeDoc === 'terms' ? 'Terms of Service' : 'Security Standards'}</div>
                <div><strong>Effective Date:</strong> October 2026</div>
                <div><strong>Entity:</strong> SoftAir Solutions</div>
                <div><strong>Jurisdiction:</strong> Palakkad, Kerala, India</div>
              </div>
            </div>
            <div className="print-letterhead-rule"></div>
            <div className="print-title-banner">
              <h1 className="print-doc-title">
                {activeDoc === 'privacy' && 'OFFICIAL PRIVACY POLICY & DATA GOVERNANCE FRAMEWORK'}
                {activeDoc === 'terms' && 'OFFICIAL TERMS OF SERVICE & ENGAGEMENT AGREEMENT'}
                {(activeDoc === 'security' || activeDoc === 'iso') && 'ENTERPRISE SECURITY STANDARDS & COMPLIANCE PROTOCOLS'}
              </h1>
              <span className="print-compliance-seal">STATUTORY COMPLIANCE DOCUMENT</span>
            </div>
          </div>

          {activeDoc === 'privacy' && (
            <div className="legal-content-section">
              <div className="legal-highlight-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <strong>Official Policy:</strong> SoftAir Solutions respects your privacy and is committed to protecting personal data. We do not sell personal data under any circumstances.
                </div>
                <a 
                  href="/privacy-policy" 
                  className="btn btn-primary btn-sm no-print" 
                  onClick={() => closeModal()}
                  style={{ textDecoration: 'none', padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                >
                  Open Dedicated Page (/privacy-policy) &rarr;
                </a>
              </div>

              <h3>1. Scope and Introduction</h3>
              <p>
                This Privacy Policy outlines how <strong>SoftAir Solutions</strong> ("we", "our", or "Company"), located in Palakkad, Kerala, India, collects, uses, protects, and discloses information gathered through our official website and client communication channels.
              </p>

              <h3>2. Information We Collect</h3>
              <p>We may collect personal and technical information when you submit an inquiry, project estimate request, or consult with our engineering team:</p>
              <ul>
                <li><strong>Contact Information:</strong> Full name, business email address, phone number, and company name.</li>
                <li><strong>Project Requirements:</strong> Scope documents, technology preferences, feature lists, and estimated budgets provided in inquiry forms.</li>
                <li><strong>Technical Diagnostics:</strong> Browser type, operating system, and IP address collected automatically through standard web server logs for security monitoring.</li>
              </ul>

              <h3>3. How We Use Collected Data</h3>
              <p>Your information is utilized strictly for lawful business purposes, including:</p>
              <ul>
                <li>Responding to your project discovery inquiries and scheduling strategy calls.</li>
                <li>Preparing software architecture proposals, cost estimates, and contractual milestone agreements.</li>
                <li>Providing ongoing technical support, system maintenance, and IT service updates.</li>
                <li>Fulfilling statutory compliance obligations under the Digital Personal Data Protection (DPDP) Act, 2023 of India.</li>
              </ul>

              <h3>4. Confidentiality and Non-Disclosure</h3>
              <p>
                All proprietary software concepts, application wireframes, business models, and database schematics shared with <strong>SoftAir Solutions</strong> are treated with strict confidentiality. We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to detailed code and architecture discovery sessions.
              </p>

              <h3>5. Data Storage and Security Measures</h3>
              <p>
                We implement technical and organizational safeguards, including SSL/TLS 1.3 encrypted transmission, restricted staff role access, and secure multi-factor authentication, to protect client records against unauthorized access, alteration, or disclosure.
              </p>

              <h3>6. Your Rights and Data Control</h3>
              <p>
                You maintain the legal right to review, update, or request the deletion of your personal contact records from our active correspondence systems at any time. To exercise these rights, please contact our data team at <strong>info@softair.co.in</strong>.
              </p>

              <h3>7. Contact Our Privacy Team</h3>
              <div className="legal-contact-callout">
                <strong>SoftAir Solutions</strong><br />
                Office: Palakkad, Kerala, India<br />
                Direct Desk: +91 70127 51254 / +91 77366 40292<br />
                Official Email: <a href="mailto:info@softair.co.in">info@softair.co.in</a>
              </div>
            </div>
          )}

          {activeDoc === 'terms' && (
            <div className="legal-content-section">
              <div className="legal-highlight-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <strong>Official Agreement:</strong> Review our comprehensive Terms of Service published on our dedicated page.
                </div>
                <a 
                  href="/terms-of-service" 
                  className="btn btn-primary btn-sm no-print" 
                  onClick={() => closeModal()}
                  style={{ textDecoration: 'none', padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                >
                  Open Dedicated Page (/terms-of-service) &rarr;
                </a>
              </div>

              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing this website or entering into an engineering engagement with <strong>SoftAir Solutions</strong>, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
              </p>

              <h3>2. Services Provided</h3>
              <p>
                SoftAir Solutions provides enterprise technology consulting and software engineering across four primary capabilities:
              </p>
              <ul>
                <li><strong>Web Application Development:</strong> High-performance frontend and backend platforms, scalable web portals, and microservices.</li>
                <li><strong>Mobile Application Development:</strong> High-performance Android mobile software and tablet interfaces using Flutter and modern frameworks.</li>
                <li><strong>Custom Application Software:</strong> Tailored enterprise internal tools, workflow automation, and custom ERP/CRM architectures.</li>
                <li><strong>IT Services & Support:</strong> Infrastructure management, database administration, SLA maintenance, and technical helpdesk services.</li>
              </ul>

              <h3>3. Intellectual Property Rights (IP)</h3>
              <p>
                <strong>Client Ownership:</strong> Upon full and final settlement of all agreed milestone payments, the client receives exclusive ownership of all custom source code, application assets, documentation, and tailored architectures authored specifically for their project.
              </p>
              <p>
                <strong>Proprietary Tooling:</strong> SoftAir Solutions retains ownership over open-source libraries, general developer toolkits, and reusable boilerplate frameworks utilized to assemble the solution.
              </p>

              <h3>4. Project Engagements and Payment Terms</h3>
              <ul>
                <li>All project pricing and milestones are agreed upon in writing via formal Statements of Work (SOW) in Indian Rupees (INR) or applicable international currencies.</li>
                <li>Work is executed in agreed sprint milestones with client sign-off before proceeding to subsequent production phases.</li>
              </ul>

              <h3>5. Warranty and Defect Mitigation</h3>
              <p>
                All delivered custom code packages include a standard 30-day post-launch warranty period during which SoftAir Solutions will diagnose and remediate any reproducible bugs or functional defects that deviate from the agreed specifications at no extra charge.
              </p>

              <h3>6. Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by applicable law, SoftAir Solutions shall not be liable for indirect, punitive, or consequential damages resulting from third-party hosting outages, unauthorized security breaches outside our controlled systems, or data loss caused by client-side modifications.
              </p>

              <h3>7. Governing Law & Jurisdiction</h3>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of <strong>Palakkad, Kerala, India</strong>.
              </p>
            </div>
          )}

          {(activeDoc === 'security' || activeDoc === 'iso') && (
            <div className="legal-content-section">
              <div className="legal-highlight-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <strong>Official Security Standards:</strong> Review our comprehensive Security Standards published on our dedicated page.
                </div>
                <a 
                  href="/security-standards" 
                  className="btn btn-primary btn-sm no-print" 
                  onClick={() => closeModal()}
                  style={{ textDecoration: 'none', padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                >
                  Open Dedicated Page (/security-standards) &rarr;
                </a>
              </div>

              <h3>1. Secure Software Development Lifecycle (SSDLC)</h3>
              <p>
                Security is embedded at every phase of our engineering workflow—from architecture design to release:
              </p>
              <ul>
                <li><strong>OWASP Top 10 Defense:</strong> Active prevention of SQL Injection, Cross-Site Scripting (XSS), Broken Object Level Authorization, and Cross-Site Request Forgery (CSRF).</li>
                <li><strong>Dependency Scanning:</strong> Automated software composition analysis (SCA) to identify and patch vulnerable open-source packages before deployment.</li>
                <li><strong>Strict Code Reviews:</strong> Multi-engineer peer reviews required on all production branch pull requests.</li>
              </ul>

              <h3>2. Code Repository & Credential Protection</h3>
              <ul>
                <li>Private, enterprise-managed Git repositories with branch protection rules and enforced signed commits.</li>
                <li>Zero hardcoded API secrets: all sensitive credentials, database URLs, and cryptographic keys are injected exclusively via environment variables and secure secrets managers.</li>
                <li>Mandatory Two-Factor Authentication (2FA / MFA) enforced for all developer workstations and administrative accounts.</li>
              </ul>

              <h3>3. Data Encryption Standards</h3>
              <ul>
                <li><strong>In Transit:</strong> Enforced HTTPS/TLS 1.3 protocol encryption for all web and mobile application API endpoints with strict HSTS policies.</li>
                <li><strong>At Rest:</strong> Sensitive databases, client records, and access tokens are encrypted using industry-standard AES-256 encryption.</li>
              </ul>

              <h3>4. IT Services & Infrastructure Hardening</h3>
              <p>For clients utilizing our managed IT and support services:</p>
              <ul>
                <li>SSH key-based authentication with root login disabled on all application servers.</li>
                <li>Principle of Least Privilege (PoLP) applied to database user permissions and server roles.</li>
                <li>Scheduled automated database backups with encryption and periodic disaster-recovery restoration dry runs.</li>
              </ul>

              <h3>5. Vulnerability Disclosure & Incident Response</h3>
              <p>
                If you believe you have detected a security vulnerability in any application managed by SoftAir Solutions, please report it immediately to our security response desk:
              </p>
              <div className="legal-contact-callout">
                <strong>SoftAir Security Advisory Desk</strong><br />
                Security Inquiries: <a href="mailto:info@softair.co.in">info@softair.co.in</a><br />
                Emergency Hotline: +91 70127 51254<br />
                Response SLA: Initial acknowledgement within 12 hours.
              </div>
            </div>
          )}

          {/* Printable Document Footer (Visible ONLY in print) */}
          <div className="print-only-footer">
            Official Compliance Document · SoftAir Solutions · Palakkad, Kerala, India · info@softair.co.in · softair.co.in
          </div>
        </div>

        {/* Modal Footer (Screen Only) */}
        <div className="legal-modal-footer no-print">
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Have specific legal or compliance questions? Reach out to <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@softair.co.in</a>
          </span>
          <button className="btn btn-primary btn-sm" onClick={closeModal}>
            Accept & Close
          </button>
        </div>
      </div>
    </div>
  );
}
