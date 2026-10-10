import React, { useEffect } from 'react';

export default function TermsOfService({ onNavigateHome }) {
  useEffect(() => {
    // Set document title for SEO & compliance
    document.title = 'Terms of Service — SoftAir Solutions Pvt Ltd';
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
    { id: 'section-2', title: '2. Our Services' },
    { id: 'section-3', title: '3. Eligibility and User Accounts' },
    { id: 'section-4', title: '4. Acceptable Use' },
    { id: 'section-5', title: '5. Intellectual Property' },
    { id: 'section-6', title: '6. Customer Responsibilities' },
    { id: 'section-7', title: '7. Payments, Fees, and Refunds' },
    { id: 'section-8', title: '8. Third-Party Services' },
    { id: 'section-9', title: '9. Service Availability and Maintenance' },
    { id: 'section-10', title: '10. Confidentiality and Privacy' },
    { id: 'section-11', title: '11. Warranties and Disclaimers' },
    { id: 'section-12', title: '12. Limitation of Liability' },
    { id: 'section-13', title: '13. Suspension and Termination' },
    { id: 'section-14', title: '14. Changes to These Terms' },
    { id: 'section-15', title: '15. Governing Law and Disputes' },
    { id: 'section-16', title: '16. Contact Information' }
  ];

  return (
    <div className="policy-page">
      {/* Sticky Terms Header */}
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
              title="Print Terms of Service document"
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
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Terms of Service</span>
        </nav>

        {/* Hero Banner */}
        <div className="policy-hero">
          <div className="policy-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>Legal Agreement</span>
          </div>

          <h1 className="policy-title">Terms of Service — SoftAir Solutions</h1>

          <div className="policy-meta">
            <div><strong>Last Updated:</strong> 9 October 2026</div>
            <div>&bull;</div>
            <div><strong>Entity:</strong> SoftAir Solutions Pvt Ltd</div>
            <div>&bull;</div>
            <div><strong>Canonical URL:</strong> softair.co.in/terms-of-service</div>
          </div>

          <div className="legal-highlight-box" style={{ margin: 0 }}>
            <strong>Agreement Overview:</strong> These Terms of Service govern your access to and use of our website, software products, applications, SaaS platforms, and related services provided by SoftAir Solutions. By accessing our services, you agree to be bound by these terms.
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
              <div>Questions about our terms?</div>
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
              <p className="policy-text">
                Welcome to SoftAir Solutions ("we," "our," or "us").
              </p>
              <p className="policy-text">
                These Terms of Service govern your access to and use of our website, software products, applications, SaaS platforms, and related services.
              </p>
              <p className="policy-text">
                By accessing our website or using our services, you agree to these Terms of Service. If you do not agree with these terms, please discontinue using the relevant services.
              </p>
            </section>

            {/* 2. Our Services */}
            <section id="section-2" className="policy-section-block">
              <h2 className="policy-section-title">2. Our Services</h2>
              <p className="policy-text">
                SoftAir Solutions provides technology-related products and services, which may include:
              </p>
              <ul className="policy-list">
                <li>Website and web application development.</li>
                <li>Mobile application development.</li>
                <li>Software development and maintenance.</li>
                <li>SaaS products and cloud-based solutions.</li>
                <li>IT support and technical consulting.</li>
                <li>Other technology services offered by our company.</li>
              </ul>
              <p className="policy-text">
                The specific features, deliverables, pricing, and conditions of individual services may be defined in separate proposals, quotations, contracts, or service agreements.
              </p>
            </section>

            {/* 3. Eligibility and User Accounts */}
            <section id="section-3" className="policy-section-block">
              <h2 className="policy-section-title">3. Eligibility and User Accounts</h2>
              <p className="policy-text">
                Certain services may require you to create an account or provide personal information.
              </p>
              <p className="policy-text">You agree to:</p>
              <ul className="policy-list">
                <li>Provide accurate and current information.</li>
                <li>Keep your login credentials confidential.</li>
                <li>Take reasonable steps to prevent unauthorized access to your account.</li>
                <li>Notify us promptly if you suspect unauthorized access.</li>
                <li>Use your account only for lawful purposes.</li>
              </ul>
              <p className="policy-text">
                You are responsible for activities conducted through your account to the extent permitted by applicable law.
              </p>
              <p className="policy-text">
                We reserve the right to suspend or restrict accounts where reasonably necessary to address security risks, suspected misuse, or violations of these terms.
              </p>
            </section>

            {/* 4. Acceptable Use */}
            <section id="section-4" className="policy-section-block">
              <h2 className="policy-section-title">4. Acceptable Use</h2>
              <p className="policy-text">
                You agree not to use our website, software, or services to:
              </p>
              <ul className="policy-list">
                <li>Violate applicable laws or regulations.</li>
                <li>Gain unauthorized access to systems, accounts, or networks.</li>
                <li>Distribute malware, malicious code, or harmful content.</li>
                <li>Interfere with the security, availability, or operation of our services.</li>
                <li>Attempt to circumvent security controls or access restrictions.</li>
                <li>Infringe the intellectual property or privacy rights of others.</li>
                <li>Engage in fraudulent, deceptive, or abusive activities.</li>
              </ul>
              <p className="policy-text">
                We may investigate suspected violations and take appropriate action where permitted by law.
              </p>
            </section>

            {/* 5. Intellectual Property */}
            <section id="section-5" className="policy-section-block">
              <h2 className="policy-section-title">5. Intellectual Property</h2>
              <p className="policy-text">
                Unless otherwise stated, the content on our website, including text, graphics, branding, logos, and original materials, is owned by or licensed to SoftAir Solutions.
              </p>
              <p className="policy-text">
                You may not reproduce, distribute, modify, or commercially exploit our website content without appropriate authorization, except where permitted by applicable law.
              </p>
              <p className="policy-text">
                Ownership of custom-developed software will be determined by the relevant project agreement, quotation, or contract. Unless otherwise agreed in writing, these Terms alone do not transfer ownership of custom software, source code, or other project deliverables.
              </p>
              <p className="policy-text">
                Third-party software and open-source components remain subject to their respective licences.
              </p>
            </section>

            {/* 6. Customer Responsibilities */}
            <section id="section-6" className="policy-section-block">
              <h2 className="policy-section-title">6. Customer Responsibilities</h2>
              <p className="policy-text">When using our services, you agree to:</p>
              <ul className="policy-list">
                <li>Provide accurate project requirements and necessary information.</li>
                <li>Obtain appropriate authorization before sharing data or granting system access.</li>
                <li>Ensure that you have the rights and permissions required to use any materials you provide.</li>
                <li>Use our products and services in accordance with applicable laws.</li>
                <li>Maintain appropriate backups of your own data where relevant.</li>
                <li>Cooperate reasonably with project implementation and technical support.</li>
              </ul>
              <p className="policy-text">
                Delays caused by missing information, approvals, access, or customer-provided materials may affect project schedules.
              </p>
            </section>

            {/* 7. Payments, Fees, and Refunds */}
            <section id="section-7" className="policy-section-block">
              <h2 className="policy-section-title">7. Payments, Fees, and Refunds</h2>
              <p className="policy-text">
                Fees, payment schedules, subscription charges, and applicable taxes will be specified in the relevant quotation, invoice, subscription plan, or service agreement.
              </p>
              <p className="policy-text">Unless otherwise agreed in writing:</p>
              <ul className="policy-list">
                <li>Customers must pay the agreed fees according to the specified payment terms.</li>
                <li>Additional work outside the agreed scope may incur additional charges.</li>
                <li>Subscription services may be subject to recurring fees and renewal conditions.</li>
                <li>Refunds, cancellations, and adjustments will be handled according to the applicable agreement and law.</li>
              </ul>
              <p className="policy-text">
                We will communicate applicable charges and material payment conditions before confirming a paid service.
              </p>
            </section>

            {/* 8. Third-Party Services */}
            <section id="section-8" className="policy-section-block">
              <h2 className="policy-section-title">8. Third-Party Services</h2>
              <p className="policy-text">
                Our services may integrate with third-party platforms, hosting providers, APIs, payment gateways, or software products.
              </p>
              <p className="policy-text">
                Your use of those third-party services may be subject to separate terms and policies.
              </p>
              <p className="policy-text">
                We are not responsible for outages, changes, or failures caused by third-party providers to the extent that such matters are outside our reasonable control. This does not exclude any responsibility that cannot legally be excluded.
              </p>
            </section>

            {/* 9. Service Availability and Maintenance */}
            <section id="section-9" className="policy-section-block">
              <h2 className="policy-section-title">9. Service Availability and Maintenance</h2>
              <p className="policy-text">
                We aim to provide reliable access to our website and services. However, uninterrupted availability cannot be guaranteed.
              </p>
              <p className="policy-text">Services may occasionally be unavailable due to:</p>
              <ul className="policy-list">
                <li>Scheduled maintenance.</li>
                <li>Software updates.</li>
                <li>Infrastructure or network failures.</li>
                <li>Cybersecurity incidents.</li>
                <li>Third-party service interruptions.</li>
                <li>Events beyond our reasonable control.</li>
              </ul>
              <p className="policy-text">
                Where appropriate, we will take reasonable steps to restore affected services.
              </p>
              <p className="policy-text">
                Any service-level commitments will be governed by the applicable service agreement.
              </p>
            </section>

            {/* 10. Confidentiality and Privacy */}
            <section id="section-10" className="policy-section-block">
              <h2 className="policy-section-title">10. Confidentiality and Privacy</h2>
              <p className="policy-text">
                We respect the confidentiality of information shared with us in connection with our services.
              </p>
              <p className="policy-text">
                We will handle personal information in accordance with our Privacy Policy and applicable data protection laws.
              </p>
              <p className="policy-text">
                Customers must ensure that they are authorized to provide any personal, business, or third-party information submitted through our services.
              </p>
              <p className="policy-text">
                Additional confidentiality, security, and data-processing obligations may be established in a separate written agreement.
              </p>
            </section>

            {/* 11. Warranties and Disclaimers */}
            <section id="section-11" className="policy-section-block">
              <h2 className="policy-section-title">11. Warranties and Disclaimers</h2>
              <p className="policy-text">
                We will provide our services with reasonable care and skill, subject to the applicable agreement.
              </p>
              <p className="policy-text">
                Unless expressly stated in writing, the website and general informational content are provided on an "as available" basis.
              </p>
              <p className="policy-text">
                We do not guarantee that every service will be uninterrupted, error-free, or compatible with every device or software environment.
              </p>
              <p className="policy-text">
                Nothing in these terms excludes warranties or consumer rights that cannot lawfully be excluded.
              </p>
            </section>

            {/* 12. Limitation of Liability */}
            <section id="section-12" className="policy-section-block">
              <h2 className="policy-section-title">12. Limitation of Liability</h2>
              <p className="policy-text">
                To the maximum extent permitted by applicable law, SoftAir Solutions will not be liable for indirect or consequential losses arising from the use of our website or services, including loss of profits, business opportunities, or data, where such exclusions are legally permissible.
              </p>
              <p className="policy-text">
                Our liability for a particular project or service may be further defined in the applicable written agreement.
              </p>
              <p className="policy-text">
                Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law.
              </p>
            </section>

            {/* 13. Suspension and Termination */}
            <section id="section-13" className="policy-section-block">
              <h2 className="policy-section-title">13. Suspension and Termination</h2>
              <p className="policy-text">
                We may suspend or terminate access to a service where reasonably necessary because of:
              </p>
              <ul className="policy-list">
                <li>A material violation of these terms.</li>
                <li>Fraudulent or unlawful activity.</li>
                <li>Security threats or unauthorized access.</li>
                <li>Non-payment, where permitted by the applicable agreement and law.</li>
                <li>Discontinuation of a service in accordance with its contractual terms.</li>
              </ul>
              <p className="policy-text">
                Where reasonably practicable, we will provide notice and an opportunity to resolve the issue before suspension or termination.
              </p>
              <p className="policy-text">
                Termination does not remove payment obligations or other rights and responsibilities that accrued before termination.
              </p>
            </section>

            {/* 14. Changes to These Terms */}
            <section id="section-14" className="policy-section-block">
              <h2 className="policy-section-title">14. Changes to These Terms</h2>
              <p className="policy-text">
                We may update these Terms of Service from time to time to reflect changes to our services, business practices, or legal requirements.
              </p>
              <p className="policy-text">
                Updated terms will be published on this page with a revised date.
              </p>
              <p className="policy-text">
                Where required by law or contract, we will provide additional notice or obtain consent before implementing material changes.
              </p>
            </section>

            {/* 15. Governing Law and Disputes */}
            <section id="section-15" className="policy-section-block">
              <h2 className="policy-section-title">15. Governing Law and Disputes</h2>
              <p className="policy-text">
                These Terms of Service are subject to applicable laws.
              </p>
              <p className="policy-text">
                Any dispute will be addressed through good-faith discussions where appropriate. If a dispute cannot be resolved informally, it will be handled by the courts or other dispute-resolution mechanisms that have jurisdiction under applicable law and any valid written agreement.
              </p>
              <p className="policy-text">
                The precise governing law and jurisdiction should be confirmed based on your company's registered location and legal structure.
              </p>
            </section>

            {/* 16. Contact Information */}
            <section id="section-16" className="policy-section-block">
              <h2 className="policy-section-title">16. Contact Information</h2>
              <p className="policy-text">
                If you have questions about these Terms of Service, please contact us:
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
                      Legal / Advisory Desk
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
                Print Terms of Service
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
            <a href="/security-standards" onClick={(e) => { e.preventDefault(); if (window.history) { window.history.pushState({}, '', '/security-standards'); window.dispatchEvent(new Event('popstate')); } else { window.location.href = '/security-standards'; } }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Standards</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
