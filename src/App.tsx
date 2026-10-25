import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar, NavPage } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { SubjectGrid } from './components/SubjectGrid';
import { TutorCard } from './components/TutorCard';
import { FindTutorsView } from './components/FindTutorsView';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { SubjectsView } from './components/SubjectsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { TutorProfileModal } from './components/TutorProfileModal';
import { BookingRequestModal } from './components/BookingRequestModal';
import { BecomeTutorModal } from './components/BecomeTutorModal';
import { AuthModal } from './components/AuthModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';

import { TUTORS_DATA } from './data/tutors';
import { Tutor } from './types';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  
  // Filter state passed to FindTutorsView
  const [searchFilters, setSearchFilters] = useState<{
    subject: string;
    grade: string;
    location: string;
    mode: string;
  }>({
    subject: '',
    grade: '',
    location: '',
    mode: 'all'
  });

  // Modal states
  const [activeTutorProfile, setActiveTutorProfile] = useState<Tutor | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTutorForBooking, setSelectedTutorForBooking] = useState<Tutor | null>(null);
  const [becomeTutorModalOpen, setBecomeTutorModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [privacyModalState, setPrivacyModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });

  // Current logged in user demo state
  const [currentUser, setCurrentUser] = useState<{ name: string; role: 'parent' | 'tutor' } | null>(null);

  // Handlers
  const handleHeroSearch = (filters: { grade: string; subject: string; location: string; mode: string }) => {
    setSearchFilters(filters);
    setCurrentPage('find-tutors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubjectSelectFromGrid = (subjectName: string) => {
    setSearchFilters({
      subject: subjectName,
      grade: '',
      location: '',
      mode: 'all'
    });
    setCurrentPage('find-tutors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemoBooking = (tutor?: Tutor | null) => {
    setSelectedTutorForBooking(tutor || null);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar onOpenDemoRequest={() => handleOpenDemoBooking(null)} />

      {/* 2. Top Navigation Bar (3-Zone Contract) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenBooking={() => handleOpenDemoBooking(null)}
        onOpenTutorRegister={() => setBecomeTutorModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        isLoggedIn={!!currentUser}
        currentUser={currentUser}
      />

      {/* 3. Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onSearch={handleHeroSearch}
              onExploreSubjects={() => {
                setCurrentPage('subjects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestDemo={() => handleOpenDemoBooking(null)}
            />

            {/* Platform Benchmarks & Statistics */}
            <TrustStats />

            {/* Core Subjects Section */}
            <SubjectGrid
              onSelectSubject={handleSubjectSelectFromGrid}
              onViewAllSubjects={() => {
                setCurrentPage('subjects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* How It Works Section */}
            <HowItWorks
              onFindTutor={() => {
                setCurrentPage('find-tutors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBecomeTutor={() => setBecomeTutorModalOpen(true)}
            />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Testimonials Section */}
            <TestimonialsSection />


            {/* FAQ Accordion */}
            <FAQSection
              onContactSupport={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {/* Find Tutors Dedicated Page */}
        {currentPage === 'find-tutors' && (
          <FindTutorsView
            initialSubject={searchFilters.subject}
            initialGrade={searchFilters.grade}
            initialLocation={searchFilters.location}
            initialMode={searchFilters.mode}
            onViewProfile={(tut) => setActiveTutorProfile(tut)}
            onRequestDemo={(tut) => handleOpenDemoBooking(tut)}
          />
        )}

        {/* Subjects & Curricula Dedicated Page */}
        {currentPage === 'subjects' && (
          <SubjectsView
            onSelectSubjectAndExplore={(subName) => handleSubjectSelectFromGrid(subName)}
            onRequestGeneralDemo={() => handleOpenDemoBooking(null)}
          />
        )}

        {/* How It Works Standalone Page View */}
        {currentPage === 'how-it-works' && (
          <div className="py-6">
            <HowItWorks
              onFindTutor={() => {
                setCurrentPage('find-tutors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBecomeTutor={() => setBecomeTutorModalOpen(true)}
            />
            <WhyChooseUs />
            <FAQSection
              onContactSupport={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* About Us Standalone Page */}
        {currentPage === 'about-us' && (
          <AboutView
            onFindTutors={() => {
              setCurrentPage('find-tutors');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onJoinAsTutor={() => setBecomeTutorModalOpen(true)}
          />
        )}

        {/* Contact Standalone Page */}
        {currentPage === 'contact' && (
          <ContactView
            onRequestDemo={() => handleOpenDemoBooking(null)}
            onBecomeTutor={() => setBecomeTutorModalOpen(true)}
          />
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() => setPrivacyModalState({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setPrivacyModalState({ isOpen: true, type: 'terms' })}
        onOpenTutorRegister={() => setBecomeTutorModalOpen(true)}
        onOpenBooking={() => handleOpenDemoBooking(null)}
      />

      {/* 5. Modals & Dialogs */}
      
      {/* Individual Tutor Profile Modal */}
      <TutorProfileModal
        tutor={activeTutorProfile}
        onClose={() => setActiveTutorProfile(null)}
        onRequestDemo={(tut) => handleOpenDemoBooking(tut)}
      />

      {/* Booking & Demo Request Modal */}
      <BookingRequestModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedTutor={selectedTutorForBooking}
        defaultSubject={searchFilters.subject}
      />

      {/* Multi-step Tutor Registration Application */}
      <BecomeTutorModal
        isOpen={becomeTutorModalOpen}
        onClose={() => setBecomeTutorModalOpen(false)}
      />

      {/* Login / Register Account Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyTermsModal
        isOpen={privacyModalState.isOpen}
        type={privacyModalState.type}
        onClose={() => setPrivacyModalState({ isOpen: false, type: 'privacy' })}
      />

    </div>
  );
}
