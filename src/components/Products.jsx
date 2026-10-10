import React, { useState, useEffect } from 'react';
import { fetchProducts, DEFAULT_PRODUCTS } from '../services/productsApi';
import ProductDetailModal from './ProductDetailModal';

export default function Products({ onRequestDemo }) {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dataSource, setDataSource] = useState('default');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Store selected version index for each product: { [productId]: versionIndex }
  const [selectedVersions, setSelectedVersions] = useState({});

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      const res = await fetchProducts();
      if (isMounted) {
        setProducts(res.data);
        setDataSource(res.source);
        setLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleVersionChange = (productId, versionIndex) => {
    setSelectedVersions((prev) => ({
      ...prev,
      [productId]: versionIndex
    }));
  };

  const handleDemoClick = (product, version) => {
    if (onRequestDemo) {
      onRequestDemo(product, version);
    }
  };

  return (
    <section className="section" id="products" style={{ background: 'var(--bg-surface-elevated)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="section-tag" style={{ margin: 0 }}>Software Suite & Editions</span>
            {dataSource === 'api' && (
              <span style={{ fontSize: '0.75rem', background: '#10b981', color: '#ffffff', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                ● API Connected
              </span>
            )}
          </div>
          <h2 className="section-title">
            Our Ready-to-Deploy <span className="gradient-text">Software Products</span>
          </h2>
          <p className="section-subtitle">
            Engineered by SoftAir Solutions for field sales & order management, clinical healthcare, kitchen operations, and retail checkout. SoftAir SFA provides dual engines for both <strong>Direct Spot Sales / Van Invoicing</strong> and <strong>Advance Retailer Order Booking</strong> across Advanced, Lite, and Mobile App Only editions.
          </p>

          {/* Category Filter Tabs */}
          <div className="product-category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`product-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All' ? 'All Products' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="products-grid">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="product-card skeleton-card">
                <div className="skeleton-line" style={{ width: '40%', height: '20px', marginBottom: '1rem' }}></div>
                <div className="skeleton-line" style={{ width: '70%', height: '28px', marginBottom: '1rem' }}></div>
                <div className="skeleton-line" style={{ width: '100%', height: '60px', marginBottom: '1.5rem' }}></div>
                <div className="skeleton-line" style={{ width: '90%', height: '80px' }}></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((prod) => {
              const currentVersionIdx = selectedVersions[prod.id] || 0;
              const hasVersions = Array.isArray(prod.versions) && prod.versions.length > 0;
              const activeVer = hasVersions ? prod.versions[currentVersionIdx] : null;

              const displayBadge = activeVer ? activeVer.badge : (prod.badge || 'Enterprise');
              const displayPlatforms = activeVer?.platforms || prod.platforms || ['Android', 'Cloud Web'];
              const displayDescription = activeVer?.description || prod.description;
              const displayFeatures = activeVer?.features || prod.features || [];

              return (
                <div key={prod.id} className="product-card">
                  {/* Top Badge & Platform Tags */}
                  <div className="product-card-top">
                    <span className="product-category-badge">{prod.category}</span>
                    <span className="product-flag-badge">{displayBadge}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="product-card-title">{prod.name}</h3>
                  <div className="product-card-tagline">{prod.tagline}</div>

                  {/* Version Edition Selector Tabs */}
                  {hasVersions && (
                    <div className="product-version-selector">
                      <span className="version-selector-label">Available Editions:</span>
                      <div className="version-tabs-wrap">
                        {prod.versions.map((ver, vIdx) => (
                          <button
                            key={ver.id || vIdx}
                            className={`version-tab-pill ${currentVersionIdx === vIdx ? 'active' : ''}`}
                            onClick={() => handleVersionChange(prod.id, vIdx)}
                            type="button"
                          >
                            <span>{ver.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Platform Pills for active version */}
                  <div className="product-platform-pills">
                    {displayPlatforms.map((plat, idx) => (
                      <span key={idx} className="platform-pill">{plat}</span>
                    ))}
                  </div>

                  <p className="product-card-desc">{displayDescription}</p>

                  {/* Key Features List for active edition */}
                  <div className="product-features-box">
                    <div className="product-features-heading">
                      {activeVer ? `${activeVer.name} Features:` : 'Key Capabilities:'}
                    </div>
                    <ul className="product-features-list">
                      {displayFeatures.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx}>
                          <span className="feat-check">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="product-card-actions">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => handleDemoClick(prod, activeVer)}
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <span>{activeVer ? `Request ${activeVer.name}` : 'Request Live Demo'} &rarr;</span>
                    </button>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => setActiveModalProduct(prod)}
                      title={hasVersions ? "Compare All Editions" : "View Full Specifications"}
                    >
                      <span>{hasVersions ? "Compare Editions" : "Details"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Future Applications & Custom Software Development Showcase */}
        <div className="products-integration-bar">
          <div>
            <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--primary)', marginBottom: '0.35rem' }}>
              Expanding Product Roadmap & Custom Software
            </div>
            <strong>Building More Specialized Applications & Custom Software</strong>
            <p>
              In addition to our SFA, Clinical, KOT, and POS platforms, SoftAir Solutions is actively engineering new enterprise applications. Need a tailor-made application for your business? We engineer bespoke Web, Android, and Desktop software from the ground up with 100% client code ownership.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary btn-sm" style={{ whiteSpace: 'nowrap' }}>
            Consult on Custom Software &rarr;
          </a>
        </div>
      </div>

      {/* Product Detail & Edition Comparison Modal */}
      {activeModalProduct && (
        <ProductDetailModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onSelectDemo={(prod, ver) => {
            handleDemoClick(prod, ver);
          }}
        />
      )}
    </section>
  );
}
