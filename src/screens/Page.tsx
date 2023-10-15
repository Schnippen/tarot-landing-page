import React from "react";
import Article from "../components/Article";
import styles from "../App.module.css";
import Footer from "../components/Footer";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";

import {
  PageTarotInterpretationsAppTitle,
  PageTarotInterpretationsApp,
} from "../data/PageData";

function Page() {
  return (
    <main className={styles.main}>
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
