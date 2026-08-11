import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenContactModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#story' },
    { name: 'Who I Help', href: '#who-i-help' },
    { name: 'How It Works', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#E8DFD5]/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97746]"
            aria-label="Clara Vance Patient Advocacy - Return to top"
          >
            <div className="w-10 h-10 rounded-full bg-[#4A1525] text-[#FAF7F2] flex items-center justify-center shadow-md group-hover:bg-[#360F1A] transition-colors">
              <HeartHandshake className="w-5 h-5 text-[#E8A589]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-warm text-xl font-bold tracking-tight text-[#23201D] group-hover:text-[#4A1525] transition-colors">
                Clara Vance
              </span>
              <span className="text-xs tracking-wider font-medium text-[#635B54] uppercase">
                Patient Advocate
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#4A433D] hover:text-[#4A1525] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D97746] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#FAF7F2] bg-[#4A1525] hover:bg-[#360F1A] active:bg-[#250912] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-[#E8A589]" />
              <span>Quiet Conversation</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#23201D] hover:bg-[#F2EDE4] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-[#23201D] hover:bg-[#F2EDE4] hover:text-[#4A1525] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-base font-semibold text-[#FAF7F2] bg-[#4A1525] hover:bg-[#360F1A] transition-colors shadow"
              >
                <PhoneCall className="w-4 h-4 text-[#E8A589]" />
                <span>Schedule a Conversation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
