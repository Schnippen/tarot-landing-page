import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import styles from "../App.module.css";
import CardDisplayItem from "../components/CardDisplayItem";
import { MajorArcanaCardsData } from "../data/TarotCardsData";
import { TarotDecks } from "../data/TarotRoutesData";

function TarotMajorArcana() {
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
        <Article title="Major Arcana">
          <h2 className={styles.title}>About The Major Arcana Cards</h2>
          <p className={styles.paragraph}>
            The Major Arcana in a tarot deck consists of{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Major Arcana Cards"
            >
              {" "}
              22 cards
            </a>{" "}
            that hold significant symbolism and power. These cards often
            represent major life events, spiritual lessons, and profound
            transformations. Each{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Major Arcana Cards"
            >
              Major Arcana
            </a>{" "}
            card has its unique meaning and message, making them essential
            components of a tarot reading.
          </p>
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h3 className={styles.title}>
            What Does A Major Arcana Card Mean In A Tarot Reading?
          </h3>
          <p className={styles.paragraph}>
            In a tarot reading, drawing a{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Major Arcana Cards"
            >
              Major Arcana
            </a>{" "}
            card is a momentous event. These cards typically point to
            significant life events and powerful spiritual lessons. When a{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Major Arcana Cards"
            >
              Major Arcana
            </a>{" "}
            card appears in a reading, it often signifies that the universe is
            sending a strong message. These cards carry archetypal energy,
            making their meanings deep and impactful.
          </p>
          <Separator marginHeight={48} />
          <h3 className={styles.title}>
            How the Major Arcana Inspires Personal Growth and Transformation?
          </h3>
          <p className={styles.paragraph}>
            The true power of the{" "}
            <a
              className={styles.Link}
              href="/#"
              onClick={(e) => executeScroll(e)}
              title="Major Arcana Cards"
            >
              Major Arcana
            </a>{" "}
            lies in their ability to guide us towards self-discovery and
            personal development. To integrate their messages, reflect on how
            the themes of these cards resonate with your experiences and
            choices. Use them as a mirror to examine your life, your values, and
            your spiritual path. Embrace the opportunities for growth and
            transformation they offer.
          </p>
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
        <span style={{ width: "100%", margin: "24px" }}></span>
        <span ref={ref}></span>
        <Article title="Major Arcana Cards:">
          <ul style={{ padding: "0px" }}>
            {MajorArcanaCardsData.slice(0, 11).map((item, index) => (
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
                {MajorArcanaCardsData.length / 2 === index + 1 ? (
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
            {MajorArcanaCardsData.slice(11, 22).map((item, index) => (
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
                {MajorArcanaCardsData.length === index + 1 ? (
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
                title="Major Arcana Cards"
              >
                Major Arcana
              </a>{" "}
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
          </ul>
        </Article>
      </div>
      <Footer />
    </main>
  );
}

export default TarotMajorArcana;

/*      <CardDisplayItem
       alt={TarotCardsDataAll[0].alt}
       tooltip={TarotCardsDataAll[0].tooltip}
       paragraphElement={TarotCardsDataAll[0].description}
       img={TarotCardsDataAll[0].image}
       index={TarotCardsDataAll[0].number}
       name={TarotCardsDataAll[0].name}
       href={TarotCardsDataAll[0].href}
     />; */
