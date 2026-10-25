import React, { useRef, useState, useEffect } from 'react';
import heroVideo from '../assets/Videos/vidssave.com Kerry byler lee 720P.mp4';

export default function HeroVideoBanner() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Attempt autoplay when mounted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted without user interaction
      });
    }
  }, []);
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="hero-video-section" id="main" aria-label="Hero Video Banner">
      <div className="hero-video-container">
        {/* Ambient Video Background */}
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            className={`hero-video-element ${videoLoaded ? 'loaded' : ''}`}
            src={heroVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/assets/Videos/vidssave.com%20Kerry%20byler%20lee%20720P.mp4" type="video/mp4" />
            Your browser does not support HTML5 video playback.
          </video>

          {/* Cinematic Scrim & Gradient Overlays for High-Contrast Text Legibility */}
          <div className="hero-video-overlay-gradient"></div>
          <div className="hero-video-mesh-glow"></div>
          <div className="hero-video-pattern-grid"></div>
        </div>

        {/* Video Interactive Controls Floating Panel */}
        <div className="hero-video-controls" aria-label="Video playback controls">
                    <div className="video-action-btns">
                        <button
              type="button"
              className="video-ctrl-btn"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              title={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="hero-video-content">

          <h1 className="hero-video-title">
            We Provide <span className="hero-video-gradient-text">IT and Business Solutions</span>
          </h1>

          <p className="hero-video-tagline">
            Empowering modern enterprises with custom software engineering, scalable web &amp; mobile platforms, and resilient 24/7 IT services designed for operational growth.
          </p>

          <div className="hero-video-actions">
            <a href="#contact" className="btn btn-primary btn-lg hero-video-btn-primary">
              <span>Get Consultation</span>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#products" className="btn btn-secondary btn-lg hero-video-btn-glass">
              <span>Our Products</span>
            </a>
            <a href="#services" className="btn btn-secondary btn-lg hero-video-btn-glass">
              <span>Explore Services</span>
            </a>
          </div>

          {/* Quick Value Highlights Chips */}
          <div className="hero-video-highlights">
            <div className="highlight-chip">
              <span className="highlight-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>Custom Software</span>
            </div>
            <div className="highlight-chip">
              <span className="highlight-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>Web &amp; Android Apps</span>
            </div>
            <div className="highlight-chip">
              <span className="highlight-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>Managed IT Support</span>
            </div>
            <div className="highlight-chip">
              <span className="highlight-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>Enterprise Reliability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
