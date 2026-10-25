import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface AnnouncementBarProps {
  onOpenDemoRequest: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenDemoRequest }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !BRAND_CONFIG.announcement.enabled) return null;

  return (
    <aside aria-label="Announcement" className="bg-slate-900 text-slate-100 text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
          <span className="font-medium text-slate-200 truncate">
            {BRAND_CONFIG.announcement.text}
          </span>
          <button
            onClick={onOpenDemoRequest}
            className="inline-flex items-center gap-1 font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-2 ml-1 cursor-pointer whitespace-nowrap"
          >
            {BRAND_CONFIG.announcement.actionLabel}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded transition-colors hidden sm:inline-flex cursor-pointer"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
