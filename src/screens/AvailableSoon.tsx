import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import styles from "../App.module.css";
import { analytics } from "../utils/mixpanel";
import { AnalyticsEvent } from "../utils/constants";
import googlePlayImage from "../images/google-play.png";

function AvailableSoon() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []);

  return (
    <main
      className={styles.main}
      style={{ height: "100vh", display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px 0",
        }}
      >
        <div className={styles.terms_of_service_div_container}>
          <article className={styles.terms_of_service_div}>
            <Link
              to="/"
              className={styles.Link}
              onClick={() =>
                analytics.event(AnalyticsEvent.go_to_home_page_available_soon)
              }
            >
              Go to home page
            </Link>
            <h1
              style={{
                fontFamily: "Cinzel",
                fontSize: "1.8em",
                textAlign: "center",
              }}
            >
              Tarot Reader soon available on the App Store
            </h1>
            <div className={styles.available_soon_container}>
              <p>Check out the Android version of this app</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.mobiletarotandroid"
                onClick={() =>
                  analytics.event(
                    AnalyticsEvent.google_play_available_soon_pressed
                  )
                }
              >
                <img
                  src={googlePlayImage}
                  alt="Get on Google Play"
                  height="80"
                  width="206.7"
                ></img>
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default AvailableSoon;
