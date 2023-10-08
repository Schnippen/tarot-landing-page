import React from "react";
import Separator from "../components/Separator";
import styles from "../App.module.css";
import { Link } from "react-router-dom";
import {
  RoutesSuitMinorArcana,
  TarotDecks,
  TarotRoutes,
} from "./TarotRoutesData";
import { TarotCardNamesCard } from "./TarotCardsData";

const AceOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ace of Swords vs. The Chariot (
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
        The Ace of Swords and{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        both touch upon themes of determination and victory, but they approach
        them differently. The Ace of Swords represents a powerful surge of
        mental clarity and insight. It signifies a breakthrough moment where one
        gains a new perspective and triumphs over challenges through clear
        thinking and intellectual strength.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        embodies willpower, determination, and the drive to overcome obstacles.
        It represents a focused pursuit of goals and the ability to conquer
        challenges through inner strength and control. While The Ace of Swords
        focuses on a breakthrough in mental clarity, The Chariot card highlights
        the importance of determination and assertive action in achieving one's
        objectives.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Swords vs. The Five of Pentacles (
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
        , let's compare The Ace of Swords to the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>
        . The Ace of Swords represents a powerful surge of mental clarity and
        insight, signifying a breakthrough moment of intellectual strength.
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
        represents hardship and financial struggle. It signifies a period where
        one may feel left out in the cold, both financially and emotionally.
        While The Ace of Swords emphasizes mental clarity and insight, the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>{" "}
        delves into the challenges associated with financial difficulties and
        the need for resilience.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Swords vs. The Magician (
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
        Now, let's explore how The Ace of Swords compares to{" "}
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
        . The Ace of Swords represents a powerful surge of mental clarity and
        insight, emphasizing a breakthrough moment in intellectual strength.
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
        embodies manifestation, creativity, and the power to transform one's
        reality. He represents the ability to harness the elements of the
        universe and turn dreams into reality. While The Ace of Swords focuses
        on intellectual breakthroughs,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        card highlights the transformative power of creativity and
        manifestation.
      </p>
    </>
  );
};

const TwoOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Two of Swords vs. The High Priestess (
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
        The Two of Swords and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        both delve into themes of intuition and decision-making, but they do so
        with distinct energies. The Two of Swords represents a situation where a
        difficult decision must be made, often involving a mental standstill or
        a choice that requires careful consideration.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        card embodies mystery, intuition, and the exploration of the
        subconscious mind. She represents a journey into the depths of one's
        emotions and psyche, often associated with intuition and spiritual
        insight. While The Two of Swords focuses on the need for a difficult
        decision,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        delves into the mystical and intuitive aspects of our inner world.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Swords vs. The Five of Wands (
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
        , let's compare The Two of Swords to{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          The Five of Wands{" "}
        </Link>
        . The Two of Swords represents a situation where a difficult decision
        must be made, signifying a mental standstill or a choice that requires
        careful consideration.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          The Five of Wands{" "}
        </Link>{" "}
        represents conflict and competition. It signifies a situation where
        different parties may be in opposition or competing for a goal. While
        The Two of Swords highlights the need for a decision,{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardNamesCard[26]}
        >
          The Five of Wands{" "}
        </Link>{" "}
        delves into the challenges of conflict and competition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Swords vs. The Justice (
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
        Now, let's explore how The Two of Swords compares to The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Two of Swords represents a situation where a difficult decision
        must be made, often involving a mental standstill or a choice that
        requires careful consideration.
      </p>
      <p className={styles.paragraph}>
        Conversely, The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card embodies fairness, balance, and the importance of ethical
        decisions. It represents a sense of equilibrium and the need to make
        choices that are just and morally right. While The Two of Swords
        emphasizes the challenge of decision-making, The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>
        card highlights the significance of making choices with integrity and
        fairness.
      </p>
    </>
  );
};

const ThreeOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Three of Swords vs. The Tower (
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
        The Three of Swords and{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        both touch upon themes of sudden upheaval and emotional distress, but
        they do so with different energies. The Three of Swords represents
        heartbreak and emotional pain, often stemming from a difficult truth or
        the end of a relationship. It signifies a period of grief and sorrow.
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
        card embodies abrupt and often chaotic change. It represents a sudden
        disruption or revelation that shakes the foundations of one's life,
        often leading to transformation. While The Three of Swords focuses on
        emotional pain,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card highlights the tumultuous and unexpected nature of change.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Swords vs. The Five of Cups (
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
        , let's compare The Three of Swords to{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        . The Three of Swords represents heartbreak and emotional pain,
        signifying a period of grief and sorrow.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        represents a moment of sadness and disappointment, often stemming from a
        loss or unfulfilled expectations. It signifies the need to process and
        accept these emotions. While The Three of Swords delves into the pain of
        heartbreak,{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        emphasizes the emotions associated with disappointment and loss.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Swords vs. The Justice (
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
        Now, let's explore how The Three of Swords compares to The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Three of Swords represents heartbreak and emotional pain, often
        stemming from a difficult truth or the end of a relationship, signifying
        a period of grief and sorrow.
      </p>
      <p className={styles.paragraph}>
        Conversely, The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card embodies fairness, balance, and the importance of ethical
        decisions. It represents a sense of equilibrium and the need to make
        choices that are just and morally right. While The Three of Swords
        focuses on emotional pain, The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card highlights the significance of making choices with integrity and
        fairness.
      </p>
    </>
  );
};

const FourOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Four of Swords vs. The Hermit (
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
        The Four of Swords and{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        both explore themes of introspection and inner retreat, albeit with
        different approaches. The Four of Swords represents a period of rest and
        recovery, signifying the need to take a break and heal from mental or
        physical exhaustion.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        card embodies solitude and introspection as a deliberate choice for
        spiritual wisdom and inner guidance. It signifies a voluntary withdrawal
        from the world to seek deeper understanding and illumination. While The
        Four of Swords focuses on the necessity of rest,
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        highlights the intentional pursuit of inner wisdom through solitude.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Four of Swords vs. The Five of Pentacles (
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
        , let's compare The Four of Swords to the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>
        . The Four of Swords represents a period of rest and recovery,
        signifying the need to take a break and heal from exhaustion.
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
        represents hardship and financial struggle. It signifies a period where
        one may feel left out in the cold, both financially and emotionally.
        While The Four of Swords emphasizes the importance of rest, the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>{" "}
        delves into the challenges associated with financial difficulties and
        the need for resilience.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Four of Swords vs. The Empress (
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
        Now, let's explore how The Four of Swords compares to{" "}
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
        </Link>
        . The Four of Swords represents a period of rest and recovery,
        emphasizing the need to take a break and heal from exhaustion.
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
        embodies fertility, nurturing, and the abundance of life. She represents
        the creative force of life and often symbolizes motherhood and nurturing
        relationships. While The Four of Swords focuses on rest,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        card highlights the nurturing and fertile qualities associated with love
        and abundance.
      </p>
    </>
  );
};

const FiveOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Five of Swords vs. The Devil (
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
        The Five of Swords and{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        both touch upon themes of power and temptation, but they do so with
        different energies. The Five of Swords represents a situation of
        conflict and potential betrayal, where one may have gained a victory at
        the expense of others' feelings. It signifies the need for reflection on
        one's actions.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card embodies temptation, bondage, and the allure of material desires.
        It represents the challenges associated with addiction and negative
        patterns that bind us. While The Five of Swords focuses on conflicts,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card highlights the dangers of succumbing to temptations that may lead
        to bondage.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Swords vs. The Three of Cups (
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
        , let's compare The Five of Swords to The{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          The Three of Cups{" "}
        </Link>
        . The Five of Swords represents a situation of conflict and potential
        betrayal, signifying the need for reflection on one's actions.
      </p>
      <p className={styles.paragraph}>
        Conversely, The{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          The Three of Cups{" "}
        </Link>{" "}
        represents celebration and joyful gatherings, often with friends and
        loved ones. It signifies a time of harmony and shared happiness. While
        The Five of Swords delves into conflict, The{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          The Three of Cups{" "}
        </Link>{" "}
        emphasizes the positive aspects of social connections and celebration.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Swords vs. The Hierophant (
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
        Now, let's explore how The Five of Swords compares to{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Five of Swords represents a situation of conflict and potential
        betrayal, highlighting the need for reflection on one's actions.
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
        embodies tradition, spiritual guidance, and the wisdom of established
        institutions. He represents the role of mentor or spiritual leader and
        often symbolizes ceremonies and rituals. While The Five of Swords
        focuses on conflict,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        card highlights the guidance and wisdom that can be sought from
        established sources and traditions.
      </p>
    </>
  );
};

const SixOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Six of Swords vs. The Wheel of Fortune (
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
        The Six of Swords and{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        both explore themes of transition and change, albeit with different
        approaches. The Six of Swords represents a journey or transition from a
        difficult situation to a calmer one. It signifies the need to leave
        behind troubles and move towards smoother waters, often with the help of
        a guide or mentor.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        card embodies the cyclical nature of life and destiny. It represents the
        ups and downs of fate, where situations can change rapidly due to
        external forces. While The Six of Swords focuses on a deliberate
        journey,{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        highlights the unpredictable and ever-changing aspects of life's cycles.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Swords vs. The Page of Pentacles (
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
        , let's compare The Six of Swords to{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>
        . The Six of Swords represents a journey or transition from a difficult
        situation to a calmer one, signifying the need to leave behind troubles
        and move towards smoother waters.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>{" "}
        represents a youthful and eager approach to learning and practical
        matters. It signifies a willingness to study, work hard, and seek
        knowledge or skills. While The Six of Swords delves into transition,{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>{" "}
        emphasizes the pursuit of practical knowledge and growth.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Swords vs. The Lovers (
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
        Now, let's explore how The Six of Swords compares to{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Six of Swords represents a journey or transition from a difficult
        situation to a calmer one, highlighting the need to leave behind
        troubles and move towards smoother waters.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>{" "}
        embody themes of love, partnership, and choices. It signifies a
        significant decision or a union between two individuals. While The Six
        of Swords focuses on transition,{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>{" "}
        card highlights the complexities and choices involved in matters of the
        heart and relationships.
      </p>
    </>
  );
};

const SevenOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Seven of Swords vs. The Fool (
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
        The Seven of Swords and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        both touch upon themes of spontaneity and taking risks, but they
        approach them differently. The Seven of Swords represents a situation
        where someone may be attempting to deceive or manipulate others. It
        signifies the need for caution and awareness to avoid falling victim to
        dishonesty.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        card embodies the spirit of adventure and taking a leap of faith. It
        signifies a willingness to embrace the unknown and trust in the journey,
        often associated with new beginnings and spontaneity. While The Seven of
        Swords focuses on potential deception,
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        card highlights the courage to step into the unknown.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Swords vs. The Five of Pentacles (
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
        , let's compare The Seven of Swords to the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>
        . The Seven of Swords represents a situation where someone may be
        attempting to deceive or manipulate others, signifying the need for
        caution and awareness.
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
        represents hardship and financial struggle. It signifies a period where
        one may feel left out in the cold, both financially and emotionally.
        While The Seven of Swords delves into potential deception, the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>{" "}
        emphasizes the emotions associated with disappointment and financial
        difficulties.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Swords vs. The Strength (
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
        Now, let's explore how The Seven of Swords compares to{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Seven of Swords represents a situation where someone may be
        attempting to deceive or manipulate others, highlighting the need for
        caution and awareness.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>{" "}
        card embodies inner strength, courage, and the ability to conquer
        challenges through compassion and patience. It signifies the power of
        facing challenges with grace and inner fortitude. While The Seven of
        Swords focuses on potential deception,{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>
        card highlights the strength found within, both emotionally and
        spiritually.
      </p>
    </>
  );
};

const EightOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Eight of Swords vs. The Hanged Man (
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
        The Eight of Swords and{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        both explore themes of restriction and self-surrender, but they do so
        with different energies. The Eight of Swords represents a situation
        where one feels trapped and bound by self-imposed limitations or
        external circumstances. It signifies a need for introspection to
        identify the source of these limitations.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        card embodies surrender, letting go, and gaining new perspectives
        through a different lens. It represents a willingness to release old
        patterns and beliefs in favor of a more enlightened view. While The
        Eight of Swords focuses on feeling trapped,
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        highlights the transformative power of surrender and fresh perspectives.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Swords vs. The Five of Cups (
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
        , let's compare The Eight of Swords to{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        . The Eight of Swords represents a feeling of being trapped and bound by
        limitations, signifying a need for introspection.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        represents a moment of sadness and disappointment, often stemming from a
        loss or unfulfilled expectations. It signifies the need to process and
        accept these emotions. While The Eight of Swords delves into the feeling
        of being trapped, the Five of Cups emphasizes the emotions associated
        with disappointment and loss.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Swords vs. The Chariot (
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
        Now, let's explore how The Eight of Swords compares to{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Eight of Swords represents a feeling of being trapped and bound by
        limitations, highlighting the need for introspection.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        embodies willpower, determination, and the drive to overcome obstacles.
        It represents a focused pursuit of goals and the ability to conquer
        challenges through inner strength and control. While The Eight of Swords
        focuses on feeling trapped,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        card emphasizes the importance of determination and assertive action in
        overcoming obstacles.
      </p>
    </>
  );
};

const NineOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Nine of Swords vs. The Hermit (
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
        The Nine of Swords and{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        both delve into themes of introspection and inner turmoil, but they do
        so with distinct approaches. The Nine of Swords represents a period of
        anxiety, worry, and mental distress, often due to overthinking or
        excessive stress. It signifies the need to address and release these
        troubling thoughts.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        card embodies solitude and introspection as a deliberate choice for
        spiritual wisdom and inner guidance. It signifies a voluntary withdrawal
        from the world to seek deeper understanding and illumination. While The
        Nine of Swords focuses on moments of anxiety,
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        highlights the intentional pursuit of inner wisdom through solitude.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Swords vs. The Three of Swords (
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
        , let's compare The Nine of Swords to{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          The Three of Swords{" "}
        </Link>
        . The Nine of Swords represents a period of anxiety, worry, and mental
        distress, signifying the need to address and release these troubling
        thoughts.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          The Three of Swords{" "}
        </Link>{" "}
        represents heartbreak and emotional pain, often stemming from a
        difficult truth or the end of a relationship. It signifies a period of
        grief and sorrow. While The Nine of Swords deals with mental distress,{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          The Three of Swords{" "}
        </Link>{" "}
        emphasizes the emotional pain associated with heartbreak and loss.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Swords vs. The Star (
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
        Now, let's explore how The Nine of Swords compares to{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardNamesCard[17]}
        >
          The Star{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Nine of Swords represents a period of anxiety, worry, and mental
        distress, highlighting the need to address and release these troubling
        thoughts.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardNamesCard[17]}
        >
          The Star{" "}
        </Link>{" "}
        embodies hope, inspiration, and healing. It signifies a sense of renewal
        and the belief in better times ahead. While The Nine of Swords focuses
        on moments of anxiety,{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardNamesCard[17]}
        >
          The Star{" "}
        </Link>{" "}
        card emphasizes the importance of maintaining hope and faith even in
        difficult times.
      </p>
    </>
  );
};

const TenOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ten of Swords vs. The Death (
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
        The Ten of Swords and{" "}
        <Link
          to={TarotRoutes[13]}
          className={styles.Link}
          title={TarotCardNamesCard[13]}
        >
          The Death{" "}
        </Link>{" "}
        card both touch upon themes of transformation and endings, but they
        approach them differently. The Ten of Swords represents a situation
        where one has reached the lowest point, often signifying a feeling of
        being overwhelmed or defeated by circumstances. It signifies the need
        for closure and a fresh start after enduring difficulties.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[13]}
          className={styles.Link}
          title={TarotCardNamesCard[13]}
        >
          The Death{" "}
        </Link>{" "}
        card embodies the concept of profound transformation and rebirth. It
        signifies the end of one phase and the beginning of another, often
        involving significant changes or the shedding of old habits. While The
        Ten of Swords focuses on feeling defeated,{" "}
        <Link
          to={TarotRoutes[13]}
          className={styles.Link}
          title={TarotCardNamesCard[13]}
        >
          The Death{" "}
        </Link>{" "}
        card highlights the transformative power of letting go and embracing new
        beginnings.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Swords vs. The Five of Cups (
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
        , let's compare The Ten of Swords to{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        . The Ten of Swords represents a situation where one has reached the
        lowest point, signifying the need for closure and a fresh start after
        enduring difficulties.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        represents a moment of sadness and disappointment, often stemming from a
        loss or unfulfilled expectations. It signifies the need to process and
        accept these emotions. While The Ten of Swords delves into a sense of
        defeat,{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        emphasizes the emotions associated with disappointment and loss.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Swords vs. The Tower (
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
        Now, let's explore how The Ten of Swords compares to{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Ten of Swords represents a situation where one has reached the
        lowest point, often signifying a feeling of being overwhelmed or
        defeated by circumstances, and the need for closure.
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
        embodies abrupt and often chaotic change. It represents a sudden
        disruption or revelation that shakes the foundations of one's life,
        often leading to transformation. While The Ten of Swords focuses on
        feeling defeated,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card highlights the tumultuous and unexpected nature of change.
      </p>
    </>
  );
};

const PageOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Page of Swords vs. The High Priestess (
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
        The Page of Swords and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        both explore themes of curiosity and intuition, but they do so with
        different energies. The Page of Swords represents a youthful and
        inquisitive nature, often eager to learn and gather information. It
        signifies a quest for knowledge and a readiness to take on new
        challenges.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        card embodies deep intuition and inner wisdom. It represents a
        connection to the subconscious mind and the mysteries of the universe.
        While The Page of Swords is focused on external learning,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        emphasizes the importance of listening to one's inner voice and
        intuition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Swords vs. The Three of Wands (
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
        , let's compare The Page of Swords to{" "}
        <Link
          to={TarotRoutes[24]}
          className={styles.Link}
          title={TarotCardNamesCard[24]}
        >
          The Three of Wands{" "}
        </Link>
        . The Page of Swords represents a youthful and inquisitive nature,
        signifying a quest for knowledge and a readiness to take on new
        challenges.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[24]}
          className={styles.Link}
          title={TarotCardNamesCard[24]}
        >
          The Three of Wands{" "}
        </Link>{" "}
        represents ambition and the anticipation of future opportunities. It
        signifies the willingness to expand horizons and seek growth beyond
        current boundaries. While The Page of Swords is focused on learning,{" "}
        <Link
          to={TarotRoutes[24]}
          className={styles.Link}
          title={TarotCardNamesCard[24]}
        >
          The Three of Wands{" "}
        </Link>{" "}
        emphasizes the proactive approach to pursuing new ventures and
        opportunities.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Swords vs. The Fool (
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
        Now, let's explore how The Page of Swords compares to{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Page of Swords represents a youthful and inquisitive nature, often
        eager to learn and gather information.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        embodies the spirit of adventure and taking a leap of faith. It
        signifies a willingness to embrace the unknown and trust in the journey,
        often associated with new beginnings and spontaneity. While The Page of
        Swords is focused on external learning,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        card highlights the courage to step into the unknown.
      </p>
    </>
  );
};

const KnightOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Knight of Swords vs. The Chariot (
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
        The Knight of Swords and{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        both embody themes of determination and forward movement, but they do so
        with distinct energies. The Knight of Swords represents swift action,
        often driven by a strong desire to achieve one's goals. It signifies a
        willingness to charge forward with a clear and focused mindset.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies the idea of harnessing opposing forces and steering them toward
        a common goal. It signifies triumph over challenges and the need to
        maintain control and balance amid external and internal conflicts. While
        the Knight of Swords is focused on swift action,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        highlights the importance of inner and outer harmony in achieving
        victory.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Swords vs. The Seven of Cups (
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
        , let's compare The Knight of Swords to{" "}
        <Link
          to={TarotRoutes[42]}
          className={styles.Link}
          title={TarotCardNamesCard[42]}
        >
          The Seven of Cups{" "}
        </Link>
        . The Knight of Swords represents swift action, often driven by a strong
        desire to achieve one's goals, signifying a willingness to charge
        forward with a clear and focused mindset.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[42]}
          className={styles.Link}
          title={TarotCardNamesCard[42]}
        >
          The Seven of Cups{" "}
        </Link>{" "}
        represents choices and fantasies, often involving a sense of illusion or
        daydreaming. It signifies the need to evaluate options carefully and
        avoid being led astray by unrealistic expectations. While the Knight of
        Swords is focused on action and decisiveness,{" "}
        <Link
          to={TarotRoutes[42]}
          className={styles.Link}
          title={TarotCardNamesCard[42]}
        >
          The Seven of Cups{" "}
        </Link>{" "}
        emphasizes the importance of clarity and discernment in choices.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Swords vs. The Devil (
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
        Now, let's explore how The Knight of Swords compares to{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Knight of Swords represents swift action, often driven by a strong
        desire to achieve one's goals and a willingness to charge forward with a
        clear and focused mindset.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card embodies temptation, bondage, and the allure of material desires.
        It represents the challenges associated with addiction and negative
        patterns that bind us. While the Knight of Swords focuses on decisive
        action,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card highlights the dangers of succumbing to temptations that may hinder
        progress.
      </p>
    </>
  );
};

const QueenOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Queen of Swords vs. The Empress (
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
        The Queen of Swords and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both embody feminine energy, but they express it in distinct ways. The
        Queen of Swords represents a woman who is strong-willed, independent,
        and highly rational. She values clear communication and critical
        thinking, often making decisions based on logic and reason.
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
        embodies nurturing and maternal energy. It signifies fertility,
        creativity, and a deep connection to nature.{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        is all about nurturing growth and abundance. While The Queen of Swords
        is focused on logic and intellect,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        emphasizes the nurturing and fertile aspects of the feminine.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Queen of Swords vs. The Page of Pentacles (
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
        , let's compare The Queen of Swords to{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>
        . The Queen of Swords represents a woman who is strong-willed and values
        clear communication and critical thinking.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>{" "}
        represents a youthful and eager attitude toward learning and practical
        matters. It signifies a readiness to explore new skills or opportunities
        related to the material world. While The Queen of Swords emphasizes
        intellect and rationality, The Page of Pentacles highlights the
        enthusiasm and curiosity of a beginner.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Queen of Swords vs. The Hierophant (
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
        Now, let's explore how The Queen of Swords compares to{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Queen of Swords represents a woman who is strong-willed,
        independent, and values clear communication and critical thinking.
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
        embodies spiritual authority and tradition. It signifies a connection to
        religious or spiritual beliefs and often represents a teacher or guide
        who imparts wisdom and rituals. While The Queen of Swords focuses on
        intellectual independence,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        card highlights the importance of tradition and spiritual guidance.
      </p>
    </>
  );
};

const KingOfSwords = () => {
  return (
    <>
      <h2 className={styles.title}>
        The King of Swords vs. The Justice (
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
        The King of Swords and The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card both embody themes of fairness and impartiality, but they do so
        with distinct energies. The King of Swords represents a person who is
        highly rational, logical, and possesses a sharp intellect. He is known
        for making objective decisions and values fairness in all matters.
      </p>
      <p className={styles.paragraph}>
        Conversely, The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies the concept of balance, fairness, and the consequences of one's
        actions. It signifies the need to weigh decisions carefully and take
        responsibility for one's choices. While The King of Swords focuses on
        intellect and rationality, The{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardNamesCard[11]}
        >
          The Justice{" "}
        </Link>{" "}
        card highlights the broader themes of moral and ethical equilibrium.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Swords vs. The Page of Pentacles (
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
        , let's compare The King of Swords to{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>
        . The King of Swords represents a person who is highly rational,
        logical, and values fairness in decision-making.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>{" "}
        represents a youthful and eager attitude toward learning and practical
        matters. It signifies a readiness to explore new skills or opportunities
        related to the material world. While The King of Swords emphasizes
        intellect and fairness,{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          The Page of Pentacles{" "}
        </Link>{" "}
        highlights the enthusiasm and curiosity of a beginner.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Swords vs. The Emperor (
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
        Now, let's explore how The King of Swords compares to{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The King of Swords represents a person who is highly rational,
        logical, and values fairness in decision-making.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        embodies authority, leadership, and a strong sense of structure. It
        signifies the ability to take charge of situations and establish order.{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        represents a more assertive and commanding energy compared to the
        intellectual focus of The King of Swords.
      </p>
    </>
  );
};
export const TarotCardsSuitOfSwordsComparisionsData = [
  AceOfSwords,
  TwoOfSwords,
  ThreeOfSwords,
  FourOfSwords,
  FiveOfSwords,
  SixOfSwords,
  SevenOfSwords,
  EightOfSwords,
  NineOfSwords,
  TenOfSwords,
  PageOfSwords,
  KnightOfSwords,
  QueenOfSwords,
  KingOfSwords,
];
