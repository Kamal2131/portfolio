import { useEffect, useState } from 'react';
import { getAbout } from '../api';

export default function Home() {
  const [about, setAbout] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    getAbout()
      .then(res => setAbout(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!about) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-bounce flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        <p className="text-gray-600 font-medium">Loading your profile...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div 
        className={`w-full h-full max-w-6xl max-h-[90vh] transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
          {/* Animated Gradient Header */}
          <div className="relative bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 p-8 text-white overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
            <div className="flex items-center space-x-6 relative z-10">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-20 h-20 animate-pulse" />
              <div className="animate-fadeInUp space-y-2 flex-grow">
                <h1 
                  className="text-5xl font-bold tracking-tight"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                >
                  {about.name}
                </h1>
                <p className="text-xl text-blue-100 mt-1 font-light max-w-3xl">
                  {about.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Content Area - Scrollable Section */}
          <div className="p-10 space-y-8 overflow-y-auto flex-grow">
            {/* Skills Section */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                My Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {about.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.03]"
                    style={{ animation: `fadeInUp 0.5s ease-out ${0.3 + i*0.1}s both` }}
                  >
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mr-3 animate-pulse"></div>
                      <span className="font-medium text-gray-800">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <a
                  href={about.contact_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200 transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
                >
                  <div className="bg-blue-500 p-3 rounded-lg group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-700">LinkedIn</h4>
                    <p className="text-gray-600 mt-1 group-hover:text-blue-600">Professional Network</p>
                  </div>
                </a>
                
                <a
                  href={about.contact_links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
                >
                  <div className="bg-gray-800 p-3 rounded-lg group-hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-900">GitHub</h4>
                    <p className="text-gray-600 mt-1 group-hover:text-gray-800">Code Repository</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Animated Footer */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 text-center flex-shrink-0">
            <p className="text-gray-600 font-medium animate-pulse">
              <span className="inline-block animate-bounce mr-2">👇</span>
              Available for new opportunities
              <span className="inline-block animate-bounce ml-2">👇</span>
            </p>
            <div className="mt-3 text-gray-500 text-sm">
              © {new Date().getFullYear()} {about.name}. Crafted with ❤️
            </div>
          </div>
        </div>
      </div>
      
      {/* Add global animations */}
      <style jsx global>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        .animate-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}