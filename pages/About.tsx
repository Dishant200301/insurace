
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { teamData } from '../data/blogsData';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - InsureCo</title>
                <meta name="description" content="Learn about InsureCo's mission, vision, and the dedicated team working to provide you with the best insurance solutions." />
            </Helmet>
            <div className="bg-brandWhite">
                {/* Hero Section */}
                <div className="relative bg-gray-800 py-32">
                     <div className="absolute inset-0">
                        <img className="w-full h-full object-cover" src="https://picsum.photos/1600/800?random=41" alt="Our team" />
                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">About InsureCo</h1>
                        <p className="mt-6 text-xl max-w-3xl mx-auto">Your trusted partner in securing your future.</p>
                    </div>
                </div>

                {/* Mission and Vision */}
                <div className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-brandBlack">Our Mission</h2>
                            <p className="mt-4 text-lg text-gray-600">To provide accessible, reliable, and comprehensive insurance solutions that empower our customers to live their lives with confidence and peace of mind. We are committed to integrity, transparency, and exceptional service in every interaction.</p>
                        </div>
                         <div>
                            <h2 className="text-3xl font-extrabold text-brandBlack">Our Vision</h2>
                            <p className="mt-4 text-lg text-gray-600">To be the most trusted and customer-centric insurance provider, recognized for our innovative products, seamless digital experience, and unwavering commitment to the financial well-being of our clients and their families.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-brandBlack sm:text-4xl">Meet Our Leadership</h2>
                            <p className="mt-4 text-lg text-gray-600">The experienced team dedicated to your protection.</p>
                        </div>
                        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                            {teamData.map((member) => (
                                <div key={member.name} className="text-center">
                                    <img className="mx-auto h-40 w-40 rounded-full object-cover" src={member.imageUrl} alt={member.name} />
                                    <div className="mt-4">
                                        <h3 className="text-lg font-medium text-brandBlack">{member.name}</h3>
                                        <p className="text-brandBlue">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
