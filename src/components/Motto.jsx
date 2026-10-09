import React from 'react';

export default function Motto() {
  return (
    <section className="section" id="motto">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Motto</span>
          <h2 className="section-title">
            The Three Pillars of <span className="gradient-text">SoftAir</span>
          </h2>
          <p className="section-subtitle">
            Derived from our founding motto — <strong>IMAGINE. INNOVATE. TRANSFORM.</strong> — every line of code, software application, and architectural decision we make is anchored in three steadfast principles.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-number">01</div>
            <h3 className="pillar-title">IMAGINE</h3>
            <p className="pillar-desc">
              We challenge conventional limitations. Our strategic architects in Palakkad work alongside your stakeholders to discover untapped possibilities, design groundbreaking digital experiences, and envision high-ROI roadmaps.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">02</div>
            <h3 className="pillar-title">INNOVATE</h3>
            <p className="pillar-desc">
              Engineering excellence without compromise. We leverage modern web frameworks, Android mobile SDKs, and clean software architecture to craft resilient, scalable software systems built for the long run.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">03</div>
            <h3 className="pillar-title">TRANSFORM</h3>
            <p className="pillar-desc">
              Measurable business outcomes. We deliver seamless production deployments, empower your sales and operational teams, and transform legacy bottlenecks into competitive market advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
