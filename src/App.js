import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Carousel />
      <Content />
      <Footer/>
    </>
  );
}

export default App;
