
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData } from '../data/blogsData';

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const blog = blogsData.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold">Blog post not found</h1>
                <Link to="/blogs" className="text-brandBlue hover:underline mt-4 inline-block">Back to Blog</Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{blog.title} - InsureCo Blog</title>
                <meta name="description" content={blog.excerpt} />
            </Helmet>
            <div className="bg-brandWhite py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-brandBlack sm:text-5xl">{blog.title}</h1>
                        <p className="mt-4 text-lg text-gray-500">{blog.date} &bull; by {blog.author}</p>
                    </div>
                    <img className="w-full rounded-lg shadow-lg mb-12" src={blog.imageUrl} alt={blog.title} />
                    <div
                        className="prose lg:prose-xl max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                     <div className="mt-16 text-center">
                        <Link to="/blogs" className="text-brandBlue font-semibold hover:underline">
                            &larr; Back to All Posts
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
