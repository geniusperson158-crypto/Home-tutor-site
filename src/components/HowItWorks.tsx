import React, { useState } from 'react';
import { ClipboardList, CalendarCheck, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onFindTutor?: () => void;
  onBecomeTutor: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBecomeTutor }) => {
  const [activeTab, setActiveTab] = useState<'parents' | 'tutors'>('parents');

  const parentSteps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "Tell Us What You Need",
      description: "Specify your student's grade, curriculum, target subjects, and home location to filter matched tutors."
    },
    {
      num: "02",
      icon: CalendarCheck,
      title: "Connect & Schedule a Demo",
      description: "Book an introductory 45-minute in-home demo class to evaluate teaching style and compatibility firsthand."
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Start Personalized Learning",
      description: "Begin structured weekly sessions with custom learning milestones and transparent parent progress reports."
    }
  ];

  const tutorSteps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "Submit Your Application",
      description: "Share your academic degrees, past teaching experience, specialized subjects, and preferred service neighborhoods."
    },
    {
      num: "02",
      icon: CalendarCheck,
      title: "Pass Vetting & Audition",
      description: "Our academic committee verifies credentials and conducts a short pedagogical lesson evaluation."
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Receive Local Inquiries",
      description: "Get matched with committed local students, set your own availability, and teach right in your community."
    }
  ];

  const currentSteps = activeTab === 'parents' ? parentSteps : tutorSteps;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Clear, Frictionless Process
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How TutorNest Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A simple, secure path from initial inquiry to measurable academic achievement right at home.
          </p>

          {/* Interactive Audience Switcher (Clean segmented button controls) */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl mt-6 border border-slate-200/60">
            <button
              onClick={() => setActiveTab('parents')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'parents'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Parents & Students
            </button>
            <button
              onClick={() => setActiveTab('tutors')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tutors'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Aspiring Tutors
            </button>
          </div>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {currentSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold text-blue-600/40 tracking-tight tabular-nums">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Step {idx + 1} of {currentSteps.length}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        {activeTab === 'tutors' && (
          <div className="mt-12 text-center">
            <button
              onClick={onBecomeTutor}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
            >
              <span>Start Tutor Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
