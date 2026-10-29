import React from 'react';
import { ShieldCheck, MapPin, Calendar, CheckCircle2, ArrowRight, BookOpen, Calculator, Microscope, Atom, FlaskConical, Code2 } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
  onViewProfile?: (tutor: Tutor) => void;
  onRequestDemo: (tutor: Tutor) => void;
}

const getSubjectIcon = (subjectName: string) => {
  const s = subjectName.toLowerCase();
  if (s.includes('math') || s.includes('calculus')) return Calculator;
  if (s.includes('physic')) return Atom;
  if (s.includes('chem')) return FlaskConical;
  if (s.includes('bio')) return Microscope;
  if (s.includes('comp') || s.includes('cod')) return Code2;
  return BookOpen;
};

export const TutorCard: React.FC<TutorCardProps> = ({ tutor, onRequestDemo }) => {
  const Icon = getSubjectIcon(tutor.subjects[0] || 'General');

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/50 transition-all overflow-hidden flex flex-col justify-between">
      
      {/* Top Header & Academic Scope */}
      <div className="p-5 sm:p-6">
        
        <div className="flex items-start gap-4 mb-4">
          {/* Subject Icon Box */}
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100/80 shadow-2xs">
            <Icon className="w-7 h-7" />
          </div>

          {/* Academic Scope Title & Grades */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100/70">
                1-on-1 Academic Program
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 truncate">
              {tutor.subjects.slice(0, 2).join(' & ')} Tutoring
            </h3>

            <p className="text-xs text-slate-500 mt-0.5">
              CBSE · ICSE · State Board · IB Curriculum
            </p>
          </div>
        </div>

        {/* Classes & Grades Covered */}
        <div className="mb-4">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Supported Grades & Classes
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {tutor.gradesTaught.map((grade) => (
              <span key={grade} className="text-slate-700 font-medium bg-slate-100/90 rounded-md px-2 py-0.5">
                {grade}
              </span>
            ))}
          </div>
        </div>

        {/* Curriculum Focus Areas */}
        <div className="mb-4">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Core Curriculum Focus
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {tutor.subjects.map((sub) => (
              <span key={sub} className="text-blue-800 font-medium bg-blue-50/70 rounded-md px-2 py-0.5 border border-blue-100/60">
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Quality Guarantee Details */}
        <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-medium text-slate-700">Verified & Background-Checked Educator Assigned</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">Available In-Home in {tutor.location} & nearby nodes</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">
              Weekly Schedule: {tutor.availability.days.slice(0, 3).join(', ')}
            </span>
          </div>
        </div>

      </div>

      {/* Card Footer: Demo Class Action */}
      <div className="p-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Free 45-Min Trial Demo</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Zero commitment evaluation
          </div>
        </div>

        <button
          onClick={() => onRequestDemo(tutor)}
          className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 group"
        >
          <span>Book Free Demo</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

    </article>
  );
};
