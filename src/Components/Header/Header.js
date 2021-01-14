import React from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import "./Header.scss";
import ThemeSwitchContainer from "../../Containers/ThemeSwitch/ThemeSwitchContainer";

const Header = () => (
	<Navbar id="nav" className="justify-content-center" expand="lg" collapseOnSelect>
		<div className="branding" href="/">
			ANH
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
			{/* <Col>
				<Nav.Link href="#contact">Contact</Nav.Link>
			</Col> */}
			<Col className="theme-switch-space">
				<span style={{ color: "white" }}>
					<span className="material-icons">brightness_7</span>
					<span className="material-icons">brightness_3</span>&nbsp;
				</span>
				<ThemeSwitchContainer></ThemeSwitchContainer>
			</Col>
		</Row>
	</Navbar>
);

export default Header;
