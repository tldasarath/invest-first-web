import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import SectionTag from '../Common/SectionTag';

const MissionVision = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-[#020617] overflow-hidden">
            <Container>


                <div className="relative z-10 flex flex-col gap-24 lg:gap-32">

                    {/* ================= MISSION SECTION ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Left */}
                        <div className="relative">
                            <SectionTag text="Our Mission" className="mb-2 uppercase" />
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Yorem ipsum dolor sit <br className="hidden md:block" />
                                amet, consectetur
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-[#0099CC] pl-6">
                                To empower individuals and businesses of all sizes by delivering high quality business setup and consulting services that simplify operations, reduce complexity, accelerate growth, and build long term partnerships through trust, expertise, transparency, and measurable results across UAE markets.
                            </p>
                        </div>

                        {/* Image Right */}
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl   ">
                            <Image
                                src="/assets/images/about/our-mission.png"
                                alt="Our Mission - Invest First"
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />

                        </div>
                    </div>


                    {/* ================= VISION SECTION ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Left */}
                        <div className="order-2 lg:order-1 relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl ">
                            <Image
                                src="/assets/images/about/our-vision.png"
                                alt="Our Vision - Invest First"
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />

                        </div>

                        {/* Text Right */}
                        <div className="order-1 lg:order-2 relative text-right lg:text-left flex flex-col items-end lg:items-start">
                            <SectionTag text="Our Vision" className="mb-2 uppercase" />
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Yorem ipsum dolor sit <br className="hidden md:block" />
                                amet, consectetur
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed border-r-4 lg:border-r-0 lg:border-l-4 border-purple-500 pr-6 lg:pr-0 lg:pl-6 text-right lg:text-left">
                                To become the most trusted and leading business consulting firm in the UAE and globally, recognized for innovation, service excellence, and commitment to client success while continuously enhancing capabilities and adopting emerging technologies to meet evolving business needs.
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default MissionVision;
