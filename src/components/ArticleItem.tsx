import React from "react";
import styles from "../App.module.css";

type ArticleItemTypes = {
  headerTitle?: string;
  paragraphText?: string;
};

function ArticleItem({ paragraphText, headerTitle }: ArticleItemTypes) {
  return (
    <>
      <h3 className={styles.ArticleItem_title}>{headerTitle}</h3>
      <li className={styles.ArticleItem_paragraph}>{paragraphText}</li>
    </>
  );
}

export default ArticleItem;
