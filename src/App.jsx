import React from 'react';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Vision from './components/vision/Vision';
import JoinUs from './components/joinUs/JoinUs';
import News from './components/news/News';

function App() {
  return (
    <React.Fragment className="intra">
      <Hero/>
      <About/>
      <Vision/>
      <News/>
      <JoinUs/>
    </React.Fragment>
  );
}

export default App;
