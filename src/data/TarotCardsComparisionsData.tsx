import React from "react";
import Separator from "../components/Separator";
import styles from "../App.module.css";
import { Link } from "react-router-dom";
import { TarotRoutes } from "./TarotRoutesData";
import { TarotCardNamesCard } from "./TarotCardsData";
import { TarotDecks, RoutesSuitMinorArcana } from "./TarotRoutesData";
import { TarotCardsSuitOfPentaclesComparisionsData } from "./compapentacles";
import { TarotCardsSuitOfCupsComparisionsData } from "./compacups";
import { TarotCardsSuitOfSwordsComparisionsData } from "./compaswords";
import { TarotCardsSuitOfWandsComparisionsData } from "./compawands";
{
  <Link
    to={TarotRoutes[56]}
    className={styles.Link}
    title={TarotCardNamesCard[56]}
  >
    Seven of Swords{" "}
  </Link>;
  /*   <Link
    to={RoutesSuitMinorArcana[3]}
    className={styles.Link}
    title="The Suit of Pentacles List"
  >
    dsad
  </Link>; */
}

const Fool = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Fool vs. The Magician (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):{" "}
      </h2>
      <p className={styles.paragraph}>
        In the Tarot deck,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        represent distinct stages of a transformative journey.{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        , depicted as a carefree traveler on the edge of a cliff, signifies new
        beginnings, spontaneity, and a fearless leap into the unknown. This card
        encourages us to embrace life's adventures with open arms, even if it
        means taking risks.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        is a card of mastery and manifestation. It showcases a figure with tools
        at their disposal, symbolizing the power to turn ideas into reality.
        While{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        represents the beginning of a journey,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        embodies the ability to harness one's skills and creativity to shape
        their destiny.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Fool vs. Ace of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Moving from the Major to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , we encounter{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        in comparison with the{" "}
        <Link
          to={TarotRoutes[36]}
          className={styles.Link}
          title={TarotCardNamesCard[36]}
        >
          Ace of Cups
        </Link>{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool's
        </Link>{" "}
        carefree and open attitude signifies the initiation of a journey. It
        beckons us to embrace the adventure ahead, regardless of the
        uncertainties. It's a card of taking chances and welcoming the
        unfamiliar.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[36]}
          className={styles.Link}
          title={TarotCardNamesCard[36]}
        >
          Ace of Cups
        </Link>{" "}
        represents a new emotional beginning, often associated with love,
        intuition, and overflowing emotions. While The Fool starts a journey in
        the external world, the{" "}
        <Link
          to={TarotRoutes[36]}
          className={styles.Link}
          title={TarotCardNamesCard[36]}
        >
          Ace of Cups
        </Link>{" "}
        addresses matters of the heart and the inner world of emotions.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Fool vs. Ace of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        in contrast with the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles
        </Link>{" "}
        .{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool's
        </Link>{" "}
        symbolism encourages us to take a leap of faith, emphasizing the
        spiritual and personal aspects of a journey. It's about embracing the
        unknown and being open to life's surprises.
      </p>
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles
        </Link>{" "}
        , on the other hand, represents new opportunities in the material or
        financial realm. It often signifies a chance for prosperity and
        stability. While{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool's
        </Link>{" "}
        journey is primarily about experiences and personal growth, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles
        </Link>{" "}
        relates to practical, tangible gains in the physical world.
      </p>
      <p className={styles.paragraph}>
        These comparisons help us understand how{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        card relates to different stages and aspects of life's journey, from
        spiritual beginnings to practical opportunities, making it a versatile
        and meaningful card in Tarot readings.
      </p>
    </>
  );
};

const Magician = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Magician vs. The High Priestess (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        In the Tarot deck,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        represent two contrasting yet complementary aspects of the spiritual
        journey.{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        embodies the power of action, focusing on taking initiative and
        manifesting one's desires. With tools on the table before him, he
        signifies the ability to transform ideas into reality through practical
        skills and self-confidence.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        is a card of intuition and mystery. She emphasizes the importance of
        introspection and the hidden aspects of life. Her wisdom lies in the
        depths of the subconscious, and she encourages us to trust our instincts
        and explore the unseen realms of our inner selves. While{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        is about doing,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        is about being and deep knowing.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Magician vs. Ace of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="The Suit of Swords List"
        >
          Swords Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        ,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        can be compared to the{" "}
        <Link
          to={TarotRoutes[50]}
          className={styles.Link}
          title={TarotCardNamesCard[50]}
        >
          Ace of Swords
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician's
        </Link>{" "}
        symbolism revolves around mastery and the power to bring thoughts and
        ideas into reality. His focus is on the conscious mind and the creative
        force that propels action.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[50]}
          className={styles.Link}
          title={TarotCardNamesCard[50]}
        >
          Ace of Swords
        </Link>{" "}
        represents a new intellectual beginning, often associated with clarity,
        truth, and mental breakthroughs. It's about gaining a fresh perspective
        and cutting through confusion or illusions. While{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        harnesses external tools, the{" "}
        <Link
          to={TarotRoutes[50]}
          className={styles.Link}
          title={TarotCardNamesCard[50]}
        >
          Ace of Swords
        </Link>{" "}
        deals with the mental realm and the power of thought.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Magician vs. Ace of Wands (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[0]}
          className={styles.Link}
          title="The Suit of Wands List"
        >
          Wands Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        in contrast with the{" "}
        <Link
          to={TarotRoutes[22]}
          className={styles.Link}
          title={TarotCardNamesCard[22]}
        >
          Ace of Wands
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician's{" "}
        </Link>
        energy is about taking control of one's destiny and using skills to make
        things happen. His focus is on the proactive, fiery aspects of creation.
      </p>
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[22]}
          className={styles.Link}
          title={TarotCardNamesCard[22]}
        >
          Ace of Wands
        </Link>
        , on the other hand, signifies a new burst of inspiration and passion.
        It's a card of creative potential and enthusiasm, often linked to
        exciting new beginnings in areas like career or personal projects. While{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        emphasizes using existing tools, the{" "}
        <Link
          to={TarotRoutes[22]}
          className={styles.Link}
          title={TarotCardNamesCard[22]}
        >
          Ace of Wands
        </Link>{" "}
        is about igniting the spark of innovation and embracing new ventures.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        card relates to various aspects of personal power, action, and creation,
        both in the realm of the mind and the physical world. It underscores the
        importance of harnessing one's talents and taking initiative in
        different life situations.
      </p>
    </>
  );
};
const Priestess = () => {
  return (
    <>
      <h2 className={styles.title}>
        The High Priestess vs. The Empress (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both embody feminine energy and intuition, but they do so with different
        focuses.{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        represents a deep connection to the mysteries of the unconscious mind
        and the hidden realms of knowledge. She signifies a profound intuitive
        understanding and the ability to access inner wisdom.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies maternal love, fertility, and the abundance of the natural
        world. It signifies a nurturing and creative force that brings life and
        growth. While{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        emphasizes inner intuition and hidden knowledge,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        highlights the generative and nurturing aspects of life.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The High Priestess vs. The Seven of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        to{" "}
        <Link
          to={TarotRoutes[42]}
          className={styles.Link}
          title={TarotCardNamesCard[42]}
        >
          The Seven of Cups
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        represents a deep connection to the mysteries of the unconscious mind
        and inner wisdom.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[42]}
          className={styles.Link}
          title={TarotCardNamesCard[42]}
        >
          The Seven of Cups
        </Link>{" "}
        represents dreams, fantasies, and the exploration of various
        possibilities and desires. It signifies a need to make choices among
        multiple options, often with emotional or imaginative elements. While{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        emphasizes inner intuition,{" "}
        <Link
          to={TarotRoutes[42]}
          className={styles.Link}
          title={TarotCardNamesCard[42]}
        >
          The Seven of Cups
        </Link>{" "}
        encourages us to explore our inner desires and make choices wisely.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The High Priestess vs. The Magician (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Now, let's explore how The High Priestess compares to{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        represents a deep connection to the mysteries of the unconscious mind
        and inner wisdom.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        embodies the power of manifestation, creativity, and the ability to
        bring ideas into reality. It signifies a dynamic and active approach to
        shaping one's destiny.{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician's
        </Link>{" "}
        energy contrasts with the introspective and intuitive nature of T
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>
        .
      </p>
      <p className={styles.paragraph}>
        These comparisons help us understand how{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        card relates to themes of inner intuition and hidden knowledge. It
        encourages us to trust our inner wisdom while recognizing the diverse
        energies associated with abundance, dream exploration, and active
        manifestation in Tarot readings.
      </p>
    </>
  );
};

const Empress = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Empress vs. The High Priestess (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        In the Tarot deck,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        are both powerful feminine archetypes, but they represent distinct
        aspects of the divine feminine.{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        embodies nurturing, abundance, and fertility. She represents the
        creative force of nature, often associated with motherhood and abundance
        in its physical form.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        embodies the mystical, intuitive, and hidden aspects of the feminine.
        She represents inner wisdom, intuition, and the depths of the
        subconscious mind. While{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        is connected to external creation and abundance,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        delves into the inner world, guiding us to explore our spiritual and
        intuitive depths.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Empress vs. Queen of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , we can compare{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[48]}
          className={styles.Link}
          title={TarotCardNamesCard[48]}
        >
          Queen of Cups
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        represents nurturing and fertility, often associated with the creation
        and growth of life. She signifies a deep connection to the earth and the
        ability to provide love, care, and abundance.
      </p>
      <p className={styles.paragraph}>
        In contrast, the{" "}
        <Link
          to={TarotRoutes[48]}
          className={styles.Link}
          title={TarotCardNamesCard[48]}
        >
          Queen of Cups
        </Link>{" "}
        represents emotional depth, intuition, and compassion. She is in tune
        with her emotions and those of others, often depicted with a cup that
        overflows with feelings. While{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        relates to physical abundance and creation, the{" "}
        <Link
          to={TarotRoutes[48]}
          className={styles.Link}
          title={TarotCardNamesCard[48]}
        >
          Queen of Cups
        </Link>{" "}
        emphasizes emotional richness and connection.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Empress vs. Ten of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        compares to the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        represents fertility and abundance, often linked to family and
        generational wealth. She embodies the idea of a prosperous and
        harmonious home life.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles
        </Link>{" "}
        is a card of material success and legacy. It signifies the accumulation
        of wealth and the establishment of a secure family lineage. While{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        represents the creative aspect of abundance, the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>
        focuses on the tangible, long-lasting aspects of financial and familial
        prosperity.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate the multifaceted nature of{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress{" "}
        </Link>
        card, showcasing its role as a symbol of earthly abundance, maternal
        energy, and creation. It helps us appreciate the diverse qualities and
        interpretations associated with this card in Tarot readings, from
        nurturing and fertility to material wealth and family connections.
      </p>
    </>
  );
};

const Emperor = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Emperor vs. The Hierophant (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        In the Tarot,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>
        and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both hold positions of authority, but they represent different facets of
        leadership.{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        embodies the qualities of worldly power, structure, and control. He
        symbolizes the ability to create order from chaos and maintain stability
        through authority and discipline.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        represents spiritual authority, tradition, and guidance. He signifies
        the connection to higher wisdom and the role of mentor or spiritual
        leader. While{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>
        focuses on earthly governance,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        guides us toward spiritual enlightenment and adherence to tradition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Emperor vs. King of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , we can compare{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[77]}
          className={styles.Link}
          title={TarotCardNamesCard[77]}
        >
          King of Pentacles{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>
        represents authority and control in a broader sense, often tied to
        leadership and governance. He embodies the traits of a responsible and
        influential ruler.
      </p>
      <p className={styles.paragraph}>
        In contrast, the{" "}
        <Link
          to={TarotRoutes[77]}
          className={styles.Link}
          title={TarotCardNamesCard[77]}
        >
          King of Pentacles{" "}
        </Link>{" "}
        signifies mastery over material aspects of life, such as wealth,
        stability, and abundance. He is a symbol of financial success and a
        pragmatic approach to wealth and security. While{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        represents leadership in a more general sense, the{" "}
        <Link
          to={TarotRoutes[77]}
          className={styles.Link}
          title={TarotCardNamesCard[77]}
        >
          King of Pentacles{" "}
        </Link>{" "}
        is focused on tangible, material prosperity.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Emperor vs. Five of Wands (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[0]}
          className={styles.Link}
          title="The Suit of Wands List"
        >
          Wands Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        compares to the{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          Five of Wands{" "}
        </Link>
        . The Emperor signifies order and control, emphasizing the importance of
        structure and discipline in achieving one's goals. He represents the
        ability to navigate challenges through assertive leadership.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          Five of Wands{" "}
        </Link>{" "}
        reflects a situation of conflict, competition, and the need to assert
        one's individuality. It represents the chaos and discord that can arise
        when different energies clash. While{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        promotes order and control, the{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          Five of Wands{" "}
        </Link>{" "}
        highlights the challenges that arise when conflicts are not managed
        harmoniously.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate the role of{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        card as a symbol of authority, leadership, and structure. It helps us
        understand the diverse qualities associated with this card in Tarot
        readings, from worldly power and governance to the mastery of material
        resources and the need for assertive control in challenging situations.
      </p>
    </>
  );
};

const Hierophant = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Hierophant vs. The High Priestess (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        both hold positions of spiritual authority, but they represent distinct
        aspects of the divine and esoteric.{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        embodies traditional religious and societal structures, representing
        organized religion, doctrines, and formal rituals. He is a symbol of
        seeking spiritual guidance through established institutions and
        teachings.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        represents the intuitive, mystical, and often hidden aspects of
        spirituality. She encourages a deep connection with the subconscious
        mind and inner wisdom, emphasizing the importance of intuition and inner
        guidance. While{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        relates to external spiritual authority,
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        guides us to explore the inner realms of spirituality and personal
        intuition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Hierophant vs. Page of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[46]}
          className={styles.Link}
          title={TarotCardNamesCard[46]}
        >
          Page of Cups{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        represents spiritual traditions and guidance from established sources.
        He encourages conformity to societal norms and traditions, particularly
        in matters of faith and spirituality.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[46]}
          className={styles.Link}
          title={TarotCardNamesCard[46]}
        >
          Page of Cups{" "}
        </Link>{" "}
        embodies the qualities of emotional openness, creativity, and youthful
        exploration of feelings. This card represents the emergence of intuitive
        and imaginative abilities, often linked to a sense of wonder and
        receptivity to emotional experiences. While{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        emphasizes tradition, the{" "}
        <Link
          to={TarotRoutes[46]}
          className={styles.Link}
          title={TarotCardNamesCard[46]}
        >
          Page of Cups{" "}
        </Link>{" "}
        highlights the freshness of emotional expression and discovery.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Hierophant vs. Four of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        compares to the{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardNamesCard[67]}
        >
          Four of Pentacles{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        signifies adherence to spiritual and societal structures, often related
        to a sense of tradition and duty. He represents the idea of valuing
        stability and external guidance.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardNamesCard[67]}
        >
          Four of Pentacles{" "}
        </Link>{" "}
        reflects a sense of holding onto material possessions or a fear of loss.
        It can suggest a reluctance to let go and embrace change, often tied to
        concerns about financial security. While{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        promotes adherence to external values and traditions, the Four of
        Pentacles relates to the fear of letting go and holding onto what is
        familiar.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        card embodies the themes of tradition, spiritual guidance, and
        conformity to established structures. It helps us understand the diverse
        qualities associated with this card in Tarot readings, from seeking
        external wisdom to exploring the depths of our intuition and emotions.
      </p>
    </>
  );
};
const Lovers = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Lovers vs. The Chariot (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Lovers and{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        both represent powerful forces, but they do so in different ways. The
        Lovers card signifies love, harmony, and the power of choice. It
        represents the union of two souls or the inner balance that comes from
        making decisions based on love and alignment.
      </p>
      <p className={styles.paragraph}>
        In contrast,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        symbolizes determination and the drive to overcome obstacles. It
        represents the focused willpower to achieve goals and move forward in
        life. While The Lovers emphasize the choices we make from the heart,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        highlights the strength and determination needed to execute those
        choices.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Lovers vs. Two of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Lovers to the{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          Two of Cups{" "}
        </Link>
        . The Lovers card embodies the deep emotional connection and union
        between individuals. It signifies love, partnership, and the merging of
        two souls in harmony.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          Two of Cups{" "}
        </Link>{" "}
        represents a budding emotional connection and the initial stages of a
        loving relationship. It often signifies the mutual attraction and shared
        feelings between two people. While The Lovers signify the culmination of
        a deep bond, the{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          Two of Cups{" "}
        </Link>
        represents the beginnings of such a connection.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Lovers vs. Ace of Wands (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[0]}
          className={styles.Link}
          title="The Suit of Wands List"
        >
          Wands Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Lovers compare to the{" "}
        <Link
          to={TarotRoutes[22]}
          className={styles.Link}
          title={TarotCardNamesCard[22]}
        >
          Ace of Wands
        </Link>
        . The Lovers card is about choices driven by love and passion. It
        represents the power of love to guide decisions and the harmonious union
        of two individuals.
      </p>
      <p className={styles.paragraph}>
        On the other hand, the{" "}
        <Link
          to={TarotRoutes[22]}
          className={styles.Link}
          title={TarotCardNamesCard[22]}
        >
          Ace of Wands
        </Link>{" "}
        represents the spark of inspiration and new creative beginnings. It
        signifies the birth of new ideas, projects, or passions. While The
        Lovers highlight choices made in the realm of relationships and love,
        the{" "}
        <Link
          to={TarotRoutes[22]}
          className={styles.Link}
          title={TarotCardNamesCard[22]}
        >
          Ace of Wands
        </Link>{" "}
        focuses on the enthusiastic pursuit of creative endeavors.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate the multifaceted nature of The Lovers card,
        showcasing its role as a symbol of love, choice, and alignment. It helps
        us understand the diverse qualities and interpretations associated with
        this card in Tarot readings, from romantic unions to the power of
        passionate decision-making in various aspects of life.
      </p>
    </>
  );
};

const Chariot = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Chariot vs. The Emperor (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        are both powerful cards of control and authority, but they express these
        qualities differently.{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        represents the determination to overcome obstacles and move forward. It
        symbolizes the inner strength and self-discipline needed to conquer
        challenges.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        embodies authority and structured control. He represents the
        establishment of order, governance, and leadership. While{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>
        emphasizes the inner drive to achieve goals,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        relates to external authority and the ability to maintain order in the
        world.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Chariot vs. Six of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="The Suit of Swords List"
        >
          Swords Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[55]}
          className={styles.Link}
          title={TarotCardNamesCard[55]}
        >
          Six of Swords{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        symbolizes victory over adversity and the drive to navigate life's
        challenges. It represents the idea of moving forward with determination
        and purpose.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[55]}
          className={styles.Link}
          title={TarotCardNamesCard[55]}
        >
          Six of Swords{" "}
        </Link>{" "}
        signifies a transition from a difficult or turbulent situation to calmer
        waters. It often suggests a journey away from conflict and toward a more
        peaceful phase in life. While The Chariot highlights the active pursuit
        of goals, the{" "}
        <Link
          to={TarotRoutes[55]}
          className={styles.Link}
          title={TarotCardNamesCard[55]}
        >
          Six of Swords{" "}
        </Link>
        represents the movement away from challenges and into a period of
        healing and peace.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Chariot vs. Eight of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        compares to the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        represents victory through effort and determination. It signifies the
        drive to succeed through hard work and focus.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>{" "}
        signifies dedication and craftsmanship. It often represents the
        commitment to honing one's skills and mastering a craft or profession.
        While{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        emphasizes the determination to achieve a goal, the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>
        relates to the ongoing effort required for mastery and success.
      </p>
      <p className={styles.paragraph}>
        These comparisons highlight{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        card's role as a symbol of determination, control, and the drive to
        overcome obstacles. It helps us understand the diverse qualities and
        interpretations associated with this card in Tarot readings, from inner
        strength and perseverance to the active pursuit of goals and success.
      </p>
    </>
  );
};

const Strength = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Strength vs. The Hierophant (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Strength card and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both represent forms of inner power, but they do so in distinct ways.
        The Strength card symbolizes inner strength, courage, and the ability to
        harness one's primal instincts for a higher purpose. It emphasizes the
        power of compassion and gentle persuasion to overcome challenges.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        embodies spiritual authority, tradition, and guidance from established
        sources. He signifies the connection to higher wisdom and the role of
        mentor or spiritual leader. While The Strength card encourages inner
        fortitude,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        guides us toward spiritual enlightenment through structured teachings.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Strength vs. Three of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Strength card to the{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          Three of Cups{" "}
        </Link>
        . The Strength card signifies inner courage and the ability to tame
        one's inner beasts. It represents the strength to maintain composure and
        balance, even in challenging emotional situations.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          Three of Cups{" "}
        </Link>{" "}
        is a card of celebration and joyful gatherings. It often signifies the
        joy of coming together with friends and loved ones to celebrate life's
        pleasures. While The Strength card focuses on inner strength, the{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          Three of Cups{" "}
        </Link>{" "}
        represents the outward expression of happiness and emotional connection.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Strength vs. Nine of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Strength card compares to the{" "}
        <Link
          to={TarotRoutes[72]}
          className={styles.Link}
          title={TarotCardNamesCard[72]}
        >
          Nine of Pentacles{" "}
        </Link>
        . The Strength card signifies inner courage and the ability to conquer
        fears and challenges. It emphasizes the importance of self-control and
        harnessing one's inner potential.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[72]}
          className={styles.Link}
          title={TarotCardNamesCard[72]}
        >
          Nine of Pentacles{" "}
        </Link>{" "}
        represents material abundance and self-sufficiency. It often signifies
        financial success and the enjoyment of life's comforts. While The
        Strength card relates to inner strength and mastery, the{" "}
        <Link
          to={TarotRoutes[72]}
          className={styles.Link}
          title={TarotCardNamesCard[72]}
        >
          Nine of Pentacles{" "}
        </Link>{" "}
        is about external prosperity and self-reliance.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how The Strength card embodies themes of
        inner fortitude, compassion, and the ability to harness primal
        instincts. It helps us understand the diverse qualities and
        interpretations associated with this card in Tarot readings, from
        personal courage and emotional strength to the mastery of one's inner
        nature and the celebration of life's joys.
      </p>
    </>
  );
};

const Hermit = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Hermit vs. The High Priestess (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Hermit and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        are both cards that emphasize introspection and inner wisdom, but they
        do so from different perspectives. The Hermit represents the need for
        solitude and introspection to gain clarity and insight. It encourages
        seeking answers within and taking time for self-discovery.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        embodies intuition, mystery, and the deep subconscious. She encourages
        us to trust our inner guidance and explore the hidden realms of our
        psyche. While The Hermit focuses on self-reflection through solitude,
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        delves into the mysteries of the unconscious mind and hidden knowledge.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Hermit vs. Four of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="The Suit of Swords List"
        >
          Swords Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Hermit to the{" "}
        <Link
          to={TarotRoutes[53]}
          className={styles.Link}
          title={TarotCardNamesCard[53]}
        >
          Four of Swords{" "}
        </Link>
        . The Hermit suggests a period of introspection and inner retreat to
        gain clarity and perspective. It encourages taking a break from the
        external world to find answers within.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[53]}
          className={styles.Link}
          title={TarotCardNamesCard[53]}
        >
          Four of Swords{" "}
        </Link>{" "}
        represents rest, recuperation, and a temporary pause in activity. It
        often suggests the need to recover from stress or exhaustion through
        rest and relaxation. While The Hermit promotes deep introspection, the{" "}
        <Link
          to={TarotRoutes[53]}
          className={styles.Link}
          title={TarotCardNamesCard[53]}
        >
          Four of Swords{" "}
        </Link>{" "}
        emphasizes the importance of rest and recuperation in the face of
        challenges.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Hermit vs. Eight of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Hermit compares to the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>
        . The Hermit signifies a period of self-discovery and inner growth
        through introspection. It emphasizes the value of mastering oneself
        through inner work.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>{" "}
        represents dedication and craftsmanship in the external world. It often
        signifies the commitment to honing one's skills and mastering a craft or
        profession. While The Hermit relates to inner wisdom, the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>{" "}
        focuses on practical mastery and skill development in the material
        realm.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how The Hermit card represents the
        importance of self-reflection, inner guidance, and the journey toward
        self-discovery. It helps us understand the diverse qualities and
        interpretations associated with this card in Tarot readings, from
        seeking answers within to finding rest and recuperation or pursuing
        mastery in the external world.
      </p>
    </>
  );
};

const Fortune = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Wheel of Fortune vs. The Fool (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Wheel of Fortune and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        are both cards that represent cycles and change, but they approach these
        concepts differently.{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        symbolizes the ever-turning cycles of life, where fate and destiny play
        a significant role. It teaches us that life is full of ups and downs,
        and we must adapt to change as it comes.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        signifies new beginnings, spontaneity, and taking a leap of faith. While
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        deals with the cyclical nature of existence,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        embraces the unknown with innocence and curiosity, starting a journey
        unburdened by expectations.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Wheel of Fortune vs. Six of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          Six of Cups{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        represents the ever-changing nature of life's circumstances, emphasizing
        that both good and bad times are part of the cycle. It reminds us to
        accept life's twists and turns with equanimity.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          Six of Cups{" "}
        </Link>{" "}
        is a card of nostalgia and reminiscence. It often represents happy
        memories and the joy of reliving the past. While{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>
        focuses on change and adaptation, the{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          Six of Cups{" "}
        </Link>
        brings our attention to the sentimental and comforting aspects of our
        history.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Wheel of Fortune vs. Ace of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        compares to the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        signifies the cycles of opportunity and change that life brings. It
        emphasizes the importance of seizing moments of luck and adapting to
        shifts in circumstances.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        represents a new material or financial opportunity. It often signifies
        the potential for prosperity and stability. While{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>
        highlights the cyclical nature of life, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        relates to tangible, earthly gains and the initiation of a new chapter
        in the material realm.
      </p>
      <p className={styles.paragraph}>
        These comparisons help us understand how{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        card relates to the concept of cycles, fate, and change, both in the
        context of life's unpredictability and the opportunities it presents. It
        encourages us to embrace change and make the most of the cycles that
        influence our journey.
      </p>
    </>
  );
};

const Justice = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Justice vs. The Emperor (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Justice card and{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        both symbolize aspects of authority and order, albeit in different ways.
        The Justice card represents the principles of fairness, truth, and
        ethical decision-making. It underscores the importance of balance and
        making choices based on impartial judgment.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        embodies external authority, structure, and leadership. He represents
        the establishment of order, governance, and disciplined leadership.
        While The Justice card focuses on moral and ethical decisions,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        emphasizes the role of authority and governance in the external world.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Justice vs. Two of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="The Suit of Swords List"
        >
          Swords Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Justice card to the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardNamesCard[51]}
        >
          Two of Swords{" "}
        </Link>
        . The Justice card symbolizes fairness and ethical choices. It
        encourages us to weigh options carefully, make balanced decisions, and
        seek truth and justice.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardNamesCard[51]}
        >
          Two of Swords{" "}
        </Link>{" "}
        often represents a period of indecision and conflict. It suggests a need
        to carefully consider opposing viewpoints before making a choice. While
        The Justice card relates to ethical decisions, the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardNamesCard[51]}
        >
          Two of Swords{" "}
        </Link>{" "}
        highlights the challenge of making choices when faced with conflicting
        information or emotions.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Justice vs. Six of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Justice card compares to the{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardNamesCard[69]}
        >
          Six of Pentacles{" "}
        </Link>
        . The Justice card signifies fairness and balance, often associated with
        equitable distribution and ethical decisions. It encourages us to
        consider the consequences of our actions on others.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardNamesCard[69]}
        >
          Six of Pentacles{" "}
        </Link>{" "}
        represents generosity and charity. It signifies the act of sharing
        wealth or resources with those in need. While The Justice card focuses
        on fairness and balance, the{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardNamesCard[69]}
        >
          Six of Pentacles{" "}
        </Link>{" "}
        relates to the act of giving and receiving in a compassionate and
        equitable manner.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how The Justice card embodies the
        principles of fairness, truth, and ethical decision-making. It helps us
        understand the diverse qualities and interpretations associated with
        this card in Tarot readings, from making just choices and seeking truth
        to promoting fairness and balance in our interactions with others.
      </p>
    </>
  );
};
const Hanged = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Hanged Man vs. The Fool (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Hanged Man and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        both represent unique perspectives and approaches to life's journey. The
        Hanged Man signifies a time of suspension and surrender, where one gains
        new insights through a change in perspective. It encourages us to let go
        of control and allow life to unfold.
      </p>
      <p className={styles.paragraph}>
        In contrast,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        embodies spontaneity, innocence, and taking a leap of faith into the
        unknown. While The Hanged Man focuses on surrender and looking at life
        from a different angle,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        embraces life's adventures with a carefree spirit, unburdened by
        preconceptions.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Hanged Man vs. Four of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Hanged Man to the{" "}
        <Link
          to={TarotRoutes[39]}
          className={styles.Link}
          title={TarotCardNamesCard[39]}
        >
          Four of Cups{" "}
        </Link>
        . The Hanged Man represents a period of reflection and surrender,
        encouraging us to let go of attachments and see the world from a
        different perspective. It suggests that sometimes we need to pause and
        reevaluate our choices.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[39]}
          className={styles.Link}
          title={TarotCardNamesCard[39]}
        >
          Four of Cups{" "}
        </Link>{" "}
        signifies a moment of introspection and contemplation, often related to
        a sense of emotional disconnection or dissatisfaction with the status
        quo. While The Hanged Man focuses on surrendering to change, the{" "}
        <Link
          to={TarotRoutes[39]}
          className={styles.Link}
          title={TarotCardNamesCard[39]}
        >
          Four of Cups{" "}
        </Link>{" "}
        highlights the importance of reflecting on our emotions and desires.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Hanged Man vs. Page of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Hanged Man compares to the{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          Page of Pentacles{" "}
        </Link>
        . The Hanged Man symbolizes a shift in perspective and the willingness
        to see things from a different angle. It emphasizes surrender and
        allowing life's mysteries to unfold.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          Page of Pentacles{" "}
        </Link>{" "}
        represents a young and curious approach to practical matters, often
        associated with a desire to learn and improve in the material world.
        While The Hanged Man encourages surrender and introspection, the{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          Page of Pentacles{" "}
        </Link>{" "}
        embodies a curious and diligent attitude toward practical endeavors.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how The Hanged Man card represents the idea
        of surrender, introspection, and a change in perspective. It helps us
        understand the diverse qualities and interpretations associated with
        this card in Tarot readings, from surrendering to life's flow to gaining
        new insights through a different vantage point.
      </p>
    </>
  );
};
const Death = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Death vs. The Tower (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Death card and{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        are both{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        cards associated with transformation and change, but they represent
        these concepts differently. The Death card signifies the natural process
        of transformation, where old structures and patterns must end to make
        way for new beginnings. It emphasizes the need to let go of what no
        longer serves us in order to grow.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        represents sudden and often disruptive change. It symbolizes a drastic
        upheaval or revelation that shakes the foundations of our lives. While
        The Death card focuses on the gradual and necessary process of change,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        highlights unexpected and sometimes chaotic transformations.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Death vs. Five of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Death card to the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>
        . The Death card signifies transformation and rebirth, often related to
        letting go of material attachments or old ways of thinking. It
        encourages us to embrace change as an opportunity for growth.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>{" "}
        represents a period of financial or material hardship. It often
        symbolizes feelings of lack or insecurity. While The Death card
        emphasizes transformation and renewal, the Five of Pentacles relates to
        the challenges that can arise from financial or material struggles.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Death vs. The Wheel of Fortune (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Death card compares to{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>
        . The Death card signifies transformation and the cyclical nature of
        life and death. It emphasizes the inevitability of change and the need
        to release the old to make way for the new.
      </p>
      <p className={styles.paragraph}>
        In contrast,{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        represents the ever-turning cycles of life, where fate and destiny play
        a significant role. It teaches us that life is full of ups and downs,
        and we must adapt to change as it comes. While The Death card focuses on
        the transformative process,{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        highlights the cyclical nature of existence and the role of fate in our
        lives.
      </p>
      <p className={styles.paragraph}>
        These comparisons help us understand how The Death card relates to the
        concepts of transformation, change, and renewal, both in the context of
        gradual, necessary transformations and sudden, disruptive upheavals. It
        encourages us to embrace change as an integral part of life's journey.
      </p>
    </>
  );
};
const Temperance = () => {
  <>
    <h2 className={styles.title}>
      The Temperance vs. The Chariot (
      <Link
        to={TarotDecks[0]}
        className={styles.Link}
        title="The Major Arcana Card List"
      >
        Major Arcana
      </Link>
      ):
    </h2>
    <p className={styles.paragraph}>
      The Temperance card and The Chariot both belong to the{" "}
      <Link
        to={TarotDecks[0]}
        className={styles.Link}
        title="The Major Arcana Card List"
      >
        Major Arcana
      </Link>
      , but they embody contrasting energies. The Temperance card represents
      balance, harmony, and patience. It signifies the need to find equilibrium
      in one's life and blend different aspects into a harmonious whole.
    </p>
    <p className={styles.paragraph}>
      Conversely, The Chariot card represents determination, willpower, and the
      drive to overcome obstacles. It signifies a focused and assertive approach
      to achieving goals. While The Temperance emphasizes balance and patience,
      The Chariot highlights the need for determination and control to overcome
      challenges.
    </p>
    <Separator />
    <h2 className={styles.title}>
      The Temperance vs. The Six of Cups (
      <Link
        to={TarotDecks[1]}
        className={styles.Link}
        title="The Minor Arcana Suits List"
      >
        Minor Arcana
      </Link>{" "}
      -{" "}
      <Link
        to={RoutesSuitMinorArcana[1]}
        className={styles.Link}
        title="The Suit of Cups List"
      >
        Cups Suit
      </Link>
      ):
    </h2>
    <p className={styles.paragraph}>
      Transitioning to the{" "}
      <Link
        to={TarotDecks[1]}
        className={styles.Link}
        title="The Minor Arcana Suits List"
      >
        Minor Arcana
      </Link>
      , let's compare The Temperance to The Six of Cups. The Temperance card
      represents balance, harmony, and patience.
    </p>
    <p className={styles.paragraph}>
      Conversely, The Six of Cups represents nostalgia, memories, and emotional
      connections from the past. It signifies a fond remembrance of simpler
      times and innocent pleasures. While The Temperance emphasizes balance and
      harmony, The Six of Cups deals with the emotional richness of memories and
      the past.
    </p>
    <Separator />
    <h2 className={styles.title}>
      The Temperance vs. The Ace of Swords (
      <Link
        to={TarotDecks[1]}
        className={styles.Link}
        title="The Minor Arcana Suits List"
      >
        Minor Arcana
      </Link>{" "}
      - Swords Suit):
    </h2>
    <p className={styles.paragraph}>
      Now, let's explore how The Temperance compares to The{" "}
      <Link
        to={TarotRoutes[50]}
        className={styles.Link}
        title={TarotCardNamesCard[50]}
      >
        Ace of Swords
      </Link>{" "}
      card from the{" "}
      <Link
        to={TarotDecks[1]}
        className={styles.Link}
        title="The Minor Arcana Suits List"
      >
        Minor Arcana
      </Link>
      . The Temperance card represents balance, harmony, and patience.
    </p>
    <p className={styles.paragraph}>
      Conversely, The{" "}
      <Link
        to={TarotRoutes[50]}
        className={styles.Link}
        title={TarotCardNamesCard[50]}
      >
        Ace of Swords
      </Link>{" "}
      embodies clarity, breakthroughs, and new intellectual insights. It
      signifies a moment of mental clarity and the potential for fresh
      perspectives. The{" "}
      <Link
        to={TarotRoutes[50]}
        className={styles.Link}
        title={TarotCardNamesCard[50]}
      >
        Ace of Swords
      </Link>
      ' energy contrasts with the balanced and patient nature of The Temperance.
    </p>
  </>;
};
const Devil = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Devil vs. The Tower (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        are both{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        cards that convey intense and challenging energies, but they do so in
        distinct ways.{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        represents bondage, temptation, and the entrapment of material desires.
        It signifies a struggle with earthly attachments and the need for
        self-control to avoid falling into unhealthy patterns.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card embodies sudden, disruptive change and upheaval. It signifies a
        moment of revelation or crisis that shakes the foundations of one's
        life. While{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        emphasizes the challenges of temptation and bondage,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        represents a breaking free from existing structures, even if it comes
        with discomfort.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Devil vs. The Five of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        to{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        represents bondage, temptation, and the entrapment of material desires.
      </p>
      <p className={styles.paragraph}>
        Conversely, The{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        represents a sense of loss, disappointment, and grieving over spilled
        cups. It signifies a period of mourning and reflection on what has been
        lost. While{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        emphasizes the struggle with earthly attachments, The{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        deals with emotional processing and recovery from setbacks.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Devil vs. The Hierophant (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Now, let's explore how{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        compares to{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        card from the Major Arcana.{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        represents bondage, temptation, and the entrapment of material desires.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        embodies spiritual guidance, tradition, and the wisdom of established
        institutions. It signifies a connection to religious or societal
        traditions and often represents a spiritual leader or mentor. While The
        Devil focuses on earthly attachments and temptation,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        highlights the importance of spiritual and cultural traditions.
      </p>
      <p className={styles.paragraph}>
        These comparisons help us understand how{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card relates to themes of temptation and bondage. It encourages us to
        recognize and address unhealthy patterns while acknowledging the diverse
        energies associated with sudden upheaval, emotional healing, and
        spiritual guidance in Tarot readings.
      </p>
    </>
  );
};

const Tower = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Tower vs. The Devil (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        both represent powerful and often disruptive forces, but they manifest
        in distinct ways.{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card symbolizes sudden and unexpected upheaval or revelation that shakes
        the foundations of our lives. It signifies the need to let go of
        structures that no longer serve us, even if it's a painful process.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        embodies bondage, attachment, and the temptation to remain enslaved by
        material desires. It represents the chains that keep us bound to
        unhealthy patterns or addictions. While The Tower focuses on the
        dramatic and often chaotic nature of change, The Devil highlights the
        self-imposed limitations that can hinder personal growth.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Tower vs. Five of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="The Suit of Swords List"
        >
          Swords Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          Five of Swords{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card signifies sudden disruption or conflict that brings about change.
        It often represents a crisis that challenges our perspectives and forces
        us to reevaluate our beliefs and actions.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          Five of Swords{" "}
        </Link>{" "}
        represents a conflict that may result in feelings of loss or defeat. It
        suggests the importance of choosing our battles wisely and being aware
        of the potential consequences of our actions. While{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        emphasizes dramatic change and upheaval, the{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          Five of Swords{" "}
        </Link>{" "}
        relates to the conflicts and choices we encounter in our lives.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Tower vs. Ten of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card compares to the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        signifies sudden and often unexpected change, emphasizing the need to
        let go of old structures and beliefs. It symbolizes the potential for
        transformation and the breaking down of what no longer serves us.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles
        </Link>{" "}
        represents material wealth, stability, and the culmination of financial
        success. It often signifies the rewards of long-term effort and
        generational prosperity. While{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        focuses on dramatic change, the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles
        </Link>{" "}
        relates to the tangible and lasting aspects of financial and familial
        abundance.
      </p>
      <p className={styles.paragraph}>
        These comparisons help us understand how{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card relates to the concepts of sudden change, upheaval, and
        transformation, both in the context of the dramatic and chaotic nature
        of such events and the potential for growth and renewal that they bring.
        It encourages us to embrace change as an opportunity for personal
        evolution.
      </p>
    </>
  );
};

const Star = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Star vs. The Moon (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Star and{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        both belong to the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        and are associated with nighttime celestial symbolism, but they convey
        different messages. The Star card represents hope, inspiration, and a
        guiding light during challenging times. It signifies a sense of clarity
        and optimism, encouraging us to have faith in the future.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card represents the mysteries of the subconscious, illusions, and the
        unknown. It symbolizes the deeper, hidden aspects of our psyche and the
        need to navigate through uncertainties. While The Star emphasizes hope
        and guidance,{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>
        explores the enigmatic realms of our emotions and intuition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Star vs. Nine of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Star to the{" "}
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardNamesCard[44]}
        >
          Nine of Cups{" "}
        </Link>
        . The Star card signifies hope, fulfillment, and a sense of emotional
        well-being. It often represents a period of contentment and the
        realization of dreams and wishes.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardNamesCard[44]}
        >
          Nine of Cups{" "}
        </Link>
        , often known as the "Wish Card," signifies emotional satisfaction and
        the fulfillment of desires. It symbolizes a time of joy and abundance,
        where our heartfelt wishes come true. While The Star emphasizes hope and
        guidance, the{" "}
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardNamesCard[44]}
        >
          Nine of Cups{" "}
        </Link>{" "}
        celebrates the actualization of our emotional desires.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Star vs. Ace of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Star card compares to the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        . The Star signifies hope and inspiration, often related to spiritual or
        creative aspirations. It encourages us to follow our dreams and trust in
        the guidance of the universe.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        represents a new material or financial opportunity. It often signifies
        the potential for prosperity and stability in the material realm. While
        The Star focuses on inspiration and guidance, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        relates to tangible, earthly gains and the initiation of a new chapter
        in the material world.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how The Star card embodies the themes of
        hope, inspiration, and guidance. It helps us understand the diverse
        qualities and interpretations associated with this card in Tarot
        readings, from finding hope in challenging times to the fulfillment of
        emotional or material desires.
      </p>
    </>
  );
};

const Moon = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Moon vs. The Sun (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>
        , both from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        , represent contrasting aspects of light and darkness.{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card embodies the mysteries of the subconscious mind, illusion, and the
        unseen. It signifies a time of uncertainty and the need to navigate
        through the shadows of the psyche.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        card represents clarity, enlightenment, and the triumph of light over
        darkness. It symbolizes a period of joy, clarity, and understanding,
        where everything becomes clear. While{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>
        focuses on the hidden and uncertain aspects of our inner world,{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>
        highlights the radiance and illumination of truth.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Moon vs. Eight of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[43]}
          className={styles.Link}
          title={TarotCardNamesCard[43]}
        >
          Eight of Cups{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card signifies the mysteries of the subconscious mind and emotional
        uncertainty. It often represents a time when one must explore their
        deeper emotions and confront illusions or fears.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[43]}
          className={styles.Link}
          title={TarotCardNamesCard[43]}
        >
          Eight of Cups{" "}
        </Link>{" "}
        represents the act of walking away from emotional situations that no
        longer serve one's highest good. It signifies a journey of emotional
        growth and the courage to leave behind what no longer aligns with one's
        true desires. While{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        delves into emotional mysteries and illusions, the{" "}
        <Link
          to={TarotRoutes[43]}
          className={styles.Link}
          title={TarotCardNamesCard[43]}
        >
          Eight of Cups{" "}
        </Link>{" "}
        relates to the act of letting go and seeking emotional fulfillment.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Moon vs. Seven of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="The Suit of Swords List"
        >
          Swords Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card compares to the{" "}
        <Link
          to={TarotRoutes[56]}
          className={styles.Link}
          title={TarotCardNamesCard[56]}
        >
          Seven of Swords{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        embodies the concept of illusion and hidden motives, often related to
        deception or unclear intentions. It suggests the need to be cautious and
        discerning when facing situations that are not what they seem.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[56]}
          className={styles.Link}
          title={TarotCardNamesCard[56]}
        >
          Seven of Swords{" "}
        </Link>{" "}
        is a card associated with strategies, cunning, and sometimes, deceit. It
        signifies the use of intellect and cleverness to navigate challenges or
        to achieve one's goals. While The Moon focuses on the mysteries of the
        subconscious and potential deception, the{" "}
        <Link
          to={TarotRoutes[56]}
          className={styles.Link}
          title={TarotCardNamesCard[56]}
        >
          Seven of Swords{" "}
        </Link>{" "}
        relates to the use of strategy and intellect in decision-making.
      </p>
      <p className={styles.paragraph}>
        These comparisons highlight how{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card represents the themes of illusion, subconscious exploration, and
        the need to confront uncertainties. It helps us understand the diverse
        qualities and interpretations associated with this card in Tarot
        readings, from delving into the hidden aspects of our psyche to being
        cautious of potential deception in our surroundings.
      </p>
    </>
  );
};

const Sun = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Sun vs. The Moon (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        and{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>
        , both from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        , represent opposing aspects of light and darkness.{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        card embodies the clarity, joy, and enlightenment that comes with the
        triumph of light over darkness. It signifies a period of optimism,
        illumination, and understanding, where everything becomes clear.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card symbolizes the mysteries of the subconscious mind, illusion, and
        the hidden realms of our psyche. It signifies a time of uncertainty and
        the need to navigate through the shadows of the inner world. While The
        Sun focuses on radiance and clarity,{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        explores the enigmatic and uncertain aspects of our emotions and
        intuition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Sun vs. Ten of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        to the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardNamesCard[45]}
        >
          Ten of Cups{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        card represents joy, happiness, and emotional fulfillment. It often
        signifies a period of harmony, love, and bliss in relationships and
        family life.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardNamesCard[45]}
        >
          Ten of Cups{" "}
        </Link>{" "}
        is a card of emotional contentment and the realization of emotional
        desires. It symbolizes the idyllic state of emotional harmony and the
        joy of being surrounded by loved ones. While{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        card emphasizes the radiance of joy and fulfillment, the Ten of Cups
        represents the actualization of these feelings in the emotional realm.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Sun vs. Ace of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        card compares to the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>
        .{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        embodies clarity and enlightenment, often related to spiritual or
        intellectual illumination. It encourages us to embrace optimism and
        trust in the guidance of the universe.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        represents a new material or financial opportunity. It signifies the
        potential for prosperity, stability, and tangible rewards in the
        material world. While{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        focuses on spiritual and intellectual illumination, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        relates to the practical, earthly gains and the initiation of a new
        chapter in the material realm.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        card represents themes of clarity, joy, and enlightenment. It helps us
        understand the diverse qualities and interpretations associated with
        this card in Tarot readings, from experiencing the radiance of happiness
        to the illumination of the spiritual and material aspects of life.
      </p>
    </>
  );
};

const Judgement = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Judgment vs. The Chariot (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The Judgment card and{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        both represent journeys and personal transformation, albeit in different
        ways. The Judgment card signifies a period of self-reflection and
        spiritual awakening. It emphasizes the need to review one's past actions
        and make amends before moving forward.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        embodies willpower, determination, and the drive to overcome obstacles.
        It represents the focused pursuit of goals and the ability to conquer
        challenges through sheer determination and control. While The Judgment
        card focuses on inner transformation and spiritual awakening,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        represents the external conquest of life's challenges.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Judgment vs. Five of Wands (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[0]}
          className={styles.Link}
          title="The Suit of Wands List"
        >
          Wands Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The Judgment card to the{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          Five of Wands{" "}
        </Link>
        . The Judgment card signifies a personal awakening and the need to make
        important life decisions. It often represents a period of
        self-evaluation and embracing one's true calling.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          Five of Wands{" "}
        </Link>{" "}
        represents competition, conflict, and the need to assert oneself in a
        competitive environment. It signifies challenges and conflicts that
        arise from differences in opinions or goals. While The Judgment card
        emphasizes inner transformation and decision-making, the{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          Five of Wands{" "}
        </Link>{" "}
        relates to external conflicts and competition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Judgment vs. Ace of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="The Suit of Swords List"
        >
          Swords Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The Judgment card compares to the{" "}
        <Link
          to={TarotRoutes[50]}
          className={styles.Link}
          title={TarotCardNamesCard[50]}
        >
          Ace of Swords
        </Link>{" "}
        . The Judgment card signifies a period of self-reflection and awakening,
        often related to a spiritual or moral calling. It encourages us to make
        decisions based on higher principles and values.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[50]}
          className={styles.Link}
          title={TarotCardNamesCard[50]}
        >
          Ace of Swords
        </Link>{" "}
        represents clarity of thought and the potential for a new intellectual
        or communicative beginning. It signifies the power of clear, decisive
        thinking and the ability to cut through confusion. While The Judgment
        card focuses on inner transformation and decision-making, the{" "}
        <Link
          to={TarotRoutes[50]}
          className={styles.Link}
          title={TarotCardNamesCard[50]}
        >
          Ace of Swords
        </Link>{" "}
        relates to the intellectual and communicative aspects of decision
        clarity.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how The Judgment card represents themes of
        awakening, transformation, and decision-making. It helps us understand
        the diverse qualities and interpretations associated with this card in
        Tarot readings, from personal awakening and moral choices to the
        intellectual clarity needed for effective decision-making.
      </p>
    </>
  );
};

const World = () => {
  return (
    <>
      <h2 className={styles.title}>
        The World vs. The Fool (
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        The World card and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>
        , both from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        , represent different stages of completion and new beginnings. The World
        signifies a sense of accomplishment and the culmination of a journey. It
        represents the attainment of one's goals, a feeling of wholeness, and
        the end of a significant chapter.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        embodies new beginnings, innocence, and the willingness to embark on a
        journey without knowing where it may lead. It signifies a fresh start,
        free from preconceptions or past experiences. While The World card
        symbolizes completion and fulfillment,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>
        encourages us to embrace the unknown with a sense of adventure.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The World vs. Ten of Cups (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="The Suit of Cups List"
        >
          Cups Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Transitioning to the{" "}
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>
        , let's compare The World to the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardNamesCard[45]}
        >
          Ten of Cups{" "}
        </Link>
        . The World card represents a sense of fulfillment and completion, often
        associated with achieving emotional harmony and a harmonious family
        life. It signifies a period of contentment and happiness.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardNamesCard[45]}
        >
          Ten of Cups{" "}
        </Link>{" "}
        represents emotional fulfillment and the realization of deep emotional
        desires, often related to family and relationships. It symbolizes the
        joy of being surrounded by loved ones and finding emotional harmony.
        While The World focuses on a sense of accomplishment, the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardNamesCard[45]}
        >
          Ten of Cups{" "}
        </Link>{" "}
        celebrates emotional fulfillment and happiness.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The World vs. Ace of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -{" "}
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="The Suit of Pentacles List"
        >
          Pentacles Suit
        </Link>
        ):
      </h2>
      <p className={styles.paragraph}>
        Lastly, let's explore how The World card compares to the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>
        . The World signifies a sense of completion and fulfillment in the
        material and spiritual realms. It often represents the attainment of
        material and spiritual goals, symbolizing prosperity and spiritual
        wholeness.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        represents a new material or financial opportunity. It signifies the
        potential for prosperity and stability in the material world. While The
        World card emphasizes the fulfillment of existing goals, the{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardNamesCard[64]}
        >
          Ace of Pentacles{" "}
        </Link>{" "}
        relates to the initiation of a new chapter in the material realm.
      </p>
      <p className={styles.paragraph}>
        These comparisons illustrate how The World card represents themes of
        completion, fulfillment, and wholeness. It helps us understand the
        diverse qualities and interpretations associated with this card in Tarot
        readings, from achieving personal and spiritual goals to finding
        emotional harmony and prosperity.
      </p>
    </>
  );
};

const TarotCardsMajorArcanaComparisionData = [
  Fool,
  Magician,
  Priestess,
  Empress,
  Emperor,
  Hierophant,
  Lovers,
  Chariot,
  Strength,
  Hermit,
  Fortune,
  Justice,
  Hanged,
  Death,
  Temperance,
  Devil,
  Tower,
  Star,
  Moon,
  Sun,
  Judgement,
  World,
];

export const TarotCardsComparisionsData =
  TarotCardsMajorArcanaComparisionData.concat(
    TarotCardsSuitOfWandsComparisionsData,
    TarotCardsSuitOfCupsComparisionsData,
    TarotCardsSuitOfSwordsComparisionsData,
    TarotCardsSuitOfPentaclesComparisionsData
  );

export default TarotCardsComparisionsData;
