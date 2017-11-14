import React, {Component} from 'react';
import {Button, Col, Grid, Image, Nav, Navbar, NavItem, Row} from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';

import facial from "./img/facial.jpg"
import ks from "./img/k/ks.jpg"
import k1 from "./img/k/1.png"
import k2 from "./img/k/2.png"
import k3 from "./img/k/3.png"
import k4 from "./img/k/4.png"
import k5 from "./img/k/5.png"
import fr from "./img/f/fr.jpg"
import f1 from "./img/f/1.png"
import f2 from "./img/f/2.png"
import f3 from "./img/f/3.png"
import f4 from "./img/f/4.png"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Button className="navbar-brand" bsStyle="link" onClick={() => scrollToComponent(this.top)}>
                                Caffeinated Copy
                            </Button>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="#" onClick={() => scrollToComponent(this.work, {
                                align: 'top'
                            })}>My Work</NavItem>
                            <NavItem href="#" onClick={() => scrollToComponent(this.process)}>My Process</NavItem>
                            <NavItem href="#">About Me</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <Button bsSize="small" className="btn-dark cta">Let’s grab a coffee</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <section className="splash-container" ref={top => this.top = top}>
                    <Grid>
                        <Image src={facial} responsive/>
                    </Grid>
                </section>

                <section>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h2>My Thoughts on Writing</h2>
                                <p>
                                    I believe in Caffeinating Copy. Creating inspired and energized writing through
                                    research, authenticity, and a splash of creativity.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section>
                    <Grid ref={work => this.work = work}>
                        <Row className="mb-5">
                            <Col sm={12}>
                                <h3>My Work</h3>
                                <p>
                                    I understand the importance and hard work that goes into creating an authentic
                                    brand. Check out a few of the brands below which have trusted me with developing and
                                    maintaining their online voice.
                                </p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={4}>
                                <Image src={ks} responsive/>
                            </Col>
                            <Col sm={4}>
                                <Image src={k1} responsive/>
                            </Col>
                            <Col sm={4}>
                                <Image src={k2} responsive/>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={4}>
                                <Image src={k3} responsive/>
                            </Col>
                            <Col sm={4}>
                                <Image src={k4} responsive/>
                            </Col>
                            <Col sm={4}>
                                <Image src={k5} responsive/>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={4}>
                                <Image src={fr} responsive/>
                            </Col>
                            <Col sm={4}>
                                <Image src={f1} responsive/>
                            </Col>
                            <Col sm={4}>
                                <Image src={f2} responsive/>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col sm={4}>
                                <Image src={f3} responsive/>
                            </Col>
                            <Col sm={4}>
                                <Image src={f4} responsive/>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section>
                    <Grid ref={process => this.process = process}>
                        <Row className="mb-5">
                            <Col sm={12}>
                                <h3>My Process</h3>
                                <p>
                                    Practice makes perfect! (And the perfect conversation starter.) I know how important
                                    demonstrating innovation and a clear strategic thought process can be. Check out my
                                    mock creative concepts and strategies below to see my thoughts and ideas for a
                                    variety of brands for both on and offline mediums.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default App;
