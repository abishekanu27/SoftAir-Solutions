import React from 'react';

const testimonials = [
  {
    quote: "SoftAir Solutions completely re-architected our legacy cloud backend into a Kubernetes GitOps pipeline within 8 weeks. Our deployment frequency increased tenfold and our cloud expenditure dropped 35%.",
    author: "Marcus Reynolds",
    role: "Chief Technology Officer, PayStream",
    initials: "MR"
  },
  {
    quote: "Their team embodies their motto: Imagine, Innovate, Transform. They didn't just write code; they sat with our product managers and redesigned our AI workflow from the ground up.",
    author: "Dr. Sophia Chen",
    role: "VP of Product, MediHealth AI",
    initials: "SC"
  },
  {
    quote: "Working with SoftAir felt like having our own elite Silicon Valley engineering pod. Transparent sprint reviews, impeccable documentation, and zero technical debt. Truly best-in-class.",
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
