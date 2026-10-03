export function HeroIllustration() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      <svg
        viewBox="0 0 900 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 h-full w-[72%] opacity-[0.22]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <style>{`
            @media (prefers-reduced-motion: no-preference) {
              .pulse-hub { animation: pulseHub 4s ease-in-out infinite; }
              .pulse-a { animation: pulseNode 5.2s ease-in-out infinite; }
              .pulse-b { animation: pulseNode 6.1s ease-in-out 0.8s infinite; }
              .pulse-c { animation: pulseNode 5.7s ease-in-out 1.2s infinite; }
              .pulse-d { animation: pulseNode 7s ease-in-out 0.4s infinite; }
              .pulse-e { animation: pulseNode 4.5s ease-in-out 1.6s infinite; }
              .dash-1 { animation: dashFlow 2.8s ease-in-out infinite; }
              .dash-2 { animation: dashFlow 2.8s ease-in-out 0.8s infinite; }
              .dash-3 { animation: dashFlow 2.8s ease-in-out 1.6s infinite; }
              .dash-4 { animation: dashFlow 2.8s ease-in-out 2.4s infinite; }
            }
            @keyframes pulseHub {
              0%,100% { opacity: 0.65; }
              50% { opacity: 1; }
            }
            @keyframes pulseNode {
              0%,100% { opacity: 0.55; }
              50% { opacity: 1; }
            }
            @keyframes dashFlow {
              0% { stroke-dashoffset: 0; stroke-opacity: 0; }
              30% { stroke-opacity: 0.7; }
              100% { stroke-dashoffset: -300px; stroke-opacity: 0; }
            }
          `}</style>
          <radialGradient id="glow-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
          </radialGradient>
          <filter id="blur-hub" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* Background concentric rings */}
        <circle cx="700" cy="240" r="340" stroke="white" strokeWidth="0.5" strokeOpacity="0.12" />
        <circle cx="700" cy="240" r="230" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <circle cx="700" cy="240" r="120" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />

        {/* Amber arc accent */}
        <path d="M 430 80 A 340 340 0 0 1 880 300" stroke="#f5a623" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="5 14" />

        {/* Connector lines hub → nodes */}
        <line x1="700" y1="240" x2="565" y2="110" stroke="white" strokeWidth="0.6" strokeOpacity="0.2" />
        <line x1="700" y1="240" x2="845" y2="120" stroke="white" strokeWidth="0.6" strokeOpacity="0.2" />
        <line x1="700" y1="240" x2="855" y2="355" stroke="white" strokeWidth="0.6" strokeOpacity="0.2" />
        <line x1="700" y1="240" x2="595" y2="368" stroke="white" strokeWidth="0.6" strokeOpacity="0.2" />
        <line x1="700" y1="240" x2="700" y2="72" stroke="#f5a623" strokeWidth="0.8" strokeOpacity="0.25" />

        {/* Data pulse lines — CSS animated dashes */}
        <line className="dash-1" x1="700" y1="240" x2="565" y2="110" stroke="white" strokeWidth="2" strokeDasharray="4 300" strokeOpacity="0" />
        <line className="dash-2" x1="700" y1="240" x2="845" y2="120" stroke="#f5a623" strokeWidth="2" strokeDasharray="4 300" strokeOpacity="0" />
        <line className="dash-3" x1="700" y1="240" x2="855" y2="355" stroke="white" strokeWidth="2" strokeDasharray="4 300" strokeOpacity="0" />
        <line className="dash-4" x1="700" y1="240" x2="595" y2="368" stroke="white" strokeWidth="2" strokeDasharray="4 300" strokeOpacity="0" />

        {/* Hub glow */}
        <ellipse cx="700" cy="240" rx="50" ry="50" fill="url(#glow-hub)" filter="url(#blur-hub)" />

        {/* Central hexagon hub */}
        <path
          className="pulse-hub"
          d="M700 203 L733 222 L733 258 L700 277 L667 258 L667 222 Z"
          stroke="white" strokeWidth="1.4" fill="white" fillOpacity="0.06" strokeOpacity="0.65"
        />
        <circle cx="700" cy="240" r="5" fill="white" fillOpacity="0.7" />

        {/* ADMIN node */}
        <circle className="pulse-a" cx="565" cy="110" r="22" stroke="white" strokeWidth="1.2" fill="white" fillOpacity="0.05" strokeOpacity="0.6" />
        <circle cx="565" cy="110" r="5" fill="white" fillOpacity="0.55" />
        <text x="565" y="144" textAnchor="middle" fill="white" fillOpacity="0.42" fontSize="10" fontFamily="monospace" letterSpacing="1.5">ADMIN</text>

        {/* TEACHER node */}
        <circle className="pulse-b" cx="845" cy="120" r="20" stroke="#f5a623" strokeWidth="1.2" fill="#f5a623" fillOpacity="0.04" strokeOpacity="0.58" />
        <circle cx="845" cy="120" r="4.5" fill="#f5a623" fillOpacity="0.65" />
        <text x="845" y="153" textAnchor="middle" fill="white" fillOpacity="0.38" fontSize="10" fontFamily="monospace" letterSpacing="1">TEACHER</text>

        {/* STUDENT node */}
        <circle className="pulse-c" cx="855" cy="355" r="20" stroke="white" strokeWidth="1.2" fill="white" fillOpacity="0.04" strokeOpacity="0.54" />
        <circle cx="855" cy="355" r="4.5" fill="white" fillOpacity="0.5" />
        <text x="855" y="386" textAnchor="middle" fill="white" fillOpacity="0.38" fontSize="10" fontFamily="monospace" letterSpacing="1">STUDENT</text>

        {/* PARENT node */}
        <circle className="pulse-d" cx="595" cy="368" r="20" stroke="white" strokeWidth="1.2" fill="white" fillOpacity="0.04" strokeOpacity="0.52" />
        <circle cx="595" cy="368" r="4.5" fill="white" fillOpacity="0.5" />
        <text x="595" y="400" textAnchor="middle" fill="white" fillOpacity="0.38" fontSize="10" fontFamily="monospace" letterSpacing="1">PARENT</text>

        {/* PLATFORM node */}
        <circle className="pulse-e" cx="700" cy="72" r="16" stroke="#f5a623" strokeWidth="1.5" fill="#f5a623" fillOpacity="0.06" strokeOpacity="0.68" />
        <circle cx="700" cy="72" r="4" fill="#f5a623" fillOpacity="0.75" />
        <text x="700" y="102" textAnchor="middle" fill="#f5a623" fillOpacity="0.5" fontSize="10" fontFamily="monospace" letterSpacing="1">PLATFORM</text>

        {/* Book illustration */}
        <g opacity="0.2" transform="translate(458,390)">
          <rect x="0" y="0" width="40" height="52" rx="3" stroke="white" strokeWidth="1" fill="none" />
          <line x1="20" y1="0" x2="20" y2="52" stroke="white" strokeWidth="0.6" />
          <line x1="7" y1="12" x2="14" y2="12" stroke="white" strokeWidth="0.7" />
          <line x1="7" y1="18" x2="14" y2="18" stroke="white" strokeWidth="0.7" />
          <line x1="7" y1="24" x2="14" y2="24" stroke="white" strokeWidth="0.7" />
          <line x1="26" y1="12" x2="33" y2="12" stroke="white" strokeWidth="0.7" />
          <line x1="26" y1="18" x2="33" y2="18" stroke="white" strokeWidth="0.7" />
        </g>

        {/* Calendar illustration */}
        <g opacity="0.18" transform="translate(800,395)">
          <rect x="0" y="10" width="44" height="38" rx="3" stroke="white" strokeWidth="1" fill="none" />
          <line x1="0" y1="20" x2="44" y2="20" stroke="white" strokeWidth="0.8" />
          <line x1="12" y1="2" x2="12" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="32" y1="2" x2="32" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="6" y="26" width="7" height="6" rx="1" fill="white" fillOpacity="0.5" />
          <rect x="18" y="26" width="7" height="6" rx="1" fill="white" fillOpacity="0.5" />
          <rect x="30" y="26" width="7" height="6" rx="1" fill="#f5a623" fillOpacity="0.65" />
          <rect x="6" y="36" width="7" height="6" rx="1" fill="white" fillOpacity="0.3" />
          <rect x="18" y="36" width="7" height="6" rx="1" fill="white" fillOpacity="0.3" />
        </g>

        {/* Rupee hint */}
        <text x="488" y="270" fontSize="36" fill="white" fillOpacity="0.08" fontFamily="serif" fontWeight="bold">₹</text>

        {/* Attendance checkmarks */}
        <g opacity="0.16" transform="translate(752,208)">
          <polyline points="0,10 6,18 18,0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="24,10 30,18 42,0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="48,10 54,18 66,0" stroke="#f5a623" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
