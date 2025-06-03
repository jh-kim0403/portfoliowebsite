import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import homeLogo from "../../assets/cartoon.png";
import "./Home.css";
import Particle from "../Particle";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";

function Home() {
    return (
        <section>
            <Container fluid className="home-section">
                <Particle id="particlesTransparent" color={false} />
                <Container className="home-content">
                    <Row>
                        <Col md="7" className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I am
                                <strong className="main-name"> Jae Kim</strong>
                            </h1>
                            <div className="home-type">
                                <Type />
                            </div>
                        </Col>
                        <Col md="5">
                            <div className="img-crop">
                                <img src={homeLogo} alt="home pic" className="cropped-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid>
                <Particle id="particlesDark" color={true} />
                <Container>
                    <Row>

                        <Col lg={4} className="myAvtar">
                            <motion.img
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: 0.8 }}
                                src={avatar} alt="Avatar"
                                style={{width: 300,
                                    height: 400,
                                    justifyContent: "center" }}/>
                        </Col>
                        <Col  lg={8} className="home-about-description">
                            <h1 style={{ fontSize: "2.6em" }}>
                                LET ME <span> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="home-about-body">
                                I took interest in software when I took APCS in high school. 
                                <br />
                                <br />I am most comfortable with
                                <i>
                                    <b> Java and Python. </b>
                                </i>
                                <br />
                                <br />
                                My field of interest's are building new &nbsp;
                                <i>
                                    <b>Web applications </b> and
                                    also in areas related to{" "}
                                    <b >
                                        machine learning.
                                    </b>
                                </i>
                                <br />
                                <br />
                                Whenever possible, I also apply my passion for developing products
                                with <b >Node.js</b> and
                                <i>
                                    <b >
                                        {" "}
                                        Modern Javascript Library and Frameworks
                                    </b>
                                </i>
                                &nbsp; like
                                <i>
                                    <b > React.js and Next.js</b>
                                </i>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;