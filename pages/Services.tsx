
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services - InsureCo</title>
                <meta name="description" content="Explore all insurance services offered by InsureCo, including Life, Health, Travel, Business, and Vehicle insurance." />
            </Helmet>
            <div className="bg-brandWhite">
                <div className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold text-brandBlack sm:text-5xl">Our Insurance Services</h1>
                            <p className="mt-4 text-xl text-gray-600">Tailored plans to provide you with security and peace of mind.</p>
                        </div>
                        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                            {servicesData.map(service => (
                                <ServiceCard key={service.slug} service={service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
