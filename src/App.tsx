import React from "react";
import styles from "./App.module.css";
import Home from "./screens/Home";
import TermsOfService from "./screens/TermsOfService";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import { useNavigate } from "react-router-dom";
import { analytics } from "./utils/mixpanel";
import { AnalyticsEvent } from "./utils/constants";
import AvailableSoon from "./screens/AvailableSoon";
import TarotMeanings from "./screens/TarotMeanings";
import TarotMajorArcana from "./screens/TarotMajorArcana";
import TarotMinorArcana from "./screens/TarotMinorArcana";

//import "dotenv/config";

function App() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <body className="App">
      <header className={styles.header}>
        <h1
          className={styles.header_title}
          onClick={() => {
            navigateToHome();
            analytics.event(AnalyticsEvent.header_pressed);
          }}
        >
          Tarot Reader
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/available-soon" element={<AvailableSoon />} />
        <Route path="/tarot-card-meanings" element={<TarotMeanings />} />
        <Route
          path="/major-arcana-tarot-card-meanings"
          element={<TarotMajorArcana />}
        />
        <Route
          path="/minor arcana-tarot-card-meanings"
          element={<TarotMinorArcana />}
        />
      </Routes>
    </body>
  );
}

export default App;
