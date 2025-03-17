import React from "react";

const Overview = ({ company }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-between items-center text-lg">
          <span className="font-semibold">Market Cap:</span>
          <span className="text-gray-600">{company.marketCap}</span>
        </div>

        
      </div>
    </div>
  );
};

export default Overview;
