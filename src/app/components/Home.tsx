import { useState } from "react";
import { StarburstIcon } from "./StarburstIcon";

const nameStyle = {
  fontSize: "clamp(40px, 14vw, 190px)",
  fontWeight: 700,
  lineHeight: 0.68,
  letterSpacing: "clamp(-3px, -0.6vw, -8.54px)",
  paddingBottom: "0.15em",
} as const;

export function Home() {
  const [bottomIconHover, setBottomIconHover] = useState(false);
  const [nameHover, setNameHover] = useState(false);

  return (
    <>
      {/* White top section */}
      <div className="relative bg-[#FFFFFF] flex flex-col flex-1">
        {/* Middle two-column section */}
        <div className="flex-1 flex items-center w-full px-5 md:px-12 lg:px-12 my-6 md:my-8">
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-40">
            {/* Left column */}
            <div className="md:w-1/2">
              <p
                className="text-[#111] font-['Montserrat',sans-serif]"
                style={{
                  fontSize: "clamp(22px, 4vw, 40px)",
                  fontWeight: 500,
                  lineHeight: 1.38,
                  letterSpacing: "-1.42px",
                }}
              >
                Web Dev, Design, and Animation
              </p>
            </div>

            {/* Right column */}
            <div className="md:w-1/2 flex items-start">
              <p
                className="text-[#222] font-['Montserrat',sans-serif]"
                style={{
                  fontSize: "clamp(13px, 1.5vw, 18.9px)",
                  fontWeight: 600,
                  lineHeight: 1.59,
                  letterSpacing: "-0.27px",
                }}
              >I don't really see design as just a set of tools—it's how I approach problem-solving. I'm driven by a love for 2D animation and clean UI/UX, and I enjoy collaborating with people to build apps that don't just look good, but actually tell a story and feel great to use.</p>
            </div>
          </div>
        </div>

        {/* Hero Name - positioned at bottom of white section */}
        <div
          className="w-full flex justify-center pb-0 cursor-default select-none overflow-hidden"
          style={{ isolation: "isolate" }}
          onMouseEnter={() => setNameHover(true)}
          onMouseLeave={() => setNameHover(false)}
        >
          <h1
            className="text-[#1a1a1a] font-['Montserrat',sans-serif] text-center uppercase whitespace-normal md:whitespace-nowrap relative px-3"
            style={{
              ...nameStyle,
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
              animation: nameHover
                ? "glitch-skew 0.5s infinite linear alternate-reverse"
                : "none",
            }}
          >
            OBAID SALEM

            {/* Glitch layers — only mounted in the DOM on hover */}
            {nameHover && (
              <>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-center pointer-events-none"
                  style={{
                    color: "#ff0040",
                    mixBlendMode: "multiply",
                    transform: "translateZ(0)",
                    willChange: "transform, clip-path",
                    backfaceVisibility: "hidden",
                    animation:
                      "glitch-1 0.3s infinite linear alternate-reverse",
                  }}
                >
                  OBAID SALEM
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-center pointer-events-none"
                  style={{
                    color: "#00d4ff",
                    mixBlendMode: "multiply",
                    transform: "translateZ(0)",
                    willChange: "transform, clip-path",
                    backfaceVisibility: "hidden",
                    animation:
                      "glitch-2 0.3s infinite linear alternate-reverse",
                  }}
                >
                  OBAID SALEM
                </span>
              </>
            )}
          </h1>
        </div>
      </div>

      {/* Black bottom section */}
      <div
        className="bg-[#1A1A1A] flex items-center justify-center"
        style={{ minHeight: "196px" }}
      >
        <div
          className="cursor-pointer"
          onMouseEnter={() => setBottomIconHover(true)}
          onMouseLeave={() => setBottomIconHover(false)}
        >
          <StarburstIcon color="white" size={60} rotate={bottomIconHover} />
        </div>
      </div>

      {/* Glitch keyframes only — no pseudo-element rules */}
      <style>{`
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 90% 0); transform: translate3d(0, 0, 0); }
          20% { clip-path: inset(20% 0 60% 0); transform: translate3d(-4px, 2px, 0); }
          40% { clip-path: inset(50% 0 20% 0); transform: translate3d(4px, -1px, 0); }
          60% { clip-path: inset(10% 0 70% 0); transform: translate3d(-2px, 1px, 0); }
          80% { clip-path: inset(60% 0 10% 0); transform: translate3d(3px, -2px, 0); }
        }
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(90% 0 0 0); transform: translate3d(0, 0, 0); }
          20% { clip-path: inset(60% 0 20% 0); transform: translate3d(4px, -2px, 0); }
          40% { clip-path: inset(10% 0 70% 0); transform: translate3d(-3px, 1px, 0); }
          60% { clip-path: inset(70% 0 10% 0); transform: translate3d(2px, -1px, 0); }
          80% { clip-path: inset(30% 0 50% 0); transform: translate3d(-4px, 2px, 0); }
        }
        @keyframes glitch-skew {
          0% { transform: skew(0deg) translateZ(0); }
          20% { transform: skew(-1deg) translateZ(0); }
          40% { transform: skew(0.5deg) translateZ(0); }
          60% { transform: skew(-0.5deg) translateZ(0); }
          80% { transform: skew(1deg) translateZ(0); }
          100% { transform: skew(0deg) translateZ(0); }
        }
      `}</style>
    </>
  );
}
