import React, { useEffect, useState } from "react";

const trendingStocks = [
  { symbol: "RELIANCE", name: "	Reliance Industries Limited" },
  { symbol: "HDFCBANK", name: "HDFC Bank Limited" },
  { symbol: "TCS", name: "Tata Consultancy Services Limited	" },
  { symbol: "AIRTELPP", name: "	Bharti Airtel Limited" },
  { symbol: "ICICIBANK", name: "ICICI Bank Limited" },
  { symbol: "INFY", name: "Infosys Limited" },
];

const Search = ({ setShowSearch, searchQuery, setSearchQuery }) => {
  const [filteredStocks, setFilteredStocks] = useState(trendingStocks);

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

  return (
    <div className="bg-white border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto">
      <div className="p-2 font-bold text-gray-700">Trending</div>
      {filteredStocks.length > 0 ? (
        filteredStocks.map((stock, index) => (
          <div
            key={index}
            className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setSearchQuery(stock.symbol)
              setShowSearch(false)
            }}
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
