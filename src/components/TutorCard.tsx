import React from 'react';
import { Star, ShieldCheck, MapPin, Calendar, Check, GraduationCap } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
  onViewProfile: (tutor: Tutor) => void;
  onRequestDemo: (tutor: Tutor) => void;
}

export const TutorCard: React.FC<TutorCardProps> = ({ tutor, onViewProfile, onRequestDemo }) => {
  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/50 transition-all overflow-hidden flex flex-col justify-between">
      
      {/* Top Header & Portrait */}
      <div className="p-5 sm:p-6">
        
        <div className="flex items-start gap-4 mb-4">
          
          {/* Portrait with Fallback */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
            <img
              src={tutor.photoUrl}
              alt={tutor.name}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-blue-700 -z-10">
              <GraduationCap className="w-8 h-8" />
            </div>
            {/* Verified icon overlay */}
            {tutor.verified && (
              <div
                className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs"
                title="Verified & Background Checked Educator"
              >
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            )}
          </div>

          {/* Name & Academic Credentials */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {tutor.name}
              </h3>
            </div>

            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5" title={tutor.title}>
              {tutor.title}
            </p>

            {/* Unboxed Metadata (Zero-Pill Discipline) */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
              <div className="flex items-center gap-1 font-semibold text-slate-900">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="tabular-nums">{tutor.rating.toFixed(2)}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="tabular-nums text-slate-500">
                {tutor.reviewCount} reviews (sample)
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="tabular-nums font-medium text-slate-700">
                {tutor.experienceYears} yrs exp
              </span>
            </div>
          </div>
        </div>

        {/* Subjects list (Clean unboxed tags with subtle separators) */}
        <div className="mb-4">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Specialized Subjects
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {tutor.subjects.map((sub, idx) => (
              <span key={sub} className="text-slate-700 font-medium bg-slate-100/90 rounded-md px-2 py-0.5">
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Bio Snippet */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {tutor.bio}
        </p>

        {/* Location & Tutoring Mode */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{tutor.location} (Within {tutor.serviceRadiusKm} km)</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">
              Available: {tutor.availability.days.slice(0, 2).join(', ')} & more
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Mode: {tutor.mode === 'hybrid' ? 'In-Home & Online' : tutor.mode === 'home' ? 'In-Home Tutoring' : 'Online'}</span>
          </div>
        </div>

      </div>

      {/* Card Footer: Pricing & Action Buttons */}
      <div className="p-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg sm:text-xl font-extrabold text-slate-900 tabular-nums">
              ₹{tutor.hourlyRate}
            </span>
            <span className="text-xs text-slate-500 font-normal">/ hour</span>
          </div>
          <div className="text-[11px] text-slate-400">
            pkg from ₹{tutor.monthlyPackageRate}/mo
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewProfile(tutor)}
            className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            View Profile
          </button>
          <button
            onClick={() => onRequestDemo(tutor)}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            Request Demo
          </button>
        </div>
      </div>

    </article>
  );
};
