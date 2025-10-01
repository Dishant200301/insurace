
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import { blogsData } from '../data/blogsData';

const Blogs = () => {
    return (
        <>
            <Helmet>
                <title>Our Blog - InsureCo</title>
                <meta name="description" content="Read the latest articles and insights on insurance, financial planning, and more from the experts at InsureCo." />
            </Helmet>
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-brandBlack sm:text-5xl">InsureCo Blog</h1>
                        <p className="mt-4 text-xl text-gray-600">Your source for insurance news and financial advice.</p>
                    </div>
                    <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {blogsData.map(blog => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
