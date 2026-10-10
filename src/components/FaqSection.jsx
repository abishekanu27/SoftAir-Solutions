import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is SoftAir Solutions Pvt Ltd preparing for?',
    a: 'SoftAir Solutions Pvt Ltd is preparing for our grand official opening on January 1, 2027. We are finalizing our proprietary engineering frameworks, assembling our core development teams, and setting up client onboarding for custom software, web applications, mobile apps, and IT services.'
  },
  {
    q: 'What core software, web, and mobile solutions do you provide?',
    a: 'We specialize in custom enterprise software systems, high-performance web applications, native iOS and Android mobile apps, cross-platform apps (React Native & Flutter), and ongoing enterprise IT technical support.'
  },
  {
    q: 'Can our business schedule an advance project consultation?',
    a: 'Yes! By subscribing with your email and selecting "Custom Software Blueprint" or "Web & Mobile App Consultation", our lead architects will schedule an advance scoping session to evaluate your timeline and project specifications.'
  },
  {
    q: 'Which technologies and programming languages do you build with?',
    a: 'We build with modern industry-standard technologies including React, Next.js, Node.js, Python, Swift (iOS), Kotlin (Android), React Native, Flutter, TypeScript, PostgreSQL, MongoDB, and enterprise cloud APIs.'
  },
  {
    q: 'When will the full company launch and public opening occur?',
    a: 'Our public launch and client onboarding officially open on January 1, 2027. Early waitlist subscribers receive priority queue onboarding and exclusive founder consultation rates.'
  }
];

export default function FaqSection({ companyName }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-header-centered">
        <div className="section-pill">
          <HelpCircle size={14} className="pill-icon" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="section-title">
          Questions About Our <span className="text-gradient">Launch</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about our custom software engineering, web apps, mobile apps, and IT services.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`faq-item glass-panel ${isOpen ? 'faq-item-open' : ''}`}
            >
              <button 
                type="button" 
                className="faq-question-btn" 
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{faq.q}</span>
                <div className={`faq-chevron-wrap ${isOpen ? 'rotate' : ''}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="faq-answer-wrap">
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
