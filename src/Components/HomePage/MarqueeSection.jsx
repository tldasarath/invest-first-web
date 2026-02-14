import React from "react";
import Image from "next/image";

const MarqueeSection = () => {
    const images = [
        "/assets/images/t.png",
        "/assets/images/t.png",
        "/assets/images/t.png",
        "/assets/images/t.png",
    ];

    return (
        <section className="bg-[#3D0A24] py-10 md:py-20 overflow-hidden relative border-y border-[#5E1C38]">
            <div className="flex w-max animate-marquee items-center">
                {/* Initial Content */}
                <MarqueeContent images={images} />
                {/* Duplicate for Infinite Loop */}
                <MarqueeContent images={images} />
                {/* Triplicate for wide screens */}
                <MarqueeContent images={images} />
                {/* Quadruplicate for safety */}
                <MarqueeContent images={images} />
            </div>
        </section>
    );
};

const MarqueeContent = ({ images }) => (
    <div className="flex items-center space-x-12 shrink-0 pr-12">
        <span className="text-4xl md:text-6xl font-bold uppercase text-stroke tracking-wider">
            LOREM IPSUM
        </span>
        <div className="relative w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden shrink-0">
            <Image
                src={images[0]}
                alt="Marquee Image"
                fill
                className="object-cover"
            />
        </div>
        <span className="text-4xl md:text-6xl font-bold uppercase text-stroke tracking-wider">
            DOLOR SIT AMET
        </span>
        <div className="relative w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden shrink-0">
            <Image
                src={images[1]}
                alt="Marquee Image"
                fill
                className="object-cover"
            />
        </div>
        <span className="text-4xl md:text-6xl font-bold uppercase text-stroke tracking-wider">
            CONSECTETUR
        </span>
        <div className="relative w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden shrink-0">
            <Image
                src={images[0]}
                alt="Marquee Image"
                fill
                className="object-cover"
            />
        </div>
        <span className="text-4xl md:text-6xl font-bold uppercase text-stroke tracking-wider">
            ADIPISCING ELIT
        </span>
    </div>
);

export default MarqueeSection;
