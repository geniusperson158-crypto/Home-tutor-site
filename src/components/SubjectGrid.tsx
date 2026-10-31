import React from 'react';
import {
  Calculator,
  Microscope,
  Atom,
  FlaskConical,
  Dna,
  BookOpen,
  Code2,
  Globe2,
  Award,
  ArrowRight,
  CalendarCheck
} from 'lucide-react';
import { SUBJECTS_DATA } from '../data/subjects';

interface SubjectGridProps {
  onSelectSubject?: (subjectName: string) => void;
  onViewAllSubjects: () => void;
  onBookDemo?: (subjectName: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Calculator,
  Microscope,
  Atom,
  FlaskConical,
  Dna,
  BookOpen,
  Code2,
  Globe2,
  Award
};

export const SubjectGrid: React.FC<SubjectGridProps> = ({
  onSelectSubject,
  onViewAllSubjects,
  onBookDemo
}) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Comprehensive Academic Scope
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Explore Core Subjects & Curricula
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              From foundational grade school concepts to advanced placement and competitive examinations, find expert home tutors tailored to every learning stage.
            </p>
          </div>

          <button
            onClick={onViewAllSubjects}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap group shrink-0"
          >
            <span>View All Curricula</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS_DATA.map((subject) => {
            const Icon = ICON_MAP[subject.iconName] || BookOpen;

            return (
              <div
                key={subject.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/5 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {subject.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 mb-4">
                    {subject.shortDescription}
                  </p>

                  {/* Unboxed Metadata (Zero-pill discipline) */}
                  <div className="text-xs text-slate-500 mb-5 flex flex-wrap items-center gap-1.5">
                    <span>{subject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>CBSE, ICSE & State Board</span>
                  </div>
                </div>

                {/* Card Standards Info & Book Demo Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>CBSE, ICSE & State</span>
                    <span className="text-slate-400">Grades 1 – 12</span>
                  </div>

                  <div className="pt-0.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookDemo?.(subject.name);
                      }}
                      className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-xs hover:shadow flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>Book Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
