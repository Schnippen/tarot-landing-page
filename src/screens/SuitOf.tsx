import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import CardDisplayItem from "../components/CardDisplayItem";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import { SuitOfAllCards } from "../data/TarotCardsData";
import styles from "../App.module.css";
import { TarotDecks } from "../data/TarotRoutesData";
import { SuitOfArticlesData } from "../data/SuitOfCardsArticlesData";

function SuitOf({ SuitNumber }: { SuitNumber: number }) {
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

  console.log(SuitNumber);
  console.log(SuitOfArticlesData[SuitNumber])
  return (
    <main className={styles.main}>
      <div className={styles.article_container}>
        <Article title={SuitOfArticlesData[SuitNumber].SuitName}>
          {SuitOfArticlesData[SuitNumber].SuitName}
          <p className={styles.paragraph}>SUIT OF</p>
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h3 className={styles.title}>SDASD</h3>
          <p className={styles.paragraph}>asdasdasd asdasdasdasd</p>
          <Separator marginHeight={48} />
          <h3 className={styles.title}>QUSTIONn?</h3>
          <p className={styles.paragraph}>LOLOLOL</p>
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <span ref={ref}></span>
        <Article title="SUIT OF CARDS:">
          <ul style={{ padding: "0px" }}>
            {SuitOfAllCards[SuitNumber].slice(0, 7).map((item, index) => (
              <>
                <CardDisplayItem
                  alt={item.alt}
                  tooltip={item.tooltip}
                  paragraphElement={item.description}
                  img={item.image}
                  index={item.number}
                  name={item.name}
                  href={item.href}
                />
                {SuitOfAllCards[SuitNumber].length / 2 === index + 1 ? (
                  <></>
                ) : (
                  <Separator marginHeight={48} />
                )}
              </>
            ))}
          </ul>
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <Article title="">
          <ul style={{ padding: "0px" }}>
            {SuitOfAllCards[SuitNumber].slice(7, 14).map((item, index) => (
              <>
                <CardDisplayItem
                  alt={item.alt}
                  tooltip={item.tooltip}
                  paragraphElement={item.description}
                  img={item.image}
                  index={item.number}
                  name={item.name}
                  href={item.href}
                />
                {SuitOfAllCards[SuitNumber].length === index + 1 ? (
                  <></>
                ) : (
                  <Separator marginHeight={48} />
                )}
              </>
            ))}
            <p className={styles.paragraph} style={{ textAlign: "center" }}>
              The end of the{" "}
              <a
                className={styles.Link}
                href="/#"
                onClick={(e) => executeScroll(e)}
                title="This Suit of Cards"
              >
                This Suit of Cards
              </a>{" "}
              marks the beginning of another journey -{" "}
              <Link
                to={TarotDecks[0]}
                className={styles.Link}
                title="Major Arcana Cards List"
              >
                The Major Arcana
              </Link>
              &
              <Link
                to={TarotDecks[1]}
                className={styles.Link}
                title="Minor Arcana Cards List"
              >
                The Minor Arcana
              </Link>
              .
            </p>
          </ul>
        </Article>
      </div>
      <Footer />
    </main>
  );
}

export default SuitOf;
