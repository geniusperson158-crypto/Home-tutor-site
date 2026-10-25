import React from 'react';
import { ShieldCheck, Users, GraduationCap, HeartHandshake, Info } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      label: "Verified Tutors",
      value: "70+",
      subtext: "Background-checked & credential-verified",
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50"
    },
    {
      label: "Students Supported",
      value: "800+",
      subtext: "Across K-12 & college prep tracks",
      icon: Users,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      label: "Subjects & Curricula",
      value: "10+",
      subtext: "STEM, humanities & competitive test prep",
      icon: GraduationCap,
      color: "text-violet-600 bg-violet-50"
    },
    {
      label: "Parent Satisfaction",
      value: "98.6%",
      subtext: "Consistent 4.9+ average session rating",
      icon: HeartHandshake,
      color: "text-emerald-600 bg-emerald-50"
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Notice (Transparent demo metrics disclaimer as requested) */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <h2 className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
            Platform Benchmarks & Standards
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Sample platform milestones · Demonstrative service figures</span>
          </div>
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
