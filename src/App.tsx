import React from "react";
import styles from "./App.module.css";
import Home from "./screens/Home";
import TermsOfService from "./screens/TermsOfService";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import { useNavigate } from "react-router-dom";
import { analytics } from "./utils/mixpanel";
import { AnalyticsEvent } from "./utils/constants";
import { BrowserRouter } from "react-router-dom";

//import "dotenv/config";

function App() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const oops = process.env.REACT_APP_API_KEY;
  console.log(oops, "ENV VARIABLE");

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
