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

const Dashboard = ({ gainers, losers }) => {
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
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>#</TableCell>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>% Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gainers.slice(0, 5).map((stock, index) => (
                  <TableRow key={stock.ticker} hover>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <a
                        href={`https://finance.yahoo.com/quote/${stock.ticker}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1976d2", textDecoration: "none" }}
                      >
                        {stock.ticker}
                      </a>
                    </TableCell>
                    <TableCell>${stock.price}</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "rgb(85,205,49)" }}>
                      {stock.change_percentage}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Top Losers Table */}
        <Paper sx={{ width: "48%", p: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "rgb(177,39,29)", mb: 2 }}>
            Top Losers
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>#</TableCell>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>% Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {losers.slice(0, 5).map((stock, index) => (
                  <TableRow key={stock.ticker} hover>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <a
                        href={`https://finance.yahoo.com/quote/${stock.ticker}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1976d2", textDecoration: "none" }}
                      >
                        {stock.ticker}
                      </a>
                    </TableCell>
                    <TableCell>${stock.price}</TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "rgb(177,39,29)" }}>
                      {stock.change_percentage}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

      </Box>
    </Box>
  );
};

export default Dashboard;
