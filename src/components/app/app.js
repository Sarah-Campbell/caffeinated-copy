import React from "react";
import styles from "./app.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

const App = () => {
  return (
    <section className={styles.splash}>
      <div className={styles.container}>
        <div>
          <h2>My Work</h2>
        </div>
        <div>
          <h2>My Process</h2>
        </div>
        <div className={styles.headline}>
          <h2>Caffeinated Copy</h2>
          <p>
            Creating inspired and energized writing through research,
            authenticity, and a splash of creativity.
          </p>
          <div>
            <FontAwesomeIcon size="3x" icon={faAngleDown} />
          </div>
        </div>
        <div>
          <h2>About Me</h2>
        </div>
      </div>
    </section>
  );
};

export default App;
