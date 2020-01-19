import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Carousel />
      <Content />
    </div>
  );
}

export default App;
