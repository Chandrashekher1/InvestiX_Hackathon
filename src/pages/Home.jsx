import React, { useEffect, useRef, useState } from "react";
import Search from "../components/Search";
import Dashboard from "./Dashboard";

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(true);

  // const API_KEY = "YOUR_ALPHAVANTAGE_API_KEY"; 

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

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (data.top_gainers && data.top_losers) {
          setGainers(data.top_gainers.slice(0, 10)); 
          setLosers(data.top_losers.slice(0, 10)); 
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col flex-grow px-6">
        <div className="text-center mt-20">
          <h1 className="font-bold text-4xl">Discover and analyze stocks to make smarter investment decisions.</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Accurate information on 100+ stocks and funds, including all the companies in the S&P500 index.
            See stock prices, news, financials, forecasts, charts, and more.
          </p>
        </div>

        <div className="relative w-96 mt-10 mx-auto" ref={searchRef}>
          <div
            className="flex items-center rounded-md py-3 border border-gray-300 bg-gray-50 px-3 cursor-pointer"
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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {showSearch && (
            <div className="absolute top-14 left-0 bg-white shadow-lg w-full p-4 rounded-md border">
              <Search setShowSearch={setShowSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
          )}
        </div>

          <div className="my-16">
            <Dashboard gainers={gainers} losers={losers} />

          </div>
        <div className="grid grid-cols-2 gap-6 mt-16">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Top Gainers</h2>
            {loading ? (
              <p className="font-bold text-xl">Loading data...</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Symbol</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {gainers.map((stock) => (
                    <tr key={stock.ticker} className="hover:bg-gray-50">
                      <td className="p-2 border text-blue-500">{stock.ticker}</td>
                      <td className="p-2 border">${stock.price}</td>
                      <td className="p-2 border text-green-500">{stock.change_percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Top Losers</h2>
            {loading ? (
              <p className="text-xl font-bold">Loading data...</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Symbol</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {losers.map((stock) => (
                    <tr key={stock.ticker} className="hover:bg-gray-50">
                      <td className="p-2 border text-blue-500">{stock.ticker}</td>
                      <td className="p-2 border">${stock.price}</td>
                      <td className="p-2 border text-red-500">{stock.change_percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
