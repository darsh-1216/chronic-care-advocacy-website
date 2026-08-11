import React from 'react';
import { HeartHandshake, ArrowUp, Globe, ShieldAlert, Share2 } from 'lucide-react';


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#23201D] text-[#F2EDE4] pt-16 pb-12 border-t border-[#4A1525]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4A1525] text-[#FAF7F2] flex items-center justify-center shadow-md">
                <HeartHandshake className="w-5 h-5 text-[#E8A589]" />
              </div>
              <span className="font-serif-warm text-2xl font-bold tracking-tight text-[#FAF7F2]">
                Clara Vance
              </span>
            </div>
            
            <p className="text-sm text-[#A8A096] leading-relaxed max-w-sm">
              Independent, non-medical patient advocacy for individuals managing chronic illness, chronic pain, and complex healthcare navigation. Turning medical noise into personal clarity.
            </p>

            {/* Social Links Placeholders */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#36322E] hover:bg-[#4A1525] flex items-center justify-center text-[#E8A589] transition-colors"
                aria-label="Clara Vance LinkedIn Profile (Placeholder)"
              >
                <svg className="w-4 h-4 fill-current text-[#E8A589]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#36322E] hover:bg-[#4A1525] flex items-center justify-center text-[#E8A589] transition-colors"
                aria-label="Clara Vance Yelp Reviews (Placeholder)"
              >
                <span className="font-bold text-xs">Yelp</span>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#36322E] hover:bg-[#4A1525] flex items-center justify-center text-[#E8A589] transition-colors"
                aria-label="Clara Vance TikTok Advocacy Stories (Placeholder)"
              >
                <span className="font-bold text-xs">TikTok</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D97746]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#D5C9BC]">
              <li><a href="#story" className="hover:text-[#FAF7F2] transition-colors">My Story & Experience</a></li>
              <li><a href="#who-i-help" className="hover:text-[#FAF7F2] transition-colors">Who I Work With</a></li>
              <li><a href="#process" className="hover:text-[#FAF7F2] transition-colors">How We Begin (3-Steps)</a></li>
              <li><a href="#services" className="hover:text-[#FAF7F2] transition-colors">Advocacy Services</a></li>
              <li><a href="#faq" className="hover:text-[#FAF7F2] transition-colors">FAQ & Boundaries</a></li>
              <li><a href="#contact" className="hover:text-[#FAF7F2] transition-colors">Schedule A Call</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D97746]">
              Contact & Coverage
            </h4>
            <div className="space-y-2 text-sm text-[#D5C9BC]">
              <p>Email: <span className="text-[#FAF7F2] font-mono">hello@claravanceadvocacy.com</span></p>
              <p>Phone: <span className="text-[#FAF7F2] font-mono">(555) 382-9104</span></p>
              <p>Coverage: <span className="text-[#FAF7F2]">Nationwide Remote (Phone/Zoom) + Regional In-Person</span></p>
              <p className="text-xs text-[#A8A096] pt-1">Mon – Fri: 9:00 AM – 5:00 PM PST</p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-[#1A1816] border border-[#36322E] space-y-2 text-xs text-[#A8A096] leading-relaxed">
          <div className="flex items-center gap-2 text-[#D97746] font-semibold">
            <ShieldAlert className="w-4 h-4" />
            <span>Important Professional Disclaimer & Boundaries</span>
          </div>
          <p>
            Clara Vance is a Board Certified Patient Advocate (BCPA), not a licensed medical doctor, nurse practitioner, physician assistant, attorney, or financial advisor. Advocacy services provide administrative organization, appointment preparation, and emotional accompaniment. They do not constitute medical diagnosis, clinical treatment, prescription advice, or formal legal representation. Always consult a licensed healthcare professional for medical decisions.
          </p>
        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-6 border-t border-[#36322E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A827A]">
          <p>© {new Date().getFullYear()} Clara Vance Patient Advocacy LLC. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#36322E] hover:bg-[#4A1525] text-[#FAF7F2] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
