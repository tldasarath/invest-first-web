"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Container from "../Common/Layout/Contianer";
import SectionTag from "../Common/SectionTag";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonialsData } from "../../data/TestimonialsData";

const TestimonialCard = ({ item }) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    w: containerRef.current.offsetWidth,
                    h: containerRef.current.offsetHeight
                });
            }
        };

        // Initial measurement
        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    const { w, h } = dimensions;
    const r = 24; // Card corner radius
    const n = 80; // Icon container size (Increased)
    const gap = 20; // Distance from right edge (Decreased to move right)

    // U-Cutout Geometry
    const cx = w - gap - (n / 2); // Center X of the cutout
    const ur = 22; // Inner radius of U
    const cr = 10; // Top-edge rounding radius
    const d = 25;  // Vertical depth before curve

    const bgPath = w && h ? `
        M 0 ${r}
        A ${r} ${r} 0 0 1 ${r} 0
        L ${cx - ur - cr} 0
        A ${cr} ${cr} 0 0 1 ${cx - ur} ${cr}
        L ${cx - ur} ${d}
        A ${ur} ${ur} 0 0 0 ${cx + ur} ${d}
        L ${cx + ur} ${cr}
        A ${cr} ${cr} 0 0 1 ${cx + ur + cr} 0
        L ${w - r} 0
        A ${r} ${r} 0 0 1 ${w} ${r}
        L ${w} ${h - r}
        A ${r} ${r} 0 0 1 ${w - r} ${h}
        L ${r} ${h}
        A ${r} ${r} 0 0 1 0 ${h - r}
        Z
    ` : "";

    return (
        <div ref={containerRef} className="relative w-full h-full p-6 pt-12 isolate">
            {/* SVG Background - Hover effect removed as requested */}
            {w > 0 && (
                <svg className="absolute inset-0 w-full h-full -z-10 drop-shadow-xl">
                    <path
                        d={bgPath}
                        fill="#263A50"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                    />
                </svg>
            )}

            {/* Quote Icon Area - Centered in the U-notch */}
            <div
                className="absolute top-0 flex items-center justify-center z-20"
                style={{ right: `${gap}px`, width: `${n}px`, height: '50px' }}
            >
                <div className="w-full h-full flex items-center justify-center">
                    <Quote className="text-[#007CC4] w-8 h-8 fill-current rotate-180" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white tracking-wide">
                    {item.name}
                </h3>
                <p className="text-[#007CC4] text-sm font-medium mb-6">
                    {item.role}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed opacity-90">
                    {item.quote}
                </p>
            </div>
        </div>
    );
};

export default function TestimonialsSection() {
    const wrapperRef = useRef(null);
    const currIndex = useRef(0);
    const timerRef = useRef(null);
    const isAnimating = useRef(false);

    const totalOriginal = testimonialsData.testimonials.length;
    const stepPercent = 50 / totalOriginal; // 50% is the width of one full set

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            slideNext();
        }, 3000); // 3 seconds pause
    };

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const slideNext = () => {
        if (isAnimating.current || !wrapperRef.current) return;
        isAnimating.current = true;

        currIndex.current += 1;
        const nextPercent = -(currIndex.current * stepPercent);

        gsap.to(wrapperRef.current, {
            xPercent: nextPercent,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                isAnimating.current = false;
                // Check if we reached the end of the cloned set
                if (currIndex.current >= totalOriginal) {
                    currIndex.current = 0;
                    gsap.set(wrapperRef.current, { xPercent: 0 });
                }
            }
        });
    };

    const slidePrev = () => {
        if (isAnimating.current || !wrapperRef.current) return;
        isAnimating.current = true;

        if (currIndex.current === 0) {
            // Jump to end of cloned set visually (start of duplicate)
            currIndex.current = totalOriginal;
            gsap.set(wrapperRef.current, { xPercent: -50 });
        }

        currIndex.current -= 1;
        const nextPercent = -(currIndex.current * stepPercent);

        gsap.to(wrapperRef.current, {
            xPercent: nextPercent,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                isAnimating.current = false;
            }
        });
    };

    // Auto-play Effect
    useEffect(() => {
        // Initial delay before starting auto-play
        const initialDelay = setTimeout(() => {
            startTimer();
        }, 3000); // Initial 3s wait

        return () => {
            clearTimeout(initialDelay);
            stopTimer();
        };
    }, []);

    const handleInteractionStart = () => stopTimer();
    const handleInteractionEnd = () => startTimer();

    // Duplicate Data for Infinite Loop
    const sliderItems = [...testimonialsData.testimonials, ...testimonialsData.testimonials];

    return (
        <section className="md:py-20 py-10 bg-[#000F2B] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <svg className="absolute top-0 left-0 h-full w-auto" viewBox="0 0 500 800" fill="none">
                    <path d="M-50 0 C 100 200, 100 600, -50 800" stroke="#007CC4" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M-80 0 C 70 200, 70 600, -80 800" stroke="#007CC4" strokeWidth="2" fill="none" opacity="0.2" />
                    <path d="M-110 0 C 40 200, 40 600, -110 800" stroke="#007CC4" strokeWidth="2" fill="none" opacity="0.1" />
                </svg>
            </div>

            <Container className="overflow-visible">
                {/* Header with Buttons */}
                <div className="mb-12 relative z-10 pl-2 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <SectionTag text="Testimonials" />
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4">
                            {testimonialsData.heading}
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { handleInteractionStart(); slidePrev(); handleInteractionEnd(); }}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#007CC4] transition-colors text-white group"
                        >
                            <ChevronLeft className="group-hover:scale-110 transition-transform" size={24} />
                        </button>
                        <button
                            onClick={() => { handleInteractionStart(); slideNext(); handleInteractionEnd(); }}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#007CC4] transition-colors text-white group"
                        >
                            <ChevronRight className="group-hover:scale-110 transition-transform" size={24} />
                        </button>
                    </div>
                </div>

                {/* Slider Wrapper */}
                <div
                    className="w-full overflow-hidden"
                    onMouseEnter={handleInteractionStart}
                    onMouseLeave={handleInteractionEnd}
                >
                    <div
                        ref={wrapperRef}
                        className="flex gap-6 w-max items-stretch"
                    >
                        {sliderItems.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="w-[260px] md:w-[400px] shrink-0 select-none"
                            >
                                <TestimonialCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

