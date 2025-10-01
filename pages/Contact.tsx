
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - InsureCo</title>
                <meta name="description" content="Get in touch with InsureCo. Contact us for quotes, support, or any inquiries. We're here to help." />
            </Helmet>
            <div className="bg-brandWhite">
                <div className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold text-brandBlack sm:text-5xl">Contact Us</h1>
                            <p className="mt-4 text-xl text-gray-600">We'd love to hear from you. Reach out with any questions or for a free quote.</p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-2 gap-16">
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                                <ContactForm />
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-semibold text-brandBlack">Our Office</h3>
                                    <p className="text-gray-600 mt-2">123 Insurance Ave, Suite 100<br />New York, NY 10001</p>
                                </div>
                                 <div>
                                    <h3 className="text-lg font-semibold text-brandBlack">Email Us</h3>
                                    <p className="text-gray-600 mt-2"><a href="mailto:support@insureco.com" className="text-brandBlue hover:underline">support@insureco.com</a></p>
                                </div>
                                 <div>
                                    <h3 className="text-lg font-semibold text-brandBlack">Call Us</h3>
                                    <p className="text-gray-600 mt-2"><a href="tel:+1234567890" className="text-brandBlue hover:underline">(123) 456-7890</a></p>
                                </div>
                                <div className="h-64 md:h-full w-full rounded-lg overflow-hidden shadow-md">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.296531835068!2d-73.9857947845941!3d40.75549197932675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ac8164858b%3A0x926543431a0f9b65!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1616098091859!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
