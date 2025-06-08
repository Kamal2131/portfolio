import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Navbar */}
        <header className="shadow-md bg-white sticky top-0 z-50">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-4">
            <Navbar />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full max-w-screen-xl mx-auto px-6 py-10 sm:px-4 sm:py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-300">
          <div className="max-w-screen-xl mx-auto px-6 py-6 sm:px-4">
            <Footer />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
