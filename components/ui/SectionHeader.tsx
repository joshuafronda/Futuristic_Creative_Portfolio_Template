import React from 'react';

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">
            {title}
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
);

export default SectionHeader;