import React from 'react';
import Container from '../Common/Layout/Contianer';

const pointsData = [
    {
        title: "1. Ease of Doing Business",
        description: "The UAE consistently ranks among the top countries in the world for ease of doing business, offering simplified company formation processes, investor-friendly policies, and quick turnaround times for licensing and approvals. Whether you choose a free zone, mainland, or offshore structure, the UAE provides flexible options tailored to the needs of global entrepreneurs."
    },
    {
        title: "2. Visionary Leadership & Long-Term Initiatives",
        description: "The UAE government's forward-thinking policies and long-term national strategies — such as UAE Vision 2031 and Dubai Economic Agenda D33 — focus on diversification, sustainability, and innovation. These initiatives ensure that businesses not only thrive today but also remain future-ready in a constantly evolving global economy."
    },
    {
        title: "3. World-Class Infrastructure",
        description: "From cutting-edge office spaces and industrial zones to advanced logistics hubs and smart city developments, the UAE is home to some of the most modern infrastructure in the world. State-of-the-art airports, seaports, and transport systems ensure businesses operate efficiently and remain globally connected."
    },
    {
        title: "4. Global Connectivity & Market Access",
        description: "Located at the heart of the Middle East, the UAE provides unparalleled access to over 2 billion consumers across the Middle East, Africa, Europe, and Asia. With world-leading airlines, free trade agreements, and advanced shipping routes, businesses in the UAE enjoy seamless international connectivity."
    },
    {
        title: "5. Tax Benefits & Business-Friendly Policies",
        description: "The UAE offers a competitive tax regime, including 0% corporate tax in many free zones, 100% foreign ownership in several sectors, and minimal restrictions on profit repatriation. These investor-friendly policies make the UAE one of the most cost-effective jurisdictions for global businesses."
    },
    {
        title: "6. Quality of Life & Multicultural Environment",
        description: "Beyond business, the UAE offers an exceptional quality of life with world-class healthcare, education, safety, and leisure facilities. A true melting pot of cultures, the UAE is home to professionals from over 200 nationalities, making it a welcoming environment for entrepreneurs and their families."
    },
    {
        title: "7. A Thriving Global Business Hub",
        description: "From tech startups in Dubai Internet City to multinational corporations in Abu Dhabi Global Market, the UAE has established itself as a global hub for innovation, trade, and investment. The supportive business ecosystem, coupled with government initiatives, ensures that businesses of all sizes can succeed and scale."
    }
];

const WhyUAEPoints = () => {
    return (
        <section className="py-10 md:py-20 ">
            <Container>
                <div className="flex flex-col gap-10 max-w-7xl mx-auto">
                    {pointsData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-bold text-[#0099CC]">
                                {item.title}
                            </h3>
                            <p className=" leading-relaxed text-base md:text-lg">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyUAEPoints;
