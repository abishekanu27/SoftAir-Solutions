import React from 'react';
import storyBannerImg from '../assets/images/story-team-collab.jpg';

// Custom Vector Icons matching reference sample: Target/Bullseye, Eye/Vision, Diamond/Values
function TargetMissionIcon() {
  return (
    <svg viewBox="0 0 64 64" width="58" height="58" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Concentric black target rings */}
      <circle cx="28" cy="36" r="19" stroke="#111827" strokeWidth="2.75" />
      <circle cx="28" cy="36" r="13" stroke="#111827" strokeWidth="2.75" />
      <circle cx="28" cy="36" r="7" stroke="#111827" strokeWidth="2.75" />
      {/* Solid orange center bullseye */}
      <circle cx="28" cy="36" r="4.2" fill="#ff5e36" />
      
      {/* Orange Arrow shaft entering center from top-right */}
      <line x1="50" y1="14" x2="31" y2="33" stroke="#ff5e36" strokeWidth="2.75" strokeLinecap="round" />
      
      {/* Dart Fletching flight */}
      <polygon 
        points="45,11 50,6 57,13 54,16 57,19 52,24 45,17" 
        stroke="#ff5e36" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
        strokeLinecap="round" 
        fill="none" 
      />
    </svg>
  );
}

function EyeVisionIcon() {
  return (
    <svg viewBox="0 0 64 64" width="58" height="58" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Eye outer contour */}
      <path 
        d="M12,34 C19,22 45,22 52,34" 
        stroke="#111827" 
        strokeWidth="2.75" 
        strokeLinecap="round" 
      />
      <path 
        d="M12,34 C19,46 45,46 52,34" 
        stroke="#111827" 
        strokeWidth="2.75" 
        strokeLinecap="round" 
      />
      
      {/* Black Iris circle */}
      <circle cx="32" cy="34" r="8.5" stroke="#111827" strokeWidth="2.75" />
      
      {/* Solid Orange Pupil */}
      <circle cx="32" cy="34" r="5" fill="#ff5e36" />
      
      {/* 5 Radiating Black Rays */}
      <line x1="32" y1="9" x2="32" y2="15" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
      <line x1="16" y1="16" x2="20" y2="21" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
      <line x1="48" y1="16" x2="44" y2="21" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
      <line x1="16" y1="52" x2="20" y2="47" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
      <line x1="48" y1="52" x2="44" y2="47" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
    </svg>
  );
}

function DiamondValuesIcon() {
  return (
    <svg viewBox="0 0 64 64" width="58" height="58" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diamond Body outline */}
      <path 
        d="M20,25 L44,25 L53,34 L32,54 L11,34 Z" 
        stroke="#111827" 
        strokeWidth="2.75" 
        strokeLinejoin="round" 
        strokeLinecap="round" 
      />
      {/* Horizontal girdle */}
      <line x1="11" y1="34" x2="53" y2="34" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
      {/* Upper crown diagonals */}
      <line x1="20" y1="25" x2="25" y2="34" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
      <line x1="44" y1="25" x2="39" y2="34" stroke="#111827" strokeWidth="2.75" strokeLinecap="round" />
      {/* Lower pavilion diagonals */}
      <line x1="25" y1="34" x2="32" y2="54" stroke="#111827" strokeWidth="2.75" strokeLinejoin="round" />
      <line x1="39" y1="34" x2="32" y2="54" stroke="#111827" strokeWidth="2.75" strokeLinejoin="round" />
      
      {/* 3 Orange Rays radiating upward */}
      <line x1="32" y1="9" x2="32" y2="16" stroke="#ff5e36" strokeWidth="2.75" strokeLinecap="round" />
      <line x1="19" y1="11" x2="23" y2="17" stroke="#ff5e36" strokeWidth="2.75" strokeLinecap="round" />
      <line x1="45" y1="11" x2="41" y2="17" stroke="#ff5e36" strokeWidth="2.75" strokeLinecap="round" />
    </svg>
  );
}

export default function OurStorySection({ onNavigateContact }) {
  const handleAction = (target) => {
    if (target === 'values') {
      const el = document.querySelector('.about-values-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="our-story-showcase-section" id="our-story">
      {/* 1. Top Hero Banner with Curved Wavy Bottom */}
      <div className="story-hero-banner">
        <div className="story-hero-media">
          <img 
            src={storyBannerImg} 
            alt="SoftAir Solutions Technology Team Collaboration" 
            className="story-hero-bg-img"
          />
          <div className="story-hero-overlay"></div>
        </div>

        {/* Hero Title & Accent Dot */}
        <div className="story-hero-text-wrap">
          <h1 className="story-hero-heading">Our Story</h1>
          <span className="story-hero-accent-dot" aria-hidden="true"></span>
        </div>

        {/* Organic Wave Cutout at Bottom */}
        <div className="story-hero-wave-divider">
          <svg 
            viewBox="0 0 1440 110" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,35 C240,85 480,95 720,55 C960,15 1200,25 1440,65 L1440,110 L0,110 Z" 
              fill="var(--bg-surface, #ffffff)"
            ></path>
          </svg>
        </div>
      </div>

      {/* 2. Headline & Subtitle Area */}
      <div className="story-center-intro">
        <h2 className="story-headline-title">
          A Vision to Build.<br />
          A Passion to Innovate.
        </h2>

        <p className="story-headline-desc">
          SoftAir Solutions was founded with a commitment to turn bold ideas into high-impact digital solutions. 
          We engineer dependable software, intuitive web and mobile applications, and resilient IT architectures 
          that empower modern businesses to simplify workflows and lead with confidence.
        </p>

        {/* Decorative Indicator: ○ + ● matching reference */}
        <div className="story-decorative-indicator" aria-hidden="true">
          <span className="story-ind-circle"></span>
          <span className="story-ind-plus">+</span>
          <span className="story-ind-dot"></span>
        </div>
      </div>

      {/* 3. Three Floating Pillar Cards Grid (Mission, Vision, Values & Team) */}
      <div className="story-pillars-grid">
        {/* Card 1: Mission (Target & Arrow Icon) */}
        <div className="story-pillar-card">
          <div className="story-card-icon-stage">
            <div className="story-icon-wrapper" title="Our Mission">
              <TargetMissionIcon />
            </div>
          </div>

          <div className="story-card-body">
            <h3 className="story-card-title">Mission</h3>
            <p className="story-card-copy">
              To empower modern businesses through dependable digital engineering: crafting resilient software platforms, responsive web and mobile solutions, and practical IT architectures that solve real operational challenges and accelerate enterprise growth.
            </p>
            <button 
              type="button" 
              className="story-pill-action story-pill-mint"
              onClick={() => handleAction('contact')}
              aria-label="Learn about SoftAir Mission"
            >
              Our Mission
            </button>
          </div>
        </div>

        {/* Card 2: Vision (Eye with Rays Icon) */}
        <div className="story-pillar-card">
          <div className="story-card-icon-stage">
            <div className="story-icon-wrapper" title="Our Vision">
              <EyeVisionIcon />
            </div>
          </div>

          <div className="story-card-body">
            <h3 className="story-card-title">Vision</h3>
            <p className="story-card-copy">
              To become a trusted global technology partner by creating intuitive, forward-thinking digital ecosystems that simplify complex workflows, inspire ongoing progress, and enable long-term sustainable business growth.
            </p>
            <button 
              type="button" 
              className="story-pill-action story-pill-dark"
              onClick={() => handleAction('contact')}
              aria-label="Explore SoftAir Vision"
            >
              Our Vision
            </button>
          </div>
        </div>

        {/* Card 3: Values (Diamond with Rays Icon) */}
        <div className="story-pillar-card">
          <div className="story-card-icon-stage">
            <div className="story-icon-wrapper" title="Our Core Values & Team">
              <DiamondValuesIcon />
            </div>
          </div>

          <div className="story-card-body">
            <h3 className="story-card-title">Values</h3>
            <p className="story-card-copy">
              Guided by uncompromising integrity, quality craftsmanship, customer-centric problem solving, and a dedicated team culture in Palakkad, Kerala. We value transparency and engineer technology that delivers real value.
            </p>
            <button 
              type="button" 
              className="story-pill-action story-pill-mint"
              onClick={() => handleAction('values')}
              aria-label="Meet SoftAir Team and Values"
            >
              Our Values
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
