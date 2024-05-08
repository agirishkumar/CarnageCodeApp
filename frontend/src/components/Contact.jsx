import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [visitorCount, setVisitorCount] = useState(() => {
        // Retrieve visitor count from local storage or initialize to zero
        const savedCount = localStorage.getItem('visitorCount');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    useEffect(() => {
        // Increment visitor count on component mount
        const newCount = visitorCount + 1;
        localStorage.setItem('visitorCount', newCount.toString());
        setVisitorCount(newCount);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id="contact" className="bg-[#0B0C10] text-white p-6 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-6">Contact</h1>
            <div className="flex justify-center space-x-6 mb-8 bg-gray-800 p-4 rounded-lg">
                <a href="https://www.linkedin.com/in/adarigirishkumar/" className="hover:opacity-75">
                        <img src="Linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="https://twitter.com/Girish_adari" className="hover:opacity-75">
                    <img src="X.svg" alt="Twitter" className="w-8 h-8" />
                </a>
                <a href="https://medium.com/@adari.girishkumar" className="hover:opacity-75">
                    <img src="medium.svg" alt="Medium" className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/asuran_stepping_up/?next=%2F" className="hover:opacity-75">
                    <img src="Instagram.png" alt="Instagram" className="w-8 h-8" />
                </a>               
                
                
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-[#1F2833]"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-[#1F2833]"
                />
                <textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-[#1F2833] h-32"
                />
                <button type="submit" className="px-4 py-2 bg-turquoise text-black font-semibold rounded hover:bg-turquoise-dark transition-colors">
                    Send Message
                </button>
            </form>
            <div className="mt-8 text-lg">
                Visitor Count: {visitorCount}
            </div>
        </div>
    );
};

export default Contact;
