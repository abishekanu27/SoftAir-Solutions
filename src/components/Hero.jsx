import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [stats, setStats] = useState({
    uptime: 98.0,
    projects: 150,
    retention: 90
  });

  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        uptime: Math.min(99.98, Number((98.0 + progress * 1.98).toFixed(2))),
        projects: Math.min(240, Math.floor(150 + progress * 90)),
        retention: Math.min(98, Math.floor(90 + progress * 8))
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-text-content">
          <div className="hero-pill">
            <span className="pulse-dot"></span>
            <span>IMAGINE &bull; INNOVATE &bull; TRANSFORM</span>
          </div>
          
          <h1 className="hero-title">
            Engineering Intelligent <br />
            <span className="gradient-text">Software & Cloud Ecosystems</span> <br />
            for Enterprise Velocity
          </h1>

          <p className="hero-desc">
            SoftAir Solutions Pvt Ltd delivers high-performance custom software, elastic multi-cloud architectures, and cognitive AI automation that propel enterprises ahead of the curve.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">Launch Your Project</a>
            <a href="#services" className="btn btn-secondary btn-lg">Explore Capabilities</a>
          </div>

          {/* Live KPI Metric Badges */}
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-val">{stats.uptime.toFixed(2)}%</span>
              <span className="metric-label">High-Availability SLA</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">{stats.projects}+</span>
              <span className="metric-label">Systems Deployed</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">{stats.retention}%</span>
              <span className="metric-label">Client Retention</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">24/7/365</span>
              <span className="metric-label">Cloud Operations</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="hero-visual-stage">
          <div className="hero-visual-card">
            <div className="hero-card-header">
              <div className="window-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="status-badge">
                <span className="pulse-dot" style={{ background: '#27c93f', boxShadow: '0 0 8px #27c93f' }}></span>
                <span>SoftAir Cloud Mesh &bull; Active</span>
              </div>
            </div>
            <div className="hero-img-wrap">
              <img 
                src="/assets/images/hero-tech.jpg" 
                alt="SoftAir Intelligent Cloud Network Infrastructure" 
                className="hero-img" 
              />
            </div>
          </div>

          {/* Floating Feature Pills */}
          <div className="floating-pill floating-pill-1">
            <div className="pill-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div className="pill-text">
              <strong>Microservices Grid</strong>
              <span>Zero Latency &bull; Multi-Cloud</span>
            </div>
          </div>

          <div className="floating-pill floating-pill-2">
            <div className="pill-icon" style={{ background: 'linear-gradient(135deg, #00d2ff, #0066ff)' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="pill-text">
              <strong>Cognitive AI Engine</strong>
              <span>Autonomous Telemetry & Healing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
