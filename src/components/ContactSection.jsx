import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, HeartHandshake, Clock } from 'lucide-react';
import { useScrollBlur } from '../hooks/useScrollBlur';

export default function ContactSection({ selectedServiceSubject }) {
  const { ref, animatedStyle } = useScrollBlur(0.15);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    topic: selectedServiceSubject || 'General Inquiry & Intro Call',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const placeholderInfo = {
    email: "hello@claravanceadvocacy.com",
    phone: "(555) 382-9104",
    location: "Pacific Northwest • Serving Clients Nationwide (Remote & In-Person)"
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(placeholderInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct clean mailto link
    const mailtoSubject = encodeURIComponent(`Advocacy Inquiry: ${formData.topic}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Contact Method: ${formData.preferredContact}\nTopic: ${formData.topic}\n\nMessage / Current Situation:\n${formData.message}`
    );
    window.location.href = `mailto:${placeholderInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Reassurance Copy & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F7EEF1] text-[#4A1525] text-xs font-semibold uppercase tracking-wider">
                Start A Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-warm font-medium text-[#23201D] leading-tight">
                Take your time. There is zero pressure here.
              </h2>
              <p className="text-base sm:text-lg text-[#524B44] leading-relaxed font-normal">
                Whether you're ready to schedule a free 20-minute conversation or simply have a quick question, I am here to listen. You won't receive automated spam or high-pressure sales pitches.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card with Copy button */}
              <div className="p-5 rounded-2xl bg-[#F6F1EA] border border-[#E8DFD5] flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#E8A589]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#635B54] uppercase">Email Directly</p>
                    <p className="text-base font-medium text-[#23201D] font-mono">{placeholderInfo.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#E8DFD5] text-[#4A1525] transition-colors border border-[#D5C9BC]"
                  title="Copy email address"
                >
                  {copiedEmail ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#F6F1EA] border border-[#E8DFD5] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D97746] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#635B54] uppercase">Phone / Text Line</p>
                  <p className="text-base font-medium text-[#23201D] font-mono">{placeholderInfo.phone}</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#F6F1EA] border border-[#E8DFD5] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7C8D7C] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#635B54] uppercase">Coverage & Location</p>
                  <p className="text-sm font-medium text-[#23201D]">{placeholderInfo.location}</p>
                </div>
              </div>

            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-xl bg-[#F7EEF1] text-[#4A1525] flex items-center gap-3 text-xs font-medium border border-[#4A1525]/10">
              <Clock className="w-4 h-4 text-[#D97746] shrink-0" />
              <span>I personally review and reply to all messages within 24 business hours.</span>
            </div>

          </div>

          {/* Right Column: Warm Interactive Form */}
          <div ref={ref} style={animatedStyle} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F6F1EA] border border-[#E8DFD5] shadow-md">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-serif-warm font-medium text-[#23201D]">
                  Send a Gentle Inquiry
                </h3>
                <p className="text-sm text-[#635B54]">
                  Fill out what you can. Nothing here is mandatory except your preferred contact method.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#7C8D7C] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#7C8D7C]/20 text-[#7C8D7C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif-warm font-medium text-[#23201D]">
                    Thank You for Reaching Out
                  </h4>
                  <p className="text-base text-[#524B44] max-w-md mx-auto">
                    Your default email application has opened with your inquiry pre-filled. You can also copy my email directly above if you prefer. I look forward to speaking soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A1525] underline pt-2"
                  >
                    <span>Send another message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#23201D] uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah M."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#23201D] text-sm focus:ring-2 focus:ring-[#D97746] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#23201D] uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#23201D] text-sm focus:ring-2 focus:ring-[#D97746] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#23201D] uppercase tracking-wider mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#23201D] text-sm focus:ring-2 focus:ring-[#D97746] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#23201D] uppercase tracking-wider mb-2">
                        Primary Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#23201D] text-sm focus:ring-2 focus:ring-[#D97746] focus:outline-none"
                      >
                        <option value="General Inquiry & Intro Call">General Inquiry & Intro Call</option>
                        <option value="Appointment Support & Prep">Appointment Support & Prep</option>
                        <option value="Paperwork & Insurance Navigation">Paperwork & Insurance Navigation</option>
                        <option value="Communication Coaching">Communication Coaching</option>
                        <option value="Ongoing Care & Check-ins">Ongoing Care & Check-ins</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#23201D] uppercase tracking-wider mb-2">
                      Tell Me A Bit About What You're Facing (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share whatever feels comfortable—upcoming appointments, insurance headaches, or just feeling unheard..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#23201D] text-sm focus:ring-2 focus:ring-[#D97746] focus:outline-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#4A1525] hover:bg-[#360F1A] text-[#FAF7F2] text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#E8A589]" />
                    <span>Send Message & Open Email Client</span>
                  </button>

                  <p className="text-center text-xs text-[#635B54] mt-2">
                    🔒 Your information is 100% private and will never be shared.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
