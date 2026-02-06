"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import SectionTag from "../Common/SectionTag";
import Container from "../Common/Layout/Contianer";

// FAQ Data from the image
import { faqSectionData } from "../../data/FAQData";

// FAQ Data from the image
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(1);
    const containerRef = useRef(null);
    const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        // Track window size for Badge/Cut dimensions
        const handleResize = () => {
            setIsMd(window.innerWidth >= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Track container size for SVG path
        if (!containerRef.current) return;
        const ro = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setImgSize({ w: width, h: height });
        });
        ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    // Layout Constants
    const r = 24; // standard radius (rounded-3xl approx)
    const badgeSize = isMd ? 160 : 128; // w-40(160px) or w-32(128px)
    const w = imgSize.w;
    const h = imgSize.h;

    // SVG Path: Rounded Rect with Rounded Bottom-Right Cutout (Fully Rounded)
    const imageClipPath = w && h ? `
        M 0 ${r}
        A ${r} ${r} 0 0 1 ${r} 0
        H ${w - r}
        A ${r} ${r} 0 0 1 ${w} ${r}
        V ${h - badgeSize - r}
        A ${r} ${r} 0 0 1 ${w - r} ${h - badgeSize}
        H ${w - badgeSize + r}
        A ${r} ${r} 0 0 0 ${w - badgeSize} ${h - badgeSize + r}
        V ${h - r}
        A ${r} ${r} 0 0 1 ${w - badgeSize - r} ${h}
        H ${r}
        A ${r} ${r} 0 0 1 0 ${h - r}
        Z
    ` : "";

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="md:py-20 py-10 bg-[#050505] text-white">
            <Container>
                {/* Row 1: Heading Section */}
                <div className="mb-12">
                    <SectionTag text="FAQ" />
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight w-full max-w-xl">
                        {faqSectionData.heading}
                    </h2>
                </div>

                {/* Row 2: Image & Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

                    {/* LEFT: Image - SVG Cutout Implementation */}
                    <div ref={containerRef} className="relative w-full h-[400px] md:h-auto drop-shadow-lg">

                        {/* Absolute wrapper to ensure content fills the grid cell height defined by the Accordion */}
                        <div className="absolute inset-0 w-full h-full">
                            {/* SVG Displaying the clipped Image */}
                            {w > 0 && (
                                <svg width={w} height={h} className="block w-full h-full">
                                    <defs>
                                        <clipPath id="faqImageClip">
                                            <path d={imageClipPath} />
                                        </clipPath>
                                    </defs>
                                    <image
                                        href="/assets/images/faq_person_working.png"
                                        width={w}
                                        height={h}
                                        preserveAspectRatio="xMidYMid slice"
                                        clipPath="url(#faqImageClip)"
                                    />
                                </svg>
                            )}

                            {/* Floating Stats/Badge */}
                            <div className="absolute bottom-0 right-0 bg-[#050505] w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-tl-3xl p-3">
                                <div className="w-full h-full bg-[#122130] rounded-xl flex flex-col items-center justify-center">
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">FAQ</h3>
                                    <HelpCircle className="mt-2 text-[#7A1245]" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Accordion */}
                    <div className="flex flex-col gap-4 mt-8 md:mt-0">
                        {faqSectionData.faqItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`
                                        rounded-xl overflow-hidden transition-all duration-300 border border-white/5
                                        ${isOpen ? 'bg-[#5c0b2d]' : 'bg-[#000F2B] hover:bg-[#001438]'}
                                    `}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-5 text-left"
                                    >
                                        <span className={`text-base md:text-lg font-medium pr-4 ${isOpen ? 'text-white' : 'text-white/90'}`}>
                                            {item.question}
                                        </span>
                                        <span className="shrink-0 ml-2">
                                            {isOpen ? <ChevronUp color="white" /> : <ChevronDown color="white" />}
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="p-5 pt-0 text-gray-200 text-sm md:text-base leading-relaxed border-t border-white/10 opacity-90">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </Container>
        </section>
    );
}
