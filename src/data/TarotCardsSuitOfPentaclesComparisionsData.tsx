import React from "react";
import Separator from "../components/Separator";
import styles from "../App.module.css";
import { Link } from "react-router-dom";
import { TarotCardNamesCard } from "./TarotCardsData";
import {
  TarotDecks,
  RoutesSuitMinorArcana,
  TarotRoutes,
} from "./TarotRoutesData";

const AceOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ace of Pentacles vs. The Hierophant (
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
        The Ace of Pentacles and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both touch upon themes of material and spiritual wealth, but they do so
        with distinct energies. The Ace of Pentacles represents a new
        opportunity for material abundance, financial growth, or the
        manifestation of earthly goals. It signifies the potential for
        prosperity and tangible rewards.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies spiritual wisdom, tradition, and the guidance of a spiritual
        leader. It signifies the pursuit of higher knowledge and adherence to
        established beliefs and rituals. While The Ace of Pentacles focuses on
        material opportunities,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        highlights the importance of spiritual guidance and tradition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Pentacles vs. The Two of Cups (
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
        , let's compare The Ace of Pentacles to{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          The Two of Cups{" "}
        </Link>
        . The Ace of Pentacles represents a new opportunity for material
        abundance and growth, signifying the potential for prosperity and
        tangible rewards.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          The Two of Cups{" "}
        </Link>{" "}
        represents a connection between two individuals, often symbolizing love,
        partnership, and emotional harmony. It signifies the coming together of
        two hearts in a meaningful relationship. While The Ace of Pentacles
        focuses on material opportunities,{" "}
        <Link
          to={TarotRoutes[37]}
          className={styles.Link}
          title={TarotCardNamesCard[37]}
        >
          The Two of Cups{" "}
        </Link>{" "}
        emphasizes emotional and relational connections.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ace of Pentacles vs. The Wheel of Fortune (
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
        Now, let's explore how The Ace of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Ace of Pentacles represents a new opportunity for material
        abundance and financial growth.
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
        embodies the concept of fate, cycles, and change. It signifies the
        ever-turning wheel of destiny and the unpredictability of life's ups and
        downs. While The Ace of Pentacles focuses on tangible opportunities,{" "}
        <Link
          to={TarotRoutes[10]}
          className={styles.Link}
          title={TarotCardNamesCard[10]}
        >
          The Wheel of Fortune{" "}
        </Link>{" "}
        highlights the broader themes of fate and life's ever-changing nature.
      </p>
    </>
  );
};

const TwoOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Two of Pentacles vs. The Fool (
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
        The Two of Pentacles and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        both explore themes of balance and spontaneity, but they do so with
        different energies. The Two of Pentacles represents the juggling of
        responsibilities and decisions related to material matters. It signifies
        the need for adaptability and finding equilibrium in life's demands.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies the spirit of adventure and taking a leap of faith. It
        signifies the willingness to embrace the unknown and trust in the
        journey, often associated with new beginnings and spontaneity. While The
        Two of Pentacles focuses on managing practical matters,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>
        highlights the courage to step into the unknown.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Pentacles vs. The Three of Swords (
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
        , let's compare The Two of Pentacles to{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          The Three of Swords{" "}
        </Link>
        . The Two of Pentacles represents the juggling of responsibilities and
        the need for balance in material matters.
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
        represents heartbreak, sorrow, and emotional pain. It signifies the
        process of healing from emotional wounds and finding clarity amid
        difficult emotions. While The Two of Pentacles is concerned with
        practical balance,{" "}
        <Link
          to={TarotRoutes[52]}
          className={styles.Link}
          title={TarotCardNamesCard[52]}
        >
          The Three of Swords{" "}
        </Link>
        delves into the realm of emotions and healing.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Two of Pentacles vs. The Strength (
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
        Now, let's explore how The Two of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Two of Pentacles represents the juggling of responsibilities and
        finding equilibrium in life's demands.
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
        card embodies courage, inner strength, and the ability to tame inner
        beasts. It signifies the power of compassion and resilience in
        overcoming challenges. While The Two of Pentacles focuses on practical
        balance,{" "}
        <Link
          to={TarotRoutes[8]}
          className={styles.Link}
          title={TarotCardNamesCard[8]}
        >
          The Strength{" "}
        </Link>{" "}
        card highlights the inner strength needed to navigate life's
        complexities.
      </p>
    </>
  );
};

const ThreeOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Three of Pentacles vs. The Hierophant (
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
        The Three of Pentacles and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both touch upon themes of guidance and mentorship, but they do so with
        different energies. The Three of Pentacles represents collaboration and
        the coming together of individuals to achieve a common goal. It
        signifies the importance of teamwork and the exchange of expertise.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies spiritual authority and tradition. It signifies a connection to
        religious or spiritual beliefs and often represents a teacher or guide
        who imparts wisdom and rituals. While The Three of Pentacles emphasizes
        collaboration in the material world,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        highlights the importance of spiritual guidance and tradition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Pentacles vs. The Six of Cups (
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
        , let's compare The Three of Pentacles to{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          The Six of Cups{" "}
        </Link>
        . The Three of Pentacles represents collaboration and the coming
        together of individuals to achieve a common goal.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          The Six of Cups{" "}
        </Link>{" "}
        represents nostalgia, childhood memories, and emotional connections. It
        signifies a sense of innocence and a return to simpler times. While The
        Three of Pentacles focuses on teamwork and achievement,{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          The Six of Cups{" "}
        </Link>{" "}
        delves into the realm of emotions and reminiscence.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Three of Pentacles vs. The Emperor (
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
        Now, let's explore how The Three of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Three of Pentacles represents collaboration and the importance of
        teamwork in achieving shared goals.
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
        collaborative focus of The Three of Pentacles.
      </p>
    </>
  );
};

const FourOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Four of Pentacles vs. The Devil (
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
        The Four of Pentacles and{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        both touch upon themes of attachment and control, but they do so with
        different energies. The Four of Pentacles represents a person holding
        tightly onto material possessions and resources, often out of fear of
        loss. It signifies a need for financial security and stability.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies temptation, bondage, and the allure of material desires. It
        represents the challenges associated with addiction and negative
        patterns that bind us. While The Four of Pentacles focuses on holding
        onto possessions,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        card highlights the dangers of becoming enslaved to material desires.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Four of Pentacles vs. The Eight of Cups (
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
        , let's compare The Four of Pentacles to{" "}
        <Link
          to={TarotRoutes[43]}
          className={styles.Link}
          title={TarotCardNamesCard[43]}
        >
          The Eight of Cups{" "}
        </Link>
        . The Four of Pentacles represents a person holding tightly onto
        material possessions and resources.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[43]}
          className={styles.Link}
          title={TarotCardNamesCard[43]}
        >
          The Eight of Cups{" "}
        </Link>{" "}
        represents a journey of emotional detachment and leaving behind what no
        longer serves one's emotional well-being. It signifies the pursuit of
        greater emotional fulfillment and personal growth by releasing
        attachments to the past. While The Four of Pentacles concerns material
        possessions,{" "}
        <Link
          to={TarotRoutes[43]}
          className={styles.Link}
          title={TarotCardNamesCard[43]}
        >
          The Eight of Cups{" "}
        </Link>{" "}
        delves into the realm of emotional release and transformation.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Four of Pentacles vs. The Emperor (
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
        Now, let's explore how The Four of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Four of Pentacles represents a person holding tightly onto
        material possessions and resources, often out of fear of loss.
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
        represents assertiveness and control in a different context compared to
        the attachment depicted in The Four of Pentacles.
      </p>
    </>
  );
};

const FiveOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Five of Pentacles vs. The Tower (
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
        The Five of Pentacles and{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card both touch upon themes of upheaval and crisis, but they do so with
        different energies. The Five of Pentacles represents a sense of
        financial hardship, often symbolizing temporary adversity and the need
        for help or support. It signifies a period of struggle and isolation.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies sudden and disruptive change. It signifies a significant
        upheaval or crisis that shatters existing structures and beliefs,
        leading to profound transformation. While The Five of Pentacles focuses
        on financial difficulties,{" "}
        <Link
          to={TarotRoutes[16]}
          className={styles.Link}
          title={TarotCardNamesCard[16]}
        >
          The Tower{" "}
        </Link>{" "}
        card highlights the unexpected and radical shifts in life.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Pentacles vs. The Three of Cups (
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
        , let's compare The Five of Pentacles to{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          Three of Cups{" "}
        </Link>
        . The Five of Pentacles represents a sense of financial hardship and
        isolation.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          Three of Cups{" "}
        </Link>{" "}
        represents joyous celebration, friendship, and emotional connection. It
        signifies a time of coming together with others to enjoy life's
        pleasures and share in happiness. While The Five of Pentacles emphasizes
        adversity,{" "}
        <Link
          to={TarotRoutes[38]}
          className={styles.Link}
          title={TarotCardNamesCard[38]}
        >
          Three of Cups{" "}
        </Link>{" "}
        highlights social and emotional bonds.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Five of Pentacles vs. The Hermit (
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
        Now, let's explore how The Five of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Five of Pentacles represents a sense of financial hardship and
        struggle.
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
        embodies introspection, solitude, and seeking inner wisdom. It signifies
        a period of self-reflection and inner guidance, often through solitary
        introspection.{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit's{" "}
        </Link>{" "}
        energy contrasts with the external challenges depicted in The Five of
        Pentacles.
      </p>
    </>
  );
};

const SixOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Six of Pentacles vs. The Empress (
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
        The Six of Pentacles and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both touch upon themes of generosity and abundance, but they do so with
        different energies. The Six of Pentacles represents the act of giving
        and receiving, often symbolizing a fair and balanced exchange of
        resources or assistance. It signifies a sense of charity and sharing
        within one's means.
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
        embodies nurturing, fertility, and the abundance of the natural world.
        It signifies the fertile and nurturing aspects of life, often associated
        with creativity, motherhood, and the Earth's bounty. While The Six of
        Pentacles emphasizes balance in giving and receiving,{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        card highlights the broader themes of fertility and abundance.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Pentacles vs. The Nine of Cups (
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
        , let's compare The Six of Pentacles to{" "}
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardNamesCard[44]}
        >
          Nine of Cups{" "}
        </Link>
        . The Six of Pentacles represents a fair and balanced exchange of
        resources and assistance.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardNamesCard[44]}
        >
          Nine of Cups{" "}
        </Link>{" "}
        represents emotional fulfillment, contentment, and wish fulfillment. It
        signifies a sense of emotional abundance and satisfaction in one's
        desires. While The Six of Pentacles focuses on material exchanges,{" "}
        <Link
          to={TarotRoutes[44]}
          className={styles.Link}
          title={TarotCardNamesCard[44]}
        >
          Nine of Cups{" "}
        </Link>{" "}
        delves into the realm of emotional well-being and contentment.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Six of Pentacles vs. The Chariot (
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
        Now, let's explore how The Six of Pentacles compares to{" "}
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
        . The Six of Pentacles represents a fair exchange of resources and
        assistance.
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
        embodies determination, willpower, and triumph over challenges. It
        signifies the drive to overcome obstacles and move forward with purpose
        and control.{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot's{" "}
        </Link>{" "}
        energy contrasts with the balanced giving and receiving depicted in The
        Six of Pentacles.
      </p>
    </>
  );
};

const SevenOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Seven of Pentacles vs. The Hierophant (
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
        The Seven of Pentacles and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both touch upon themes of patience and guidance, but they do so with
        different energies. The Seven of Pentacles represents a period of
        assessment and patience in one's material endeavors. It signifies the
        need to wait and evaluate the progress of one's efforts before reaping
        rewards.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies spiritual guidance, tradition, and wisdom from a mentor or
        teacher. It signifies a connection to established beliefs and rituals,
        often involving guidance from a spiritual leader. While The Seven of
        Pentacles emphasizes patience in material matters,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        highlights the importance of spiritual guidance and tradition.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Pentacles vs. The Page of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -
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
        , let's compare The Seven of Pentacles to{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          Page of Pentacles{" "}
        </Link>
        . The Seven of Pentacles represents a period of patience and assessment
        in one's material endeavors.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          Page of Pentacles{" "}
        </Link>{" "}
        represents a young and eager learner who is focused on practical skills
        and new opportunities. It signifies a willingness to embark on a new
        journey of learning and development, often related to material or
        financial matters. While The Seven of Pentacles highlights patience,{" "}
        <Link
          to={TarotRoutes[74]}
          className={styles.Link}
          title={TarotCardNamesCard[74]}
        >
          Page of Pentacles{" "}
        </Link>{" "}
        emphasizes the excitement of new beginnings and growth.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Seven of Pentacles vs. The Star (
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
        Now, let's explore how The Seven of Pentacles compares to{" "}
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
        . The Seven of Pentacles represents a period of patience and assessment
        in material endeavors.
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
        embodies hope, inspiration, and a sense of divine guidance. It signifies
        a connection to one's higher purpose and the belief that dreams can be
        realized.{" "}
        <Link
          to={TarotRoutes[17]}
          className={styles.Link}
          title={TarotCardNamesCard[17]}
        >
          The Star{" "}
        </Link>
        's energy contrasts with the patience and evaluation depicted in The
        Seven of Pentacles.
      </p>
    </>
  );
};

const EightOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Eight of Pentacles vs. The Magician (
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
        The Eight of Pentacles and The Magician both touch upon themes of skill
        and mastery, but they do so with different energies. The Eight of
        Pentacles represents diligent work, dedication, and the pursuit of
        mastery in one's craft or profession. It signifies a commitment to
        honing skills and achieving excellence through hard work.
      </p>
      <p className={styles.paragraph}>
        Conversely, The Magician card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies the power of transformation and manifestation. It signifies the
        ability to harness the elements of the universe to create one's reality.
        The Magician's energy is about taking control and manifesting one's
        desires, while The Eight of Pentacles emphasizes the process of skill
        development.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Pentacles vs. The Two of Swords (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        -
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
        , let's compare The Eight of Pentacles to The Two of Swords. The Eight
        of Pentacles represents diligent work and mastery in a particular field.
      </p>
      <p className={styles.paragraph}>
        Conversely, The Two of Swords represents a state of inner conflict and
        decision-making. It signifies a need to weigh options and find a
        balanced resolution to a situation that may involve conflicting choices.
        While The Eight of Pentacles focuses on mastery, The Two of Swords
        delves into the realm of decision and balance.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Eight of Pentacles vs. The Empress (
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
        Now, let's explore how The Eight of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Eight of Pentacles represents diligent work and the pursuit of
        mastery in one's craft or profession.
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
        embodies nurturing, fertility, and the abundance of the natural world.
        It signifies the fertile and nurturing aspects of life, often associated
        with creativity, motherhood, and the Earth's bounty.{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>
        's energy contrasts with the dedicated and industrious focus of The
        Eight of Pentacles.
      </p>
    </>
  );
};

const NineOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Nine of Pentacles vs. The High Priestess (
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
        The Nine of Pentacles and{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>{" "}
        both touch upon themes of inner wisdom and self-sufficiency, but they do
        so with different energies. The Nine of Pentacles represents a state of
        material and financial independence achieved through hard work and
        discipline. It signifies a sense of self-reliance and enjoying the
        fruits of one's labor.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies intuition, mystery, and the hidden aspects of life. It
        signifies a deep connection to one's inner wisdom and the ability to
        access hidden knowledge.{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess
        </Link>
        's energy is about trusting one's instincts and intuition, while The
        Nine of Pentacles emphasizes tangible achievements and self-sufficiency.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Pentacles vs. The Ten of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        - Pentacles Suit):
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
        , let's compare The Nine of Pentacles to{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          The Ten of Pentacles{" "}
        </Link>
        . The Nine of Pentacles represents a state of material and financial
        independence achieved through hard work and discipline.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          The Ten of Pentacles{" "}
        </Link>{" "}
        represents wealth, family, and the fulfillment of generational goals. It
        signifies a sense of financial security and abundance within a family or
        community context. While The Nine of Pentacles focuses on personal
        achievement,{" "}
        <Link
          to={TarotRoutes[73]}
          className={styles.Link}
          title={TarotCardNamesCard[73]}
        >
          The Ten of Pentacles{" "}
        </Link>
        highlights the broader theme of generational prosperity and legacy.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Nine of Pentacles vs. The Hermit (
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
        Now, let's explore how The Nine of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Nine of Pentacles represents material and financial independence
        achieved through hard work and discipline.
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
        embodies introspection, solitude, and seeking inner wisdom. It signifies
        a period of self-reflection and inner guidance, often through solitary
        introspection.{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit's{" "}
        </Link>{" "}
        energy contrasts with the self-reliance and material success depicted in
        The Nine of Pentacles.
      </p>
    </>
  );
};

const TenOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Ten of Pentacles vs. The Hierophant (
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
        The Ten of Pentacles and{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        both touch upon themes of tradition and social structures, but they do
        so with different energies. The Ten of Pentacles represents a sense of
        material wealth, stability, and family legacy. It signifies the
        attainment of financial security and the preservation of family values
        and traditions.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies spiritual guidance, tradition, and the wisdom of established
        institutions. It signifies a connection to religious or societal
        traditions and often represents a spiritual leader or mentor. While The
        Ten of Pentacles emphasizes material prosperity and family,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>
        highlights the importance of spiritual and cultural traditions.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Pentacles vs. The Six of Cups (
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
        , let's compare The Ten of Pentacles to{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          The Six of Cups{" "}
        </Link>
        . The Ten of Pentacles represents material wealth, stability, and family
        legacy.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[41]}
          className={styles.Link}
          title={TarotCardNamesCard[41]}
        >
          The Six of Cups{" "}
        </Link>{" "}
        represents nostalgia, childhood memories, and emotional connections from
        the past. It signifies a sense of innocence, reminiscing about simpler
        times, and sharing emotional experiences with others. While The Ten of
        Pentacles focuses on material prosperity, The Six of Cups delves into
        the realm of sentimental and emotional connections.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Ten of Pentacles vs. The Emperor (
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
        Now, let's explore how The Ten of Pentacles compares to{" "}
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
        . The Ten of Pentacles represents material wealth, stability, and family
        legacy.
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
        embodies authority, leadership, and the establishment of order and
        structure. It signifies the ability to take charge, make decisions, and
        create a stable and organized environment. The Emperor's energy
        contrasts with the focus on family legacy and material wealth depicted
        in The Ten of Pentacles.
      </p>
    </>
  );
};

const PageOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Page of Pentacles vs. The Fool (
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
        The Page of Pentacles and{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        both embody the spirit of new beginnings and exploration, but they do so
        with different energies. The Page of Pentacles represents the eager
        pursuit of practical knowledge and the willingness to learn through
        hands-on experience. It signifies a desire to understand the material
        world and make practical progress.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies spontaneity, adventure, and the leap of faith into the unknown.
        It signifies a fearless approach to life's journey, often embarking on
        new paths with little preconceived notions. While The Page of Pentacles
        focuses on practical learning,{" "}
        <Link
          to={TarotRoutes[0]}
          className={styles.Link}
          title={TarotCardNamesCard[0]}
        >
          The Fool
        </Link>{" "}
        represents a more carefree and adventurous spirit.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Pentacles vs. The Three of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        - Pentacles Suit):
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
        , let's compare The Page of Pentacles to{" "}
        <Link
          to={TarotRoutes[66]}
          className={styles.Link}
          title={TarotCardNamesCard[66]}
        >
          The Three of Pentacles{" "}
        </Link>
        . The Page of Pentacles represents the eager pursuit of practical
        knowledge and hands-on learning.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[66]}
          className={styles.Link}
          title={TarotCardNamesCard[66]}
        >
          The Three of Pentacles{" "}
        </Link>{" "}
        represents collaboration, teamwork, and the mastery of one's craft
        within a social or professional context. It signifies a sense of
        accomplishment through cooperation and the recognition of one's skills
        by others. While The Page of Pentacles emphasizes individual learning,{" "}
        <Link
          to={TarotRoutes[66]}
          className={styles.Link}
          title={TarotCardNamesCard[66]}
        >
          The Three of Pentacles{" "}
        </Link>{" "}
        highlights the collaborative aspect of achievement.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Page of Pentacles vs. The Hermit (
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
        Now, let's explore how The Page of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit{" "}
        </Link>{" "}
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Page of Pentacles represents the eager pursuit of practical
        knowledge and hands-on learning.
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
        embodies introspection, solitude, and seeking inner wisdom. It signifies
        a period of self-reflection and inner guidance, often through solitary
        introspection.{" "}
        <Link
          to={TarotRoutes[9]}
          className={styles.Link}
          title={TarotCardNamesCard[9]}
        >
          The Hermit's{" "}
        </Link>{" "}
        energy is about delving into one's inner world for wisdom and
        understanding, while The Page of Pentacles emphasizes practical learning
        in the external world.
      </p>
    </>
  );
};

const KnightOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Knight of Pentacles vs. The Devil (
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
        The Knight of Pentacles and{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        both touch upon themes of discipline and control, but they do so with
        different energies. The Knight of Pentacles represents a diligent and
        methodical approach to achieving one's goals. It signifies a strong
        sense of responsibility and commitment to practical matters.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies temptation, bondage, and the pursuit of material desires. It
        signifies a struggle with earthly attachments and the need for
        self-control to avoid falling into unhealthy patterns. While The Knight
        of Pentacles emphasizes responsible actions,{" "}
        <Link
          to={TarotRoutes[15]}
          className={styles.Link}
          title={TarotCardNamesCard[15]}
        >
          The Devil{" "}
        </Link>{" "}
        highlights the challenges of overcoming temptation.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Pentacles vs. The Two of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        - Pentacles Suit):
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
        , let's compare The Knight of Pentacles to{" "}
        <Link
          to={TarotRoutes[65]}
          className={styles.Link}
          title={TarotCardNamesCard[65]}
        >
          The Two of Pentacles{" "}
        </Link>
        . The Knight of Pentacles represents a diligent and methodical approach
        to achieving one's goals.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[65]}
          className={styles.Link}
          title={TarotCardNamesCard[65]}
        >
          The Two of Pentacles{" "}
        </Link>{" "}
        represents balance, adaptability, and the juggling of multiple
        responsibilities or resources. It signifies the need to find equilibrium
        and manage various aspects of life efficiently. While The Knight of
        Pentacles focuses on disciplined pursuit, The Two of Pentacles
        emphasizes the skill of balancing multiple commitments.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Knight of Pentacles vs. The Chariot (
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
        Now, let's explore how The Knight of Pentacles compares to{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot{" "}
        </Link>
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>
        . The Knight of Pentacles represents a diligent and methodical approach
        to achieving one's goals.
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
        embodies determination, willpower, and the drive to overcome obstacles.
        It signifies a focused and unstoppable force that propels one toward
        victory.{" "}
        <Link
          to={TarotRoutes[7]}
          className={styles.Link}
          title={TarotCardNamesCard[7]}
        >
          The Chariot's{" "}
        </Link>{" "}
        energy contrasts with the methodical and responsible approach depicted
        in The Knight of Pentacles.
      </p>
    </>
  );
};

const QueenOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The Queen of Pentacles vs. The Empress (
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
        The Queen of Pentacles and{" "}
        <Link
          to={TarotRoutes[3]}
          className={styles.Link}
          title={TarotCardNamesCard[3]}
        >
          The Empress
        </Link>{" "}
        both embody feminine energy and nurturing qualities, but they do so with
        different focuses. The Queen of Pentacles represents a practical and
        grounded approach to nurturing and taking care of others. She signifies
        a strong sense of responsibility for the material well-being of her
        loved ones and the environment.
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
        abundance. While The Queen of Pentacles emphasizes practical nurturing,
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
        The Queen of Pentacles vs. The Five of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        - Pentacles Suit):
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
        , let's compare The Queen of Pentacles to{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          The Five of Pentacles{" "}
        </Link>
        . The Queen of Pentacles represents practical and grounded nurturing and
        taking care of others.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          The Five of Pentacles{" "}
        </Link>{" "}
        represents a sense of lack, hardship, and financial or material
        struggles. It signifies a period of difficulty and the need for support
        during challenging times. While The Queen of Pentacles focuses on
        providing practical support,{" "}
        <Link
          to={TarotRoutes[68]}
          className={styles.Link}
          title={TarotCardNamesCard[68]}
        >
          The Five of Pentacles{" "}
        </Link>
        depicts a moment of material hardship.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The Queen of Pentacles vs. The High Priestess (
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
        Now, let's explore how The Queen of Pentacles compares to{" "}
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
        . The Queen of Pentacles represents practical and grounded nurturing and
        taking care of others.
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
        embodies intuition, mystery, and the hidden aspects of life. It
        signifies a deep connection to one's inner wisdom and the ability to
        access hidden knowledge.{" "}
        <Link
          to={TarotRoutes[2]}
          className={styles.Link}
          title={TarotCardNamesCard[2]}
        >
          The High Priestess's
        </Link>
        energy is about trusting one's instincts and intuition, while The Queen
        of Pentacles emphasizes practical care and nurturing in the external
        world.
      </p>
    </>
  );
};

const KingOfPentacles = () => {
  return (
    <>
      <h2 className={styles.title}>
        The King of Pentacles vs. The Emperor (
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
        The King of Pentacles and{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>{" "}
        both embody qualities of authority and leadership, but they do so with
        different energies. The King of Pentacles represents a practical and
        stable form of leadership rooted in financial and material success. He
        signifies a responsible and trustworthy figure who excels in managing
        resources and providing security.
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
        card from the{" "}
        <Link
          to={TarotDecks[0]}
          className={styles.Link}
          title="The Major Arcana Card List"
        >
          Major Arcana
        </Link>{" "}
        embodies a more assertive and commanding style of leadership. It
        signifies a powerful and authoritative presence, often associated with
        rulership and the establishment of order and structure. While The King
        of Pentacles focuses on practical leadership in the material world,{" "}
        <Link
          to={TarotRoutes[4]}
          className={styles.Link}
          title={TarotCardNamesCard[4]}
        >
          The Emperor{" "}
        </Link>
        represents broader leadership encompassing various aspects of life.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Pentacles vs. The Four of Pentacles (
        <Link
          to={TarotDecks[1]}
          className={styles.Link}
          title="The Minor Arcana Suits List"
        >
          Minor Arcana
        </Link>{" "}
        - Pentacles Suit):
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
        , let's compare The King of Pentacles to{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardNamesCard[67]}
        >
          The Four of Pentacles{" "}
        </Link>
        . The King of Pentacles represents practical and stable leadership
        rooted in financial and material success.
      </p>
      <p className={styles.paragraph}>
        Conversely,{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardNamesCard[67]}
        >
          The Four of Pentacles{" "}
        </Link>{" "}
        represents a sense of holding onto material possessions and resources
        tightly. It signifies a cautious approach to financial matters, often
        associated with a fear of loss. While The King of Pentacles embodies
        confident and responsible leadership,{" "}
        <Link
          to={TarotRoutes[67]}
          className={styles.Link}
          title={TarotCardNamesCard[67]}
        >
          The Four of Pentacles{" "}
        </Link>{" "}
        portrays a more guarded attitude towards wealth.
      </p>
      <Separator />
      <h2 className={styles.title}>
        The King of Pentacles vs. The Hierophant (
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
        Now, let's explore how The King of Pentacles compares to{" "}
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
        . The King of Pentacles represents practical and stable leadership
        rooted in financial and material success.
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
        King of Pentacles focuses on practical leadership in the material world,{" "}
        <Link
          to={TarotRoutes[5]}
          className={styles.Link}
          title={TarotCardNamesCard[5]}
        >
          The Hierophant{" "}
        </Link>{" "}
        highlights the importance of spiritual and cultural traditions.
      </p>
    </>
  );
};
export const TarotCardsSuitOfPentaclesComparisionsData = [
  AceOfPentacles,
  TwoOfPentacles,
  ThreeOfPentacles,
  FourOfPentacles,
  FiveOfPentacles,
  SixOfPentacles,
  SevenOfPentacles,
  EightOfPentacles,
  NineOfPentacles,
  TenOfPentacles,
  PageOfPentacles,
  KnightOfPentacles,
  QueenOfPentacles,
  KingOfPentacles,
];
