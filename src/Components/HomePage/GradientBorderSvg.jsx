import React from 'react';

const GradientBorderSvg = () => {
    return (
        // Positioned absolutely to the left of the content container
        // left-[calc((100%-100vw)/2)] moves it to the screen edge
        // w-[calc((100vw-100%)/2)] makes it fill exactly the space to the container
        <div className="absolute top-0 bottom-0 left-[calc((100%-100vw)/2)] w-[calc((100vw-100%)/2)] pointer-events-none z-0 hidden xl:block pr-[-1px]">
            <svg
                viewBox="0 0 100 900"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(120,3,67,1.00)" />
                        <stop offset="100%" stopColor="rgba(0,51,90,1.00)" />
                    </linearGradient>
                    <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                        <stop offset="50%" stopColor="#d946ef" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Path Logic: 
                    0,Y = Screen Edge
                    100,Y = Component Edge
                    Draw a line connecting them with some tech-style turns.
                */}
                <path
                    id="mainPath"
                    d="M 0 150 
                       H 40
                       C 60 150, 60 150, 60 200
                       V 500
                       C 60 550, 60 550, 80 550
                       H 100
                       V 900"
                    stroke="url(#baseGradient)"
                    strokeWidth="2"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                />

                <path
                    d="M 0 150 
                       H 40
                       C 60 150, 60 150, 60 200
                       V 500
                       C 60 550, 60 550, 80 550
                       H 100
                       V 900"
                    stroke="url(#rayGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    className="animate-draw-line"
                />

                <style jsx>{`
                .animate-draw-line {
                    stroke-dasharray: 200 1500; 
                    stroke-dashoffset: 1700;
                    animation: draw 7s linear infinite;
                }
                
                @keyframes draw {
                    0% {
                        stroke-dashoffset: 1700;
                    }
                    100% {
                        stroke-dashoffset: -1700;
                    }
                }
            `}</style>
            </svg>
        </div>
    );
};

export default GradientBorderSvg;
