import React, { useState } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, ArrowLeft, Upload, AlertCircle, Sparkles } from 'lucide-react';
import { TutoringMode } from '../types';
import { SUBJECTS_DATA } from '../data/subjects';
import { BRAND_CONFIG } from '../config/brand';

interface BecomeTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BecomeTutorModal: React.FC<BecomeTutorModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Step 1: Personal & Contact
    fullName: '',
    email: '',
    phone: '',
    primaryCity: BRAND_CONFIG.serviceLocations[0],
    
    // Step 2: Education & Credentials
    highestDegree: 'Master of Science (M.Sc.)',
    university: '',
    graduationYear: '2020',
    experienceYears: 4,

    // Step 3: Teaching Specialization & Rates
    selectedSubjects: ['Mathematics'] as string[],
    selectedGrades: ['Grade 9-10', 'Grade 11-12'] as string[],
    tutoringMode: 'hybrid' as TutoringMode,
    expectedHourlyRate: 700,
    preferredLocations: [BRAND_CONFIG.serviceLocations[0]],

    // Step 4: Biography & Verification Agreement
    bio: '',
    methodology: '',
    agreeToBackgroundCheck: false,
    agreeToPlatformTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);

  if (!isOpen) return null;

  const gradesOptions = ['Primary (Grades 1-5)', 'Middle (Grades 6-8)', 'Grade 9-10', 'Grade 11-12', 'AP & College Prep'];

  const toggleSubject = (sub: string) => {
    if (formData.selectedSubjects.includes(sub)) {
      if (formData.selectedSubjects.length > 1) {
        setFormData({
          ...formData,
          selectedSubjects: formData.selectedSubjects.filter(s => s !== sub)
        });
      }
    } else {
      setFormData({
        ...formData,
        selectedSubjects: [...formData.selectedSubjects, sub]
      });
    }
  };

  const toggleGrade = (gr: string) => {
    if (formData.selectedGrades.includes(gr)) {
      if (formData.selectedGrades.length > 1) {
        setFormData({
          ...formData,
          selectedGrades: formData.selectedGrades.filter(g => g !== gr)
        });
      }
    } else {
      setFormData({
        ...formData,
        selectedGrades: [...formData.selectedGrades, gr]
      });
    }
  };

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full legal name is required.';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
      if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Contact telephone is required.';
    } else if (step === 2) {
      if (!formData.university.trim()) errs.university = 'Graduating university or college is required.';
      if (!formData.graduationYear.trim()) errs.graduationYear = 'Graduation year is required.';
      if (formData.experienceYears < 1) errs.experienceYears = 'Minimum 1 year of teaching or tutoring experience.';
    } else if (step === 3) {
      if (formData.selectedSubjects.length === 0) errs.selectedSubjects = 'Select at least one teaching subject.';
      if (formData.selectedGrades.length === 0) errs.selectedGrades = 'Select at least one grade level.';
      if (formData.expectedHourlyRate < 300) errs.expectedHourlyRate = 'Minimum rate is ₹300/hr.';
    } else if (step === 4) {
      if (!formData.bio.trim() || formData.bio.length < 30) {
        errs.bio = 'Please provide a descriptive biography of at least 30 characters.';
      }
      if (!formData.agreeToBackgroundCheck) {
        errs.agreeToBackgroundCheck = 'Consent to criminal and credential background verification is mandatory.';
      }
      if (!formData.agreeToPlatformTerms) {
        errs.agreeToPlatformTerms = 'You must agree to platform educator standards.';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const appId = `APP-${Math.floor(10000 + Math.random() * 90000)}`;
      setIsSubmitting(false);
      setSubmittedAppId(appId);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedAppId(null);
    setCurrentStep(1);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutor-register-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl">
        
        {/* Modal Top Header with Stepper */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 id="tutor-register-title" className="text-lg font-bold text-slate-900">
              Apply to Join TutorNest
            </h2>
            <p className="text-xs text-slate-500">
              Step {currentStep} of {totalSteps}: {
                currentStep === 1 ? 'Personal Contact' :
                currentStep === 2 ? 'Degrees & Experience' :
                currentStep === 3 ? 'Subjects & Rates' : 'Bio & Verification'
              }
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1">
          <div
            className="bg-blue-600 h-1 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {submittedAppId ? (
            /* Explicit confirmation state adhering to rule: Explain that submitting application does NOT automatically verify tutor */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-5 border border-blue-100">
                <Shield className="w-8 h-8" />
              </div>

              <span className="text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200/80 rounded-md px-2.5 py-1">
                Application Received for Review
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-2">
                Thank You, {formData.fullName}!
              </h3>

              <p className="text-xs text-slate-500 font-mono mb-4">
                Application ID: <span className="text-slate-900 font-bold">{submittedAppId}</span>
              </p>

              {/* Explicit verification disclaimer required by prompt */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-left text-xs text-amber-900 max-w-md mx-auto space-y-2.5 mb-6">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Important Verification Notice:</span>
                </div>
                <p className="leading-relaxed">
                  Submitting this application does <strong>not automatically approve, certify, or publicly list</strong> your profile.
                </p>
                <div className="pt-2 border-t border-amber-200 text-slate-700 space-y-1.5">
                  <div className="font-semibold text-slate-900">Next Steps with our Academic Committee:</div>
                  <p>1. Our Admissions Officer reviews your degree documents within 48 business hours.</p>
                  <p>2. You will receive an invitation for a 20-minute video teaching demonstration.</p>
                  <p>3. Following identity and background clearance, your profile is activated for in-home requests.</p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Return to Homepage
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2">
                    <h3 className="text-sm font-bold text-slate-900">Personal & Contact Information</h3>
                    <p className="text-xs text-slate-500">Provide legal contact details for background and payout processing.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Arthur Pendelton"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.fullName ? 'border-rose-500' : 'border-slate-200'}`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="tutor@university.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.email ? 'border-rose-500' : 'border-slate-200'}`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.phone ? 'border-rose-500' : 'border-slate-200'}`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Primary Residential Area / City *
                    </label>
                    <select
                      value={formData.primaryCity}
                      onChange={(e) => setFormData({ ...formData, primaryCity: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                    >
                      {BRAND_CONFIG.serviceLocations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: Credentials & Degrees */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2">
                    <h3 className="text-sm font-bold text-slate-900">Academic Background & Experience</h3>
                    <p className="text-xs text-slate-500">We verify all credentials directly with accredited higher education institutions.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Highest Degree Completed *
                      </label>
                      <select
                        value={formData.highestDegree}
                        onChange={(e) => setFormData({ ...formData, highestDegree: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                      >
                        <option value="Doctorate (Ph.D. / Ed.D.)">Doctorate (Ph.D. / Ed.D.)</option>
                        <option value="Master of Science (M.Sc.)">Master of Science (M.Sc.)</option>
                        <option value="Master of Arts (M.A.)">Master of Arts (M.A.)</option>
                        <option value="Master of Education (M.Ed.)">Master of Education (M.Ed.)</option>
                        <option value="Bachelor of Science (B.Sc.)">Bachelor of Science (B.Sc.)</option>
                        <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>
                        <option value="Current Postgraduate Scholar">Current Postgraduate Scholar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Year of Graduation *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2019"
                        value={formData.graduationYear}
                        onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      University / Institution Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Columbia University Teachers College"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.university ? 'border-rose-500' : 'border-slate-200'}`}
                    />
                    {errors.university && <p className="text-[11px] text-rose-600 mt-1">{errors.university}</p>}
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>Years of Teaching / Tutoring Experience:</span>
                      <span className="font-bold text-blue-600 tabular-nums">{formData.experienceYears} Years</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: Number(e.target.value) })}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Subjects & Rates */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2">
                    <h3 className="text-sm font-bold text-slate-900">Teaching Scope & Desired Rates</h3>
                    <p className="text-xs text-slate-500">Select subjects you can coach confidently to school syllabus standards.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Subjects Taught (Select all that apply) *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SUBJECTS_DATA.map((sub) => {
                        const isSelected = formData.selectedSubjects.includes(sub.name);
                        return (
                          <button
                            type="button"
                            key={sub.id}
                            onClick={() => toggleSubject(sub.name)}
                            className={`p-2 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {sub.name}
                          </button>
                        );
                      })}
                    </div>
                    {errors.selectedSubjects && <p className="text-[11px] text-rose-600 mt-1">{errors.selectedSubjects}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Target Grade Levels *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {gradesOptions.map((gr) => {
                        const isSelected = formData.selectedGrades.includes(gr);
                        return (
                          <button
                            type="button"
                            key={gr}
                            onClick={() => toggleGrade(gr)}
                            className={`px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 text-white border-blue-600 shadow-2xs font-semibold'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {gr}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Tutoring Mode Offered
                      </label>
                      <select
                        value={formData.tutoringMode}
                        onChange={(e) => setFormData({ ...formData, tutoringMode: e.target.value as TutoringMode })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                      >
                        <option value="hybrid">In-Home & Online (Hybrid)</option>
                        <option value="home">In-Home Tutoring Only</option>
                        <option value="online">Online Tutoring Only</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1">
                        <span>Expected Hourly Fee:</span>
                        <span className="font-bold text-blue-600 tabular-nums">₹{formData.expectedHourlyRate}/hr</span>
                      </div>
                      <input
                        type="range"
                        min="300"
                        max="2000"
                        step="50"
                        value={formData.expectedHourlyRate}
                        onChange={(e) => setFormData({ ...formData, expectedHourlyRate: Number(e.target.value) })}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Bio, Philosophy & Review */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2">
                    <h3 className="text-sm font-bold text-slate-900">Teaching Bio & Verification Consent</h3>
                    <p className="text-xs text-slate-500">Provide an engaging biography that highlights your teaching approach for parents.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Professional Teaching Biography (For Student Profiles) *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your teaching philosophy, passion for education, and what makes your 1-on-1 tutoring sessions effective..."
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${errors.bio ? 'border-rose-500' : 'border-slate-200'}`}
                    />
                    {errors.bio && <p className="text-[11px] text-rose-600 mt-1">{errors.bio}</p>}
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToBackgroundCheck}
                        onChange={(e) => setFormData({ ...formData, agreeToBackgroundCheck: e.target.checked })}
                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs text-slate-700 leading-relaxed">
                        I hereby consent to formal academic degree verification and identity screening prior to any student placements. *
                      </span>
                    </label>
                    {errors.agreeToBackgroundCheck && (
                      <p className="text-[11px] text-rose-600">{errors.agreeToBackgroundCheck}</p>
                    )}

                    <label className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToPlatformTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToPlatformTerms: e.target.checked })}
                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs text-slate-700 leading-relaxed">
                        I understand that submitting this application enters the review queue and does not constitute guaranteed approval or immediate platform listing. *
                      </span>
                    </label>
                    {errors.agreeToPlatformTerms && (
                      <p className="text-[11px] text-rose-600">{errors.agreeToPlatformTerms}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-black disabled:bg-slate-400 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <Shield className="w-3.5 h-3.5" />
                        <span>Submit for Verification</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
