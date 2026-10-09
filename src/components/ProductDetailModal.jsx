import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SFA_COMPARISON_MATRIX } from '../services/productsApi';

export default function ProductDetailModal({ product, onClose, onSelectDemo }) {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'matrix'
  const [mobileTab, setMobileTab] = useState(0); // 0, 1, 2 for versions

  const hasVersions = Array.isArray(product?.versions) && product.versions.length > 0;

  // Always guarantee matrix data for products with editions
  const matrixData = (Array.isArray(product?.comparisonMatrix) && product.comparisonMatrix.length > 0)
    ? product.comparisonMatrix
    : SFA_COMPARISON_MATRIX;

  // Set default mobile tab: pick recommended version if available
  useEffect(() => {
    if (hasVersions) {
      const recIdx = product.versions.findIndex((v) => v.recommended);
      setMobileTab(recIdx >= 0 ? recIdx : 0);
    }
  }, [product, hasVersions]);

  // Lock body scroll, hide Navbar, and listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleDemoClick = (ver = null) => {
    onSelectDemo(product, ver);
    onClose();
  };

  const getVersion = (id, fallbackIndex = 0) => {
    if (!Array.isArray(product?.versions)) return null;
    return product.versions.find((v) => v.id === id) || product.versions[fallbackIndex] || null;
  };

  const renderCellContent = (val, isFlagship = false) => {
    if (!val || val === '—' || val === '-') {
      return <span className="val-na">—</span>;
    }
    const str = String(val);
    if (str.startsWith('✓') || str.toLowerCase() === 'yes' || str.toLowerCase() === 'included') {
      return <span className={`val-check ${isFlagship ? 'flagship' : ''}`}>{str}</span>;
    }
    return <span className={`val-text ${isFlagship ? 'flagship' : ''}`}>{str}</span>;
  };

  return createPortal(
    <div
      className="modal-backdrop product-modal-backdrop open"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className="product-modal-container">
        {/* Sticky Modal Header */}
        <div className="product-modal-header">
          <div className="product-modal-header-info">
            <div className="product-modal-meta-row">
              <span className="product-category-badge">{product.category}</span>
              <span className="product-flag-badge">{product.badge || 'Enterprise'}</span>
              {product.platforms && (
                <div className="product-modal-header-platforms">
                  {product.platforms.map((p, idx) => (
                    <span key={idx} className="platform-pill">{p}</span>
                  ))}
                </div>
              )}
            </div>

            <h3 id="product-modal-title" className="product-modal-title">
              {product.name}
              {hasVersions && <span className="product-modal-subtitle-tag"> — Edition Breakdown</span>}
            </h3>

            <p className="product-modal-tagline">{product.tagline}</p>
          </div>

          <button
            className="product-modal-close-btn"
            onClick={onClose}
            aria-label="Close Modal"
            title="Close (Esc)"
          >
            &times;
          </button>
        </div>

        {/* View Switcher for Products with Editions (e.g. SFA) */}
        {hasVersions && (
          <div className="product-modal-nav-bar">
            {/* Desktop Switcher: Cards vs Matrix */}
            <div className="desktop-view-switcher">
              <button
                type="button"
                className={`view-switch-btn ${viewMode === 'cards' ? 'active' : ''}`}
                onClick={() => setViewMode('cards')}
              >
                <span className="switch-icon">🎴</span>
                <span>Side-by-Side Editions</span>
              </button>
              <button
                type="button"
                className={`view-switch-btn ${viewMode === 'matrix' ? 'active' : ''}`}
                onClick={() => setViewMode('matrix')}
              >
                <span className="switch-icon">📊</span>
                <span>Feature Comparison Matrix</span>
              </button>
            </div>

            {/* Mobile Switcher: Individual Editions + Matrix */}
            <div className="mobile-view-switcher">
              {product.versions.map((ver, idx) => (
                <button
                  key={ver.id || idx}
                  type="button"
                  className={`mobile-tab-btn ${viewMode === 'cards' && mobileTab === idx ? 'active' : ''}`}
                  onClick={() => {
                    setMobileTab(idx);
                    setViewMode('cards');
                  }}
                >
                  {ver.recommended ? '⚡ ' : ''}{ver.name.replace(' Version', '')}
                </button>
              ))}
              <button
                type="button"
                className={`mobile-tab-btn ${viewMode === 'matrix' ? 'active' : ''}`}
                onClick={() => setViewMode('matrix')}
              >
                📊 Matrix
              </button>
            </div>
          </div>
        )}

        {/* Scrollable Modal Content */}
        <div className="product-modal-body">
          {hasVersions ? (
            /* Multi-Edition View (SFA) */
            <>
              {/* Cards View (Desktop 3-column / Mobile selected card) */}
              {viewMode === 'cards' && (
                <div className="editions-compare-section">
                  {/* On Desktop: Show all 3 side-by-side */}
                  <div className="editions-cards-grid desktop-only">
                    {product.versions.map((ver, idx) => {
                      const isRecommended = ver.recommended;
                      return (
                        <div
                          key={ver.id || idx}
                          className={`edition-card ${isRecommended ? 'edition-card-flagship' : ''}`}
                        >
                          {isRecommended && (
                            <div className="edition-card-ribbon">
                              ⭐ Recommended for Enterprise
                            </div>
                          )}

                          <div className="edition-card-header">
                            <span className="edition-badge">{ver.badge}</span>
                            <h4 className="edition-card-title">{ver.name}</h4>
                            <p className="edition-card-desc">{ver.description}</p>
                          </div>

                          <div className="edition-platforms-box">
                            <span className="edition-label">Deployment:</span>
                            <div className="edition-pills-list">
                              {ver.platforms?.map((plat, pIdx) => (
                                <span key={pIdx} className="platform-pill">{plat}</span>
                              ))}
                            </div>
                          </div>

                          {ver.bestFor && (
                            <div className="edition-best-for-box">
                              <strong>Best For:</strong> {ver.bestFor}
                            </div>
                          )}

                          <div className="edition-features-block">
                            <span className="edition-label">Included Features:</span>
                            <ul className="edition-features-list">
                              {ver.features?.map((f, fIdx) => (
                                <li key={fIdx}>
                                  <span className="feat-check">✓</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="edition-card-cta">
                            <button
                              type="button"
                              className={`btn ${isRecommended ? 'btn-primary' : 'btn-secondary'} btn-sm w-full`}
                              onClick={() => handleDemoClick(ver)}
                            >
                              Request {ver.name} &rarr;
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* On Mobile: Show selected edition card */}
                  <div className="mobile-only edition-mobile-single-view">
                    {typeof mobileTab === 'number' && product.versions[mobileTab] && (
                      <div
                        className={`edition-card ${
                          product.versions[mobileTab].recommended ? 'edition-card-flagship' : ''
                        }`}
                      >
                        {product.versions[mobileTab].recommended && (
                          <div className="edition-card-ribbon">
                            ⭐ Recommended for Enterprise
                          </div>
                        )}

                        <div className="edition-card-header">
                          <span className="edition-badge">{product.versions[mobileTab].badge}</span>
                          <h4 className="edition-card-title">{product.versions[mobileTab].name}</h4>
                          <p className="edition-card-desc">{product.versions[mobileTab].description}</p>
                        </div>

                        <div className="edition-platforms-box">
                          <span className="edition-label">Platforms:</span>
                          <div className="edition-pills-list">
                            {product.versions[mobileTab].platforms?.map((plat, pIdx) => (
                              <span key={pIdx} className="platform-pill">{plat}</span>
                            ))}
                          </div>
                        </div>

                        {product.versions[mobileTab].bestFor && (
                          <div className="edition-best-for-box">
                            <strong>Best For:</strong> {product.versions[mobileTab].bestFor}
                          </div>
                        )}

                        <div className="edition-features-block">
                          <span className="edition-label">Key Capabilities:</span>
                          <ul className="edition-features-list">
                            {product.versions[mobileTab].features?.map((f, fIdx) => (
                              <li key={fIdx}>
                                <span className="feat-check">✓</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="edition-card-cta">
                          <button
                            type="button"
                            className="btn btn-primary w-full"
                            onClick={() => handleDemoClick(product.versions[mobileTab])}
                          >
                            Request Demo for {product.versions[mobileTab].name} &rarr;
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Feature Matrix View (Desktop & Mobile) */}
              {viewMode === 'matrix' && (
                <div className="matrix-view-container">
                  <div className="matrix-table-helper-hint">
                    <span className="hint-icon">💡</span>
                    <span>
                      Swipe horizontally to compare all 3 editions side-by-side.
                    </span>
                  </div>

                  <div className="matrix-table-scroll-wrap">
                    <table className="comparison-matrix-table">
                      <thead>
                        <tr>
                          <th className="matrix-col-feature">Feature / Architecture</th>
                          <th className="matrix-col-edition">
                            <span className="col-badge">Essential</span>
                            <div className="col-title">Lite Version</div>
                            <div className="col-platform">Android + Basic Portal</div>
                          </th>
                          <th className="matrix-col-edition matrix-col-flagship">
                            <span className="col-badge flagship">⭐ Full Suite</span>
                            <div className="col-title">Advanced Version</div>
                            <div className="col-platform">Android + Cloud Admin</div>
                          </th>
                          <th className="matrix-col-edition">
                            <span className="col-badge">Standalone</span>
                            <div className="col-title">Mobile App Only</div>
                            <div className="col-platform">Android Mobile / Tablet</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {matrixData.map((section, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <tr className="matrix-category-row">
                              <td colSpan={4}>
                                <strong>{section.category}</strong>
                              </td>
                            </tr>
                            {section.features?.map((feat, fIdx) => (
                              <tr key={fIdx} className="matrix-feature-row">
                                <td className="feature-name-cell">
                                  <div className="feature-title">{feat.name}</div>
                                  {feat.tooltip && (
                                    <div className="feature-tooltip">{feat.tooltip}</div>
                                  )}
                                </td>
                                <td className="feature-val-cell">
                                  {renderCellContent(feat.lite)}
                                </td>
                                <td className="feature-val-cell feature-val-flagship">
                                  {renderCellContent(feat.advanced, true)}
                                </td>
                                <td className="feature-val-cell">
                                  {renderCellContent(feat.mobile)}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="matrix-footer-label">Direct Inquiry</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm w-full"
                              onClick={() => handleDemoClick(getVersion('lite', 1))}
                            >
                              Inquire Lite
                            </button>
                          </td>
                          <td className="matrix-col-flagship">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm w-full"
                              onClick={() => handleDemoClick(getVersion('advanced', 0))}
                            >
                              Inquire Advanced
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm w-full"
                              onClick={() => handleDemoClick(getVersion('mobile', 2))}
                            >
                              Inquire Mobile
                            </button>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Single Product Detailed Technical View (Clinical, KOT, POS) */
            <div className="single-product-details-layout">
              {/* Target Audience & Overview Banner */}
              <div className="product-overview-hero-card">
                <div className="overview-hero-left">
                  <h4 className="overview-hero-title">Overview & Purpose</h4>
                  <p className="overview-hero-desc">{product.description}</p>
                  {product.targetAudience && (
                    <div className="overview-audience-pill">
                      <strong>Designed For:</strong> {product.targetAudience}
                    </div>
                  )}
                </div>

                {product.platforms && (
                  <div className="overview-platforms-card">
                    <span className="overview-specs-title">Platform Ecosystem</span>
                    <div className="overview-platforms-chips">
                      {product.platforms.map((plat, idx) => (
                        <div key={idx} className="platform-chip-large">
                          <span className="chip-icon">
                            {plat.includes('Android') ? '📱' : plat.includes('Web') ? '🌐' : plat.includes('Windows') ? '💻' : '🖨️'}
                          </span>
                          <span>{plat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Core Capabilities / Feature Modules Grid */}
              <div className="single-product-section-block">
                <div className="section-block-header">
                  <h4 className="section-block-title">Key Capabilities & Functional Modules</h4>
                  <span className="section-block-count">
                    {product.highlights?.length || product.features?.length || 0} Core Features
                  </span>
                </div>

                {product.highlights && product.highlights.length > 0 ? (
                  <div className="product-capabilities-grid">
                    {product.highlights.map((item, idx) => (
                      <div key={idx} className="capability-module-card">
                        <div className="capability-card-icon">{item.icon}</div>
                        <div className="capability-card-body">
                          <h5 className="capability-card-title">{item.title}</h5>
                          <p className="capability-card-desc">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="product-capabilities-grid">
                    {product.features?.map((feat, idx) => (
                      <div key={idx} className="capability-module-card">
                        <div className="capability-card-icon">✓</div>
                        <div className="capability-card-body">
                          <p className="capability-card-desc" style={{ margin: 0, fontWeight: 600 }}>
                            {feat}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technical Specifications & Deployment Parameters */}
              {product.specs && (
                <div className="single-product-section-block">
                  <div className="section-block-header">
                    <h4 className="section-block-title">Technical Architecture & Hardware Specifications</h4>
                  </div>
                  <div className="product-specs-grid">
                    {Object.entries(product.specs).map(([key, val], idx) => {
                      const labelMap = {
                        deployment: 'Deployment Architecture',
                        database: 'Data Storage & Cloud Backup',
                        offline: 'Offline Resilience',
                        security: 'Access Security & Compliance',
                        hardware: 'Hardware & Peripherals Sync',
                        routing: 'Station Routing Engine',
                        failover: 'Fault Tolerance & Fallback',
                        taxation: 'Indian GST & Tax Master'
                      };
                      return (
                        <div key={idx} className="spec-item-box">
                          <div className="spec-key-label">{labelMap[key] || key.toUpperCase()}</div>
                          <div className="spec-val-text">{val}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Client Ownership & Customization Note */}
              <div className="product-customization-note">
                <div className="note-icon">⚙️</div>
                <div className="note-text">
                  <strong>Tailored For Your Business Flow:</strong> SoftAir Solutions provides complete customization of receipts, taxation rules, custom fields, and API integrations with your legacy accounting software.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Action Footer */}
        <div className="product-modal-footer">
          <div className="footer-support-text">
            <span>Need custom software or enterprise volume licensing?</span>
          </div>

          <div className="product-modal-footer-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const targetVer = hasVersions
                  ? (viewMode === 'cards' && typeof mobileTab === 'number' && product.versions[mobileTab]
                      ? product.versions[mobileTab]
                      : (product.versions.find((v) => v.recommended) || product.versions[0]))
                  : null;
                handleDemoClick(targetVer);
              }}
            >
              Request Live Demo & Walkthrough &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
