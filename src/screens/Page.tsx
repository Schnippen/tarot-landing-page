import React, { useEffect } from "react";
import Article from "../components/Article";
import styles from "../App.module.css";
import Footer from "../components/Footer";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";

import { PageMetaData, PageDataTitles, PageData } from "../data/PageData";
import { Helmet } from "react-helmet-async";
import { PagesRoutes } from "../data/TarotRoutesData";

function Page({ indexNumber }: { indexNumber: number }) {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []);

  return (
    <main className={styles.main}>
      <Helmet>
        <title>{PageMetaData[indexNumber].title}</title>
        <meta
          name="description"
          content={PageMetaData[indexNumber].description}
        />
        <meta name="keywords" content={PageMetaData[indexNumber].keywords} />
        <link rel="canonical" href={PagesRoutes[0]} />
      </Helmet>
      <div className={styles.article_container}>
        <Article title={PageDataTitles[indexNumber]}>
          {Object.values(PageData[indexNumber])}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
      </div>
      <Footer />
    </main>
  );
}

export default Page;
