import {Link} from "react-scroll";
import styles from "./splash.module.css";

const DURATION = 500;

function MenuItem({children, to}) {
  return (
    <Link className={styles.link} to={to} smooth duration={DURATION}>
      <h3>{children}</h3>
    </Link>
  );
}

export function Splash() {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <h1>caffeinatedcopy.ca</h1>
        <nav className={styles.menu}>
          <MenuItem to="introduction">Why</MenuItem>
          <MenuItem to="portfolio">Portfolio</MenuItem>
          <MenuItem to="fresh-ideas">Fresh Ideas</MenuItem>
          <MenuItem to="working-with-me">Working with Me</MenuItem>
        </nav>
      </div>
    </section>
  );
}
