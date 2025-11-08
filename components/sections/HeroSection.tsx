import React, { useState, useEffect } from 'react';
import { ROLES } from '../../constants';

const HeroSection: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(prevIndex => (prevIndex + 1) % ROLES.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black"></div>
            <div className="z-10 px-4">
                <h1 className="font-space-grotesk text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 animate-fade-in-down">
                    ALEX IRVIN
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up">Creative Technologist & Experience Builder</p>
                <div className="h-8 md:h-10 mb-8 overflow-hidden">
                    <div className="transition-transform duration-500" style={{ transform: `translateY(-${roleIndex * 100}%)` }}>
                        {ROLES.map((role) => (
                            <p key={role} className="font-space-grotesk text-2xl md:text-3xl text-white h-8 md:h-10 flex items-center justify-center">{role}</p>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <a href="#projects" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-black">View Work</a>
                    <a href="#contact" className="px-6 py-3 border-2 border-gray-500 text-gray-300 font-semibold rounded-md transition-all duration-300 hover:bg-gray-500 hover:text-white">Let's Connect</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;