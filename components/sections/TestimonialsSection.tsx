import React, { useState } from 'react';
import { TESTIMONIALS } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section id="testimonials" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <SectionHeader title="What They Say" subtitle="Feedback from collaborators and clients I've had the pleasure to work with." />
                <div className="relative w-full max-w-3xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="glassmorphism p-8 rounded-lg text-center">
                                        <p className="text-xl italic text-gray-300 mb-6">"{testimonial.quote}"</p>
                                        <p className="font-bold text-lg">{testimonial.author}</p>
                                        <p className="text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={prevTestimonial} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button onClick={nextTestimonial} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;