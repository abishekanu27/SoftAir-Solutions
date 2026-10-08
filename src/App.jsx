import React, { useState, useEffect } from 'react';
import AmbientCanvas from './components/AmbientCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Services from './components/Services';
import ServiceModal from './components/ServiceModal';
import ProjectEstimator from './components/ProjectEstimator';
import PlatformShowcase from './components/PlatformShowcase';
import Pillars from './components/Pillars';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('softair-theme') || 'dark';
  });

  const [selectedModalService, setSelectedModalService] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'cloud',
    budget: 'tier2',
    message: ''
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('softair-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleApplyScope = (scope) => {
    setFormData((prev) => ({
      ...prev,
      service: scope.serviceId === 'suite' ? 'suite' : scope.serviceId,
      message: `Hello SoftAir Engineering Team, I configured an initial project architecture:
- Scope: ${scope.serviceName} (${scope.scaleLabel})
- Target Investment: ${scope.budgetRange}
- Estimated Timeline: ${scope.timeline}
- Pod Squad: ${scope.team}
- Modules: ${scope.addons.length > 0 ? scope.addons.join(', ') : 'Standard Architecture'}
Please review our technical requirements and schedule a discovery session.`
    }));

    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
    showToast('Project scope applied to inquiry form!');
  };

  const handleApplyServiceToContact = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceId,
      message: `Hello SoftAir Team, I would like to schedule a deep-dive architecture consultation regarding your ${serviceId.toUpperCase()} engineering capabilities.`
    }));

    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
    showToast('Selected service applied to inquiry form!');
  };

  return (
    <div className="app-root">
      <AmbientCanvas />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TechMarquee />
        <Services onSelectService={setSelectedModalService} />
        <ProjectEstimator onApplyScope={handleApplyScope} />
        <PlatformShowcase />
        <Pillars />
        <CaseStudies />
        <Testimonials />
        <FaqSection />
        <ContactSection 
          formData={formData} 
          setFormData={setFormData} 
          onShowToast={showToast} 
        />
      </main>
      <Footer theme={theme} onShowToast={showToast} />

      <ServiceModal 
        service={selectedModalService} 
        onClose={() => setSelectedModalService(null)} 
        onApplyToContact={handleApplyServiceToContact}
      />

      <Toast message={toastMessage} />
      <BackToTop />
    </div>
  );
}
