import React from "react";
import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Selects from "./components/Selects";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Card />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
