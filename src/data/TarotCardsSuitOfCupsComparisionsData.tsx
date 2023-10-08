import React from "react";
import styles from "../App.module.css";
import Separator from "../components/Separator";
import { Link } from "react-router-dom";
import {
  RoutesSuitMinorArcana,
  TarotDecks,
  TarotRoutes,
} from "./TarotRoutesData";
import { TarotCardNamesCard } from "./TarotCardsData";

const AceOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ace of Cups vs. The Lovers (
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
        The Ace of Cups and{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>{" "}
        both revolve around themes of love and emotional fulfillment, but they
        do so from different angles. The Ace of Cups represents the birth of
        deep emotions and spiritual connection. It signifies the wellspring of
        love, compassion, and emotional contentment from within.
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
        card embodies choices and partnerships. It represents the significance
        of relationships, choices, and the merging of two souls. While The Ace
        of Cups focuses on the internal flow of profound emotions,{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>{" "}
        highlight the external connections and choices we make in love and
        relationships.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Cups vs. Two of Pentacles (
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
        , let's compare The Ace of Cups to the{" "}
        <Link
          to={TarotRoutes[65]}
          className={styles.Link}
          title={TarotCardNamesCard[65]}
        >
          Two of Pentacles{" "}
        </Link>
        . The Ace of Cups represents the birth of deep emotional and spiritual
        fulfillment. It signifies the wellspring of love, compassion, and
        emotional contentment from within.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[65]}
          className={styles.Link}
          title={TarotCardNamesCard[65]}
        >
          Two of Pentacles{" "}
        </Link>{" "}
        represents the need for balance and adaptability in managing various
        aspects of life. It signifies the importance of maintaining equilibrium
        in the face of life's demands. While The Ace of Cups relates to
        emotional fulfillment, the Two of Pentacles emphasizes the need for
        stability and adaptability in managing practical aspects of life.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Cups vs. The Moon (
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
        Now, let's explore how The Ace of Cups compares to{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Ace of Cups represents the birth of deep emotions and spiritual
        fulfillment, signifying the wellspring of love and emotional contentment
        from within.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        embodies mystery, intuition, and the exploration of the subconscious
        mind. It represents a journey into the depths of one's emotions and
        psyche, often associated with uncertainty and the unveiling of hidden
        truths. While The Ace of Cups focuses on emotional fulfillment,{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardNamesCard[18]}
        >
          The Moon{" "}
        </Link>{" "}
        card delves into the mysterious and intuitive aspects of our inner
        world.
      </p>
    </>
  );
};

const TwoOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Two of Cups vs. The Lovers (
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
        The Two of Cups and{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>{" "}
        both delve into themes of love and relationships, but they approach
        these themes differently. The Two of Cups represents the initial stages
        of a loving and harmonious connection between two individuals. It
        signifies the mutual attraction, emotional compatibility, and the
        potential for a deep, soulful bond.
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
        card embodies choices and partnerships. It signifies significant
        decisions related to love and relationships, often involving a choice
        between two paths or individuals. While The Two of Cups emphasizes the
        initial emotional connection and harmony,{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>
        highlight the choices and deeper commitments that relationships entail.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Cups vs. Three of Swords (
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
        , let's compare The Two of Cups to the{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          Three of Swords{" "}
        </Link>
        . The Two of Cups represents the initial stages of a loving and
        harmonious connection between two individuals. It signifies emotional
        compatibility and the potential for a deep, soulful bond.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          Three of Swords{" "}
        </Link>{" "}
        represents heartache and sorrow, often related to the pain of a broken
        relationship or emotional wounds. It signifies the need to process and
        heal from emotional pain. While The Two of Cups focuses on the joy of
        connection, the{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          Three of Swords{" "}
        </Link>
        explores the challenges and healing associated with love and
        relationships.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Cups vs. The Empress (
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
        Now, let's explore how The Two of Cups compares to{" "}
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
        . The Two of Cups represents the initial stages of a loving and
        harmonious connection, signifying emotional compatibility and the
        potential for a deep bond.
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
        embodies fertility, abundance, and the nurturing aspects of femininity.
        She represents the creative force of life and often symbolizes
        motherhood and nurturing relationships. While The Two of Cups focuses on
        the beginning of a romantic connection,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        highlights the nurturing and fertile qualities associated with love and
        relationships.
      </p>
    </>
  );
};

const ThreeOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Three of Cups vs. The Sun (
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
        The Three of Cups and{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        both carry themes of joy and celebration, but they do so in different
        ways. The Three of Cups represents a joyful gathering and emotional
        connection among friends or loved ones. It signifies the happiness that
        comes from shared moments of celebration and companionship.
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
        card embodies positivity, enlightenment, and the radiant energy of life.
        It represents a state of pure joy and enlightenment, often associated
        with clarity, optimism, and the warmth of{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>
        . While The Three of Cups emphasizes the joy of shared celebrations,{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardNamesCard[19]}
        >
          The Sun{" "}
        </Link>{" "}
        card highlights the inner illumination and abundance of life's
        blessings.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Cups vs. Five of Pentacles (
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
        , let's compare The Three of Cups to the{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>
        . The Three of Cups represents a joyful gathering and emotional
        connection among friends or loved ones. It signifies the happiness that
        comes from shared moments of celebration and companionship.
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
        represents a sense of lack or hardship, often related to financial or
        material difficulties. It signifies a period of adversity and the need
        to seek help or support from others. While The Three of Cups focuses on
        joyful connections, the
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          Five of Pentacles{" "}
        </Link>{" "}
        explores challenges and the importance of reaching out for assistance
        during tough times.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Cups vs. The Hierophant (
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
        Now, let's explore how The Three of Cups compares to{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Three of Cups represents a joyful gathering and emotional
        connection among friends or loved ones, signifying the happiness that
        comes from shared moments of celebration and companionship.
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
        often symbolizes ceremonies and rituals. While The Three of Cups focuses
        on joyful celebrations,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        highlights the guidance and wisdom that can be sought from established
        sources and traditions.
      </p>
    </>
  );
};

const FourOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Four of Cups vs. The Hermit (
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
        The Four of Cups and{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        both delve into themes of introspection and contemplation, but they
        approach these themes differently. The Four of Cups represents a moment
        of introspection where one may be feeling discontent or disconnected
        from their surroundings. It signifies the need to reassess one's
        emotional state and consider opportunities that may be overlooked.
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
        embodies a deliberate and solitary journey of self-discovery and
        spiritual reflection. It represents the quest for inner wisdom and the
        guidance gained through solitude and introspection. While The Four of
        Cups focuses on a momentary dissatisfaction, The Hermit card emphasizes
        the intentional search for deeper understanding.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Four of Cups vs. Six of Swords (
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
        , let's compare The Four of Cups to the{" "}
        <Link
          to={TarotRoutes[55]}
          className={styles.Link}
          title={TarotCardNamesCard[55]}
        >
          Six of Swords{" "}
        </Link>
        . The Four of Cups represents a moment of introspection where one may be
        feeling discontent or disconnected from their surroundings. It signifies
        the need to reassess one's emotional state and consider opportunities
        that may be overlooked.
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
        represents a journey away from turbulent or challenging situations
        toward calmer waters. It signifies a transition from difficulty to a
        more peaceful state, often with the help of others. While The Four of
        Cups emphasizes introspection, the Six of Swords focuses on the process
        of moving away from troubled circumstances.
      </p>
    </>
  );
};
const FiveOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Five of Cups vs. The Tower (
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
        The Five of Cups and{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        both address themes of sudden disruption and emotional turmoil, but they
        do so from different angles. The Five of Cups represents a moment of
        sadness and disappointment, often caused by a loss or unfulfilled
        expectations. It signifies the need to process and accept these
        emotions.
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
        embodies abrupt and unexpected change, often associated with upheaval
        and the breaking down of existing structures. It represents a profound
        transformation that may initially bring chaos but ultimately leads to
        necessary renewal. While The Five of Cups focuses on the emotional
        impact of disappointment,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card highlights the transformative nature of unexpected events.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Cups vs. Four of Pentacles (
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
        , let's compare The Five of Cups to the{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardNamesCard[67]}
        >
          Four of Pentacles{" "}
        </Link>
        . The Five of Cups represents a moment of sadness and disappointment,
        signifying the need to process and accept these emotions, often due to a
        loss or unfulfilled expectations.
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
        represents a reluctance to let go, often related to material possessions
        or a fear of change. It signifies the desire to hold onto stability and
        security, even at the expense of personal growth. While The Five of Cups
        focuses on emotional disappointment, the{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardNamesCard[67]}
        >
          Four of Pentacles{" "}
        </Link>{" "}
        delves into the reluctance to release control.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Cups vs. The High Priestess (
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
        Now, let's explore how The Five of Cups compares to{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess{" "}
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Five of Cups represents a moment of sadness and disappointment,
        often stemming from a loss or unfulfilled expectations, and signifies
        the need to process these emotions.
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
        embodies mystery, intuition, and the exploration of the subconscious
        mind. She represents a journey into the depths of one's emotions and
        psyche, often associated with intuition and spiritual insight. While The
        Five of Cups focuses on emotional disappointment,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        card delves into the mysterious and intuitive aspects of our inner
        world.
      </p>
    </>
  );
};

const SixOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Six of Cups vs. The Fool (
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
        The Six of Cups and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        both touch upon themes of innocence and new beginnings, but they do so
        with distinct perspectives. The Six of Cups represents nostalgia and the
        revisiting of cherished memories from the past. It signifies a sense of
        innocence and simplicity often associated with childhood.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        card embodies the spirit of a new journey or adventure. It represents a
        fresh start, spontaneity, and the willingness to embark on new
        experiences with childlike wonder. While The Six of Cups dwells in the
        past, evoking a sense of nostalgia,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>
        emphasizes the excitement and openness to the unknown future.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Cups vs. Nine of Pentacles (
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
        , let's compare The Six of Cups to the{" "}
        <Link
          to={TarotRoutes[72]}
          className={styles.Link}
          title={TarotCardNamesCard[72]}
        >
          Nine of Pentacles{" "}
        </Link>
        . The Six of Cups represents nostalgia and the revisiting of fond
        memories, signifying a sense of innocence and simplicity often
        associated with childhood.
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
        represents a state of self-sufficiency and material abundance. It
        signifies the rewards of hard work and the enjoyment of life's luxuries.
        While The Six of Cups focuses on nostalgic feelings, the{" "}
        <Link
          to={TarotRoutes[72]}
          className={styles.Link}
          title={TarotCardNamesCard[72]}
        >
          Nine of Pentacles{" "}
        </Link>{" "}
        emphasizes the present state of personal achievement and comfort.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Cups vs. The Star (
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
        Now, let's explore how The Six of Cups compares to{" "}
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
        . The Six of Cups represents nostalgia and the revisiting of cherished
        memories from the past, evoking a sense of innocence and simplicity
        often associated with childhood.
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
        embodies hope, inspiration, and a sense of spiritual guidance. It
        represents a period of optimism and healing, often associated with the
        renewal of hope and faith in the future. While The Six of Cups dwells in
        the past,{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardNamesCard[17]}
        >
          The Star{" "}
        </Link>{" "}
        card encourages looking forward with a sense of hope and inspiration.
      </p>
    </>
  );
};

const SevenOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Seven of Cups vs. The Devil (
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
        The Seven of Cups and{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        both address themes of temptation and illusion, but they do so from
        different angles. The Seven of Cups represents a moment of choice and
        fantasy where multiple options or desires may cloud one's judgment. It
        signifies the need to discern between illusion and reality.
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
        card embodies bondage and the entrapment of material desires. It
        represents the temptation to be bound by materialism, addictions, or
        unhealthy desires. While The Seven of Cups focuses on choices and
        illusions,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card emphasizes the dangers of becoming ensnared by one's own desires.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Cups vs. Eight of Swords (
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
        , let's compare The Seven of Cups to the{" "}
        <Link
          to={TarotRoutes[57]}
          className={styles.Link}
          title={TarotCardNamesCard[57]}
        >
          Eight of Swords{" "}
        </Link>
        . The Seven of Cups represents a moment of choice and fantasy, where one
        may be overwhelmed by various options or desires that cloud their
        judgment.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[57]}
          className={styles.Link}
          title={TarotCardNamesCard[57]}
        >
          Eight of Swords{" "}
        </Link>{" "}
        represents a state of feeling trapped or restricted by one's own
        thoughts or circumstances. It signifies a need to break free from
        self-imposed limitations and gain clarity. While The Seven of Cups
        focuses on choices and illusions, the{" "}
        <Link
          to={TarotRoutes[57]}
          className={styles.Link}
          title={TarotCardNamesCard[57]}
        >
          Eight of Swords{" "}
        </Link>
        delves into the struggle to find liberation from mental constraints.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Cups vs. The Star (
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
        Now, let's explore how The Seven of Cups compares to{" "}
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
        . The Seven of Cups represents a moment of choice and fantasy,
        signifying the need to discern between illusion and reality when faced
        with various desires.
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
        embodies hope, inspiration, and a sense of spiritual guidance. It
        represents a period of optimism and healing, often associated with the
        renewal of hope and faith in the future. While The Seven of Cups focuses
        on choices and illusions,{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardNamesCard[17]}
        >
          The Star{" "}
        </Link>{" "}
        card encourages looking forward with a sense of hope and inspiration.
      </p>
    </>
  );
};

const EightOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Eight of Cups vs. The Hanged Man (
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
        The Eight of Cups and{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        both touch upon themes of introspection and change, but they approach
        them differently. The Eight of Cups represents a conscious decision to
        leave behind a situation or emotional attachments that no longer serve
        one's highest good. It signifies the willingness to embark on a journey
        of self-discovery and emotional growth.
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
        embodies surrender and suspension, often associated with gaining a new
        perspective through letting go. It represents a state of suspension and
        surrender to the flow of life, allowing for a change in perspective and
        inner transformation. While The Eight of Cups emphasizes a conscious
        departure,{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>
        highlights the benefits of letting go and surrendering to change.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Cups vs. Five of Cups (
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
        , let's compare The Eight of Cups to the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        . The Eight of Cups represents a conscious decision to leave behind a
        situation or emotional attachments that no longer serve one's highest
        good, signifying a journey of self-discovery and emotional growth.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        represents a moment of sadness and disappointment, often stemming from a
        loss or unfulfilled expectations. It signifies the need to process and
        accept these emotions. While The Eight of Cups focuses on a conscious
        departure, the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        delves into the emotions associated with disappointment and loss.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Cups vs. The Chariot (
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
        Now, let's explore how The Eight of Cups compares to{" "}
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
        . The Eight of Cups represents a conscious decision to leave behind a
        situation or emotional attachments, signifying the willingness to embark
        on a journey of self-discovery and growth.
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
        challenges through inner strength and control. While The Eight of Cups
        emphasizes a conscious departure,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>
        highlights the importance of determination and assertive action in
        achieving one's objectives.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Cups vs. The Empress (
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
        The Nine of Cups and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both touch upon themes of abundance and fulfillment, but they do so with
        distinct perspectives. The Nine of Cups represents emotional
        satisfaction and contentment, often associated with having one's wishes
        fulfilled. It signifies a sense of emotional abundance and harmony.
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
        card embodies fertility, nurturing, and the abundance of life. She
        represents the creative force of life and often symbolizes motherhood
        and nurturing relationships. While The Nine of Cups focuses on emotional
        contentment,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        highlights the nurturing and fertile qualities associated with love and
        abundance.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Cups vs. Ten of Pentacles (
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
        , let's compare The Nine of Cups to the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>
        . The Nine of Cups represents emotional satisfaction and contentment,
        signifying a sense of fulfillment and harmony in one's emotional life.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>{" "}
        represents material wealth, generational wealth, and a sense of
        stability in the family and home. It signifies the rewards of long-term
        efforts and the enjoyment of material abundance. While The Nine of Cups
        emphasizes emotional contentment, the
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>{" "}
        delves into the security and prosperity of the material world.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Cups vs. The Hierophant (
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
        Now, let's explore how The Nine of Cups compares to{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Nine of Cups represents emotional satisfaction and contentment,
        often associated with having one's wishes fulfilled and a sense of
        emotional abundance.
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
        often symbolizes ceremonies and rituals. While The Nine of Cups focuses
        on emotional contentment,{" "}
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

const NineOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Nine of Cups vs. The Empress (
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
        The Nine of Cups and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both touch upon themes of abundance and fulfillment, but they do so with
        distinct perspectives. The Nine of Cups represents emotional
        satisfaction and contentment, often associated with having one's wishes
        fulfilled. It signifies a sense of emotional abundance and harmony.
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
        card embodies fertility, nurturing, and the abundance of life. She
        represents the creative force of life and often symbolizes motherhood
        and nurturing relationships. While The Nine of Cups focuses on emotional
        contentment,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        highlights the nurturing and fertile qualities associated with love and
        abundance.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Cups vs. Ten of Pentacles (
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
        , let's compare The Nine of Cups to the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>
        . The Nine of Cups represents emotional satisfaction and contentment,
        signifying a sense of fulfillment and harmony in one's emotional life.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>{" "}
        represents material wealth, generational wealth, and a sense of
        stability in the family and home. It signifies the rewards of long-term
        efforts and the enjoyment of material abundance. While The Nine of Cups
        emphasizes emotional contentment, the
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          Ten of Pentacles{" "}
        </Link>{" "}
        delves into the security and prosperity of the material world.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Cups vs. The Hierophant (
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
        Now, let's explore how The Nine of Cups compares to{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Nine of Cups represents emotional satisfaction and contentment,
        often associated with having one's wishes fulfilled and a sense of
        emotional abundance.
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
        often symbolizes ceremonies and rituals. While The Nine of Cups focuses
        on emotional contentment,{" "}
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

const TenOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ten of Cups vs. The World (
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
        The Ten of Cups and{" "}
        <Link
          to={TarotRoutes[21]}
          className={styles.Link}
          title={TarotCardNamesCard[21]}
        >
          The World{" "}
        </Link>{" "}
        both touch upon themes of completion and fulfillment, but they do so
        from different angles. The Ten of Cups represents emotional fulfillment
        and harmonious family life, often associated with achieving a state of
        contentment in one's personal relationships.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[21]}
          className={styles.Link}
          title={TarotCardNamesCard[21]}
        >
          The World{" "}
        </Link>{" "}
        card embodies a sense of completion and accomplishment on a larger
        scale. It represents the successful culmination of a major life cycle or
        journey, often associated with a sense of fulfillment on a grander
        scale. While The Ten of Cups focuses on personal and emotional
        fulfillment within the family,{" "}
        <Link
          to={TarotRoutes[21]}
          className={styles.Link}
          title={TarotCardNamesCard[21]}
        >
          The World{" "}
        </Link>{" "}
        card emphasizes the completion of a broader life phase.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Cups vs. Four of Wands (
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
        , let's compare The Ten of Cups to the{" "}
        <Link
          to={TarotRoutes[25]}
          className={styles.Link}
          title={TarotCardNamesCard[25]}
        >
          Four of Wands{" "}
        </Link>
        . The Ten of Cups represents emotional fulfillment and harmonious family
        life, signifying contentment in one's personal relationships and a sense
        of well-being.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[25]}
          className={styles.Link}
          title={TarotCardNamesCard[25]}
        >
          Four of Wands{" "}
        </Link>{" "}
        represents a joyful celebration and a sense of achievement, often
        associated with milestones such as weddings or the completion of a
        project. It signifies a period of happiness and communal harmony. While
        The Ten of Cups focuses on emotional fulfillment within the family, the{" "}
        <Link
          to={TarotRoutes[25]}
          className={styles.Link}
          title={TarotCardNamesCard[25]}
        >
          Four of Wands{" "}
        </Link>{" "}
        delves into the celebration of achievements and communal joy.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Cups vs. The Lovers (
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
        Now, let's explore how The Ten of Cups compares to{" "}
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
        . The Ten of Cups represents emotional fulfillment and harmonious family
        life, often associated with contentment in personal relationships and a
        sense of well-being.
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
        embody choices and partnerships. It signifies significant decisions
        related to love and relationships, often involving a choice between two
        paths or individuals. While The Ten of Cups focuses on personal and
        emotional fulfillment,{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>{" "}
        card highlights the choices and deeper commitments that relationships
        entail.
      </p>
    </>
  );
};

const PageOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Page of Cups vs. The High Priestess (
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
        The Page of Cups and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        both delve into themes of intuition and inner exploration, but they do
        so from different angles. The Page of Cups represents a youthful and
        open-hearted approach to emotions and intuition. It signifies the
        emergence of intuitive and creative energy, often associated with a
        sense of wonder and receptivity to emotions.
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
        embodies mystery, intuition, and the exploration of the subconscious
        mind. She represents a journey into the depths of one's emotions and
        psyche, often associated with intuition and spiritual insight. While The
        Page of Cups emphasizes a youthful and open approach to emotions,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        card delves into the deeper, mystical aspects of intuition and inner
        exploration.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Cups vs. Three of Pentacles (
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
        , let's compare The Page of Cups to the{" "}
        <Link
          to={TarotRoutes[66]}
          className={styles.Link}
          title={TarotCardNamesCard[66]}
        >
          Three of Pentacles{" "}
        </Link>
        . The Page of Cups represents a youthful and open-hearted approach to
        emotions and intuition, signifying the emergence of intuitive and
        creative energy.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[66]}
          className={styles.Link}
          title={TarotCardNamesCard[66]}
        >
          Three of Pentacles{" "}
        </Link>{" "}
        represents collaboration, skill development, and the mastery of one's
        craft. It signifies the rewards of working together with others to
        achieve common goals. While The Page of Cups focuses on emotional
        receptivity, the{" "}
        <Link
          to={TarotRoutes[66]}
          className={styles.Link}
          title={TarotCardNamesCard[66]}
        >
          Three of Pentacles{" "}
        </Link>{" "}
        highlights the importance of collaboration and skill refinement.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Cups vs. The Chariot (
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
        Now, let's explore how The Page of Cups compares to{" "}
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
        . The Page of Cups represents a youthful and open-hearted approach to
        emotions and intuition, emphasizing the emergence of intuitive and
        creative energy.
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
        challenges through inner strength and control. While The Page of Cups
        encourages an open-hearted approach to emotions, The Chariot card
        highlights the importance of determination and assertive action in
        achieving one's objectives.
      </p>
    </>
  );
};

const KnightOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Knight of Cups vs. The Hanged Man (
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
        The Knight of Cups and{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        both touch upon themes of introspection and surrender, but they do so
        with different energies. The Knight of Cups represents a romantic and
        idealistic approach to emotions and relationships. It signifies the
        pursuit of one's heart's desires with passion and creativity.
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
        embodies surrender and suspension, often associated with gaining a new
        perspective through letting go. It represents a state of suspension and
        surrender to the flow of life, allowing for a change in perspective and
        inner transformation. While The Knight of Cups emphasizes passionate
        pursuit,{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        highlights the benefits of letting go and surrendering to change.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Cups vs. The Five of Cups (
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
        , let's compare The Knight of Cups to the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        . The Knight of Cups represents a romantic and idealistic approach to
        emotions and relationships, signifying the pursuit of desires with
        passion and creativity.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        represents a moment of sadness and disappointment, often stemming from a
        loss or unfulfilled expectations. It signifies the need to process and
        accept these emotions. While The Knight of Cups focuses on passionate
        pursuit, the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        delves into the emotions associated with disappointment and loss.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Cups vs. The Emperor (
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
        Now, let's explore how The Knight of Cups compares to{" "}
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
        . The Knight of Cups represents a romantic and idealistic approach to
        emotions and relationships, emphasizing the pursuit of desires with
        passion and creativity.
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
        embodies authority, structure, and the establishment of order. It
        represents a strong and disciplined approach to leadership and
        decision-making. While The Knight of Cups encourages a passionate
        pursuit of emotions,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        card highlights the importance of structure and authority in achieving
        one's goals.
      </p>
    </>
  );
};

const QueenOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Queen of Cups vs. The High Priestess (
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
        The Queen of Cups and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        both delve into themes of intuition and emotional depth, but they do so
        with distinct energies. The Queen of Cups represents emotional nurturing
        and compassion. She embodies a deep connection to her emotions and an
        ability to offer empathy to others.
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
        insight. While The Queen of Cups focuses on emotional nurturing and
        compassion,{" "}
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
        The Queen of Cups vs. The Seven of Swords (
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
        , let's compare The Queen of Cups to{" "}
        <Link
          to={TarotRoutes[56]}
          className={styles.Link}
          title={TarotCardNamesCard[56]}
        >
          The Seven of Swords{" "}
        </Link>
        . The Queen of Cups represents emotional nurturing and compassion,
        signifying a deep connection to one's emotions and an ability to offer
        empathy.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[56]}
          className={styles.Link}
          title={TarotCardNamesCard[56]}
        >
          The Seven of Swords{" "}
        </Link>{" "}
        represents deception and cunning. It signifies a situation where someone
        may be attempting to manipulate or deceive others. While The Queen of
        Cups emphasizes emotional depth and empathy,{" "}
        <Link
          to={TarotRoutes[56]}
          className={styles.Link}
          title={TarotCardNamesCard[56]}
        >
          The Seven of Swords{" "}
        </Link>{" "}
        highlights the need for caution and awareness in interpersonal
        relationships.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Queen of Cups vs. The Empress (
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
        Now, let's explore how The Queen of Cups compares to{" "}
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
        . The Queen of Cups represents emotional nurturing and compassion,
        embodying a deep connection to her emotions and the ability to offer
        empathy to others.
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
        relationships. While The Queen of Cups focuses on emotional depth and
        compassion,{" "}
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

const KingOfCups = () => {
  return (
    <>
      <h2 className={styles.title}>
        The King of Cups vs. The Hierophant (
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
        The King of Cups and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both touch upon themes of emotional wisdom and spiritual guidance, but
        they do so with different energies. The King of Cups represents
        emotional maturity and balance. He embodies a deep understanding of his
        own emotions and those of others, often associated with empathy and
        compassion.
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
        card embodies tradition, spiritual guidance, and the wisdom of
        established institutions. He represents the role of mentor or spiritual
        leader and often symbolizes ceremonies and rituals. While The King of
        Cups focuses on emotional maturity,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        highlights the guidance and wisdom that can be sought from established
        sources and traditions.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Cups vs. The Five of Swords (
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
        , let's compare The King of Cups to{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          The Five of Swords{" "}
        </Link>
        . The King of Cups represents emotional maturity and balance, signifying
        a deep understanding of emotions and empathy.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          The Five of Swords{" "}
        </Link>{" "}
        represents conflict and defeat. It signifies a situation where conflicts
        may have led to a sense of loss or emotional turmoil. While The King of
        Cups emphasizes emotional maturity,
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          The Five of Swords{" "}
        </Link>{" "}
        delves into the challenges of interpersonal conflicts and the need for
        resolution.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Cups vs. The Emperor (
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
        Now, let's explore how The King of Cups compares to{" "}
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
        . The King of Cups represents emotional maturity and balance, embodying
        a deep understanding of emotions and empathy.
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
        embodies authority, structure, and the establishment of order. He
        represents a strong and disciplined approach to leadership and
        decision-making. While The King of Cups encourages emotional maturity,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        card highlights the importance of structure and authority in achieving
        one's goals.
      </p>
    </>
  );
};
export const TarotCardsSuitOfCupsComparisionsData = [
  AceOfCups,
  TwoOfCups,
  ThreeOfCups,
  FourOfCups,
  FiveOfCups,
  SixOfCups,
  SevenOfCups,
  EightOfCups,
  NineOfCups,
  TenOfCups,
  PageOfCups,
  KnightOfCups,
  QueenOfCups,
  KingOfCups,
];
