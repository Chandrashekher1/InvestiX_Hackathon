import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const trendingStocks = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "AMZN", name: "Amazon.com Inc." },
  { symbol: "TSLA", name: "Tesla, Inc." },
  { symbol: "META", name: "Meta Platforms, Inc. " },
  { symbol: "MSFT", name: "Microsoft Corporation" }
];

const Search = ({ setShowSearch, searchQuery, setSearchQuery }) => {
  const [filteredStocks, setFilteredStocks] = useState(trendingStocks);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredStocks(trendingStocks);
    } else {
      setFilteredStocks(
        trendingStocks.filter(stock =>
          stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleStockSelect = (symbol) => {
    setSearchQuery(symbol);
    setShowSearch(false);
    navigate(`/company/${symbol}`)
  };

  return (
    <div className="bg-white border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto shadow-lg">
      <div className="p-2 font-bold text-gray-700">Trending</div>
      {filteredStocks.length > 0 ? (
        filteredStocks.map((stock, index) => (
          <div
            key={index}
            className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleStockSelect(stock.symbol)}
          >
            <span className="font-semibold">{stock.symbol}</span>
            <span className="text-gray-500">Stock</span>
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500">No results found</div>
      )}
    </div>
  );
};

export default Search;
