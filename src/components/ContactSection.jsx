import React, { useState } from 'react';

const SERVICE_LABELS = {
  sfa: 'SoftAir SFA (Direct Sales & Orders)',
  clinical: 'Clinical Software (Clinic Management)',
  kot: 'KOT System (Kitchen Order Ticket & KDS)',
  pos: 'Retail & Restaurant POS (Point of Sale)',
  web: 'Web Application Development',
  mobile: 'Mobile Application Development',
  custom: 'Custom Application Software',
  itservices: 'IT Services & Technical Support'
};

const BUDGET_LABELS = {
  tier1: '₹25,000 – ₹50,000',
  tier2: '₹50,000 – ₹1,00,000',
  tier3: '₹1,00,000 – ₹2,50,000',
  tier4: '₹2,50,000+',
  tier5: 'Custom'
};

export default function ContactSection({ formData, setFormData, onShowToast }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    const serviceName = SERVICE_LABELS[formData.service] || formData.service;
    const budgetName = BUDGET_LABELS[formData.budget] || formData.budget;

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not specified',
      service: serviceName,
      budget: budgetName,
      message: formData.message || 'No additional scope notes provided.',
      _subject: `New Technical Discovery Call: ${formData.name} (${serviceName})`,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      // Direct POST to formsubmit.co which routes straight to info@softair.co.in
      const res = await fetch('https://formsubmit.co/ajax/info@softair.co.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitStatus('success');
        onShowToast('Discovery request transmitted to info@softair.co.in! We will connect within 2 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'web',
          budget: 'tier2',
          message: ''
        });
      } else {
        throw new Error('API response not ok');
      }
    } catch (err) {
      // Fallback: open user's email client directly targeted at info@softair.co.in
      const mailtoSubject = encodeURIComponent(`Discovery Call Request: ${formData.name} - ${serviceName}`);
      const mailtoBody = encodeURIComponent(
        `Dear SoftAir Solutions Team,\n\nI would like to request a technical discovery call:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Phone: ${formData.phone || 'N/A'}\n` +
        `• Service: ${serviceName}\n` +
        `• Estimated Budget: ${budgetName}\n\n` +
        `Project Scope & Requirements:\n${formData.message || 'N/A'}\n\n` +
        `Looking forward to hearing from you!`
      );
      window.location.href = `mailto:info@softair.co.in?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSubmitStatus('fallback');
      onShowToast('Opening email client to dispatch request to info@softair.co.in');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        {/* Left Column: Company Info */}
        <div className="contact-info-card">
                    <h2 className="contact-info-title">
            Let's Build Something <br />
            <span className="gradient-text">Exceptional Together</span>
          </h2>
          <p>
            Whether you need a high-performance web platform, an intuitive mobile app, bespoke custom software, or dependable IT services, our technical team in Kerala is ready to assist you.
          </p>

          <div className="contact-channels">
            <div className="channel-item">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="channel-text">
                <strong>Email Inquiries</strong>
                <a href="mailto:info@softair.co.in" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  info@softair.co.in
                </a>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="channel-text">
                <strong>Direct Advisory Desk</strong>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href="tel:+917012751254" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    +91 70127 51254
                  </a>
                  <span style={{ color: 'var(--text-muted)' }}>/</span>
                  <a href="tel:+917736640292" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    +91 77366 40292
                  </a>
                </div>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="channel-text">
                <strong>Office Location</strong>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Palakkad, Kerala, India</span>
                <a 
                  href="https://maps.app.goo.gl/H1YdfNmCzfuRGkXR7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--primary)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '4px', textDecoration: 'none', fontWeight: 500 }}
                >
                  <span>📍 View Location on Google Maps</span> &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Form */}
        <div className="contact-form-box">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Request a Technical Discovery Call
          </h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.75rem', color: 'var(--text-muted)' }}>
            Complete the details below to receive architectural insights and project estimates directly from our team.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Full Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. Rahul Menon"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="+91 70127 51254"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-service">Service of Interest *</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <optgroup label="Software Products (Demos & Licensing)">
                    <option value="sfa">SoftAir SFA</option>
                    <option value="clinical">Clinical Software</option>
                    <option value="kot">KOT System</option>
                    <option value="pos">Retail & Restaurant POS</option>
                  </optgroup>
                  <optgroup label="Custom Engineering & IT Services">
                    <option value="web">Web Application Development</option>
                    <option value="mobile">Mobile Application Development</option>
                    <option value="custom">Custom Application Software</option>
                    <option value="itservices">IT Services & Technical Support</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-budget">Estimated Budget Range</label>
              <select
                id="contact-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-control"
              >
                <option value="tier5">Custom</option>
                <option value="tier1">₹25,000 – ₹50,000</option>
                <option value="tier2">₹50,000 – ₹1,00,000</option>
                <option value="tier3">₹1,00,000 – ₹2,50,000</option>
                <option value="tier4">₹2,50,000+</option>
                
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Project Scope & Requirements</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Tell us about your project goals, timelines, or specific IT service needs..."
                rows={4}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg" 
              style={{ width: '100%' }} 
              disabled={submitting}
            >
              <span>{submitting ? 'Transmitting Request to info@softair.co.in...' : 'Request a Technical Discovery Call →'}</span>
            </button>
            {submitStatus === 'success' && (
              <div style={{ marginTop: '1rem', padding: '0.85rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: 'var(--radius-md)', color: '#047857', fontSize: '0.875rem' }}>
                ✓ <strong>Request Sent Successfully!</strong> Your discovery request has been forwarded to <code>info@softair.co.in</code>. Our team will contact you within 2 business hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

