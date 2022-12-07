import React from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import "./Header.scss";
import ThemeSwitchContainer from "../../Containers/ThemeSwitch/ThemeSwitchContainer";

const Header = () => (
	<Navbar id="nav" style={{
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	}} expand="lg" collapseOnSelect>
		<div style={{
			textAlign: 'center',
			color: 'violet',
			fontSize: '4.5rem',
		}}>
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
			{/* <Col>
				<Nav.Link href="#contact">Contact</Nav.Link>
			</Col> */}
			<Col className="theme-switch-space">
				<span style={{ color: "white" }}>
					<span>🌞</span>
					<span>🌚</span>&nbsp;
				</span>
				<ThemeSwitchContainer></ThemeSwitchContainer>
			</Col>
		</Row>
	</Navbar>
);

export default Header;
