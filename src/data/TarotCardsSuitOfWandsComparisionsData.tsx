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

const AceOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ace of Wands vs. The Magician (
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
        The Ace of Wands and{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        share a connection to the element of fire and creative energy, albeit in
        different ways. The Ace of Wands represents the spark of new creative
        inspiration and potential. It symbolizes the beginning of a passionate
        and dynamic endeavor, often associated with fresh ideas and enthusiasm.
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
        embodies the mastery of the elements and the power to manifest one's
        desires. It represents the ability to channel creative energy with skill
        and intention. While The Ace of Wands signifies the initial burst of
        creative energy,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        emphasizes the conscious and deliberate use of creative powers.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Wands vs. Page of Cups (
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
        , let's compare The Ace of Wands to the{" "}
        <Link
          to={TarotRoutes[46]}
          className={styles.Link}
          title={TarotCardNamesCard[46]}
        >
          Page of Cups{" "}
        </Link>
        . The Ace of Wands represents the birth of creative and passionate
        energy, often related to new artistic or project ideas. It symbolizes
        the initial surge of emotional and creative inspiration.
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
        signifies the emergence of intuitive and emotional insights. It
        represents the beginning of a journey into the world of emotions and the
        exploration of one's inner feelings. While The Ace of Wands relates to
        creative inspiration, the{" "}
        <Link
          to={TarotRoutes[46]}
          className={styles.Link}
          title={TarotCardNamesCard[46]}
        >
          Page of Cups{" "}
        </Link>{" "}
        delves into the emotional and intuitive aspects of creativity.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Wands vs. Eight of Pentacles (
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
        Lastly, let's explore how The Ace of Wands compares to the Eight of
        Pentacles. The Ace of Wands embodies the spark of new creative energy
        and potential, often related to new opportunities in the creative or
        professional realm. It symbolizes the excitement of starting a new
        venture or project.
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
        represents the diligent and focused pursuit of skill mastery and
        craftsmanship. It signifies the dedication to honing one's skills and
        achieving excellence in practical matters. While The Ace of Wands
        relates to the initial burst of creative inspiration, the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>{" "}
        emphasizes the commitment to disciplined practice and improvement.
      </p>
      <p className={styles.paragraph}>
        These comparisons highlight how The Ace of Wands card represents themes
        of creative inspiration and the birth of new endeavors. It helps us
        understand the diverse qualities and interpretations associated with
        this card in Tarot readings, from the initial spark of creativity to the
        disciplined pursuit of skill and excellence.
      </p>
    </>
  );
};

const TwoOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Two of Wands vs. The High Priestess (
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
        The Two of Wands and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        both carry elements of inner contemplation and choices, but they
        manifest differently. The Two of Wands represents a moment of
        decision-making and exploration, often related to embarking on a new
        path or venture. It signifies the need to make choices that align with
        one's long-term goals.
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
        embodies intuition, inner wisdom, and a deep connection to the
        subconscious. She represents the need to listen to one's inner voice and
        trust one's instincts. While The Two of Wands focuses on making external
        choices,{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        encourages us to explore our inner realms for guidance.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Wands vs. Six of Pentacles (
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
        , let's compare The Two of Wands to the{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardNamesCard[69]}
        >
          Six of Pentacles{" "}
        </Link>
        . The Two of Wands signifies a moment of decision and planning, often
        related to personal and financial growth. It represents the
        contemplation of how to invest resources or energy for future gain.
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
        represents generosity and the act of giving and receiving in a balanced
        manner. It signifies the importance of sharing wealth and resources with
        others. While The Two of Wands relates to personal planning and
        decision-making, the{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardNamesCard[69]}
        >
          Six of Pentacles{" "}
        </Link>
        emphasizes the act of giving and receiving in a compassionate and
        equitable way.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Wands vs. The Lovers (
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
        Now, let's explore how The Two of Wands compares to{" "}
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
        . The Two of Wands represents a moment of decision-making and
        contemplation, often related to choices that impact one's future. It
        signifies the need to make decisions that align with personal goals and
        values.
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
        card symbolizes deep connections, partnerships, and the choices we make
        in matters of the heart. It represents the union of opposites and the
        importance of love and relationships in our lives. While The Two of
        Wands focuses on practical choices,{" "}
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardNamesCard[6]}
        >
          The Lovers{" "}
        </Link>
        highlights emotional and relational decisions.
      </p>
    </>
  );
};

const ThreeOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Three of Wands vs. The Hierophant (
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
        The Three of Wands and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both relate to guidance and expansion, but they do so in different ways.
        The Three of Wands represents a moment of anticipation and expansion,
        often associated with the pursuit of new opportunities or ventures. It
        signifies the willingness to explore uncharted territory and seek
        growth.
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
        embodies tradition, spiritual guidance, and the wisdom of established
        institutions. He represents the connection to higher wisdom and the role
        of mentor or spiritual leader. While The Three of Wands emphasizes
        personal expansion and exploration,
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        focuses on seeking wisdom from established sources.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Wands vs. Six of Pentacles (
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
        , let's compare The Three of Wands to the{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardNamesCard[69]}
        >
          Six of Pentacles{" "}
        </Link>
        . The Three of Wands signifies a moment of expansion and anticipation,
        often related to personal or financial growth. It represents the
        exploration of opportunities and the expectation of positive returns.
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
        represents generosity and the act of giving and receiving in a balanced
        manner. It signifies the importance of sharing wealth and resources with
        those in need. While The Three of Wands relates to personal expansion
        and expectation, the{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardNamesCard[69]}
        >
          Six of Pentacles{" "}
        </Link>{" "}
        highlights the act of giving and receiving in a compassionate and
        equitable way.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Wands vs. The Star (
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
        Now, let's explore how The Three of Wands compares to{" "}
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
        . The Three of Wands represents a moment of anticipation and expansion,
        often associated with exploring new horizons and pursuing opportunities.
        It signifies the willingness to take calculated risks for future growth.
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
        embodies hope, inspiration, and the belief in a brighter future. It
        represents a sense of clarity and optimism, encouraging us to have faith
        in our dreams and aspirations. While The Three of Wands focuses on
        personal expansion and anticipation,{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardNamesCard[17]}
        >
          The Star{" "}
        </Link>
        card highlights the importance of hope and inspiration in guiding our
        journeys.
      </p>
    </>
  );
};
const FourOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Four of Wands vs. The Empress (
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
        The Four of Wands and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both touch upon themes of celebration and abundance, but they do so from
        different angles. The Four of Wands represents a moment of celebration
        and harmony, often related to a joyful event or the successful
        completion of a project. It signifies a time of stability and
        celebration within a community or family.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        embodies the nurturing and fertile aspects of life. She represents the
        abundant and nurturing qualities of the feminine, often associated with
        the birth of new ideas, projects, or even literal births. While The Four
        of Wands focuses on the act of celebration and harmony,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        emphasizes the nurturing and creative energy that underlies such joyous
        occasions.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Four of Wands vs. Ten of Cups (
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
        , let's compare The Four of Wands to the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardNamesCard[45]}
        >
          Ten of Cups{" "}
        </Link>
        . The Four of Wands represents a moment of celebration and harmony,
        often within the context of family or relationships. It signifies the
        joy of shared emotional fulfillment and a sense of achievement.
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
        is a card of emotional fulfillment and the realization of deep emotional
        desires, often related to family and relationships. It symbolizes the
        harmonious and loving atmosphere within one's emotional life and family.
        While The Four of Wands relates to the act of celebration, the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardNamesCard[45]}
        >
          Ten of Cups{" "}
        </Link>{" "}
        celebrates the emotional fulfillment and happiness within familial and
        relationship bonds.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Four of Wands vs. The Chariot (
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
        Now, let's explore how The Four of Wands compares to{" "}
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
        . The Four of Wands represents a moment of celebration and harmony,
        often within the context of a communal or family event. It signifies the
        joy and stability achieved through teamwork and collaboration.
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
        It represents the focused pursuit of goals and the ability to conquer
        challenges through determination and control. While The Four of Wands
        focuses on celebration and harmony,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>
        highlights the determination and control needed to achieve success.
      </p>
    </>
  );
};

const FiveOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Five of Wands vs. The Tower (
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
        The Five of Wands and{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        both touch upon themes of conflict and upheaval, albeit in different
        ways. The Five of Wands represents a situation where there is a clash of
        ideas or interests, often characterized by competitive or chaotic
        energy. It signifies the need to navigate through conflicts and
        differences.
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
        embodies sudden and disruptive change, often associated with unexpected
        events that shake the foundations of one's life. It represents a
        profound transformation that may initially seem destructive but
        ultimately leads to necessary renewal. While The Five of Wands focuses
        on conflicts and competition,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        highlights the abrupt and transformative nature of change.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Wands vs. Two of Swords (
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
        , let's compare The Five of Wands to the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardNamesCard[51]}
        >
          Two of Swords{" "}
        </Link>
        . The Five of Wands represents a situation of conflict and competition,
        often involving multiple parties with opposing viewpoints. It signifies
        the need to confront and address these conflicts to find a resolution.
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
        represents a state of indecision and inner conflict, often related to a
        difficult choice or dilemma. It signifies the need to balance
        conflicting thoughts and make a decision despite inner turmoil. While
        The Five of Wands relates to external conflicts, the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardNamesCard[51]}
        >
          Two of Swords{" "}
        </Link>{" "}
        delves into the internal struggles of decision-making.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Wands vs. Five of Cups (
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
        Now, let's explore how The Five of Wands compares to the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        . The Five of Wands represents external conflicts and competition, often
        involving clashes of ideas or interests among individuals. It signifies
        the need to navigate through these conflicts and find common ground.
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
        represents feelings of disappointment and loss, often related to past
        emotional wounds. It signifies the need to process and release these
        emotions before moving forward. While The Five of Wands focuses on
        external conflicts, the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>{" "}
        explores internal emotional struggles and the process of healing.
      </p>
    </>
  );
};

const SixOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Six of Wands vs. The Chariot (
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
        The Six of Wands and{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        both revolve around themes of triumph and victory, albeit with different
        approaches. The Six of Wands represents a moment of recognition and
        success, often achieved through collaboration and the support of others.
        It signifies public acknowledgment and the feeling of being celebrated
        for one's accomplishments.
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
        embodies willpower, determination, and the drive to overcome obstacles
        independently. It represents the focused pursuit of goals and the
        ability to conquer challenges through inner strength and control. While
        The Six of Wands signifies external recognition and success,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        emphasizes inner determination and personal victory.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Wands vs. Ace of Cups (
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
        , let's compare The Six of Wands to the{" "}
        <Link
          to={TarotRoutes[36]}
          className={styles.Link}
          title={TarotCardNamesCard[36]}
        >
          Ace of Cups
        </Link>{" "}
        . The Six of Wands represents a moment of triumph and recognition in the
        external world, often related to career or public achievements. It
        signifies the joy of external success and the admiration of others.
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
        represents the birth of deep emotional and spiritual fulfillment. It
        signifies the wellspring of love, compassion, and emotional contentment
        from within. While The Six of Wands relates to external triumph, the{" "}
        <Link
          to={TarotRoutes[36]}
          className={styles.Link}
          title={TarotCardNamesCard[36]}
        >
          Ace of Cups
        </Link>{" "}
        emphasizes the internal flow of profound emotions and love.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Wands vs. The Hierophant (
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
        Now, let's explore how The Six of Wands compares to{" "}
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
        . The Six of Wands represents a moment of public recognition and
        triumph, often achieved with the support of others and external
        validation. It signifies being celebrated for one's accomplishments.
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
        institutions. He represents the connection to higher wisdom and the role
        of mentor or spiritual leader. While The Six of Wands focuses on
        external recognition and success,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        highlights the guidance and wisdom that can come from established
        sources.
      </p>
    </>
  );
};

const SevenOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Seven of Wands vs. The Strength (
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
        The Seven of Wands and{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>{" "}
        card both center on themes of inner strength and courage, but they
        manifest differently. The Seven of Wands represents a situation where
        one must defend their position or beliefs against opposition. It
        signifies the need to stand up for what one believes in, even when faced
        with challenges or adversity.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>{" "}
        card embodies inner strength and the ability to tame one's inner beasts
        through compassion and inner harmony. It represents the power of
        courage, resilience, and the gentle strength that comes from within.
        While The Seven of Wands emphasizes the external act of defending one's
        stance,{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>{" "}
        card focuses on the inner strength needed to overcome challenges.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Wands vs. Five of Swords (
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
        , let's compare The Seven of Wands to the{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          Five of Swords{" "}
        </Link>
        . The Seven of Wands represents a situation where one must defend their
        position or beliefs against opposition, often involving conflicts or
        disputes. It signifies the need to assert oneself and protect one's
        interests.
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
        represents conflict and challenges that arise from differences in
        opinions or goals. It signifies the importance of choosing battles
        wisely and being aware of the potential consequences of one's actions.
        While The Seven of Wands relates to external defense, the{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardNamesCard[54]}
        >
          Five of Swords{" "}
        </Link>{" "}
        highlights the conflicts and choices we encounter in our lives.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Wands vs. The Emperor (
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
        Now, let's explore how The Seven of Wands compares to{" "}
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
        . The Seven of Wands represents a situation where one must defend their
        position or beliefs against opposition, often involving the need to
        assert authority or protect one's interests.
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
        embodies authority, stability, and the ability to take control of
        situations. It represents the power of leadership and the establishment
        of order and structure. While The Seven of Wands focuses on the act of
        defending one's position,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        card emphasizes the ability to assert authority and maintain control.
      </p>
    </>
  );
};
const EightOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Eight of Wands vs. The Fool (
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
        The Eight of Wands and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        both convey a sense of forward movement and spontaneity, but they do so
        in different ways. The Eight of Wands represents swift and dynamic
        energy, often related to the rapid progression of events or
        communication. It signifies a time when things are moving quickly, and
        one must be prepared to act.
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
        embodies a carefree spirit and the willingness to embark on new
        adventures without fear or preconceived notions. It signifies the start
        of a new journey, marked by spontaneity and a sense of innocence. While
        The Eight of Wands represents rapid movement,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        emphasizes the joy of embracing the unknown with an open heart.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Wands vs. Two of Pentacles (
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
        , let's compare The Eight of Wands to the{" "}
        <Link
          to={TarotRoutes[65]}
          className={styles.Link}
          title={TarotCardNamesCard[65]}
        >
          Two of Pentacles{" "}
        </Link>
        . The Eight of Wands represents fast-paced and dynamic energy, often
        associated with swift developments or communication. It signifies the
        need to adapt to changing circumstances and stay flexible.
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
        represents the need for balance and juggling multiple responsibilities
        or resources. It signifies the importance of maintaining equilibrium in
        the face of life's demands. While The Eight of Wands focuses on rapid
        progress, the{" "}
        <Link
          to={TarotRoutes[65]}
          className={styles.Link}
          title={TarotCardNamesCard[65]}
        >
          Two of Pentacles{" "}
        </Link>
        highlights the need for stability and adaptability in managing various
        aspects of life.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Wands vs. The Chariot (
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
        Now, let's explore how The Eight of Wands compares to{" "}
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
        . The Eight of Wands represents swift and dynamic energy, often
        associated with rapid progress or communication. It signifies a time
        when things are moving quickly, and one must stay focused and adaptable.
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
        It represents the focused pursuit of goals and the ability to conquer
        challenges through inner strength and control. While The Eight of Wands
        emphasizes swift movement,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>
        highlights the determination and control needed to achieve success in
        the face of challenges.
      </p>
    </>
  );
};

const NineOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Nine of Wands vs. The Hermit (
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
        The Nine of Wands and{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        both convey themes of resilience and introspection, but they do so in
        distinct ways. The Nine of Wands represents a moment of endurance and
        defensiveness, often related to facing repeated challenges. It signifies
        the need to maintain one's guard and continue the struggle despite
        feeling battle-weary.
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
        embodies a period of solitude and inner reflection. It represents the
        journey of seeking wisdom through introspection and withdrawal from
        external influences. While The Nine of Wands emphasizes external
        challenges and the need for persistence, The Hermit focuses on the inner
        quest for enlightenment and self-discovery.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Wands vs. Five of Cups (
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
        , let's compare The Nine of Wands to the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        . The Nine of Wands represents resilience and the ability to stand tall
        even in the face of adversity. It signifies the strength to continue the
        fight, even when it seems like hope has waned.
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
        represents feelings of disappointment and loss, often related to past
        emotional wounds. It signifies the need to process and release these
        emotions before moving forward. While The Nine of Wands focuses on
        enduring external challenges, the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardNamesCard[40]}
        >
          The Five of Cups{" "}
        </Link>
        explores the process of healing and letting go of past sorrows.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Wands vs. The Devil (
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
        Now, let's explore how The Nine of Wands compares to{" "}
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
        . The Nine of Wands represents resilience and the ability to persevere
        through challenges. It signifies the strength to continue the fight,
        even when feeling burdened by the weight of past struggles.
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
        embodies bondage and entrapment, often related to unhealthy attachments
        or addictions. It represents the need to break free from self-imposed
        limitations and embrace personal liberation. While The Nine of Wands
        emphasizes the endurance of challenges, The Devil card highlights the
        importance of breaking free from oppressive influences.
      </p>
    </>
  );
};

const TenOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ten of Wands vs. The Hanged Man (
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
        The Ten of Wands and{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        both delve into themes of burdens and surrender, but they do so in
        different ways. The Ten of Wands represents a moment of feeling
        overwhelmed by responsibilities and burdens. It signifies the need to
        carry a heavy load, often related to work or obligations.
      </p>
      <p className={styles.paragraph}>
        On the other hand,{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        embodies the concept of surrender and letting go. It represents a
        willingness to release control and gain a new perspective through
        surrendering to the present moment. While The Ten of Wands focuses on
        carrying burdens,{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardNamesCard[12]}
        >
          The Hanged Man{" "}
        </Link>{" "}
        emphasizes the power of surrender and seeing things from a different
        angle.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Wands vs. Eight of Pentacles (
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
        , let's compare The Ten of Wands to the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>
        . The Ten of Wands represents the feeling of being weighed down by
        numerous responsibilities and obligations. It signifies the need to
        persevere even when the load feels heavy and challenging.
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
        represents diligence and dedication to one's work or craft. It signifies
        the pursuit of mastery through hard work and attention to detail. While
        The Ten of Wands relates to the burdens of responsibility, the{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardNamesCard[71]}
        >
          Eight of Pentacles{" "}
        </Link>{" "}
        highlights the value of focused effort and commitment to one's goals.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Wands vs. The Tower (
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
        Now, let's explore how The Ten of Wands compares to{" "}
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
        . The Ten of Wands represents the feeling of being burdened by
        responsibilities and obligations. It signifies the need to carry a heavy
        load and persevere despite the challenges.
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
        embodies sudden and disruptive change, often associated with unexpected
        events that shake the foundations of one's life. It represents a
        profound transformation that may initially seem destructive but
        ultimately leads to necessary renewal. While The Ten of Wands focuses on
        carrying burdens,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card highlights the abrupt and transformative nature of change.
      </p>
    </>
  );
};

const PageOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Page of Wands vs. The Fool (
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
        The Page of Wands and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        both carry themes of enthusiasm and embarking on new adventures, but
        they do so from different perspectives. The Page of Wands represents the
        youthful and passionate pursuit of creative endeavors and opportunities.
        It signifies a sense of curiosity and a desire to explore new pathways
        in life.
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
        embodies a carefree spirit and the willingness to embark on new journeys
        without fear or preconceived notions. It signifies the start of a new
        adventure marked by spontaneity and a sense of innocence. While The Page
        of Wands focuses on the enthusiasm for creative pursuits,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool{" "}
        </Link>{" "}
        emphasizes the joy of embracing the unknown with an open heart.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Wands vs. Two of Cups (
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
        , let's compare The Page of Wands to the{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          Two of Cups{" "}
        </Link>
        . The Page of Wands represents the excitement and passionate pursuit of
        creative opportunities and new experiences. It signifies a sense of
        adventure and a willingness to explore new horizons in relationships or
        personal growth.
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
        represents a harmonious and loving connection between individuals. It
        signifies the deep emotional bond and mutual affection shared between
        two people. While The Page of Wands relates to enthusiastic pursuits,
        the{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          Two of Cups{" "}
        </Link>{" "}
        highlights the emotional connection and partnership in relationships.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Wands vs. The Magician (
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
        Now, let's explore how The Page of Wands compares to{" "}
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
        . The Page of Wands represents youthful enthusiasm and the pursuit of
        creative opportunities and experiences. It signifies a passion for
        exploring new pathways and embracing challenges with an open mind.
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
        embodies mastery, skill, and the ability to manifest one's desires
        through the power of intention and will. It represents the conscious
        manipulation of resources and energies to bring about change and create
        one's reality. While The Page of Wands focuses on enthusiasm and
        exploration,{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardNamesCard[1]}
        >
          The Magician
        </Link>{" "}
        highlights the mastery and control over one's creative and
        transformative abilities.
      </p>
    </>
  );
};

const KnightOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Knight of Wands vs. The Chariot (
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
        The Knight of Wands and{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        both embody themes of action and determination, but they express these
        qualities differently. The Knight of Wands represents a dynamic and
        enthusiastic approach to pursuing one's goals and passions. It signifies
        a willingness to embark on new adventures with zeal and energy.
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
        It represents the focused pursuit of goals and the ability to conquer
        challenges through inner strength and control. While the Knight of Wands
        emphasizes the adventurous spirit and passionate pursuit of desires,{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>{" "}
        highlights the disciplined and determined approach to achieving success.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Wands vs. Two of Swords (
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
        , let's compare The Knight of Wands to the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardNamesCard[51]}
        >
          Two of Swords{" "}
        </Link>
        . The Knight of Wands represents an energetic and action-oriented
        approach to decision-making and problem-solving. It signifies the
        readiness to confront challenges head-on and make swift choices.
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
        represents a state of indecision and inner conflict, often related to a
        difficult choice or dilemma. It signifies the need to balance
        conflicting thoughts and find resolution despite inner turmoil. While
        the Knight of Wands embodies a proactive approach to challenges, the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardNamesCard[51]}
        >
          Two of Swords{" "}
        </Link>{" "}
        delves into the internal struggles of decision-making.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Wands vs. The Hierophant (
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
        Now, let's explore how The Knight of Wands compares to{" "}
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
        . The Knight of Wands represents an energetic and adventurous pursuit of
        passions and desires. It signifies the willingness to take risks and
        explore uncharted territories with enthusiasm.
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
        institutions. He represents the connection to higher wisdom and the role
        of mentor or spiritual leader. While the Knight of Wands emphasizes the
        dynamic pursuit of personal desires, The Hierophant highlights the
        guidance and wisdom that can be sought from established sources.
      </p>
    </>
  );
};

const QueenOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Queen of Wands vs. The Empress (
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
        The Queen of Wands and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both embody feminine energy, but they do so in distinct ways. The Queen
        of Wands represents a fiery and passionate aspect of femininity. She
        signifies confidence, charisma, and a bold approach to life. This card
        often suggests a strong and independent woman who takes the lead in her
        endeavors.
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
        embodies the nurturing and fertile aspects of femininity. She represents
        abundance, fertility, and the creative force of life.{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        is associated with motherhood, growth, and the nurturing of new ideas or
        projects. While The Queen of Wands exudes a vibrant and assertive
        energy,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        radiates a gentle and nurturing aura.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Queen of Wands vs. Page of Cups (
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
        , let's compare The Queen of Wands to the{" "}
        <Link
          to={TarotRoutes[46]}
          className={styles.Link}
          title={TarotCardNamesCard[46]}
        >
          Page of Cups{" "}
        </Link>
        . The Queen of Wands represents a mature and confident individual who
        exudes a magnetic presence. She signifies a person who is passionate,
        adventurous, and not afraid to take risks in life.
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
        represents a young and emotionally sensitive individual. This card
        signifies a person who is in touch with their feelings, often
        experiencing emotions deeply and with innocence. While The Queen of
        Wands embodies self-assuredness and passion, the Page of Cups represents
        emotional sensitivity and receptivity.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Queen of Wands vs. The High Priestess (
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
        Now, let's explore how The Queen of Wands compares to{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Queen of Wands represents a vibrant and assertive feminine energy.
        She signifies confidence, charisma, and a bold approach to life's
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
        embodies intuition, inner wisdom, and the mysteries of the subconscious
        mind. She represents a deeper, more reflective aspect of femininity,
        associated with intuition and spiritual insight. While The Queen of
        Wands is extroverted and action-oriented,
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        is introverted and focused on inner knowing and intuition.
      </p>
    </>
  );
};

const KingOfWands = () => {
  return (
    <>
      <h2 className={styles.title}>
        The King of Wands vs. The Emperor (
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
        The King of Wands and{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        both convey themes of authority and leadership, but they do so in
        different ways. The King of Wands represents a charismatic and visionary
        leader who is passionate about their pursuits. He signifies a person who
        is confident, influential, and has a magnetic presence.
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
        embodies authority, stability, and the ability to establish order and
        structure. He represents a more structured and disciplined form of
        leadership, often associated with rules and regulations. While The King
        of Wands emphasizes charisma and visionary leadership,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        highlights the importance of control and governance.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Wands vs. Seven of Pentacles (
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
        , let's compare The King of Wands to the{" "}
        <Link
          to={TarotRoutes[70]}
          className={styles.Link}
          title={TarotCardNamesCard[70]}
        >
          Seven of Pentacles{" "}
        </Link>
        . The King of Wands represents a confident and passionate individual who
        leads with charisma and a vision for the future. He signifies the
        ability to inspire and motivate others toward a common goal.
      </p>
      <p className={styles.paragraph}>
        Conversely, the{" "}
        <Link
          to={TarotRoutes[70]}
          className={styles.Link}
          title={TarotCardNamesCard[70]}
        >
          Seven of Pentacles{" "}
        </Link>{" "}
        represents a period of assessment and patience in one's endeavors. It
        signifies the need to evaluate the progress made so far and make
        strategic decisions about the future. While The King of Wands is
        action-oriented and visionary, the Seven of Pentacles emphasizes the
        importance of reflection and patience in achieving long-term goals.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Wands vs. The Hierophant (
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
        Now, let's explore how The King of Wands compares to{" "}
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
        . The King of Wands represents a charismatic and visionary leader who
        inspires others with his passion and confidence. He signifies a more
        unconventional and individualistic approach to leadership.
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
        the adherence to established norms and rituals. While The King of Wands
        emphasizes personal charisma and visionary leadership,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        highlights the guidance and wisdom that can come from established
        sources.
      </p>
    </>
  );
};
export const TarotCardsSuitOfWandsComparisionsData = [
  AceOfWands,
  TwoOfWands,
  ThreeOfWands,
  FourOfWands,
  FiveOfWands,
  SixOfWands,
  SevenOfWands,
  EightOfWands,
  NineOfWands,
  TenOfWands,
  PageOfWands,
  KnightOfWands,
  QueenOfWands,
  KingOfWands,
];
