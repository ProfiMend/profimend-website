import * as React from "react";

export default function ProfiMendLogo({
  className = "h-6 w-6",
  withWordmark = false,
}: { className?: string; withWordmark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        viewBox="0 0 64 64"
        aria-label="ProfiMend"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pmNavy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b2240"/>
            <stop offset="100%" stopColor="#0c4a6e"/>
          </linearGradient>
          <linearGradient id="pmRise" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9"/>
            <stop offset="100%" stopColor="#10b981"/>
          </linearGradient>
          <linearGradient id="pmGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="100%" stopColor="#fbbf24"/>
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="26" fill="url(#pmNavy)"/>
        <circle cx="32" cy="32" r="25" stroke="#0ea5e9" strokeOpacity="0.18" strokeWidth="2" fill="none"/>
        <g transform="translate(14,16)">
          <rect x="6" y="18" width="3.6" height="10" rx="1.5" fill="#38bdf8"/>
          <rect x="13" y="14" width="3.6" height="14" rx="1.5" fill="#22c55e"/>
          <rect x="20" y="10" width="3.6" height="18" rx="1.5" fill="#0ea5e9"/>
          <path d="M6 20 C14 12, 20 12, 28 8" stroke="url(#pmRise)" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
          <path d="M26 6 L31 8 L28 12" fill="url(#pmRise)"/>
          <path d="M6 6 h10 c6 0 10 4 10 9 s-4 9-10 9 h-4" stroke="white" strokeOpacity="0.85" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          <circle cx="33" cy="6" r="2" fill="url(#pmGold)"/>
        </g>
      </svg>
      {withWordmark && (
        <span className="font-semibold tracking-tight text-slate-900">ProfiMend</span>
      )}
    </div>
  );
}
