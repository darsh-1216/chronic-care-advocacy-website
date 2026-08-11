import React from 'react';
import { MessageSquareHeart, PhoneCall, Compass, ArrowRight } from 'lucide-react';
import { useScrollBlur } from '../hooks/useScrollBlur';

export default function GettingStarted() {
  const { ref, animatedStyle } = useScrollBlur(0.2);

  const steps = [
    {
      number: "01",
      title: "Reach Out Without Pressure",
      description: "Send me a brief message or request a call. Tell me as much or as little as you feel comfortable sharing. No endless clinical intake forms, no rigid questionnaires.",
      icon: MessageSquareHeart,
      highlight: "Simple, low-energy contact"
    },
    {
      number: "02",
      title: "A Quiet 20-Minute Conversation",
      description: "We meet over video or phone. This is a non-rushed space where I listen to your history, understand your primary pain points, and explain how advocacy can help.",
      icon: PhoneCall,
      highlight: "100% free & confidential"
    },
    {
      number: "03",
      title: "Support Shaped Around You",
      description: "If we feel like a good match, we design a flexible plan—whether that's prepping for an upcoming doctor visit, organizing medical records, or ongoing monthly support.",
      icon: Compass,
      highlight: "At your pace, on your terms"
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F7EEF1] text-[#4A1525] text-xs font-semibold uppercase tracking-wider">
            Simple & Gentle Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-warm font-medium text-[#23201D]">
            How We Begin
          </h2>
          <p className="text-lg text-[#635B54] font-normal leading-relaxed">
            Taking the first step when you are exhausted is hard. Here is exactly what happens when you reach out.
          </p>
        </div>

        {/* 3-Step Sequence */}
        <div ref={ref} style={animatedStyle} className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-8 rounded-3xl bg-[#F6F1EA] border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:border-[#D97746]/50 transition-all duration-300 group"
              >
                {/* Step Header */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-serif-warm font-bold text-[#4A1525]/30 group-hover:text-[#4A1525] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#4A1525] flex items-center justify-center shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif-warm font-medium text-[#23201D]">
                    {step.title}
                  </h3>

                  <p className="text-[#524B44] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="mt-8 pt-4 border-t border-[#E8DFD5] text-xs font-semibold text-[#D97746]">
                  {step.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-[#FAF7F2] bg-[#4A1525] hover:bg-[#360F1A] shadow-md hover:shadow-lg transition-all"
          >
            <span>Start Step 1: Reach Out</span>
            <ArrowRight className="w-5 h-5 text-[#E8A589]" />
          </a>
        </div>

      </div>
    </section>
  );
}
