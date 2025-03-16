import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import News from "./pages/News";
import Trending from "./pages/Trending";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages to keep Sidebar persistent */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="news" element={<News />} />
          <Route path="trending" element={<Trending />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
