import React, { useState } from 'react';
import { Eye, ArrowRight, ShieldCheck, Heart, Sparkles, Sliders } from 'lucide-react';

export default function HeroSection() {
  const [clarityMode, setClarityMode] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F1EA] to-[#FAF7F2]">
      {/* Background ambient warm glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#4A1525]/5 via-[#D97746]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Emotionally resonant copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Lived experience pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7EEF1] border border-[#4A1525]/15 text-[#4A1525] text-xs sm:text-sm font-medium shadow-xs">
              <Heart className="w-4 h-4 fill-[#4A1525] text-[#4A1525]" />
              <span>Independent Patient Advocate • Guided by Lived Experience</span>
            </div>

            {/* Main Headline with Visible/Invisible Duality */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-warm font-medium tracking-tight text-[#23201D] leading-[1.12]">
              When the medical system <span className="italic font-normal text-[#4A1525] underline decoration-[#D97746]/40 underline-offset-8">misses you</span>, you don't have to navigate it alone.
            </h1>

            {/* Subcopy with interactive Clarity Spotlight feature */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-[#524B44] leading-relaxed max-w-2xl font-normal">
                If you are living with chronic illness, chronic pain, or complex symptoms, spending your limited energy trying to prove you are hurting is exhausting. I provide compassionate, structured advocacy so your voice is finally heard and respected.
              </p>

              {/* Interactive "Make the Invisible Visible" Lens Tool */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl glass-panel border border-[#E8DFD5] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4A1525] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#D97746]" />
                    <span>Interactive Lens: Experience "Making the Invisible Visible"</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setClarityMode(!clarityMode)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4A1525] text-[#FAF7F2] hover:bg-[#360F1A] transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{clarityMode ? 'Reset Blur' : 'Reveal Clarity'}</span>
                  </button>
                </div>

                <div className="relative p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] transition-all">
                  <p className={`text-base font-serif-warm italic text-[#23201D] transition-all duration-700 ${
                    clarityMode ? 'blur-0 opacity-100' : 'lens-blur-text'
                  }`}>
                    "You are not exaggerating. Your symptoms are real, your fatigue is valid, and you deserve a steady advocate standing in your corner at every doctor's appointment."
                  </p>
                  <p className="text-xs text-[#635B54] mt-2 font-medium">
                    {clarityMode ? '✨ Clarity revealed — This is how advocacy changes your care.' : '👆 Click "Reveal Clarity" or hover to lift the fog.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-[#FAF7F2] bg-[#4A1525] hover:bg-[#360F1A] active:bg-[#250912] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Schedule a Quiet Conversation</span>
                <ArrowRight className="w-5 h-5 text-[#E8A589]" />
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-[#23201D] bg-[#F2EDE4] hover:bg-[#E8DFD5] transition-all border border-[#D5C9BC]"
              >
                <span>Read My Story</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#635B54]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7C8D7C]" />
                <span>100% Client-Centered (No Hospital Affiliations)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7C8D7C]" />
                <span>Nationwide Remote Support Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Ethereal Artwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#D97746]/20 via-[#4A1525]/10 to-[#7C8D7C]/20 blur-xl opacity-70" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8DFD5] shadow-2xl bg-[#FAF7F2]">
                <img
                  src="/images/hero_clarity.png"
                  alt="Abstract modern artwork representing clarity emerging from mist and fog"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-white/50 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D97746] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#23201D]">Making the Invisible Visible</h3>
                      <p className="text-xs text-[#635B54] mt-0.5 leading-snug">
                        Turning medical chaos into organized, compassionate clarity—one appointment at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
