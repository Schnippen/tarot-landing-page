import React from "react";
import Article from "../components/Article";
import styles from "../App.module.css";
import Footer from "../components/Footer";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";

import {
  PageTarotInterpretationsAppTitle,
  PageTarotInterpretationsApp,
} from "../data/PageData";
import { Helmet } from "react-helmet-async";
import { PagesRoutes } from "../data/TarotRoutesData";

function Page() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Tarot Reader -The Tarot Interpretation App</title>
        <meta
          name="description"
          content="Unlock insights with Tarot Reader: Accurate tarot readings, card meanings, and spreads. Explore your destiny today!"
        />
        <meta
          name="keywords"
          content="Tarot Reader app
Tarot interpretation
Tarot card meanings
Tarot card spreads
Personalized tarot readings
Digital divination
Question-based tarot
Daily guidance
Love and career advice
Self-reflection
Tarot guidance
Destiny exploration
Tarot wisdom
Card interpretation
Tarot insights"
        />
        <link rel="canonical" href={PagesRoutes[0]} />
      </Helmet>
      <div className={styles.article_container}>
        <Article title={PageTarotInterpretationsAppTitle}>
          {Object.values(PageTarotInterpretationsApp)}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
      </div>
      <Footer />
    </main>
  );
}

export default Page;
