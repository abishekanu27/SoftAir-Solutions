import React from 'react';
import { CheckCircle2, Clock, Rocket, Sparkles } from 'lucide-react';

const roadmapPhases = [
  {
    phase: 'Phase 01',
    title: 'Core Architecture & App Frameworks',
    status: 'In Progress',
    date: 'Q2 2026',
    items: ['Modern web full-stack engineering standards', 'Android mobile boilerplate setup', 'High-throughput database & API foundation'],
    isCurrent: true
  },
  {
    phase: 'Phase 02',
    title: 'Web & Mobile Application Pilots',
    status: 'In Progress',
    date: 'Current Phase',
    items: ['Custom enterprise software pilot build', 'Cross-platform mobile app performance tuning', 'Enterprise IT service desk setup'],
    isCurrent: true
  },
  {
    phase: 'Phase 03',
    title: 'Client Scoping & Project Consultations',
    status: 'Planning',
    date: 'Q4 2026',
    items: ['VIP waitlist priority consultations', 'Custom project scoping & technology blueprints', 'Dedicated IT maintenance SLA calibration'],
    isTarget: true
  },
  {
    phase: 'Phase 04',
    title: 'Public Opening & Worldwide Services',
    status: 'Opening Jan 1, 2027',
    date: 'Jan 1, 2027',
    items: ['SoftAir Solutions official public portal launch', 'Client onboarding for custom software & web/mobile projects', 'Worldwide custom software, web, mobile & IT services rollout'],
    isTarget: true
  }
];

export default function Roadmap({ companyName }) {
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="section-header-centered">
        <div className="section-pill">
          <Rocket size={14} className="pill-icon" />
          <span>LAUNCH SEQUENCE</span>
        </div>
        <h2 className="section-title">
          The Journey to <span className="text-gradient">Launch Day</span>
        </h2>
        <p className="section-subtitle">
          Transparent development milestones as our software company prepares for our January 1st, 2027 opening.
        </p>
      </div>

      <div className="roadmap-timeline">
        <div className="timeline-line-track" />

        <div className="roadmap-cards-grid">
          {roadmapPhases.map((phase, idx) => (
            <div 
              key={idx} 
              className={`roadmap-card glass-panel ${phase.isCurrent ? 'phase-current' : ''} ${phase.isDone ? 'phase-done' : ''} ${phase.isTarget ? 'phase-target' : ''}`}
            >
              <div className="roadmap-top-row">
                <span className="phase-indicator-pill">{phase.phase}</span>
                <span className="phase-date">{phase.date}</span>
              </div>

              <h3 className="phase-title">{phase.title}</h3>

              <div className="phase-status-badge">
                {phase.isDone && <CheckCircle2 size={15} className="status-done-icon" />}
                {phase.isCurrent && <span className="pulse-dot" />}
                {phase.isTarget && <Sparkles size={15} className="status-target-icon" />}
                <span className="phase-status-text">{phase.status}</span>
              </div>

              <ul className="phase-checklist">
                {phase.items.map((item, i) => (
                  <li key={i}>
                    <span className="bullet-point">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {phase.isCurrent && <div className="current-highlight-glow" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
