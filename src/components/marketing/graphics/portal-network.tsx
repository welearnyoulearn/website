export function PortalNetwork() {
  return (
    <svg
      viewBox="0 0 520 380"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="Five portals connected to one shared data core"
    >
      <defs>
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .pn-hub { animation: pnPulse 3.5s ease-in-out infinite; }
            .pn-a { animation: pnNode 5s ease-in-out infinite; }
            .pn-b { animation: pnNode 6.2s ease-in-out 0.7s infinite; }
            .pn-c { animation: pnNode 5.5s ease-in-out 1.4s infinite; }
            .pn-d { animation: pnNode 7s ease-in-out 0.35s infinite; }
            .pn-e { animation: pnNode 4.8s ease-in-out 1.9s infinite; }
            .pn-line-a { animation: pnLine 2.4s ease-in-out infinite; }
            .pn-line-b { animation: pnLine 2.4s ease-in-out 0.6s infinite; }
            .pn-line-c { animation: pnLine 2.4s ease-in-out 1.2s infinite; }
            .pn-line-d { animation: pnLine 2.4s ease-in-out 1.8s infinite; }
            .pn-line-e { animation: pnLine 2.4s ease-in-out 2.1s infinite; }
          }
          @keyframes pnPulse {
            0%,100% { opacity: 0.9; }
            50% { opacity: 1; }
          }
          @keyframes pnNode {
            0%,100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          @keyframes pnLine {
            0% { stroke-dashoffset: 0; stroke-opacity: 0; }
            25% { stroke-opacity: 0.5; }
            100% { stroke-dashoffset: -200; stroke-opacity: 0; }
          }
        `}</style>
        <radialGradient id="pn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connector lines */}
      <line x1="260" y1="190" x2="260" y2="40" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.2" />
      <line x1="260" y1="190" x2="460" y2="130" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.2" />
      <line x1="260" y1="190" x2="400" y2="320" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.2" />
      <line x1="260" y1="190" x2="120" y2="320" stroke="var(--primary)" strokeWidth="1.2" strokeOpacity="0.2" />
      <line x1="260" y1="190" x2="60" y2="130" stroke="var(--brand-amber)" strokeWidth="1.2" strokeOpacity="0.2" />

      {/* Animated data pulses */}
      <line className="pn-line-a" x1="260" y1="190" x2="260" y2="40" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 200" strokeOpacity="0" />
      <line className="pn-line-b" x1="260" y1="190" x2="460" y2="130" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 200" strokeOpacity="0" />
      <line className="pn-line-c" x1="260" y1="190" x2="400" y2="320" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 200" strokeOpacity="0" />
      <line className="pn-line-d" x1="260" y1="190" x2="120" y2="320" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 200" strokeOpacity="0" />
      <line className="pn-line-e" x1="260" y1="190" x2="60" y2="130" stroke="var(--brand-amber)" strokeWidth="2" strokeDasharray="4 200" strokeOpacity="0" />

      {/* Hub glow */}
      <ellipse cx="260" cy="190" rx="45" ry="45" fill="url(#pn-glow)" />

      {/* Center hub */}
      <circle className="pn-hub" cx="260" cy="190" r="30" fill="var(--primary)" />
      <text x="260" y="194" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">Data</text>

      {/* Admin node */}
      <circle className="pn-a" cx="260" cy="40" r="20" fill="var(--primary)" fillOpacity="0.15" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="260" cy="40" r="7" fill="var(--primary)" />
      <text x="260" y="72" textAnchor="middle" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.6">Admin</text>

      {/* Teacher node */}
      <circle className="pn-b" cx="460" cy="130" r="20" fill="var(--primary)" fillOpacity="0.12" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="460" cy="130" r="7" fill="var(--primary)" />
      <text x="460" y="162" textAnchor="middle" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.6">Teacher</text>

      {/* Student node */}
      <circle className="pn-c" cx="400" cy="320" r="20" fill="var(--primary)" fillOpacity="0.12" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="400" cy="320" r="7" fill="var(--primary)" />
      <text x="400" y="352" textAnchor="middle" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.6">Student</text>

      {/* Parent node */}
      <circle className="pn-d" cx="120" cy="320" r="20" fill="var(--primary)" fillOpacity="0.12" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="120" cy="320" r="7" fill="var(--primary)" />
      <text x="120" y="352" textAnchor="middle" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.6">Parent</text>

      {/* Platform node */}
      <circle className="pn-e" cx="60" cy="130" r="20" fill="var(--brand-amber)" fillOpacity="0.1" stroke="var(--brand-amber)" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="60" cy="130" r="7" fill="var(--brand-amber)" />
      <text x="60" y="162" textAnchor="middle" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.6">Platform</text>
    </svg>
  );
}
