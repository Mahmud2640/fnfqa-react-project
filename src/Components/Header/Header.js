import React from "react";
import "./Header.css";
import logo from "../../Images/Logo/logo-removebg.png";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mx-auto freez"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a href="#top">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#projects">PROJECTS</a>
            <a href="#teams">EMPLOYEE</a>
            <a href="#about">ABOUT US</a>
          </Nav>
          <Nav className="freez">
            <a href="https://forms.gle/cyCXhEkAUtSpPLt69" target="_blank">
              JOB APPLY
            </a>
            <a href="#contact">CONTACT US</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
