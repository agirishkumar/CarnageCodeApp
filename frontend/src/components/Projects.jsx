import React from 'react';

const projects = [
    {
      title: "AI-Driven Video Game Character Forge: A Multimodal Approach with Generative AI",
      description: "Automated the generation of 32,000 unique, theme-based game characters, leveraging Stable Diffusion, DreamBooth, and LoRA. Streamlined character design workflows, significantly reducing manual design iterations and enhancing game development.",
      github: "#",
      webapp: "#"
    },
    {
      title: "NLP-driven music generation system",
      description: "Engineered a novel NLP-driven music generation system that transforms song lyrics into musical compositions, using sentiment analysis, keyword extraction, and topic modeling.",
      github: "#",
      webapp: "#"
    },
    {
      title: "Human-Centric RL Based Equity Portfolio Allocation Tool",
      description: "Spearheaded the development of a reinforcement learning-based system for equity portfolio management using historical data from Dow 30 companies. Integrated Deep Q-Networks (DQN) and Deep Deterministic Policy Gradient (DDPG) to dynamically adapt to market changes with a focus on risk mitigation.",
      github: "#",
      webapp: "#"
    },
    {
      title: "AI-Driven Workout Assistant",
      description: "Developed a pose estimation framework to analyze and ensure correct exercise performance. Employed machine learning algorithms including Decision Trees, KNN, LSTM, and Bi-LSTM to assess exercise form accuracy in real-time.",
      github: "#",
      webapp: "#"
    },
    {
      title: "Chatbot to Analyze PDF Documents",
      description: "Developed a chatbot utilizing Flask, LangChain, and LLM (GPT-3.5-Turbo), capable of assimilating content from PDF files and responding to inquiries related to the document.",
      github: "#",
      webapp: "#"
    },
    {
      title: "Anime Image Generation with DCGAN",
      description: "Implemented a DCGAN to create anime-style images from random noise, fine-tuning hyperparameters for image quality. Employed adversarial loss functions and stochastic gradient descent for optimization. Achieved an Inception Score of 2.8.",
      github: "#",
      webapp: "#"
    },
    {
      title: "AI controlled agents playing Tetris game",
      description: "Created Tetris-playing agents utilizing Greedy search, NEAT, and Deep Q-learning algorithms. The NEAT agent outperformed other agents, attaining the highest score.",
      github: "#",
      webapp: "#"
    },
    {
      title: "Image Manipulation Tool",
      description: "Developed a user-friendly Java image manipulation application, allowing users to load, save, and modify images adhering to the Model-View-Controller (MVC) architecture.",
      github: "#",
      webapp: "#"
    }
  ];
  
const Projects = () => {
  return (
    <div id="projects" className="bg-[#0B0C10] text-white p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="text-lg mt-2 mb-4">{project.description}</p>
          <div className="flex justify-center space-x-4">
            {project.github && (
              <a href={project.github} className="px-4 py-2 bg-turquoise text-black rounded hover:bg-turquoise-dark transition-colors">GitHub</a>
            )}
            {project.webapp && (
              <a href={project.webapp} className="px-4 py-2 bg-green-600  text-black rounded hover:bg-green-700 transition-colors">Try Web App</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
