import React from "react";
import { Navbar, Nav, Link, Col, Row } from "react-bootstrap";
import "./Header.scss";

const Header = () => (
    <Navbar id="nav" className="justify-content-center" expand="lg" collapseOnSelect>
        <div className="branding" href="/">
            ノガ三オカ
        </div>
        <Row>
            <Col>
                <Nav.Link href="#intro">Intro</Nav.Link>
            </Col>
            <Col>
                <Nav.Link href="#about">About</Nav.Link>
            </Col>
            <Col>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Col>
        </Row>
    </Navbar>
);

export default Header;
