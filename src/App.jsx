import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import Donate from './components/Donate';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Features />
        <Gallery />
        <WhyUs />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
