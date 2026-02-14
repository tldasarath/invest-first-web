"use client";
import React, { useState } from "react";
import Container from "../Common/Layout/Contianer";
import SectionTag from "../Common/SectionTag";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import { pricingData } from "../../data/PricingData";



const PricingCard = ({ item }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const currentOption = item.options[selectedIndex];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 group">

            {/* Left Side: Package Title */}
            <div className="lg:w-1/3 flex flex-col justify-start items-start w-full text-center">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-300 relative inline-block pb-2 group-hover:text-white transition-colors duration-300">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0099CC]"></span>
                </h3>
            </div>

            {/* Right Side: The Card */}
            <div className="lg:w-2/3 w-full flex relative md:h-48 drop-shadow-2xl">

                {/* Dark Blue Part (Left) - SVG Version */}
                <div className="z-20 relative h-full w-[30%] md:w-[170px] shrink-0">
                    {/* Increased viewBox width/height and extended negative origin to prevent stroke clipping */}
                    <svg width="100%" height="100%" viewBox="-2 -2 176 196" preserveAspectRatio="none" className="drop-shadow-lg" style={{ overflow: 'visible' }}>
                        {/* Main Fill Shape with Rounded Corners and Full Border */}
                        <path
                            d="M30,0 H90 Q110,0 110,20 V36 Q110,56 130,56 H140 Q160,56 160,76 V116 Q160,136 140,136 H130 Q110,136 110,156 V172 Q110,192 90,192 H30 Q0,192 0,162 V30 Q0,0 30,0 Z"
                            fill="#000F2B"
                            stroke="#0099CC"
                            strokeWidth="1.5"
                        />
                    </svg>

                    {/* Content Overlay */}
                    <div className="absolute inset-0">
                        {/* Logo Image - Positioned at Top */}
                        <div className="absolute top-6 left-0 right-0 flex justify-center items-center pr-[50px]">
                            <div className="w-12 h-12 relative">
                                <img
                                    src={item.logoSrc}
                                    alt={item.logo}
                                    className="object-contain w-full h-full"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(172deg) brightness(88%) contrast(101%)' }}
                                />
                            </div>
                        </div>

                        {/* Price Tag/Button - Positioned at Center */}
                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-center items-center z-30">
                            <div className="bg-gradient-to-r from-[#701a40] to-[#991b5b] text-white px-5 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg whitespace-nowrap">
                                {currentOption.price}
                            </div>
                        </div>
                    </div>
                </div>

                {/* White/Grey Part (Right) - SVG Version with Cutout */}
                <div className="grow relative h-full -ml-[55px] z-10">
                    {/* Negative margin set to -55px for tighter overlap */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-55 0 500 192"
                        preserveAspectRatio="none"
                        className="drop-shadow-lg"
                    >
                        <path
                            d="
      M-35,0
      H420
      Q440,0 440,20
      V22
      Q440,26 432,26
      H420
      Q410,26 410,36
      V156
      Q410,166 420,166
      H432
      Q440,166 440,172
      Q440,192 420,192
      H-35
      Q-55,192 -55,172
      V165
      Q-55,145 -32,145
      H-24
      Q-18,145 -20,130
      V70
      Q-18,50 -24,50
      H-32
      Q-55,50 -55,30
      V20
      Q-55,0 -35,0
      Z
    "
                            fill="#ffffff"
                        />
                    </svg>


                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-row items-center justify-center p-4 pl-24 md:pl-0 pr-16 w-full h-full gap-8 md:gap-16">

                        {/* Visa Buttons */}
                        <div className="flex flex-col gap-3">
                            {item.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`px-8 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${index === selectedIndex ? 'bg-[#1F6E8C] text-white border-[#1F6E8C]' : 'bg-transparent border-[#1F6E8C] text-gray-600 hover:bg-[#1F6E8C] hover:text-white'}`}
                                >
                                    {option.name}
                                </button>
                            ))}
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col gap-3">
                            {currentOption.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#0B1527] flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-800 font-medium whitespace-nowrap">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Vertical Button on Far Right */}
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 h-[124px] w-12 md:w-12 bg-[#180C2E] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#281549] transition-colors overflow-hidden group/btn shadow-lg">
                            <div className="transform -rotate-90">
                                <PrimaryButton
                                    text="Button"
                                    className="!mt-0  !px-6 !py-2 "
                                />
                            </div>
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PricingPlanSection = () => {
    return (
        <section className="py-10 md:py-20 relative overflow-hidden bg-[#020617]"> {/* Dark background matching image */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Optional background elements */}
            </div>

            <Container>
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 relative z-10 text-white">
                    <SectionTag text="Pricing Plan" />
                    <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
                        Choose the Right <br /> Plan for You
                    </h2>
                </div>

                {/* Pricing List */}
                <div className="flex flex-col gap-16 relative z-10 w-full ">
                    {pricingData.map((item) => (
                        <PricingCard key={item.id} item={item} />
                    ))}

                    {/* Bottom Button */}
                    <div className="mt-8 flex justify-start">
                        <PrimaryButton
                            text="Button"
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default PricingPlanSection;
