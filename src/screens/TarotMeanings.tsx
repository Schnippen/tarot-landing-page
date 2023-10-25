import React, { useEffect } from "react";
import Article from "../components/Article";
import styles from "../App.module.css";
import Footer from "../components/Footer";
import TarotMeaningsExpositionContainer from "../components/TarotMeaningsExpositionContainer";
import Separator from "../components/Separator";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function TarotMeanings() {
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
          Tarot Card Meanings - Explore the Enigmatic World of Tarot
        </title>
        <meta
          name="description"
          content="Explore the world of Tarot Card Meanings, a tool for personal insight and spiritual guidance through 78 unique cards."
        ></meta>
        <link rel="canonical" href="/tarot-card-meanings" />
      </Helmet>
      <div className={styles.article_container}>
        <Article title="Tarot Card Meanings">
          <h2 className={styles.title}>About The Tarot Card Meanings</h2>
          <p className={styles.paragraph}>
            The Tarot,{" "}
            <Link
              to="/history-of-tarot"
              className={styles.Link}
              title="History of Tarot"
            >
              a centuries-old system of divination
            </Link>
            , is a captivating and enigmatic tool that has intrigued mystics,
            seekers, and the curious alike.
            <br />
            At the heart of this esoteric practice lies the Tarot card deck, a
            collection of 78 cards that hold within them a universe of
            symbolism, archetypes, and profound insights.
            <br /> These cards have been used not only for fortune-telling but
            also as a means of gaining deep personal understanding and spiritual
            guidance.
          </p>
          <div style={{ width: "100%" }}>
            <Separator marginHeight={48} />
          </div>
          <h3 className={styles.title}>Unlocking the Secrets</h3>
          <p className={styles.paragraph}>
            Each Tarot card is a visual representation of a unique concept,
            emotion, or situation. The deck is divided into two main categories:{" "}
            <Link
              to="/major-arcana-tarot-card-meanings"
              className={styles.Link}
              title="Major Arcana Cards List"
            >
              The Major Arcana{" "}
            </Link>
            and{" "}
            <Link
              to="/minor arcana-tarot-card-meanings"
              className={styles.Link}
              title="Minor Arcana Cards List"
            >
              The Minor Arcana
            </Link>
            .
          </p>

          <ul>
            <li className={styles.paragraph}>
              <Link
                to="/major-arcana-tarot-card-meanings"
                className={styles.Link}
                title="Major Arcana Cards List"
              >
                The Major Arcana{" "}
              </Link>
              cards are the stars of the Tarot deck. They represent significant
              life events, spiritual lessons, and transformative journeys. Each
              <Link
                to="/major-arcana-tarot-card-meanings"
                className={styles.Link}
                title="Major Arcana Cards List"
              >
                The Major Arcana{" "}
              </Link>{" "}
              card is imbued with a powerful message and carries an archetype
              that resonates with our collective human experiences.
            </li>
            <div style={{ width: "100%", margin: "12px 0" }}></div>
            <li className={styles.paragraph}>
              <Link
                to="/minor arcana-tarot-card-meanings"
                className={styles.Link}
                title="Minor Arcana Cards List"
              >
                The Minor Arcana{" "}
              </Link>
              cards are further divided into four suits:{" "}
              <Link
                to="/suit-of-cups-meaning-minor-arcana-tarot-card-meanings"
                className={styles.Link}
                title="Suit of Cups"
              >
                Cups
              </Link>
              ,{" "}
              <Link
                to="/suit-of-wands-meaning-minor-arcana-tarot-card-meanings"
                className={styles.Link}
                title="Suit of Wands"
              >
                Wands
              </Link>
              ,{" "}
              <Link
                to="/suit-of-swords-meaning-minor-arcana-tarot-card-meanings"
                className={styles.Link}
                title="Suit of Swords"
              >
                Swords
              </Link>
              , and{" "}
              <Link
                to="/suit-of-pentacles-meaning-minor-arcana-tarot-card-meanings"
                className={styles.Link}
                title="Suit of Pentacles"
              >
                Pentacles
              </Link>
              . These suits correspond to different aspects of life, such as
              emotions, creativity, intellect, and material wealth. The Minor
              Arcana provides insights into everyday situations and challenges.
            </li>
          </ul>
        </Article>
        <span style={{ width: "100%", margin: "24px" }}></span>
        <TarotMeaningsExpositionContainer />
      </div>
      <Footer />
    </main>
  );
}

export default TarotMeanings;
