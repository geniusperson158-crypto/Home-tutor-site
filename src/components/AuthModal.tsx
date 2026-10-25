import React, { useState } from 'react';
import { X, User, GraduationCap, Lock, Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; role: 'parent' | 'tutor' }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [role, setRole] = useState<'parent' | 'tutor'>('parent');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [childGrade, setChildGrade] = useState('Grade 9-10');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleDemoSignIn = (demoRole: 'parent' | 'tutor') => {
    if (demoRole === 'parent') {
      onLoginSuccess({ name: 'Sarah Jenkins', role: 'parent' });
    } else {
      onLoginSuccess({ name: 'Dr. Elena Rostova', role: 'tutor' });
    }
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!email || !email.includes('@')) errs.email = 'Valid email is required.';
    if (!password || password.length < 6) errs.password = 'Password must be at least 6 characters.';
    if (mode === 'register' && !name.trim()) errs.name = 'Full name is required.';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    onLoginSuccess({
      name: name || (role === 'parent' ? 'Parent User' : 'Educator User'),
      role
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="relative bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-3">
            {role === 'parent' ? <User className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
          </div>
          <h2 id="auth-modal-title" className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {mode === 'login' ? 'Sign In to TutorNest' : 'Create an Account'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Access your student's dashboard, demo schedules, and learning reports.
          </p>

          {/* Persona Switcher (Clean Segmented Buttons) */}
          <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl mt-4">
            <button
              type="button"
              onClick={() => setRole('parent')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                role === 'parent'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Parent / Student
            </button>
            <button
              type="button"
              onClick={() => setRole('tutor')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                role === 'tutor'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Verified Tutor
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder={role === 'parent' ? 'e.g. Sarah Jenkins' : 'e.g. Dr. Elena Rostova'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
              />
              {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
            </div>
          )}

          {mode === 'register' && role === 'parent' && (
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Child's Current Class / Grade
              </label>
              <select
                value={childGrade}
                onChange={(e) => setChildGrade(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
              >
                <option value="Grade 1-5">Primary (Grades 1-5)</option>
                <option value="Grade 6-8">Middle School (Grades 6-8)</option>
                <option value="Grade 9-10">High School (Grades 9-10)</option>
                <option value="Grade 11-12">Senior High (Grades 11-12)</option>
                <option value="AP / SAT Prep">College & AP Exam Prep</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
              />
            </div>
            {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
              />
            </div>
            {errors.password && <p className="text-[11px] text-rose-600 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            {mode === 'login' ? 'Sign In to Account' : 'Complete Registration'}
          </button>
        </form>

        {/* Quick Demo Access Box for Evaluators */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">
            One-Click Demo Personas
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleDemoSignIn('parent')}
              className="px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-center truncate"
            >
              Demo as Parent
            </button>
            <button
              onClick={() => handleDemoSignIn('tutor')}
              className="px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-center truncate"
            >
              Demo as Tutor
            </button>
          </div>
        </div>

        {/* Toggle Login / Register */}
        <div className="mt-4 text-center text-xs text-slate-500">
          {mode === 'login' ? (
            <span>
              Don't have an account?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-blue-600 hover:underline font-semibold cursor-pointer"
              >
                Register here
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-blue-600 hover:underline font-semibold cursor-pointer"
              >
                Sign in
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
};
