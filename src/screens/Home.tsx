import React from "react";
import ArticleItem from "../components/ArticleItem";
import Exposition from "../components/Exposition";
import Footer from "../components/Footer";
import Panel from "../components/Panel";
import Separator from "../components/Separator";
import styles from "../App.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Exposition />
      <div className={styles.article_container}>
        <article className={styles.panels_container}>
          <h2 className={styles.panels_container_title}>
            Why Choose our Tarot Reader App:
          </h2>
          <div className={styles.panels_wrapper}>
            <Panel
              analyticsNumber={0}
              title="Trusted Expertise:"
              text="Our app is developed by experienced Tarot readers who have a deep understanding of the Tarot's symbolism and meanings."
            />
            <Panel
              analyticsNumber={1}
              hue={"0.16turn"}
              title="Confidential and Secure:"
              text="Your privacy is important to us. Rest assured that all your readings and personal information are kept confidential and secure."
            />
            <Panel
              analyticsNumber={2}
              hue={"-0.25turn"}
              title="Accessible Anywhere, Anytime:"
              text="Whether you're at home or on the go, our Tarot Reader app is available to provide guidance whenever you need it."
            />
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_wrapper}>
            <h2 className={styles.article_title}>Key Features</h2>
            <ArticleItem
              paragraphText="Experience authentic Tarot readings tailored to your specific
            questions and concerns."
              headerTitle="Accurate and Personalized Tarot Readings:"
            />
            <Separator />
            <ArticleItem
              paragraphText="Our user-friendly app makes it easy to ask questions and receive
            insightful interpretations of the Tarot cards."
              headerTitle="Intuitive Interface:"
            />
            <Separator />
            <ArticleItem
              headerTitle="Selecting the Best Tarot Spread:"
              paragraphText="Our special algorithm will choose the most suitable Tarot spread for your question or situation."
            />
            <Separator />
            <ArticleItem
              headerTitle="Detailed Card Descriptions:"
              paragraphText="Gain a deeper understanding of each Tarot card's symbolism and
            meaning through our comprehensive card descriptions."
            />
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_wrapper}>
            <h2 className={styles.article_title}>How it Works</h2>
            <ArticleItem
              headerTitle="Ask Your Question:"
              paragraphText="Formulate your question or focus on the area of your life you want to explore."
            />
            <Separator />
            <ArticleItem
              headerTitle="Select a Tarot Spread:"
              paragraphText="Choose a Tarot spread that resonates with your question or situation."
            />
            <Separator />
            <ArticleItem
              headerTitle="Receive Your Reading:"
              paragraphText="The Tarot Reader app will generate a personalized reading based on the cards drawn and their interpretations."
            />
            <Separator />
            <ArticleItem
              headerTitle="Interpretation and Guidance:"
              paragraphText="Delve into the interpretations of each card in your reading and reflect on the guidance provided to gain insights and inspiration."
            />
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
