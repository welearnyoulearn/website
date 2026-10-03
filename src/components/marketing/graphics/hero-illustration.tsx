export function HeroIllustration() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      <svg
        viewBox="0 0 1400 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <style>{`
            @media (prefers-reduced-motion: no-preference) {
              .hi-hub   { animation: hiPulse 3.8s ease-in-out infinite; }
              .hi-na    { animation: hiNode 5.4s ease-in-out infinite; }
              .hi-nb    { animation: hiNode 6.2s ease-in-out 0.9s infinite; }
              .hi-nc    { animation: hiNode 5.0s ease-in-out 1.5s infinite; }
              .hi-nd    { animation: hiNode 7.1s ease-in-out 0.4s infinite; }
              .hi-ne    { animation: hiNode 4.7s ease-in-out 2.0s infinite; }
              .hi-d1    { animation: hiDash 2.6s ease-in-out infinite; }
              .hi-d2    { animation: hiDash 2.6s ease-in-out 0.7s infinite; }
              .hi-d3    { animation: hiDash 2.6s ease-in-out 1.4s infinite; }
              .hi-d4    { animation: hiDash 2.6s ease-in-out 2.1s infinite; }
              .hi-d5    { animation: hiDash 2.6s ease-in-out 0.35s infinite; }
              .hi-card1 { animation: hiFloat 6s ease-in-out infinite; }
              .hi-card2 { animation: hiFloat 7s ease-in-out 1.5s infinite; }
              .hi-card3 { animation: hiFloat 5.5s ease-in-out 3s infinite; }
              .hi-bar1  { animation: hiBar 3s ease-in-out 0.5s infinite alternate; }
              .hi-bar2  { animation: hiBar 3s ease-in-out 1.2s infinite alternate; }
            }
            @keyframes hiPulse {
              0%,100% { opacity: 0.7; }
              50%      { opacity: 1; }
            }
            @keyframes hiNode {
              0%,100% { opacity: 0.5; }
              50%      { opacity: 0.95; }
            }
            @keyframes hiDash {
              0%   { stroke-dashoffset: 0;    stroke-opacity: 0; }
              25%  { stroke-opacity: 0.8; }
              100% { stroke-dashoffset: -320; stroke-opacity: 0; }
            }
            @keyframes hiFloat {
              0%,100% { transform: translateY(0px); }
              50%      { transform: translateY(-7px); }
            }
            @keyframes hiBar {
              0%   { opacity: 0.55; }
              100% { opacity: 1; }
            }
          `}</style>

          {/* Ambient glow gradients */}
          <radialGradient id="hi-glow-amber" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#f5a623" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hi-glow-teal" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#0b5d52" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0b5d52" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hi-glow-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#f5a623" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hi-bg" cx="55%" cy="45%" r="70%">
            <stop offset="0%"   stopColor="#0a3d35" stopOpacity="1" />
            <stop offset="60%"  stopColor="#052824" stopOpacity="1" />
            <stop offset="100%" stopColor="#020C0A" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="hi-card-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="hi-progress" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#0b5d52" stopOpacity="1" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="hi-progress2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#f5a623" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0.5" />
          </linearGradient>

          <filter id="hi-blur-lg">
            <feGaussianBlur stdDeviation="40" />
          </filter>
          <filter id="hi-blur-md">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <filter id="hi-blur-sm">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="hi-card-shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* ── LAYER 0: Rich gradient background ── */}
        <rect x="0" y="0" width="1400" height="700" fill="url(#hi-bg)" />

        {/* ── LAYER 1: Ambient light blobs ── */}
        {/* Amber glow — top right corner */}
        <ellipse cx="1180" cy="80"  rx="320" ry="220" fill="url(#hi-glow-amber)" filter="url(#hi-blur-lg)" />
        {/* Teal glow — center left */}
        <ellipse cx="280"  cy="420" rx="280" ry="200" fill="url(#hi-glow-teal)"  filter="url(#hi-blur-lg)" />
        {/* Subtle hub glow */}
        <ellipse cx="960"  cy="355" rx="130" ry="130" fill="url(#hi-glow-hub)"   filter="url(#hi-blur-md)" opacity="0.45" />

        {/* ── LAYER 2: Dot matrix (subtle tech texture) ── */}
        {Array.from({ length: 22 }, (_, col) =>
          Array.from({ length: 12 }, (_, row) => (
            <circle
              key={`d-${col}-${row}`}
              cx={col * 60 + 30}
              cy={row * 58 + 30}
              r="1"
              fill="white"
              fillOpacity={0.04 + (col + row) % 3 * 0.015}
            />
          ))
        )}

        {/* ── LAYER 3: Concentric rings around hub ── */}
        <circle cx="960" cy="355" r="310" stroke="white" strokeWidth="0.5" strokeOpacity="0.06" />
        <circle cx="960" cy="355" r="210" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />
        <circle cx="960" cy="355" r="130" stroke="white" strokeWidth="0.5" strokeOpacity="0.10" />

        {/* Amber arc accent */}
        <path d="M 620 60 A 420 420 0 0 1 1340 340" stroke="#f5a623" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 18" />

        {/* ── LAYER 4: Connector lines (hub → nodes) ── */}
        <line x1="960" y1="355" x2="800" y2="145"  stroke="white"   strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="960" y1="355" x2="1155" y2="155" stroke="#f5a623" strokeWidth="0.7" strokeOpacity="0.22" />
        <line x1="960" y1="355" x2="1180" y2="485" stroke="white"   strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="960" y1="355" x2="790"  y2="500" stroke="white"   strokeWidth="0.7" strokeOpacity="0.18" />
        <line x1="960" y1="355" x2="960"  y2="115" stroke="#f5a623" strokeWidth="0.8" strokeOpacity="0.28" />

        {/* Animated data pulses */}
        <line className="hi-d1" x1="960" y1="355" x2="800"  y2="145"  stroke="white"   strokeWidth="2.5" strokeDasharray="5 320" strokeOpacity="0" />
        <line className="hi-d2" x1="960" y1="355" x2="1155" y2="155"  stroke="#f5a623" strokeWidth="2.5" strokeDasharray="5 320" strokeOpacity="0" />
        <line className="hi-d3" x1="960" y1="355" x2="1180" y2="485"  stroke="white"   strokeWidth="2.5" strokeDasharray="5 320" strokeOpacity="0" />
        <line className="hi-d4" x1="960" y1="355" x2="790"  y2="500"  stroke="white"   strokeWidth="2.5" strokeDasharray="5 320" strokeOpacity="0" />
        <line className="hi-d5" x1="960" y1="355" x2="960"  y2="115"  stroke="#f5a623" strokeWidth="2.5" strokeDasharray="5 320" strokeOpacity="0" />

        {/* ── LAYER 5: Hub ── */}
        {/* Outer ring glow */}
        <circle cx="960" cy="355" r="52" fill="url(#hi-glow-hub)" filter="url(#hi-blur-sm)" opacity="0.6" />
        {/* Hex */}
        <path
          className="hi-hub"
          d="M960 313 L996 333 L996 373 L960 393 L924 373 L924 333 Z"
          stroke="white" strokeWidth="1.6" fill="white" fillOpacity="0.07" strokeOpacity="0.7"
        />
        <circle cx="960" cy="355" r="7" fill="white" fillOpacity="0.8" />
        <text x="960" y="414" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="11" fontFamily="monospace" letterSpacing="2">WLYL</text>

        {/* ── LAYER 6: Portal nodes ── */}
        {/* ADMIN */}
        <circle className="hi-na" cx="800"  cy="145"  r="28" stroke="white"   strokeWidth="1.5" fill="white"   fillOpacity="0.05" strokeOpacity="0.65" />
        <circle cx="800" cy="145" r="6" fill="white" fillOpacity="0.7" />
        <text x="800" y="185" textAnchor="middle" fill="white" fillOpacity="0.45" fontSize="11" fontFamily="monospace" letterSpacing="1.5">ADMIN</text>

        {/* TEACHER */}
        <circle className="hi-nb" cx="1155" cy="155"  r="26" stroke="#f5a623" strokeWidth="1.5" fill="#f5a623" fillOpacity="0.05" strokeOpacity="0.62" />
        <circle cx="1155" cy="155" r="5.5" fill="#f5a623" fillOpacity="0.8" />
        <text x="1155" y="193" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="11" fontFamily="monospace" letterSpacing="1">TEACHER</text>

        {/* STUDENT */}
        <circle className="hi-nc" cx="1180" cy="485"  r="26" stroke="white"   strokeWidth="1.5" fill="white"   fillOpacity="0.04" strokeOpacity="0.58" />
        <circle cx="1180" cy="485" r="5.5" fill="white" fillOpacity="0.65" />
        <text x="1180" y="523" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="11" fontFamily="monospace" letterSpacing="1">STUDENT</text>

        {/* PARENT */}
        <circle className="hi-nd" cx="790"  cy="500"  r="26" stroke="white"   strokeWidth="1.5" fill="white"   fillOpacity="0.04" strokeOpacity="0.55" />
        <circle cx="790" cy="500" r="5.5" fill="white" fillOpacity="0.6" />
        <text x="790" y="538" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="11" fontFamily="monospace" letterSpacing="1">PARENT</text>

        {/* PLATFORM */}
        <circle className="hi-ne" cx="960"  cy="115"  r="20" stroke="#f5a623" strokeWidth="1.8" fill="#f5a623" fillOpacity="0.07" strokeOpacity="0.72" />
        <circle cx="960" cy="115" r="5" fill="#f5a623" fillOpacity="0.85" />
        <text x="960" y="149" textAnchor="middle" fill="#f5a623" fillOpacity="0.55" fontSize="10" fontFamily="monospace" letterSpacing="1">PLATFORM</text>

        {/* ── LAYER 7: Floating product UI cards ── */}

        {/* Card 1 — Attendance Overview */}
        <g className="hi-card1" filter="url(#hi-card-shadow)">
          <rect x="86" y="78" width="256" height="148" rx="12" fill="url(#hi-card-bg)" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
          {/* Header bar */}
          <rect x="86" y="78" width="256" height="36" rx="12" fill="white" fillOpacity="0.06" />
          <rect x="86" y="101" width="256" height="13" fill="white" fillOpacity="0.06" />
          {/* Title */}
          <text x="106" y="102" fill="white" fillOpacity="0.9" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Today's Attendance</text>
          <text x="314" y="102" textAnchor="end" fill="white" fillOpacity="0.4" fontSize="11" fontFamily="monospace">Wed · Oct 3</text>
          {/* Big stat */}
          <text x="106" y="143" fill="white" fillOpacity="1" fontSize="32" fontWeight="700" fontFamily="system-ui,sans-serif">89%</text>
          <text x="164" y="143" fill="#f5a623" fillOpacity="0.9" fontSize="11" fontFamily="system-ui,sans-serif">↑ 3% vs last week</text>
          {/* Progress bar track */}
          <rect x="106" y="154" width="216" height="7" rx="4" fill="white" fillOpacity="0.10" />
          {/* Progress bar fill */}
          <rect className="hi-bar1" x="106" y="154" width="192" height="7" rx="4" fill="url(#hi-progress)" />
          {/* Bottom stats */}
          <text x="106" y="192" fill="white" fillOpacity="0.55" fontSize="10" fontFamily="system-ui,sans-serif">1,204 present</text>
          <text x="220" y="192" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="system-ui,sans-serif">147 absent</text>
        </g>

        {/* Card 2 — Fee Collection */}
        <g className="hi-card2" filter="url(#hi-card-shadow)">
          <rect x="106" y="390" width="230" height="160" rx="12" fill="url(#hi-card-bg)" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
          <rect x="106" y="390" width="230" height="36" rx="12" fill="white" fillOpacity="0.06" />
          <rect x="106" y="413" width="230" height="13" fill="white" fillOpacity="0.06" />
          <text x="124" y="414" fill="white" fillOpacity="0.9" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Fee Collection</text>
          <text x="314" y="414" textAnchor="end" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace">Dec 2024</text>
          {/* Fee rows */}
          <text x="124" y="446" fill="white" fillOpacity="0.75" fontSize="11" fontFamily="system-ui,sans-serif">Collected</text>
          <text x="316" y="446" textAnchor="end" fill="#f5a623" fillOpacity="0.9" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">₹4,82,000</text>
          <rect x="124" y="452" width="192" height="5" rx="3" fill="white" fillOpacity="0.08" />
          <rect className="hi-bar2" x="124" y="452" width="148" height="5" rx="3" fill="url(#hi-progress2)" />
          <text x="124" y="476" fill="white" fillOpacity="0.75" fontSize="11" fontFamily="system-ui,sans-serif">Pending</text>
          <text x="316" y="476" textAnchor="end" fill="white" fillOpacity="0.55" fontSize="12" fontFamily="system-ui,sans-serif">₹1,18,000</text>
          <rect x="124" y="482" width="192" height="5" rx="3" fill="white" fillOpacity="0.08" />
          <rect x="124" y="482" width="44" height="5" rx="3" fill="white" fillOpacity="0.28" />
          {/* Divider */}
          <line x1="124" y1="498" x2="316" y2="498" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          <text x="124" y="518" fill="white" fillOpacity="0.45" fontSize="10" fontFamily="system-ui,sans-serif">80% collected this month</text>
          <circle cx="299" cy="515" r="5" fill="#f5a623" fillOpacity="0.8" />
        </g>

        {/* Card 3 — Live feed / notifications (bottom-center, below CTAs) */}
        <g className="hi-card3" filter="url(#hi-card-shadow)">
          <rect x="424" y="570" width="240" height="130" rx="12" fill="url(#hi-card-bg)" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
          <rect x="424" y="570" width="240" height="36" rx="12" fill="white" fillOpacity="0.06" />
          <rect x="424" y="593" width="240" height="13" fill="white" fillOpacity="0.06" />
          <text x="442" y="594" fill="white" fillOpacity="0.9" fontSize="12" fontWeight="600" fontFamily="system-ui,sans-serif">Live Updates</text>
          {/* Green dot */}
          <circle cx="634" cy="590" r="4" fill="#22c55e" fillOpacity="0.9" />
          {/* Notification rows */}
          <circle cx="442" cy="629" r="4" fill="#f5a623" fillOpacity="0.85" />
          <text x="455" y="633" fill="white" fillOpacity="0.75" fontSize="11" fontFamily="system-ui,sans-serif">Results published · Class 9</text>
          <text x="610" y="633" textAnchor="end" fill="white" fillOpacity="0.3" fontSize="10" fontFamily="monospace">2m</text>

          <line x1="442" y1="646" x2="624" y2="646" stroke="white" strokeOpacity="0.08" strokeWidth="1" />

          <circle cx="442" cy="662" r="4" fill="white" fillOpacity="0.5" />
          <text x="455" y="666" fill="white" fillOpacity="0.65" fontSize="11" fontFamily="system-ui,sans-serif">Feedback submitted · 10-B</text>
          <text x="610" y="666" textAnchor="end" fill="white" fillOpacity="0.3" fontSize="10" fontFamily="monospace">8m</text>

          <line x1="442" y1="679" x2="624" y2="679" stroke="white" strokeOpacity="0.08" strokeWidth="1" />

          <circle cx="442" cy="692" r="4" fill="#22c55e" fillOpacity="0.7" />
          <text x="455" y="696" fill="white" fillOpacity="0.55" fontSize="11" fontFamily="system-ui,sans-serif">Fee paid · Priya Sharma</text>
          <text x="610" y="696" textAnchor="end" fill="white" fillOpacity="0.3" fontSize="10" fontFamily="monospace">12m</text>
        </g>

        {/* ── LAYER 8: Decorative school details ── */}
        {/* Subtle rupee watermark */}
        <text x="680" y="620" fontSize="120" fill="white" fillOpacity="0.025" fontFamily="serif" fontWeight="900">₹</text>
        {/* Attendance checkmarks — decorative */}
        <g opacity="0.22" transform="translate(1060,620)">
          <polyline points="0,10 6,18 18,0"  stroke="white"   strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="26,10 32,18 44,0" stroke="white"   strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="52,10 58,18 70,0" stroke="#f5a623" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* Tiny calendar corner detail */}
        <g opacity="0.15" transform="translate(1280,580)">
          <rect x="0" y="10" width="52" height="46" rx="4" stroke="white" strokeWidth="1" fill="none" />
          <line x1="0" y1="24" x2="52" y2="24" stroke="white" strokeWidth="1" />
          <line x1="14" y1="2" x2="14" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="2" x2="38" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <rect x="7" y="30" width="9" height="8" rx="2" fill="white" fillOpacity="0.5" />
          <rect x="22" y="30" width="9" height="8" rx="2" fill="#f5a623" fillOpacity="0.7" />
          <rect x="37" y="30" width="9" height="8" rx="2" fill="white" fillOpacity="0.3" />
          <rect x="7" y="42" width="9" height="8" rx="2" fill="white" fillOpacity="0.25" />
        </g>

        {/* Thin horizontal scan line for depth */}
        <line x1="0" y1="350" x2="1400" y2="350" stroke="white" strokeOpacity="0.03" strokeWidth="1" />

        {/* Edge vignette */}
        <rect x="0" y="0" width="1400" height="700"
          fill="url(#hi-bg)"
          opacity="0.25"
          style={{ mixBlendMode: "multiply" }}
        />
      </svg>
    </div>
  );
}
