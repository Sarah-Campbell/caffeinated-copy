import styles from "./portfolio.module.css";
import {Col, Grid, Row} from "react-flexbox-grid";
import {Image} from "./image";
import React from "react";

import cabaret from "./img/cabaret.jpg";
import communitySpaces from "./img/community-spaces.jpg";
import springBreak from "./img/spring-break.jpg";

export function Tourism() {
  return (
    <section className={styles.inverse}>
      <Grid className={styles.grid} fluid>
        <Row style={{marginTop: "4rem", marginBottom: "6rem"}}>
          <Col sm={4}>
            <Image
              href="https://tourismnewwestminster.com/blog/spring-break-guide-new-west/"
              src={springBreak}
              alt="Spring Break For the Whole Family"
            />
          </Col>
          <Col sm={4}>
            <Image
              href="https://tourismnewwestminster.com/blog/cabaret-cocktails-new-west/"
              src={cabaret}
              alt="Cabaret & Tasty Cocktails"
            />
          </Col>
          <Col sm={4}>
            <Image
              href="https://tourismnewwestminster.com/blog/river-market-craft-cafe/"
              src={communitySpaces}
              alt="Art & Community Spaces at the Craft Cafe"
            />
          </Col>
        </Row>

        <Row style={{marginTop: "2rem", marginBottom: "1rem"}}>
          <Col sm={12}>
            <h5>TOURISM NEW WESTMINSTER</h5>
          </Col>
        </Row>
        <Row style={{marginBottom: "4rem"}}>
          <Col sm={6}>
            <div className={styles.copy}>
              <p>
                Developed content strategy and content to increase traction and
                engagement online. Entirely rewriting their site copy, and
                growing their social following (15% increase) to promote New
                West and attract visitors.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}
