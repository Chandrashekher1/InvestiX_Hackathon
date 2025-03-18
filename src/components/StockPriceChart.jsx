import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const StockPriceChart = () => {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    // Fetch actual & predicted data separately
    Promise.all([
      fetch("/Actual.json").then(response => response.json()),
      fetch("/Prediction.json").then(response => response.json())
    ])
      .then(([actualData, predictedData]) => {
        // Merge by Date
        const mergedData = actualData.map((item, index) => ({
          Date: item.Date,
          actualPrice: item.Price,
          predictedPrice: predictedData[index]?.Price || null, // Use null if missing
        }));

        setCombinedData(mergedData);
      })
      .catch(error => console.error("Error fetching stock data:", error));
  }, []);

  if (combinedData.length === 0) {
    return <p className="text-center text-xl font-bold">Loading Chart...</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Actual vs Predicted Prices</h2>

      <LineChart
        xAxis={[
          {
            data: combinedData.map(item => item.Date),
            scaleType: "point",
            label: "Date",
          }
        ]}
        series={[
          {
            data: combinedData.map(item => item.actualPrice),
            label: "Actual Price ($)",
            color: "#FF0000", // Red Line for Actual Data
            showMark: false,
          },
          {
            data: combinedData.map(item => item.predictedPrice),
            label: "Predicted Price ($)",
            color: "#007bff", // Blue Line for Predicted Data
            showMark: false,
          }
        ]}
        width={900}
        height={400}
      />
    </div>
  );
};

export default StockPriceChart;
