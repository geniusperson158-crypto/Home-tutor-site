import React, { useState } from 'react';
import { GraduationCap, Menu, X, User } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export type NavPage = 'home' | 'find-tutors' | 'subjects' | 'how-it-works' | 'about-us' | 'contact';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenBooking: () => void;
  onOpenTutorRegister: () => void;
  onOpenAuth: () => void;
  isLoggedIn?: boolean;
  currentUser?: { name: string; role: 'parent' | 'tutor' } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenTutorRegister,
  onOpenAuth,
  isLoggedIn = false,
  currentUser = null
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: NavPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Subjects', page: 'subjects' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand Wordmark (Single text & logo element, whitespace-nowrap) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md cursor-pointer whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              {BRAND_CONFIG.name}
            </span>
          </button>

          {/* Zone 2: 4-5 Clean single-line text links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-blue-700 font-semibold'
                      : 'hover:text-slate-950 text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Find Tutor primary CTA + Secondary affordances) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenTutorRegister}
              className="text-xs font-semibold text-slate-600 hover:text-blue-700 px-3 py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Become a Tutor
            </button>

            {isLoggedIn && currentUser ? (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span className="truncate max-w-[100px]">{currentUser.name}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="text-xs font-medium text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                Sign In
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer whitespace-nowrap shrink-0"
            >
              Find a Tutor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                  currentPage === link.page
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTutorRegister();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg"
              >
                Apply as a Tutor
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg"
              >
                {isLoggedIn ? 'Account Settings' : 'Log In / Register'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
