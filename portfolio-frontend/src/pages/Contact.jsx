import { useState } from 'react';
import { postContact } from '../api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    try {
      await postContact(formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send. Try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#a18cd1] via-[#fbc2eb] to-[#fad0c4] animate-gradient-x" />
        {/* Decorative Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-blob1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-300 opacity-30 rounded-full filter blur-3xl animate-blob2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-300 opacity-20 rounded-full filter blur-2xl animate-blob3" />
      </div>
      <div className="w-full max-w-lg p-10 bg-white/90 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-purple-200 border border-purple-100">
        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-2 text-gray-800 transition-colors duration-300 hover:text-purple-700 tracking-tight drop-shadow-lg">
            Contact Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500"></div>
          <p className="mt-4 text-gray-500 text-center max-w-md">
            Have a question, proposal, or just want to say hello? Fill out the form below and I'll get back to you soon!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-7">
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 p-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-lg"
              required
              autoComplete="off"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:text-purple-500 peer-focus:-translate-y-7 peer-focus:text-xs peer-valid:-translate-y-7 peer-valid:text-xs bg-white px-1">
              Name
            </label>
          </div>
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 p-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-lg"
              required
              autoComplete="off"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:text-purple-500 peer-focus:-translate-y-7 peer-focus:text-xs peer-valid:-translate-y-7 peer-valid:text-xs bg-white px-1">
              Email
            </label>
          </div>
          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 p-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-lg resize-none"
              rows="5"
              required
            />
            <label className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:text-purple-500 peer-focus:-translate-y-5 peer-focus:text-xs peer-valid:-translate-y-5 peer-valid:text-xs bg-white px-1">
              Message
            </label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white py-3 px-10 rounded-lg font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p
                className={`mt-4 text-center font-medium transition-all duration-500 ${
                  status.includes('successfully')
                    ? 'text-green-600 animate-fade-in'
                    : 'text-red-600 animate-fade-in'
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease-in-out infinite;
        }
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1);}
          33% { transform: translate(30px, -20px) scale(1.1);}
          66% { transform: translate(-20px, 20px) scale(0.9);}
        }
        .animate-blob1 { animation: blob1 12s infinite ease-in-out; }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1);}
          33% { transform: translate(-30px, 20px) scale(1.1);}
          66% { transform: translate(20px, -20px) scale(0.9);}
        }
        .animate-blob2 { animation: blob2 14s infinite ease-in-out; }
        @keyframes blob3 {
          0%,100% { transform: translate(-50%, -50%) scale(1);}
          33% { transform: translate(-55%, -45%) scale(1.07);}
          66% { transform: translate(-45%, -55%) scale(0.93);}
        }
        .animate-blob3 { animation: blob3 16s infinite ease-in-out; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s;
        }
      `}</style>
    </div>
  );
}
