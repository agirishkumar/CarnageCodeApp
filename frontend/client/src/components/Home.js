import React from 'react';
import './Home.css'; // Ensure you have corresponding CSS for styling

function Home() {
    return (
        <div>
            <section id="home" className="home-section">
                <img src="cc-logo.png" alt="CarnageCode Logo" className="home-logo" />
                <h1 className="home-title">CarnageCode</h1>
                <p className="home-subtitle">Explore. Innovate. Inspire.</p>
                <p className="home-description">
                    Welcome to CarnageCode – where ideas meet implementation. Discover my projects,
                    read through my blogs, or get a glimpse of my professional journey. At CarnageCode,
                    I bridge the gap between theoretical AI and practical solutions. Explore my portfolio,
                    engage with my interactive models, and connect through my writings.
                </p>
            </section>
            <section id="about" className="about-section">About Us Content</section>
            <section id="projects" className="projects-section">Projects Showcase</section>
            <section id="blogs" className="blogs-section">Latest Blogs</section>
            <section id="skills" className="skills-section">Skills and Expertise</section>
            <section id="resume" className="resume-section">Resume and CV</section>
            <section id="contact" className="contact-section">Contact Info</section>
        </div>
    );
}

export default Home;
