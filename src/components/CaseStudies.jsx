import React from 'react';

const cases = [
  {
    category: 'FinTech & Payments',
    title: 'High-Frequency Transaction Gateway',
    description: 'Engineered a distributed microservices gateway handling 15,000+ financial transactions per second with PCI-DSS compliance.',
    metric1: '14ms',
    label1: 'Global p99 Latency',
    metric2: '99.999%',
    label2: 'Uptime Verified',
    tech: 'Go, Kafka, AWS EKS, Redis Cluster, Terraform'
  },
  {
    category: 'HealthTech',
    title: 'HIPAA-Compliant Patient Care Platform',
    description: 'Unified electronic medical records, real-time telehealth video, and predictive scheduling for over 500k active patients.',
    metric1: '4.2x',
    label1: 'Faster Consultations',
    metric2: '100%',
    label2: 'Audit Compliance',
    tech: 'Next.js, Node.js, WebRTC, PostgreSQL, Azure'
  },
  {
    category: 'Global Logistics',
    title: 'AI-Powered Fleet Route Optimization',
    description: 'Real-time vehicle telemetry, dynamic rerouting using predictive algorithms, and automated warehouse dispatch sync.',
    metric1: '-28%',
    label1: 'Fuel Cost Reduction',
    metric2: '2.4M',
    label2: 'Daily Telemetry Pings',
    tech: 'Python, PyTorch, Flutter, GCP, IoT Core'
  }
];

export default function CaseStudies() {
  return (
    <section className="section" id="cases" style={{ background: 'var(--bg-surface-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Proven Impact</span>
          <h2 className="section-title">
            Real World <span className="gradient-text">Transformation Stories</span>
          </h2>
          <p className="section-subtitle">
            How SoftAir Solutions accelerates delivery velocity and unlocks exponential scalability for market leaders.
          </p>
        </div>

        <div className="case-studies-grid">
          {cases.map((c, i) => (
            <div key={i} className="case-card">
              <div className="case-card-header">
                <span className="case-category">{c.category}</span>
                <h3 className="case-title">{c.title}</h3>
              </div>
              <div className="case-card-body">
                <p>{c.description}</p>
                <div className="case-impact-metric">
                  <div>
                    <div className="impact-figure">{c.metric1}</div>
                    <div className="impact-desc">{c.label1}</div>
                  </div>
                  <div>
                    <div className="impact-figure">{c.metric2}</div>
                    <div className="impact-desc">{c.label2}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Tech: {c.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
