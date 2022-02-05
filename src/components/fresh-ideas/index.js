import {Element} from "react-scroll";
import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./fresh-ideas.module.css";

import kindle from "./img/kindle.jpg";
import kotex from "./img/kotex.jpg";
import mec from "./img/mec.jpg";
import ticTacs from "./img/tic-tacs.jpg";

function Idea({children, src, title}) {
  return (
    <>
      <img className={styles.img} src={src} alt={title} />
      <h4>{title}</h4>
      <p>{children}</p>
    </>
  );
}

export function FreshIdeas() {
  return (
    <>
      <Element name="fresh-ideas" />
      <section className={styles.inverse}>
        <Grid className={styles.grid} fluid>
          <Row style={{marginTop: "4rem"}}>
            <Col sm={3}>
              <Idea title="Kindle" src={kindle}>
                A friendly, bookish brand sparking passion and accessibility
                “for the love of reading”.
              </Idea>
            </Col>
            <Col sm={3}>
              <Idea title="U by Kotex" src={kotex}>
                A spunky, bold and colourful brand that tells it like it is.
              </Idea>
            </Col>
            <Col sm={3}>
              <Idea title="MEC" src={mec}>
                A nature loving brand inspiring and leading its city dwelling
                members outdoors.
              </Idea>
            </Col>
            <Col sm={3}>
              <Idea title="Tic Tacs" src={ticTacs}>
                A playful, optimistic and engaging brand that creates little
                moments of fun.
              </Idea>
            </Col>
          </Row>
          <Row style={{marginTop: "4rem", marginBottom: "1rem"}}>
            <Col sm={12}>
              <h5>FRESH IDEAS</h5>
            </Col>
          </Row>
          <Row style={{marginBottom: "4rem"}}>
            <Col sm={4}>
              <div className={styles.copy}>
                <p>
                  Great ideas make the world go round. So let’s have a little
                  fun making new ones!
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    </>
  );
}
