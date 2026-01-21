"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientCard from "../Animations/GradientCard";
import Container from "../Common/Layout/Contianer";
import ImageCard from "../cards/ImageCard";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsection() {
    const sectionRef = useRef(null);

    // Fade-in animation
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".animate-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                }
            );

            gsap.fromTo(
                ".animate-text",
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen bg-[#050505] text-white py-16 flex flex-col justify-center items-center overflow-hidden"
        >
            <Container>
                <div className="max-w-7xl mx-auto w-full">
                    {/* Top Row: 500+ Card and About Text */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mb-8 ">
                        {/* Left: 500+ Customers Card */}
                        <div className="animate-card flex justify-center lg:justify-start">
                            <GradientCard
                                count="500+"
                                label="Satisfied Customers"
                                className="w-full max-w-[284px]"
                            />
                        </div>

                        {/* Right: About Us Text */}
                        <div className="animate-text flex flex-col justify-center text-center lg:text-left px-4 lg:px-0">
                            <h3 className="text-cyan-500 font-bold tracking-widest text-sm md:text-base uppercase mb-2">
                                » ABOUT US «
                            </h3>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 font-light">
                                Invest First is trusted business setup consultants
                                UAE, delivering expert company formation and
                                corporate services, helping entrepreneurs and
                                global businesses establish compliant foundations
                                with clarity, efficiency, and confidence across the Emirates.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <button className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-white font-medium flex items-center gap-2 hover:border-cyan-500 transition-colors">
                                    <span>Button</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: 3 Cards - Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                        {/* Card 1: 7+ Years (Image BG) */}
                        <div className="animate-card w-full flex justify-center">
                            <ImageCard
                                count="7+"
                                label="Years Experience"
                                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                                className="w-full max-w-[307px]"
                            />
                        </div>

                        {/* Card 2: 10+ Staffs */}
                        <div className="animate-card w-full flex justify-center">
                            <GradientCard
                                count="10+"
                                label="Staffs"
                                className="w-full max-w-[284px]"
                            />
                        </div>

                        {/* Card 3: 50+ Services */}
                        <div className="animate-card w-full flex justify-center">
                            <GradientCard
                                count="50+"
                                label="Services"
                                className="w-full max-w-[284px]"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}