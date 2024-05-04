import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* Other sections like About, Skills, etc. will go here */}
    </div>
  );
}

export default App;
