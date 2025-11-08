import React from 'react';

const AboutSection: React.FC = () => (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <img src="https://picsum.photos/seed/avatar/600/700" alt="Alex Irvin" className="rounded-lg shadow-2xl shadow-white/10 transform hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                    <h2 className="font-space-grotesk text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        I'm a digital craftsman with a passion for building beautiful, interactive, and meaningful experiences on the web. My work sits at the intersection of design and technology, where creativity meets code.
                    </p>
                    <p className="text-xl font-semibold mb-8 text-white">8+ Years Creating Interactive Digital Experiences.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                        <div className="glassmorphism p-4 rounded-lg">
                            <p className="text-3xl font-bold text-white">40+</p>
                            <p className="text-gray-400">Projects</p>
                        </div>
                        <div className="glassmorphism p-4 rounded-lg">
                            <p className="text-3xl font-bold text-white">15+</p>
                            <p className="text-gray-400">Clients</p>
                        </div>
                        <div className="glassmorphism p-4 rounded-lg col-span-2 sm:col-span-1">
                            <p className="text-3xl font-bold text-white">10M+</p>
                            <p className="text-gray-400">Users Reached</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;