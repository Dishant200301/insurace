
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import { servicesData } from '../data/servicesData';
import { blogsData, testimonialsData, heroSlidesData } from '../data/blogsData';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>InsureCo - Classic Premium Insurance</title>
                <meta name="description" content="Welcome to InsureCo, your trusted partner for comprehensive and reliable insurance solutions. Protecting your tomorrow, today." />
            </Helmet>

            <HeroCarousel slides={heroSlidesData} />

            {/* Services Overview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-brandBlack sm:text-4xl">Our Insurance Services</h2>
                        <p className="mt-4 text-lg text-gray-600">Comprehensive plans to protect what matters most.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {servicesData.slice(0, 3).map(service => (
                            <ServiceCard key={service.slug} service={service} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-block bg-brandBlue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

             {/* Trust Badges */}
            <section className="py-16 bg-brandWhite">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-brandBlue">1M+</h3>
                            <p className="text-gray-600 mt-1">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-brandBlue">98%</h3>
                            <p className="text-gray-600 mt-1">Claim Settlement</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-brandBlue">24/7</h3>
                            <p className="text-gray-600 mt-1">Support</p>
                        </div>
                         <div className="text-center">
                            <h3 className="text-3xl font-bold text-brandBlue">25+</h3>
                            <p className="text-gray-600 mt-1">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-brandBlack sm:text-4xl">What Our Clients Say</h2>
                        <p className="mt-4 text-lg text-gray-600">We are trusted by individuals and businesses across the country.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                        {testimonialsData.map((testimonial, index) => (
                             <div key={index} className="bg-brandWhite p-8 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                                <p className="mt-4 font-bold text-brandBlack">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Featured Blogs */}
            <section className="py-20 bg-brandWhite">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-brandBlack sm:text-4xl">From Our Blog</h2>
                        <p className="mt-4 text-lg text-gray-600">Get the latest insights on insurance and financial planning.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogsData.slice(0, 3).map(blog => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
