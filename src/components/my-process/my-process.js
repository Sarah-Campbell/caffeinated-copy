import React from "react";
import {Element} from "react-scroll";
import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./my-process.module.css";

const MyProcess = () => {
  return (
    <section className={styles.container}>
      <Element name="my-process">
        <Grid className={styles.grid} fluid>
          <Row className={styles.title}>
            <Col sm={12}>
              <h5>MY PROCESS</h5>
            </Col>
          </Row>
        </Grid>
      </Element>
    </section>
  );
};

export default MyProcess;
