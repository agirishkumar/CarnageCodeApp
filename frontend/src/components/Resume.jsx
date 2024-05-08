import React, { useState } from 'react';

const Resume = () => {
    const [showResume, setShowResume] = useState(false);

    const toggleResume = () => {
        setShowResume(!showResume);
    };

    return (
        <div id="resume" className="flex flex-col items-center justify-center min-h-screen bg-[#1F2833] text-white p-4">
            <h1 className="text-4xl font-bold mb-6">Resume</h1>
            <button 
                onClick={toggleResume} 
                className="btn-view-resume mb-4 px-4 py-2 bg-turquoise text-black font-semibold rounded hover:bg-turquoise-dark transition-colors"
            >
                {showResume ? 'Hide Resume' : 'View Resume'}
            </button>
            {showResume && (
                <iframe
                    src="/resume_may.pdf"
                    style={{ width: '100%', height: '90vh' }}
                    title="My Resume"
                    frameBorder="0"
                ></iframe>
            )}
        </div>
    );
};

export default Resume;
