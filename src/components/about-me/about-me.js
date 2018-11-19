import React from "react"
import {Element} from "react-scroll";
import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./about-me.module.css";

import sarah from "../../img/coffee-drinker.jpg";

// const LINKEDIN = "https://ca.linkedin.com/in/sarah-campbell-b9895081";
const EMAIL = "sarah@caffeinatedcopy.ca";

const AboutMe = () => {
  return (
    <section>
      <Element name="about-me">
        <Grid className={styles.grid} fluid>
          <Row>
            <Col sm={12}>
              <h5>ABOUT ME</h5>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <p>
                I am an insatiable coffee drinker and travel lover who has
                fallen in love with the process of coming up with ideas.
                Writing, developing, and creating are my life while extreme
                organization is just my fun quirk.
              </p>

              <p>
                I have 3 years of marketing and content development experience.
                Since graduating with my Communications and English degree from
                Simon Fraser University I have worked as a freelance copywriter
                on a variety of brands, and with various agencies on market
                strategy and media planning.
              </p>

              <p>
                Let’s grab a coffee and discuss how I can help bring your
                brand’s voice to life!
              </p>

              {/*<ul className="list-inline links">*/}
                {/*<li>*/}
                  {/*<a href={LINKEDIN}><FontAwesomeIcon size="3x" icon={faLinkedin} />></a></li>*/}
                {/*<li>*/}
                  <a href={"mailto:" + EMAIL}>{EMAIL}</a>
                {/*</li>*/}
              {/*</ul>*/}
            </Col>

            <Col smOffset={4} sm={4}>
              <img
                src={sarah}
                alt="Me"
              />
            </Col>
          </Row>
        </Grid>
      </Element>
    </section>
  );
};

export default AboutMe;
