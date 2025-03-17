import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import News from "./pages/News";
import Trending from "./pages/Trending";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CompanyDetails from "./components/CompanyDetails";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermAndUse from "./pages/TermAndUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/stocks/" element={<Stocks />} />
          <Route path="/news/" element={<News />} />
          <Route path="/trending/" element={<Trending />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/company/:symbol" element={<CompanyDetails />} />
          <Route path="/faq/" element={<Faq />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/term-use/" element={<TermAndUse />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default App;
