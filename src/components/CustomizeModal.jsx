import React from 'react';
import { X, Palette, Type, Calendar, RotateCcw, Check, Sparkles } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Nebula Violet', primary: '#8b5cf6', accent: '#06b6d4' },
  { id: 'cyber', name: 'Cyber Cyan', primary: '#06b6d4', accent: '#10b981' },
  { id: 'emerald', name: 'Emerald Pulse', primary: '#10b981', accent: '#06b6d4' },
  { id: 'sunset', name: 'Sunset Flare', primary: '#f43f5e', accent: '#f59e0b' },
  { id: 'amber', name: 'Amber Gold', primary: '#f59e0b', accent: '#ef4444' }
];

export default function CustomizeModal({
  isOpen,
  onClose,
  companyName,
  setCompanyName,
  description,
  setDescription,
  targetDate,
  setTargetDate,
  currentTheme,
  setCurrentTheme,
  onResetDefaults
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content customize-modal glass-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header-row">
          <div className="teaser-icon-wrapper modal-icon">
            <Sparkles size={22} />
          </div>
          <div>
            <h3 className="modal-title">Customize Launch Page</h3>
            <p className="modal-sub">Live preview your own company name, theme & settings.</p>
          </div>
          <button 
            type="button" 
            className="btn-modal-close" 
            onClick={onClose}
            aria-label="Close customizer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body Controls */}
        <div className="customize-body">
          {/* Company Name Field */}
          <div className="control-group">
            <label className="control-label" htmlFor="custom-company-name">
              <Type size={15} />
              <span>Company Name</span>
            </label>
            <input
              id="custom-company-name"
              type="text"
              className="control-input"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. CloudScale Systems, DevPulse Tech"
            />
            <span className="control-hint">Updates the brand header, hero title, and pass tickets.</span>
          </div>

          {/* Description / Release Message */}
          <div className="control-group">
            <label className="control-label" htmlFor="custom-description">
              <Type size={15} />
              <span>Release Announcement Message</span>
            </label>
            <textarea
              id="custom-description"
              className="control-textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what is releasing soon..."
            />
          </div>

          {/* Target Launch Date */}
          <div className="control-group">
            <label className="control-label" htmlFor="custom-date">
              <Calendar size={15} />
              <span>Target Launch Date</span>
            </label>
            <input
              id="custom-date"
              type="date"
              className="control-input"
              value={targetDate.split('T')[0]}
              onChange={(e) => setTargetDate(`${e.target.value}T00:00:00`)}
            />
            <span className="control-hint">The countdown timer automatically recalculates.</span>
          </div>

          {/* Color Themes */}
          <div className="control-group">
            <label className="control-label">
              <Palette size={15} />
              <span>Color Accent Theme</span>
            </label>
            <div className="theme-options-grid">
              {themes.map((th) => (
                <button
                  key={th.id}
                  type="button"
                  className={`theme-option-card ${currentTheme === th.id ? 'active' : ''}`}
                  onClick={() => setCurrentTheme(th.id)}
                >
                  <div className="theme-color-swatches">
                    <span className="swatch" style={{ background: th.primary }} />
                    <span className="swatch" style={{ background: th.accent }} />
                  </div>
                  <span className="theme-name">{th.name}</span>
                  {currentTheme === th.id && <Check size={14} className="theme-check" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer-row customize-footer">
          <button 
            type="button" 
            className="btn-reset-defaults"
            onClick={onResetDefaults}
          >
            <RotateCcw size={15} />
            <span>Reset to Defaults</span>
          </button>

          <button 
            type="button" 
            className="btn-save-preview"
            onClick={onClose}
          >
            Apply & View
          </button>
        </div>
      </div>
    </div>
  );
}
