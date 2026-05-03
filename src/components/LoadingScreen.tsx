"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "linear-gradient(to bottom, #2d1b4e, #1a0a2e)" }}
    >
      <div className="relative">
        {/* Ryuk silhouette */}
        <svg width="120" height="160" viewBox="0 0 120 160" className="drop-shadow-2xl">
          {/* Tower base */}
          <rect x="50" y="140" width="20" height="20" fill="#0a0a0a" />
          {/* Ladder */}
          <line x1="45" y1="130" x2="45" y2="160" stroke="#333" strokeWidth="2" />
          <line x1="75" y1="130" x2="75" y2="160" stroke="#333" strokeWidth="2" />
          {/* Platform */}
          <rect x="40" y="130" width="40" height="5" fill="#111" />
          {/* Ryuk body */}
          <path
            d="M55 120
               C50 110, 65 100, 70 90
               C75 80, 60 75, 65 65
               L70 40
               C72 35, 62 30, 58 35
               L55 25
               C53 20, 48 25, 50 30
               L45 40
               C40 55, 25 60, 20 70
               L15 130
               C15 140, 30 145, 35 135
               L40 115
               C40 110, 50 110, 55 115
               L60 115
               L60 125
               L75 125
               L75 115
               C80 110, 90 110, 90 115
               L95 130
               C100 145, 115 140, 115 130
               L110 70
               C105 60, 90 55, 85 40
               L80 30
               C76 25, 71 35, 73 40
               L78 25
               C82 20, 87 30, 82 40
               L78 65
               C75 75, 90 80, 85 90
               C80 100, 70 110, 65 120
               Z"
            fill="#0a0a0a"
          />
          {/* Eyes — glowing red */}
          <circle cx="62" cy="52" r="4" fill="#ff0033" className="animate-pulse" />
          <circle cx="78" cy="52" r="4" fill="#ff0033" className="animate-pulse" />
          {/* Wings/shoulders hint */}
          <path d="M40 100 L20 120 L25 125 L45 110" fill="none" stroke="#111" strokeWidth="3" />
          <path d="M80 100 L100 120 L95 125 L75 110" fill="none" stroke="#111" strokeWidth="3" />
        </svg>

        {/* Loading text */}
        <p className="text-center mt-6 text-[#ff5c8d] font-cinzel tracking-widest text-lg animate-pulse">
          SUMMONING RYUK...
        </p>
      </div>
    </div>
  );
}
