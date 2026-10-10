import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeaserCards from './components/TeaserCards';
import Roadmap from './components/Roadmap';
import FaqSection from './components/FaqSection';
import CustomizeModal from './components/CustomizeModal';
import Footer from './components/Footer';

// Target Launch Date: January 1, 2027
const getInitialTargetDate = () => {
  return '2027-01-01T00:00:00';
};

export default function App() {
  const [companyName, setCompanyName] = useState('SoftAir Solutions Pvt Ltd');
  const [description, setDescription] = useState(
    'SoftAir Solutions Pvt Ltd is preparing to launch our full-service software company. Delivering bespoke custom software, modern web applications, native mobile apps (iOS & Android), and comprehensive enterprise IT services. Opening January 1, 2027.'
  );
  const [targetDate, setTargetDate] = useState(getInitialTargetDate());
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(1482);

  // Apply theme dataset to HTML root
  useEffect(() => {
    if (currentTheme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  const handleResetDefaults = () => {
    setCompanyName('SoftAir Solutions Pvt Ltd');
    setDescription(
      'SoftAir Solutions Pvt Ltd is preparing to launch our full-service software company. Delivering bespoke custom software, modern web applications, native mobile apps (iOS & Android), and comprehensive enterprise IT services. Opening January 1, 2027.'
    );
    setTargetDate(getInitialTargetDate());
    setCurrentTheme('default');
  };

  const handleScrollToSignup = () => {
    const signupEl = document.getElementById('signup-area');
    if (signupEl) {
      signupEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const emailInput = document.getElementById('email-subscribe-input');
      if (emailInput) {
        setTimeout(() => emailInput.focus(), 500);
      }
    }
  };

  return (
    <div className="app-container">
      {/* Dynamic Starfield & Ambient Glow Background */}
      <BackgroundCanvas />

      {/* Fixed/Sticky Glass Navbar */}
      <Navbar 
        companyName={companyName}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
        onScrollToSignup={handleScrollToSignup}
      />

      {/* Main Page Layout */}
      <main className="main-content">
        {/* Hero with Countdown & VIP Pass Box */}
        <Hero
          companyName={companyName}
          description={description}
          targetDate={targetDate}
          subscriberCount={subscriberCount}
          setSubscriberCount={setSubscriberCount}
        />

        {/* Sneak Peek Teasers: What Will Release Soon */}
        <TeaserCards companyName={companyName} />

        {/* Launch Roadmap / Stages */}
        <Roadmap companyName={companyName} />

        {/* FAQ Accordion */}
        <FaqSection companyName={companyName} />
      </main>

      {/* Footer */}
      <Footer companyName={companyName} />

      {/* Live Customization Drawer / Modal */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        companyName={companyName}
        setCompanyName={setCompanyName}
        description={description}
        setDescription={setDescription}
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
