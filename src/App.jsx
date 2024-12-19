import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import Top from "./Components/TopBanner.jsx";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import HomeC from "./Components/HomeC.jsx";


import FeaturesPage from "../src/Pages/FeaturePage.jsx";
import Blog from "../src/Pages/Blog.jsx";
import DietPlan from "../src/Pages/DietPlan.jsx";
import FAQPage from "../src/Pages/FAQPage.jsx";
import WorkputPlan from "./Pages/WorkputPlan.jsx";
import ContactUs from "../src/Pages/ContactUs.jsx";
import NewsLetter from "./Components/NewsLetter.jsx";
import FullBlog from "./Components/FullBlog.jsx";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loading simulation
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader /> // Show loader when loading is true
      ) : (
        <>
          {/* <Top /> */}
          <Navbar />
          <Routes>
            {/* Define Routes */}
            <Route path="/" element={<HomeC />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs/balanced-diet" element={<FullBlog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/diet-plan" element={<DietPlan />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/feature" element={<FeaturesPage />} />
            <Route path="/workout-plans" element={<WorkputPlan />} /> {/* Add your routes here */}
          </Routes>
          <NewsLetter/>
        </>
      )}
    </Router>
  );
}


export default App;
