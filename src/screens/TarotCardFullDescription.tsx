import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import styles from "../App.module.css";
import { TarotCardsAllFullDescriptionData } from "../data/TarotCardsFullDescriptionData";
import { TarotCardsPhotosAll } from "../images/cards/TarotCardPhotos";
import Card from "../components/Card";
import { TarotRoutes } from "../data/TarotRoutesData";
import TarotCardsComparisionsData from "../data/TarotCardsComparisionsData";

function TarotCardFullDescription({ CardNumber }: { CardNumber: number }) {
  const ref = useRef(null);

  const executeScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    // @ts-ignore

    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []);

  return (
    <main className={styles.main}>
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
        <span ref={ref}></span>
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

{
  /* <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span> */
}

/*        <ul style={{ padding: "0px" }}>
         <p className={styles.paragraph} style={{ textAlign: "center" }}>
           The end of the{" "}
           <Link
             to={TarotDecks[1]}
             className={styles.Link}
             title="Major Arcana Cards List"
           >
             The Major Arcana
           </Link>{" "}
           marks the beginning of another journey -{" "}
           <Link
             to={TarotDecks[1]}
             className={styles.Link}
             title="Minor Arcana Cards List"
           >
             The Minor Arcana
           </Link>
           .
         </p>
       </ul>; */
/*         {
          CardNumber > 1 ? (
            <Link
              to={TarotRoutes[CardNumber - 1]}
              className={styles.Link}
              title="Previous Card"
            >
              Previous Card
            </Link>
          ) : null;
        }
        <Link to="/" className={styles.Link} title="Go to main page">
          Go to main page
        </Link>;
        {
          CardNumber === TarotCardsAllFullDescriptionData.length ? null : (
            <Link
              to={TarotRoutes[CardNumber + 1]}
              className={styles.Link}
              title="Next Card"
            >
              Next Card
            </Link>
          );
        } */
