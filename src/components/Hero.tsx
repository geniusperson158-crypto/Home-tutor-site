import React, { useState } from 'react';
import { MapPin, BookOpen, Layers, ShieldCheck, CheckCircle2, Star, ArrowRight, Phone, Calendar } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { SUBJECTS_DATA } from '../data/subjects';

interface HeroProps {
  onSearch: (filters: { grade: string; subject: string; location: string; mode: string }) => void;
  onExploreSubjects: () => void;
  onRequestDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreSubjects, onRequestDemo }) => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedMode, setSelectedMode] = useState('all');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      grade: selectedGrade,
      subject: selectedSubject,
      location: selectedLocation,
      mode: selectedMode,
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Desktop Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Prop & Search Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Subtle editorial kicker (NO pill badge!) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Certified 1-on-1 In-Home Learning</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Exclusively Across Navi Mumbai</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5 text-balance">
              {BRAND_CONFIG.tagline}
            </h1>

            {/* Supporting Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {BRAND_CONFIG.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href={`tel:${BRAND_CONFIG.contact.phone}`}
                onClick={() => {
                  window.location.href = `tel:${BRAND_CONFIG.contact.phone}`;
                }}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer flex items-center gap-2 group"
                title={`Call ${BRAND_CONFIG.contact.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>

              <button
                type="button"
                onClick={onRequestDemo}
                className="ml-3 sm:ml-4 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Compact Search Panel */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/40 p-4 sm:p-5">
              <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Grade Level */}
                <div className="relative">
                  <label htmlFor="hero-grade" className="sr-only">Grade Level</label>
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition-colors">
                    <Layers className="w-4 h-4 text-slate-400 shrink-0" />
                    <select
                      id="hero-grade"
                      value={selectedGrade}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedGrade(val);
                        onSearch({ grade: val, subject: selectedSubject, location: selectedLocation, mode: selectedMode });
                      }}
                      className="w-full bg-transparent text-xs font-medium text-slate-800 focus:outline-none cursor-pointer"
                    >
                      <option value="">All Classes / Grades</option>
                      <option value="Grade 1-5">Primary (Grades 1-5)</option>
                      <option value="Grade 6-8">Middle School (6-8)</option>
                      <option value="Grade 9-10">High School (9-10)</option>
                      <option value="Grade 11-12">Senior High (11-12)</option>
                      <option value="AP / SAT Prep">College & Test Prep</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <label htmlFor="hero-subject" className="sr-only">Subject</label>
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition-colors">
                    <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                    <select
                      id="hero-subject"
                      value={selectedSubject}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedSubject(val);
                        onSearch({ grade: selectedGrade, subject: val, location: selectedLocation, mode: selectedMode });
                      }}
                      className="w-full bg-transparent text-xs font-medium text-slate-800 focus:outline-none cursor-pointer"
                    >
                      <option value="">All Subjects</option>
                      {SUBJECTS_DATA.map((sub) => (
                        <option key={sub.id} value={sub.name}>
                          {sub.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div className="relative">
                  <label htmlFor="hero-location" className="sr-only">Location</label>
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition-colors">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <select
                      id="hero-location"
                      value={selectedLocation}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedLocation(val);
                        onSearch({ grade: selectedGrade, subject: selectedSubject, location: val, mode: selectedMode });
                      }}
                      className="w-full bg-transparent text-xs font-medium text-slate-800 focus:outline-none cursor-pointer"
                    >
                      <option value="">All Navi Mumbai Nodes</option>
                      {BRAND_CONFIG.serviceLocations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>

              {/* Mode switch & guarantee snippet */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Mode:</span>
                  <div className="inline-flex rounded-lg bg-slate-100 p-0.5">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMode('all');
                        onSearch({ grade: selectedGrade, subject: selectedSubject, location: selectedLocation, mode: 'all' });
                      }}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        selectedMode === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Any
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMode('home');
                        onSearch({ grade: selectedGrade, subject: selectedSubject, location: selectedLocation, mode: 'home' });
                      }}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        selectedMode === 'home' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      In-Home Only
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMode('online');
                        onSearch({ grade: selectedGrade, subject: selectedSubject, location: selectedLocation, mode: 'online' });
                      }}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        selectedMode === 'online' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Online
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Background-Checked</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero Commitment Demo</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Visual with layered floating cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-blue-900/10 bg-slate-100 aspect-[4/3] sm:aspect-[16/10] lg:aspect-square flex items-center justify-center">
              
              <img
                src="/src/assets/images/hero_home_tutoring_1792831684006.jpg"
                alt="Professional female tutor patiently guiding a focused middle school student with math books at a comfortable home study desk"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Gradient Scrim for card legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card 1: Top Right - 45-min Free Demo */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-100 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    45m
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">Free Home Demo</div>
                    <div className="text-[11px] text-slate-500">Test compatibility first</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Bottom Left - Top Rated Mentor */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-100 shadow-xl max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <span>4.96 / 5.0 Rating</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      Based on 4,800+ parent session reviews
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
