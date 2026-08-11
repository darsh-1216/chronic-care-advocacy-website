import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroPullStatement from './components/IntroPullStatement';
import WhoIWorkWith from './components/WhoIWorkWith';
import GettingStarted from './components/GettingStarted';
import WhyThisWork from './components/WhyThisWork';
import ServicesSection from './components/ServicesSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedServiceSubject, setSelectedServiceSubject] = useState('');

  const handleSelectServiceForContact = (serviceTitle) => {
    setSelectedServiceSubject(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#23201D] font-sans selection:bg-[#4A1525]/15 selection:text-[#4A1525]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Short Emotional Intro / Pull Statement */}
        <IntroPullStatement />

        {/* Who I Work With Section */}
        <WhoIWorkWith />

        {/* Getting Started 3-Step Process */}
        <GettingStarted />

        {/* Why This Work / Lived Experience Section */}
        <WhyThisWork />

        {/* Services Section */}
        <ServicesSection onSelectServiceForContact={handleSelectServiceForContact} />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection selectedServiceSubject={selectedServiceSubject} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
