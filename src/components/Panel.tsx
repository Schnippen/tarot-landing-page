import React, { useState } from "react";

import CardBack from "../images/CardBack.jpg";
import styles from "../components/Panel.module.css";
import Separator from "./Separator";
import { AnalyticsEvent } from "../utils/constants";
import { analytics } from "../utils/mixpanel";
//analytics.event(AnalyticsEvent.first_card_pressed);
//analytics.event(AnalyticsEvent.second_card_pressed)
//analytics.event(AnalyticsEvent.third_card_pressed)
type PanelTypes = {
  title?: string;
  text?: string;
  hue?: string | number;
  onClick?: () => any;
  analyticsNumber: number;
};
function Panel({ title, text, hue, analyticsNumber, ...props }: PanelTypes) {
  const analyticsFunctionsArray = [
    AnalyticsEvent.first_card_pressed,
    AnalyticsEvent.second_card_pressed,
    AnalyticsEvent.third_card_pressed,
  ];
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <li
      className={`${styles.card_container} ${
        isFlipped ? styles.CardOpen : styles.CardClosed
      }
      `}
      onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setIsFlipped(!isFlipped);
        console.log("clicked");
        analytics.event(analyticsFunctionsArray[analyticsNumber]);
      }}
      id={"card"}
      {...props}
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
          <Separator marginHeight={0} />
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
}

export default Panel;
//480 280
