import React, { useState } from 'react';
import { Stethoscope, FileText, MessageSquare, HeartPulse, ArrowUpRight, X, Check, Calendar, Sparkles } from 'lucide-react';
import { useScrollBlur } from '../hooks/useScrollBlur';

export default function ServicesSection({ onSelectServiceForContact }) {
  const { ref, animatedStyle } = useScrollBlur(0.15);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "appointment-support",
      icon: Stethoscope,
      title: "Appointment Support & Prep",
      tagline: "Never feel rushed, talked over, or alone in an exam room again.",
      shortDesc: "Comprehensive pre-appointment agenda building, live advocate presence (remote or local), objective note-taking, and post-visit clarity debriefs.",
      fullDetails: {
        whatIsIncluded: [
          "Pre-appointment preparation call to outline your key symptoms & top 3 goals",
          "Custom Doctor Agenda & symptom history sheet tailored to specialist expectations",
          "Advocate presence via phone/Zoom or in-person (regional) during the appointment",
          "Real-time objective note-taking & asking clarifying questions on your behalf",
          "30-minute post-appointment debrief to review doctor recommendations and next steps"
        ],
        idealFor: "Patients who freeze during fast-paced doctor visits, experience gaslighting, or struggle to remember complex medical discussions due to brain fog.",
        deliverables: "Digital appointment summary transcript, organized action item list, follow-up script."
      },
      accentColor: "border-l-4 border-l-[#4A1525]"
    },
    {
      id: "paperwork-insurance",
      icon: FileText,
      title: "Paperwork & Insurance Navigation",
      tagline: "Turn confusing insurance rejections and 50-page files into organized relief.",
      shortDesc: "Prior authorization appeals, medical billing audits, medical history timeline creation, and tracking specialist referral requirements.",
      fullDetails: {
        whatIsIncluded: [
          "Detailed audit of rejected insurance claims and prior authorization denial letters",
          "Custom appeal drafting with supporting clinical documentation references",
          "Consolidation of multi-provider medical records into a clean, searchable timeline",
          "Medical billing review to catch duplicate charges or unbundled coding errors",
          "Out-of-network coverage exception requests and financial assistance guidance"
        ],
        idealFor: "Anyone overwhelmed by insurance red tape, facing unexpected medical bills, or trying to piece together years of medical records for a new specialist.",
        deliverables: "Formal insurance appeal packet, organized digital medical binder, billing dispute logs."
      },
      accentColor: "border-l-4 border-l-[#D97746]"
    },
    {
      id: "communication-coaching",
      icon: MessageSquare,
      title: "Communication Coaching",
      tagline: "Speak the language doctors respect without sacrificing your truth.",
      shortDesc: "Doctor script prep, symptom communication reframing, boundary-setting tools, and diagnostic timeline building.",
      fullDetails: {
        whatIsIncluded: [
          "1-on-1 coaching session to translate subjective pain/fatigue into objective impact metrics",
          "Practice role-playing for difficult conversations with dismissive care providers",
          "Custom 'Opening Script' cards to set the tone in the first 60 seconds of a visit",
          "Strategies for insisting on diagnostic tests when told 'let's just wait and see'",
          "Tools for setting firm boundaries around unsolicited medical advice from family or providers"
        ],
        idealFor: "Patients who feel anxious advocating for themselves, struggle with doctor communication, or want to feel confident leading their own medical team.",
        deliverables: "Personalized script guide, symptom tracking template, appointment boundary cheat-sheet."
      },
      accentColor: "border-l-4 border-l-[#7C8D7C]"
    },
    {
      id: "ongoing-care-coordination",
      icon: HeartPulse,
      title: "Ongoing Care & Check-ins",
      tagline: "Steady, non-rushed companionship through every chapter of your health journey.",
      shortDesc: "Regular low-energy check-ins, multi-specialist communication sync, symptom trend monitoring, and continuous peace of mind.",
      fullDetails: {
        whatIsIncluded: [
          "Bi-weekly or monthly unhurried phone calls or voice-note check-ins",
          "Continuous updating of your central medical chart and medication/supplement list",
          "Cross-specialist communication coordination (ensuring Neurologist & Rheumatologist are synced)",
          "Brain-fog friendly reminder system for upcoming tests, labs, and prescription refills",
          "Priority messaging access for urgent appointment prep or unexpected health flare-ups"
        ],
        idealFor: "Individuals managing multi-system chronic illnesses (e.g., POTS, EDS, MCAS, Autoimmune) who need steady long-term administrative relief.",
        deliverables: "Monthly care sync reports, active medication & specialist directory, priority text/email line."
      },
      accentColor: "border-l-4 border-l-[#4A1525]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F7EEF1] text-[#4A1525] text-xs font-semibold uppercase tracking-wider">
            Tailored Advocacy Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-warm font-medium text-[#23201D]">
            How I Support You
          </h2>
          <p className="text-lg text-[#635B54] font-normal leading-relaxed">
            Every service is non-clinical, client-centered, and tailored to conserve your physical and emotional energy.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div ref={ref} style={animatedStyle} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className={`p-8 rounded-3xl bg-[#F6F1EA] border border-[#E8DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${service.accentColor}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] text-[#4A1525] flex items-center justify-center shadow-xs group-hover:bg-[#4A1525] group-hover:text-[#FAF7F2] transition-colors">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#D97746] hover:text-[#B85B2D] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-serif-warm font-medium text-[#23201D] group-hover:text-[#4A1525] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-[#4A1525] italic">
                    "{service.tagline}"
                  </p>

                  <p className="text-[#524B44] text-base leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFD5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="w-full py-3 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#4A1525] text-[#23201D] hover:text-[#FAF7F2] text-sm font-semibold transition-all text-center border border-[#D5C9BC]"
                  >
                    View Full Service Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#23201D]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF7F2] rounded-3xl border border-[#E8DFD5] shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#E8DFD5] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F7EEF1] text-[#4A1525] flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif-warm font-bold text-[#23201D]">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs font-medium text-[#D97746]">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full text-[#635B54] hover:bg-[#F2EDE4] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-[#524B44] text-sm sm:text-base">
              
              {/* Included items */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-[#23201D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D97746]" />
                  <span>What is Included:</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.fullDetails.whatIsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#23201D]">
                      <div className="w-5 h-5 rounded-full bg-[#7C8D7C]/20 text-[#7C8D7C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <div className="p-4 rounded-2xl bg-[#F6F1EA] border border-[#E8DFD5] space-y-1">
                <h4 className="text-xs font-bold text-[#4A1525] uppercase tracking-wider">
                  Who This Is Ideal For:
                </h4>
                <p className="text-sm text-[#524B44]">
                  {selectedService.fullDetails.idealFor}
                </p>
              </div>

              {/* Deliverables */}
              <div className="p-4 rounded-2xl bg-[#F7EEF1] border border-[#4A1525]/10 space-y-1">
                <h4 className="text-xs font-bold text-[#4A1525] uppercase tracking-wider">
                  Key Deliverables:
                </h4>
                <p className="text-sm text-[#4A1525]">
                  {selectedService.fullDetails.deliverables}
                </p>
              </div>

            </div>

            {/* Modal Footer actions */}
            <div className="pt-4 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-sm font-medium text-[#635B54] hover:bg-[#F2EDE4] transition-colors"
              >
                Close Window
              </button>

              <a
                href="#contact"
                onClick={() => {
                  if (onSelectServiceForContact) {
                    onSelectServiceForContact(selectedService.title);
                  }
                  setSelectedService(null);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4A1525] hover:bg-[#360F1A] text-[#FAF7F2] text-sm font-semibold transition-all shadow"
              >
                <Calendar className="w-4 h-4 text-[#E8A589]" />
                <span>Inquire About This Service</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
