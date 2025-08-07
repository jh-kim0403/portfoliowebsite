import React from "react";
import Skills from "./Skills.js";
import TempSkills from "./TempSkills.js";
import Particle from "../Particle.js";
import './About.css';
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import aboutPic from "../../assets/about-pic.png";

function About() {
    return (
        <section className="about-section">
            <Container className="about-content">
                <Row>
                    <Col className="about-paragraph" md="7">
                        <h1>
                            Hey there :)
                        </h1>
                        <h1>
                            Nice to meet you.
                        </h1>
                        <p>
                            Currently, working on individual projects. <br />
                            In a mid life crisis debating to start my own business or get a job <br />
                            but that's probably not what you were looking for on this page<br />
                            Here are some of my hobbies since you'd like to know more about me:
                        </p>
                        <ListGroup className="transparent-list">
                            <ListGroup.Item>👉 Cooking ( I hope to open my own restaurant one day )</ListGroup.Item>
                            <ListGroup.Item>👉 Gaming ( I used to be Top 100 Valorant players in NA )</ListGroup.Item>
                            <ListGroup.Item>👉 Basketball ( I enjoy this the most, but I am one of the worst players on the court )</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md="5">
                        <div className="img-crop">
                            <img src={aboutPic} alt="about pic" className="cropped-img" />
                        </div>
                    </Col>
                </Row>

            </Container>
            <Particle id="particlesDark" color={true} />
            <Skills />
            {/* <TempSkills /> */}
        </section>
    )

}

export default About;