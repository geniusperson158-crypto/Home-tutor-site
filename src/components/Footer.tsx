import React from 'react';
import { GraduationCap, Phone, Mail, Clock, Shield, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { NavPage } from './Navbar';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenTutorRegister: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenTutorRegister,
  onOpenBooking,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {BRAND_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Connecting families and students with verified, top-tier home tutors for personalized, stress-free learning right at your doorstep.
            </p>

            {/* WhatsApp Direct CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND_CONFIG.contact.whatsapp}?text=Hi%20TutorNest,%20I%20am%20interested%20in%20a%20home%20tutor%20for%20my%20child.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-xl transition-colors"
              >
                <svg
                  className="w-4 h-4 text-emerald-400 shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Chat with Advisor on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Subjects & Curricula
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Subjects & Opportunities */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Curricula & Tutors
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mathematics & Calculus
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Physics & Chemistry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AP & SAT Preparation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  English & Reading
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTutorRegister}
                  className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer pt-1 inline-block"
                >
                  Apply as a Tutor →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Hours
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{BRAND_CONFIG.contact.serviceHours}</span>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>All tutors pass background checks prior to in-home placement.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {BRAND_CONFIG.name} Learning Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={onOpenBooking}
              className="hover:text-blue-400 transition-colors cursor-pointer font-medium"
            >
              Request Free Trial
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
