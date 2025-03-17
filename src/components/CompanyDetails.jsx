import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";
import Overview from "./Overview";
import History from "./History";

const CompanyDetails = () => {
  const { symbol } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("overview");

  useEffect(() => {
    fetch("/companies.json")  
      .then((response) => response.json())
      .then((data) => {
        const foundCompany = data.find((c) => c.symbol === symbol);
        setCompany(foundCompany);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
        setLoading(false);
      });
  }, [symbol]);

  if (loading) return <div className="text-2xl font-bold text-center text-">Loading...</div>;
  if (!company) return <div>Company not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold">{company.name} ({company.symbol})</h1>
      <h2 className="text-4xl font-bold">${company.price}</h2>
      <p className="text-gray-900 my-4">Market Cap: {company.marketCap}</p>

      <div className="flex space-x-4 mt-4 border-b cursor-pointer my-2 text-xl font-semibold">
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("overview")}>Overview</button>
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("history")}>History</button>
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("profile")}>Profile</button>
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("chart")}>Chart</button>
        <button className="cursor-pointer hover:text-blue-500" onClick={() => setSelectedTab("dashboard")}>Predictor</button>

      </div>

      <div className="mt-6">
        {selectedTab === "overview" && <Overview company={company} />}
        {selectedTab === "history" && <History />}
        {/* {selectedTab === "profile" && <Profile />} */}
        {selectedTab === "chart" && <Chart chartData={company.chartData} />}
      </div>
    </div>
  );
};

export default CompanyDetails;
