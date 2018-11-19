import React, {Fragment} from "react";
import {Element} from "react-scroll";
import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./my-process.module.css";

import kindle from "../../img/kindle.jpg";
import kotex from "../../img/kotex.jpg";
import mec from "../../img/mec.jpg";
import tic from "../../img/tic-tacs.jpg";

const MyProcess = () => {
  return (
    <Fragment>
      <section className={styles.inverse}>
        <Element name="my-process">
          <Grid className={styles.grid} fluid>
            <Row style={{marginTop: "4rem", marginBottom: "4rem"}}>
              <Col sm={9}>
                <div className={styles.copy}>
                  <p>
                    Practice makes perfect! I know how important demonstrating
                    innovation and a clear strategic thought process can be.
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </Element>
      </section>

      <section>
        <Grid className={styles.grid} fluid>
          <Row style={{marginTop: "2rem", marginBottom: "1rem"}}>
            <Col sm={12}>
              <h5>MY PROCESS</h5>
            </Col>
          </Row>

          <Row>
            <Col sm={3}>
              <img className={styles.img} src={kindle} alt="Kindle" />
              <h4>Kindle</h4>
              <p>
                A friendly, bookish brand sparking passion and accessibility
                “for the love of reading”.
              </p>
            </Col>
            <Col sm={3}>
              <img className={styles.img} src={kotex} alt="U by Kotex" />
              <h4>U by Kotex</h4>
              <p>
                A spunky, bold and colourful brand that tells it like it is.
              </p>
            </Col>
            <Col sm={3}>
              <img className={styles.img} src={mec} alt="MEC" />
              <h4>MEC</h4>
              <p>
                A nature loving brand inspiring and leading its city dwelling
                members outdoors.
              </p>
            </Col>
            <Col sm={3}>
              <img className={styles.img} src={tic} alt="Tic Tacs" />
              <h4>Tic Tacs</h4>
              <p>
                A playful, optimistic and engaging brand that creates little
                moments of fun.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    </Fragment>
  );
};

export default MyProcess;
