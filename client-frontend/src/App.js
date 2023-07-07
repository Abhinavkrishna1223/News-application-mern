import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/Header.jsx";
// import HomePage from "./pages/Home/HomePage.jsx";

import Section from "./pages/Section/Section.jsx";
// import Footer from "./components/Footer/Footer.jsx";

// import "./styles/App.scss";

import SinglePost from "./pages/SinglePost/SinglePost.jsx";
import Layout from "./components/Layout/Layout.jsx";
import './App.scss';
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
       {/* <Navbar /> */}
      <Routes>
        <Route path="/*" element={<Layout />} />
        {/* <Route path="/Section/:id" element={<Section />} />
        <Route path="/SinglPost/:id" element={<SinglePost/>} /> */}
        {/* <Route /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
// #e8e9f1
