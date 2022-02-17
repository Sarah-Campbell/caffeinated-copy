import {Element} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import styles from "./working-with-me.module.css";
import sarah from "./img/sarah.jpg";

const EMAIL = "sarahj.campb@gmail.com";

const Quote = () => (
  <FontAwesomeIcon className={styles.quote} icon={faQuoteLeft} />
);

export function WorkingWithMe() {
  return (
    <>
      <Element name="working-with-me" />
      <section className={styles.body}>
        <div className={styles.container}>
          <img src={sarah} className={styles.sarah} alt="Sarah" />

          <div className={styles.aside}>
            <p>
              <Quote />
              Sarah is a freelance copywriter energetic and inspiring. She knows
              how to move from ideation to launch and engages in her work with
              authenticity and style, humour and hard work. Should you, or
              anyone you know, require help with copywriting, social strategy or
              brand development, I highly recommend her!”
            </p>
            <span>
              &mdash; Deanne Esdale, Coach and Communications Specialist,
              Satisfied Client.
            </span>
          </div>

          <h5 className={styles.heading}>WORKING WITH ME</h5>

          <div className={styles.main}>
            <p>
              An ultra-caffeinated innovative brand leader. I energize copy and
              invigorate strategies. I’m in love with the process of new ideas
              and inspiring teams to drive growth from concept to commerce.
            </p>
            <p>
              I get fired up growing followings and creating marketing
              strategies for start-ups and B2B brands. Something I’ve done
              successfully for the last 7 years at more than 20 companies
              including:
            </p>
            <ul>
              <li>Summit Labels</li>
              <li>Dissolve</li>
              <li>Tourism New West</li>
              <li>Arts Council of New West</li>
              <li>Simon Fraser University</li>
              <li>And more</li>
            </ul>
          </div>

          <div className={styles.offering}>
            <h5>OFFERING:</h5>

            <div>
              <ul>
                <li>Consulting</li>
                <li>Content strategy</li>
                <li>Content writing</li>
                <li>Copywriting</li>
                <li>Editing</li>
                <li>Research</li>
                <li>Reporting</li>
                <li>Workshops</li>
                <li>Case studies</li>
              </ul>
            </div>

            <p>
              Ready to take your brand to the next level? Let’s talk.
              <br />
              Hit me up at <a href={"mailto:" + EMAIL}>{EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
