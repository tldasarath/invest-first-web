"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Container from "../Common/Layout/Contianer";

// FAQ Data from the image
const faqData = [
    {
        question: "How does company formation UAE process work step by step?",
        answer: "The company formation process involves initial approval, trade name reservation, document submission, and final license issuance."
    },
    {
        question: "What are benefits of offshore company setup UAE for investors?",
        answer: "Offshore setup offers asset protection, tax efficiency, global operations, and privacy without physical office requirements."
    },
    {
        question: "How is UAE mainland company setup different from Freezones businesses?",
        answer: "Mainland companies can trade directly within the UAE market, while Freezone companies are generally restricted to trading within the Freezone or internationally."
    },
    {
        question: "Who is eligible for UAE Freezone business setup options today?",
        answer: "Most international investors and freelancers are eligible, subject to specific activity regulations and visa requirements of the chosen Freezone."
    },
    {
        question: "How can I apply for UAE family visa services online?",
        answer: "You can apply through the official government portals like ICP or GDRFA, or enlist the help of a PRO service provider to manage the documentation and application process."
    }
];

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
        <section className="py-20 bg-[#050505] text-white">
            <Container>
                {/* Row 1: Heading Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#007CC4] text-lg font-bold tracking-widest">» FAQ «</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight w-full max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h2>
                </div>

                {/* Row 2: Image & Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

                    {/* LEFT: Image - SVG Cutout Implementation */}
                    <div ref={containerRef} className="relative w-full min-h-[400px] h-full drop-shadow-lg">

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

                    {/* RIGHT COLUMN: Accordion */}
                    <div className="flex flex-col gap-4 mt-8 md:mt-0">
                        {faqData.map((item, index) => {
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
