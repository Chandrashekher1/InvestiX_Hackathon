import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const Dashboard = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    fetch("/topGainerAndLoser.json")
      .then((response) => response.json())
      .then((data) => {
        setGainers(data.top_gainers);
        setLosers(data.top_losers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (gainers.length === 0 || losers.length === 0)
    return <p className="text-xl font-bold text-center">Loading data...</p>;

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
        Market Trends
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 4, flexWrap: "wrap" }}>
        <Paper sx={{ width: "48%", p: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "rgb(85,205,49)", mb: 2 }}>
            Top Gainers
          </Typography>
          <BarChart
            width={400}
            height={300}
            series={[
              {
                data: gainers.map(stock => stock.change),
                label: "Top Gainers",
                color: "rgb(85,205,49)", 
              },
            ]}
            xAxis={[{ scaleType: "band", data: gainers.map(stock => stock.symbol) }]}
          />
        </Paper>

        <Paper sx={{ width: "48%", p: 6 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "rgb(177,39,29)", mb: 2 }}>
            Top Losers
          </Typography>
          <BarChart
            width={400}
            height={300}
            series={[
              {
                data: losers.map(stock => stock.change),
                label: "Top Losers",
                color: "rgb(177,39,29)", 
              },
            ]}
            xAxis={[{ scaleType: "band", data: losers.map(stock => stock.symbol) }]}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
