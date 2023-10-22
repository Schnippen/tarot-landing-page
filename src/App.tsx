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
import {
  PagesRoutes,
  RoutesSuitMinorArcana,
  TarotRoutes,
} from "./data/TarotRoutesData";
//import TarotCardFullDescription from "./screens/TarotCardFullDescription";
//import "dotenv/config";
import { lazy, Suspense } from "react";
import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "./screens/ErrorScreen";
import Page from "./screens/Page";
const TarotCardFullDescription = lazy(
  () => import("./screens/TarotCardFullDescription")
);

function App() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const TarotDecks = [
    "/major-arcana-tarot-card-meanings",
    "/minor-arcana-tarot-card-meanings",
  ];
  return (
    <body className="App">
      <header className={styles.header}>
        <h2
          className={styles.header_title}
          onClick={() => {
            navigateToHome();
            analytics.event(AnalyticsEvent.header_pressed);
          }}
        >
          Tarot Reader
        </h2>
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
            element={
              <ErrorBoundary
                FallbackComponent={ErrorScreen}
                onReset={() => {
                  navigate("/");
                }}
                onError={() => {
                  analytics.event(AnalyticsEvent.error_RoutesSuitMinorArcana);
                }}
                key={route}
              >
                <Suspense fallback={<Loading />}>
                  <SuitOf SuitNumber={index} key={route} />
                </Suspense>
              </ErrorBoundary>
            }
          />
        ))}

        {TarotRoutes.map((route, index) => (
          <Route
            path={route}
            element={
              <ErrorBoundary
                FallbackComponent={ErrorScreen}
                onReset={() => {
                  navigate("/");
                }}
                onError={() => {
                  analytics.event(
                    AnalyticsEvent.error_TarotCardFullDescription
                  );
                }}
                key={route}
              >
                <Suspense fallback={<Loading />}>
                  <TarotCardFullDescription CardNumber={index} key={route} />
                </Suspense>
              </ErrorBoundary>
            }
          />
        ))}

        {PagesRoutes.map((route, index) => (
          <Route
            path={route}
            element={
              <ErrorBoundary
                FallbackComponent={ErrorScreen}
                onReset={() => {
                  navigate("/");
                }}
                onError={() => {
                  analytics.event(AnalyticsEvent.error_RoutesPage);
                }}
              >
                <Suspense fallback={<Loading />}>
                  <Page key={route} indexNumber={index} />
                </Suspense>
              </ErrorBoundary>
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </body>
  );
}

export default App;
//NOW ALL THE 78 cards full description
/*  */
//mixpanel log error onError={}
