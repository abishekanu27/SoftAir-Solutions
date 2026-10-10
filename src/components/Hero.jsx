import React, { useState, useEffect } from 'react';
import ThreeHeroSphere from './ThreeHeroSphere';
import { 
  Flame,
  Clock,
  Zap,
  Users
} from 'lucide-react';

export default function Hero({ 
  companyName, 
  description, 
  targetDate
}) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown Calculation (Targeting Jan 1, 2027)
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = new Date(targetDate).getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="hero-section" id="hero-section">
      {/* Top Floating Announcement Pill */}
      <div className="announcement-pill-wrap">
        <div className="announcement-pill">
          <span className="pill-badge">
            <Flame size={14} className="pill-flame" /> IMAGINE. INNOVATE. TRANSFORM.
          </span>
          <span className="pill-message">Custom Softwares, Web & Mobile Apps, Enterprise IT Services</span>
        </div>
      </div>

      <div className="hero-grid">
        {/* Left Column: Heading, Subtitle & Subscription */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            We Are <span className="text-gradient">Opening Soon.</span>
          </h1>

          <p className="hero-brand-line">
            Official Identity: <strong className="brand-highlight">SoftAir Solutions Pvt Ltd</strong>
          </p>

          <p className="hero-description">
            {description || 'SoftAir Solutions Pvt Ltd is preparing to launch our full-service software company. Delivering bespoke custom software, modern web applications, native mobile apps (iOS & Android), and comprehensive enterprise IT services.'}
          </p>

          {/* Countdown Display */}
          <div className="countdown-container">
            <div className="countdown-header">
              <Clock size={16} className="clock-icon" />
              <span>Target Launch Countdown</span>
              <span className="launch-badge">Jan 1, 2027</span>
            </div>

            <div className="countdown-cards-grid">
              <div className="countdown-card glass-panel">
                <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="countdown-label">Days</span>
                <div className="card-shimmer" />
              </div>
              <div className="countdown-card glass-panel">
                <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="countdown-label">Hours</span>
                <div className="card-shimmer" />
              </div>
              <div className="countdown-card glass-panel">
                <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="countdown-label">Minutes</span>
                <div className="card-shimmer" />
              </div>
              <div className="countdown-card glass-panel countdown-seconds">
                <span className="countdown-value pulse-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="countdown-label">Seconds</span>
                <div className="card-shimmer" />
              </div>
            </div>

            {/* Launch Readiness Progress Bar */}
            <div className="launch-progress-wrap">
              <div className="launch-progress-info">
                <span className="progress-label">
                  <Zap size={14} className="zap-icon" /> Engineering & Infrastructure Readiness
                </span>
                <span className="progress-percent">94% Ready</span>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: '94%' }}>
                  <div className="progress-shimmer" />
                </div>
              </div>
            </div>
          </div>          
        </div>

        {/* Right Column: Genuine 3D Rotating Hero Sphere & Live Orbit Rings */}
        <div className="hero-visual-content">
          <div className="visual-graphic-container">
            {/* Ambient Back Glow */}
            <div className="hero-graphic-glow" />

            {/* Orbiting Elements */}
            <div className="orbit-ring orbit-ring-outer" />
            <div className="orbit-ring orbit-ring-inner" />

            {/* Futuristic Interactive Rotating 3D Sphere */}
            <div className="sphere-frame sphere-frame-3d">
              <ThreeHeroSphere />
            </div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right glass-panel">
              <span className="badge-pulse-indicator" />
              <div>
                <strong>Web, Mobile & IT</strong>
                <span>All Solutions Imminent</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left glass-panel">
              <Users size={16} className="badge-icon-cyan" />
              <div>
                <strong>Available Jan 1, 2027</strong>
                <span>SoftAir Solutions Pvt Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
