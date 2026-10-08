import React from 'react';

export default function PlatformShowcase() {
  return (
    <section className="section" id="platform">
      <div className="container feature-split">
        <div className="feature-split-img-box">
          <img 
            src="/assets/images/enterprise-dashboard.jpg" 
            alt="SoftAir Enterprise Cloud Intelligence Platform" 
            className="feature-split-img" 
          />
        </div>

        <div className="feature-split-content">
          <span className="section-tag">SoftAir Cloud Intelligence</span>
          <h2 className="section-title">
            Centralized Telemetry, <br />
            <span className="gradient-text">Zero Unplanned Downtime</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Our proprietary engineering methodology integrates real-time cloud observability, self-healing infrastructure, and predictive analytics directly into your technical architecture.
          </p>

          <div className="feature-bullets">
            <div className="feature-bullet-item">
              <div className="bullet-icon">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="bullet-content">
                <h4>Real-Time Infrastructure Health & Observability</h4>
                <p>Continuous monitoring of compute, memory, database IOPS, and network latency with sub-second alerting.</p>
              </div>
            </div>

            <div className="feature-bullet-item">
              <div className="bullet-icon">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="bullet-content">
                <h4>Predictive Threat Detection & Zero-Trust IAM</h4>
                <p>Granular least-privilege role separation and automatic isolation of anomalous traffic before impact.</p>
              </div>
            </div>

            <div className="feature-bullet-item">
              <div className="bullet-icon">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="bullet-content">
                <h4>Automated FinOps & Cost Optimization</h4>
                <p>Intelligent instance rightsizing, spot orchestration, and reserved capacity planning reduce cloud bills by 30-45%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
