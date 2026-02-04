"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../Layout/Contianer";

export default function Footer() {
    const boxRef = useRef(null);
    const [size, setSize] = useState({ w: 1400, h: 420 });

    /* Measure footer size */
    useEffect(() => {
        if (!boxRef.current) return;

        const update = () => {
            setSize({
                w: boxRef.current.offsetWidth,
                h: boxRef.current.offsetHeight,
            });
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(boxRef.current);
        return () => ro.disconnect();
    }, []);

    /* === NOTCH GEOMETRY === */
    const cr = 0;          // corner radius
    const nr = 4;          // notch radius
    const notchW = 150;
    const notchH = 120;
    const shoulder = 72;

    const notchLeft = shoulder;
    const notchRight = notchLeft + notchW;

    const pathData = `
    M ${cr},0
    H ${notchLeft - nr}
    A ${nr},${nr} 0 0 0 ${notchLeft},${nr}
    V ${notchH - nr}
    A ${nr},${nr} 0 0 0 ${notchLeft + nr},${notchH}
    H ${notchRight - nr}
    A ${nr},${nr} 0 0 0 ${notchRight},${notchH - nr}
    V ${nr}
    A ${nr},${nr} 0 0 0 ${notchRight + nr},0
    H ${size.w - cr}
    A ${cr},${cr} 0 0 1 ${size.w},${cr}
    V ${size.h - cr}
    A ${cr},${cr} 0 0 1 ${size.w - cr},${size.h}
    H ${cr}
    A ${cr},${cr} 0 0 1 0,${size.h - cr}
    V ${cr}
    A ${cr},${cr} 0 0 1 ${cr},0
    Z
  `;

    return (
        <footer className="relative bg-[#050505] text-white pt-20 pb-16 overflow-hidden">
            <Container>
                <div ref={boxRef} className="relative">

                    {/* === BACKGROUND SHAPE === */}
                    <svg
                        viewBox={`0 0 ${size.w} ${size.h}`}
                        className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    >
                        <defs>
                            <linearGradient id="footerBg" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0e2438" />
                                <stop offset="100%" stopColor="#050505" />
                            </linearGradient>
                        </defs>

                        <path
                            d={pathData}
                            fill="url(#footerBg)"
                        />
                    </svg>

                    {/* === LOGO IN NOTCH === */}
                    <div
                        className="absolute top-0 left-[72px] flex items-center justify-center z-10"
                        style={{ width: notchW, height: notchH }}
                    >
                        <div className="bg-[#081a2a] rounded-2xl p-4 shadow-xl">
                            <img
                                src="/assets/images/logo/Invest First-logo.png"
                                alt="Invest First"
                                className="w-24"
                            />
                        </div>
                    </div>

                    {/* === FOOTER CONTENT === */}
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 pt-28 z-10">

                        {/* LEFT */}
                        <div>
                            <h3 className="text-3xl font-bold mb-4">
                                Let’s <br /> Join Us
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                                Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum.
                            </p>

                            <div className="flex gap-3">
                                <span className="p-2 bg-[#0b2238] rounded-md">f</span>
                                <span className="p-2 bg-[#0b2238] rounded-md">in</span>
                                <span className="p-2 bg-[#0b2238] rounded-md">ig</span>
                                <span className="p-2 bg-[#0b2238] rounded-md">wa</span>
                            </div>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>Home</li>
                                <li>Who are we</li>
                                <li>Mission & Vision</li>
                                <li>News / Blog</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        {/* SERVICES */}
                        <div>
                            <h4 className="font-semibold mb-4">Trending Services</h4>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>Company Formation</li>
                                <li>PRO Services</li>
                                <li>Family Visa for the UAE</li>
                                <li>View All Services</li>
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h4 className="font-semibold mb-4">Get In Touch</h4>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li>📞 +971 58 877 3753</li>
                                <li>✉️ info@investfirst.ae</li>
                                <li>🌐 www.investfirst.ae</li>
                            </ul>

                            <div className="mt-4 rounded-xl overflow-hidden">
                                <img
                                    src="/assets/map.png"
                                    alt="map"
                                    className="w-full"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </footer>
    );
}
