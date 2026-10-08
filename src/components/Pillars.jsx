import React from 'react';

export default function Pillars() {
  return (
    <section className="section" id="pillars">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Guiding North Star</span>
          <h2 className="section-title">
            The Three Pillars of <span className="gradient-text">SoftAir Solutions</span>
          </h2>
          <p className="section-subtitle">
            Derived from our founding motto, every line of code and architectural decision we make is anchored in three steadfast principles.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-number">01</div>
            <h3 className="pillar-title">IMAGINE</h3>
            <p className="pillar-desc">
              We challenge conventional limitations. Our strategic architects work alongside your stakeholders to discover untapped possibilities, design groundbreaking digital experiences, and envision high-ROI roadmaps.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">02</div>
            <h3 className="pillar-title">INNOVATE</h3>
            <p className="pillar-desc">
              Engineering excellence without compromise. We leverage cutting-edge tech stacks, modern containerization, and cognitive automation to craft resilient, scalable software systems built for the long run.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">03</div>
            <h3 className="pillar-title">TRANSFORM</h3>
            <p className="pillar-desc">
              Measurable business outcomes. We deliver seamless production migrations, empower your teams with continuous delivery tooling, and transform legacy bottlenecks into competitive market advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
