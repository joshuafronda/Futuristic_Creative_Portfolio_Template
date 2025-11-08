import React, { useState } from 'react';
import { DEV_SKILLS, DESIGN_SKILLS } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const SkillsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dev' | 'design'>('dev');
    const skills = activeTab === 'dev' ? DEV_SKILLS : DESIGN_SKILLS;

    return (
        <section id="skills" className="py-20 md:py-32 bg-black/20">
            <div className="container mx-auto px-6">
                <SectionHeader title="Skills & Tech Stack" subtitle="My toolkit for crafting digital excellence, from backend logic to pixel-perfect UIs." />
                <div className="flex justify-center mb-8">
                    <div className="glassmorphism p-1 rounded-lg flex space-x-1">
                        <button onClick={() => setActiveTab('dev')} className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'dev' ? 'bg-white text-black' : 'text-gray-300'}`}>Development</button>
                        <button onClick={() => setActiveTab('design')} className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'design' ? 'bg-white text-black' : 'text-gray-300'}`}>Design</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map(skill => (
                        <div key={skill.name} className="flex flex-col items-center justify-center p-6 glassmorphism rounded-lg text-center group hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                            <skill.icon className="h-12 w-12 mb-4 text-gray-300 group-hover:text-white transition-colors" />
                            <p className="font-semibold text-lg">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;