import React from 'react';
import { Terminal, BellRing } from 'lucide-react';

export default function Navbar({ companyName, onOpenCustomize, onScrollToSignup }) {
  return (
    <header className="navbar-container">
      <nav className="navbar-inner glass-panel">
        {/* Brand Logo & Name */}
        <div className="brand-group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/softair-logo.png" 
            alt="SoftAir Solutions Pvt Ltd" 
            className="navbar-brand-logo" 
          />
        </div>

        {/* Status Pill */}
        <div className="status-pill-wrap">
          <div className="status-indicator">
            <span className="pulse-dot" />
            <span className="status-text">Opening Soon • Jan 1, 2027</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn-vip-action" 
            onClick={onScrollToSignup}
            id="nav-notify-btn"
          >
            <BellRing size={16} />
            <span>Notify Me</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
