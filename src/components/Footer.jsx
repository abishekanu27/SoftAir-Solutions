import React from 'react';
import { 
  ArrowUp, 
  MessageSquare, 
  Mail, 
  Phone
} from 'lucide-react';

// Custom Crisp Vector Brand Icons
function XTwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer({ companyName }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner glass-panel">
        <div className="footer-main-row">
          {/* Brand info */}
          <div className="footer-brand-col">
            <div className="brand-group">
              <img 
                src="/softair-logo.png" 
                alt="SoftAir Solutions Pvt Ltd" 
                className="footer-brand-logo" 
              />
            </div>
            <p className="footer-tagline">
              Bespoke custom software, modern web applications, native mobile apps, and enterprise IT services. Opening January 1, 2027.
            </p>

            {/* Direct Contact & More Info */}
            <div className="footer-contact-block">
              <div className="footer-more-info">
                <span className="more-info-label">For More info :</span>
                <a href="tel:+917012751254" className="more-info-phone-link" title="Call +917012751254">
                  <Phone size={15} className="phone-icon-pulse" />
                  <span className="phone-number-text">+917012751254</span>
                </a>
              </div>

              <div className="footer-email-row">
                <span className="more-info-label">Email ID :</span>
                <a href="mailto:info@softair.co.in" className="more-info-email-link" title="Email info@softair.co.in">
                  <Mail size={15} className="mail-icon-pulse" />
                  <span className="email-text">info@softair.co.in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-col">
            <span className="footer-col-title">Connect & Reach Out</span>
            <div className="social-links-row">
              <a href="tel:+917012751254" className="social-btn phone-social-btn" aria-label="Call +917012751254" title="Call +917012751254">
                <Phone size={16} />
              </a>
              <a href="mailto:info@softair.co.in" className="social-btn email-social-btn" aria-label="Email info@softair.co.in" title="Email info@softair.co.in">
                <Mail size={17} />
              </a>
              <a href="#social-twitter" className="social-btn" aria-label="X / Twitter" onClick={(e) => e.preventDefault()}>
                <XTwitterIcon size={16} />
              </a>
              <a href="#social-discord" className="social-btn" aria-label="Discord" onClick={(e) => e.preventDefault()}>
                <MessageSquare size={18} />
              </a>
              <a href="#social-github" className="social-btn" aria-label="GitHub" onClick={(e) => e.preventDefault()}>
                <GithubIcon size={18} />
              </a>
              <a href="#social-linkedin" className="social-btn" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* System Status & Back To Top */}
          <div className="footer-actions-col">
            <div className="server-status-box">
              <span className="pulse-dot" />
              <span>SoftAir Systems: Operational</span>
            </div>

            <button 
              type="button" 
              className="btn-back-to-top" 
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-divider" />

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} SoftAir Solutions Pvt Ltd. All rights reserved. Opening January 1, 2027.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <span>•</span>
            <a href="#sla" onClick={(e) => e.preventDefault()}>Enterprise IT SLAs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
