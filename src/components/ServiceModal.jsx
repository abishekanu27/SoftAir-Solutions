import React, { useEffect } from 'react';

export default function ServiceModal({ service, onClose, onApplyToContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const deliverables = service.deliverables || service.features || [
    'Requirements analysis and solution architecture roadmap',
    'Custom frontend, API backend, and database schema implementation',
    'Cross-device testing, performance audit, and production deployment',
    'Post-launch SLA support, maintenance, and system monitoring'
  ];

  return (
    <div 
      className="modal-backdrop open" 
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="service-modal-box">
        {/* Fixed Header with Close Button */}
        <div className="service-modal-header">
          <div className="service-modal-header-text">
            <span className="service-modal-badge">Technical Specifications & Deliverables</span>
            <h3 className="service-modal-title">{service.title || service.heading}</h3>
          </div>
          <button 
            className="service-modal-close" 
            onClick={onClose} 
            aria-label="Close Modal"
            title="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Body Container */}
        <div className="service-modal-body">
          <p className="service-modal-desc">
            {service.description || service.tagline}
          </p>

          <div className="service-modal-section-title">
            Core Service Deliverables:
          </div>

          <ul className="service-modal-deliverables-list">
            {deliverables.map((item, idx) => (
              <li key={idx} className="service-modal-deliverable-item">
                <span className="service-modal-check">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2.5 8 6 11.5 13.5 4" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {service.tech && (
            <div className="service-modal-tech-box">
              <span className="service-modal-tech-label">
                Technology Stack:
              </span>
              <span className="service-modal-tech-value">
                {service.tech}
              </span>
            </div>
          )}
        </div>

        {/* Sticky Action Footer */}
        <div className="service-modal-footer">
          <button 
            className="btn btn-primary service-modal-cta-btn" 
            onClick={() => {
              onApplyToContact(service.id);
              onClose();
            }}
          >
            Discuss This Solution With Our Team &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
