import React, { useState, useMemo } from 'react';
import { Search, Filter, X, RotateCcw, AlertCircle, ArrowUpDown } from 'lucide-react';
import { Tutor } from '../types';
import { TUTORS_DATA } from '../data/tutors';
import { SUBJECTS_DATA } from '../data/subjects';
import { BRAND_CONFIG } from '../config/brand';
import { TutorCard } from './TutorCard';

interface FindTutorsViewProps {
  initialSubject?: string;
  initialGrade?: string;
  initialLocation?: string;
  initialMode?: string;
  onViewProfile?: (tutor: Tutor) => void;
  onRequestDemo: (tutor: Tutor) => void;
}

export const FindTutorsView: React.FC<FindTutorsViewProps> = ({
  initialSubject = '',
  initialGrade = '',
  initialLocation = '',
  initialMode = 'all',
  onRequestDemo
}) => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    subject: initialSubject,
    grade: initialGrade,
    location: initialLocation,
    mode: initialMode || 'all',
    minExperience: 0,
    sortBy: 'rating'
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & sort logic (no fee filters or rates)
  const filteredTutors = useMemo(() => {
    return TUTORS_DATA.filter((tutor) => {
      // Search query matches subject or grade
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesSubject = tutor.subjects.some(s => s.toLowerCase().includes(q));
        const matchesGrade = tutor.gradesTaught.some(g => g.toLowerCase().includes(q));
        if (!matchesSubject && !matchesGrade) return false;
      }

      // Subject filter
      if (filters.subject && !tutor.subjects.includes(filters.subject)) {
        return false;
      }

      // Grade filter
      if (filters.grade && !tutor.gradesTaught.includes(filters.grade)) {
        return false;
      }

      // Location filter
      if (filters.location && tutor.location !== filters.location) {
        return false;
      }

      // Mode filter
      if (filters.mode !== 'all') {
        if (filters.mode === 'home' && tutor.mode === 'online') return false;
        if (filters.mode === 'online' && tutor.mode === 'home') return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'experience') return b.experienceYears - a.experienceYears;
      return b.rating - a.rating;
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      subject: '',
      grade: '',
      location: '',
      mode: 'all',
      minExperience: 0,
      sortBy: 'rating'
    });
  };

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.subject !== '' ||
    filters.grade !== '' ||
    filters.location !== '' ||
    filters.mode !== 'all';

  return (
    <div className="py-10 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Context */}
        <div className="mb-8">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Curriculum & Grade Tutoring
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Subjects & Grade Tutoring Programs
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Browse structured 1-on-1 home tutoring programs across Navi Mumbai (Vashi, Nerul, Kharghar, Seawoods, Belapur & more). Select your subject and grade to request an in-home trial session.
          </p>
        </div>

        {/* Search Bar & Primary Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Main Keyword Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by subject (e.g., Mathematics, Physics, Chemistry) or grade..."
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-slate-800 placeholder:text-slate-400"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters({ ...filters, searchQuery: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Clear search input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Selector & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <label htmlFor="sort-programs" className="whitespace-nowrap">Sort by:</label>
              <select
                id="sort-programs"
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600 cursor-pointer"
              >
                <option value="rating">Recommended Programs</option>
                <option value="experience">Advanced Curriculum Level</option>
              </select>
            </div>

            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-1.5 cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && `(Active)`}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Layout: Sidebar Filters + Program Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filter Sidebar (Desktop & Mobile Drawer) */}
          <aside className={`lg:col-span-1 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sticky top-24 space-y-6 shadow-xs">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Filter className="w-4 h-4 text-blue-600" />
                  <span>Refine Programs</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Subject Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Subject
                </label>
                <select
                  value={filters.subject}
                  onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-600 cursor-pointer"
                >
                  <option value="">All Subjects</option>
                  {SUBJECTS_DATA.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Grade Level */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Class / Grade Level
                </label>
                <select
                  value={filters.grade}
                  onChange={(e) => setFilters({ ...filters, grade: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-600 cursor-pointer"
                >
                  <option value="">All Classes</option>
                  <option value="Grade 1-5">Grade 1-5 (Primary)</option>
                  <option value="Grade 6-8">Grade 6-8 (Middle School)</option>
                  <option value="Grade 8-10">Grade 8-10 (Early High)</option>
                  <option value="Grade 9-10">Grade 9-10 (High School)</option>
                  <option value="Grade 11-12">Grade 11-12 (Senior High)</option>
                  <option value="AP / SAT Prep">AP & SAT Prep</option>
                </select>
              </div>

              {/* Service Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Location / Neighborhood
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-600 cursor-pointer"
                >
                  <option value="">All Navi Mumbai Nodes</option>
                  {BRAND_CONFIG.serviceLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tutoring Mode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Learning Mode
                </label>
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setFilters({ ...filters, mode: 'all' })}
                    className={`py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      filters.mode === 'all'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilters({ ...filters, mode: 'home' })}
                    className={`py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      filters.mode === 'home'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilters({ ...filters, mode: 'online' })}
                    className={`py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      filters.mode === 'online'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Online
                  </button>
                </div>
              </div>

              {/* Quality & Safety Check */}
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="font-semibold text-slate-700">Tutor Verification Guarantee</div>
                <p className="text-[11px] leading-relaxed">
                  All tutors assigned to students pass academic transcript audits, safety background vetting, and pedagogical evaluations.
                </p>
              </div>

            </div>
          </aside>

          {/* Main Results Column */}
          <main className="lg:col-span-3">
            
            {/* Results Count & Active Filters Summary */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="text-xs font-semibold text-slate-600">
                Showing <span className="text-slate-900 font-bold tabular-nums">{filteredTutors.length}</span> academic tutoring programs
              </div>
            </div>

            {/* Programs Grid */}
            {filteredTutors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTutors.map((tutor) => (
                  <TutorCard
                    key={tutor.id}
                    tutor={tutor}
                    onRequestDemo={onRequestDemo}
                  />
                ))}
              </div>
            ) : (
              /* Friendly Empty State */
              <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  No programs match your exact criteria
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  Try broadening your location radius or selecting another subject or grade to explore all available tutoring options.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
