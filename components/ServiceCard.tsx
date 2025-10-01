
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="bg-brandWhite rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center">
            <div className="mb-4">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{service.shortDescription}</p>
            <Link to={`/services/${service.slug}`} className="text-brandBlue font-semibold hover:underline">
                Learn More &rarr;
            </Link>
        </div>
    );
};

export default ServiceCard;
