import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-notice show" role="alert">
      <div 
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'var(--cyan)',
          color: '#060b17',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '14px',
          flexShrink: 0
        }}
      >
        ✓
      </div>
      <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>
        {message}
      </span>
    </div>
  );
}
