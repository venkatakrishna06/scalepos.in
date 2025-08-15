import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';
import DemoPopup from './components/DemoPopup';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen" role="main">
      <Hero />
      <Features />
      <Demo />
      <Footer />
      <FloatingWhatsApp />
      <DemoPopup />
    </div>
  );
}

export default App;