import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-terms-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <h2 id="privacy-terms-title" className="text-lg font-bold text-slate-900">
              {type === 'privacy' ? `${BRAND_CONFIG.name} Privacy & Family Protection Policy` : `${BRAND_CONFIG.name} Platform Terms & Conditions`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Text Content */}
        <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>{BRAND_CONFIG.name}</strong>, ensuring student safety, residential privacy, and data confidentiality is our primary governing commitment. This policy describes how we handle family and educator records.
              </p>
              
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">
                1. Information We Collect
              </h3>
              <p>
                We collect personal details provided during demo bookings, including student grade, subject needs, parent/guardian phone numbers, email addresses, and residential service addresses for home tutors.
              </p>

              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">
                2. Residential Address Protection
              </h3>
              <p>
                Your complete street address and contact telephone are never displayed publicly on search engines or platform directories. Specific address details are only dispatched securely to a verified tutor after the parent has formally confirmed the demo appointment.
              </p>

              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">
                3. Criminal Background & Identity Data
              </h3>
              <p>
                Tutor credential documents and identity records are processed through secure, encrypted verification vaults. We do not sell, rent, or trade student or educator personal records to third-party commercial marketing brokers.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{BRAND_CONFIG.name}</strong>. By accessing our tutor directory or submitting a trial booking request, you agree to these operating terms.
              </p>

              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">
                1. Demo Request & Booking Coordination
              </h3>
              <p>
                Submitting a demo booking request does not constitute an immediate guaranteed booking. All sessions require confirmation of tutor calendar availability and parent phone verification prior to lesson initiation.
              </p>

              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">
                2. Home Tutoring Safety Protocols
              </h3>
              <p>
                For in-home lessons involving minor students under the age of 18, a parent or designated adult guardian must be present on the residential premises throughout the entire scheduled tutoring session.
              </p>

              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">
                3. Cancellation & Guarantee Policy
              </h3>
              <p>
                If either student or tutor needs to reschedule, notice must be provided at least 12 hours prior to the scheduled lesson. Our Tutor Guarantee ensures a free replacement session if initial compatibility is not achieved.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
