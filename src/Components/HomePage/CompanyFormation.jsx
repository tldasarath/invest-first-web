"use client";
import React from "react";
import Container from "../Common/Layout/Contianer";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// import Image from "next/image"; // Removed as Image component is no longer used

const formationData = [
  {
    id: 1,
    title: "Mainland",
    description:
      "Start your UAE mainland company setup, trade freely, partner with government entities, and enjoy full operational flexibility.",
    type: "mainland",
    buttonText: "Button",
  },
  {
    id: 2,
    title: "Freezone",
    description:
      "Invest First enables 100% foreign ownership, tax benefits, fast UAE Freezone business setup to your needs.",
    type: "freezone",
    buttonText: "Button",
  },
  {
    id: 3,
    title: "Offshore",
    description:
      "Offshore company setup UAE for global trade, asset protection, and tax-efficient operations – secure, compliant, and seamless solutions by Invest First.",
    type: "offshore",
    buttonText: "Button",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

// Reusable SVG Background for Top-Left Cutout
const TopLeftCutoutSVG = ({ className, mainColor }) => {
  return (
    <svg
      viewBox="0 0 400 280"
      preserveAspectRatio="none"
      className={`absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* User Requested Gradient: linear-gradient(90deg, rgba(120,3,67,1.00) 0%,rgba(0,51,90,1.00) 100%) */}
        {/* #780343 to #00335a */}
        <linearGradient id="borderGradMain" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#780343" />
          <stop offset="100%" stopColor="#00335a" />
        </linearGradient>

        <linearGradient id="rayGradColored" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff006e" />
          <stop offset="100%" stopColor="#00a2ff" />
        </linearGradient>
      </defs>

      {/*
        Path for Top-Left Cutout (Wider cutout for button: ~180px)
        Height reduced to 280px.
        M 180 0
        L 370 0 Q 400 0 400 30
        L 400 250 Q 400 280 370 280
        L 30 280 Q 0 280 0 250
        L 0 90
        Q 0 60 30 60
        L 150 60
        Q 180 60 180 30
        L 180 0
        Z
      */}
      <path
        id="cardPathTL"
        d="
          M 210 0
          L 370 0 Q 400 0 400 30
          L 400 250 Q 400 280 370 280
          L 30 280 Q 0 280 0 250
          L 0 90
          Q 0 60 30 60
          L 150 60
          Q 180 60 180 30
          Q 180 0 210 0
          Z
        "
        fill={mainColor}
        stroke="url(#borderGradMain)"
        strokeWidth="2"
      />

      {/* Ray Animation Paths (Trail Effect) */}
      {[1, 0.8, 0.6, 0.4, 0.2].map((opacity, i) => (
        <path
          key={i}
          d="
            M 210 0
            L 370 0 Q 400 0 400 30
            L 400 250 Q 400 280 370 280
            L 30 280 Q 0 280 0 250
            L 0 90
            Q 0 60 30 60
            L 150 60
            Q 180 60 180 30
            Q 180 0 210 0
            Z
          "
          fill="none"
          stroke="url(#rayGradColored)"
          strokeWidth="3"
          strokeDasharray="100 1500"
          strokeLinecap="round"
          className="animate-ray"
          style={{
            opacity: opacity,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </svg>
  );
};

// Reusable SVG Background for Bottom-Right Cutout
const BottomRightCutoutSVG = ({ className, mainColor }) => {
  return (
    <svg
      viewBox="0 0 400 280"
      preserveAspectRatio="none"
      className={`absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="borderGradMain2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#780343" />
          <stop offset="100%" stopColor="#00335a" />
        </linearGradient>

        <linearGradient id="rayGradColored2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff006e" />
          <stop offset="100%" stopColor="#00a2ff" />
        </linearGradient>
      </defs>

      {/*
         Path Breakdown (Reverse layout, wider cutout ~180px)
         Height: 280px. Cutout Height: 60px.
         Start Y for bottom cutout = 280 - 60 = 220.
         Radius 30.
         Line down to 220-30 = 190.
      */}
      <path
        d="
          M 0 30
          Q 0 0 30 0
          L 370 0 Q 400 0 400 30
          L 400 190
          Q 400 220 370 220
          L 250 220
          Q 220 220 220 250
          Q 220 280 190 280
          L 30 280 Q 0 280 0 250
          L 0 30
          Z
        "
        fill={mainColor}
        stroke="url(#borderGradMain2)"
        strokeWidth="2"
      />

      {/* Ray Animation Paths (Trail Effect) */}
      {[1, 0.8, 0.6, 0.4, 0.2].map((opacity, i) => (
        <path
          key={i}
          d="
            M 0 30
            Q 0 0 30 0
            L 370 0 Q 400 0 400 30
            L 400 190
            Q 400 220 370 220
            L 250 220
            Q 220 220 220 250
            Q 220 280 190 280
            L 30 280 Q 0 280 0 250
            L 0 30
            Z
          "
          fill="none"
          stroke="url(#rayGradColored2)"
          strokeWidth="3"
          strokeDasharray="100 1500"
          strokeLinecap="round"
          className="animate-ray"
          style={{
            opacity: opacity,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </svg>
  );
};

export default function CompanyFormation() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        // Desktop Animation: Synchronized
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "restart none none reverse",
          },
        });

        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          let initialVars = { opacity: 0 };
          if (index === 0) initialVars.y = 500;
          else if (index === 2) initialVars.y = -500;

          // Add to timeline, all starting at the same time ("<")
          tl.fromTo(
            card,
            initialVars,
            {
              opacity: 1,
              y: 0,
              duration: 2.5,
              ease: "power3.out",
            },
            "<" // Position parameter: Insert at start of previous animation (sync all)
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile Animation: Wave from Right (using batch for staggered reveal)
        ScrollTrigger.batch(cardsRef.current.filter(Boolean), {
          start: "top 85%",
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0, x: 100 }, // From Right
              {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.2, // Wave effect
                overwrite: true,
              }
            );
          },
          onLeave: (elements) => {
            // Reset for replay
            gsap.set(elements, { opacity: 0, x: 100 });
          },
          onEnterBack: (elements) => {
            gsap.fromTo(elements, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1.5, stagger: 0.2, ease: "power3.out", overwrite: true });
          },
          onLeaveBack: (elements) => {
            gsap.set(elements, { opacity: 0, x: 100 });
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full py-10 md:py-40">
      <style jsx global>{`
        @keyframes moveRay {
          0% { stroke-dashoffset: 1600; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-ray {
          animation: moveRay 8s linear infinite;
          will-change: stroke-dashoffset;
        }
      `}</style>
      <Container>
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto"
        >
          {formationData.map((item, index) => {
            const isFreezone = item.type === "freezone";
            // const buttonWidth = 180;
            // const buttonHeight = 60;

            return (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative w-full h-[280px] flex flex-col group isolate opacity-0"
              >
                {/* === SVG Background Layer === */}
                {isFreezone ? (
                  <BottomRightCutoutSVG
                    mainColor="#700030"
                    className="z-0 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <TopLeftCutoutSVG
                    mainColor="#000F2B"
                    className="z-0 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* === Button Positioning === */}
                <div
                  className={`absolute z-20   flex items-center justify-start rounded-full overflow-hidden
                    ${isFreezone ? "bottom-0 right-0" : "top-0 left-0"}
                  `}
                  style={{
                    width: "45%",
                    height: "21.43%",
                  }}
                >
                  <div className="scale-75 origin-center flex items-center justify-center w-full h-full">
                    {/* Assuming PrimaryButton has margin, we counteract or just let it float center if flebox works */}
                    <div className="-mt-4">
                      <PrimaryButton text={item.buttonText} url="/" />
                    </div>
                  </div>
                </div>

                {/* === Content Layer === */}
                <div
                  className={`relative z-10 w-full h-full p-8 flex flex-col ${isFreezone ? "justify-start pt-10" : "justify-end pb-10"
                    }`}>
                  {isFreezone ? (
                    <>
                      <h3 className="text-3xl font-bold text-white tracking-wide mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed max-w-[90%]">
                        {item.description}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-[90%]">
                        {item.description}
                      </p>
                      <h3 className="text-3xl font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
