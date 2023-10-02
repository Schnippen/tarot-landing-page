import React, { useState } from "react";

import CardBack from "../images/CardBack.jpg";
import styles from "../components/Panel.module.css";
import Separator from "./Separator";
import { AnalyticsEvent } from "../utils/constants";
import { analytics } from "../utils/mixpanel";
import { useSpring, a } from "@react-spring/web";
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

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <li
      className={styles.container}
      onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setIsFlipped(!isFlipped);
        analytics.event(analyticsFunctionsArray[analyticsNumber]);
      }}
      {...props}
    >
      <a.div
        className={`${styles.card} ${styles.back}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <img
          src={CardBack}
          alt="Back of the card"
          style={{
            width: "100%",
            height: "100%",
            filter: `hue-rotate(${hue})`,
          }}
        />
      </a.div>
      <a.div
        className={`${styles.card} ${styles.front}`}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        <div className={styles.panel_container}>
          <h2>{title}</h2>
          <Separator marginHeight={0} />
          <p>{text}</p>
        </div>
      </a.div>
    </li>
  );
}

export default Panel;
//480 280
