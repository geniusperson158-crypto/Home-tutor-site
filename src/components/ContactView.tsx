import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface ContactViewProps {
  onRequestDemo: () => void;
  onBecomeTutor: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onRequestDemo, onBecomeTutor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Parent / Student Inquiry',
    subject: 'Request General Guidance',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessageId, setSubmittedMessageId] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please share a brief description of your inquiry (min 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const msgId = `MSG-${Math.floor(10000 + Math.random() * 90000)}`;
      setIsSubmitting(false);
      setSubmittedMessageId(msgId);
    }, 600);
  };

  return (
    <div className="py-12 bg-slate-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Admissions & Support
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Academic Admissions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Have questions about tutor availability in your neighborhood, scheduling a trial, or applying as an educator? We are here to help.
          </p>
        </div>

        {/* 2-Column Split: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Direct CTAs */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Phone Support</div>
                    <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="text-blue-600 hover:underline">
                      {BRAND_CONFIG.contact.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Toll-free customer hotline</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Admissions Email</div>
                    <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="text-blue-600 hover:underline">
                      {BRAND_CONFIG.contact.email}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Average response: 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Operating Hours</div>
                    <p className="text-slate-700">{BRAND_CONFIG.contact.serviceHours}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Academic coordinators on duty</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Main Office & Testing Hub</div>
                    <p className="text-slate-700">{BRAND_CONFIG.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${BRAND_CONFIG.contact.whatsapp}?text=Hi%20TutorNest,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={onRequestDemo}
                className="p-4 bg-blue-50 border border-blue-200 rounded-2xl text-left hover:bg-blue-100/70 transition-colors cursor-pointer"
              >
                <div className="text-xs font-bold text-blue-900 mb-1">
                  Want a Free Demo?
                </div>
                <div className="text-[11px] text-blue-700">
                  Book a 45-min in-home trial session →
                </div>
              </button>

              <button
                onClick={onBecomeTutor}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-left hover:bg-slate-800 transition-colors cursor-pointer text-white"
              >
                <div className="text-xs font-bold text-white mb-1">
                  Are You an Educator?
                </div>
                <div className="text-[11px] text-slate-300">
                  Apply to teach with us →
                </div>
              </button>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            
            {submittedMessageId ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 rounded-md px-2.5 py-1">
                  Message Dispatched
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Received!
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Ticket Reference: {submittedMessageId}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Our academic admissions coordinator will review your inquiry and follow up at <strong>{formData.email}</strong> within 2 to 4 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmittedMessageId(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Parent / Student Inquiry',
                        subject: 'Request General Guidance',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-lg font-bold text-slate-900">Send an Inquiry</h2>
                  <p className="text-xs text-slate-500">Fill out the form below and our team will get in touch directly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rachel Adams"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'}`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="rachel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'}`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      I am contacting as:
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                    >
                      <option value="Parent / Student Inquiry">Parent or Student Looking for a Tutor</option>
                      <option value="Tutor Applicant">Educator / Tutor Applicant</option>
                      <option value="School Partnership">School / Institutional Partner</option>
                      <option value="Billing & Support">General Billing or Account Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Subject / Concern
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Question about Class 10 ICSE Mathematics home tutoring in Vashi"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    How Can We Assist You? *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share any details about your student's needs, timetable, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'}`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Inquiry Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
