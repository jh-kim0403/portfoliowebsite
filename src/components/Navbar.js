import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
    const [activeKey, setActiveKey] = useState("home");
    const [expand, updateExpanded] = useState(false);
    const [navState, updateNavbar] = useState(false);


    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (

        <Navbar expand="lg" fixed="top" className={navState ? "sticky" : "blured"}>
            <Container>
                <Navbar.Brand href="/" className="brand">JK</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto pe-auto"
                        activeKey={activeKey}
                        onSelect={key => setActiveKey(key)}>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" eventKey="/"><AiOutlineHome />  <span>Home</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" eventKey="/about"><IoPersonOutline />  <span>About</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" eventKey="/experience"><IoNewspaperOutline />  <span>Experience</span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" eventKey="/projects"><MdOutlineEngineering />  <span>Projects</span></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;