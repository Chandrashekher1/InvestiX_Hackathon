import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Dashboard = ({ gainers, losers }) => {
  if (gainers.length === 0 || losers.length === 0)
    return <p className="text-xl font-bold text-center">Loading chart...</p>;

  const gainersData = gainers.slice(0, 10).map(stock => ({
    name: stock.ticker,
    change: parseFloat(stock.change_percentage.replace("%", "")),
  }));

  const losersData = losers.slice(0, 10).map(stock => ({
    name: stock.ticker,
    change: parseFloat(stock.change_percentage.replace("%", "")),
  }));

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Market Trends</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-green-600 mb-2">Top Gainers</h3>
        <BarChart
          width={700}
          height={300}
          series={[
            {
              data: gainersData.map(stock => stock.change),
              label: "Top Gainers",
              color: "green",
            },
          ]}
          xAxis={[{ scaleType: "band", data: gainersData.map(stock => stock.name) }]}
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Top Losers</h3>
        <BarChart
          width={700}
          height={300}
          series={[
            {
              data: losersData.map(stock => stock.change),
              label: "Top Losers",
              color: "red",
            },
          ]}
          xAxis={[{ scaleType: "band", data: losersData.map(stock => stock.name) }]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
