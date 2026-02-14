"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactBottomCTA from './ContactBottomCTA';
import ContactFormMap from './ContactFormMap';
import CommonBanner from '../Common/Banner/CommonBanner';
import CommonHerosection from '../Common/Banner/CommonHerosection';

const ContactPage = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const sections = mainRef.current.children;
            Array.from(sections).forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="">
            <CommonHerosection
                title="Contact Us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            />
            <ContactInfo />
            <ContactFormMap />
            <CommonBanner
                title="Yorem ipsum dolor sit 
amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                buttonLink="#"
                buttonText="Cost Calculator "
                imageSrc="/assets/images/common/uae.png"
                imageAlt="Contact Us"
            />
        </div>
    );
};

export default ContactPage;
