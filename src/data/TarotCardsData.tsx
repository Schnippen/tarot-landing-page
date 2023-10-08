import { Link } from "react-router-dom";
//import { TarotRoutes } from "./TarotRoutesData";
import styles from "../App.module.css";
import { RoutesSuitMinorArcana } from "./TarotRoutesData";
import {
  TarotCardsMinorArcanaSuitsAces,
  MajorArcanaCards,
  TarotCardsPhotosAll,
} from "../images/cards/TarotCardPhotos";
const TarotRoutes = [
  "/the-fool-meaning-major-arcana-tarot-card-meanings",
  "/the-magician-meaning-major-arcana-tarot-card-meanings",
  "/the-high-priestess-meaning-major-arcana-tarot-card-meanings",
  "/the-empress-meaning-major-arcana-tarot-card-meanings",
  "/the-emperor-meaning-major-arcana-tarot-card-meanings",
  "/the-hierophant-meaning-major-arcana-tarot-card-meanings",
  "/the-lovers-meaning-major-arcana-tarot-card-meanings",
  "/the-chariot-meaning-major-arcana-tarot-card-meanings",
  "/the-strength-meaning-major-arcana-tarot-card-meanings",
  "/the-hermit-meaning-major-arcana-tarot-card-meanings",
  "/the-wheel-of-fortune-meaning-major-arcana-tarot-card-meanings",
  "/the-justice-meaning-major-arcana-tarot-card-meanings",
  "/the-hanged-man-meaning-major-arcana-tarot-card-meanings",
  "/the-death-meaning-major-arcana-tarot-card-meanings",
  "/the-temperance-meaning-major-arcana-tarot-card-meanings",
  "/the-devil-meaning-major-arcana-tarot-card-meanings",
  "/the-tower-meaning-major-arcana-tarot-card-meanings",
  "/the-star-meaning-major-arcana-tarot-card-meanings",
  "/the-moon-meaning-major-arcana-tarot-card-meanings",
  "/the-sun-meaning-major-arcana-tarot-card-meanings",
  "/the-judgment-meaning-major-arcana-tarot-card-meanings",
  "/the-world-meaning-major-arcana-tarot-card-meanings",
  "/the-ace-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-two-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-three-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-four-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-five-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-six-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-seven-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-eight-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-nine-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-ten-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-page-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-knight-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-queen-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-king-of-wands-meaning-minor-arcana-tarot-card-meanings",
  "/the-ace-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-two-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-three-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-four-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-five-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-six-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-seven-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-eight-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-nine-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-ten-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-page-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-knight-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-queen-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-king-of-cups-meaning-minor-arcana-tarot-card-meanings",
  "/the-ace-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-two-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-three-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-four-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-five-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-six-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-seven-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-eight-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-nine-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-ten-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-page-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-knight-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-queen-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-king-of-swords-meaning-minor-arcana-tarot-card-meanings",
  "/the-ace-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-two-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-three-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-four-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-five-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-six-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-seven-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-eight-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-nine-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-ten-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-page-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-knight-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-queen-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
  "/the-king-of-pentacles-meaning-minor-arcana-tarot-card-meanings",
];
export const TarotCardNamesCard = [
  "The Fool Card",
  "The Magician Card",
  "The High Priestess Card",
  "The Empress Card",
  "The Emperor Card",
  "The Hierophant Card",
  "The Lovers Card",
  "The Chariot Card",
  "Strength Card",
  "The Hermit Card",
  "Wheel of Fortune Card",
  "Justice Card",
  "The Hanged Man Card",
  "Death Card",
  "Temperance Card",
  "The Devil Card",
  "The Tower Card",
  "The Star Card",
  "The Moon Card",
  "The Sun Card",
  "Judgment Card",
  "The World Card",
  "Ace of Wands Card",
  "Two of Wands Card",
  "Three of Wands Card",
  "Four of Wands Card",
  "Five of Wands Card",
  "Six of Wands Card",
  "Seven of Wands Card",
  "Eight of Wands Card",
  "Nine of Wands Card",
  "Ten of Wands Card",
  "Page of Wands Card",
  "Knight of Wands Card",
  "Queen of Wands Card",
  "King of Wands Card",
  "Ace of Cups Card",
  "Two of Cups Card",
  "Three of Cups Card",
  "Four of Cups Card",
  "Five of Cups Card",
  "Six of Cups Card",
  "Seven of Cups Card",
  "Eight of Cups Card",
  "Nine of Cups Card",
  "Ten of Cups Card",
  "Page of Cups Card",
  "Knight of Cups Card",
  "Queen of Cups Card",
  "King of Cups Card",
  "Ace of Swords Card",
  "Two of Swords Card",
  "Three of Swords Card",
  "Four of Swords Card",
  "Five of Swords Card",
  "Six of Swords Card",
  "Seven of Swords Card",
  "Eight of Swords Card",
  "Nine of Swords Card",
  "Ten of Swords Card",
  "Page of Swords Card",
  "Knight of Swords Card",
  "Queen of Swords Card",
  "King of Swords Card",
  "Ace of Pentacles Card",
  "Two of Pentacles Card",
  "Three of Pentacles Card",
  "Four of Pentacles Card",
  "Five of Pentacles Card",
  "Six of Pentacles Card",
  "Seven of Pentacles Card",
  "Eight of Pentacles Card",
  "Nine of Pentacles Card",
  "Ten of Pentacles Card",
  "Page of Pentacles Card",
  "Knight of Pentacles Card",
  "Queen of Pentacles Card",
  "King of Pentacles Card",
];

const TarotCardsMeaningSymbolism = [
  "The Fool - Meaning & Symbolism",
  "The Magician - Meaning & Symbolism",
  "The High Priestess - Meaning & Symbolism",
  "The Empress - Meaning & Symbolism",
  "The Emperor - Meaning & Symbolism",
  "The Hierophant - Meaning & Symbolism",
  "The Lovers - Meaning & Symbolism",
  "The Chariot - Meaning & Symbolism",
  "Strength - Meaning & Symbolism",
  "The Hermit - Meaning & Symbolism",
  "Wheel of Fortune - Meaning & Symbolism",
  "Justice - Meaning & Symbolism",
  "The Hanged Man - Meaning & Symbolism",
  "Death - Meaning & Symbolism",
  "Temperance - Meaning & Symbolism",
  "The Devil - Meaning & Symbolism",
  "The Tower - Meaning & Symbolism",
  "The Star - Meaning & Symbolism",
  "The Moon - Meaning & Symbolism",
  "The Sun - Meaning & Symbolism",
  "Judgment - Meaning & Symbolism",
  "The World - Meaning & Symbolism",
  "Ace of Wands - Meaning & Symbolism",
  "Two of Wands - Meaning & Symbolism",
  "Three of Wands - Meaning & Symbolism",
  "Four of Wands - Meaning & Symbolism",
  "Five of Wands - Meaning & Symbolism",
  "Six of Wands - Meaning & Symbolism",
  "Seven of Wands - Meaning & Symbolism",
  "Eight of Wands - Meaning & Symbolism",
  "Nine of Wands - Meaning & Symbolism",
  "Ten of Wands - Meaning & Symbolism",
  "Page of Wands - Meaning & Symbolism",
  "Knight of Wands - Meaning & Symbolism",
  "Queen of Wands - Meaning & Symbolism",
  "King of Wands - Meaning & Symbolism",
  "Ace of Cups - Meaning & Symbolism",
  "Two of Cups - Meaning & Symbolism",
  "Three of Cups - Meaning & Symbolism",
  "Four of Cups - Meaning & Symbolism",
  "Five of Cups - Meaning & Symbolism",
  "Six of Cups - Meaning & Symbolism",
  "Seven of Cups - Meaning & Symbolism",
  "Eight of Cups - Meaning & Symbolism",
  "Nine of Cups - Meaning & Symbolism",
  "Ten of Cups - Meaning & Symbolism",
  "Page of Cups - Meaning & Symbolism",
  "Knight of Cups - Meaning & Symbolism",
  "Queen of Cups - Meaning & Symbolism",
  "King of Cups - Meaning & Symbolism",
  "Ace of Swords - Meaning & Symbolism",
  "Two of Swords - Meaning & Symbolism",
  "Three of Swords - Meaning & Symbolism",
  "Four of Swords - Meaning & Symbolism",
  "Five of Swords - Meaning & Symbolism",
  "Six of Swords - Meaning & Symbolism",
  "Seven of Swords - Meaning & Symbolism",
  "Eight of Swords - Meaning & Symbolism",
  "Nine of Swords - Meaning & Symbolism",
  "Ten of Swords - Meaning & Symbolism",
  "Page of Swords - Meaning & Symbolism",
  "Knight of Swords - Meaning & Symbolism",
  "Queen of Swords - Meaning & Symbolism",
  "King of Swords - Meaning & Symbolism",
  "Ace of Pentacles - Meaning & Symbolism",
  "Two of Pentacles - Meaning & Symbolism",
  "Three of Pentacles - Meaning & Symbolism",
  "Four of Pentacles - Meaning & Symbolism",
  "Five of Pentacles - Meaning & Symbolism",
  "Six of Pentacles - Meaning & Symbolism",
  "Seven of Pentacles - Meaning & Symbolism",
  "Eight of Pentacles - Meaning & Symbolism",
  "Nine of Pentacles - Meaning & Symbolism",
  "Ten of Pentacles - Meaning & Symbolism",
  "Page of Pentacles - Meaning & Symbolism",
  "Knight of Pentacles - Meaning & Symbolism",
  "Queen of Pentacles - Meaning & Symbolism",
  "King of Pentacles - Meaning & Symbolism",
];
export const TarotCardsMinorArcanaSuits: {
  number: number;
  name: string;
  image: string;
  route: string;
  alt: string;
  tooltip: string;
  description: JSX.Element;
  href: JSX.Element;
}[] = [
  {
    number: 0,
    name: "Wands: The Element of Fire",
    image: TarotCardsMinorArcanaSuitsAces[0],
    route: RoutesSuitMinorArcana[0],
    alt: "Read about Suit of Cups Meaning & Symbolism",
    tooltip: "Read about Suit of Cups Meaning & Symbolism",
    description: (
      <p className={styles.paragraph}>
        <Link
          to={RoutesSuitMinorArcana[0]}
          className={styles.Link}
          title="Read about Suit of Cups Meaning & Symbolism"
        >
          Wands{" "}
        </Link>
        are the suit of inspiration, action, and the element of fire. They
        represent the spark of creativity, passion, and the initiation of new
        projects. Wands are associated with the ambitious, enthusiastic, and
        adventurous aspects of life.
      </p>
    ),
    href: (
      <Link
        to={RoutesSuitMinorArcana[0]}
        className={styles.Link}
        title="Read about Suit of Cups Meaning & Symbolism"
      >
        Read about Suit of Cups Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 1,
    name: "Cups: The Element of Water",
    image: TarotCardsMinorArcanaSuitsAces[1],
    route: RoutesSuitMinorArcana[1],
    alt: "Read about Suit of Cups Meaning & Symbolism",
    tooltip: "Read about Suit of Cups Meaning & Symbolism",
    description: (
      <p className={styles.paragraph}>
        <Link
          to={RoutesSuitMinorArcana[1]}
          className={styles.Link}
          title="Read about Suit of Cups Meaning & Symbolism"
        >
          Cups{" "}
        </Link>
        symbolize emotions, relationships, and the element of water. They delve
        into the realm of feelings, love, and connections with others. The Cups
        suit invites us to explore the depths of our hearts.
      </p>
    ),
    href: (
      <Link
        to={RoutesSuitMinorArcana[1]}
        className={styles.Link}
        title="Read about Suit of Cups Meaning & Symbolism"
      >
        Read about Suit of Cups Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 2,
    name: "Swords: The Element of Air",
    image: TarotCardsMinorArcanaSuitsAces[2],
    route: RoutesSuitMinorArcana[2],
    alt: "Read about Suit of Swords Meaning & Symbolism",
    tooltip: "Read about Suit of Swords Meaning & Symbolism",
    description: (
      <p className={styles.paragraph}>
        <Link
          to={RoutesSuitMinorArcana[2]}
          className={styles.Link}
          title="Read about Suit of Swords Meaning & Symbolism"
        >
          Swords{" "}
        </Link>
        represent the intellect, thoughts, and the element of air. This suit
        delves into the realm of the mind, addressing challenges, conflicts, and
        the power of clarity and insight.
      </p>
    ),
    href: (
      <Link
        to={RoutesSuitMinorArcana[2]}
        className={styles.Link}
        title="Read about Suit of Swords Meaning & Symbolism"
      >
        Read about Suit of Swords Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 3,
    name: "Pentacles (Coins): The Element of Earth",
    image: TarotCardsMinorArcanaSuitsAces[3],
    route: RoutesSuitMinorArcana[3],
    alt: "Read about Suit of Pentacles Meaning & Symbolism",
    tooltip: "Read about Suit of Pentacles Meaning & Symbolism",
    description: (
      <p className={styles.paragraph}>
        <Link
          to={RoutesSuitMinorArcana[3]}
          className={styles.Link}
          title="Read about Suit of Pentacles Meaning & Symbolism"
        >
          Pentacles{" "}
        </Link>
        are tied to the material world, finances, and the element of earth. This
        suit emphasizes our physical existence, addressing prosperity, work, and
        the tangible aspects of life.
      </p>
    ),
    href: (
      <Link
        to={RoutesSuitMinorArcana[3]}
        className={styles.Link}
        title="Read about Suit of Pentacles Meaning & Symbolism"
      >
        Read about Suit of Pentacles Meaning & Symbolism
      </Link>
    ),
  },
];

export const TarotCardsDataAll: {
  number: number;
  name: string;
  image: string;
  route: string;
  alt: string;
  tooltip: string;
  description: JSX.Element;
  href: JSX.Element;
}[] = [
  {
    number: 0,
    name: "The Fool: The Beginning of the Journey",
    image: MajorArcanaCards[0],
    route: TarotRoutes[0],
    alt: TarotCardNamesCard[0],
    tooltip: TarotCardNamesCard[0],
    description: (
      <p className={styles.paragraph}>
        The journey begins with{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[0]}
        >
          The Fool
        </Link>
        , a card that symbolizes new beginnings, spontaneity, and faith in the
        universe.<br></br>
        <br></br> The Fool encourages us to step into the unknown with courage
        and an open heart.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[0]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[0]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 1,
    name: "The Magician: Manifestation of Will",
    image: MajorArcanaCards[1],
    route: TarotRoutes[1],
    alt: TarotCardNamesCard[1],
    tooltip: TarotCardNamesCard[1],
    description: (
      <p className={styles.paragraph}>
        Following{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[1]}
        >
          The Fool
        </Link>
        , we encounter{" "}
        <Link
          to={TarotRoutes[1]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[1]}
        >
          The Magician
        </Link>
        . A card of manifestation and resourcefulness, The Magician reminds us
        that we have all the tools we need to shape our destiny.
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
  },
  {
    number: 2,
    name: "The High Priestess: Intuition and Mystery",
    image: MajorArcanaCards[2],
    route: TarotRoutes[2],
    alt: TarotCardNamesCard[2],
    tooltip: TarotCardNamesCard[2],
    description: (
      <p className={styles.paragraph}>
        The third stop on our journey is{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[2]}
        >
          The High Priestess
        </Link>
        , She represents intuition, mystery, and spiritual enlightenment. The
        High Priestess urges us to trust our instincts and tune into our inner
        wisdom.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[2]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[2]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 3,
    name: "The Empress: Fertility and Abundance",
    image: MajorArcanaCards[3],
    route: TarotRoutes[3],
    alt: TarotCardNamesCard[3],
    tooltip: TarotCardNamesCard[3],
    description: (
      <p className={styles.paragraph}>
        Moving forward, we come across{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[3]}
        >
          The Empress
        </Link>
        , a symbol of love, beauty, fertility, and abundance. She encourages us
        to embrace our sensuality, nurture our relationships, and appreciate the
        beauty around us.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[3]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[3]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 4,
    name: "The Emperor: Authority and Structure",
    image: MajorArcanaCards[4],
    route: TarotRoutes[4],
    alt: TarotCardNamesCard[4],
    tooltip: TarotCardNamesCard[4],
    description: (
      <p className={styles.paragraph}>
        Next up is{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[4]}
        >
          The Emperor
        </Link>
        , who stands for authority, structure, and control. The Emperor teaches
        us about discipline and leadership, and the importance of order in
        managing our lives.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[4]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[4]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 5,
    name: "The Hierophant: Tradition and Belief Systems",
    image: MajorArcanaCards[5],
    route: TarotRoutes[5],
    alt: TarotCardNamesCard[5],
    tooltip: TarotCardNamesCard[5],
    description: (
      <p className={styles.paragraph}>
        After The Emperor, we meet{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[5]}
        >
          The Hierophant
        </Link>
        , a card representing tradition, belief systems, and conformity. The
        Hierophant invites us to examine our beliefs and values, and to consider
        the role of tradition and structure in our lives.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[5]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[5]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 6,
    name: "The Lovers: Love and Choices",
    image: MajorArcanaCards[6],
    route: TarotRoutes[6],
    alt: TarotCardNamesCard[6],
    tooltip: TarotCardNamesCard[6],
    description: (
      <p className={styles.paragraph}>
        We now delve into
        <Link
          to={TarotRoutes[6]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[6]}
        >
          The Lovers
        </Link>
        , a card symbolizing love, relationships, and choices. The Lovers card
        challenges us to make decisions that align with our values and desires,
        ultimately leading us on a path of emotional connection and harmony.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[6]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[6]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 7,
    name: "The Chariot: Determination and Victory",
    image: MajorArcanaCards[7],
    route: TarotRoutes[7],
    alt: TarotCardNamesCard[7],
    tooltip: TarotCardNamesCard[7],
    description: (
      <p className={styles.paragraph}>
        Our journey continues with{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[7]}
        >
          The Chariot
        </Link>
        , a card of determination, control, and victory. The Chariot represents
        the triumph of willpower over obstacles, urging us to steer our lives
        with focus and drive, leading to success and achievement.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[7]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[7]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 8,
    name: "Strength: Inner Power and Courage",
    image: MajorArcanaCards[8],
    route: TarotRoutes[8],
    alt: TarotCardNamesCard[8],
    tooltip: TarotCardNamesCard[8],
    description: (
      <p className={styles.paragraph}>
        As we progress, we encounter{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[8]}
        >
          Strength
        </Link>
        , a card symbolizing inner power, courage, and resilience.{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[8]}
        >
          Strength
        </Link>{" "}
        calls upon us to tap into our inner strength, showing that gentleness
        and patience can overcome even the fiercest challenges, fostering
        balance and inner fortitude.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[8]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[8]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 9,
    name: "The Hermit: The Path of Solitude",
    image: MajorArcanaCards[9],
    route: TarotRoutes[9],
    alt: TarotCardNamesCard[9],
    tooltip: TarotCardNamesCard[9],
    description: (
      <p className={styles.paragraph}>
        Our journey takes a solitary turn with{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[9]}
        >
          The Hermit
        </Link>
        , This card signifies introspection, solitude, and introspective
        searching. The Hermit encourages us to retreat from the hustle and
        bustle of daily life to seek inner peace and self-awareness.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[9]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[9]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 10,
    name: "The Wheel of Fortune: Cycles and Fate ",
    image: MajorArcanaCards[10],
    route: TarotRoutes[10],
    alt: TarotCardNamesCard[10],
    tooltip: TarotCardNamesCard[10],
    description: (
      <p className={styles.paragraph}>
        Next, we are greeted by the revolving{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[10]}
        >
          Wheel of Fortune
        </Link>
        , symbolizing cycles, luck, and destiny. This card teaches us that life
        is a constant cycle of changes and that we should embrace the good and
        the bad as part of our personal growth.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[10]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[10]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 11,
    name: "Justice: Truth and Balance",
    image: MajorArcanaCards[11],
    route: TarotRoutes[11],
    alt: TarotCardNamesCard[11],
    tooltip: TarotCardNamesCard[11],
    description: (
      <p className={styles.paragraph}>
        The scales of{" "}
        <Link
          to={TarotRoutes[11]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[11]}
        >
          Justice
        </Link>{" "}
        are a reminder of truth, fairness, and law. This card encourages us to
        strive for balance and to make decisions with honesty and integrity.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[11]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[11]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 12,
    name: "The Hanged Man: Letting Go and New Perspectives",
    image: MajorArcanaCards[12],
    route: TarotRoutes[12],
    alt: TarotCardNamesCard[12],
    tooltip: TarotCardNamesCard[12],
    description: (
      <p className={styles.paragraph}>
        Our path leads us to{" "}
        <Link
          to={TarotRoutes[12]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[12]}
        >
          The Hanged Man
        </Link>
        , a symbol of surrender, letting go, and new perspectives. This card
        teaches us the value of sacrifice and viewing things from a different
        perspective.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[12]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[12]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 13,
    name: "Death: Endings and New Beginnings",
    image: MajorArcanaCards[13],
    route: TarotRoutes[13],
    alt: TarotCardNamesCard[13],
    tooltip: TarotCardNamesCard[13],
    description: (
      <p className={styles.paragraph}>
        Despite its ominous name,{" "}
        <Link
          to={TarotRoutes[13]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[13]}
        >
          Death
        </Link>{" "}
        is a card of transformation, endings, and new beginnings. Much like a
        caterpillar morphing into a butterfly, Death reminds us that change is a
        necessary part of life.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[13]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[13]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 14,
    name: "Temperance: Harmony and Moderation",
    image: MajorArcanaCards[14],
    route: TarotRoutes[14],
    alt: TarotCardNamesCard[14],
    tooltip: TarotCardNamesCard[14],
    description: (
      <p className={styles.paragraph}>
        The balancing act continues with{" "}
        <Link
          to={TarotRoutes[14]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[14]}
        >
          Temperance
        </Link>
        , a card symbolizing harmony, balance, and moderation. Temperance nudges
        us to seek balance in our lives and to merge our unconscious and
        conscious selves.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[14]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[14]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 15,
    name: "The Devil: Bondage and Materialism",
    image: MajorArcanaCards[15],
    route: TarotRoutes[15],
    alt: TarotCardNamesCard[15],
    tooltip: TarotCardNamesCard[15],
    description: (
      <p className={styles.paragraph}>
        Our journey darkens with{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[15]}
        >
          The Devil
        </Link>
        , a symbol of bondage, materialism, and temptation. However daunting,
        The Devil teaches us about the dangers of excess and the importance of
        breaking free from our self-imposed chains.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[15]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[15]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 16,
    name: "The Tower: Upheaval and Awakening",
    image: MajorArcanaCards[16],
    route: TarotRoutes[16],
    alt: TarotCardNamesCard[16],
    tooltip: TarotCardNamesCard[16],
    description: (
      <p className={styles.paragraph}>
        Next, we face{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[16]}
        >
          The Tower
        </Link>
        , a card of upheaval, sudden change, and awakening. The Tower's
        destruction signals an inevitable, yet necessary, change or revelation
        that is to occur.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[16]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[16]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 17,
    name: "The Star: Hope and Inspiration",
    image: MajorArcanaCards[17],
    route: TarotRoutes[17],
    alt: TarotCardNamesCard[17],
    tooltip: TarotCardNamesCard[17],
    description: (
      <p className={styles.paragraph}>
        From the wreckage of{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[16]}
        >
          The Tower
        </Link>
        , we find hope in{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[17]}
        >
          The Star
        </Link>
        . This card is a beacon of inspiration, hope, and faith in the future.
        The Star encourages us to keep our faith during tough times and to
        remain hopeful for what's to come.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[17]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[17]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 18,
    name: "The Moon: Illusion and Intuition",
    image: MajorArcanaCards[18],
    route: TarotRoutes[18],
    alt: TarotCardNamesCard[18],
    tooltip: TarotCardNamesCard[18],
    description: (
      <p className={styles.paragraph}>
        We then wander under{" "}
        <Link
          to={TarotRoutes[18]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[18]}
        >
          The Moon
        </Link>
        , a card of illusion, intuition, and the subconscious. The Moon urges us
        to trust our intuition and to pay attention to our dreams and
        subconscious.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[18]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[18]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 19,
    name: "The Sun: Positivity and Success",
    image: MajorArcanaCards[19],
    route: TarotRoutes[19],
    alt: TarotCardNamesCard[19],
    tooltip: TarotCardNamesCard[19],
    description: (
      <p className={styles.paragraph}>
        As we near the end,{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[19]}
        >
          The Sun
        </Link>
        , shines brightly, bringing positivity, success, and vitality.{" "}
        <Link
          to={TarotRoutes[19]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[19]}
        >
          The Sun's
        </Link>
        light brings clarity, truth, and the shedding of light on what was once
        hidden.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[19]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[19]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 20,
    name: "Judgement: Reflection and Absolution",
    image: MajorArcanaCards[20],
    route: TarotRoutes[20],
    alt: TarotCardNamesCard[20],
    tooltip: TarotCardNamesCard[20],
    description: (
      <p className={styles.paragraph}>
        The final stages of our journey bring us to{" "}
        <Link
          to={TarotRoutes[20]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[20]}
        >
          Judgement
        </Link>
        , a card of reflection, absolution, and rebirth. Judgement calls us to
        review our past, forgive our mistakes, and move forward with a renewed
        sense of purpose.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[20]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[20]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 21,
    name: "The World: Completion and Harmony",
    image: MajorArcanaCards[21],
    route: TarotRoutes[21],
    alt: TarotCardNamesCard[21],
    tooltip: TarotCardNamesCard[21],
    description: (
      <p className={styles.paragraph}>
        Our Major Arcana journey concludes with{" "}
        <Link
          to={TarotRoutes[21]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[21]}
        >
          The World
        </Link>
        , the card of fulfillment, completion, and harmony. The World signifies
        the end of one journey and the beginning of another, marking the
        cyclical nature of life.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[21]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[21]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 22,
    name: "Ace of Wands: Inspiration and New Beginnings",
    image: TarotCardsPhotosAll[22],
    route: TarotRoutes[22],
    alt: TarotCardNamesCard[22],
    tooltip: TarotCardNamesCard[22],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[22]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[22]}
        >
          Ace of Wands
        </Link>
        , represents the spark of inspiration and the start of new ventures.
        It's a card of creativity and potential, urging us to seize
        opportunities and channel our passions.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[22]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[22]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 23,
    name: "Two of Wands: Planning and Vision",
    image: TarotCardsPhotosAll[23],
    route: TarotRoutes[23],
    alt: TarotCardNamesCard[23],
    tooltip: TarotCardNamesCard[23],
    description: (
      <p className={styles.paragraph}>
        Next, we encounter the{" "}
        <Link
          to={TarotRoutes[23]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[23]}
        >
          Two of Wands
        </Link>
        , a card that signifies planning, vision, and foresight. It encourages
        us to take a step back, assess our long-term goals, and make strategic
        decisions.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[23]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[23]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 24,
    name: "Three of Wands: Expansion and Exploration",
    image: TarotCardsPhotosAll[24],
    route: TarotRoutes[24],
    alt: TarotCardNamesCard[24],
    tooltip: TarotCardNamesCard[24],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[24]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[24]}
        >
          Three of Wands
        </Link>
        , represents expansion and exploration. It suggests that our efforts are
        paying off, and it's time to broaden our horizons. This card reminds us
        to embrace opportunities for growth and adventure.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[24]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[24]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 25,
    name: "Four of Wands: Celebration and Harmony",
    image: TarotCardsPhotosAll[25],
    route: TarotRoutes[25],
    alt: TarotCardNamesCard[25],
    tooltip: TarotCardNamesCard[25],
    description: (
      <p className={styles.paragraph}>
        Moving on to the{" "}
        <Link
          to={TarotRoutes[25]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[25]}
        >
          Four of Wands
        </Link>
        , it symbolizes celebration, harmony, and achievement. This card
        signifies a moment of joy and unity, encouraging us to savor our
        accomplishments and connect with loved ones.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[25]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[25]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 26,
    name: "Five of Wands: Conflict and Competition",
    image: TarotCardsPhotosAll[26],
    route: TarotRoutes[26],
    alt: TarotCardNamesCard[26],
    tooltip: TarotCardNamesCard[26],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[26]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[26]}
        >
          Five of Wands
        </Link>
        , symbolizes conflict, competition, and challenges. It's a card that
        reminds us to navigate conflicts with integrity and consider different
        perspectives to find resolution.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[26]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[26]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 27,
    name: "Six of Wands: Victory and Recognition",
    image: TarotCardsPhotosAll[27],
    route: TarotRoutes[27],
    alt: TarotCardNamesCard[27],
    tooltip: TarotCardNamesCard[27],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[27]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[27]}
        >
          Six of Wands
        </Link>
        represents victory, recognition, and public acclaim. It signifies a time
        when your efforts are acknowledged and celebrated. This card encourages
        you to bask in your achievements while remaining humble.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[27]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[27]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 28,
    name: "Seven of Wands: Defensiveness and Courage",
    image: TarotCardsPhotosAll[28],
    route: TarotRoutes[28],
    alt: TarotCardNamesCard[28],
    tooltip: TarotCardNamesCard[28],
    description: (
      <p className={styles.paragraph}>
        Moving forward, the{" "}
        <Link
          to={TarotRoutes[28]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[28]}
        >
          Seven of Wands
        </Link>{" "}
        signifies defensiveness, courage, and standing your ground. It reminds
        you to defend your beliefs and principles, even when facing opposition.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[28]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[28]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 29,
    name: "Eight of Wands: Swiftness and Progress",
    image: TarotCardsPhotosAll[29],
    route: TarotRoutes[29],
    alt: TarotCardNamesCard[29],
    tooltip: TarotCardNamesCard[29],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[29]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[29]}
        >
          Eight of Wands
        </Link>{" "}
        represents swiftness, progress, and forward momentum. This card suggests
        that things are moving quickly, and it's a good time to take action and
        make the most of opportunities.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[29]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[29]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 30,
    name: "Nine of Wands: Resilience and Endurance",
    image: TarotCardsPhotosAll[30],
    route: TarotRoutes[30],
    alt: TarotCardNamesCard[30],
    tooltip: TarotCardNamesCard[30],
    description: (
      <p className={styles.paragraph}>
        Next, we have the{" "}
        <Link
          to={TarotRoutes[30]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[30]}
        >
          Nine of Wands
        </Link>{" "}
        symbolizing resilience, endurance, and determination. It encourages you
        to persevere in the face of challenges and trust that you have the
        strength to overcome obstacles.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[30]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[30]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 31,
    name: "Ten of Wands: Burden and Responsibility",
    image: TarotCardsPhotosAll[31],
    route: TarotRoutes[31],
    alt: TarotCardNamesCard[31],
    tooltip: TarotCardNamesCard[31],
    description: (
      <p className={styles.paragraph}>
        Coming the,{" "}
        <Link
          to={TarotRoutes[31]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[31]}
        >
          Ten of Wands
        </Link>{" "}
        signifies burden, responsibility, and carrying a heavy load. It reminds
        you to assess your commitments and consider whether it's time to
        delegate or let go of some responsibilities.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[31]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[31]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 32,
    name: "Page of Wands: Exploration and Enthusiasm",
    image: TarotCardsPhotosAll[32],
    route: TarotRoutes[32],
    alt: TarotCardNamesCard[32],
    tooltip: TarotCardNamesCard[32],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[32]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[32]}
        >
          Page of Wands
        </Link>{" "}
        represents youthful enthusiasm, exploration, and the pursuit of new
        interests. It encourages you to embrace your curiosity and approach life
        with a sense of adventure.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[32]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[32]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 33,
    name: "Knight of Wands: Action and Ambition",
    image: TarotCardsPhotosAll[33],
    route: TarotRoutes[33],
    alt: TarotCardNamesCard[33],
    tooltip: TarotCardNamesCard[33],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[33]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[33]}
        >
          Knight of Wands
        </Link>{" "}
        embodies action, ambition, and a fearless spirit. This card signifies a
        time when you're ready to charge forward with your goals and pursue your
        passions with vigor.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[33]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[33]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 34,
    name: "Queen of Wands: Confidence and Leadership",
    image: TarotCardsPhotosAll[34],
    route: TarotRoutes[34],
    alt: TarotCardNamesCard[34],
    tooltip: TarotCardNamesCard[34],
    description: (
      <p className={styles.paragraph}>
        Next, we have the{" "}
        <Link
          to={TarotRoutes[34]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[34]}
        >
          Queen of Wands
        </Link>
        , symbolizing confidence, leadership, and charisma. This card represents
        a person who is strong-willed, creative, and able to inspire others to
        follow their vision.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[34]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[34]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 35,
    name: "King of Wands: Vision and Influence",
    image: TarotCardsPhotosAll[35],
    route: TarotRoutes[35],
    alt: TarotCardNamesCard[35],
    tooltip: TarotCardNamesCard[35],
    description: (
      <p className={styles.paragraph}>
        Finally, the{" "}
        <Link
          to={TarotRoutes[35]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[35]}
        >
          King of Wands
        </Link>{" "}
        embodies vision, influence, and mastery. This card signifies someone who
        has achieved a high level of expertise in their field and can make
        significant positive changes through their leadership and creativity.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[35]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[35]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 36,
    name: "Ace of Cups: Emotions and New Beginnings",
    image: TarotCardsPhotosAll[36],
    route: TarotRoutes[36],
    alt: TarotCardNamesCard[36],
    tooltip: TarotCardNamesCard[36],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[36]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[36]}
        >
          Ace of Cups
        </Link>{" "}
        represents the wellspring of emotions and new beginnings in matters of
        the heart. It signifies the start of a deep emotional connection,
        whether in a relationship or a newfound sense of self-love.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[36]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[36]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 37,
    name: "Two of Cups: Connection and Partnership",
    image: TarotCardsPhotosAll[37],
    route: TarotRoutes[37],
    alt: TarotCardNamesCard[37],
    tooltip: TarotCardNamesCard[37],
    description: (
      <p className={styles.paragraph}>
        Next, we have the{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[37]}
        >
          Two of Cups
        </Link>
        , which symbolizes deep emotional connections, love, and partnerships.
        This card encourages you to explore the bonds you share with others and
        nurture your relationships.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[37]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[37]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 38,
    name: "Three of Cups: Celebration and Joy",
    image: TarotCardsPhotosAll[38],
    route: TarotRoutes[38],
    alt: TarotCardNamesCard[38],
    tooltip: TarotCardNamesCard[38],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[38]}
        >
          Three of Cups
        </Link>{" "}
        signifies celebration, joy, and gatherings with friends and loved ones.
        It encourages you to embrace moments of happiness, unity, and shared
        experiences.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[38]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[38]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 39,
    name: "Four of Cups: Contemplation and Restlessness",
    image: TarotCardsPhotosAll[39],
    route: TarotRoutes[39],
    alt: TarotCardNamesCard[39],
    tooltip: TarotCardNamesCard[39],
    description: (
      <p className={styles.paragraph}>
        Coming{" "}
        <Link
          to={TarotRoutes[39]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[39]}
        >
          Four of Cups
        </Link>{" "}
        is a card of introspection, contemplation, and a sense of restlessness.
        It reminds you to reevaluate your emotions, be open to new experiences,
        and not take your blessings for granted.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[39]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[39]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 40,
    name: "Five of Cups: Loss and Grief",
    image: TarotCardsPhotosAll[40],
    route: TarotRoutes[40],
    alt: TarotCardNamesCard[40],
    tooltip: TarotCardNamesCard[40],
    description: (
      <p className={styles.paragraph}>
        Moving on to the{" "}
        <Link
          to={TarotRoutes[40]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[40]}
        >
          Five of Cups
        </Link>
        , it symbolizes feelings of loss, grief, and disappointment. This card
        encourages you to process your emotions, acknowledge your pain, and seek
        a silver lining in challenging situations.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[40]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[40]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 41,
    name: "Six of Cups: Nostalgia and Reunion",
    image: TarotCardsPhotosAll[41],
    route: TarotRoutes[41],
    alt: TarotCardNamesCard[41],
    tooltip: TarotCardNamesCard[41],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[41]}
        >
          Six of Cups
        </Link>{" "}
        brings a wave of nostalgia, childhood memories, and innocence. It
        prompts you to reflect on your past, reconnect with the people who
        shaped your life, and find comfort in cherished memories.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[41]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[41]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 42,
    name: "Seven of Cups: Choices and Illusions",
    image: TarotCardsPhotosAll[42],
    route: TarotRoutes[42],
    alt: TarotCardNamesCard[42],
    tooltip: TarotCardNamesCard[42],
    description: (
      <p className={styles.paragraph}>
        Next, we have the{" "}
        <Link
          to={TarotRoutes[42]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[42]}
        >
          Seven of Cups
        </Link>
        , which represents choices, dreams, and illusions. It advises you to
        carefully consider your options and discern between realistic
        aspirations and fanciful fantasies.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[42]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[42]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 43,
    name: "Eight of Cups: Seeking Fulfillment and Change",
    image: TarotCardsPhotosAll[43],
    route: TarotRoutes[43],
    alt: TarotCardNamesCard[43],
    tooltip: TarotCardNamesCard[43],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[43]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[43]}
        >
          Eight of Cups
        </Link>{" "}
        signifies a journey of seeking fulfillment and emotional growth. It
        encourages you to leave behind what no longer serves you and embark on a
        quest for deeper meaning and satisfaction.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[43]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[43]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 44,
    name: "Nine of Cups: Contentment and Wishes Fulfilled",
    image: TarotCardsPhotosAll[44],
    route: TarotRoutes[44],
    alt: TarotCardNamesCard[44],
    tooltip: TarotCardNamesCard[44],
    description: (
      <p className={styles.paragraph}>
        Subsequent{" "}
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[44]}
        >
          Nine of Cups
        </Link>
        is often called the "
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[44]}
        >
          Wish Card
        </Link>
        " symbolizing contentment, emotional abundance, and wishes coming true.
        It reminds you to savor the moments of joy and gratitude in your life.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[44]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[44]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 45,
    name: "Ten of Cups: Harmony and Family",
    image: TarotCardsPhotosAll[45],
    route: TarotRoutes[45],
    alt: TarotCardNamesCard[45],
    tooltip: TarotCardNamesCard[45],
    description: (
      <p className={styles.paragraph}>
        Succeeding, the{" "}
        <Link
          to={TarotRoutes[45]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[45]}
        >
          Ten of Cups
        </Link>{" "}
        represents ultimate emotional fulfillment, harmony, and happy family
        life. It signifies a deep sense of love, unity, and domestic bliss.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[45]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[45]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 46,
    name: "Page of Cups: Creativity and Intuition",
    image: TarotCardsPhotosAll[46],
    route: TarotRoutes[46],
    alt: TarotCardNamesCard[46],
    tooltip: TarotCardNamesCard[46],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[46]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[46]}
        >
          Page of Cups
        </Link>{" "}
        exhibit creativity, intuition, and a gentle, imaginative spirit. This
        card encourages you to explore your artistic and emotional side, and to
        trust your instincts.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[46]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[46]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 47,
    name: "Knight of Cups: Romance and Idealism",
    image: TarotCardsPhotosAll[47],
    route: TarotRoutes[47],
    alt: TarotCardNamesCard[47],
    tooltip: TarotCardNamesCard[47],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[47]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[47]}
        >
          Page of Cups
        </Link>{" "}
        personify romantic ideals, emotional pursuit, and the quest for love.
        This card signifies a period when you may be driven by your emotions and
        passions, seeking love or creative inspiration.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[47]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[47]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 48,
    name: "Queen of Cups: Compassion and Intuition",
    image: TarotCardsPhotosAll[48],
    route: TarotRoutes[48],
    alt: TarotCardNamesCard[48],
    tooltip: TarotCardNamesCard[48],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[48]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[48]}
        >
          Queen of Cups
        </Link>{" "}
        embodies compassion, intuition, and deep emotional understanding. This
        card represents a person who is nurturing, empathetic, and deeply
        connected to their feelings.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[48]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[48]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 49,
    name: "King of Cups: Emotional Mastery and Wisdom",
    image: TarotCardsPhotosAll[49],
    route: TarotRoutes[49],
    alt: TarotCardNamesCard[49],
    tooltip: TarotCardNamesCard[49],
    description: (
      <p className={styles.paragraph}>
        Finally, the{" "}
        <Link
          to={TarotRoutes[49]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[49]}
        >
          Queen of Cups
        </Link>{" "}
        symbolizes emotional mastery, wisdom, and emotional leadership. This
        card represents a person who is emotionally balanced, empathetic, and
        able to provide guidance and support to others.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[49]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[49]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 50,
    name: "Ace of Swords: Clarity and Novel Perspectives",
    image: TarotCardsPhotosAll[50],
    route: TarotRoutes[50],
    alt: TarotCardNamesCard[50],
    tooltip: TarotCardNamesCard[50],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[50]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[50]}
        >
          Ace of Swords
        </Link>{" "}
        heralds clarity, fresh outlooks, and breakthroughs in thought. It marks
        the inception of a journey where you gain mental lucidity and cut
        through confusion to unearth truth and insight.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[50]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[50]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 51,
    name: "Two of Swords: Decision and Equilibrium",
    image: TarotCardsPhotosAll[51],
    route: TarotRoutes[51],
    alt: TarotCardNamesCard[51],
    tooltip: TarotCardNamesCard[51],
    description: (
      <p className={styles.paragraph}>
        Next in line is the{" "}
        <Link
          to={TarotRoutes[51]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[51]}
        >
          Two of Swords
        </Link>
        , epitomizing decisions, inner conflicts, and the call for equilibrium.
        This card prompts you to meticulously balance your options, even if it
        entails grappling with challenging choices.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[51]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[51]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 52,
    name: "Three of Swords: Heartbreak and Sorrow",
    image: TarotCardsPhotosAll[52],
    route: TarotRoutes[52],
    alt: TarotCardNamesCard[52],
    tooltip: TarotCardNamesCard[52],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[52]}
        >
          Three of Swords
        </Link>{" "}
        signals heartbreak, sorrow, and emotional anguish. It implies a period
        of grief and loss but also serves as a reminder that the path to healing
        starts with acknowledging your emotions.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[52]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[52]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 53,
    name: "Four of Swords: Rest and Recuperation",
    image: TarotCardsPhotosAll[53],
    route: TarotRoutes[53],
    alt: TarotCardNamesCard[53],
    tooltip: TarotCardNamesCard[53],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[53]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[53]}
        >
          Four of Swords
        </Link>{" "}
        signifies rest, recuperation, and introspection. It advises a pause, a
        chance to recharge, and an opportunity to reflect on your thoughts and
        actions prior to progress.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[53]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[53]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 54,
    name: "Four of Swords: Rest and Recuperation",
    image: TarotCardsPhotosAll[54],
    route: TarotRoutes[54],
    alt: TarotCardNamesCard[54],
    tooltip: TarotCardNamesCard[54],
    description: (
      <p className={styles.paragraph}>
        Shifting our focus to the{" "}
        <Link
          to={TarotRoutes[54]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[54]}
        >
          Five of Swords
        </Link>
        , it typifies conflict, confrontation, and victory at a steep price.
        This card reminds you to ponder the ethics of your actions and weigh
        whether triumph is worth the cost.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[54]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[54]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 55,
    name: "Six of Swords: Transition and Advancement",
    image: TarotCardsPhotosAll[55],
    route: TarotRoutes[55],
    alt: TarotCardNamesCard[55],
    tooltip: TarotCardNamesCard[55],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[55]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[55]}
        >
          Six of Swords
        </Link>{" "}
        marks a transition, an onward journey, and leaving turbulent waters
        behind. It suggests that you are progressing towards more tranquil and
        peaceful circumstances.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[55]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[55]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 56,
    name: "Seven of Swords: Deception and Strategy",
    image: TarotCardsPhotosAll[56],
    route: TarotRoutes[56],
    alt: TarotCardNamesCard[56],
    tooltip: TarotCardNamesCard[56],
    description: (
      <p className={styles.paragraph}>
        Next up, we have the{" "}
        <Link
          to={TarotRoutes[56]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[56]}
        >
          Seven of Swords
        </Link>
        , which embodies deception, strategic thinking, and the imperative to
        exercise caution. This card advises trusting your instincts and staying
        alert to concealed agendas.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[56]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[56]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 57,
    name: "Eight of Swords: Confinement and Self-Imposed Restriction",
    image: TarotCardsPhotosAll[57],
    route: TarotRoutes[57],
    alt: TarotCardNamesCard[57],
    tooltip: TarotCardNamesCard[57],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[57]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[57]}
        >
          Eight of Swords
        </Link>{" "}
        conveys confinement, self-imposed limitations, and the feeling of being
        ensnared by your thoughts. It encourages you to recognize that you
        possess the power to break free from mental constraints.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[57]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[57]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 58,
    name: "Nine of Swords: Anxiety and Distress",
    image: TarotCardsPhotosAll[58],
    route: TarotRoutes[58],
    alt: TarotCardNamesCard[58],
    tooltip: TarotCardNamesCard[58],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[58]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[58]}
        >
          Nine of Swords
        </Link>{" "}
        symbolizes anxiety, distress, and a troubled mind. It implies that your
        fears and concerns may be causing sleepless nights, but it's also a call
        to confront these worries and seek support.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[58]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[58]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 59,
    name: "Ten of Swords: Closure and Metamorphosis",
    image: TarotCardsPhotosAll[59],
    route: TarotRoutes[59],
    alt: TarotCardNamesCard[59],
    tooltip: TarotCardNamesCard[59],
    description: (
      <p className={styles.paragraph}>
        Alongside, the{" "}
        <Link
          to={TarotRoutes[59]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[59]}
        >
          Ten of Swords
        </Link>{" "}
        denotes closure, metamorphosis, and reaching the lowest point. It
        represents a phase of profound transformation and an opportunity for
        rebirth from the ashes.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[59]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[59]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 60,
    name: "Page of Swords: Curiosity and Intellectual Growth",
    image: TarotCardsPhotosAll[60],
    route: TarotRoutes[60],
    alt: TarotCardNamesCard[60],
    tooltip: TarotCardNamesCard[60],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[60]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[60]}
        >
          Page of Swords
        </Link>{" "}
        embodies curiosity, intellectual growth, and a thirst for knowledge. It
        encourages us to explore new ideas, communicate openly, and embrace a
        youthful and inquisitive spirit.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[60]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[60]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 61,
    name: "Knight of Swords: Determination and Swift Action",
    image: TarotCardsPhotosAll[61],
    route: TarotRoutes[61],
    alt: TarotCardNamesCard[61],
    tooltip: TarotCardNamesCard[61],
    description: (
      <p className={styles.paragraph}>
        In the{" "}
        <Link
          to={TarotRoutes[61]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[61]}
        >
          Knight of Swords
        </Link>
        , we find determination and swift action. It represents a focused and
        sometimes impulsive pursuit of goals, reminding us of the importance of
        decisiveness in our endeavors.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[61]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[61]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 62,
    name: "Queen of Swords: Wisdom and Clarity",
    image: TarotCardsPhotosAll[62],
    route: TarotRoutes[62],
    alt: TarotCardNamesCard[62],
    tooltip: TarotCardNamesCard[62],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[62]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[62]}
        >
          Queen of Swords
        </Link>{" "}
        embodies wisdom, clarity, and an analytical mindset. She encourages us
        to approach challenges with intelligence and reason while remaining fair
        and just.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[62]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[62]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 63,
    name: "King of Swords: Authority and Leadership",
    image: TarotCardsPhotosAll[63],
    route: TarotRoutes[63],
    alt: TarotCardNamesCard[63],
    tooltip: TarotCardNamesCard[63],
    description: (
      <p className={styles.paragraph}>
        Lastly, the{" "}
        <Link
          to={TarotRoutes[63]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[63]}
        >
          King of Swords
        </Link>{" "}
        represents authority, leadership, and mastery of the intellect. He
        reminds us to lead with integrity, make well-informed decisions, and
        embrace the responsibilities that come with leadership.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[63]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[63]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 64,
    name: "Ace of Pentacles: New Beginnings and Material Prosperity",
    image: TarotCardsPhotosAll[64],
    route: TarotRoutes[64],
    alt: TarotCardNamesCard[64],
    tooltip: TarotCardNamesCard[64],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[64]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[64]}
        >
          Ace of Pentacles
        </Link>{" "}
        symbolizes new beginnings, material prosperity, and the potential for
        financial and material growth. It signifies a promising opportunity or a
        solid foundation upon which to build.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[64]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[64]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 65,
    name: "Two of Pentacles: Balance and Adaptation",
    image: TarotCardsPhotosAll[65],
    route: TarotRoutes[65],
    alt: TarotCardNamesCard[65],
    tooltip: TarotCardNamesCard[65],
    description: (
      <p className={styles.paragraph}>
        In the{" "}
        <Link
          to={TarotRoutes[65]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[65]}
        >
          Two of Pentacles
        </Link>
        , we encounter a card of balance and adaptation. It suggests the need to
        juggle responsibilities while maintaining equilibrium in our material
        and practical affairs.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[65]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[65]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 66,
    name: "Three of Pentacles: Collaboration and Mastery",
    image: TarotCardsPhotosAll[66],
    route: TarotRoutes[66],
    alt: TarotCardNamesCard[66],
    tooltip: TarotCardNamesCard[66],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[66]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[66]}
        >
          Three of Pentacles
        </Link>{" "}
        represents collaboration, mastery, and the recognition of one's skills.
        It encourages us to work harmoniously with others to achieve shared
        goals and to take pride in our craftsmanship.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[66]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[66]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 67,
    name: "Four of Pentacles: Security and Possessiveness",
    image: TarotCardsPhotosAll[67],
    route: TarotRoutes[67],
    alt: TarotCardNamesCard[67],
    tooltip: TarotCardNamesCard[67],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[67]}
        >
          Four of Pentacles
        </Link>{" "}
        signifies security, but it can also indicate possessiveness and a fear
        of loss. It prompts us to find a balance between financial stability and
        an open-hearted approach to life.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[67]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[67]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 68,
    name: "Five of Pentacles: Hardship and Financial Struggles",
    image: TarotCardsPhotosAll[68],
    route: TarotRoutes[68],
    alt: TarotCardNamesCard[68],
    tooltip: TarotCardNamesCard[68],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[68]}
        >
          Five of Pentacles
        </Link>{" "}
        represents hardship, financial struggles, and a sense of lack. It
        reminds us to seek help when needed and to remember that support and
        opportunities can be found even in difficult times.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[68]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[68]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 69,
    name: "Six of Pentacles: Generosity and Charity",
    image: TarotCardsPhotosAll[69],
    route: TarotRoutes[69],
    alt: TarotCardNamesCard[69],
    tooltip: TarotCardNamesCard[69],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[69]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[69]}
        >
          Six of Pentacles
        </Link>{" "}
        embodies generosity, charity, and the idea of giving and receiving. It
        encourages us to share our abundance with others and to be open to both
        offering and receiving help.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[69]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[69]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 70,
    name: "Seven of Pentacles: Patience and Investment",
    image: TarotCardsPhotosAll[70],
    route: TarotRoutes[70],
    alt: TarotCardNamesCard[70],
    tooltip: TarotCardNamesCard[70],
    description: (
      <p className={styles.paragraph}>
        In the{" "}
        <Link
          to={TarotRoutes[70]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[70]}
        >
          Seven of Pentacles
        </Link>{" "}
        we find themes of patience and investment. It suggests that the seeds
        we've planted are beginning to grow, but it may take time before we reap
        the full rewards of our efforts.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[70]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[70]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 71,
    name: "Eight of Pentacles: Dedication and Craftsmanship",
    image: TarotCardsPhotosAll[71],
    route: TarotRoutes[71],
    alt: TarotCardNamesCard[71],
    tooltip: TarotCardNamesCard[71],
    description: (
      <p className={styles.paragraph}>
        Next{" "}
        <Link
          to={TarotRoutes[71]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[71]}
        >
          Eight of Pentacles
        </Link>{" "}
        represents dedication, craftsmanship, and the pursuit of mastery. It
        encourages us to hone our skills, work diligently, and take pride in the
        quality of our work.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[71]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[71]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 72,
    name: "Nine of Pentacles: Abundance and Self-Sufficiency",
    image: TarotCardsPhotosAll[72],
    route: TarotRoutes[72],
    alt: TarotCardNamesCard[72],
    tooltip: TarotCardNamesCard[72],
    description: (
      <p className={styles.paragraph}>
        Following{" "}
        <Link
          to={TarotRoutes[72]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[72]}
        >
          Nine of Pentacles
        </Link>{" "}
        signifies abundance, self-sufficiency, and the enjoyment of life's
        pleasures. It reminds us to savor the rewards of our hard work and to
        appreciate the finer things in life.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[72]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[72]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 73,
    name: "Ten of Pentacles: Wealth and Legacy",
    image: TarotCardsPhotosAll[73],
    route: TarotRoutes[73],
    alt: TarotCardNamesCard[73],
    tooltip: TarotCardNamesCard[73],
    description: (
      <p className={styles.paragraph}>
        Following{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[73]}
        >
          Ten of Pentacles
        </Link>{" "}
        symbolizes wealth, legacy, and the fulfillment of material and family
        goals. It emphasizes the importance of family, tradition, and the
        long-term security of our investments.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[73]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[73]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 74,
    name: "Page of Pentacles: Ambition and Opportunity",
    image: TarotCardsPhotosAll[74],
    route: TarotRoutes[74],
    alt: TarotCardNamesCard[74],
    tooltip: TarotCardNamesCard[74],
    description: (
      <p className={styles.paragraph}>
        Next, we have the{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[74]}
        >
          Page of Pentacles
        </Link>{" "}
        that embodies ambition, curiosity, and the pursuit of new opportunities.
        It encourages us to approach new ventures with a practical and studious
        mindset.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[74]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[74]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 75,
    name: "Knight of Pentacles: Reliability and Practicality",
    image: TarotCardsPhotosAll[75],
    route: TarotRoutes[75],
    alt: TarotCardNamesCard[75],
    tooltip: TarotCardNamesCard[75],
    description: (
      <p className={styles.paragraph}>
        Moving on to the{" "}
        <Link
          to={TarotRoutes[75]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[75]}
        >
          Knight of Pentacles
        </Link>{" "}
        that exemplify reliability, practicality, and a steady approach to
        goals. It reminds us to be methodical in our pursuits and to take
        responsibility for our actions.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[75]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[75]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 76,
    name: "Queen of Pentacles: Nurturing and Abundance",
    image: TarotCardsPhotosAll[76],
    route: TarotRoutes[76],
    alt: TarotCardNamesCard[76],
    tooltip: TarotCardNamesCard[76],
    description: (
      <p className={styles.paragraph}>
        The{" "}
        <Link
          to={TarotRoutes[76]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[76]}
        >
          Queen of Pentacles
        </Link>{" "}
        manifest nurturing energy, abundance, and a deep connection to the
        material world. She encourages us to care for ourselves and others while
        maintaining a strong sense of practicality.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[76]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[76]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
  {
    number: 77,
    name: "King of Pentacles: Financial Mastery and Stability",
    image: TarotCardsPhotosAll[77],
    route: TarotRoutes[77],
    alt: TarotCardNamesCard[77],
    tooltip: TarotCardNamesCard[77],
    description: (
      <p className={styles.paragraph}>
        Lastly, the{" "}
        <Link
          to={TarotRoutes[77]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[77]}
        >
          King of Pentacles
        </Link>{" "}
        represents financial mastery, stability, and responsible leadership. He
        reminds us of the importance of managing our resources wisely and using
        our wealth to benefit both ourselves and our community.
      </p>
    ),
    href: (
      <Link
        to={TarotRoutes[77]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[77]}
      >
        Full Tarot Meaning & Symbolism
      </Link>
    ),
  },
];

export const MajorArcanaCardsData = TarotCardsDataAll.slice(0, 22);

const SuitOfWands = TarotCardsDataAll.slice(22, 36);
const SuitOfCups = TarotCardsDataAll.slice(36, 50);
const SuitOfSords = TarotCardsDataAll.slice(50, 64);
const SuitOfPentacles = TarotCardsDataAll.slice(64, 78);

export const SuitOfAllCards = [
  SuitOfWands,
  SuitOfCups,
  SuitOfSords,
  SuitOfPentacles,
];
