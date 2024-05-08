import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="bg-[#0B0C10] text-white p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Programming Languages</h2>
          <ul>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Matlab</li>
            <li>Bash</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Machine Learning/Deep Learning</h2>
          <ul>
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>Keras</li>
            <li>Scikit-learn</li>
            <li>CNN</li>
            <li>LSTM</li>
            <li>BERT</li>
            <li>GANs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Data Analysis & Visualization</h2>
          <ul>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
            <li>OpenCV</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Development Tools & Cloud</h2>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Jenkins</li>
            <li>AWS</li>
            <li>Microsoft SQLServer</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Frameworks & Libraries</h2>
          <ul>
            <li>Flask</li>
            <li>NLTK</li>
            <li>Spacy</li>
            <li>OpenGym</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
