import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import companiesData from "../data/companies.json";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (symbol) => {
    navigate(`/company/${symbol}`);
  };

  return (
    <div className="relative w-96">
      <input
        type="text"
        placeholder="Search company..."
        className="w-full p-2 border rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <div className="absolute bg-white border w-full mt-1 rounded-md shadow-md">
          {companiesData
            .filter((company) =>
              company.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((company) => (
              <div
                key={company.symbol}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearch(company.symbol)}
              >
                {company.name} ({company.symbol})
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
