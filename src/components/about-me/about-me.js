import {Element} from "react-scroll";
import styles from "./about-me.module.css";
import sarah from "./img/coffee-drinker.jpg";

const EMAIL = "sarahj.campb@gmail.com";

const AboutMe = () => {
  return (
    <Element name="about-me">
      <div className={styles.grid}>
        <h1>About Me</h1>
        <main>
          <img src={sarah} alt="Me" />
          <p>
            An ultra-caffeinated innovative brand leader. I energize copy and
            invigorate strategies. I’m in love with the process of new ideas and
            inspiring teams to drive growth from concept to commerce.
          </p>
          <p>
            I get fired up growing followings and creating marketing strategies
            for start-ups and B2B brands. Something I’ve done successfully for
            the last 7 years at more than 20 companies including:
          </p>
          <ul>
            <li>Summit Labels</li>
            <li>Dissolve</li>
            <li>Tourism New West</li>
            <li>Arts Council of New West</li>
            <li>Simon Fraser University</li>
            <li>And more</li>
          </ul>
          <p>
            Ready to take your brand to the next level? Let’s talk. Hit me up at
          </p>
          <a href={"mailto:" + EMAIL}>{EMAIL}</a>
        </main>
      </div>
    </Element>
  );
};

export default AboutMe;
