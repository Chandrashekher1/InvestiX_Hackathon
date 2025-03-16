import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "cvbg3k9r01qob7uddot0cvbg3k9r01qob7uddotg---111";

  useEffect(() => {
    const fetchTrendingStocks = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
        );
        console.log("API Response:", response.data);

        if (response.data?.top_gainers) {
          setStocks(response.data.top_gainers.slice(0, 50))
        } else {
          console.error("Unexpected API response:", response.data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending stocks:", error);
        setLoading(false);
      }
    };

    fetchTrendingStocks();
  }, []);

  if (loading) return <div className="text-center text-gray-500">Loading trending stocks...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Trending Today</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">No.</th>
              <th className="border p-2">Symbol</th>
              {/* <th className="border p-2">Company Name</th>
              <th className="border p-2">Market Cap</th> */}
              <th className="border p-2">Volume</th>
              <th className="border p-2">% Change</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={stock.ticker} className="text-center border-b hover:bg-gray-50">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2 text-blue-500 font-semibold">
                  <a href={`https://www.google.com/search?q=${stock.ticker}`} target="_blank" rel="noopener noreferrer">
                    {stock.ticker}
                  </a>
                </td>
                {/* <td className="border p-2">{stock.name || "N/A"}</td>
                <td className="border p-2">{stock.market_cap || "N/A"}</td> */}
                <td className="border p-2">{stock.volume || "N/A"}</td>
                <td className={`border p-2 font-bold ${stock.change_percentage.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                  {stock.change_percentage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trending
