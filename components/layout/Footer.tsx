import React from 'react';

const Footer: React.FC = () => (
    <footer className="py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p>© {new Date().getFullYear()} Alex Irvin — Designed for the Future.</p>
        </div>
    </footer>
);

export default Footer;