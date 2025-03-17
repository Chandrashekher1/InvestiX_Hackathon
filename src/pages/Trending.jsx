import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, CircularProgress
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

const API_KEY = "6452b5934cmsh543ea829395a94cp1dd5efjsnb845046f57da"
const API_HOST = "apidojo-yahoo-finance-v1.p.rapidapi.com";

const TrendingStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingStocks = async () => {
      try {
        // 1️⃣ Fetch trending stocks
        const trendingResponse = await axios.get(
          `https://${API_HOST}/market/get-trending-tickers?region=US`,
          { headers: { "X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": API_HOST } }
        );

        let stockList = trendingResponse.data.finance.result[0].quotes.slice(0, 5); // Top 5 Stocks

        // 2️⃣ Fetch detailed stock data (Market Cap, Volume, % Change)
        const symbols = stockList.map(stock => stock.symbol).join(",");
        const quotesResponse = await axios.get(
          `https://${API_HOST}/market/v2/get-quotes?region=US&symbols=${symbols}`,
          { headers: { "X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": API_HOST } }
        );

        // 3️⃣ Process stock data
        const detailedStocks = quotesResponse.data.quoteResponse.result.map(stock => ({
          symbol: stock.symbol,
          name: stock.shortName || stock.longName || "N/A",
          marketCap: stock.marketCap ? (stock.marketCap / 1e9).toFixed(2) : 1, // Convert to Billion
          volume: stock.regularMarketVolume || 1, // Ensure non-zero values
          changePercent: parseFloat(stock.regularMarketChangePercent).toFixed(2) || 0
        }));

        setStocks(detailedStocks);
      } catch (error) {
        console.error("Error fetching Yahoo Finance Data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingStocks();
  }, []);

  if (loading) return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Trending Stocks
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>#</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Market Cap (B)</TableCell>
              <TableCell>Volume</TableCell>
              <TableCell>% Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock, index) => (
              <TableRow key={stock.symbol} hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <a href={`https://finance.yahoo.com/quote/${stock.symbol}`} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: "none" }}>
                    {stock.symbol}
                  </a>
                </TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell>{stock.marketCap} B</TableCell>
                <TableCell>{stock.volume.toLocaleString()}</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: stock.changePercent < 0 ? "red" : "green" }}>
                  {stock.changePercent}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
        <Paper sx={{ width: "45%", p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Market Cap Distribution
          </Typography>
          <PieChart
            colors={["blue", "green", "red", "purple", "orange"]}
            series={[{ data: stocks.map(stock => ({ value: stock.marketCap, label: stock.symbol })) }]}
            width={400}
            height={300}
          />
        </Paper>

        <Paper sx={{ width: "45%", p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Volume Distribution
          </Typography>
          <PieChart
            colors={["cyan", "magenta", "yellow", "lime", "teal"]}
            series={[{ data: stocks.map(stock => ({ value: stock.volume, label: stock.symbol })) }]}
            width={400}
            height={300}
          />
        </Paper>
      </Box>

      <Paper sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Market Change Over Time
        </Typography>

        {stocks.length > 0 && stocks.some(stock => stock.changePercent !== null) ? (
          <LineChart
            xAxis={[
              { 
                data: stocks.map(stock => stock.symbol),
                label: "Stock Symbols",  
                tickAngle: -45 
              }
            ]}
            series={[
              {
                data: stocks.map(stock => parseFloat(stock.changePercent) || 0),
                label: "% Change",
                color: "blue",
                showMark: true,  
                strokeWidth: 3,  
                curve: "linear"  
              }
            ]}
            width={900}
            height={400}
          />
        ) : (
          <Typography variant="body1" color="error">
            No valid % Change data available
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default TrendingStocks;
