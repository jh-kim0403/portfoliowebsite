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

function NavBar() {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (

        <Navbar bg="dark" data-bs-theme="dark" expand="md" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand href="#home">JK</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto pe-5">
                        <Nav.Item>
                            <Nav.Link href="#home"><AiOutlineHome />  Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about"><IoPersonOutline />  About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#experience"><IoNewspaperOutline />  Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#projects"><MdOutlineEngineering />  Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;