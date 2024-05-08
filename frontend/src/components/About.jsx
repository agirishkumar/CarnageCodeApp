import React from 'react';

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center w-full min-h-screen bg-[#1F2833] text-white p-4">
      <h2 className="text-4xl font-bold">About</h2>
      <p className="text-lg mt-6 max-w-4xl text-center">
        Driven and analytical graduate student with advanced studies in Artificial Intelligence. Brings practical experience in machine learning, computer vision, natural language processing, and generative AI, backed by robust technical skills in Python, ML frameworks, and cloud technologies. Demonstrated ability to lead projects, collaborate effectively, and communicate complex research findings. Actively seeking opportunities to apply technical expertise in dynamic environments to drive innovation and deliver impactful solutions.
      </p>
      {/* Placeholder for future image */}
      <div className="mt-8">
        <img src="girish.jpeg" alt="Girish Kumar Adari" className="rounded-full w-40 h-40" />
      </div>
    </div>
  );
};

export default About;

