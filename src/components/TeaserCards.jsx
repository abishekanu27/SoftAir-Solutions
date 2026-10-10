import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Laptop, 
  Sparkles, 
  ChevronRight, 
  Check, 
  X
} from 'lucide-react';

const upcomingServices = [
  {
    id: 'custom-software',
    icon: Code2,
    category: 'Custom Softwares',
    title: 'Bespoke Enterprise Software Solutions',
    summary: 'Tailor-made software systems, distributed architectures, robust backend databases, and secure enterprise APIs.',
    tag: 'Release Ready',
    statusPercent: 96,
    details: 'We engineer tailor-made software solutions designed precisely around your organization workflows. From bespoke ERP/CRM tools to high-throughput backend services, our codebases are built for performance, modularity, and easy scalability.',
    specs: [
      'Modular clean-code architecture engineered for long-term scalability',
      'High-performance API design & integrations (REST, GraphQL)',
      'Enterprise database modeling & optimization (PostgreSQL, MongoDB, Redis)',
      'Bespoke internal business dashboards & automation tools'
    ]
  },
  {
    id: 'web-apps',
    icon: Globe,
    category: 'Web Applications',
    title: 'Modern Full-Stack Web Applications',
    summary: 'Next-gen responsive web apps, interactive SaaS platforms, dynamic client portals, and progressive web apps.',
    tag: 'Testing & QA',
    statusPercent: 94,
    details: 'We craft high-performance, visually stunning web applications that engage users and drive business results. Engineered with modern component-driven architectures, fluid animations, and robust full-stack backends.',
    specs: [
      'Lightning-fast modern reactive web interfaces with seamless UI/UX',
      'Fully responsive layouts optimized across mobile, tablet, and desktop',
      'Progressive Web App (PWA) offline support & instant loading',
      'Secure authentication, role-based permissions, and payment integrations'
    ]
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    category: 'Mobile Applications',
    title: 'Native & Cross-Platform Mobile Apps',
    summary: 'High-fidelity iOS and Android applications delivering fluid 60fps performance, intuitive gestures, and offline sync.',
    tag: 'Ready for Launch',
    statusPercent: 98,
    details: 'Deliver your services straight into the hands of your users. We develop beautiful mobile applications with buttery-smooth interactions, camera/biometric integrations, push notifications, and reliable offline capabilities.',
    specs: [
      'Native iOS (Swift) & Android (Kotlin) application development',
      'Cross-platform mobile apps built with React Native & Flutter',
      'Hardware integrations: Biometric FaceID/TouchID, GPS, Push Notifications',
      'Seamless Apple App Store & Google Play Store release management'
    ]
  },
  {
    id: 'it-services',
    icon: Laptop,
    category: 'IT Services',
    title: 'Enterprise IT Services & Tech Support',
    summary: 'End-to-end technical consulting, legacy systems modernization, systems integration, and ongoing IT support.',
    tag: 'Verified & Ready',
    statusPercent: 100,
    details: 'Keep your technology running without interruption. We provide hands-on IT services including legacy platform upgrades, system audits, third-party software integration, and dedicated maintenance agreements.',
    specs: [
      'Strategic IT consulting, system architecture audits & roadmapping',
      'Legacy software modernization and database migration',
      'Enterprise tool and API integration (CRM, ERP, billing systems)',
      'Ongoing maintenance, performance monitoring, and tech support SLAs'
    ]
  }
];

export default function TeaserCards({ companyName }) {
  const [activeModalFeature, setActiveModalFeature] = useState(null);

  return (
    <section className="teaser-section" id="features-preview">
      <div className="section-header-centered">
        <div className="section-pill">
          <Sparkles size={14} className="pill-icon" />
          <span>SOLUTIONS SNEAK PEEK</span>
        </div>
        <h2 className="section-title">
          Custom Software, Web, Mobile & <span className="text-gradient">IT Services</span>
        </h2>
        <p className="section-subtitle">
          Everything is being prepared for our grand opening on January 1st, 2027. Explore our upcoming core engineering capabilities and digital services.
        </p>
      </div>

      <div className="teaser-grid">
        {upcomingServices.map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.id} 
              className="teaser-card glass-panel"
              onClick={() => setActiveModalFeature(item)}
            >
              <div className="teaser-card-header">
                <div className="teaser-icon-wrapper">
                  <Icon size={22} className="teaser-icon" />
                </div>
                <span className="teaser-badge-tag">{item.tag}</span>
              </div>

              <div className="teaser-card-content">
                <span className="teaser-category">{item.category}</span>
                <h3 className="teaser-card-title">{item.title}</h3>
                <p className="teaser-card-summary">{item.summary}</p>
              </div>

              <div className="teaser-card-footer">
                <div className="progress-mini">
                  <div className="progress-mini-labels">
                    <span>Readiness</span>
                    <span>{item.statusPercent}%</span>
                  </div>
                  <div className="progress-mini-track">
                    <div 
                      className="progress-mini-fill" 
                      style={{ width: `${item.statusPercent}%` }} 
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn-card-inspect"
                  aria-label={`View specs for ${item.title}`}
                >
                  <span>Specs</span>
                  <ChevronRight size={14} />
                </button>
              </div>

              <div className="card-hover-border" />
            </div>
          );
        })}
      </div>

      {/* Feature Details Modal */}
      {activeModalFeature && (
        <div className="modal-backdrop" onClick={() => setActiveModalFeature(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="btn-modal-close" 
              onClick={() => setActiveModalFeature(null)}
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            <div className="modal-header-row">
              <div className="teaser-icon-wrapper modal-icon">
                {React.createElement(activeModalFeature.icon, { size: 26 })}
              </div>
              <div>
                <span className="teaser-category">{activeModalFeature.category}</span>
                <h3 className="modal-title">{activeModalFeature.title}</h3>
              </div>
            </div>

            <p className="modal-desc">{activeModalFeature.details}</p>

            <div className="modal-specs-list">
              <h4 className="specs-heading">Key Capabilities & Stack:</h4>
              {activeModalFeature.specs.map((spec, idx) => (
                <div key={idx} className="spec-item">
                  <Check size={16} className="spec-check-icon" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="modal-footer-row">
              <div className="modal-release-status">
                <span className="status-label">Launch Readiness:</span>
                <strong className="status-value">{activeModalFeature.statusPercent}% Completed</strong>
              </div>
              <button 
                type="button" 
                className="btn-modal-done"
                onClick={() => setActiveModalFeature(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
