import { Link } from "react-router-dom";
import { TarotRoutes } from "./TarotRoutesData";
import styles from "../App.module.css";
import MajorArcanaCards from "../images/cards/TarotCardPhotos";

//import TarotCardPhotos
const MajorArcanaData = [{}];

const SuitOfCups = [];

const SuitOfWands = [];

const SuitOfSords = [];

const SuitOfPentacles = [];

const TarotCardNamesCard = [
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
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[0]}
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
        to={TarotRoutes[0]}
        className={styles.Link}
        title={TarotCardsMeaningSymbolism[0]}
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
        As we progress, we encounter
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[8]}
        >
          Strength
        </Link>
        , a card symbolizing inner power, courage, and resilience. Strength
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
        Despite its ominous name,
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
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardsMeaningSymbolism[16]}
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
];
/* 
  {
    number: 22,
    name: "Ace of Wands",
    image: MajorArcanaCards[7],
    route: "",
    alt: "",
    tooltip: "",
    href: "",
    description:piration. It represents the potential for growth and the spark of an idea. This card indicates a burst of energy and a strong desire to take action towards achieving your goals. It encourages you to be confident and ambitious in pursuing your passions, as it signifies the start of a new project, venture, or phase in your life.\nThe Ace of Wands is a symbol of enthusiasm, vitality, and the courage to embrace change.\nIt reminds you to trust in your instincts, channel your inner fire, and seize the opportunities that come your way.",
  },
  {
    number: 23,
    name: "2 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
    description:
      "The Two of Wands is a card that represents making decisions and planning for the future. It suggests that you are at a point in your life where you have a good idea of what you want to achieve, and now it's time to take action.\nThe card encourages you to take a bold step forward and be open to new opportunities that come your way. You may also need to collaborate with others or seek guidance from someone who is more experienced in your field.\nThis card is about embracing new challenges and stepping out of your comfort zone to achieve your goals.",
  },
  {
    number: 24,
    name: "3 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
    description:
      "The Three of Wands in the Tarot represents progress, expansion, and growth. It suggests that your hard work and foresight are paying off, and you are now in a position to move forward with your plans. You may be seeing the results of your efforts, or you may be discovering new opportunities for advancement.\nThis card encourages you to have faith in your abilities and to continue working towards your goals.\nIt may also indicate that you have the support of others who are willing to help you achieve your dreams.",
  },
  {
    number: 25,
    name: "4 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
    description:
      "The Four of Wands is a card of celebration and achievement. It represents a time of harmony, stability, and contentment. It can signify the completion of a project, the achievement of a goal, or a joyful event such as a wedding or a homecoming.\nThis card encourages you to take time to appreciate your accomplishments and the people who have supported you along the way. It may also indicate a time of harmony and cooperation within your community or family.\nThe Four of Wands is a reminder to enjoy the fruits of your labor and to celebrate life's happy moments.",
  },
  {
    number: 26,
    name: "5 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
    description:
      "The Five of Wands is a card of conflict and competition. It represents a situation where multiple people have different opinions and are vying for power, attention or resources.\nThis card can also indicate a struggle or challenge that requires perseverance and determination to overcome. It may suggest that there are obstacles or setbacks in your path, and you need to find a way to navigate them.\nThe Five of Wands can also suggest that you need to be more assertive and stand up for yourself in a situation where others are trying to undermine you or push you aside.\nOverall, the Five of Wands encourages you to stay focused, resilient and determined in the face of challenges and competition.",
  },
  {
    number: 27,
    name: "6 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg",
    description:
      "The Six of Wands is a card of victory, recognition, and success. It represents achieving a long-desired goal or overcoming a challenge, leading to a sense of pride and accomplishment.\nThis card indicates that others are acknowledging your hard work and efforts, and you may be receiving public recognition or praise. It suggests that you have a positive and confident outlook on life, and you are eager to share your successes with others.\nThe Six of Wands encourages you to continue to work hard and maintain your positive attitude, as you will continue to achieve your goals and receive recognition for your efforts.",
  },
  {
    number: 28,
    name: "7 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg",
    description:
      "The Seven of Wands represents the need to defend oneself and protect one's position. It often indicates a situation where you feel like you're under attack, whether it's from competition, criticism, or other obstacles. You may be facing opposition from others who are trying to take over your position or challenge your authority.\nThis card encourages you to stand your ground and fight for what you believe in. It may be time to assert yourself and make your presence known, even if it means taking a more aggressive stance. The Seven of Wands is a reminder that sometimes you need to be assertive and defend your territory to maintain your position.",
  },
  {
    number: 29,
    name: "8 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg",
    description:
      "The Eight of Wands is a card of swift action and progress. It indicates that things are moving quickly and you need to keep up with the pace.\nThis card represents the energy and enthusiasm that comes with taking action and making progress towards your goals. It can also signify travel or a journey, both physically and metaphorically, and suggests that things will be moving forward smoothly.\nThis card encourages you to stay focused and keep moving forward with determination, as success is within reach. It can also indicate that communication and messages will be coming in rapidly, so it’s important to pay attention and be open to new opportunities.",
  },
  {
    number: 30,
    name: "9 of Wands",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg",
    description:
      "The Nine of Wands is a card of resilience and perseverance. It suggests that the seeker has been through a lot of challenges and obstacles but has managed to overcome them. The card advises the seeker to hold on and keep going, even if the journey ahead seems difficult.\nThe card also suggests that the seeker may feel like they are close to achieving their goals, but there may still be one final hurdle to overcome. The Nine of Wands is a reminder to remain vigilant and not give up just when success is within reach.\nIt also suggests that the seeker should not be afraid to seek help and support from others when needed.",
  },
  {
    number: 31,
    name: "10 of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg",
    description:
      "The Ten of Wands is a card of burden and responsibility. It indicates that the querent is taking on too much and needs to delegate or let go of some of their responsibilities. \nThe card suggests that the querent is overburdened and may be feeling overwhelmed, exhausted, or stressed out. They may be pushing themselves too hard and need to take a break.\nThe Ten of Wands can also indicate that the querent is at the end of a long journey or project and needs to finish strong, even if it is difficult. The card reminds us that sometimes we need to ask for help and delegate tasks in order to succeed.",
  },
  {
    number: 32,
    name: "Page of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg",
    description:
      "The Page of Wands is a card that represents new beginnings and inspiration. It suggests that you are on the verge of embarking on a new adventure, either creatively or professionally.\nThe page is enthusiastic and full of energy, eager to explore new possibilities and take risks. This card can also indicate a need to be open to new ideas and be willing to learn from others. In relationships, the Page of Wands suggests a passionate, exciting new connection that could lead to a deeper, more meaningful partnership.\nIt's important to stay focused on your goals, even if there are distractions along the way.",
  },
  {
    number: 33,
    name: "Knight of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg",
    description:
      "The Knight of Wands is a card of action and adventure. He represents a person who is always on the move and looking for new challenges. The Knight of Wands is an energetic and passionate individual who is not afraid to take risks. He is often associated with travel and new beginnings, as he is always seeking out new experiences and opportunities.\nThis card can indicate a time of high energy and enthusiasm, where you may be feeling inspired to take on new projects or pursue your passions. However, the Knight of Wands can also be impulsive and reckless, so it is important to balance your enthusiasm with careful planning and consideration.",
  },
  {
    number: 34,
    name: "Queen of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg",
    description:
      "The Queen of Wands is a powerful and confident figure, embodying the fiery and passionate nature of the Wands suit. She is associated with creativity, inspiration, and leadership. As a symbol of creativity, she can indicate the potential for artistic endeavors, business ventures, or other creative projects. Her leadership qualities suggest that she is a strong and independent woman, capable of managing her own life and inspiring others to do the same.\nThe Queen of Wands encourages self-confidence, determination, and independence, and can also represent a positive and energetic outlook on life. She may also suggest the need to take action, seize opportunities, and assert oneself in a situation.",
  },
  {
    number: 35,
    name: "King of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg",
    description:
      "The King of Wands is a fiery and passionate card that represents a natural-born leader who is full of energy and enthusiasm. He is confident, charismatic, and has a strong sense of purpose, making him a powerful force to be reckoned with.\nThis card suggests that the querent should take charge of their life and pursue their goals with passion and determination.\nThe King of Wands is also associated with creativity and inspiration, so this card can indicate that the querent should use their imagination to come up with new ideas and approaches. In a negative sense, the King of Wands can be impulsive and overbearing, so it is important to keep these tendencies in check and balance them with patience and consideration for others.",
  },
  {
    number: 36,
    name: "Ace of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    description:
      "The Ace of Cups is a card of new beginnings, particularly in matters of the heart and emotions. It represents the start of a new emotional journey, often indicating the arrival of love, spiritual connection, and fulfillment.\nThis card is associated with purity, innocence, and sincerity, and represents the opening of the heart to love and compassion. It suggests a time of great emotional clarity and creativity, and encourages us to follow our hearts, listen to our intuition, and trust our deepest feelings. It also reminds us to be receptive to love and to open ourselves up to the possibility of new connections and relationships.",
  },
  {
    number: 37,
    name: "2 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg",
    description:
      "The Two of Cups is a card that signifies partnerships, relationships, and connections. It often appears in readings related to love and romantic relationships, but it can also represent strong friendships or even business partnerships.\nThe card is usually depicted with two figures exchanging cups, symbolizing a mutual exchange of emotions, trust, and commitment. The Two of Cups can indicate the start of a new, harmonious relationship or the deepening of an existing one. It can also signify the need for balance and compromise in relationships, or the importance of finding common ground with others.\nOverall, the Two of Cups is a positive card that emphasizes the power of human connections and the importance of emotional bonds.",
  },
  {
    number: 38,
    name: "3 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg",
    description:
      "The Three of Cups in the minor arcana of the Tarot deck generally represents joyful celebration and social gatherings. It symbolizes the coming together of friends or family members in a happy occasion, such as a wedding, a reunion, or a birthday party.\nThe card may also suggest the presence of strong friendships and emotional connections with others, as well as a sense of harmony and unity. In a love reading, the Three of Cups may indicate a time of romantic joy and fulfillment. However, the card's message can also be a warning against overindulgence and excess, especially if the celebration involves alcohol or other substances.",
  },
  {
    number: 39,
    name: "4 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg",
    description:
      "The Four of Cups is a card of introspection and contemplation. It often signifies a period of feeling unfulfilled or disconnected, and the need to take a step back to reassess one's priorities and goals. It can also indicate a sense of boredom or apathy, and a tendency to take things for granted.\nThe card suggests the need to open oneself up to new opportunities and perspectives, and to be receptive to the blessings and gifts that life has to offer. In some cases, it may suggest the need to address underlying emotional issues or seek help in dealing with them.",
  },
  {
    number: 40,
    name: "5 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg",
    description:
      "The Five of Cups is a card of disappointment and loss. It typically depicts a figure with their head bowed, looking mournfully at three spilled cups in front of them while two cups remain upright in the background.\nThe card suggests that the person may be feeling a sense of grief or regret, possibly over a lost opportunity or failed relationship. However, it also indicates that there is still hope and something positive that can be salvaged from the situation, represented by the two cups that remain standing.\nThe card encourages the person to shift their focus from what has been lost to what they still have and to seek comfort and support from others during this difficult time.",
  },
  {
    number: 41,
    name: "6 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg",
    description:
      "The Six of Cups is a minor arcana card in the tarot that often signifies nostalgia, childhood memories, and emotional bonds.\nThis card can also represent a sense of innocence and a desire to return to simpler times. In some cases, the Six of Cups may indicate a need for emotional healing or a desire to connect with loved ones from the past.\nThis card can also suggest a reunion or the opportunity to reconnect with someone from the past.\nThe Six of Cups is generally a positive card that encourages us to cherish our memories and appreciate the relationships that we have in our lives.",
  },
  {
    number: 42,
    name: "7 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg",
    description:
      "The Seven of Cups is a minor arcana card in the tarot that often represents choices, fantasies, and illusions. It indicates a time of contemplation and decision-making, where multiple opportunities or paths are presented, but the true nature of each is not always clear.\nThe card suggests that one may be daydreaming or fantasizing about possibilities rather than taking concrete actions to manifest them. It can also imply that one is overwhelmed with options and may need to focus and clarify their desires to make a choice that aligns with their highest good.\nThe Seven of Cups encourages careful consideration of options and discernment of what is real and achievable versus what is a mere illusion.",
  },
  {
    number: 43,
    name: "8 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg",
    description:
      "The Eight of Cups is a Minor Arcana card that typically represents leaving behind the past and moving on to a new phase in life. This could involve leaving behind emotional attachments or relationships that are no longer serving you, and seeking new experiences or opportunities. \nThe card can also indicate a period of introspection and self-reflection as you evaluate your life and make choices about your future path. It can be a challenging time, but ultimately a necessary one for personal growth and development. The card encourages you to follow your intuition and trust that the universe is guiding you towards a better place.",
  },
  {
    number: 44,
    name: "9 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg",
    description:
      'The Nine of Cups is often referred to as the "wish card" and represents contentment and emotional satisfaction. It signifies the achievement of a long-held desire or goal, bringing a sense of personal fulfillment and happiness.\nThis card is associated with joy, abundance, and gratitude, and suggests that the querent is in a positive emotional state. It may also indicate that the querent has created a harmonious balance in their personal and professional life, leading to a sense of peace and inner joy.\nThe Nine of Cups encourages the querent to celebrate their accomplishments and to continue pursuing their dreams with confidence and enthusiasm.',
  },
  {
    number: 45,
    name: "10 of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg",
    description:
      "The Ten of Cups is a card that represents ultimate emotional fulfillment, harmony, and joy. It signifies a state of deep happiness and contentment in one's personal relationships, usually in the context of family and home. It suggests a period of great happiness and emotional satisfaction, possibly even leading to a sense of perfection and completion in life. The card can also indicate a time of celebration and abundance, as well as the fulfillment of long-held wishes and dreams.\nIn a reading, the Ten of Cups encourages us to appreciate the beauty of our relationships and cherish the love and happiness we have in our lives.",
  },
  {
    number: 46,
    name: "Page of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg",
    description:
      "The Page of Cups is a card that signifies new beginnings, creativity, and emotional openness. It represents a youthful, intuitive person who is sensitive and caring, and who is willing to take risks and explore new experiences.\nThis card may indicate a time of increased emotional sensitivity and receptivity, as well as a desire for new and creative outlets. It encourages the individual to trust their intuition and follow their heart, as they pursue their dreams and aspirations.\nIt can also suggest the need to communicate feelings and emotions, and to be open to the emotional needs of others.",
  },
  {
    number: 47,
    name: "Knight of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg",
    description:
      "The Knight of Cups is a Minor Arcana card that represents emotional sensitivity, creativity, and imagination. This card often signifies the arrival of a new romantic relationship or the need to explore one's emotional and creative side.\nThe Knight of Cups is a dreamer who is in touch with their emotions and intuition. They are often seen as a romantic and charming figure, with a deep understanding of love and the arts.\nThis card may also suggest a need for more balance and harmony in one's emotional life. Overall, the Knight of Cups encourages individuals to embrace their inner creativity and emotional depth to enhance their lives and relationships.",
  },
  {
    number: 48,
    name: "Queen of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg",
    description:
      "The Queen of Cups is a minor arcana card that represents emotional depth, intuition, and compassion. She is the embodiment of empathy, sensitivity, and kindness. Her intuition guides her decisions, and she is known for her ability to listen to her heart and follow her instincts. She is also deeply connected to her emotions and encourages others to do the same. \nThe Queen of Cups is a nurturing presence, offering unconditional love and support to those around her. She inspires others to connect with their own emotions and offers a safe space for them to express their feelings.She represents the power of intuition, empathy, and emotional intelligence, and reminds us to embrace our own vulnerability and compassion.",
  },
  {
    number: 49,
    name: "King of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg",
    description:
      "The King of Cups is a Minor Arcana card in the suit of Cups, representing emotions, relationships, and creativity. It typically portrays a mature man who is empathetic, compassionate, and emotionally stable.\nThe King of Cups represents the ability to balance emotions with intellect and to manage them in a healthy and constructive way. He is a natural healer and peacemaker, able to provide emotional support and comfort to others. He is also creative, intuitive, and in touch with his own feelings.\nWhen the King of Cups appears in a reading, it may indicate the need to approach situations with compassion and understanding, and to lead with emotional intelligence rather than strict logic.",
  },
  {
    number: 50,
    name: "Ace of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
    description:
      "The Ace of Swords represents a new beginning, clarity, and the potential for triumph through mental focus and decisive action. It symbolizes the power of the mind and the ability to cut through confusion and see things clearly.\nThis card often suggests the need for clear communication and the ability to articulate one's thoughts and ideas effectively. It can also represent a breakthrough in understanding or a new perspective on a problem.\nHowever, it is important to remember that the sword can be a double-edged weapon, and the power it represents should be wielded with caution and responsibility.",
  },
  {
    number: 51,
    name: "2 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg",
    description:
      "The Two of Swords is a card that represents a state of indecision or stalemate. It can signify a difficult decision that needs to be made, but you may feel unsure or conflicted about the options available to you.\nThe blindfolded figure in the card indicates a need to look within and trust your intuition to make the right choice. It also suggests a need to find balance and harmony between opposing forces or ideas.\nThis card encourages you to confront your fears and limitations and make a decision with clarity and conviction. It may also indicate a need for compromise or negotiation in order to find a resolution.",
  },
  {
    number: 52,
    name: "3 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg",
    description:
      "The Three of Swords in the minor arcana of the Tarot represents heartbreak, sorrow, and emotional pain. It often appears when a person is experiencing a painful ending, such as a breakup or loss of a loved one.\nThe card can also indicate a situation where someone's feelings have been hurt deeply, causing them to feel betrayed or disillusioned. The imagery of the card typically shows a heart being pierced by three swords, representing the pain and sadness that the person is feeling.\nThe Three of Swords is a reminder that although heartbreak and pain can be difficult to endure, it is possible to move forward and heal with time.",
  },
  {
    number: 53,
    name: "4 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg",
    description:
      "The Four of Swords is a minor arcana tarot card that symbolizes rest, relaxation, and taking a break from the demands of daily life. It can represent a time of healing, recovery, or retreat. It suggests that you need to take some time for yourself to recover from stress or illness, or to meditate and reflect on your life.\nThis card encourages you to slow down and take a step back from the busyness of life. It may also indicate a need for solitude or a break from social interaction to recharge your batteries.\nThe Four of Swords can also indicate a period of preparation before a major change or decision.",
  },
  {
    number: 54,
    name: "5 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg",
    description:
      "The Five of Swords is a card of conflict and defeat. It indicates that you may have experienced a loss or betrayal, leaving you feeling defeated and humiliated. It also suggests that you may have taken a selfish approach to the situation and may have caused harm to others.\nThe card reminds you to be mindful of the consequences of your actions and to be cautious of your own ego. However, it can also indicate that you need to stand up for yourself and defend your beliefs, even if it means going against others.\nOverall, the Five of Swords is a warning to act with integrity and to consider the impact of your actions on others.",
  },
  {
    number: 55,
    name: "6 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg",
    description:
      "The Six of Swords is a card that represents transition, moving away from difficulties and towards a brighter future.\nThe card often signifies a journey, either physically or metaphorically, where the individual is leaving behind a tough situation or a challenging time in their life. This journey may not be easy, but it is necessary for growth and progress. The card can also indicate the need for mental clarity and a fresh perspective in order to move forward.\nOverall, the Six of Swords suggests that although change can be difficult, it is necessary in order to move towards a better future.",
  },
  {
    number: 56,
    name: "7 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg",
    description:
      "The Seven of Swords is a card of deception, betrayal, and trickery. It suggests that someone may be attempting to deceive or cheat you, or that you may be tempted to deceive others in order to get what you want. It can also indicate that you may need to act stealthily or be cunning to achieve your goals. Be careful not to get caught up in unethical behavior, as it will ultimately lead to negative consequences.\nThe card advises you to approach any situation with caution and to carefully consider the consequences of your actions before taking any steps forward.",
  },
  {
    number: 57,
    name: "8 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg",
    description:
      "The Eight of Swords in the Minor Arcana depicts a woman who is blindfolded and bound with ropes, surrounded by swords. It suggests a feeling of being trapped, powerless, and restricted.\nThe woman's blindfold represents a lack of clarity or understanding of the situation, while the swords symbolize the potential for danger or harm.\nThis card can indicate that the querent is feeling trapped by their circumstances, whether real or perceived. They may be unable to see a way out of their current situation or may be afraid to take action for fear of the consequences.\nThe Eight of Swords encourages the querent to take a step back, assess the situation objectively, and consider new possibilities or perspectives.",
  },
  {
    number: 58,
    name: "9 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg",
    description:
      "The Nine of Swords is a card that is associated with anxiety, fear, and worry. It depicts a person sitting up in bed with their head in their hands, suggesting a sense of despair or anguish.\nThe swords above the figure's head symbolize the thoughts and mental processes that are causing the distress.\nThis card represents the feelings of being trapped or helpless in a difficult situation. It is a reminder that worry and negative thoughts can create a self-fulfilling prophecy and encourages the person to face their fears and take action to address the situation. It is also a reminder that seeking help from others or professional assistance is often beneficial.",
  },
  {
    number: 59,
    name: "10 of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg",
    description:
      "The Ten of Swords is one of the most ominous cards in the Tarot deck. It usually depicts a figure lying face down with ten swords piercing their back.\nThe card generally signifies a complete and sudden ending, often accompanied by betrayal, pain, and loss. It may suggest that a situation or relationship has reached a point of no return and that there is nothing more to be done to salvage it.\nHowever, it may also indicate that there is a need to let go of the pain and hurt caused by the ending and to move forward with acceptance and hope for the future.",
  },
  {
    number: 60,
    name: "Page of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg",
    description:
      "The Page of Swords in the minor arcana of tarot represents intellect, communication, and curiosity.\nThis card suggests the need to use reason and logic to solve problems and make decisions. The Page of Swords encourages you to be curious and to ask questions to gain knowledge and understanding. However, be careful not to become too critical or judgmental in your pursuit of knowledge. This card can also indicate a message or news related to a matter that requires quick thinking and action.\nOverall, the Page of Swords encourages you to use your mind and intellect to navigate through life's challenges.",
  },
  {
    number: 61,
    name: "Knight of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg",
    description:
      "The Knight of Swords in the minor arcana represents intelligence, mental agility, and a swift change in circumstances. It depicts a figure charging forward on a horse with a raised sword, representing his determination and courage in the face of adversity.\nThis card often indicates a need for decisive action and making quick, calculated decisions. However, the Knight of Swords can also suggest a tendency towards impulsive behavior and a lack of consideration for the consequences of actions.\nWhen appearing in a tarot reading, this card can serve as a reminder to balance logic with intuition and to think before acting.",
  },
  {
    number: 62,
    name: "Queen of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg",
    description:
      "The Queen of Swords represents intellect, wisdom, and independence. She is often portrayed as a mature woman who is intelligent and analytical. She values truth and justice above all else, and she has the ability to cut through confusion and deception to get to the heart of the matter. She is a skilled communicator and can use her sharp wit and insight to persuade others. However, she can also be cold and detached, and her focus on rationality and logic can make her seem unfeeling.\nOverall, the Queen of Swords encourages us to use our intelligence and discernment to navigate difficult situations and make wise decisions.",
  },
  {
    number: 63,
    name: "King of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg",
    description:
      "The King of Swords represents the intellectual and analytical aspects of the mind. He is a logical and strategic thinker, who relies on reason and intellect to make decisions. He has a strong sense of justice and fairness, and is often called upon to be a mediator or arbitrator. He is a master of communication and has a gift for getting his message across clearly and persuasively.\nThe King of Swords can also be seen as emotionally detached or distant, and may struggle to connect with others on an emotional level. He values truth and integrity above all else, and expects the same from those around him.",
  },
  {
    number: 64,
    name: "Ace of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
    description:
      "The Ace of Pentacles represents new beginnings and opportunities in the material world, including finances, career, and resources. It signifies a solid foundation and potential for growth and success in these areas.\nThe card often symbolizes a new financial venture, investment, or the start of a new job or business opportunity. It also highlights the importance of practicality, stability, and security in one's material affairs.\nThe Ace of Pentacles encourages individuals to be open to new opportunities and to take practical steps to manifest their goals in the physical world.",
  },
  {
    number: 65,
    name: "2 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg",
    description:
      "The Two of Pentacles is a minor arcana card that represents balance, harmony, and adaptability.\nThe card often depicts a figure juggling two pentacles, suggesting the need to balance different aspects of one's life.\nThe card can also indicate the need for flexibility and the ability to adapt to changing circumstances. It suggests that one should not be afraid of change and should embrace the challenges and opportunities that come with it. The Two of Pentacles can also represent the need for financial balance and the importance of managing one's resources effectively. It is a card that encourages creativity and finding new ways to approach problems.",
  },
  {
    number: 66,
    name: "3 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg",
    description:
      "The Three of Pentacles is a card of teamwork, collaboration, and craftsmanship. It often signifies a situation where multiple people are working together towards a common goal, and everyone is contributing their unique skills and talents.\nThis card represents a time of learning, growth, and improvement through collaboration with others. It can also indicate a need for recognition and appreciation for one's hard work and dedication.\nIn relationships, the Three of Pentacles can suggest a partnership that is based on mutual respect and support, where each person values and encourages the other's personal growth and success.",
  },
  {
    number: 67,
    name: "4 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg",
    description:
      "The Four of Pentacles in the Tarot represents material possessions and the need to hold onto them tightly. It can indicate a sense of possessiveness, greed, or a fear of losing what one has.\nThe card can also signify the need for financial stability and security, but warns against becoming too attached to material things.\nIn some cases, the Four of Pentacles can suggest a need to open up and be more giving and generous, both materially and emotionally. It is important to find balance in this card and not let a preoccupation with wealth and possessions consume one's life.",
  },
  {
    number: 68,
    name: "5 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg",
    description:
      "The Five of Pentacles is a minor arcana card that typically signifies difficult times, financial hardship, and feeling left out or abandoned. It often represents the feeling of being isolated or excluded from a group, whether physically or emotionally.\nHowever, there is still hope as the card suggests that help may be available, but one must be willing to ask for it.\nThe card also emphasizes the importance of taking care of oneself and not neglecting physical, emotional, or spiritual needs.",
  },
  {
    number: 69,
    name: "6 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg",
    description:
      "The Six of Pentacles is a card that represents generosity, charity, and giving back. It often depicts a figure in a position of power or wealth sharing their resources with those in need. \nThis card can indicate a time of giving or receiving financial assistance, and suggests that one should be open to receiving help when needed. It can also symbolize a sense of balance and fairness in relationships or business dealings.\nIn some cases, the card may suggest the need to let go of material attachments or the desire for wealth and instead focus on cultivating a more giving and compassionate attitude towards others.",
  },
  {
    number: 70,
    name: "7 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg",
    description:
      "The Seven of Pentacles is a card that is often associated with patience and hard work. It suggests that the querent has been working diligently towards a goal, but they may be feeling a bit uncertain about whether or not their efforts will pay off.\nThis card reminds the querent that success takes time and effort, and that they must be willing to invest both in order to achieve their desired outcome. The Seven of Pentacles can also suggest a time of waiting or reflection, as the querent takes stock of what they have accomplished so far and considers their next steps.\nOverall, this card is a reminder that slow and steady progress can lead to long-term success.",
  },
  {
    number: 71,
    name: "8 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg",
    description:
      "The Eight of Pentacles is a card of hard work, diligence, and skill-building. It suggests that the querent is in a phase of learning and honing their craft or skills. They are dedicated to their work and take pride in their achievements.\nThis card also represents the idea of apprenticeship or mentorship, as the figure depicted in the card is diligently working under the watchful eye of a master craftsman.\nThe Eight of Pentacles encourages the querent to focus on their work, to take things one step at a time, and to be patient with their progress. It reminds them that success is built on a foundation of effort and practice.",
  },
  {
    number: 72,
    name: "9 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg",
    description:
      "The Nine of Pentacles represents independence, security, and luxury. It signifies a time when you are financially stable and can enjoy the fruits of your labor.\nThis card is about self-sufficiency and taking pride in your accomplishments. It may suggest a time of solitude and introspection as you enjoy the pleasures of life. You may have reached a point where you can enjoy the finer things in life without worry or stress.\nThis card may also indicate a need for independence and a desire for personal space. You may be seeking more control over your life and finances, and this card encourages you to take charge and trust in your abilities.",
  },
  {
    number: 73,
    name: "10 of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg",
    description:
      "The Ten of Pentacles is a card of abundance and security, typically associated with material wealth and financial stability. It represents the culmination of hard work and effort, and the rewards that come from a stable and prosperous family or community.\nThis card often indicates a successful and fulfilling life, where one can enjoy the fruits of their labor and share their abundance with others.\nIt can also suggest the importance of tradition and legacy, and the passing down of wealth and values from one generation to the next. In a reading, the Ten of Pentacles can signify financial gain, a sense of belonging, and the fulfillment of long-term goals.",
  },
  {
    number: 74,
    name: "Page of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg",
    description:
      "The Page of Pentacles is a card that represents new beginnings and a focus on practicality and material matters. This card often signifies a young person who is reliable and hardworking, or it may suggest that the seeker needs to adopt these qualities to achieve their goals.\nThe Page of Pentacles encourages the seeker to remain grounded and focused on their work or studies, with an eye towards long-term success.\nThis card may also indicate a need for the seeker to pay attention to their finances and develop a greater sense of responsibility when it comes to money.\nOverall, the Page of Pentacles encourages practicality, diligence, and a focus on achieving tangible results.",
  },
  {
    number: 75,
    name: "Knight of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg",
    description:
      "The Knight of Pentacles is a symbol of hard work, discipline, and perseverance. He represents a methodical and practical approach to achieving one's goals.\nThis card suggests that you are willing to put in the effort required to achieve success, even if it means sacrificing short-term gratification.\nThe Knight of Pentacles is also associated with financial security and stability, suggesting that you may be focused on building wealth or improving your financial situation. In a reading, this card can indicate the need to be patient and methodical in your approach, as success may not come quickly but with steady progress and dedication.",
  },
  {
    number: 76,
    name: "Queen of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg",
    description:
      "The Queen of Pentacles is a nurturing and grounded figure who embodies abundance, stability, and practicality. She is skilled at creating a warm and comfortable home environment and is often associated with financial and material prosperity.\nThe Queen of Pentacles is also deeply connected to the natural world and values simplicity and the pleasures of the senses. She is a reliable and loyal friend who takes care of others' needs while also taking care of her own.\nThis card may indicate a need to focus on practical matters, such as finances or home life, or may suggest the presence of a nurturing and supportive person in one's life.",
  },
  {
    number: 77,
    name: "King of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg",
    description:
      "The King of Pentacles is a card in the Minor Arcana that symbolizes wealth, success, and stability. This card often represents a mature and responsible man who is financially secure and knows how to manage his resources wisely. He is practical, dependable, and focused on achieving his goals.\nThe King of Pentacles encourages the querent to take a practical approach to their financial situation, to invest their resources wisely, and to work hard towards achieving their long-term goals.\nThis card can also indicate a period of financial stability and abundance, or suggest that the querent may receive financial assistance from a succ /essful and prosperous individual.",
  },*/
