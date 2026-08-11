import React from 'react';
import { Stethoscope, FileText, AlertCircle, Sparkles, HeartPulse, Compass, CheckCircle2 } from 'lucide-react';
import { useScrollBlur } from '../hooks/useScrollBlur';

export default function WhoIWorkWith() {
  const { ref, animatedStyle } = useScrollBlur(0.15);

  const clientProfiles = [
    {
      title: "Living with Unexplained or Complex Symptoms",
      description: "You've been passed between specialists, handed 'normal' lab results while feeling deeply unwell, or given vague answers that leave you feeling dismissed.",
      tag: "Diagnostic Fatigue",
      icon: Compass,
      color: "bg-[#F7EEF1] text-[#4A1525]"
    },
    {
      title: "Managing Invisible Illness & Chronic Pain",
      description: "Conditions like Dysautonomia, Long COVID, Fibromyalgia, ME/CFS, or Autoimmune disorders where your daily struggle isn't visible on the outside.",
      tag: "Invisible Conditions",
      icon: HeartPulse,
      color: "bg-[#FDF3EC] text-[#D97746]"
    },
    {
      title: "Overwhelmed by Medical Administrative Burdens",
      description: "Drowning in insurance denials, prior authorization appeals, 40-page medical record stacks, and endless billing disputes when you need rest.",
      tag: "Paperwork Overwhelm",
      icon: FileText,
      color: "bg-[#F1F5F1] text-[#7C8D7C]"
    },
    {
      title: "Feeling Anxious or Unheard During 15-Min Appointments",
      description: "Rushed appointments where you forget key questions, get talked over, or leave feeling like you weren't given the time or dignity you deserve.",
      tag: "Appointment Stress",
      icon: Stethoscope,
      color: "bg-[#F7EEF1] text-[#4A1525]"
    }
  ];

  return (
    <section id="who-i-help" className="py-24 bg-[#F6F1EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E8DFD5] text-[#4A1525] text-xs font-semibold uppercase tracking-wider">
            Who Belongs Here
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-warm font-medium text-[#23201D]">
            If any of this feels painfully familiar, you are in the right place.
          </h2>
          <p className="text-lg text-[#635B54] font-normal leading-relaxed">
            I don't offer generic advice. My practice is designed specifically for people who are exhausted by the friction of modern healthcare.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div ref={ref} style={animatedStyle} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientProfiles.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD5] shadow-sm hover:shadow-md hover:border-[#D97746]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F2EDE4] text-[#635B54]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-warm font-medium text-[#23201D] group-hover:text-[#4A1525] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#524B44] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFD5]/60 flex items-center gap-2 text-xs font-medium text-[#4A1525]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97746]" />
                  <span>I navigate this with you—step by step, at your pace.</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassuring Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel-wine text-[#FAF7F2] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif-warm font-medium text-[#FAF7F2]">
              You don't need a formal diagnosis to work with me.
            </h3>
            <p className="text-sm text-[#F2EDE4]/90 max-w-2xl font-normal">
              Whether you're at step 1 of searching for answers or step 100 of managing a lifelong condition, you deserve steady support.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center shrink-0 px-6 py-3 rounded-full bg-[#D97746] hover:bg-[#B85B2D] text-[#FAF7F2] text-sm font-semibold transition-colors shadow-sm"
          >
            <span>Let's Talk About Your Situation</span>
          </a>
        </div>

      </div>
    </section>
  );
}
