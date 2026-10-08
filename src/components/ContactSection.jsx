import React, { useState } from 'react';

export default function ContactSection({ formData, setFormData, onShowToast }) {
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      onShowToast('Thank you! Your discovery request has been received. A principal architect will contact you within 2 business hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'cloud',
        budget: 'tier2',
        message: ''
      });
    }, 1200);
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        {/* Left Column: Company Info */}
        <div className="contact-info-card">
          <span className="section-tag">Connect With Us</span>
          <h2 className="contact-info-title">
            Let's Build Something <br />
            <span className="gradient-text">Exceptional Together</span>
          </h2>
          <p>
            Whether you are modernizing legacy infrastructure, building an AI-powered SaaS, or expanding to multi-cloud, our principal architects are ready to guide you.
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
                <a href="mailto:contact@softairsolutions.com">contact@softairsolutions.com</a>
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
                <span>+91 (0) 80 4123 4567 / Global: +1 (800) SOFITAIR</span>
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
                <strong>SoftAir Solutions Pvt Ltd Headquarters</strong>
                <span>Technology Innovation Park, Global Tech Hub</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(0, 210, 255, 0.08)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
            <strong style={{ color: 'var(--cyan)', fontSize: '0.9rem', display: 'block', marginBottom: '0.25rem' }}>
              ⚡ Rapid Response Guarantee
            </strong>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              All inbound client inquiries receive a dedicated technical architect response within 2 business hours.
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Form */}
        <div className="contact-form-box">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Request a Technical Discovery Call
          </h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            Complete the details below to receive architectural insights and estimate validation.
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
                  placeholder="e.g. Alex Henderson"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Business Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="alex@company.com"
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
                  placeholder="+1 (555) 000-0000"
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
                  <option value="cloud">Cloud Architecture & DevOps</option>
                  <option value="software">Enterprise Custom Software</option>
                  <option value="ai">AI & Intelligent Automation</option>
                  <option value="mobile">Mobile & Cross-Platform Apps</option>
                  <option value="data">Data Engineering & Analytics</option>
                  <option value="security">Cybersecurity & Compliance</option>
                  <option value="suite">Full Enterprise Transformation</option>
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
                <option value="tier1">$10k – $25k</option>
                <option value="tier2">$25k – $50k</option>
                <option value="tier3">$50k – $100k</option>
                <option value="tier4">$100k+</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Project Scope & Architectural Details</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Tell us about your business goals, target timelines, and current tech stack..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={submitting}>
              <span>{submitting ? 'Transmitting Request...' : 'Submit Discovery Request →'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
