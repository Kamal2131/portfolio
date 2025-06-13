export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl w-full mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-indigo-300 rounded-full opacity-40 blur-xl"></div>
        
        <div className="relative z-10 py-16 px-4 sm:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              About Me
            </h1>
            <div className="w-40 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Image */}
            <div className="flex-shrink-0 mx-auto lg:mx-0 relative">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full w-72 h-72 flex items-center justify-center overflow-hidden shadow-xl">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-68 h-68 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Profile Image</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold text-xl transform rotate-6 shadow-lg">
                  Developer
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="space-y-10">
                {/* Introduction Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mr-5">
                      <span className="text-white font-bold text-xl">K</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      Kamal Krishna Ghosh
                    </h2>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Final-year CSE student at Techno India University, Kolkata. 
                    I specialize in building modern web applications using cutting-edge technologies 
                    and following software engineering best practices. Passionate about creating 
                    efficient, scalable solutions with elegant code.
                  </p>
                </div>

                {/* Skills & Interests Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Skills */}
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-7 rounded-2xl shadow-md border border-blue-200">
                    <h3 className="font-bold text-gray-800 mb-5 text-2xl flex items-center">
                      <svg className="w-7 h-7 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technical Skills
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-full text-lg shadow-md">React</span>
                      <span className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-full text-lg shadow-md">FastAPI</span>
                      <span className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-full text-lg shadow-md">PostgreSQL</span>
                      <span className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-full text-lg shadow-md">Tailwind CSS</span>
                      <span className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-full text-lg shadow-md">Node.js</span>
                      <span className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-full text-lg shadow-md">DSA</span>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-7 rounded-2xl shadow-md border border-purple-200">
                    <h3 className="font-bold text-gray-800 mb-5 text-2xl flex items-center">
                      <svg className="w-7 h-7 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      My Interests
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-5 py-2.5 bg-white text-purple-600 font-medium rounded-full text-lg shadow-md">Full-stack Dev</span>
                      <span className="px-5 py-2.5 bg-white text-purple-600 font-medium rounded-full text-lg shadow-md">System Design</span>
                      <span className="px-5 py-2.5 bg-white text-purple-600 font-medium rounded-full text-lg shadow-md">UI/UX Design</span>
                      <span className="px-5 py-2.5 bg-white text-purple-600 font-medium rounded-full text-lg shadow-md">Algorithms</span>
                      <span className="px-5 py-2.5 bg-white text-purple-600 font-medium rounded-full text-lg shadow-md">Web3</span>
                      <span className="px-5 py-2.5 bg-white text-purple-600 font-medium rounded-full text-lg shadow-md">AI/ML</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-9 rounded-2xl text-white shadow-xl">
                  <div className="flex items-center mb-6">
                    <svg className="w-9 h-9 text-yellow-300 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <h2 className="text-3xl font-bold">Education & Philosophy</h2>
                  </div>
                  <p className="text-indigo-100 leading-relaxed text-xl">
                    Final year Computer Science student at Techno India University, Kolkata. 
                    My approach combines academic knowledge with practical implementation, 
                    focusing on clean architecture and user-centered design. I believe in 
                    continuous learning and staying updated with the latest tech trends.
                  </p>
                  <div className="mt-8 flex items-center">
                    <span className="bg-white text-indigo-600 px-6 py-2 rounded-full text-lg font-bold mr-4">
                      Currently
                    </span>
                    <span className="text-xl">Pursuing B.Tech in Computer Science</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social/Contact buttons */}
          <div className="flex justify-center mt-16 space-x-6">
            <a href="#" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="#" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="#" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
              </svg>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}