import React from "react";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import styles from "./splash.module.css";

const DURATION = 500;

const Splash = () => (
  <section className={styles.container}>
    <div className={styles.splash}>
      <Link to="my-work" smooth duration={DURATION}>
        <h2>My Work</h2>
      </Link>
      <Link to="my-process" smooth duration={DURATION}>
        <h2>My Process</h2>
      </Link>
      <Link to="my-work" smooth duration={DURATION}>
        <h2>Caffeinated Copy</h2>
        <p>
          Creating inspired and energized writing through research,
          authenticity, and a splash of creativity.
        </p>
        <div>
          <FontAwesomeIcon size="3x" icon={faAngleDown} />
        </div>
      </Link>
      <Link to="about-me" smooth duration={DURATION}>
        <h2>About Me</h2>
      </Link>
    </div>
  </section>
);

export default Splash;
