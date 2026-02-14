import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';

// Custom shape logic:
// The image has a "cutout" on the top-right corner.
// We can achieve this with a clip-path and a border overlay using SVG.
// Or simpler: use an SVG mask.
// Given the gradient border requirement, an SVG wrapper is best.

const WhyUAESection = () => {
    // Dimensions for the dynamic shape (responsive is tricky, so we'll use percentages/viewBox)
    // Actually, for a responsive image with a fixed corner radius cut, SVG might be complex.
    // CSS clip-path: polygon with rounding is hard.
    // Let's use a simpler approach: A container with the image and an overlay SVG for the border/mask.

    return (
        <section className="py-20 bg-[#020617] text-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">

                    {/* Left Side: SVG Image Shape */}
                    <div className="relative w-full max-w-md shrink-0 aspect-square md:aspect-[4/3.5] lg:aspect-auto lg:w-[38%]">

                        {/* Title positioned in the cutout space */}
                        <div className="absolute top-[10%] right-0 pr-4 lg:pr-6 z-20 whitespace-nowrap">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
                                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099CC] to-[#006699]">UAE?</span>
                            </h2>
                        </div>

                        {/* SVG Container */}
                        <svg
                            viewBox="0 0 400 450"
                            className="w-full h-full drop-shadow-2xl"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                {/* Gradient for border */}
                                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ec4899" />
                                    <stop offset="50%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#0099CC" />
                                </linearGradient>

                                {/* Shape Path Definition - Rounded Left Corners, Top-Right Step Cutout */}
                                <path id="shapePath" d="
                                    M 0,24
                                    A 24,24 0 0 1 24,0
                                    L 180,0 
                                    A 20,20 0 0 1 200,20
                                    L 200,80
                                    A 20,20 0 0 0 220,100
                                    L 380,100
                                    A 20,20 0 0 1 400,120
                                    L 400,426 
                                    A 24,24 0 0 1 376,450 
                                    L 24,450 
                                    A 24,24 0 0 1 0,426
                                    Z
                                " />

                                {/* Clip Path for Image */}
                                <clipPath id="imageClip">
                                    <use href="#shapePath" />
                                </clipPath>
                            </defs>

                            {/* Image masked by the shape */}
                            <image
                                href="/assets/images/faq_person_working.png"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid slice"
                                clipPath="url(#imageClip)"
                            />

                            {/* Gradient Border Stroke */}
                            <use
                                href="#shapePath"
                                fill="none"
                                stroke="url(#borderGradient)"
                                strokeWidth="4"
                            />
                        </svg>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="flex flex-col gap-6 text-gray-300">
                        <p className="leading-relaxed text-lg">
                            The United Arab Emirates has become one of the most attractive destinations for business setup and investment. Positioned at the crossroads of East and West, it offers unmatched global connectivity and access to major markets.
                        </p>
                        <p className="leading-relaxed text-lg">
                            The UAE provides tax-free benefits, dedicated free zones, and world-class infrastructure that make business formation simple and rewarding. Entrepreneurs also gain access to skilled talent, modern technology, and a strong legal framework that supports innovation.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhyUAESection;
