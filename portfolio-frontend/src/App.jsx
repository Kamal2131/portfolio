import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

// Floating background bubbles component
const FloatingBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full opacity-150 animate-float"
        style={{
          width: `${Math.random() * 200 + 50}px`,
          height: `${Math.random() * 200 + 50}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          backgroundColor: ['#93c5fd', '#c7d2fe', '#a5b4fc', '#d8b4fe', '#fbcfe8'][Math.floor(Math.random() * 5)],
          animationDuration: `${Math.random() * 30 + 20}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <FloatingBackground />
        <div className="flex flex-col items-center z-10">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xl">KG</span>
            </div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-700 animate-pulse">
            Building your experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen text-gray-900 font-sans overflow-hidden bg-amber-800">
      <FloatingBackground />
      
      {/* Floating Navbar with enhanced effects */}
      <header className="shadow-lg bg-white/90 backdrop-blur-lg sticky top-0 z-50 transition-all duration-500 hover:bg-white/95 hover:shadow-xl border-b border-gray-100/80">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <Navbar />
        </div>
      </header>

      {/* Main Content with animated route transitions */}
      <main className="flex-grow w-full max-w-screen-2xl mx-auto px-4 sm:px-6 py-8 transition-all duration-700">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Animated Footer with gradient */}
      <footer className="bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-indigo-50/80 border-t border-gray-200/60 py-10 backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <Footer />
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm animate-pulse">
          Crafted with <span className="text-red-500">❤️</span> • {new Date().getFullYear()}
        </div>
      </footer>

      {/* Custom cursor effect */}
      <div className="cursor-dot fixed w-4 h-4 bg-blue-500 rounded-full z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>
      <div className="cursor-outline fixed w-10 h-10 border-2 border-blue-400 rounded-full z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference animate-ping-slow"></div>

      {/* Dynamic background gradient */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-indigo-50/40 via-blue-50/30 to-purple-50/40"></div>
      
      {/* Animated style tag */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0,0,0.2,1) infinite;
        }
        
        .cursor-dot {
          transition: transform 0.2s, width 0.2s, height 0.2s, background 0.2s;
        }
        
        body:hover .cursor-dot {
          transform: translate(-50%, -50%) scale(1.5);
        }
      `}</style>
    </div>
  );
}

// Wrap App with Router and useLocation
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}