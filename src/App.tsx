import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';
import DemoPopup from './components/DemoPopup';

function App() {
  return (
    <div className="min-h-screen" role="main">
      <Hero />
      <Features />
      <Demo />
      <Footer />
      <DemoPopup />
    </div>
  );
}

export default App;