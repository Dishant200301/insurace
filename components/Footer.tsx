
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Solutions</h3>
                        <ul className="mt-4 space-y-4">
                            {['Life', 'Health', 'Travel', 'Business', 'Vehicle'].map(item => (
                                <li key={item}>
                                    <Link to={`/services/${item.toLowerCase()}-insurance`} className="text-base text-gray-600 hover:text-brandBlue">{item} Insurance</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Support</h3>
                        <ul className="mt-4 space-y-4">
                             <li><Link to="/contact" className="text-base text-gray-600 hover:text-brandBlue">Contact</Link></li>
                             <li><a href="#" className="text-base text-gray-600 hover:text-brandBlue">FAQs</a></li>
                             <li><a href="#" className="text-base text-gray-600 hover:text-brandBlue">Claims</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                             <li><Link to="/about" className="text-base text-gray-600 hover:text-brandBlue">About Us</Link></li>
                             <li><Link to="/blogs" className="text-base text-gray-600 hover:text-brandBlue">Blog</Link></li>
                             <li><a href="#" className="text-base text-gray-600 hover:text-brandBlue">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-4">
                             <li><a href="#" className="text-base text-gray-600 hover:text-brandBlue">Privacy</a></li>
                             <li><a href="#" className="text-base text-gray-600 hover:text-brandBlue">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-500 xl:text-center">&copy; {new Date().getFullYear()} InsureCo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
