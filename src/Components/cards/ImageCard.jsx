"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ImageCard({
  count = "7+",
  label = "Years Experience",
  backgroundImage,
  className = "",
}) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [size, setSize] = useState({ w: 307, h: 255 });

  const stroke = 4;
  const inset = stroke / 2;
  const radius = 18;

  /* Measure size */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      setSize({
        w: el.offsetWidth,
        h: el.offsetHeight,
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  /* Animate border ray */
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    const ray = length * 0.35;

    gsap.set(path, {
      strokeDasharray: `${ray} ${length}`,
      strokeDashoffset: ray,
    });

    gsap.to(path, {
      strokeDashoffset: -length,
      duration: 4,
      ease: "none",
      repeat: -1,
    });
  }, [size]);

  /* ⚠️ FIXED PATH (inset applied) */
  const pathData = `
    M ${inset + radius},${inset}
    H ${size.w - inset - radius}
    A ${radius},${radius} 0 0 1 ${size.w - inset},${inset + radius}
    V ${size.h - inset - radius}
    A ${radius},${radius} 0 0 1 ${size.w - inset - radius},${size.h - inset}
    H ${inset + radius}
    A ${radius},${radius} 0 0 1 ${inset},${size.h - inset - radius}
    V ${inset + radius}
    A ${radius},${radius} 0 0 1 ${inset + radius},${inset}
    Z
  `;

  return (
    <div className={`relative w-full max-w-xs sm:max-w-sm ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full aspect-[307/255] rounded-[18px] overflow-hidden"
      >
        {/* SVG BORDER */}
        <svg
          viewBox={`0 0 ${size.w} ${size.h}`}
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
        >
          <defs>
            <linearGradient id="imageCardRay" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#780343" />
              <stop offset="100%" stopColor="#00335A" />
            </linearGradient>
          </defs>

          {/* Base border */}
          <path
            d={pathData}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={stroke}
          />

          {/* Animated ray */}
          <path
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke="url(#imageCardRay)"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
        </svg>

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0B223E 0%, #14293A 100%)",
          }}
        />

        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
         opacity: 0.95,
            }}
          />
        )}

<div
  className="absolute inset-0"
  style={{
    background: "rgba(20,40,60,0.15)",
  }}
/>



        <div className="relative h-full p-4 sm:p-6 flex flex-col justify-end z-30">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {count}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
