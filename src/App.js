import React, {Component} from 'react';
import {Button, Col, Grid, Image, Nav, Navbar, NavItem, Row} from 'react-bootstrap';
import Icon from "react-fontawesome";
import scrollToComponent from 'react-scroll-to-component';

import facial from "./img/facial.jpg"
import kindle from "./img/kindle.jpg"
import kotex from "./img/kotex.jpg"
import mec from "./img/mec.jpg"
import tic from "./img/tic-tacs.jpg"
import sarah from "./img/coffee-drinker.jpg"
import k from "./img/k.png"
import f from "./img/f.png"
import n from "./img/n.png"

const LINKEDIN = 'https://ca.linkedin.com/in/sarah-campbell-b9895081';
const EMAIL = 'sarahj.campb@gmail.com';

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
                            <NavItem href="#" onClick={() => scrollToComponent(this.work, {align: 'top', offset: -30})}>
                                My Work
                            </NavItem>
                            <NavItem href="#"
                                     onClick={() => scrollToComponent(this.process, {align: 'top', offset: -30})}>
                                My Process
                            </NavItem>
                            <NavItem href="#" onClick={() => scrollToComponent(this.about, {align: 'top', offset: -30})}>
                                About Me
                            </NavItem>
                            <NavItem className="visible-xs" href={"mailto:" + EMAIL}>
                                Let’s grab a coffee
                            </NavItem>
                        </Nav>
                        <div className="pull-right hidden-xs">
                            <a className="btn btn-sm btn-dark" href={"mailto:" + EMAIL}>Let’s grab a coffee</a>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

                <section className="vh-100" ref={top => this.top = top}>
                    <div className="bg-wall">
                        <Grid className="d-flex flex-column">
                            <Image src={facial} responsive/>
                            <Row className="align-self-end">
                                <Col className="text-center" smOffset={1} sm={10}>
                                    <h2>My Thoughts on Writing</h2>
                                    <p className="lead">
                                        I believe in Caffeinating Copy. Creating inspired and energized writing through
                                        research, authenticity, and a splash of creativity.
                                    </p>
                                    <a className="btn btn-lg btn-dark" href={"mailto:" + EMAIL}>Let’s grab a coffee</a>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </section>

                <section className="bg-examples" ref={work => this.work = work}>
                    <Grid className="d-flex vh-100">
                        <Row className="align-items-center align-self-center bg-dark-slate-gray text-light p-5">
                            <Col className="text-center" smOffset={1} sm={10}>
                                <h2>My Work</h2>
                                <p>
                                    I understand the importance and hard work that goes into creating an authentic
                                    brand. Check out a few of the brands below which have trusted me with developing and
                                    maintaining their online voice.
                                </p>
                            </Col>
                            <Col sm={4}>
                                <Image src={k} responsive thumbnail/>
                            </Col>
                            <Col sm={4}>
                                <Image src={f} responsive thumbnail/>
                            </Col>
                            <Col sm={4}>
                                <Image src={n} responsive thumbnail/>
                            </Col>
                        </Row>
                    </Grid>
                </section>

{/*
                <section className="bg-slate-gray mt-2 mb-5">
                    <Grid className="pt-5">
                        <Row>
                            <Col smOffset={2} sm={8}><a href="http://nickyfxmakeup.ca"><Image src={bb} responsive/></a></Col>
                        </Row>
                    </Grid>
                </section>
*/}

                <section className="my-5" ref={process => this.process = process}>
                    <Grid>
                        <Row>
                            <Col className="text-center" sm={12}>
                                <h2>My Process</h2>
                                <p>
                                    Practice makes perfect! (And the perfect conversation starter.) I know how important
                                    demonstrating innovation and a clear strategic thought process can be. Check out my
                                    mock creative concepts and strategies below to see my thoughts and ideas for a
                                    variety of brands for both on and offline mediums.
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={3}>
                                <Image src={kindle} responsive/>
                                <h4>Kindle</h4>
                                <p>
                                    A friendly, bookish brand sparking passion and accessibility “for the love of
                                    reading”.
                                </p>
                            </Col>
                            <Col sm={3}>
                                <Image src={kotex} responsive/>
                                <h4>U by Kotex</h4>
                                <p>
                                    A spunky, bold and colourful brand that tells it like it is.
                                </p>
                            </Col>
                            <Col sm={3}>
                                <Image src={mec} responsive/>
                                <h4>MEC</h4>
                                <p>
                                    A nature loving brand inspiring and leading its city dwelling members outdoors.
                                </p>
                            </Col>
                            <Col sm={3}>
                                <Image src={tic} responsive/>
                                <h4>Tic Tacs</h4>
                                <p>
                                    A playful, optimistic and engaging brand that creates little moments of fun.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                <section className="bg-dark-slate-gray text-light mt-5" ref={about => this.about = about}>
                    <Grid className="py-5">
                        <Row className="text-center">
                            <Col smOffset={1} sm={10}>
                                <h2>About Me</h2>

                                <p>
                                    I am an insatiable coffee drinker and travel lover who has fallen in love with the
                                    process of coming up with ideas. Writing, developing, and creating are my life while
                                    extreme organization is just my fun quirk.
                                </p>

                                <p>
                                    I have 2 years of marketing and content development experience. Since graduating
                                    with
                                    my Communications and English degree from Simon Fraser University I have worked as a
                                    freelance copywriter on a variety of brands, and with various agencies on market
                                    strategy and media planning.
                                </p>

                                <p>
                                    Let’s grab a coffee and discuss how I can help bring your brand’s voice to life!
                                </p>

                                <ul className="list-inline links">
                                    <li><a href={LINKEDIN}><Icon name='linkedin-square' size='lg'/></a></li>
                                    <li><a href={"mailto:" + EMAIL}>{EMAIL}</a></li>
                                </ul>

                            </Col>
                            <Col smOffset={4} sm={4}>
                                <Image src={sarah} responsive circle style={{marginTop:"-150px", paddingTop:"150px"}}/>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default App;
