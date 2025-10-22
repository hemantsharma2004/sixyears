import React, { useState } from "react";
import Navigation from "./component/Navigation";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import LoveLetter from "./pages/LoveLetter";
import ReasonsCard from "./pages/ReasonsCard";
import Countdown from "./pages/Countdown";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "gallery":
        return <Gallery />;
      case "about":
        return <About />;
      case "letter":
        return <LoveLetter />;
      case "reasons":
        return <ReasonsCard />;
      case "countdown":
        return <Countdown />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">{renderPage()}</main>
    </div>
  );
}

export default App;
