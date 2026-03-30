import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { useState , useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);  

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);                          
      setTimeout(() => setLoading(false), 500);     
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`fixed inset-0 bg-slate-900 flex items-center justify-center
        transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white overflow-hidden bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App
