import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;