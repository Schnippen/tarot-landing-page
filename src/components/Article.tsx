import React from "react";
import styles from "../App.module.css";

function Article({ title, children }: { title: string; children?: any }) {
  return (
    <article className={styles.article}>
      <div className={styles.article_wrapper}>
        <h1 className={styles.article_title}>{title}</h1>
        {children}
      </div>
    </article>
  );
}

export default Article;
