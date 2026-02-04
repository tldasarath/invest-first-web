"use client"
import { useLayoutEffect, useRef } from "react"; // Changed useEffect to useLayoutEffect for better GSAP init
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LicenseCategoryMobile from "./LicenseCategoryMobile";
import { licenseData } from "@/data/LicenseData";
import Container from "../Common/Layout/Contianer";
import Image from "next/image";
import Banner from "./Banner";

const LicenseCategorySection = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (containerRef.current) {
            const cards = containerRef.current.children;

            Array.from(cards).forEach((card, index) => {
                const isEven = index % 2 === 0;

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: isEven ? -100 : 100, // Reduced slide distance for smoothness
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5, // Slower duration
                        ease: "power4.out", // Smoother easing
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }
    }, []);

    return (
        <section className="relative w-full py-10 md:py-20   overflow-hidden">
            {/* Decorative Top-Left Shape - Hidden on sm/md */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
                {/* Top-Left Big Circle */}
                <div className="absolute top-10 left-20">
                    <div className="relative w-32 h-32 flex items-center justify-center animate-pulse-slow">
                        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#780343] to-[#00335A]">
                            <div className="w-full h-full bg-[#00040F] rounded-full" />
                        </div>
                        <div className="w-20 h-20 bg-[#1C7998] rounded-full shadow-lg opacity-80" />
                    </div>
                </div>

                {/* Bottom-Left Small Circle (Concentric) */}
                <div className="absolute top-52 left-10">
                    <div className="relative w-20 h-20 flex items-center justify-center animate-pulse-slow">
                        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#780343] to-[#00335A]">
                            <div className="w-full h-full bg-[#00040F] rounded-full" />
                        </div>
                        <div className="w-12 h-12 bg-[#1C7998] rounded-full shadow-lg opacity-80" />
                    </div>
                </div>

                {/* Extra Small Solid Circle 1 */}
                <div className="absolute top-36 left-8 w-8 h-8 bg-[#1C7998] rounded-full opacity-60 animate-pulse-slow" />

                {/* Extra Small Solid Circle 2 */}
                <div className="absolute top-44 left-36 w-6 h-6 bg-[#1C7998] rounded-full opacity-40 mix-blend-screen animate-pulse-slow" />
            </div>

            <Container>
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <p className="text-blue-500 tracking-widest text-base md:text-lg uppercase mb-2">
                        &raquo; License category &laquo;
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight max-w-lg mx-auto">
                        Explore UAE Business License Categories Choose a license that fits your business objectives
                    </h2>
                </div>

                {/* Mobile/Tablet View (sm/md) */}
                <LicenseCategoryMobile data={licenseData} />

                {/* Desktop View (lg+) */}
                <div ref={containerRef} className="hidden lg:flex flex-col gap-6 max-w-7xl mx-auto relative z-10">
                    {licenseData.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden"
                        >
                            {/* LEFT — TITLE */}
                            <div className="flex-[0.3] animate-width-left rounded-t-3xl flex items-center px-8 md:px-12 py-16 bg-[#000F2B] group-hover:bg-[#660033] transition-colors duration-300">
                                <h3 className="text-xl md:text-2xl font-semibold text-white whitespace-nowrap">
                                    {item.title}
                                </h3>
                            </div>

                            {/* CENTER — IMAGE */}
                            <div className="flex-[0.2] flex items-center   justify-center bg-[#000F2B] group-hover:bg-[#660033] transition-colors duration-300">
                                <div className="w-full h-full mb-5  flex  justify-center items-center bg-black rounded-b-3xl">
                                    <div className="relative w-52  h-32  rounded-2xl overflow-hidden transition-transform duration-300">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover p-1 rounded-3xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT — DESCRIPTION */}
                            <div className="flex-[0.5] animate-width-right flex justify-center items-center rounded-t-3xl px-8 py-6 bg-[#000F2B] group-hover:bg-[#660033] transition-colors duration-300 overflow-hidden">
                                <p className="text-sm md:text-base  leading-relaxed max-w-sm flex-none text-center">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Decorative SVG Line Bottom Right (Desktop Only) */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                    <path
                        d="M 400 0 V 100 C 400 150 400 150 350 150 H 100 C 50 150 50 150 50 200 V 400"
                        stroke="url(#decGradient)"
                        strokeWidth="1.5"
                    />
                    <defs>
                        <linearGradient id="decGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop stopColor="#3b82f6" />
                            <stop offset="1" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <Banner />
            <style jsx>{`
                @keyframes pulseSlow {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                .animate-pulse-slow {
                    animation: pulseSlow 2s ease-in-out infinite;
                }
                @keyframes flexPulseLeft {
                    0% { flex: 0.3; }
                    25% { flex: 0.2; }
                    75% { flex: 0.4; }
                    100% { flex: 0.3; }
                }
                @keyframes flexPulseRight {
                    0% { flex: 0.5; }
                    25% { flex: 0.6; }
                    75% { flex: 0.4; }
                    100% { flex: 0.5; }
                }
                .group:hover .animate-width-left {
                    will-change: flex;
                    animation: flexPulseLeft 6s ease-in-out infinite;
                }
                .group:hover .animate-width-right {
                    will-change: flex;
                    animation: flexPulseRight 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default LicenseCategorySection;
