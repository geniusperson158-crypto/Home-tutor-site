import React from 'react';
import { ShieldCheck, HeartHandshake, Award, BookCheck, Users2, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface AboutViewProps {
  onFindTutors: () => void;
  onJoinAsTutor: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onFindTutors, onJoinAsTutor }) => {
  const verificationPillars = [
    {
      title: "01. Academic Credential Verification",
      description: "We verify bachelor's, master's, and doctoral degrees directly through official university registrar transcripts and degree verification databases."
    },
    {
      title: "02. Comprehensive Background Clearance",
      description: "Every educator undergoes nationwide criminal background screening and identity confirmation before stepping through a family's front door."
    },
    {
      title: "03. 1-on-1 Pedagogical Audition",
      description: "Subject matter expertise is only half the equation. Our academic leads evaluate patient communication, diagnostic questioning, and motivational engagement."
    },
    {
      title: "04. Continuous Student Feedback Auditing",
      description: "Parents submit progress evaluations after weekly sessions. Tutors must maintain an active 4.8+ rating to remain active on the platform."
    }
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Our Mission & Pedagogy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Building Lifelong Academic Confidence Right at Your Table
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            {BRAND_CONFIG.name} was founded on a simple conviction: learning is intimate and deeply personal. When an exceptional, patient educator sits alongside a student in their comfortable home environment, confusion transforms into genuine curiosity and mastery.
          </p>
        </div>

        {/* 2-Column Story & Photographic Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Human-Centered Education
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Why In-Home Tutoring Remains Unrivaled
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In large classrooms, teachers are forced to teach to the median pace. Bright students get bored, while struggling students mask their hesitation out of social anxiety.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our 1-on-1 model eliminates distractions. Tutors observe pencil grip, micro-hesitations on calculation steps, and body language cues that no automated software or screen can match.
            </p>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Zero Commute Fatigue
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Tailored Homework Pacing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Direct Parent Dialogue
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
            <img
              src="/src/assets/images/about_tutoring_session_1792831686478.jpg"
              alt="Male educator mentoring high school student at study desk"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* 4 Pillars of Safety & Verification */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              Our Safety Commitment
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              The 4-Pillar Tutor Verification Standard
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Only approximately 8% of tutor applicants are approved for in-home student placements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verificationPillars.map((pillar, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 text-center">
          <div className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Uncompromising Trust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We treat your home and your child's academic future with the highest degree of integrity and security.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 mx-auto flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Empathetic Mentorship</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We look beyond rote test scores to celebrate growth, nurture self-belief, and inspire independent inquiry.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 mx-auto flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Measurable Excellence</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every lesson moves toward tangible academic milestones tracked through weekly transparent parent reports.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Experience the TutorNest Difference
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6">
            Schedule a free 45-minute home trial class and see how quickly your child connects with the right mentor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onFindTutors}
              className="px-6 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Browse Verified Tutors
            </button>
            <button
              onClick={onJoinAsTutor}
              className="px-6 py-3 text-xs font-semibold text-white bg-blue-900/60 hover:bg-blue-900 border border-blue-400/40 rounded-xl transition-all cursor-pointer"
            >
              Apply to Teach
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
