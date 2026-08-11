import React from 'react';
import { Heart, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { useScrollBlur } from '../hooks/useScrollBlur';

export default function WhyThisWork() {
  const { ref, animatedStyle } = useScrollBlur(0.2);

  return (
    <section id="story" className="py-24 bg-gradient-to-b from-[#F6F1EA] via-[#FAF7F2] to-[#F6F1EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative aura background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4A1525]/20 via-[#D97746]/15 to-transparent blur-2xl opacity-70" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8DFD5] shadow-xl bg-[#FAF7F2]">
                <img
                  src="/images/lived_experience.png"
                  alt="Clara Vance - Patient Advocate guided by lived experience of chronic illness"
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                />

                <div className="p-6 bg-[#4A1525] text-[#FAF7F2] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8A589]">
                    <Sparkles className="w-4 h-4" />
                    <span>My Promise To You</span>
                  </div>
                  <p className="font-serif-warm text-lg italic text-[#FAF7F2]">
                    "You will never have to convince me that your pain is real. I already believe you."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Column */}
          <div ref={ref} style={animatedStyle} className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F7EEF1] text-[#4A1525] text-xs font-semibold uppercase tracking-wider">
                Why I Do This Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-warm font-medium text-[#23201D] leading-tight">
                I do this because I have sat in those paper-covered exam rooms myself.
              </h2>
            </div>

            {/* First-person narrative copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#524B44] leading-relaxed font-normal">
              <p>
                Before I became a patient advocate, I spent seven long years navigating my own diagnostic journey. I know what it feels like to leave a doctor’s office holding a stack of inconclusive labs, feeling completely invisible, invalidated, and exhausted.
              </p>

              <p>
                I know the panic of opening insurance denial letters when you barely have the stamina to get out of bed. I know the heartbreak of preparing a list of symptoms, only to be cut off two minutes into an appointment and told it’s "just stress."
              </p>

              <p>
                When I finally learned how to organize my medical records, frame my symptoms in clinical terms doctors respect, and push back against unfair insurance rejections, everything changed. I turned my lived experience and professional advocacy training into a dedicated sanctuary for others walking this path.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D97746] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#23201D] text-sm">Empathetic Validation</h3>
                  <p className="text-xs text-[#635B54] mt-0.5">I hear you with total compassion and zero clinical judgment.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D97746] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#23201D] text-sm">Fierce & Structured Support</h3>
                  <p className="text-xs text-[#635B54] mt-0.5">I organize the chaos into clear agendas and actionable steps.</p>
                </div>
              </div>
            </div>

            {/* Personal Sign-off */}
            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-serif-warm font-bold text-xl">
                C
              </div>
              <div>
                <p className="font-serif-warm text-lg font-bold text-[#23201D]">Clara Vance</p>
                <p className="text-xs text-[#635B54]">Board Certified Patient Advocate (BCPA)</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
