import React from 'react';
import { ArrowRight, IndianRupee, Clock, ShieldCheck, Award } from 'lucide-react';

interface TutorRegistrationCTAProps {
  onJoinAsTutor: () => void;
}

export const TutorRegistrationCTA: React.FC<TutorRegistrationCTAProps> = ({ onJoinAsTutor }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Subtle radial backdrop accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Educator Network & Career Growth
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Great Teachers Deserve Great Opportunities.
            </h2>

            <p className="text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
              Are you an experienced educator, postgraduate scholar, or passionate subject specialist? Join our community of elite in-home tutors across Navi Mumbai. Earn premium hourly fees, set your own calendar, and teach motivated students right in your neighborhood.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Earn ₹600 - ₹1,200+ per Hour</div>
                  <div className="text-xs text-slate-400">Keep 100% transparent earnings with direct weekly payouts</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Full Schedule Autonomy</div>
                  <div className="text-xs text-slate-400">Choose your hours, student volume, and neighborhood radius</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Safety & Client Verification</div>
                  <div className="text-xs text-slate-400">All student families are identity-confirmed prior to lessons</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Teaching Resources & Support</div>
                  <div className="text-xs text-slate-400">Access curriculum rubrics, past papers, and diagnostic tools</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center">
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-sm font-bold text-white mb-2">Ready to inspire students?</div>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Applications take approximately 5 minutes. Applications reviewed within 48 hours.
              </p>
              <button
                onClick={onJoinAsTutor}
                className="w-full py-3.5 px-5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Join as a Tutor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
