import React from "react";
import styles from "./App.module.css";
import ArticleItem from "./components/ArticleItem";
import googlePlayImage from "./images/google-play.webp";
import Panel from "./components/Panel";

function App() {
  return (
    <body className="App">
      <header className={styles.header}>
        <h1 className={styles.header_title}>Tarot Reader</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.exposition}>
          <div className={styles.exposition_wrapper}>
            <div className={styles.exposition_left}>AAAAa</div>
            <div className={styles.exposition_right}>
              <h2>
                Uncover insights, gain clarity, and explore the mysteries of
                your life through the ancient art of Tarot reading.
              </h2>
              Get Started Today: - Download our Tarot Reader app now and embark
              on a journey of self-discovery, wisdom, and empowerment. - Sign up
              to unlock the secrets of the Tarot and gain valuable insights into
              your life's questions.
              <img
                src={googlePlayImage}
                alt="Get on Google Play"
                height="80"
                width="206.7"
              ></img>
            </div>
          </div>
        </div>
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
            <h2 className={styles.article_title}>Key Features:</h2>
            <ArticleItem
              paragraphText="Experience authentic Tarot readings tailored to your specific
            questions and concerns."
              headerTitle="Accurate and Personalized Tarot Readings:"
            />
            <ArticleItem
              paragraphText="Our user-friendly app makes it easy to ask questions and receive
            insightful interpretations of the Tarot cards."
              headerTitle="Intuitive Interface:"
            />
            <ArticleItem
              headerTitle="Multiple Tarot Spreads:"
              paragraphText="Choose from various Tarot spreads designed to provide different
            perspectives and depth to your readings."
            />
            <ArticleItem
              headerTitle="Detailed Card Descriptions:"
              paragraphText="Gain a deeper understanding of each Tarot card's symbolism and
            meaning through our comprehensive card descriptions."
            />
          </article>
        </div>
      </main>
    </body>
  );
}

export default App;

/*   background: linear-gradient(45deg, #00a4bd, #00bda5);
  margin-top: 128px;
  padding-left: 16px;
  margin-bottom: 80px;
  padding-right: 16px;
import React from "react";
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

**Introduction:**
- Welcome to our Tarot Reader app, where you can uncover insights, gain clarity, and explore the mysteries of your life through the ancient art of Tarot reading.
- Are you seeking answers to burning questions about love, career, or personal growth? Our Tarot Reader app is here to guide you on your journey.


**How it Works:**
- Ask Your Question: Formulate your question or focus on the area of your life you want to explore.
- Select a Tarot Spread: Choose a Tarot spread that resonates with your question or situation.
- Receive Your Reading: The Tarot Reader app will generate a personalized reading based on the cards drawn and their interpretations.
- Interpretation and Guidance: Delve into the interpretations of each card in your reading and reflect on the guidance provided to gain insights and inspiration.

**Why Choose our Tarot Reader App:**
- Trusted Expertise: Our app is developed by experienced Tarot readers who have a deep understanding of the Tarot's symbolism and meanings.
- Confidential and Secure: Your privacy is important to us. Rest assured that all your readings and personal information are kept confidential and secure.
- Accessible Anywhere, Anytime: Whether you're at home or on the go, our Tarot Reader app is available to provide guidance whenever you need it.

**Get Started Today:**
- Download our Tarot Reader app now and embark on a journey of self-discovery, wisdom, and empowerment.
- Sign up to unlock the secrets of the Tarot and gain valuable insights into your life's questions.

**Testimonials:**
- "This app has been my go-to for Tarot readings. The accuracy and depth of the interpretations never fail to amaze me." - Jane Doe
- "I've found answers and guidance through the Tarot Reader app. It's like having a trusted Tarot reader at my fingertips." - John Smith

Remember to customize and adapt the content to fit the tone and branding of your Tarot Reader app. */
