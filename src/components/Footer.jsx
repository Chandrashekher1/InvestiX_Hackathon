import React from "react";
import { FaFacebookF, FaTwitter,  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">SECTIONS</h3>
            <ul className="space-y-2">
              <li><Link to="/stocks" className="hover:text-gray-400" onClick={scrollToTop}>Stocks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">SERVICES</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-400" onClick={scrollToTop}>InvestiX Pro</Link></li>
              <li><Link to="/" className="hover:text-gray-400" onClick={scrollToTop}>Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">WEBSITE</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="hover:text-gray-400" onClick={scrollToTop}>Login</Link></li>
              <li><Link to="/faq" className="hover:text-gray-400" onClick={scrollToTop}>FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-400" onClick={scrollToTop}>About</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400" onClick={scrollToTop}>Contact Us</Link></li>
              <li><Link to="/term-use" className="hover:text-gray-400" onClick={scrollToTop}>Terms of Use</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-400" onClick={scrollToTop}>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">NEWSLETTER</h3>
            <p className="text-sm mb-3">Weekly market news in bullet point format.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded-l-md border-none bg-white mx-2 focus:outline-none text-black"
              />
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600" 
                onClick={scrollToTop}
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700" onClick={scrollToTop}>
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700" onClick={scrollToTop}>
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={scrollToTop}
          >
            Scroll to Top
          </button>
        </div>
      </div>

      <div className="mx-36 mt-4 text-center">
        <p>© 2025 InvestiX.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
