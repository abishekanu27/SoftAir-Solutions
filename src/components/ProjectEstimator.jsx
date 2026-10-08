import React, { useState } from 'react';

const basePricing = {
  web: { name: 'Enterprise Web Platform', min: 8000, max: 18000, time: 6, team: '3 Fullstack Engineers, 1 PM' },
  mobile: { name: 'Cross-Platform Mobile App', min: 9500, max: 22000, time: 8, team: '3 Mobile Engineers, 1 UI/UX' },
  cloud: { name: 'Cloud Architecture & DevOps', min: 7000, max: 16000, time: 5, team: '2 Cloud Architects, 1 SRE' },
  ai: { name: 'AI & Machine Learning Suite', min: 12000, max: 28000, time: 8, team: '3 AI Engineers, 2 MLOps' },
  suite: { name: 'Full Digital Transformation', min: 25000, max: 60000, time: 14, team: '6 Fullstack, 2 DevOps, 1 QA' }
};

const scaleMultipliers = {
  mvp: { mult: 0.85, timeAdd: 0, label: 'MVP / Launchpad' },
  growth: { mult: 1.35, timeAdd: 3, label: 'Growth & Scaling' },
  enterprise: { mult: 2.1, timeAdd: 6, label: 'Global Enterprise' }
};

const addonList = [
  { id: 'gitops', label: 'Automated CI/CD GitOps Pipeline', cost: 2000, weeks: 1, defaultChecked: true },
  { id: 'ai', label: 'Cognitive AI / Chatbot Assistant', cost: 3500, weeks: 1, defaultChecked: true },
  { id: 'redundancy', label: 'Multi-Region Active Redundancy', cost: 2500, weeks: 1, defaultChecked: false },
  { id: 'soc2', label: 'SOC2 / ISO 27001 Audit Ready', cost: 1800, weeks: 1, defaultChecked: false }
];

export default function ProjectEstimator({ onApplyScope }) {
  const [selectedType, setSelectedType] = useState('web');
  const [selectedScale, setSelectedScale] = useState('growth');
  const [selectedAddons, setSelectedAddons] = useState({
    gitops: true,
    ai: true,
    redundancy: false,
    soc2: false
  });

  const toggleAddon = (id) => {
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const base = basePricing[selectedType];
  const scale = scaleMultipliers[selectedScale];

  let addonCost = 0;
  let addWeeks = 0;
  const activeAddonNames = [];

  addonList.forEach((addon) => {
    if (selectedAddons[addon.id]) {
      addonCost += addon.cost;
      addWeeks += addon.weeks;
      activeAddonNames.push(addon.label);
    }
  });

  const minTotal = Math.round((base.min * scale.mult + addonCost) / 100) * 100;
  const maxTotal = Math.round((base.max * scale.mult + addonCost * 1.3) / 100) * 100;
  const totalWeeksMin = base.time + scale.timeAdd;
  const totalWeeksMax = totalWeeksMin + addWeeks + 2;

  const handleApply = () => {
    onApplyScope({
      serviceId: selectedType,
      serviceName: base.name,
      scaleLabel: scale.label,
      budgetRange: `$${minTotal.toLocaleString()} – $${maxTotal.toLocaleString()}`,
      timeline: `${totalWeeksMin} – ${totalWeeksMax} Weeks`,
      team: base.team,
      addons: activeAddonNames
    });
  };

  return (
    <section className="section" id="estimator" style={{ background: 'var(--bg-surface-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Instant Planner</span>
          <h2 className="section-title">
            Configure Your <span className="gradient-text">Project Scope & Estimate</span>
          </h2>
          <p className="section-subtitle">
            Select your architecture requirements and instantly calculate estimated investment brackets, timeframes, and dedicated team allocation.
          </p>
        </div>

        <div className="estimator-card">
          <div className="estimator-grid">
            <div className="estimator-controls">
              {/* Step 1: Solution Type */}
              <div className="estimator-step-title">
                <span>1</span> Choose Core Solution Type
              </div>
              <div className="choice-group">
                {Object.entries(basePricing).map(([key, item]) => (
                  <button
                    key={key}
                    className={`choice-btn ${selectedType === key ? 'active' : ''}`}
                    onClick={() => setSelectedType(key)}
                  >
                    {item.name.replace('Enterprise ', '').replace('Cross-Platform ', '')}
                  </button>
                ))}
              </div>

              {/* Step 2: Deployment Scale */}
              <div className="estimator-step-title">
                <span>2</span> Operational Scale & Complexity
              </div>
              <div className="choice-group">
                {Object.entries(scaleMultipliers).map(([key, item]) => (
                  <button
                    key={key}
                    className={`choice-btn ${selectedScale === key ? 'active' : ''}`}
                    onClick={() => setSelectedScale(key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Step 3: Add-Ons */}
              <div className="estimator-step-title">
                <span>3</span> Add-On Engineering Modules
              </div>
              <div className="features-checklist">
                {addonList.map((addon) => (
                  <label key={addon.id} className="feature-check-label">
                    <input
                      type="checkbox"
                      checked={!!selectedAddons[addon.id]}
                      onChange={() => toggleAddon(addon.id)}
                    />
                    <span>{addon.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Dynamic Output Card */}
            <div className="estimator-summary-box">
              <span className="est-badge">Live Engineering Calculation</span>
              <div className="est-figure">
                ${minTotal.toLocaleString()} – ${maxTotal.toLocaleString()}
              </div>
              <div className="est-subtext">Estimated Investment Range (Transparent Milestone Pricing)</div>

              <div className="est-specs">
                <div className="spec-col">
                  <strong>{totalWeeksMin} – {totalWeeksMax} Weeks</strong>
                  <span>Time to Production</span>
                </div>
                <div className="spec-col">
                  <strong>{base.team}</strong>
                  <span>Dedicated Pod Squad</span>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleApply}>
                Apply Scope to Consultation &darr;
              </button>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.75rem' }}>
                *Estimates are calculated based on agile sprint velocity. Engagements include code audits & warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
