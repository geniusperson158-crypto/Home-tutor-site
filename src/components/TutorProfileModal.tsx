import React from 'react';
import { X, Star, ShieldCheck, MapPin, Calendar, Clock, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Tutor } from '../types';

interface TutorProfileModalProps {
  tutor: Tutor | null;
  onClose: () => void;
  onRequestDemo: (tutor: Tutor) => void;
}

export const TutorProfileModal: React.FC<TutorProfileModalProps> = ({
  tutor,
  onClose,
  onRequestDemo
}) => {
  if (!tutor) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutor-profile-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        
        {/* Sticky Close Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Tutor Profile Overview
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Top Banner & Photo */}
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-6 border-b border-slate-100">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm">
              <img
                src={tutor.photoUrl}
                alt={tutor.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-blue-700 -z-10">
                <GraduationCap className="w-10 h-10" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 id="tutor-profile-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                  {tutor.name}
                </h2>
                {tutor.verified && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Verified & Background Checked
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {tutor.title}
              </p>

              {/* Unboxed Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-3">
                <div className="flex items-center gap-1 font-bold text-slate-900">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="tabular-nums">{tutor.rating.toFixed(2)}</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="tabular-nums">{tutor.reviewCount} parent reviews (sample)</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="tabular-nums">{tutor.experienceYears} Years Teaching Experience</span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600 mt-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{tutor.location} (Radius: {tutor.serviceRadiusKm} km)</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Active Students: {tutor.activeStudents}</span>
              </div>
            </div>
          </div>

          {/* About & Teaching Philosophy */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Teaching Biography
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {tutor.bio}
            </p>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Pedagogical Approach & Methodology
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tutor.methodology}
              </p>
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Academic Degrees & Institutional Verification
            </h3>
            <div className="space-y-2.5">
              {tutor.education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white">
                  <GraduationCap className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-slate-500">
                      {edu.institution} · Graduated {edu.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects & Grade Levels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Subjects Taught
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tutor.subjects.map((sub) => (
                  <span key={sub} className="text-xs font-medium text-slate-800 bg-slate-100 rounded-md px-2.5 py-1">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Classes / Grades Supported
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tutor.gradesTaught.map((gr) => (
                  <span key={gr} className="text-xs font-medium text-slate-800 bg-slate-100 rounded-md px-2.5 py-1">
                    {gr}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Availability */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Standard Weekly Availability
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Available Teaching Days:</span>
                </div>
                <div className="text-xs text-slate-600">
                  {tutor.availability.days.join(', ')}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Typical Time Slots:</span>
                </div>
                <div className="text-xs text-slate-600">
                  {tutor.availability.timeSlots.join(', ')}
                </div>
              </div>
            </div>
          </div>

          {/* Sample Reviews */}
          {tutor.sampleReviews && tutor.sampleReviews.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Sample Student & Parent Feedback
              </h3>
              <div className="space-y-3">
                {tutor.sampleReviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/70">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{rev.authorName}</span>
                        <span className="text-[11px] text-slate-500">({rev.authorRole} · {rev.studentGrade})</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 italic">“{rev.comment}”</p>
                    <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified Demo/Session Booking · {rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-slate-900 tabular-nums">
                ₹{tutor.hourlyRate}
              </span>
              <span className="text-xs text-slate-500 font-normal">/ hour</span>
              <span className="text-xs text-slate-400 ml-2">
                (or ₹{tutor.monthlyPackageRate}/mo for 8 sessions)
              </span>
            </div>
            <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Complimentary 45-min in-home trial included</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestDemo(tutor);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Request In-Home Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
