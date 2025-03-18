import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import StockPriceChart from "../components/StockPriceChart";

// JSON Data
const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "178.25",
    change: "+1.87%",
    marketCap: "2.8T",
    revenue: "394.3B",
    netIncome: "99.8B",
    peRatio: "29.1",
    dividend: "0.5%",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "2825.50",
    change: "+2.10%",
    marketCap: "1.9T",
    revenue: "280.3B",
    netIncome: "76.5B",
    peRatio: "24.7",
    dividend: "0%",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: "3450.75",
    change: "+3.22%",
    marketCap: "1.6T",
    revenue: "469.8B",
    netIncome: "33.3B",
    peRatio: "58.3",
    dividend: "0%",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: "950.30",
    change: "+4.75%",
    marketCap: "950B",
    revenue: "81.5B",
    netIncome: "11.9B",
    peRatio: "79.2",
    dividend: "0%",
  },
  {
    symbol: "META",
    name: "Meta Platforms, Inc.",
    price: "310.60",
    change: "+2.89%",
    marketCap: "860B",
    revenue: "117.9B",
    netIncome: "39.4B",
    peRatio: "23.5",
    dividend: "0%",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: "332.80",
    change: "+1.94%",
    marketCap: "2.6T",
    revenue: "211.9B",
    netIncome: "72.7B",
    peRatio: "35.6",
    dividend: "0.9%",
  },
];

const Stocks = () => {
  return (
    <>
      <div>
      <StockPriceChart/>

    </div>

    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Stock Market Overview
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>Symbol</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Price ($)</TableCell>
              <TableCell>Change (%)</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Net Income</TableCell>
              <TableCell>PE Ratio</TableCell>
              <TableCell>Dividend</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <a
                    href={`https://finance.yahoo.com/quote/${stock.symbol}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    {stock.symbol}
                  </a>
                </TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell>{stock.price}</TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: stock.change.includes("-") ? "red" : "green" }}
                >
                  {stock.change}
                </TableCell>
                <TableCell>{stock.marketCap}</TableCell>
                <TableCell>{stock.revenue}</TableCell>
                <TableCell>{stock.netIncome}</TableCell>
                <TableCell>{stock.peRatio}</TableCell>
                <TableCell>{stock.dividend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
    

  );
};

export default Stocks;
