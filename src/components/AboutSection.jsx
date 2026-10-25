import React from 'react';
import aboutImg from '../assets/images/About us.jpg';

export default function AboutSection() {
  const skills = [
    { label: 'Managed IT Services', percent: 85 },
    { label: 'IT Support & Helpdesk', percent: 92 },
    { label: 'We Have an IT Department', percent: 80 },
    { label: 'Software Development', percent: 99 }
  ];

  return (
    <section className="about-showcase-section" id="about-showcase">
      <div className="container">
        <div className="about-showcase-grid">
          {/* Left Column: Text & Skill Progress Bars */}
          <div className="about-showcase-content">
            <span className="about-orange-tag"># ABOUT US</span>
            
            <h2 className="about-showcase-heading">
              We Increasing Business<br />
              Success With <span className="about-underline-text">Technology</span>
            </h2>

            <p className="about-showcase-desc">
              SoftAir Solutions is dedicated to transforming ideas into dependable digital products. From bespoke enterprise software and mobile app engineering to 24/7 dedicated IT infrastructure support, our technology solutions empower businesses to operate smarter, scale faster, and lead with competitive excellence.
            </p>

            {/* Skill / Progress Capability Bars */}
            <div className="about-skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="about-skill-item">
                  <div className="about-skill-header">
                    <span className="about-skill-label">{skill.label}</span>
                    <span className="about-skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="about-skill-track">
                    <div 
                      className="about-skill-fill" 
                      style={{ width: `${skill.percent}%` }}
                      role="progressbar"
                      aria-valuenow={skill.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="about-showcase-visual">
            <div className="about-img-frame">
              <img 
                src={aboutImg} 
                alt="SoftAir Solutions Technology Team" 
                className="about-showcase-img" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
