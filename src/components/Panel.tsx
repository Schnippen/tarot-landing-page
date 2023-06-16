import React, { useState } from "react";

import CardBack from "../images/CardBack.jpg";
import styles from "../components/Panel.module.css";
type PanelTypes = {
  title?: string;
  text?: string;
  hue?: string | number;
};
function Panel({ title, text, hue }: PanelTypes) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <li
      className={`${styles.card_container} ${
        isFlipped ? styles.CardOpen : styles.CardClosed
      }
      `}
      onClick={(e) => setIsFlipped(!isFlipped)}
      id={"card"}
    >
      <div className={styles.card_back}>
        <img
          src={CardBack}
          alt="Back of the card"
          style={{
            width: "100%",
            height: "100%",
            filter: `hue-rotate(${hue})`,
          }}
        />
      </div>
      <div className={styles.card_front}>
        <div className={styles.panel_container}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
}

export default Panel;
//480 280
