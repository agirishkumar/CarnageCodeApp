import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Blogs />
      <Projects />
      <Resume />
      <Contact />
      {/* Other sections like About, Skills, etc. will go here */}
    </div>
  );
}

export default App;
