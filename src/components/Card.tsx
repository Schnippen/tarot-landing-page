import React from "react";
import styles from "./Card.module.css";

function Card({
  alt,
  tooltip,
  img,
}: {
  alt?: string;
  tooltip?: string;
  img: string;
}) {
  return (
    <div className={styles.card_container}>
      <img src={img} alt={alt} title={tooltip} loading="lazy" />
    </div>
  );
}

export default Card;
