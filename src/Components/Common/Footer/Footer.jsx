"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../Layout/Contianer";
import { Facebook, Linkedin, Instagram, MessageCircle, Phone, Mail, Globe, MapPin } from "lucide-react";

/* === NOTCH GEOMETRY === */
const cr = 0;          // corner radius
const nr = 24;          // notch radius
const notchH = 180;

export default function Footer() {
    const boxRef = useRef(null);
    const contentRef = useRef(null);
    const [size, setSize] = useState({ w: 1400, h: 420 });
    const [shoulder, setShoulder] = useState(72);
    const [notchW, setNotchW] = useState(220);

    /* Measure footer size and position */
    useEffect(() => {
        if (!boxRef.current) return;

        const update = () => {
            // Measure width/height
            setSize({
                w: boxRef.current.offsetWidth,
                h: boxRef.current.offsetHeight,
            });

            // Measure offset for alignment
            const width = window.innerWidth;
            const isMobile = width < 768;
            const isTabletOrLaptop = width >= 768 && width < 1280;
            const isMd = width >= 768 && width < 1024; // Specific MD range for width reduction

            // Notch Width Logic
            let currentW = 220;
            if (isMd) {
                currentW = 180; // Decrease width only in MD
            }
            setNotchW(currentW);

            if (isMobile) {
                // Center the notch on mobile (< 768px)
                const centerPos = (boxRef.current.offsetWidth - currentW) / 2;
                setShoulder(centerPos);
            } else if (contentRef.current) {
                const boxRect = boxRef.current.getBoundingClientRect();
                const contentRect = contentRef.current.getBoundingClientRect();
                const newShoulder = contentRect.left - boxRect.left;

                // On tablet/laptop (MD & LG), reduce offset to avoid cutting off left side
                // User asked for "md and lg screen ... move little right" previously.
                // Keeping offset logic for 768-1280 range.
                const offset = isTabletOrLaptop ? 20 : 50;

                // Ensure shoulder isn't negative or crazy
                if (newShoulder >= 0) {
                    setShoulder(newShoulder - offset);
                }
            }
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(boxRef.current);

        window.addEventListener('resize', update);

        return () => {
            ro.disconnect();
            window.removeEventListener('resize', update);
        };
    }, []);


    // const shoulder used from state

    const notchLeft = shoulder;
    const notchRight = notchLeft + notchW;

    const pathData = `
    M ${cr}, 0
    H ${notchLeft - nr}
    A ${nr},${nr} 0 0 1 ${notchLeft},${nr}
    V ${notchH - nr}
    A ${nr},${nr} 0 0 0 ${notchLeft + nr},${notchH}
    H ${notchRight - nr}
    A ${nr},${nr} 0 0 0 ${notchRight},${notchH - nr}
    V ${nr}
    A ${nr},${nr} 0 0 1 ${notchRight + nr}, 0
    H ${size.w - cr}
    A ${cr},${cr} 0 0 1 ${size.w},${cr}
    V ${size.h - cr}
    A ${cr},${cr} 0 0 1 ${size.w - cr},${size.h}
    H ${cr}
    A ${cr},${cr} 0 0 1 0, ${size.h - cr}
    V ${cr}
    A ${cr},${cr} 0 0 1 ${cr}, 0
Z
  `;

    return (
        <footer ref={boxRef} className="relative bg-[#050505] w-full text-white pt-10 pb-16 overflow-hidden">

            {/* === BACKGROUND SHAPE === */}
            <svg
                viewBox={`0 0 ${size.w} ${size.h} `}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                preserveAspectRatio="none"
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
                className="absolute top-0    flex items-center justify-center z-10"
                style={{ width: notchW, height: notchH, left: shoulder }}
            >
                <div className="bg-[#000F2B]  rounded-3xl p-4 shadow-xl">
                    <img
                        src="/assets/images/logo/Invest First-logo.png"
                        alt="Invest First"
                        className="w-36 md:w-28 lg:w-36"
                    />
                </div>
            </div>

            <Container>
                {/* === FOOTER CONTENT === */}
                <div className="relative grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 z-10">

                    {/* LEFT */}
                    <div ref={contentRef} style={{ marginTop: notchH + 40 }}>
                        <h3 className="text-3xl font-bold mb-4">
                            Let’s <br /> Join Us
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                            Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum.
                        </p>

                        <div className="flex gap-3">
                            <span className="p-2 bg-[#0b2238] rounded-md hover:bg-[#1a3a5a] cursor-pointer transition">
                                <Facebook size={20} color="#007CC4" />
                            </span>
                            <span className="p-2 bg-[#0b2238] rounded-md hover:bg-[#1a3a5a] cursor-pointer transition">
                                <Linkedin size={20} color="#007CC4" />
                            </span>
                            <span className="p-2 bg-[#0b2238] rounded-md hover:bg-[#1a3a5a] cursor-pointer transition">
                                <Instagram size={20} color="#007CC4" />
                            </span>
                            <span className="p-2 bg-[#0b2238] rounded-md hover:bg-[#1a3a5a] cursor-pointer transition">
                                <MessageCircle size={20} color="#007CC4" />
                            </span>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
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
                        <h4 className="font-semibold mb-4 text-lg">Trending Services</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Company Formation</li>
                            <li>PRO Services</li>
                            <li>Family Visa for the UAE</li>
                            <li>View All Services</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-center gap-2">
                                <Phone size={16} color="#007CC4" />
                                <span>+971 58 877 3753</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} color="#007CC4" />
                                <span>info@investfirst.ae</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Globe size={16} color="#007CC4" />
                                <span>info@investfirst.ae</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} color="#007CC4" />
                                <span>Dubai, UAE</span>
                            </li>
                        </ul>

                        <div className="mt-4 rounded-xl overflow-hidden h-[150px] relative">
                            {/* Placeholder map - replace src with provided URL */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.8478595564!2d54.94754668509373!3d25.07570732890656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1707050000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </Container>
        </footer>
    );
}
