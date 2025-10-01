
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // Mock sending form
        setTimeout(() => {
            setStatus('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brandBlue focus:border-brandBlue border-gray-300 rounded-md" />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brandBlue focus:border-brandBlue border-gray-300 rounded-md" />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1">
                    <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brandBlue focus:border-brandBlue border border-gray-300 rounded-md"></textarea>
                </div>
            </div>
            <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brandBlue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandBlue">
                    Send Message
                </button>
            </div>
            {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
        </form>
    );
}

export default ContactForm;
