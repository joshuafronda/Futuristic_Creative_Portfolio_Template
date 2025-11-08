import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const ContactSection: React.FC = () => (
    <section id="contact" className="py-20 md:py-32 bg-black/20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <SectionHeader title="Let's Collaborate" subtitle="Have a project in mind? I'd love to hear about it. Let's build something extraordinary together."/>
            <div className="max-w-xl mx-auto">
                <form className="glassmorphism p-8 rounded-xl space-y-6">
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 p-3 rounded-md border border-white/10 focus:outline-none focus:border-white transition-colors" />
                    <input type="email" placeholder="Your Email" className="w-full bg-white/5 p-3 rounded-md border border-white/10 focus:outline-none focus:border-white transition-colors" />
                    <textarea placeholder="Your Message" rows={5} className="w-full bg-white/5 p-3 rounded-md border border-white/10 focus:outline-none focus:border-white transition-colors"></textarea>
                    <button type="submit" className="w-full py-3 px-6 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
);

export default ContactSection;