import React, {Component} from 'react';
import {Button, Col, Grid, Image, Nav, Navbar, NavItem, Row} from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';

import facial from "./img/facial.jpg"

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
                            <NavItem href="#">My Work</NavItem>
                            <NavItem href="#">My Process</NavItem>
                            <NavItem href="#">About Me</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <Button bsSize="small" className="btn-outline-secondary">Let’s grab a coffee</Button>
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
            </div>
        );
    }
}

export default App;
