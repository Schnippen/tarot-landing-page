import React, { useEffect, useRef } from "react";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import styles from "../App.module.css";
import { TarotCardsMinorArcanaSuits } from "../data/TarotCardsData";
import CardDisplayItem from "../components/CardDisplayItem";
import { RoutesSuitMinorArcana, TarotDecks } from "../data/TarotRoutesData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//photos
function TarotMinorArcana() {
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
      <Helmet>
        <title>Tarot Card Meanings - Minor Arcana</title>
        <meta
          name="description"
          content="Explore the Minor Arcana: 56 cards, four suits, and their significance in practical matters and transitions during Tarot readings."
        />
        <meta
          name="keywords"
          content="Minor Arcana,
Tarot Cards,
Suits of Cards,
Wands,
Cups,
Swords,
Pentacles,
Practical Matters,
Tarot Readings,
Transition Phase,
Tarot Guidance,  tarot card meanings major arcana,  tarot card meanings minor arcana"
        />
        <link rel="canonical" href={TarotDecks[1]} />
      </Helmet>
      <div className={styles.article_container}>
        <Article title="Minor Arcana">
          <h2 className={styles.title}>About The Minor Arcana Cards</h2>
          <p className={styles.paragraph}>
            {" "}
            Within the Tarot deck, there are 78 cards divided into two main
            categories: the{" "}
            <Link
              to={TarotDecks[0]}
              className={styles.Link}
              title="Major Arcana Cards List"
            >
              The Major Arcana{" "}
            </Link>
            and the{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Minor Arcana Cards"
            >
              Minor Arcana
            </a>
            . While the{" "}
            <Link
              to={TarotDecks[0]}
              className={styles.Link}
              title="Major Arcana Cards List"
            >
              The Major Arcana{" "}
            </Link>{" "}
            cards often steal the spotlight with their powerful archetypal
            symbolism, the{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Minor Arcana Cards"
            >
              Minor Arcana
            </a>{" "}
            cards are equally important and offer a rich tapestry of insights
            into our everyday lives.{" "}
          </p>
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h3 className={styles.title}>
            A Journey through the Minor Arcana Suits in Tarot
          </h3>
          <p className={styles.paragraph}>
            The{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Minor Arcana Cards"
            >
              Minor Arcana
            </a>{" "}
            consists of 56 cards, divided into four suits:{" "}
            <Link
              to={RoutesSuitMinorArcana[0]}
              className={styles.Link}
              title="Suit of Wands Cards List"
            >
              Wands
            </Link>
            ,{" "}
            <Link
              to={RoutesSuitMinorArcana[1]}
              className={styles.Link}
              title="Suit of Cups Cards List"
            >
              Cups
            </Link>
            ,{" "}
            <Link
              to={RoutesSuitMinorArcana[2]}
              className={styles.Link}
              title="Suit of Swords Cards List"
            >
              Swords
            </Link>
            , and{" "}
            <Link
              to={RoutesSuitMinorArcana[3]}
              className={styles.Link}
              title="Suit of Pentacles Cards List"
            >
              Pentacles
            </Link>{" "}
            (or Coins). Each suit represents a different facet of life and
            corresponds to one of the four classical elements—fire, water, air,
            and earth, respectively. Within each suit, there are ten numbered
            cards (Ace through Ten) and four court cards (Page, Knight, Queen,
            and King).
          </p>

          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h3 className={styles.title}>
            The Significance of a Minor Arcana-Dominant Tarot Reading
          </h3>
          <p className={styles.paragraph}>
            One common scenario during a Tarot reading is when the majority of
            the cards drawn belong to the{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Minor Arcana Cards"
            >
              Minor Arcana
            </a>
            . A reading heavy with Minor Arcana cards suggests that you may be
            seeking guidance or insights into these practical matters.<br></br>
            <br></br> When these cards dominate your reading, it could indicate
            that you're in a phase of change or transition. The adaptability and
            flexibility associated with the Suirs of Cards (
            <Link
              to={RoutesSuitMinorArcana[0]}
              className={styles.Link}
              title="Suit of Wands Cards List"
            >
              Wands
            </Link>
            ,
            <Link
              to={RoutesSuitMinorArcana[1]}
              className={styles.Link}
              title="Suit of Cups Cards List"
            >
              Cups
            </Link>
            ,
            <Link
              to={RoutesSuitMinorArcana[2]}
              className={styles.Link}
              title="Suit of Swords Cards List"
            >
              Swords
            </Link>
            ,
            <Link
              to={RoutesSuitMinorArcana[3]}
              className={styles.Link}
              title="Suit of Pentacles Cards List"
            >
              Pentacles
            </Link>
            ) encourage you to be open to adjustments and new opportunities.
            <br></br>
            <br></br>These cards often provide specific advice and action steps.
            It's essential to listen carefully to the message each card conveys,
            as they can offer valuable guidance on how to navigate your current
            circumstances effectively.
          </p>
        </Article>
        <span ref={ref}></span>
        <Article title="">
          <h2 className={styles.title} style={{ textAlign: "center" }}>
            Let's delve into the meanings of each suit and their respective
            cards:
          </h2>
          <ul style={{ padding: "0px" }}>
            {TarotCardsMinorArcanaSuits.map((item, index) => (
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
                {TarotCardsMinorArcanaSuits.length === index + 1 ? (
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
      </div>
      <Footer />
    </main>
  );
}

export default TarotMinorArcana;
