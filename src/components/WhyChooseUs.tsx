import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  Clock,
  BadgeDollarSign,
  TrendingUp,
  MessageSquare,
  MapPin,
  Home
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Certified & Vetted Educators",
      description: "Rigorous 4-tier screening, academic credential verification, and safety vetting for total peace of mind.",
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Personalized One-to-One Focus",
      description: "Targeted curriculum pace customized to your student's unique cognitive strengths, learning style, and school syllabus.",
      icon: UserCheck,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "Flexible Scheduling",
      description: "Set tutoring hours that integrate smoothly with extracurriculars, sports, and family life on weekdays or weekends.",
      icon: Clock,
      color: "text-sky-600 bg-sky-50"
    },
    {
      title: "Customized Learning Plans",
      description: "Tailored weekly schedule and milestone curriculum benchmarks designed around your student's school exams with a complimentary demo.",
      icon: BadgeDollarSign,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Progress-Focused Teaching",
      description: "Systematic pre-testing, monthly milestone benchmarks, and past-exam drills to measure concrete academic gains.",
      icon: TrendingUp,
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Parent-Friendly Communication",
      description: "Detailed session summaries emailed directly after every class, keeping parents actively informed without micro-managing.",
      icon: MessageSquare,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Local Neighborhood Matching",
      description: "Connect with certified mentors based in your local district who understand your school district's specific grading rubrics.",
      icon: MapPin,
      color: "text-rose-600 bg-rose-50"
    },
    {
      title: "Comfortable Home Lessons",
      description: "Eliminate stressful commute traffic. Students learn in their safe, focused home study environment with zero travel downtime.",
      icon: Home,
      color: "text-teal-600 bg-teal-50"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            The TutorNest Standard
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Discerning Families Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We hold ourselves to rigorous academic and safety standards so you can focus on watching your child thrive.
          </p>
        </div>

        {/* Bento Grid with Asymmetric Visual Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Proof Strip with Photography */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              In-Home Learning Experience
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Real Tabletop Mentorship, Focused Results
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Unlike generic online chatrooms or crowded coaching factories, our home tutors sit right alongside the student. They catch body language clues, notice when hesitation occurs, and guide the pen step-by-step through challenging equations.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold">Personalized Diagnostic Test</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-semibold">Weekly Parent Debriefs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="font-semibold">Zero Travel Stress</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[260px] bg-slate-100">
            <img
              src="/src/assets/images/about_tutoring_session_1792831686478.jpg"
              alt="Male tutor and high school student working attentively through chemistry homework at a warm study desk"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
