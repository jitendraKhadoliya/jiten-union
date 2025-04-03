import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import Section from "./components/Section";
import Footer from "./components/Footer";
import InsightsSection from "./components/InsightsSection";
import BusinessSlider from "./components/BusinessSlider";
import CounsellorForm from "./components/CounsellorForm";

function App() {
  const [count, setCount] = useState(0);

  const sections = [
    { id: "term-wise-curriculum", label: "Term Wise Curriculum" },
    { id: "subjects", label: "Subjects" },
    { id: "week-at-tetr", label: "Week at Tetr" },
    { id: "apply-now", label: "Apply Now" },
  ];

  return (
    <>
      <div>
        <Navbar />
        <SubNavbar sections={sections} />
        <HeroSection id="curriculum" />
        <InsightsSection id="subjects" />
        <BusinessSlider id="week" />
        <CounsellorForm id="apply" />
        <Footer />
      </div>
    </>
  );
}

export default App;
