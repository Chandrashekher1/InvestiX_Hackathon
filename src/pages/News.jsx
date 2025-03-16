import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "81758a94e90f46a6b3f7e968bc107620---231";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=stock market&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div className="text-center text-gray-500">Loading news...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Stock Market News</h2>

      <div className="flex space-x-6 border-b pb-2 mb-4">
        <button className="font-semibold border-b-2 border-black">Markets</button>
        <button className="text-gray-500">All Stocks</button>
        <button className="text-gray-500">Press Releases</button>
      </div>

      {news.slice(0, 100).map((article, index) => (
        <div key={index} className="flex items-start space-x-4 mb-6 border-b pb-4">
          {article.urlToImage && (
            <img src={article.urlToImage} alt="news" className="w-40 h-28 object-cover rounded-md" />
          )}

          <div>
            <p className="text-gray-500 text-sm">{new Date(article.publishedAt).toLocaleTimeString()} - {article.source.name}</p>
            <h3 className="font-bold text-lg">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                {article.title}
              </a>
            </h3>
            <p className="text-gray-600">{article.description ? article.description.slice(0, 120) + "..." : ""}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News
