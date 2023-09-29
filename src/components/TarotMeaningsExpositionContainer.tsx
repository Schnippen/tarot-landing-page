import React from "react";
import styles from "../App.module.css";
//import { Link } from "react-router-dom";
//import { AnalyticsEvent } from "../utils/constants";
//import { analytics } from "../utils/mixpanel";
import PhotoGallery from "./PhotoGallery";
import { ScreenshotArray } from "./ScreensArray";
import Separator from "./Separator";
import GooglePlayButton from "./buttons/GooglePlayButton";
import AppStoreButton from "./buttons/AppStoreButton";

function TarotMeaningsExpositionContainer() {
  const containerStyle = { height: "auto", padding: "24px 0" };
  return (
    <div className={styles.exposition} style={containerStyle}>
      <div className={styles.exposition_container}>
        <article className={styles.exposition_article}>
          <PhotoGallery photos={ScreenshotArray} delay={4000} />
          <div className={styles.exposition_right}>
            <h2>Meaningful Interpretations</h2>
            <p className={styles.exposition_right_paragraph}>
              Interpreting Tarot cards is an art as much as it is a skill.
              <br></br> <br></br>Tarot readers, whether seasoned professionals
              or curious beginners, delve into the symbolism, imagery, and
              intuition associated with each card.<br></br>
              <br></br> There is no one-size-fits-all interpretation; rather,
              Tarot readings are deeply personal and tailored to the querent's
              questions and circumstances.
            </p>
            <div style={{ width: "100%" }}>
              <Separator marginHeight={10} />
            </div>
            <h2>Get Answers to Every Imaginable Question</h2>
            <p className={styles.exposition_right_paragraph}>
              Our mobile app offers the best Tarot readings for every question
              you can imagine. Every question is unique, and so are our Tarot
              readings.
            </p>
            <div className={styles.button_container}>
              <GooglePlayButton />
              <AppStoreButton />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default TarotMeaningsExpositionContainer;
/* 







*/
