
import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types';

interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div className="bg-brandWhite rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Link to={`/blog/${blog.slug}`}>
                <img className="h-48 w-full object-cover" src={blog.imageUrl} alt={blog.title} />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">
                    <Link to={`/blog/${blog.slug}`} className="hover:text-brandBlue transition-colors duration-300">{blog.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm mb-4">{blog.date} &bull; by {blog.author}</p>
                <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
                <div className="mt-auto">
                    <Link to={`/blog/${blog.slug}`} className="text-brandBlue font-semibold hover:underline">
                        Read More &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
