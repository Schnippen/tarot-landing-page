import React from "react";
import googlePlayImage from "../images/google-play.webp";
import screen1 from "../images/screens/screen1.jpg";
import screen2 from "../images/screens/screen2.jpg";
import screen3 from "../images/screens/screen3.jpg";
import screen4 from "../images/screens/screen4.jpg";
import styles from "../App.module.css";
import PhotoGallery from "./PhotoGallery";
import Separator from "./Separator";

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
            <a href="blank">
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
