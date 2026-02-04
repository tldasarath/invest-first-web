"use client";
import React from "react";
import Image from "next/image";
import Container from "../Common/Layout/Contianer";
import { visaData } from "@/data/VisaData";

const VisaServices = () => {
    const sliderRef = React.useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);

    // Refs for drag functionality
    const isDown = React.useRef(false);
    const startX = React.useRef(0);
    const scrollLeftStart = React.useRef(0);

    React.useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationId;

        const animate = () => {
            if (!isPaused) {
                // If we've scrolled past the first set of items (halfway), reset to 0
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                } else {
                    slider.scrollLeft += 1;
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    // Drag Handlers
    const handleMouseDown = (e) => {
        isDown.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeftStart.current = sliderRef.current.scrollLeft;
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        isDown.current = false;
        setIsPaused(false);
    };

    const handleMouseUp = () => {
        isDown.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll-fast speed
        sliderRef.current.scrollLeft = scrollLeftStart.current - walk;
    };

    return (
        <section className="w-full py-16 md:py-24 bg-[#00040F] text-white">
            <Container>
                {/* Header- Centered */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Visa Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                        turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
                        nec
                    </p>
                </div>

                {/* Slider Container - Hybrid (Auto + Manual Drag) */}
                <div className="relative w-full overflow-hidden pb-12 pt-4 px-4 -mx-4 md:mx-0">
                    <div
                        ref={sliderRef}
                        className="flex overflow-x-auto no-scrollbar gap-6 cursor-grab active:cursor-grabbing"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {/* Duplicate data for seamless looping */}
                        {[...visaData, ...visaData].map((visa, index) => (
                            <div
                                key={`${visa.id}-${index}`}
                                className="relative w-[300px] md:w-[350px] shrink-0 flex flex-col group select-none"
                            >
                                {/* 1. Top Image Section */}
                                <div className="relative h-64 w-full rounded-t-3xl overflow-hidden z-0">
                                    <Image
                                        src={visa.image}
                                        alt={visa.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-125 selection-none"
                                        draggable={false}
                                    />
                                    {/* Overlay for blending */}
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
                                </div>

                                {/* 2. The Shape Connector (Hump) */}
                                <div className="relative w-full h-[60px] -mt-[60px] z-10 flex items-end">
                                    {/* Left Shoulder */}
                                    <div className="flex-1 h-[1.5px] bg-[#0099CC]" />

                                    {/* Center Hump SVG */}
                                    <div className="relative w-[280px] h-[60px] shrink-0">
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 280 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute bottom-0 left-0 w-full h-full"
                                        >
                                            <path
                                                d="M0,60 Q40,60 40,30 Q40,1 70,1 H210 Q240,1 240,30 Q240,60 280,60 V65 H0 Z"
                                                fill="#030F26"
                                            />
                                            <path
                                                d="M0,59.25 Q40,59.25 40,29.25 Q40,0.75 70,0.75 H210 Q240,0.75 240,29.25 Q240,59.25 280,59.25"
                                                stroke="#0099CC"
                                                strokeWidth="1.5"
                                                fill="none"
                                            />
                                        </svg>

                                        {/* Title */}
                                        <div className="absolute inset-0 flex items-center justify-center pt-2">
                                            <h3 className="text-xl font-semibold text-white whitespace-nowrap">{visa.title}</h3>
                                        </div>
                                    </div>

                                    {/* Right Shoulder */}
                                    <div className="flex-1 h-[1.5px] bg-[#0099CC]" />
                                </div>

                                {/* 3. Bottom Text Content */}
                                <div className="bg-[#030F26] p-6 pt-2 rounded-b-3xl border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#0099CC] flex-grow">
                                    <p className="text-gray-300 text-sm text-center leading-relaxed">
                                        {visa.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <style jsx>{`
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .no-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                </div>
            </Container>
        </section>
    );
};

export default VisaServices;
