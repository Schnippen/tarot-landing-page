import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import styles from "../App.module.css";
import CardDisplayItem from "../components/CardDisplayItem";
import MajorArcanaCards from "../images/cards/TarotCardPhotos";
import { TarotCardsDataAll } from "../data/TarotCardsData";
let test = MajorArcanaCards;

const CardDisplay = () => {
  console.log(TarotCardsDataAll[0]);
  return (
    <ul>
      {/* {MajorArcanaCards.map((item, index) => (
        <>
          <CardDisplayItem
            img={test[index]}
            index={index}
            key={item}
            alt=""
            tooltip=""
          />
          <Separator marginHeight={48} />
        </>
      ))} */}
      <CardDisplayItem
        alt={TarotCardsDataAll[0].alt}
        tooltip={TarotCardsDataAll[0].tooltip}
        paragraphElement={TarotCardsDataAll[0].description}
        img={TarotCardsDataAll[0].image}
        index={TarotCardsDataAll[0].number}
        name={TarotCardsDataAll[0].name}
        href={TarotCardsDataAll[0].href}
      />
    </ul>
  );
};

//img title descriptive alt tag
function TarotMajorArcana() {
  const ref = useRef(null);

  const executeScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    // @ts-ignore

    ref.current.scrollIntoView({ behavior: "smooth" });
  };
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
        <span ref={ref}></span>
        <Article title="Major Arcana Cards:">
          <CardDisplayItem
            alt={TarotCardsDataAll[0].alt}
            tooltip={TarotCardsDataAll[0].tooltip}
            paragraphElement={TarotCardsDataAll[0].description}
            img={TarotCardsDataAll[0].image}
            index={TarotCardsDataAll[0].number}
            name={TarotCardsDataAll[0].name}
            href={TarotCardsDataAll[0].href}
          />
        </Article>
      </div>
      <Footer />
    </main>
  );
}

export default TarotMajorArcana;


/*
{
    number: 0,
    name: "The Fool",
    image: MajorArcanaCards[0],
    route: "/the-fool-meaning-major-arcana-tarot-card-meanings",
    alt: "The Fool Card",
    tooltip: "The Fool Card",
    description: (
      <p className={styles.paragraph}>
       
      </p>
    ),
    href: (
      <Link

      </Link>
    ),
  },
*/

      (<p className={styles.paragraph}>
         The balancing act continues with <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[1]}
        >
          Temperance
        </Link>, a card symbolizing harmony, balance, and moderation. Temperance nudges us to seek balance in our lives and to merge our unconscious and conscious selves.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[1]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[1]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),