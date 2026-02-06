import React from 'react';

const SectionTag = ({ text, className = "" }) => {
    return (
        <div className={`flex items-center gap-2 mb-4 ${className}`}>
            <span className="text-[#007CC4] text-base md:text-lg font-bold tracking-widest">» {text} «</span>
        </div>
    );
};

export default SectionTag;
