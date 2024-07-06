import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
