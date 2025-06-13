// components/Footer.js
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo Section */}
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
          <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Portfolio
          </span>
        </div>
        <p className="text-gray-600 max-w-xs">
          Creating beautiful digital experiences with modern web technologies.
        </p>
      </div>
      
      {/* Links */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Navigation</h3>
        <ul className="space-y-3">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                to={`/${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Contact */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Contact</h3>
        <ul className="space-y-3">
          <li className="text-gray-600">email@example.com</li>
          <li className="text-gray-600">+1 (123) 456-7890</li>
          <li className="flex space-x-4 pt-2">
            {['linkedin', 'github', 'twitter'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
              </a>
            ))}
          </li>
        </ul>
      </div>
      
      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Stay Updated</h3>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Your email" 
            className="px-4 py-2 w-full rounded-l-lg border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-r-lg font-medium">
            Join
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Get notified about new projects and updates
        </p>
      </div>
    </div>
  );
};

export default Footer;