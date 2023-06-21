import React from "react";
import googlePlayImage from "../images/google-play.webp";
import styles from "../App.module.css";

function Exposition() {
  return (
    <div className={styles.exposition}>
      <div className={styles.exposition_wrapper}>
        <div className={styles.exposition_left}>AAAAa</div>
        <div className={styles.exposition_right}>
          <h2>
            Uncover insights, gain clarity, and explore the mysteries of your
            life through the ancient art of Tarot reading.
          </h2>
          Get Started Today: - Download our Tarot Reader app now and embark on a
          journey of self-discovery, wisdom, and empowerment. - Sign up to
          unlock the secrets of the Tarot and gain valuable insights into your
          life's questions.
          <img
            src={googlePlayImage}
            alt="Get on Google Play"
            height="80"
            width="206.7"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Exposition;
