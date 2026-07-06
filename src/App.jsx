import { useState } from 'react'
import { siteConfig } from './config/links'
import './App.css'

function GlassesIcon({ className = "w-10 h-5", accentColor = null, isHovered = false }) {
  // If hovered, we can tint the glasses icon, otherwise use default gray
  const strokeColor = isHovered && accentColor ? accentColor : "currentColor";

  return (
    <svg
      viewBox="0 0 100 40"
      className={`${className} transition-all duration-500 ease-out`}
      stroke={strokeColor}
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {/* Left Lens */}
      <circle cx="28" cy="20" r="13" className="transition-all duration-500" />
      {/* Right Lens */}
      <circle cx="72" cy="20" r="13" className="transition-all duration-500" />
      {/* Bridge */}
      <path d="M 41 20 Q 50 16 59 20" />
      {/* Left Temple */}
      <path d="M 15 20 L 9 20 Q 3 20 3 26" />
      {/* Right Temple */}
      <path d="M 85 20 L 91 20 Q 97 20 97 26" />
      {/* Stylized reflection slash on left lens */}
      <line x1="15" y1="7" x2="41" y2="33" className="opacity-80" />
    </svg>
  );
}

function PlatformIcon({ platform, className = "w-5 h-5" }) {
  switch (platform.toLowerCase()) {
    case 'my website':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.78-.22-.22-.41-.47-.58-.73v7.02c0 3.86-3.13 6.99-6.99 6.99-3.85 0-6.99-3.13-6.99-6.99 0-3.85 3.13-6.99 6.99-6.99.39 0 .78.03 1.16.1v4.21c-.38-.13-.78-.19-1.18-.19-1.53 0-2.77 1.24-2.77 2.77s1.24 2.77 2.77 2.77 2.77-1.24 2.77-2.77V0z" />
        </svg>
      );
    case 'sociabuzz':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case 'roblox':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M18.826 1.514L5.046 6.136L1.134 19.866L14.914 15.244L18.826 1.514ZM9.67 11.904L11.597 11.258L12.923 12.584L10.996 13.23L9.67 11.904Z" />
        </svg>
      );
    case 'fisch ps':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Fish shape SVG */}
          <path d="M22 12c-1.2-1-3.6-2.5-7-2.5-4 0-7.2 2-9 4.5C4.2 16.5 2 18 2 18s2.2-.5 4.5-2.5c1.8 1.8 4 3 7 3 3.4 0 5.8-1.5 7-2.5 1.2 1.2 2.5 2.5 3.5 2.5V9.5c-1 0-2.3 1.3-3.5 2.5z" />
          <circle cx="14" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case 'discord':
    case 'discord server':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
  }
}

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      {/* Paper grain background texture overlay */}
      <div className="grain-overlay" aria-hidden="true"></div>

      <div className="relative min-h-screen flex flex-col justify-between py-12 px-6 md:px-12 max-w-4xl mx-auto z-10">

        {/* Header with Name */}
        <header className="text-center py-6 md:py-8 select-none">
          <h1 className="font-serif text-3.5xl md:text-5xl text-zinc-800 tracking-wider font-semibold">
            mphstar
          </h1>
          <div className="w-12 h-[2px] bg-zinc-300 mx-auto mt-3 rounded-full opacity-60"></div>
        </header>

        {/* Main Content Area */}
        <main className="w-full flex-grow flex flex-col justify-center max-w-[35rem] mx-auto py-4">
          <div className="flex flex-col gap-5 md:gap-6 w-full">
            {siteConfig.links.map((link) => {
              const isLeftAligned = link.align === "left";
              const isHovered = hoveredCard === link.id;

              return (
                <div
                  key={link.id}
                  className={`w-full flex items-center bg-white border-[1px] border-[#e5e4e7] rounded-[1.2rem] md:rounded-[1.7rem] justify-between gap-4 md:gap-6 ${isLeftAligned ? "flex-row" : "flex-row-reverse"
                    }`}
                  onMouseEnter={() => setHoveredCard(link.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >

                  {/* Label Container */}
                  <div
                    className={`w-[32%] md:w-[28%] flex flex-col font-sans select-none transition-all duration-300 overflow-hidden ${isLeftAligned ? "items-start text-left pl-4 md:pl-4" : "items-end text-right pr-4 md:pr-4"
                      }`}
                  >
                    <span
                      className={`text-xs md:text-sm font-semibold tracking-wide transition-colors duration-500 truncate w-full ${isHovered ? "text-zinc-950 font-bold" : "text-zinc-500"
                        }`}
                    >
                      {link.label}
                    </span>
                    {link.description && (
                      <span
                        className={`text-[9px] md:text-[11px] leading-tight text-zinc-400 font-normal mt-0.5 transition-colors duration-500 truncate w-full ${isHovered ? "text-zinc-600" : ""
                          }`}
                      >
                        {link.description}
                      </span>
                    )}
                  </div>

                  {/* Link Card Banner */}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-[68%] md:w-[72%] block relative overflow-hidden rounded-[1.2rem] md:rounded-[1.7rem] border border-[#e5e4e7] bg-white aspect-[3.5/1] card-transition shadow-sm ${link.hoverClass} ${isHovered ? "-translate-y-0.5 scale-[1.01]" : ""
                      }`}
                  >
                    {/* Character Eye Illustration */}
                    <img
                      src={link.image}
                      className={`w-full h-full object-cover object-center card-transition duration-700 ${isHovered ? "scale-[1.04] brightness-[0.88] contrast-[1.02]" : "brightness-[0.98]"
                        }`}
                      alt={`${link.label} link illustration`}
                    />

                    {/* Tilted Outbound Link Indicator (signals clickability) */}
                    <div
                      className={`absolute top-2.5 right-2.5 md:top-3.5 md:right-3.5 z-20 w-6.5 h-6.5 md:w-8 md:h-8 rounded-full bg-black/15 md:bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white/80 shadow-md card-transition ${isHovered ? "bg-white/35 text-white scale-110 translate-x-0.5 -translate-y-0.5" : ""
                        }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 md:w-4.5 md:h-4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>

                    {/* Glossy Overlay with Social Information (reveals on hover) */}
                    <div
                      className={`absolute inset-0 bg-black/25 flex items-center justify-center transition-all duration-500 z-10 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    >
                      <div
                        className={`bg-white/15 backdrop-blur-lg border border-white/20 px-5 py-3 md:px-7 md:py-3.5 rounded-2xl text-white font-medium tracking-wide flex items-center gap-3.5 md:gap-4.5 shadow-xl transition-all duration-500 transform ${isHovered ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"
                          }`}
                      >
                        <PlatformIcon
                          platform={link.label}
                          className="w-5 h-5 md:w-6 md:h-6 fill-white text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                        />
                        <div className="flex flex-col text-left">
                          <span className="text-sm md:text-base font-bold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                            {link.label}
                          </span>
                          <span className="text-[10px] md:text-xs text-white/80 font-mono tracking-normal">
                            {link.username}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>

                </div>
              );
            })}
          </div>
        </main>

        {/* Footer (Centered Title & Credits + Corner Items) */}
        <footer className="w-full flex flex-col items-center mt-12">

          {/* Main Footer Centerpiece */}
          <div className="text-center select-none">
            {/* Big Logo Glasses */}
            <svg
              viewBox="0 0 100 40"
              className="w-20 h-8 md:w-24 md:h-10 mx-auto text-zinc-400 fill-zinc-950/5 hover:fill-zinc-950/10 hover:text-zinc-800 transition-all duration-700 hover:scale-105 cursor-pointer"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="28" cy="20" r="13" />
              <circle cx="72" cy="20" r="13" />
              <path d="M 41 20 Q 50 16 59 20" />
              <path d="M 15 20 L 9 20 Q 3 20 3 26" />
              <path d="M 85 20 L 91 20 Q 97 20 97 26" />
              <line x1="15" y1="7" x2="41" y2="33" className="opacity-60" />
            </svg>

            {/* Title */}
            <h1 className="font-serif text-lg md:text-2xl text-zinc-800 tracking-wide mt-5 font-normal">
              {siteConfig.title}
            </h1>

            {/* Credit */}
            <p className="text-[10px] md:text-xs text-zinc-400 tracking-widest mt-2 uppercase font-semibold">
              {siteConfig.subtitle}
            </p>
          </div>

          {/* Bottom Corners (Stretched full-width for perfect balance) */}
          <div className="w-full flex justify-between items-center text-[10px] tracking-widest text-zinc-400 uppercase font-mono font-bold mt-16 px-4 md:px-0 select-none">
            <span className="hover:text-zinc-800 transition-colors duration-300 cursor-default">
              {siteConfig.footerLeft}
            </span>
            <span className="hover:text-zinc-800 transition-colors duration-300 cursor-default">
              {siteConfig.footerRight}
            </span>
          </div>

        </footer>

      </div>
    </>
  );
}

export default App
