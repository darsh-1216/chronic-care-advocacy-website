import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, ShieldAlert, Heart, Lock } from 'lucide-react';
import { useScrollBlur } from '../hooks/useScrollBlur';

export default function FaqSection() {
  const { ref, animatedStyle } = useScrollBlur(0.15);
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "What makes your advocacy different from a hospital patient advocate?",
      answer: "Hospital patient advocates are employed by the hospital system—their job often involves mitigating liability for the healthcare institution. As an independent patient advocate, I am hired directly by you. My loyalty is 100% to your health, your preferences, and your dignity. I have zero hospital or insurance affiliations."
    },
    {
      question: "Do you offer medical diagnoses, treatment advice, or legal services?",
      answer: "No. I am a Certified Patient Advocate, not a medical doctor, nurse practitioner, or attorney. I do not diagnose conditions, prescribe treatments, or provide legal representation. Instead, I help you prepare for medical visits, translate complex medical jargon into clear options, organize your medical records, and ensure your doctors listen to your lived experience."
    },
    {
      question: "Can you attend my medical appointments if I live in another state?",
      answer: "Yes! Over 80% of my advocacy work is done remotely. I join doctor appointments via speakerphone or video call (Zoom/Doxy/Teams) anywhere in the United States. If you are located in my regional area, in-person advocate accompaniment is also available."
    },
    {
      question: "What if I experience severe brain fog or chronic fatigue during our calls?",
      answer: "My entire practice is built around chronic illness accessibility. We can conduct our work asynchronously via voice notes, short emails, or brief 10-minute touchpoints. If you need to pause, reschedule, or rest during a call, there is zero penalty or judgment. Your body's limits are always honored."
    },
    {
      question: "How do you protect my privacy and confidential medical records?",
      answer: "Your privacy is paramount. I adhere strictly to professional advocacy ethics and client confidentiality standards. All shared medical documents, notes, and personal information are stored on encrypted, password-protected servers and never shared with third parties without your explicit written authorization."
    },
    {
      question: "How do I know if I'm ready for advocacy support?",
      answer: "If you feel overwhelmed before doctor visits, struggle to get clear answers, feel dismissed by specialists, or find medical paperwork draining your remaining quality of life, you are ready. Our initial 20-minute conversation is completely free and pressure-free to help you decide."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#F6F1EA] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E8DFD5] text-[#4A1525] text-xs font-semibold uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-warm font-medium text-[#23201D]">
            Clear Answers, Zero Complexity
          </h2>
          <p className="text-lg text-[#635B54] font-normal leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with an independent advocate.
          </p>
        </div>

        {/* Quick Search Filter */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-5 h-5 text-[#635B54] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., remote, privacy, fees)..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] text-[#23201D] placeholder-[#635B54]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97746]"
          />
        </div>

        {/* Accordion Container */}
        <div ref={ref} style={animatedStyle} className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIdx === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97746]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif-warm text-lg sm:text-xl font-medium text-[#23201D]">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#F2EDE4] text-[#4A1525] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#4A1525] text-white' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#524B44] text-base leading-relaxed border-t border-[#E8DFD5]/40 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#FAF7F2] rounded-2xl border border-[#E8DFD5]">
              <p className="text-[#635B54]">No matching questions found for "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-sm text-[#D97746] font-semibold underline"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>

        {/* Non-medical Disclaimer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F7EEF1] border border-[#4A1525]/15 flex items-start gap-4 text-xs sm:text-sm text-[#4A1525]">
          <ShieldAlert className="w-5 h-5 text-[#4A1525] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Boundary Note:</strong> Patient advocacy complements medical care by handling communication, organization, and system navigation. It does not substitute for professional medical diagnosis or legal counsel.
          </p>
        </div>

      </div>
    </section>
  );
}
