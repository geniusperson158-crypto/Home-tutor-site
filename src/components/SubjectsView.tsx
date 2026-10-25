import React, { useState } from 'react';
import {
  Calculator,
  Microscope,
  Atom,
  FlaskConical,
  Dna,
  BookOpen,
  Code2,
  Globe2,
  Award
} from 'lucide-react';
import { SUBJECTS_DATA } from '../data/subjects';

interface SubjectsViewProps {
  onSelectSubjectAndExplore?: (subjectName: string) => void;
  onRequestGeneralDemo: () => void;
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

export const SubjectsView: React.FC<SubjectsViewProps> = ({
  onSelectSubjectAndExplore,
  onRequestGeneralDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'STEM', 'Humanities', 'Test Prep'];

  const filtered = selectedCategory === 'All'
    ? SUBJECTS_DATA
    : SUBJECTS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="py-12 bg-slate-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Curriculum Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Subjects & Curricula We Teach
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Our vetted educators cover foundational school topics through board exam prep across Navi Mumbai. Explore syllabus coverage and key topics below.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((subject) => {
            const Icon = ICON_MAP[subject.iconName] || BookOpen;

            return (
              <div
                key={subject.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {subject.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {subject.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-slate-100 mb-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Core Syllabus Topics
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {subject.subtopics.map((t) => (
                        <span key={t} className="text-[11px] font-medium text-slate-700 bg-slate-100 rounded-md px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>CBSE · ICSE · State Board · IB</span>
                  <span className="text-slate-400">Grades 1 – 12</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Consultation Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              Need Curriculum Guidance?
            </div>
            <h2 className="text-2xl font-bold">Not sure which level your student needs?</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              We offer free diagnostic syllabus mapping. Speak with an academic advisor who will review past report cards and recommend the ideal tutor.
            </p>
          </div>

          <button
            onClick={onRequestGeneralDemo}
            className="px-6 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Request Free Assessment
          </button>
        </div>

      </div>
    </div>
  );
};
