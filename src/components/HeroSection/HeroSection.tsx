import React from "react";
import "./HeroSection.css";
import SearchBar from "../SearchBar/SearchBar";
import heroImage from "../../assets/images/hero-image.png";
const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Best Learning Platform To Prepare For CSIT Semester Exams</h1>
        <p>Complete resources to help you excel in B.Sc. CSIT.</p>
        <SearchBar />
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
