import React, {Fragment} from "react";
import {Col, Grid, Row} from "react-flexbox-grid";
import {Element} from "react-scroll";
import styles from "./my-work.module.css";

import bistro from "../../img/grammable_bistro_showreel.jpg";
import vertical from "../../img/get-vertical-ready.jpg";
import surprised from "../../img/surprised.jpg";
import mmuuullttiipplly from "../../img/mmuuullttiipplly.jpg";

const GRAMMABLE_BISTRO = "https://dissolve.com/showreels/grammable";
const VERTICAL_READY =
  "http://ideas.dissolve.com/tips/get-vertical-ready-with-dissolve";
const MMUUULLTTIIPPLLY =
  "http://ideas.dissolve.com/tips/achieving-the-mmuuullttiipplly-effect-in-adobe-after-effects";

const MyWork = () => {
  return (
    <Fragment>
      <section className={styles.container}>
        <Element name="my-work">
          <Grid className={styles.grid} fluid>
            <Row style={{marginTop: "2rem", marginBottom: "1rem"}}>
              <Col sm={12}>
                <h5>MY WORK</h5>
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                <a href={GRAMMABLE_BISTRO}>
                  <img
                    className={styles.img}
                    src={bistro}
                    alt="The Grammable Bistro"
                  />
                </a>
              </Col>
              <Col sm={3}>
                <a className={styles.copy} href={GRAMMABLE_BISTRO}>
                  <p style={{paddingLeft: "2rem"}}>
                    Introducing North America's first authentic, handcrafted,
                    gastro-photogenical experience.
                  </p>
                </a>
              </Col>
            </Row>
          </Grid>
        </Element>
      </section>

      <section>
        <Grid className={styles.grid} fluid>
          <Row style={{marginTop: "4rem", marginBottom: "4rem"}}>
            <Col sm={8}>
              <div className={styles.copy}>
                <p>
                  I understand the importance and hard work that goes into
                  creating an authentic brand. Check out a few of the brands
                  below which have trusted me with developing and maintaining
                  their online voice.
                </p>
              </div>
            </Col>
          </Row>

          <Row style={{marginTop: "2rem", marginBottom: "1rem"}}>
            <Col sm={12}>
              <h5>DISSOLVE</h5>
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <a href={GRAMMABLE_BISTRO}>
                <img
                  className={styles.img}
                  src={surprised}
                  alt="The Grammable Bistro"
                />
              </a>
              <h6>The Grammable Bistro - Inedible Food, Stunning Pictures.</h6>
              <p>
                Condimentum in integer natoque sapien suspendisse dignissim
                viverra a integer consectetur adipiscing posuere id consectetur.
              </p>
            </Col>
            <Col sm={4}>
              <a href={VERTICAL_READY}>
                <img
                  className={styles.img}
                  src={vertical}
                  alt="Get Vertical Ready with Dissolve"
                />
              </a>
              <h6>Get Vertical Ready with Dissolve</h6>
              <p>
                Condimentum in integer natoque sapien suspendisse dignissim
                viverra a integer consectetur adipiscing posuere id consectetur.
              </p>
            </Col>
            <Col sm={4}>
              <a href={MMUUULLTTIIPPLLY}>
                <img
                  className={styles.img}
                  src={mmuuullttiipplly}
                  alt="Achieving the MMUUULLTTIIPPLLY effect"
                />
              </a>
              <h6>Achieving the MMUUULLTTIIPPLLY effect</h6>
              <p>
                Condimentum in integer natoque sapien suspendisse dignissim
                viverra a integer consectetur adipiscing posuere id consectetur.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    </Fragment>
  );
};

export default MyWork;
