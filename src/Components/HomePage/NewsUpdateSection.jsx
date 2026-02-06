"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Container from "../Common/Layout/Contianer";
import { newsData } from "@/data/NewsData";
import SectionTag from "../Common/SectionTag";

const NewsCard = ({ item }) => {
    const overlayRef = useRef(null);
    const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

    useEffect(() => {
        if (!overlayRef.current) return;
        const ro = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setDimensions({ w: width, h: height });
        });
        ro.observe(overlayRef.current);
        return () => ro.disconnect();
    }, []);

    const { w, h } = dimensions;
    const r = 24; // Card corner radius
    const notchW = 70; // Width of the date badge area
    const notchH = 60; // Height to cut into the box
    const gap = 30; // Distance from right edge
    const cr = 12; // Radius for notch corners

    // Calculate Notch Coordinates
    const x1 = w - gap; // Right start of notch (on bottom edge)
    const x2 = w - gap - notchW; // Left end of notch (on bottom edge)
    const yTop = h - notchH;

    // Path with Bottom Notch (Cutout)
    const overlayPath = w && h ? `
        M 0 ${r}
        A ${r} ${r} 0 0 1 ${r} 0
        L ${w - r} 0
        A ${r} ${r} 0 0 1 ${w} ${r}
        L ${w} ${h - r}
        A ${r} ${r} 0 0 1 ${w - r} ${h}
        L ${x1 + cr} ${h}
        A ${cr} ${cr} 0 0 1 ${x1} ${h - cr}
        L ${x1} ${yTop + cr}
        A ${cr} ${cr} 0 0 0 ${x1 - cr} ${yTop}
        L ${x2 + cr} ${yTop}
        A ${cr} ${cr} 0 0 0 ${x2} ${yTop + cr}
        L ${x2} ${h - cr}
        A ${cr} ${cr} 0 0 1 ${x2 - cr} ${h}
        L ${r} ${h}
        A ${r} ${r} 0 0 1 0 ${h - r}
        Z
    ` : "";

    return (
        <div className="relative min-w-[300px] md:min-w-[350px] group snap-center isolate pt-2">
            {/* Image Container */}
            <div className="relative w-full h-[350px] rounded-3xl overflow-hidden z-0 shadow-lg">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 -z-20"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000F2B] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Content Overlay Wrapper */}
            <div className="relative z-10 -mt-20 mx-4">
                <div ref={overlayRef} className="relative w-full min-h-[140px]">

                    {/* SVG Shape Background */}
                    {w > 0 && (
                        <svg className="absolute inset-0 w-full h-full -z-10 drop-shadow-xl">
                            <path
                                d={overlayPath}
                                fill="#000F2B"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="1"
                                className="backdrop-blur-sm"
                            />
                        </svg>
                    )}

                    {/* Text Content */}
                    <div className="p-6 relative z-10">
                        <h3 className="text-xl font-semibold mb-4 text-white line-clamp-2 pr-[90px]">
                            {item.title}
                        </h3>

                        <div className="flex items-center justify-between mt-4">
                            <a href={item.link} className="text-[#0099CC] text-base font-medium flex items-center gap-2 hover:underline">
                                Read More <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Date Badge - Inside the Notch */}
                    <div
                        className="absolute flex flex-col items-center justify-center rounded-2xl shadow-inner"
                        style={{
                            width: `${notchW}px`,
                            height: `${notchH}px`,
                            right: `${gap}px`, // Matches the SVG gap
                            bottom: '0px'
                        }}
                    >
                        <span className="text-xl md:text-2xl font-bold text-[#750444] leading-none">{item.date}</span>
                        <span className=" text-base  font-normal  mt-1">{item.month}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

const NewsUpdateSection = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = 350; // Card width + gap
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="md:py-20 py-10 bg-linear-to-b from-[#14293A] to-[#0B223E] text-white relative overflow-hidden">
            {/* Background Decoration (Top Left Lines) */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
                    <path d="M-50 200 Q 50 100 200 -50" stroke="white" strokeWidth="1" />
                    <path d="M-30 200 Q 70 100 220 -50" stroke="white" strokeWidth="1" />
                    <path d="M-10 200 Q 90 100 240 -50" stroke="white" strokeWidth="1" />
                    <path d="M10 200 Q 110 100 260 -50" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="text-center md:text-left w-full relative">
                        {/* Centered Heading Group */}
                        <div className="flex flex-col items-center justify-center w-full">
                            <SectionTag text={newsData.subHeading} />
                            <h2 className="text-3xl md:text-4xl font-semibold">
                                " {newsData.heading}"
                            </h2>
                        </div>

                        {/* Navigation Buttons (Absolute Right on Desktop) */}
                        <div className="md:absolute right-0 bottom-0 flex items-center justify-end gap-3 mt-6 md:mt-0">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#007CC4] hover:border-[#007CC4] transition-all"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full bg-[#000F2B] border border-gray-600 flex items-center justify-center hover:bg-[#007CC4] hover:border-[#007CC4] transition-all"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cards Slider */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory"
                >
                    {newsData.newsItems.map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>
            </Container>



            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section >
    );
};

export default NewsUpdateSection;
