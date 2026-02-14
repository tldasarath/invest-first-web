"use client";
import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import SectionTag from '../Common/SectionTag';

const SocialMediaPromo = () => {
    const cards = [
        {
            id: 1,
            image: "/assets/images/t.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        },
        {
            id: 2,
            image: "/images/social-media/card2.jpg", // Placeholder
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        },
        {
            id: 3,
            image: "/images/social-media/card3.jpg", // Placeholder
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        },
        {
            id: 4,
            image: "/images/social-media/card4.jpg", // Placeholder
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        }
    ];

    return (
        <section className="py-10 md:py-20 relative bg-[#020617] overflow-hidden">
            <Container>
                {/* Header */}
                <div className="flex flex-col items-start mb-10 md:mb-16 z-10 relative pl-4 md:pl-0">
                    <SectionTag text="Social Media" />
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2 leading-tight">
                        Let Your Brand <br className="hidden md:block" />
                        Speak Online
                    </h2>
                </div>

                {/* Cards Slider */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-6 w-max animate-scroll">
                        {[...cards, ...cards].map((card, index) => (
                            <div key={`${card.id}-${index}`} className="relative w-[320px] shrink-0 flex flex-col group select-none">
                                {/* 1. Top Image Section */}
                                <div className="relative h-96 w-full rounded-3xl overflow-hidden z-0">
                                    {/* Use a decorative gradient placeholder if image fails/missing */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#14293A] to-[#0B223E]" />
                                    {/* Actual Image */}
                                    {card.image && (
                                        <Image
                                            src={card.image}
                                            alt="Social Media Post"
                                            fill
                                            className="object-cover transition-transform duration-500 scale-110 group-hover:scale-125 selection-none"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
                                </div>

                                {/* 2. The Shape Connector (Hump) */}
                                <div className="relative w-full h-[60px] -mt-[70px] -mb-[2px] z-30 flex items-end justify-center pointer-events-none">
                                    {/* Center Hump SVG */}
                                    <div className="relative w-full h-[60px] shrink-0">
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 320 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                            className="absolute bottom-0 left-0 w-full h-full overflow-visible"
                                        >
                                            <path
                                                d="M-10,59.25 L10,59.25 Q40,59.25 40,29.25 Q40,0.75 70,0.75 H250 Q280,0.75 280,29.25 Q280,59.25 310,59.25 L330,59.25"
                                                stroke="#000000"
                                                strokeWidth="12"
                                                fill="none"
                                            />
                                            <path
                                                d="M0,60 L10,60 Q40,60 40,30 Q40,1 70,1 H250 Q280,1 280,30 Q280,60 310,60 L320,60 V65 H0 Z"
                                                fill="#030F26"
                                            />
                                            <path
                                                d="M0,59.25 L10,59.25 Q40,59.25 40,29.25 Q40,0.75 70,0.75 H250 Q280,0.75 280,29.25 Q280,59.25 310,59.25 L320,59.25"
                                                stroke="#0099CC"
                                                strokeWidth="1.5"
                                                fill="none"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* 3. Bottom Text Content */}
                                <div className="relative z-20 bg-[#030F26] p-6 pt-2 rounded-b-3xl rounded-t-none border-[1.5px] border-t-0 border-[#0099CC] grow">
                                    <p className="text-gray-300 text-sm text-center leading-relaxed font-light font-outfit">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default SocialMediaPromo;
