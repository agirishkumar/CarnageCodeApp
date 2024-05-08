import React, { useState, useEffect } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5173/api/blogs')  // Adjust the fetch URL as flask api endpoint
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <div id="blogs" className="bg-[#0B0C10] text-white p-6 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">My Blogs</h1>
            <div className="space-y-4 w-full max-w-4xl">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">{blog.title}</h2>
                        <p className="text-lg mt-2">{blog.brief}</p>
                        <a href={`https://girishkumaradari.hashnode.dev/${blog.slug}`}
                            target="_blank" rel="noopener noreferrer" className="text-turquoise mt-2 inline-block hover:text-turquoise-dark">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
