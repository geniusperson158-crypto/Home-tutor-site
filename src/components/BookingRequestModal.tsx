import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, Clock, AlertCircle } from 'lucide-react';
import { Tutor, TutoringMode } from '../types';
import { SUBJECTS_DATA } from '../data/subjects';
import { BRAND_CONFIG } from '../config/brand';

interface BookingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTutor?: Tutor | null;
  defaultSubject?: string;
  isDemoOnly?: boolean;
}

export const BookingRequestModal: React.FC<BookingRequestModalProps> = ({
  isOpen,
  onClose,
  selectedTutor = null,
  defaultSubject = '',
  isDemoOnly = true
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentGrade: 'Grade 9-10',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    subject: defaultSubject || (selectedTutor?.subjects[0] || 'Mathematics'),
    mode: 'home' as TutoringMode,
    preferredDays: ['Monday', 'Wednesday'],
    preferredTimeSlot: '4:00 PM - 6:00 PM (Late Afternoon)',
    address: '',
    neighborhood: BRAND_CONFIG.serviceLocations[0],
    learningGoals: '',
    isDemoClass: isDemoOnly
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  if (!isOpen) return null;

  const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const toggleDay = (day: string) => {
    if (formData.preferredDays.includes(day)) {
      if (formData.preferredDays.length > 1) {
        setFormData({
          ...formData,
          preferredDays: formData.preferredDays.filter(d => d !== day)
        });
      }
    } else {
      setFormData({
        ...formData,
        preferredDays: [...formData.preferredDays, day]
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required.';
    if (!formData.parentName.trim()) errs.parentName = 'Parent or guardian name is required.';
    if (!formData.parentEmail.trim() || !formData.parentEmail.includes('@')) {
      errs.parentEmail = 'Valid email address is required.';
    }
    if (!formData.parentPhone.trim() || formData.parentPhone.length < 8) {
      errs.parentPhone = 'Valid contact phone number is required.';
    }
    if (formData.mode === 'home' && !formData.address.trim()) {
      errs.address = 'Street address or neighborhood details are required for home tutoring.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request submission
    setTimeout(() => {
      const refId = `TN-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedReference(refId);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmittedReference(null);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 id="booking-modal-title" className="text-lg font-bold text-slate-900">
              {formData.isDemoClass ? 'Request a Free Home Demo Class' : 'Schedule Tutoring Consultation'}
            </h2>
            <p className="text-xs text-slate-500">
              {selectedTutor ? `Target Educator: ${selectedTutor.name}` : 'Connect with a matched subject specialist'}
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8">
          
          {submittedReference ? (
            /* Explicit confirmation state adhering to rule: Do not claim booking is confirmed when only request submitted */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-5 border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 rounded-md px-2.5 py-1">
                Booking Request Successfully Submitted
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-2">
                We've Received Your Demo Request!
              </h3>

              <p className="text-xs text-slate-500 font-mono mb-4">
                Inquiry Reference: <span className="text-slate-900 font-bold">{submittedReference}</span>
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs text-slate-700 max-w-md mx-auto space-y-3 mb-6">
                <div className="font-bold text-slate-900 border-b border-slate-200 pb-2">
                  What Happens Next (Within 4 Business Hours):
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                  <span>Our Admissions Coordinator reviews the requested schedule with <strong>{selectedTutor ? selectedTutor.name : 'the matched tutor'}</strong>.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                  <span>We contact you at <strong>{formData.parentPhone}</strong> or <strong>{formData.parentEmail}</strong> to confirm the exact date, home address details, and student diagnostic goals.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                  <span>The tutor arrives at your doorstep for the 45-minute trial lesson. No advance payment required.</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 mb-6 max-w-sm mx-auto">
                Note: This is a demo request registration. Final lesson confirmation occurs once the tutor's calendar is matched.
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Back to Tutor Directory
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Type Switcher: Demo Class vs Regular Tutoring */}
              <div className="p-3 bg-blue-50/80 rounded-2xl border border-blue-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                  <span className="text-xs font-semibold text-blue-900">
                    Complimentary 45-Min Home Trial (Zero Obligation)
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isDemoClass}
                    onChange={(e) => setFormData({ ...formData, isDemoClass: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Student Details */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  1. Student Information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.studentName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'}`}
                    />
                    {errors.studentName && <p className="text-[11px] text-rose-600 mt-1">{errors.studentName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Class / Grade Level *
                    </label>
                    <select
                      value={formData.studentGrade}
                      onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                    >
                      <option value="Grade 1-5">Primary (Grades 1-5)</option>
                      <option value="Grade 6-8">Middle School (Grades 6-8)</option>
                      <option value="Grade 9-10">High School (Grades 9-10)</option>
                      <option value="Grade 11-12">Senior High (Grades 11-12)</option>
                      <option value="AP / SAT Prep">AP & College Entrance Prep</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Subject Needed *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                    >
                      {SUBJECTS_DATA.map((sub) => (
                        <option key={sub.id} value={sub.name}>
                          {sub.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Learning Mode *
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value as TutoringMode })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                    >
                      <option value="home">In-Home Tutoring (At Your Doorstep)</option>
                      <option value="online">Online 1-on-1 Interactive</option>
                      <option value="hybrid">Hybrid (Home + Online Practice)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent Contact Details */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  2. Parent or Guardian Contact Details
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Robert Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.parentName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'}`}
                  />
                  {errors.parentName && <p className="text-[11px] text-rose-600 mt-1">{errors.parentName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.parentEmail ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'}`}
                    />
                    {errors.parentEmail && <p className="text-[11px] text-rose-600 mt-1">{errors.parentEmail}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98200 12345"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.parentPhone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'}`}
                    />
                    {errors.parentPhone && <p className="text-[11px] text-rose-600 mt-1">{errors.parentPhone}</p>}
                  </div>
                </div>

                {/* Address & Neighborhood */}
                {formData.mode !== 'online' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Neighborhood / Area *
                      </label>
                      <select
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                      >
                        {BRAND_CONFIG.serviceLocations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Street Address / Landmark *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Flat 402, Neelkanth Heights, Sector 17, Vashi"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.address ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'}`}
                      />
                      {errors.address && <p className="text-[11px] text-rose-600 mt-1">{errors.address}</p>}
                    </div>
                  </div>
                )}
              </div>

              {/* Scheduling Preferences */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                  <span>3. Preferred Schedule</span>
                  <span className="text-[11px] font-normal text-slate-500">Select 1 or more convenient days</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {daysList.map((day) => {
                    const isSelected = formData.preferredDays.includes(day);
                    return (
                      <button
                        type="button"
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                  >
                    <option value="3:30 PM - 5:30 PM (Early Afternoon)">3:30 PM - 5:30 PM (Early Afternoon)</option>
                    <option value="5:00 PM - 7:00 PM (Late Afternoon)">5:00 PM - 7:00 PM (Late Afternoon)</option>
                    <option value="6:30 PM - 8:30 PM (Evening)">6:30 PM - 8:30 PM (Evening)</option>
                    <option value="Weekend Mornings (9:00 AM - 12:00 PM)">Weekend Mornings (9:00 AM - 12:00 PM)</option>
                    <option value="Weekend Afternoons (1:00 PM - 5:00 PM)">Weekend Afternoons (1:00 PM - 5:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Student's Current Goals or Challenge Areas (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Maya is preparing for her 10th grade physics midterm and needs help with kinematics formulas."
                    value={formData.learningGoals}
                    onChange={(e) => setFormData({ ...formData, learningGoals: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <span>Submit Demo Request</span>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
