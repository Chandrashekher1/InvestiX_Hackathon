import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaNewspaper, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-gray-900 text-white  p-5 pt-8  transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <button className="mx-1 text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className="mt-8">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <FaHome />
            {isOpen && <Link to="/" className="text-lg">Home</Link>}
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <FaChartBar />
            {isOpen && <Link to="/stocks/" className="text-lg">Stocks</Link>}
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <FaNewspaper />
            {isOpen && <Link to="/news/" className="text-lg">News</Link>}
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <img src="https://static-00.iconduck.com/assets.00/watchlist-icon-2048x1626-xp428ogc.png" alt="" className="w-6" />
            {isOpen && <Link to="/trending/" className="text-lg">Trending</Link>}
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYukNB3WKs9JAar0Q--6vvD6UsY2ot5gO3FT66gC2pxdZPovdtltyr5nPrdplOjisPkvc&usqp=CAU" alt="" className="w-6" />
            {isOpen && <Link to="/real-estate/" className="text-lg">Real Estate</Link>}
            <img src="" alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
