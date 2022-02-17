import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./portfolio.module.css";

import donate from "./img/donate.jpg";
import finalist from "./img/finalist.jpg";
import fluorescentInks from "./img/fluorescent-inks.jpg";
import forTheLoveOfBeer from "./img/for-the-love-of-beer.jpg";
import suckItCancer from "./img/suck-it-cancer.jpg";
import stepByStep from "./img/step-by-step.jpg";
import summitPlus from "./img/summit-plus.jpg";

import {Image} from "./image";

export function SummitLabels() {
  return (
    <>
      <section className={styles.container}>
        <Grid className={styles.grid} fluid>
          <Row style={{marginBottom: "2rem"}}>
            <Col sm={4}>
              <Image
                href="https://www.youtube.com/watch?v=OVpbQKCvwbQ"
                src={fluorescentInks}
                alt="Unleash the Ink. Fluorescent Inks x Carson Ting"
              />
            </Col>
            <Col sm={4}>
              <Image
                href="https://www.youtube.com/watch?v=jRlnKysJc5s&t=6s"
                src={forTheLoveOfBeer}
                alt="For the Love of Beer"
              />
            </Col>
            <Col sm={4}>
              <Image
                href="https://blog.summitlabels.ca/label-ordering-its-online"
                src={summitPlus}
                alt="Summit+ The Easiest Possible Way to Order Labels"
              />
            </Col>
          </Row>
          <Row style={{marginTop: "4rem", marginBottom: ".5em"}}>
            <Col sm={12}>
              <h5>SUMMIT LABELS</h5>
            </Col>
          </Row>
          <Row style={{marginBottom: "4rem"}}>
            <Col sm={8}>
              <div className={styles.copy}>
                <p>
                  As Creative Director and Marketing Manager at Summit Labels,
                  where branding meets innovation, I spent my time partnering
                  with our brands in creativity. Providing rocket fuel (in the
                  form of really great labels) to help our clients reach the
                  next level of success.
                </p>
              </div>
            </Col>
          </Row>
          <Row style={{marginBottom: "8rem"}}>
            <Col sm={3}>
              <Image
                href="https://blog.summitlabels.ca/suck-it-cancer"
                src={suckItCancer}
                alt="Suck it Cancer!"
              />
            </Col>
            <Col sm={3}>
              <Image
                href="https://blog.summitlabels.ca/white-plate-setup"
                src={stepByStep}
                alt="Step-by-Step White Plates"
              />
            </Col>
            <Col sm={3}>
              <Image
                href="https://blog.summitlabels.ca/vote-excellence"
                src={finalist}
                alt="Vote Summit; 2020 Business Excellence Awards Finalist!"
              />
            </Col>
            <Col sm={3}>
              <Image
                href="https://blog.summitlabels.ca/hand-sanitizer"
                src={donate}
                alt="If You Donate, We’ll Donate"
              />
            </Col>
          </Row>
        </Grid>
      </section>
    </>
  );
}
