"use client";

import React, { useEffect, useRef, useState, forwardRef } from "react";
import gsap from "gsap";

// simple cn helper
const cn = (...classes) => classes.filter(Boolean).join(" ");

const CircularGallery = forwardRef(function CircularGallery(
  {
    items,
    className,
    radius = 600,
    autoRotateSpeed = 0.02,
    ...props
  },
  ref
) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  const [rotation, setRotation] = useState(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const rafRef = useRef(null);

  // 🔁 Scroll-based rotation (same logic)
  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollable > 0 ? window.scrollY / scrollable : 0;

      setRotation(progress * 360);

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // 🔁 Auto rotation when idle (GSAP-powered RAF loop)
  useEffect(() => {
    const tick = () => {
      if (!isScrollingRef.current) {
        setRotation((r) => r + autoRotateSpeed);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [autoRotateSpeed]);

  // 🔁 Apply rotation with GSAP (smooth + GPU)
  useEffect(() => {
    gsap.to(innerRef.current, {
      rotateY: rotation,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, [rotation]);

  const anglePerItem = 360 / items.length;

  return (
    <div
      ref={ref || containerRef}
      role="region"
      aria-label="Circular 3D Gallery"
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className
      )}
      style={{ perspective: "2000px" }}
      {...props}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {items.map((item, i) => {
          const itemAngle = i * anglePerItem;
          const totalRotation = rotation % 360;
          const relativeAngle =
            (itemAngle + totalRotation + 360) % 360;
          const normalized =
            Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
          const opacity = Math.max(0.3, 1 - normalized / 180);

          return (
            <div
              key={item.photo.url}
              role="group"
              aria-label={item.common}
              className="absolute w-[300px] h-[400px]"
              style={{
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                left: "50%",
                top: "50%",
                marginLeft: "-150px",
                marginTop: "-200px",
                opacity,
                transition: "opacity 0.3s linear",
              }}
            >
              <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden border border-border bg-card/70 backdrop-blur-lg">
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: item.photo.pos || "center" }}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h2 className="text-xl font-bold">{item.common}</h2>
                  <em className="text-sm italic opacity-80">
                    {item.binomial}
                  </em>
                  <p className="text-xs mt-2 opacity-70">
                    Photo by: {item.photo.by}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default CircularGallery;
