import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">SECTIONS</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">Stocks</a></li>
              <li><a href="/" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">Stock Analysis Pro</a></li>
              <li><a href="/" className="hover:text-gray-400">Free Newsletter</a></li>
              <li><a href="/" className="hover:text-gray-400">Get Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">WEBSITE</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">Login</a></li>
              <li><a href="/" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-400">About</a></li>
              <li><a href="/" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="/" className="hover:text-gray-400">Terms of Use</a></li>
              <li><a href="/" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-gray-400">Data Disclaimer</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2">MARKET NEWSLETTER</h3>
            <p className="text-sm mb-3">Daily market news in bullet point format.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded-l-md border-none bg-white mx-2 focus:outline-none text-black"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
        </div>
      </div>
      <div className="mx-36">
        <p>© 2025 InvestiX.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
