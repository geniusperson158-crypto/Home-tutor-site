import { Star, Quote, CheckCircle, ArrowRight, PenLine } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

interface TestimonialsSectionProps {
  onViewAllReviews?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onViewAllReviews }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Parent & Student Experiences
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Stories of Confidence & Progress
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              See how structured, patient home tutoring turned academic frustration into genuine mastery.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onViewAllReviews && (
              <button
                onClick={onViewAllReviews}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 px-3.5 py-2 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>Happy Parents & Write Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/60 rounded-3xl p-7 border border-slate-200/90 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Headline */}
                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                  “{item.headline}”
                </h3>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author & Tangible Outcome */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="text-xs font-bold text-slate-900">
                  {item.author}
                </div>
                <div className="text-xs text-slate-500">
                  {item.role} · {item.location}
                </div>
                <div className="text-[11px] text-blue-700 font-semibold mt-1">
                  {item.gradeSubject}
                </div>

                {/* Outcome badge */}
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 rounded-lg px-2.5 py-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
