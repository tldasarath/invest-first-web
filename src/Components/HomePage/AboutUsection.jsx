"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientCard from "../Animations/GradientCard";
import Container from "../Common/Layout/Contianer";
import ImageCard from "../cards/ImageCard";
import PrimaryButton from "../Common/Buttons/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {


            const q = gsap.utils.selector(el);

            /* ================= DECOR LINE RAY ANIMATION ================= */
            q(".line-ray").forEach((path, i) => {
                const length = path.getTotalLength();
                const raySize = length * 0.35;

                gsap.set(path, {
                    strokeDasharray: `${raySize} ${length}`,
                    strokeDashoffset: raySize,
                    fill: "none",
                });

                gsap.to(path, {
                    strokeDashoffset: -length,
                    duration: 5,
                    ease: "none",
                    repeat: -1,
                    delay: i * 1.5,
                });
            });

            /* ================= CARD ANIMATIONS ================= */
            gsap.fromTo(
                q(".animate-card"),
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reset play reset",
                        invalidateOnRefresh: true,
                    },
                }
            );

            /* ================= TEXT BLOCK SLIDE ================= */
            gsap.fromTo(
                q(".animate-text"),
                { opacity: 0, x: 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reset play reset",
                        invalidateOnRefresh: true,
                    },
                }
            );

            /* ================= WORD-BY-WORD TEXT FILL ================= */
            const text = q(".animate-fill-text")[0];

            if (text && !text.dataset.split) {
                const words = text.innerText.trim().split(" ");
                text.innerHTML = words
                    .map(
                        (word, i) =>
                            `<span class="fill-word">${word}</span>${i < words.length - 1 ? " " : ""}`
                    )
                    .join("");
                text.dataset.split = "true";
            }

            const words = q(".fill-word");
            gsap.set(words, { color: "rgba(255,255,255,0.3)" });

            gsap.to(words, {
                color: "rgba(255,255,255,1)",
                stagger: 0.08,
                ease: "none",
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                    end: "bottom 40%",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });

        }, el);



        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full isolate   bg-[#050505] text-white pt-10 md:pt-24 pb-10 md:pb-40 overflow-hidden"
        >
            <Container>
                <div className="relative  max-w-7xl mx-auto z-10">

                    {/* ===== TOP ROW ===== */}
                    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 mb-16">

                        <div className="animate-card">
                            <GradientCard
                                count="500+"
                                label="Satisfied Customers"
                                className="w-full max-w-[284px]"
                            />
                        </div>

                        <div className="animate-text flex flex-col justify-center">
                            <h3 className="text-cyan-500 font-semibold tracking-widest text-sm uppercase mb-3">
                                » ABOUT US «
                            </h3>

                            <h3 className="animate-fill-text text-xl md:text-3xl leading-normal md:leading-[40px] max-w-3xl mb-8 font-semibold">
                                Invest First is trusted business setup consultants UAE, delivering
                                expert company formation and corporate services, helping
                                entrepreneurs and global businesses establish compliant
                                foundations with clarity, efficiency, and confidence across the Emirates.
                            </h3>

                            <PrimaryButton text="View More" url="/about-us" />
                        </div>
                    </div>

                    {/* ===== BOTTOM ROW ===== */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center md:items-start">

                        <div className="animate-card">
                            <ImageCard
                                count="7+"
                                label="Years Experience"
                                backgroundImage="/assets/images/about/CardImg.png"
                                className="w-full max-w-[307px] "
                            />
                        </div>

                        <div className="animate-card">
                            <GradientCard
                                count="10+"
                                label="Staffs"
                                className="w-full max-w-[284px]"
                            />
                        </div>

                        <div className="animate-card">
                            <GradientCard
                                count="50+"
                                label="Services"
                                className="w-full max-w-[284px]"
                            />
                        </div>

                    </div>
                </div>
            </Container>
            {/* RIGHT SIDE DECORATIVE LINES */}
            <div className="hidden md:inline-block absolute  bottom-0 lg:bottom-[-90px] xl:bottom-0 right-0 lg:right-[100px] xl:right-0 xl:rotate-[0deg] lg:rotate-[-90deg] rotate-[0deg] overflow-hidden pointer-events-none z-0">
                <svg
                    width="239"
                    height="390"
                    viewBox="0 0 339 590"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="decor-lines"
                >
                    <defs>
                        {/* BASE LINE GRADIENT (STATIC) */}
                        <linearGradient id="baseLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#780343" />
                            <stop offset="100%" stopColor="#00335A" />
                        </linearGradient>

                        {/* RAY GRADIENT (MOVING) */}
                        <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            {/* <!-- fully invisible start --> */}
                            <stop offset="0%" stopColor="rgba(204,10,116,0)" />

                            {/* <!-- very slow fade in --> */}
                            <stop offset="25%" stopColor="rgba(204,10,116,0.25)" />
                            <stop offset="40%" stopColor="rgba(204,10,116,0.8)" />

                            {/* <!-- bright core --> */}
                            <stop offset="50%" stopColor="rgba(61,154,226,1)" />

                            {/* <!-- slow fade out --> */}
                            <stop offset="40%" stopColor="rgba(61,154,226,0.8)" />
                            <stop offset="45%" stopColor="rgba(61,154,226,0.25)" />

                            {/* <!-- fully invisible end --> */}
                            <stop offset="100%" stopColor="rgba(61,154,226,0)" />
                        </linearGradient>



                    </defs>

                    {/* ================= PATH 1 ================= */}
                    {/* BASE LINE */}
                    <path
                        d="M1.5 589.5V474.84C2 469.123 6.7 457.788 21.5 458.18H168.5C174.167 457.527 185.3 452.497 184.5 437.601V18.16C184.667 13.0967 188.3 2.676 201.5 1.5H338.5"
                        stroke="url(#baseLineGrad)"
                        strokeWidth="3"
                    />

                    {/* RAY */}
                    <path
                        className="line-ray ray-1"
                        fill="none"
                        d="M1.5 589.5V474.84C2 469.123 6.7 457.788 21.5 458.18H168.5C174.167 457.527 185.3 452.497 184.5 437.601V18.16C184.667 13.0967 188.3 2.676 201.5 1.5H338.5"
                        stroke="url(#rayGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    {/* ================= PATH 2 ================= */}
                    {/* BASE LINE */}
                    <path
                        d="M335.5 411.5H113.506C108.506 411.832 98.1061 415.19 96.5061 425.959V514.71C96.3395 518.865 99.5061 527.574 113.506 529.169H195.505C200.005 529.169 209.005 531.862 209.005 542.632V589.5"
                        stroke="url(#baseLineGrad)"
                        strokeWidth="3"
                    />

                    {/* RAY */}
                    <path
                        className="line-ray ray-2"
                        d="M335.5 411.5H113.506C108.506 411.832 98.1061 415.19 96.5061 425.959V514.71C96.3395 518.865 99.5061 527.574 113.506 529.169H195.505C200.005 529.169 209.005 531.862 209.005 542.632V589.5"
                        stroke="url(#rayGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>



        </section>
    );
}
