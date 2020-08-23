import React from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import "./Header.scss";
import LangSwitchContainer from "../../Containers/LangSwitch/LangSwitchContainer";

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
				<Nav.Link href="#projects">Projects</Nav.Link>
			</Col>
			<Col>
				<Nav.Link href="#websites">Websites</Nav.Link>
			</Col>
			{/* <Col>
				<Nav.Link href="#contact">Contact</Nav.Link>
			</Col> */}
			<Col className="lang-switch-space">
				<span style={{ color: "white" }}>EN &harr; VI&nbsp;</span>
				<LangSwitchContainer></LangSwitchContainer>
			</Col>
		</Row>
	</Navbar>
);

export default Header;
