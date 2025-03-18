import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const Dashboard = ({ gainers, losers }) => {
  if (gainers.length === 0 || losers.length === 0)
    return <p className="text-xl font-bold text-center">Loading data...</p>;

  const gainersData = gainers.slice(0, 5).map((stock) => ({
    name: stock.ticker,
    change: parseFloat(stock.change_percentage.replace("%", "")),
  }));

  const losersData = losers.slice(0, 5).map((stock) => ({
    name: stock.ticker,
    change: parseFloat(stock.change_percentage.replace("%", "")),
  }));

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
                data: gainersData.map(stock => stock.change),
                label: "Top Gainers",
                color: "rgb(85,205,49)", 
              },
            ]}
            xAxis={[{ scaleType: "band", data: gainersData.map(stock => stock.name) }]}
          />
        </Paper>

        <Paper sx={{ width: "48%", p: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "rgb(177,39,29)", mb: 2 }}>
            Top Losers
          </Typography>
          <BarChart
            width={400}
            height={300}
            series={[
              {
                data: losersData.map(stock => stock.change),
                label: "Top Losers",
                color: "rgb(177,39,29)", 
              },
            ]}
            xAxis={[{ scaleType: "band", data: losersData.map(stock => stock.name) }]}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
