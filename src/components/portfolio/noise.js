import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./portfolio.module.css";

import k from "./img/k.png";
import f from "./img/f.png";
import n from "./img/n.png";

export function Noise() {
  return (
    <section>
      <Grid className={styles.grid} fluid>
        <Row style={{marginTop: "4rem", marginBottom: "4rem"}}>
          <Col sm={3}>
            <img
              style={{height: "500px"}}
              className={styles.img}
              src={k}
              alt="Kinder Surprise"
            />
            <h6>Kinder Surprise</h6>
          </Col>
          <Col sm={3}>
            <img
              style={{height: "500px"}}
              className={styles.img}
              src={f}
              alt="Ferrero Rocher"
            />
            <h6>Ferrero Rocher</h6>
          </Col>
          <Col sm={3}>
            <img
              style={{height: "500px"}}
              className={styles.img}
              src={n}
              alt="Nutella"
            />
            <h6>Nutella</h6>
          </Col>
        </Row>
        <Row style={{marginTop: "4rem", marginBottom: "1rem"}}>
          <Col sm={12}>
            <h5>NOISE DIGITAL</h5>
          </Col>
        </Row>
        <Row style={{marginBottom: "8rem"}}>
          <Col sm={6}>
            <div className={styles.copy}>
              <p>
                Wrote thoughtful digital content to support the strategic
                marketing plans of several large international brands, including
                Kinder Surprise (and their national ‘Surprise Them Back’
                campaign), Nutella, and Ferrero Rocher.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}
