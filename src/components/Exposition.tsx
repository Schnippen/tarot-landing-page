import React from "react";
import googlePlayImage from "../images/google-play.webp";
import screen1 from "../images/screens/screen1.png";
import screen2 from "../images/screens/screen2.png";
import screen3 from "../images/screens/screen3.png";
import screen4 from "../images/screens/screen4.png";
import styles from "../App.module.css";
import PhotoGallery from "./PhotoGallery";
import Separator from "./Separator";
import { AnalyticsEvent } from "../utils/constants";
import { analytics } from "../utils/mixpanel";

const photos = [screen1, screen2, screen3, screen4];

function Exposition() {
  return (
    <div className={styles.exposition}>
      <div className={styles.exposition_container}>
        <article className={styles.exposition_article}>
          <PhotoGallery photos={photos} delay={4000} />
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
            <a
              href="blank"
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
