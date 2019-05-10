import React from "react";
import {Element} from "react-scroll";
import styles from "./about-me.module.css";
import sarah from "../../img/coffee-drinker.jpg";

const EMAIL = "sarah@caffeinatedcopy.ca";

const AboutMe = () => {
  return (
    <Element name="about-me">
      <div className={styles.grid}>
        <h1>About Me</h1>
        <main>
          <img src={sarah} alt="Me" />
          <p>
            I am an insatiable coffee drinker and travel lover who has fallen in
            love with the process of coming up with ideas. Writing, developing,
            and creating are my life while extreme organization is just my fun
            quirk.
          </p>

          <p>
            I have 3 years of marketing and content development experience.
            Since graduating with my Communications and English degree from
            Simon Fraser University I have worked as a freelance copywriter on a
            variety of brands, and with various agencies on market strategy and
            media planning.
          </p>

          <a href={"mailto:" + EMAIL}>{EMAIL}</a>
        </main>
        <aside>
          Let’s grab a coffee and discuss how I can help bring your brand’s
          voice to life!
        </aside>
      </div>
    </Element>
  );
};

export default AboutMe;
