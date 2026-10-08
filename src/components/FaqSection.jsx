import React, { useState } from 'react';

const faqs = [
  {
    question: 'What engagement models does SoftAir Solutions support?',
    answer: 'We provide flexible engagement models tailored to client needs: Dedicated Engineering Pods (cross-functional squads embedded into your product roadmap), Fixed-Scope Turnkey Deliveries (milestone-based contracts with guaranteed deadlines), and On-Demand Architecture Consulting.'
  },
  {
    question: 'Who owns the Intellectual Property (IP) and source code?',
    answer: 'You own 100% of all intellectual property, source code, repositories, infrastructure configurations, and design assets upon milestone completion. SoftAir Solutions adheres to stringent NDA protections and enterprise security protocols.'
  },
  {
    question: 'How fast can an engineering squad commence work?',
    answer: 'After our initial discovery call and requirements alignment, dedicated engineering squads can typically mobilize and begin sprint zero within 5 to 10 business days.'
  },
  {
    question: 'Do you offer post-launch support and 24/7 SLA maintenance?',
    answer: 'Yes. Every project includes complimentary post-deployment warranty support, with optional Tier-1 enterprise SLA coverage providing 24/7/365 active monitoring, incident mitigation, and automated security patches.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section" id="faq" style={{ background: 'var(--bg-surface-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about partnering with SoftAir Solutions Pvt Ltd.
          </p>
        </div>

        <div className="faq-wrap">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'active' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <div className="faq-toggle-icon">&darr;</div>
              </button>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
