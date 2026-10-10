import React from 'react';

const testimonials = [
  {
    quote: "SoftAir Solutions engineered our flagship web portal and cross-platform mobile app in under 10 weeks. Our active user engagement grew fourfold and system reliability has been rock-solid.",
    author: "Marcus Reynolds",
    role: "Chief Technology Officer, PayStream",
    initials: "MR"
  },
  {
    quote: "Their team embodies their motto: Imagine, Innovate, Transform. They took time to understand our complex clinical workflows and built a custom patient management application that our staff loves.",
    author: "Dr. Sophia Chen",
    role: "VP of Digital Operations, MediHealth",
    initials: "SC"
  },
  {
    quote: "SoftAir provides both stellar custom development and responsive IT support services. Clear sprint updates, clean documentation, and dependable SLA maintenance. An outstanding technical partner.",
    author: "Devon Kumar",
    role: "Founder & Managing Director, LogiVibe",
    initials: "DK"
  }
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Executive Testimonials</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Engineering Leaders</span>
          </h2>
          <p className="section-subtitle">
            Hear directly from CTOs, founders, and digital executives who partnered with SoftAir Solutions.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div className="test-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="test-quote">"{t.quote}"</p>
              </div>
              <div className="test-author">
                <div className="author-avatar">{t.initials}</div>
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
