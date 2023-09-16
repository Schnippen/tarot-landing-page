import React from "react";
import googlePlayImage from "../images/google-play.png";
import appStore from "../images/app-store.svg";
import styles from "../App.module.css";
import PhotoGallery from "./PhotoGallery";
import Separator from "./Separator";
import { AnalyticsEvent } from "../utils/constants";
import { analytics } from "../utils/mixpanel";
import { ScreenshotArray } from "./ScreensArray";
import { Link } from "react-router-dom";

function Exposition() {
  return (
    <div className={styles.exposition}>
      <div className={styles.exposition_container}>
        <article className={styles.exposition_article}>
          <PhotoGallery photos={ScreenshotArray} delay={4000} />
          <div className={styles.exposition_right}>
            <h2>
              Uncover insights, gain clarity, and explore the mysteries of your
              life through the ancient art of Tarot reading.
            </h2>
            <ul>
              <li>
                Download our Tarot Reader app now and embark on a journey of
                self-discovery, wisdom, and empowerment.
              </li>
              <Separator marginHeight={10} />
              <li>
                Sign up to unlock the secrets of the Tarot and gain valuable
                insights into your life's questions.
              </li>
            </ul>
            <div className={styles.button_container}>
              <a
                href="https://play.google.com/store/apps/details?id=com.mobiletarotandroid"
                onClick={() =>
                  analytics.event(AnalyticsEvent.google_play_pressed)
                }
              >
                <img
                  src={googlePlayImage}
                  alt="Get on Google Play"
                  height="80"
                  width="206.7"
                ></img>
              </a>
              <Link
                to="/available-soon"
                onClick={() =>
                  analytics.event(AnalyticsEvent.apple_store_pressed)
                }
              >
                <img
                  src={appStore}
                  alt="Get on App Store"
                  width="161.5"
                  height="54"
                />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Exposition;

/* 

          <div className={styles.exposition_right_wrapper}>
            
          </div> */
