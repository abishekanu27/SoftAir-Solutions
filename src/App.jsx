import React, { useState, useEffect } from 'react';
import AmbientCanvas from './components/AmbientCanvas';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Services from './components/Services';
import ServiceModal from './components/ServiceModal';
import LegalModal from './components/LegalModal';
import Products from './components/Products';
import Motto from './components/Motto';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SecurityStandards from './pages/SecurityStandards';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';

export default function App() {
  const [selectedModalService, setSelectedModalService] = useState(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const getInitialRoute = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const hash = window.location.hash.toLowerCase();
    if (path === '/about-us' || path === '/about' || hash === '#about-us' || hash === '#/about-us') {
      return '/about-us';
    }
    if (path === '/faq' || hash === '#faq' || hash === '#/faq') {
      return '/faq';
    }
    if (path === '/privacy-policy' || hash === '#privacy-policy' || hash === '#/privacy-policy') {
      return '/privacy-policy';
    }
    if (path === '/terms-of-service' || path === '/terms' || hash === '#terms-of-service' || hash === '#/terms-of-service' || hash === '#terms') {
      return '/terms-of-service';
    }
    if (path === '/security-standards' || path === '/security' || hash === '#security-standards' || hash === '#/security-standards' || hash === '#security' || hash === '#iso') {
      return '/security-standards';
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web',
    budget: 'tier2',
    message: ''
  });

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    localStorage.removeItem('softair-theme');
    document.documentElement.setAttribute('data-theme', 'light');

    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
      const hash = window.location.hash.toLowerCase();
      if (path === '/about-us' || path === '/about' || hash === '#about-us' || hash === '#/about-us') {
        setCurrentRoute('/about-us');
      } else if (path === '/faq' || hash === '#faq' || hash === '#/faq') {
        setCurrentRoute('/faq');
      } else if (path === '/privacy-policy' || hash === '#privacy-policy' || hash === '#/privacy-policy') {
        setCurrentRoute('/privacy-policy');
      } else if (path === '/terms-of-service' || path === '/terms' || hash === '#terms-of-service' || hash === '#/terms-of-service' || hash === '#terms') {
        setCurrentRoute('/terms-of-service');
      } else if (path === '/security-standards' || path === '/security' || hash === '#security-standards' || hash === '#/security-standards' || hash === '#security' || hash === '#iso') {
        setCurrentRoute('/security-standards');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleApplyServiceToContact = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceId,
      message: `Hello SoftAir Team, I would like to schedule a consultation regarding your ${serviceId.toUpperCase()} development and IT service capabilities.`
    }));

    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
    showToast('Selected service applied to inquiry form!');
  };

  const handleRequestProductDemo = (product, version) => {
    const versionLabel = version ? ` (${version.name})` : '';
    setFormData((prev) => ({
      ...prev,
      service: product?.id || 'custom',
      message: `Hello SoftAir Engineering Team, I would like to schedule a live product demonstration of your ${product ? product.name : 'Software Product'}${versionLabel}.
- Product: ${product?.name || 'Software Product'}
- Edition/Version: ${version ? `${version.name} (${version.badge})` : 'Standard Edition'}
- Target Platform: ${version?.platforms ? version.platforms.join(', ') : (product?.platforms ? product.platforms.join(', ') : 'Android / Web')}
- Deployment Timeline: Immediate / Planned
Please connect with us to arrange a technical walkthrough and discuss licensing/customization.`
    }));

    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
    showToast(`Live demo request for ${product ? product.name : 'Product'}${versionLabel} applied to inquiry form!`);
  };

  if (currentRoute === '/about-us') {
    return (
      <div className="app-root">
        <AmbientCanvas />
        <AboutUs 
          onNavigateHome={() => navigateTo('/')} 
          onNavigateContact={() => { 
            navigateTo('/'); 
            setTimeout(() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
          }}
          onNavigateProducts={() => { 
            navigateTo('/'); 
            setTimeout(() => {
              const el = document.getElementById('products');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
          }}
        />
        <Toast message={toastMessage} />
        <BackToTop />
      </div>
    );
  }

  if (currentRoute === '/faq') {
    return (
      <div className="app-root">
        <AmbientCanvas />
        <Faq 
          onNavigateHome={() => navigateTo('/')} 
          onNavigateContact={() => { 
            navigateTo('/'); 
            setTimeout(() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
          }}
          onNavigateProducts={() => { 
            navigateTo('/'); 
            setTimeout(() => {
              const el = document.getElementById('products');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
          }}
          onNavigateAbout={() => navigateTo('/about-us')}
        />
        <Toast message={toastMessage} />
        <BackToTop />
      </div>
    );
  }

  if (currentRoute === '/privacy-policy') {
    return (
      <div className="app-root">
        <AmbientCanvas />
        <PrivacyPolicy onNavigateHome={() => navigateTo('/')} />
        <Toast message={toastMessage} />
        <BackToTop />
      </div>
    );
  }

  if (currentRoute === '/terms-of-service') {
    return (
      <div className="app-root">
        <AmbientCanvas />
        <TermsOfService onNavigateHome={() => navigateTo('/')} />
        <Toast message={toastMessage} />
        <BackToTop />
      </div>
    );
  }

  if (currentRoute === '/security-standards') {
    return (
      <div className="app-root">
        <AmbientCanvas />
        <SecurityStandards onNavigateHome={() => navigateTo('/')} />
        <Toast message={toastMessage} />
        <BackToTop />
      </div>
    );
  }

  return (
    <div className="app-root">
      <AmbientCanvas />
      <Navbar onNavigate={navigateTo} />
      <main>
        <Main />
        <Products onRequestDemo={handleRequestProductDemo} />
        <Services onSelectService={setSelectedModalService} />
        <Motto />
        <ContactSection 
          formData={formData} 
          setFormData={setFormData} 
          onShowToast={showToast} 
        />
      </main>
      <Footer 
        onShowToast={showToast} 
        onOpenLegal={(doc) => setActiveLegalDoc(doc)}
        onNavigate={navigateTo}
      />

      <ServiceModal 
        service={selectedModalService} 
        onClose={() => setSelectedModalService(null)} 
        onApplyToContact={handleApplyServiceToContact}
      />

      <LegalModal 
        activeDoc={activeLegalDoc} 
        setActiveDoc={setActiveLegalDoc} 
      />

      <Toast message={toastMessage} />
      <BackToTop />
    </div>
  );
}
