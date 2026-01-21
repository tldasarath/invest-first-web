"use client"
import React from "react";
import Image from "next/image";
import Container from "../Common/Layout/Contianer";

const licenseData = [
    {
        id: 1,
        title: "Professional License",
        description:
            "Invest First assists with UAE professional license services for consultants and service providers operating legally in Dubai with full regulatory compliance.",
        image: "/assets/images/license-pro.jpg",
    },
    {
        id: 2,
        title: "Commercial License",
        description:
            "Invest First provides UAE commercial license services enabling trading, import, export, retail, and wholesale businesses across Dubai and other Emirates.",
        image: "/assets/images/license-com.jpg",
    },
    {
        id: 3,
        title: "Industrial License",
        description:
            "Invest First supports UAE industrial license services for manufacturing, production, and factory operations meeting Dubai industrial regulations and safety standards.",
        image: "/assets/images/license-ind.jpg",
    },
    {
        id: 4,
        title: "E-Trader License",
        description:
            "Invest First offers UAE E-Trader license services for online businesses, freelancers, and social media sellers operating legally in Dubai.",
        image: "/assets/images/license-etrade.jpg",
    },
    {
        id: 5,
        title: "Tourism / Travel License",
        description:
            "Invest First delivers UAE tourism and travel license services for agencies, tour operators, and hospitality businesses compliant with Dubai regulations.",
        image: "/assets/images/license-tour.jpg",
    },
];

const LicenseCategorySection = () => {
    return (
        <section className="relative w-full py-20 bg-[#00040F] overflow-hidden">
            {/* Decorative Top-Left Circles */}
            <div className="absolute top-10 left-5 md:left-20 flex flex-col gap-2 opacity-50 pointer-events-none">
                <div className="w-16 h-16 rounded-full border border-teal-500/30 ml-4" />
                <div className="w-24 h-24 rounded-full border-2 border-teal-500/50 -mt-8" />
                <div className="w-10 h-10 rounded-full border border-teal-500/30 ml-2" />
            </div>

            <Container>
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <p className="text-blue-500 tracking-widest text-base md:text-lg uppercase mb-2">
                        &raquo; License category &laquo;
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing
                    </h2>
                </div>

                {/* List */}
                <div className="flex flex-col gap-6 max-w-7xl mx-auto relative z-10">
                    {licenseData.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden transition-all duration-300"
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
                                            src={"/assets/images/t.png"}
                                            alt={item.title}
                                            fill
                                            className="object-cover p-1 rounded-3xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT — DESCRIPTION */}
                            <div className="flex-[0.5] animate-width-right flex justify-center items-center rounded-t-3xl px-8 py-6 bg-[#000F2B] group-hover:bg-[#660033] transition-colors duration-300 overflow-hidden">
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed w-[28rem] flex-none text-center">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Decorative SVG Line Bottom Right */}
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

            <style jsx>{`
                @keyframes flexPulseLeft {
                    0% { flex: 0.3; }
                    25% { flex: 0.1; }
                    75% { flex: 0.5; }
                    100% { flex: 0.3; }
                }
                @keyframes flexPulseRight {
                    0% { flex: 0.5; }
                    25% { flex: 0.7; }
                    75% { flex: 0.3; }
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
