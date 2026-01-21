"use client";

import React from "react";

export default function ImageCard({
    count = "7+",
    label = "Years Experience",
    backgroundImage,
    className = "",
}) {
    return (
        <div className={`relative w-full max-w-xs sm:max-w-sm ${className}`}>
            {/* Card Container */}
            <div
                className="relative w-full aspect-[307/255] rounded-[18px] overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #0B223E 0%, #14293A 100%)",
                    border: "3px solid transparent",
                    backgroundImage: `
                        linear-gradient(135deg, #0B223E 0%, #14293A 100%),
                        linear-gradient(90deg, #780343 0%, #00335A 100%)
                    `,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.8)",
                    opacity: 0.8
                }}
            >
                {/* Background Image - only renders if provided */}
                {backgroundImage && (
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            opacity: 0.4,
                            mixBlendMode: "luminosity"
                        }}
                    />
                )}

                {/* Gradient Overlay for better text visibility */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(180deg, rgba(11, 34, 62, 0.3) 0%, rgba(11, 34, 62, 0.8) 100%)"
                    }}
                />

                {/* Content */}
                <div className="relative h-full p-4 sm:p-6 flex flex-col justify-end z-10">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-1 sm:mb-2">
                            {count}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white font-medium">
                            {label}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}