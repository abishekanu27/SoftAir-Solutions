import React from 'react';

export default function PlatformShowcase() {
  return (
    <section className="section" id="platform">
      <div className="container feature-split">
        <div className="feature-split-img-box">
          <img 
            src="/assets/images/enterprise-dashboard.jpg" 
            alt="SoftAir Enterprise Application Platform" 
            className="feature-split-img" 
          />
        </div>

        <div className="feature-split-content">
          <span className="section-tag">Engineering Quality & Delivery</span>
          <h2 className="section-title">
            Engineered for Velocity, <br />
            <span className="gradient-text">Clean Code & High Reliability</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Our application development and IT services methodology combines modern frameworks, responsive UI/UX, and proactive IT management to keep your business operating at peak efficiency.
          </p>

          <div className="feature-bullets">
            <div className="feature-bullet-item">
              <div className="bullet-icon">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="bullet-content">
                <h4>Fluid Web & Mobile User Experiences</h4>
                <p>Pixel-perfect responsive web design and fluid iOS & Android mobile apps engineered for speed, engagement, and conversion.</p>
              </div>
            </div>

            <div className="feature-bullet-item">
              <div className="bullet-icon">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="bullet-content">
                <h4>Custom Enterprise Business Applications</h4>
                <p>Purpose-built software platforms, multi-user role permissions, and scalable database schemas that streamline everyday business operations.</p>
              </div>
            </div>

            <div className="feature-bullet-item">
              <div className="bullet-icon">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="bullet-content">
                <h4>Dedicated IT Services & Maintenance</h4>
                <p>Ongoing software support, database management, server maintenance, and responsive helpdesk SLAs to safeguard your digital investments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
