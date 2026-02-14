"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Container from "../Common/Layout/Contianer";
import { freezoneData } from "@/data/FreezoneData";
import SectionTag from "../Common/SectionTag";
import { ArrowRight } from "lucide-react";

const      FreezoneSection = () => {
    const [activeTab, setActiveTab] = useState(freezoneData.categories[0].id);
    const scrollContainerRef = useRef(null);
    const sectionRefs = useRef({});

    // Scroll to category function
    const scrollToCategory = (id) => {
        setActiveTab(id);
        const element = sectionRefs.current[id];
        if (element && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // Calculate relative position to scroll
            const topPos = element.offsetTop - container.offsetTop;
            container.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    };

    // Intersection Observer to update active tab on scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const options = {
            root: container,
            threshold: 0.1, // Trigger when even a small part is visible
            rootMargin: "-10% 0px -60% 0px" // Adjusted to trigger active state more accurately
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.getAttribute('data-id'));
                }
            });
        }, options);

        const refs = sectionRefs.current;
        for (const key in refs) {
            if (refs[key]) observer.observe(refs[key]);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="py-10 md:py-20 text-white relative overflow-hidden">
            <div className="mx-4 md:mx-6 lg:mx-12 bg-linear-to-b from-[#14293A] to-[#0B223E] rounded-[40px] overflow-hidden relative">
                {/* Background Images */}
                <div className="hidden md:block  absolute inset-0 z-0 pointer-events-none">
                    {freezoneData.leftBgImage && (
                        <Image
                            src={freezoneData.leftBgImage}
                            alt="Background Left"
                            width={500}
                            height={800}
                            className="absolute left-0 top-0 h-full w-auto object-cover "
                        />
                    )}
                    {freezoneData.rightBgImage && (
                        <Image
                            src={freezoneData.rightBgImage}
                            alt="Background Right"
                            width={500}
                            height={800}
                            className="absolute right-0 top-0 h-full w-auto object-cover "
                        />
                    )}
                </div>
                {/* <Container> */}
                {/* Main Content Box */}
                <div className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 xl:px-[10%] w-full relative">

                    {/* Background Gradients */}

                    <div className="flex flex-col lg:flex-row justify-between w-full  relative z-10 h-full">
                        {/* Left Column: Navigation */}
                        <div className="lg:w-[50%] flex flex-col gap-8 lg:h-full">
                            <div>
                                <SectionTag text={freezoneData.subHeading} />
                                <h2 className="text-3xl md:text-4xl font-semibold mt-4 leading-10 max-w-2xl ">
                                    {freezoneData.heading}
                                </h2>
                            </div>

                            <div className="flex flex-col gap-3">
                                {freezoneData.categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollToCategory(cat.id)}
                                        className={`text-left px-6 py-4 rounded-2xl max-w-sm transition-all duration-300 flex items-center justify-between group w-full
                                            ${activeTab === cat.id
                                                ? "bg-[#3D0A24] border border-[#750444] shadow-lg shadow-[#750444]/20"
                                                : "hover:bg-white/5 text-gray-400 hover:text-white border border-transparent"
                                            }`}
                                    >
                                        <span className={`text-lg font-medium ${activeTab === cat.id ? "text-white" : ""}`}>
                                            {cat.name}
                                        </span>
                                        {activeTab === cat.id && (
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Scrollable List */}
                        <div className="lg:w-[50%] relative h-[500px] lg:h-auto">
                            <div
                                ref={scrollContainerRef}
                                className="absolute inset-0 h-full overflow-y-auto no-scrollbar scroll-smooth pr-2 space-y-12 pb-20"
                            >
                                {freezoneData.categories.map((cat) => (
                                    <div
                                        key={cat.id}
                                        data-id={cat.id}
                                        ref={el => sectionRefs.current[cat.id] = el}
                                        className="mb-8 scroll-mt-4"
                                    >
                                        <div className="flex flex-col gap-6 items-center">
                                            {cat.items.map((item, index) => (
                                                <div
                                                    key={item.id}
                                                    className="relative w-full md:w-[350px] shrink-0 flex flex-col group select-none"
                                                >
                                                    {/* 1. Top Image Section */}
                                                    <div className="relative h-96 w-full rounded-3xl overflow-hidden z-0">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-125 selection-none"
                                                            draggable={false}
                                                        />
                                                        {/* Overlay for blending */}
                                                        <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
                                                    </div>

                                                    {/* 2. The Shape Connector (Hump) */}
                                                    <div className="relative w-full h-[60px] -mt-[105px] -mb-[2px] z-30 flex items-end justify-center">
                                                        {/* Center Hump SVG */}
                                                        <div className="relative w-full h-[60px] shrink-0">
                                                            <svg
                                                                width="100%"
                                                                height="100%"
                                                                viewBox="0 0 320 60"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                preserveAspectRatio="none"
                                                                className="absolute bottom-0 left-0 w-full h-full"
                                                            >
                                                                <path
                                                                    d="M10,60 Q40,60 40,30 Q40,1 70,1 H250 Q280,1 280,30 Q280,60 310,60 V65 H10 Z"
                                                                    fill="#030F26"
                                                                />
                                                                <path
                                                                    d="M10,59.25 Q40,59.25 40,29.25 Q40,0.75 70,0.75 H250 Q280,0.75 280,29.25 Q280,59.25 310,59.25"
                                                                    stroke="#0099CC"
                                                                    strokeWidth="1.5"
                                                                    fill="none"
                                                                />
                                                            </svg>

                                                            {/* Title */}
                                                            <div className="absolute inset-0 flex items-center justify-center pt-2 px-4">
                                                                <h3 className="text-sm md:text-base font-semibold text-center text-white leading-tight w-full max-w-[200px]">{item.title}</h3>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* 3. Bottom Text Content */}
                                                    <div className="relative z-20 bg-[#030F26] p-6 pt-2 rounded-3xl border-[1.5px] border-[#0099CC] grow">
                                                        <p className="text-gray-300 text-sm text-center leading-relaxed font-light font-outfit">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* </Container> */}
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
        </section>
    );
};

export default FreezoneSection;
