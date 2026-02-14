import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import FloatingLines from '../Animations/FloatingLines';

const ContactHero = ({ title, description }) => {
    return (
        <section className="relative min-h-[80vh] overflow-hidden bg-[#05030f] flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 z-10">
                <FloatingLines
                    enabledWaves={['middle']}
                    lineCount={[6, 6, 6]}
                    lineDistance={[8, 6, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>

            <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 backdrop-blur-lg" />
                <div className="absolute top-0 right-0 w-1/2 h-full flex justify-between opacity-20">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="w-px h-full bg-white" />
                    ))}
                </div>
            </div>

            <Container>
                <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[80vh]">
                    {/* LEFT COLUMN: Floating Card */}
                    <div className="flex items-end justify-center lg:justify-start order-2 lg:order-1 pb-10">
                        <div className="relative w-[320px]  rounded-[24px] bg-gradient-to-b from-[#001b3f] to-[#000b1f] p-6 py-8 border-2 border-[#0099CC]">
                            <h3 className="text-white text-xl md:text-2xl leading-snug font-semibold">
                                Lorem ipsum dolor sit amet
                            </h3>

                            <p className="text-gray-300 text-sm font-medium mt-3 max-w-[200px]">
                                adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <button className="mt-6 flex items-center gap-3 text-sm md:text-base rounded-xl bg-gradient-to-r from-[#14293A] to-[#0B223E] border border-[#0099CC] px-5 py-3 text-white font-medium shadow-lg hover:brightness-110 transition-all">
                                COST CALCULATOR
                                <span>→</span>
                            </button>

                            {/* WhatsApp Icon - Floating */}
                            <div className="absolute right-[-11px] top-[85px]">
                                <div className="h-[68px] w-[68px] bg-[#05030f] rounded-full border-2 border-r-transparent border-[#0099CC] flex items-center justify-center">
                                    <div className="h-[48px] w-[48px] rounded-full z-10 bg-[#25D366] flex items-center justify-center shadow-lg">
                                        <Image
                                            src="/assets/images/icons/whatsapp.png"
                                            alt="WhatsApp"
                                            width={28}
                                            height={28}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone Icon - Floating */}
                            <div className="absolute right-[-11px] top-[165px]">
                                <div className="h-[68px] w-[68px] bg-[#05030f] rounded-full border-2 border-r-transparent border-[#0099CC] flex items-center justify-center">
                                    <div className="h-[48px] w-[48px] z-10 rounded-full bg-[#0099CC] flex items-center justify-center shadow-lg">
                                        <Image
                                            src="/assets/images/icons/call.png"
                                            alt="Call"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Text */}
                    <div className="flex flex-col justify-center items-start lg:items-start order-1 lg:order-2">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                            {title}
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl">
                            {description}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactHero;
