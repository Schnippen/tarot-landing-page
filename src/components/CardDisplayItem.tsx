import React from "react";
import Card from "./Card";
import styles from "../App.module.css";
import DisplayStyles from "./CardDisplayItem.module.css";
import { Link } from "react-router-dom";

const CardDisplayItem = ({
  alt,
  tooltip,
  paragraphElement,
  img,
  index,
  name,
  href,
}: {
  alt: string;
  tooltip: string;
  paragraphElement: JSX.Element;
  img: string;
  index: number;
  name: string;
  href: JSX.Element;
}) => {
  return (
    <li
      className={
        DisplayStyles.item_container +
        (index % 2 === 1 ? " " + DisplayStyles.container_position : "")
      }
    >
      <div className={DisplayStyles.left_container}>
        <Card alt={alt} tooltip={tooltip} img={img} />
      </div>
      <div className={DisplayStyles.right_container}>
        <h4 className={styles.title} style={{ textAlign: "center" }}>
          {name}
        </h4>
        {paragraphElement}
        <p className={styles.paragraph} style={{ textAlign: "center" }}>
          {href}
        </p>
      </div>
    </li>
  );
};

export default CardDisplayItem;
//<div className={DisplayStyles.left_container}>
//<div className={DisplayStyles.right_container}>
