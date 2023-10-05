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
import SuitOf from "./screens/SuitOf";
import { RoutesSuitMinorArcana, TarotRoutes } from "./data/TarotRoutesData";
import TarotCardFullDescription from "./screens/TarotCardFullDescription";
//import "dotenv/config";
import { lazy, Suspense } from "react";
import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";
//const SHIT = lazy(() => import(""));
function App() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const TarotDecks = [
    "/major-arcana-tarot-card-meanings",
    "/minor arcana-tarot-card-meanings",
  ];
  const pupa = ["/the-fool-meaning-major-arcana-tarot-card-meanings"];
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
        <Route path={TarotDecks[0]} element={<TarotMajorArcana />} />
        <Route path={TarotDecks[1]} element={<TarotMinorArcana />} />
        {RoutesSuitMinorArcana.map((route, index) => (
          <Route
            path={route}
            element={<SuitOf SuitNumber={index} key={route} />}
          />
        ))}
        <Route
          path={TarotRoutes[0]}
          element={<TarotCardFullDescription CardNumber={0} />}
        />
        {TarotRoutes.map((route, index) => (
          <Route
            path={route}
            element={
              <TarotCardFullDescription CardNumber={index} key={route} />
            }
          />
        ))}
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </body>
  );
}

export default App;
//NOW ALL THE 78 cards full description
/*  {
   TarotRoutes.map((route, index) => (
     <Route
       path={route}
       element={
         <Suspense fallback={<div>Loading...</div>}>
           <TarotCardFullDescription CardNumber={index} key={route} />
         </Suspense>
       }
     />
   ));
 } */
