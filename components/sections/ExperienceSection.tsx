import React from 'react';
import { EXPERIENCES } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const ExperienceSection: React.FC = () => (
    <section id="experience" className="py-20 md:py-32 bg-black/20">
        <div className="container mx-auto px-6">
            <SectionHeader title="My Journey" subtitle="Tracing my path through the digital landscape, one milestone at a time." />
            <div className="relative">
                <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-gray-400 to-gray-700 transform -translate-x-1/2"></div>
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="w-5/12"></div>
                        <div className="z-10 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full border-2 border-white"></div>
                        <div className="w-5/12">
                            <div className={`p-6 rounded-lg glassmorphism border-l-4 border-white`}>
                                <p className="text-gray-400 mb-1">{exp.period}</p>
                                <h3 className="text-xl font-bold font-space-grotesk">{exp.role}</h3>
                                <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                                <p className="text-sm text-gray-400">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ExperienceSection;