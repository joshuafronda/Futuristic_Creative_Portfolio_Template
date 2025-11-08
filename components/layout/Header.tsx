import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';
import HamburgerIcon from '../icons/HamburgerIcon';
import CloseIcon from '../icons/CloseIcon';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="font-space-grotesk text-2xl font-bold text-white">A.I.</a>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {NAV_LINKS.map(link => (
                            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-all duration-300">{link.name}</a>
                        ))}
                    </nav>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            aria-label="Toggle menu" 
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            className="z-50"
                        >
                            {isMenuOpen ? <CloseIcon className="w-6 h-6 text-white" /> : <HamburgerIcon className="w-6 h-6 text-white" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                id="mobile-menu"
                className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-30 flex flex-col items-center justify-center md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <nav className="flex flex-col items-center space-y-8">
                    {NAV_LINKS.map(link => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            onClick={toggleMenu} // Close menu on link click
                            className="text-3xl font-space-grotesk text-gray-300 hover:text-white transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;