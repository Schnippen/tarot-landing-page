import React from "react";
import styles from "./App.module.css";
import ArticleItem from "./components/ArticleItem";
import Exposition from "./components/Exposition";
import Panel from "./components/Panel";
import Separator from "./components/Separator";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="App">
      <header className={styles.header}>
        <h1 className={styles.header_title}>Tarot Reader</h1>
      </header>
      <main className={styles.main}>
        <Exposition />
        <div className={styles.article_container}>
          <article className={styles.panels_container}>
            <h2 className={styles.panels_container_title}>
              Why Choose our Tarot Reader App:
            </h2>
            <div className={styles.panels_wrapper}>
              <Panel
                title="Trusted Expertise:"
                text="Our app is developed by experienced Tarot readers who have a deep understanding of the Tarot's symbolism and meanings."
              />
              <Panel
                hue={"0.16turn"}
                title="Confidential and Secure:"
                text="Your privacy is important to us. Rest assured that all your readings and personal information are kept confidential and secure."
              />
              <Panel
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
    </body>
  );
}

export default App;

/*  import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter; */
/* Certainly! Here's an example of content you could use for the landing page of your Tarot Reader app:

**Heading/Title:**
- Discover Your Fate with Tarot Readings

**Testimonials:**
- "This app has been my go-to for Tarot readings. The accuracy and depth of the interpretations never fail to amaze me." - Jane Doe
- "I've found answers and guidance through the Tarot Reader app. It's like having a trusted Tarot reader at my fingertips." - John Smith

Remember to customize and adapt the content to fit the tone and branding of your Tarot Reader app. */
