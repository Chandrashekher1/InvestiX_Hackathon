import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">About InvestiX</h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Welcome to <span className="font-semibold">InvestiX</span> — your ultimate platform for real-time stock market insights, financial data, and investment analysis. Whether you're a seasoned trader or a beginner investor, InvestiX provides <span className="font-semibold">comprehensive stock information, interactive charts, financial metrics, and market news</span> to help you make informed investment decisions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At InvestiX, we aim to <span className="font-semibold">empower regular investors</span> by providing 
            <span className="font-semibold"> free, reliable, and easy-to-understand stock market data.</span> 
            The world of investing can often be complex, but our goal is to simplify financial analysis and
            <span className="font-semibold"> make stock market data accessible to everyone.</span>
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Real-time stock market data with price movements.</li>
            <li>Interactive charts and analytics for market trends.</li>
            <li>Latest stock market news from trusted sources.</li>
            <li>Comprehensive company profiles with financial metrics.</li>
            <li>Custom stock screening tools for better analysis.</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Our Hackathon Project</h2>
          <p className="text-gray-600">
            InvestiX was developed as part of a hackathon project with a vision to 
            <span className="font-semibold"> bridge the gap between investors and financial data.</span>  
            Our team integrated various APIs and machine learning model to provide 
            <span className="font-semibold"> accurate market forecasts, trend analysis, and data-driven insights.</span>  
            The project focuses on enhancing user experience with 
            <span className="font-semibold"> seamless navigation and dynamic search functionality.</span>
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-700 text-center mt-10">
        InvestiX is <span className="font-semibold">more than just a stock market platform</span> — it’s a step toward democratizing financial data and making investment research 
        <span className="font-semibold"> accessible to everyone, anytime, anywhere.</span>
      </p>
    </div>
  );
};

export default AboutUs;
