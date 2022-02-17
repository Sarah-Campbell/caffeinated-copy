import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {Element} from "react-scroll";

import styles from "./introduction.module.css";

const Quote = () => (
  <FontAwesomeIcon className={styles.quote} icon={faQuoteLeft} />
);

export function Introduction() {
  return (
    <>
      <Element name="introduction" />
      <section>
        <div className={styles.container}>
          <h2 className={styles.jungle}>
            <Quote />
            Hey, three fuzzy images and a yelp review! Someone quick, hand me my
            credit card." Said no one, ever.
          </h2>

          <div className={styles.gorilla}>
            <p>
              If it was that easy to gain followers and influence people,
              everyone would be Kylie J. But it’s not, and you’re not. So who
              are you? And what do you want?
            </p>
          </div>

          <div className={styles.bananas}>
            <ul>
              <li>You want attention.</li>
              <li>You want prestige, innovation, impact.</li>
              <li>But most of all, you want leads that convert.</li>
            </ul>
          </div>

          <div className={styles.oranges}>
            <p>
              I’m here to help. Your one-stop shop for content marketing and
              brand strategy. I’ve worked with many brands over the years,
              here’s just a few who’ve trusted me to energize their online
              presence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
