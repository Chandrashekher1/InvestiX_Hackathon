import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Store input value
  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between shadow-md p-2 sticky top-0 bg-white z-50">
      <div className="mx-4 font-bold text-lg">InvestiX</div>

      {/* Search Input Box */}
      <div className="relative w-[400px]" ref={searchRef}>
        <div 
          className="flex rounded-md py-3 border border-gray-300 bg-gray-50 cursor-pointer px-3"
          onClick={() => setShowSearch(true)}
        >
          <img 
            src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" 
            alt="Search Icon" 
            className="w-5 h-5 mx-2" 
          />
          <input 
            type="text"
            placeholder="Company or Stock Symbol..."
            className="w-full outline-none font-semibold bg-transparent cursor-text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search text
          />
        </div>

        {showSearch && (
          <div className="absolute top-14 left-0 bg-white shadow-lg w-full p-4 rounded-md border">
            <Search setShowSearch={setShowSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        )}
      </div>

      <div className="mx-4">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
