import React from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import styles from "../App.module.css";

function TarotMajorArcana() {
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title="Major Arcana">
          <h2 className={styles.title}>About The Major Arcana Cards</h2>
          <p className={styles.paragraph}>asdasasdasdasdasdasd</p>
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h3 className={styles.title}>Uasdasdasd</h3>
          <p className={styles.paragraph}>dasdadada</p>

          <ul>
            <li className={styles.paragraph}>asdasdasda</li>
            <div style={{ width: "100%", margin: "12px 0" }}></div>
            <li className={styles.paragraph}>dadasdasd</li>
          </ul>
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
      </div>
      <Footer />
    </main>
  );
}

export default TarotMajorArcana;
