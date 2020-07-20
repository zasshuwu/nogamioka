import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pic from '../../assets/pic.JPG';
import './Intro.scss';

const Intro = () => (
	<Container id="intro" className="intro card">
		<Row>
			<Col xs="auto" className="author-pic-wrapper">
				<div className="author-pic" style={{ backgroundImage: `url(${pic})` }} />
			</Col>
			<Col>
				<h1>Hoang Anh's portfolio</h1>
				<p>Computer Engineering @ Concordia University.</p>
				<p>Specialized in Web Development and Software Architecture.</p>
				<p>Based in Montreal, Canada.</p>
				<p>
					<a className="github-button" href="https://github.com/zasshuwu" data-color-scheme="no-preference: light; light: light; dark: dark;" aria-label="Follow @ntkme on GitHub">
						Follow @zasshuwu
					</a>
				</p>
				<p>
					<code>hoanganh.theodore(at)icloud(dot)com</code>
				</p>
				<p>
					Twitter: <a href="https://twitter.com/yeetusmagus/">@yeetusmagus</a>
				</p>
				<p>
					Instagram: <a href="https://instagram.com/iamnguyenhoanganh/">iamnguyenhoanganh</a>
				</p>
			</Col>
		</Row>
	</Container>
);

export default Intro;
