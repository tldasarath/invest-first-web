"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "../Common/Layout/Contianer";
import { bannerData } from "@/data/BannerData";

const Banner = () => {
    return (
        <section className="w-full py-10 md:py-20">
            <Container>
                <div className="relative  rounded-3xl bg-[#660033] overflow-hidden">

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6">

                        {/* Content Side */}
                        <div className="flex-1 ">
                            <h2 className="text-2xl max-w-3xl md:text-[30px] font-semibold text-white mb-4 leading-tight">
                                {bannerData.title}
                            </h2>
                            <p className="text-base leading-relaxed max-w-4xl opacity-90">
                                {bannerData.description}
                            </p>
                        </div>

                        {/* Button Side - Moved to right */}
                        <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0 z-20 mt-4 md:mt-0">
                            <Link
                                href={bannerData.buttonLink}
                                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white px-6 py-3 rounded-2xl transition-all duration-300 group shadow-lg"
                            >
                                <span className="font-medium text-lg">{bannerData.buttonText}</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Skyline Image - Positioned Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-3/5 h-36 md:h-40 pointer-events-none z-0">
                        <div className="relative w-full h-full">
                            <Image
                                src={bannerData.imageSrc}
                                alt={bannerData.imageAlt}
                                fill
                                className="object-cover md:object-contain object-bottom md:object-bottom-right"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Banner;
