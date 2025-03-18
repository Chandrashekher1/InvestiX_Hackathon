import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Overview from "./Overview";
import History from "./History";
// import Profile from "./Profile";
import Chart from "./Chart";

const API_KEY = "6452b5934cmsh543ea829395a94cp1dd5efjsnb845046f57da"; // Replace with your API Key
const API_HOST = "apidojo-yahoo-finance-v1.p.rapidapi.com";

const CompanyDetails = () => {
  const { symbol } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("overview");

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          `https://${API_HOST}/market/v2/get-quotes?region=US&symbols=${symbol}`,
          { headers: { "X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": API_HOST } }
        );
        
        const stockData = response.data.quoteResponse.result[0];
        console.log(stockData);
        
        if (stockData) {
          setCompany({
            name: stockData.shortName || stockData.longName,
            symbol: stockData.symbol,
            price: stockData.regularMarketPrice,
            change: stockData.regularMarketChangePercent.toFixed(2),
            marketCap: stockData.marketCap ? (stockData.marketCap / 1e9).toFixed(2) + " B" : "N/A",
            volume: stockData.regularMarketVolume?.toLocaleString() || "N/A",
            
            chartData: [], 
          });
        } else {
          setCompany(null);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [symbol]);

  if (loading) return <div className="text-2xl font-bold text-center">Loading...</div>;
  if (!company) return <div className="text-2xl font-bold text-center text-red-600">Company not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold">{company.name} ({company.symbol})</h1>
      <h2 className="text-4xl font-bold">${company.price}</h2>
      <p className={`text-lg ${company.change < 0 ? "text-red-500" : "text-green-500"}`}>
        Change: {company.change}%
      </p>
      <p className="text-gray-900 my-4">Market Cap: {company.marketCap}</p>

      <div className="flex space-x-6 mt-4 border-b cursor-pointer my-2 text-xl font-semibold">
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("overview")}>
          Overview
        </button>
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("history")}>
          History
        </button>
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("profile")}>
          Profile
        </button>
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("chart")}>
          Chart
        </button>
      </div>

      <div className="mt-6">
        {selectedTab === "history" && <History />}
        {selectedTab === "profile" && <Profile company={company} />}
        {selectedTab === "chart" && <Chart symbol={company.symbol} />}
      </div>
    </div>
  );
};

export default CompanyDetails;
