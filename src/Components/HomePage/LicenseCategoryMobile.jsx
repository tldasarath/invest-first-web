"use client";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LicenseCategoryMobile = ({ data }) => {
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
                        x: isEven ? -100 : 100,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
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
        <div ref={containerRef} className="flex flex-col gap-6 w-full relative z-10 lg:hidden">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col rounded-3xl overflow-hidden bg-[#000F2B] hover:bg-[#660033] transition-colors duration-300"
                >
                    {/* Image Section */}
                    <div className="w-full h-56 relative  flex items-center justify-center p-4">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain   "
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col items-center text-center">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LicenseCategoryMobile;
