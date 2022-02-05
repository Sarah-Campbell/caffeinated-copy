import {Element} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import styles from "./working-with-me.module.css";

const Quote = () => (
  <FontAwesomeIcon className={styles.quote} icon={faQuoteLeft} />
);

export function WorkingWithMe() {
  return (
    <>
      <Element name="working-with-me" />
      <section>
        <div className={styles.container}>
          <h2 className={styles.apples}>
            <Quote />
            Hey, three fuzzy images and a yelp review! Someone quick, hand me my
            credit card." Said no one, ever.
          </h2>

          <div className={styles.bananas}>
            <p>
              If it was that easy to gain followers and influence people,
              everyone would be Kylie J. But it’s not, and you’re not. So who
              are you? And what do you want?
            </p>
          </div>

          <div className={styles.lemons}>
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

          {/*<div className={styles.plums}>*/}
          {/*  <ul>*/}
          {/*    <li>Consulting</li>*/}
          {/*    <li>Content strategy</li>*/}
          {/*    <li>Content writing</li>*/}
          {/*    <li>Copywriting</li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/*<div className={styles.kiwi}>*/}
          {/*  <ul>*/}
          {/*    <li>Editing</li>*/}
          {/*    <li>Research</li>*/}
          {/*    <li>Reporting</li>*/}
          {/*    <li>Workshops</li>*/}
          {/*    <li>Case studies</li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </section>
    </>
  );
}
