import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "cvbg3k9r01qob7uddot0cvbg3k9r01qob7uddotg"

  useEffect(() => {
    const fetchTrendingStocks = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${API_KEY}`
        );

        if (response.data) {
          setStocks(response.data.slice(0, 20));
        }

        console.log(response);
        
      } catch (error) {
        console.error("Error fetching trending stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingStocks();
  }, []);

  if (loading) return <div className="text-center text-gray-500">Loading trending stocks...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Trending Today</h2>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse border border-gray-300">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">No.</th>
              <th className="border p-3 text-left">Symbol</th>
              <th className="border p-3 text-left">Company Name</th>
              <th className="border p-3 text-left">Market Cap</th>
              <th className="border p-3 text-left">Volume</th>
              <th className="border p-3 text-left">% Change</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((stock, index) => (
              <tr key={stock.symbol} className="text-left border-b hover:bg-gray-50">
                <td className="border p-3">{index + 1}</td>
                <td className="border p-3 text-blue-500 font-semibold">
                  <a href={`https://www.google.com/search?q=${stock.symbol}`} target="_blank" rel="noopener noreferrer">
                    {stock.symbol}
                  </a>
                </td>
                <td className="border p-3">{stock.description || "N/A"}</td>
                <td className="border p-3">{stock.market_cap || "N/A"}</td>
                <td className="border p-3">{stock.volume || "N/A"}</td>
                <td className={`border p-3 font-bold ${stock.change_percent > 0 ? "text-green-600" : "text-red-600"}`}>
                  {stock.change_percent ? `${stock.change_percent}%` : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingStocks;
