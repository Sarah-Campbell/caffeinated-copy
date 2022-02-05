import React from "react";
import clsx from "clsx";
import {Col, Grid, Row} from "react-flexbox-grid";
import styles from "./portfolio.module.css";

import getVerticalReady from "./img/get-vertical-ready.jpg";
import grammableBistro from "./img/grammable_bistro.jpg";
import mmuuullttiipplly from "./img/mmuuullttiipplly.jpg";
import surprised from "./img/surprised.jpg";

import {Image} from "./image";

const GRAMMABLE_BISTRO = "https://dissolve.com/showreels/grammable";

export function Dissolve() {
  return (
    <>
      <section className={clsx(styles.container, styles.inverse)}>
        <Grid className={styles.grid} fluid>
          <Row style={{marginTop: "4rem", marginBottom: "4rem"}}>
            <Col sm={8}>
              <Image
                href={GRAMMABLE_BISTRO}
                src={grammableBistro}
                alt="The Grammable Bistro"
              />
            </Col>
            <Col sm={3}>
              <a className={styles.caption} href={GRAMMABLE_BISTRO}>
                <p style={{paddingLeft: "2rem"}}>
                  Introducing North America's first authentic, handcrafted,
                  gastro-photogenical experience.
                </p>
              </a>
            </Col>
          </Row>
        </Grid>
      </section>

      <section>
        <Grid className={styles.grid} fluid>
          <Row style={{marginTop: "4rem", marginBottom: "1rem"}}>
            <Col sm={12}>
              <h5>DISSOLVE</h5>
            </Col>
          </Row>
          <Row style={{marginBottom: "4rem"}}>
            <Col sm={6}>
              <div className={styles.copy}>
                <p>
                  Wrote engaging, brand friendly, content and scripts for
                  digital and print ads, media outreach, and social media,
                  increasing brand awareness, click through, and sales.
                </p>
              </div>
            </Col>
          </Row>
          <Row style={{marginBottom: "8rem"}}>
            <Col sm={4}>
              <Image
                href={GRAMMABLE_BISTRO}
                src={surprised}
                alt="The Grammable Bistro - Inedible Food, Stunning Pictures."
              />
            </Col>
            <Col sm={4}>
              <Image
                href="http://ideas.dissolve.com/tips/get-vertical-ready-with-dissolve"
                src={getVerticalReady}
                alt="Get Vertical Ready with Dissolve"
              />
            </Col>
            <Col sm={4}>
              <Image
                href="http://ideas.dissolve.com/tips/achieving-the-mmuuullttiipplly-effect-in-adobe-after-effects"
                src={mmuuullttiipplly}
                alt="Achieving the MMUUULLTTIIPPLLY effect"
              />
            </Col>
          </Row>
        </Grid>
      </section>
    </>
  );
}
