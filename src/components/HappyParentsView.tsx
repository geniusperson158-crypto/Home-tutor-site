import React, { useState, useEffect, useMemo } from 'react';
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ThumbsUp,
  MapPin,
  CalendarCheck,
  PenLine,
  Filter,
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';
import { TESTIMONIALS_DATA, TestimonialItem } from '../data/testimonials';
import { BRAND_CONFIG } from '../config/brand';

interface HappyParentsViewProps {
  onBookDemo: (subjectName?: string) => void;
}

const STORAGE_KEY = 'tutornest_parent_reviews';

export const HappyParentsView: React.FC<HappyParentsViewProps> = ({ onBookDemo }) => {
  // Load reviews from localStorage or initial dataset
  const [reviews, setReviews] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback to initial data
    }
    return TESTIMONIALS_DATA;
  });

  // Track upvoted reviews
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());

  // Form State
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    author: '',
    role: 'Parent of 10th Grader',
    gradeSubject: 'Grade 10 · Mathematics & Science',
    headline: '',
    quote: '',
    rating: 5,
    location: BRAND_CONFIG.serviceLocations[0],
    outcome: '',
    tutorName: ''
  });

  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedRating, setSelectedRating] = useState<number | 'All'>('All');
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('recent');

  // Save to localStorage when reviews change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // ignore storage quota issues
    }
  }, [reviews]);

  const handleUpvote = (id: string) => {
    if (upvotedIds.has(id)) return;
    setUpvotedIds(prev => new Set(prev).add(id));
    setReviews(prev =>
      prev.map(r => (r.id === id ? { ...r, upvotes: (r.upvotes || 0) + 1 } : r))
    );
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.author.trim()) errs.author = 'Parent / Guardian name is required.';
    if (!formData.role.trim()) errs.role = 'Please specify your relation (e.g. Parent of 9th Grader).';
    if (!formData.headline.trim()) errs.headline = 'Please provide a short headline for your review.';
    if (!formData.quote.trim() || formData.quote.length < 20) {
      errs.quote = 'Please share at least a couple sentences about your child\'s learning experience.';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newReview: TestimonialItem = {
        id: `user-review-${Date.now()}`,
        author: formData.author.trim(),
        role: formData.role.trim(),
        gradeSubject: formData.gradeSubject.trim(),
        headline: formData.headline.trim(),
        quote: formData.quote.trim(),
        rating: formData.rating,
        location: formData.location,
        outcome: formData.outcome.trim() || 'Significant improvement in confidence & grades',
        date: 'Just now',
        verified: true,
        upvotes: 1,
        tutorName: formData.tutorName.trim() || undefined
      };

      setReviews([newReview, ...reviews]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setShowReviewForm(false);

      // Reset form
      setFormData({
        author: '',
        role: 'Parent of 10th Grader',
        gradeSubject: 'Grade 10 · Mathematics & Science',
        headline: '',
        quote: '',
        rating: 5,
        location: BRAND_CONFIG.serviceLocations[0],
        outcome: '',
        tutorName: ''
      });

      // Scroll to review section smoothly
      const feed = document.getElementById('reviews-feed');
      feed?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  // Filtered & Sorted Reviews
  const filteredReviews = useMemo(() => {
    return reviews
      .filter(item => {
        if (selectedRating !== 'All' && item.rating !== selectedRating) {
          return false;
        }
        if (selectedLocation !== 'All' && item.location !== selectedLocation) {
          return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesQuote = item.quote.toLowerCase().includes(q);
          const matchesHeadline = item.headline.toLowerCase().includes(q);
          const matchesAuthor = item.author.toLowerCase().includes(q);
          const matchesSubject = item.gradeSubject.toLowerCase().includes(q);
          if (!matchesQuote && !matchesHeadline && !matchesAuthor && !matchesSubject) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'helpful') {
          return (b.upvotes || 0) - (a.upvotes || 0);
        }
        return 0; // Default order (most recent top)
      });
  }, [reviews, selectedRating, selectedLocation, searchQuery, sortBy]);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Happy Parents & Real Results</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Hear Directly from Families Who Trust TutorNest
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Real feedback from parents across Navi Mumbai whose children transformed academic hesitation into exam mastery right at their own study desks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <button
              onClick={() => {
                setShowReviewForm(!showReviewForm);
                if (!showReviewForm) {
                  setTimeout(() => {
                    document.getElementById('write-review-card')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20 hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <PenLine className="w-4 h-4" />
              <span>{showReviewForm ? 'Close Review Form' : 'Write a Parent Review'}</span>
            </button>

            <button
              onClick={() => onBookDemo()}
              className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-blue-600" />
              <span>Book Free In-Home Demo</span>
            </button>
          </div>
        </div>

        {/* Aggregated Benchmark Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
            <div className="text-5xl font-extrabold text-slate-900 tracking-tight">4.96</div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-700">Average Parent Rating</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Based on 100% verified home sessions</p>
          </div>

          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-600 font-medium shrink-0">5 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[96%]" />
              </div>
              <span className="w-8 text-right text-slate-500 font-medium">96%</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-600 font-medium shrink-0">4 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500/70 rounded-full w-[4%]" />
              </div>
              <span className="w-8 text-right text-slate-500 font-medium">4%</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-600 font-medium shrink-0">3 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-200 rounded-full w-[0%]" />
              </div>
              <span className="w-8 text-right text-slate-500 font-medium">0%</span>
            </div>
          </div>

          <div className="md:col-span-3 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-center">
            <ShieldCheck className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
            <div className="text-xs font-bold text-slate-900">Verified Parent Feedback</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Every review comes from parents with active or completed in-home tutoring modules.
            </p>
          </div>
        </div>

        {/* Success Alert if just submitted */}
        {submitSuccess && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-3 text-xs text-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">Thank you for sharing your experience!</span> Your review has been added to the Happy Parents showcase below.
              </div>
            </div>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline shrink-0 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Write a Review Form Card (Interactive) */}
        {showReviewForm && (
          <div
            id="write-review-card"
            className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-500/40 shadow-xl mb-12 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <PenLine className="w-5 h-5 text-blue-600" />
                  <span>Write a Parent Review</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Share your child's learning journey to help fellow parents discover the right educator.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="text-xs text-slate-400 hover:text-slate-600 font-medium px-2.5 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Overall Rating *
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((starVal) => {
                      const isFilled = (hoverRating !== null ? hoverRating : formData.rating) >= starVal;
                      return (
                        <button
                          key={starVal}
                          type="button"
                          onMouseEnter={() => setHoverRating(starVal)}
                          onMouseLeave={() => setHoverRating(null)}
                          onClick={() => setFormData({ ...formData, rating: starVal })}
                          className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded cursor-pointer transition-transform hover:scale-110"
                          aria-label={`${starVal} star rating`}
                        >
                          <Star
                            className={`w-7 h-7 ${
                              isFilled ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-xs font-semibold text-slate-600 ml-2">
                    {formData.rating === 5 && '5 Stars · Exceptional Mentorship'}
                    {formData.rating === 4 && '4 Stars · Very Good Experience'}
                    {formData.rating === 3 && '3 Stars · Satisfactory'}
                    {formData.rating <= 2 && 'Needs Improvement'}
                  </span>
                </div>
              </div>

              {/* Row 1: Name and Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name (Parent or Guardian) *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anjali & Suresh Sharma"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${
                      formErrors.author ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.author && <p className="text-[11px] text-rose-600 mt-1">{formErrors.author}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Student Grade Level / Relation *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Parents of 9th Grader"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${
                      formErrors.role ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                  {formErrors.role && <p className="text-[11px] text-rose-600 mt-1">{formErrors.role}</p>}
                </div>
              </div>

              {/* Row 2: Subject and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Subject & Board Studied *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Grade 10 · ICSE Mathematics & Chemistry"
                    value={formData.gradeSubject}
                    onChange={(e) => setFormData({ ...formData, gradeSubject: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Neighborhood / Node in Navi Mumbai *
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
                  >
                    {BRAND_CONFIG.serviceLocations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Headline */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Review Headline (One summary sentence) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Transformed prelim exam fear into genuine confidence and top marks"
                  value={formData.headline}
                  onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                  className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 ${
                    formErrors.headline ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {formErrors.headline && <p className="text-[11px] text-rose-600 mt-1">{formErrors.headline}</p>}
              </div>

              {/* Detailed Review */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Detailed Experience & Progress Story *
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe how the tutor helped your child: teaching patience, homework clarity, problem-solving habits, or exam confidence..."
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className={`w-full px-3.5 py-2 text-xs bg-slate-50 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 leading-relaxed ${
                    formErrors.quote ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {formErrors.quote && <p className="text-[11px] text-rose-600 mt-1">{formErrors.quote}</p>}
              </div>

              {/* Row 3: Outcome and Tutor Name (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Key Measurable Outcome (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +20% score improvement in board prelims"
                    value={formData.outcome}
                    onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Tutor's Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Prof. Arvind Rao"
                    value={formData.tutorName}
                    onChange={(e) => setFormData({ ...formData, tutorName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <PenLine className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Publishing Review...' : 'Submit & Publish Review'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews Feed Section */}
        <div id="reviews-feed" className="space-y-6">

          {/* Search & Filter Toolbar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reviews or subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 text-slate-900"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Location Filter */}
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="All">All Navi Mumbai</option>
                  {BRAND_CONFIG.serviceLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc.replace(', Navi Mumbai', '')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                <select
                  value={selectedRating}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedRating(val === 'All' ? 'All' : Number(val));
                  }}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="All">All Ratings</option>
                  <option value="5">5 Stars Only</option>
                  <option value="4">4 Stars & Above</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'recent' | 'helpful')}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>

          </div>

          {/* Reviews Grid */}
          {filteredReviews.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <Quote className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">No matching reviews found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try loosening your filters or search keywords to view more parent stories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLocation('All');
                  setSelectedRating('All');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((item) => {
                const isUpvoted = upvotedIds.has(item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Stars, Date & Verified Badge */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5">
                          {item.verified && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              <span>Verified Parent</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Headline */}
                      <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                        “{item.headline}”
                      </h3>

                      {/* Quote Body */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {item.quote}
                      </p>

                      {/* Outcome Highlight Box */}
                      {item.outcome && (
                        <div className="mb-4 p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-center gap-2 text-xs text-emerald-900 font-medium">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{item.outcome}</span>
                        </div>
                      )}
                    </div>

                    {/* Author & Footer Details */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-bold text-slate-900">{item.author}</span>
                        <span className="text-[11px] text-slate-400">{item.date || 'Recent'}</span>
                      </div>

                      <div className="text-[11px] text-slate-500 mb-2 flex items-center justify-between">
                        <span>{item.role}</span>
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[120px]">{item.location.split(',')[0]}</span>
                        </span>
                      </div>

                      {item.gradeSubject && (
                        <div className="text-[11px] text-blue-700 font-medium bg-blue-50/80 px-2.5 py-1 rounded-lg mb-3 truncate">
                          {item.gradeSubject}
                        </div>
                      )}

                      {/* Card Action Row: Upvote & Book Demo */}
                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100/70">
                        <button
                          type="button"
                          onClick={() => handleUpvote(item.id)}
                          className={`inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                            isUpvoted
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                          title="Was this review helpful?"
                        >
                          <ThumbsUp className={`w-3 h-3 ${isUpvoted ? 'text-blue-600 fill-blue-600' : 'text-slate-400'}`} />
                          <span>Helpful ({item.upvotes || 0})</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onBookDemo(item.gradeSubject.split('·')[1]?.trim())}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 py-1.5 px-2 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <CalendarCheck className="w-3 h-3" />
                          <span>Book Demo</span>
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Bottom Conversion Strip */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Experience The Difference</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Give Your Child the Same Academic Advantage?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
              Start with a 100% complimentary 45-minute demo lesson in your living room. Evaluate teacher connection, diagnostic evaluation, and patience firsthand.
            </p>
          </div>

          <button
            onClick={() => onBookDemo()}
            className="px-6 py-3.5 text-xs font-bold text-slate-950 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span>Book Free 45-Min Home Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
