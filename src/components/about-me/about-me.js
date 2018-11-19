import React from "react";
import {Element} from "react-scroll";
import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./about-me.module.css";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <Element name="about-me">
        <Grid className={styles.grid} fluid>
          <Row className={styles.title}>
            <Col sm={12}>
              <h5>ABOUT ME</h5>
            </Col>
          </Row>
        </Grid>
      </Element>
    </section>
  );
};

export default AboutMe;
