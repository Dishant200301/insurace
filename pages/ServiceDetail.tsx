
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold">Service not found</h1>
                <Link to="/services" className="text-brandBlue hover:underline mt-4 inline-block">Back to Services</Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{service.title} - InsureCo</title>
                <meta name="description" content={service.shortDescription} />
            </Helmet>
            <div>
                <div className="relative h-64 md:h-96">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center">{service.title}</h1>
                    </div>
                </div>

                <div className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose lg:prose-xl max-w-none">
                             <p className="text-lg text-gray-600">{service.longDescription}</p>
                        </div>
                         <div className="mt-12 text-center">
                            <Link to="/contact" className="inline-block bg-brandBlue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
