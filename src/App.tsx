import React from "react";
import styles from "./App.module.css";
import Home from "./screens/Home";
import TermsOfService from "./screens/TermsOfService";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import { useNavigate } from "react-router-dom";
import { analytics } from "./utils/mixpanel";
import { AnalyticsEvent } from "./utils/constants";

function App() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToTermsOfService = () => {
    navigate("/terms-of-service");
  };

  return (
    <body className="App">
      <header className={styles.header}>
        <h1 className={styles.header_title} onClick={() => {navigateToHome();analytics.event(AnalyticsEvent.header_pressed)}}>
          Tarot Reader
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </body>
  );
}

export default App;

/*  


/* Certainly! Here's an example of content you could use for the landing page of your Tarot Reader app:

**Heading/Title:**
- Discover Your Fate with Tarot Readings

**Testimonials:**
- "This app has been my go-to for Tarot readings. The accuracy and depth of the interpretations never fail to amaze me." - Jane Doe
- "I've found answers and guidance through the Tarot Reader app. It's like having a trusted Tarot reader at my fingertips." - John Smith

Remember to customize and adapt the content to fit the tone and branding of your Tarot Reader app. */
