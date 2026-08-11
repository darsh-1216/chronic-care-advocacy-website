import React from 'react';
import { Quote } from 'lucide-react';
import { useScrollBlur } from '../hooks/useScrollBlur';

export default function IntroPullStatement() {
  const { ref, animatedStyle } = useScrollBlur(0.2);

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden border-y border-[#E8DFD5]/60">
      {/* Delicate background decorative element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <Quote className="w-[500px] h-[500px] text-[#4A1525]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Animated quote block with scroll-based blur reveal */}
        <div ref={ref} style={animatedStyle} className="space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F7EEF1] text-[#4A1525] mb-2">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif-warm italic text-[#23201D] leading-relaxed tracking-tight">
            “The hardest part of living with a complex or invisible illness isn’t just managing the pain—it is spending your remaining energy trying to prove that you are hurting.”
          </blockquote>

          <div className="pt-4 flex flex-col items-center gap-1">
            <div className="w-12 h-[2px] bg-[#D97746] rounded-full my-2" />
            <p className="text-base sm:text-lg font-medium text-[#4A1525]">
              Clara Vance
            </p>
            <p className="text-xs sm:text-sm text-[#635B54]">
              Board Certified Patient Advocate & Fellow Chronic Illness Survivor
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
