import React, { useEffect } from "react";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import styles from "../App.module.css";
import { TarotCardsAllFullDescriptionData } from "../data/TarotCardsFullDescriptionData";
import { TarotCardsPhotosAll } from "../images/cards/TarotCardPhotos";
import Card from "../components/Card";
import TarotCardsComparisionsData from "../data/TarotCardsComparisionsData";
import { Helmet } from "react-helmet-async";
import { CardsMetaTagsData } from "../data/CardsMetaTagsData";
import { TarotRoutes } from "../data/TarotRoutesData";

function TarotCardFullDescription({ CardNumber }: { CardNumber: number }) {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []);

  return (
    <main className={styles.main}>
      <Helmet>
        <title>
          {TarotCardsAllFullDescriptionData[CardNumber].tooltip + "Meaning"}
        </title>
        <meta name="description" content={CardsMetaTagsData[CardNumber]} />
        <link rel="canonical" href={TarotRoutes[CardNumber]} />
      </Helmet>
      <div className={styles.article_container}>
        <Article title={TarotCardsAllFullDescriptionData[CardNumber].CardName}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card img={TarotCardsPhotosAll[CardNumber]} />
          </div>
          {TarotCardsAllFullDescriptionData[CardNumber].SubTitle}
          {TarotCardsAllFullDescriptionData[CardNumber].Introduction}
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          {TarotCardsAllFullDescriptionData[CardNumber].SymbolismTitle}
          {TarotCardsAllFullDescriptionData[CardNumber].Symbolism}
        </Article>

        <Article
          title={TarotCardsAllFullDescriptionData[CardNumber].CardMeaning}
        >
          {TarotCardsAllFullDescriptionData[CardNumber].CardMeaningArticle}
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="Card comparisons">
          {TarotCardsComparisionsData[CardNumber]()}
        </Article>
      </div>
      <Footer />
    </main>
  );
}

export default TarotCardFullDescription;
