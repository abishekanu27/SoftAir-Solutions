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

  return (
    <div 
      className="modal-backdrop open" 
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
          &times;
        </button>

        <div style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Technical Specifications & Deliverables
        </div>

        <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>
          {service.title}
        </h3>

        <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          {service.description}
        </p>

        <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
          Core Service Deliverables:
        </div>

        <ul style={{ marginBottom: '1.5rem', listStyle: 'none' }}>
          {service.deliverables.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1.1rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
            Technology Stack:
          </span>
          <span style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
            {service.tech}
          </span>
        </div>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%' }}
          onClick={() => {
            onApplyToContact(service.id);
            onClose();
          }}
        >
          Discuss This Solution With Our Team &rarr;
        </button>
      </div>
    </div>
  );
}
