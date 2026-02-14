import React from 'react';
import Container from '../Common/Layout/Contianer';

const ContactBottomCTA = () => {
    return (
        <section className="pb-20 bg-[#020617]">
            <Container>
                <div className="relative w-full rounded-[40px] overflow-hidden bg-gradient-to-r from-[#BE185D] to-[#831843] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Content */}
                    <div className="z-10 max-w-2xl relative">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Lorem ipsum dolor sit <br /> amet, consectetur
                        </h3>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="z-10 relative">
                        <a
                            href="https://wa.me/971500000000" // Replace with actual number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 text-white font-medium hover:bg-white/20 transition-all group"
                        >
                            <span>Chat ON WHATSAPP</span>
                            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Decorative Element / Cityscape Placeholder */}
                    {/* If a city image is available, it would go here as an absolute positioned image bottom-0 right-0 */}
                    <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
                        {/* Placeholder for cityscape graphic */}
                        <div className="w-[300px] h-[100px] bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactBottomCTA;
