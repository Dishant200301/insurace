
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
    <>
        <NavLink to="/" className={({ isActive }) => `py-2 px-4 rounded-md text-sm font-medium ${isActive ? 'bg-brandBlue text-brandWhite' : 'text-brandBlack hover:bg-gray-100'}`}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => `py-2 px-4 rounded-md text-sm font-medium ${isActive ? 'bg-brandBlue text-brandWhite' : 'text-brandBlack hover:bg-gray-100'}`}>Services</NavLink>
        <NavLink to="/about" className={({ isActive }) => `py-2 px-4 rounded-md text-sm font-medium ${isActive ? 'bg-brandBlue text-brandWhite' : 'text-brandBlack hover:bg-gray-100'}`}>About Us</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => `py-2 px-4 rounded-md text-sm font-medium ${isActive ? 'bg-brandBlue text-brandWhite' : 'text-brandBlack hover:bg-gray-100'}`}>Blogs</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `py-2 px-4 rounded-md text-sm font-medium ${isActive ? 'bg-brandBlue text-brandWhite' : 'text-brandBlack hover:bg-gray-100'}`}>Contact</NavLink>
    </>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-brandWhite shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-2xl font-bold text-brandBlue">
                            InsureCo
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-brandBlack hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandBlue"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <NavLinks />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
