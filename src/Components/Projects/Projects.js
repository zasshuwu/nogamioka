import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Projects.scss';

const Projects = () => (
	<Container id="projects" className="projects card">
		<h2>Projects</h2>
		<br />

		<Row style={{ fontWeight: 'bold' }}>
			<Col xs="auto">#</Col>
			<Col xs={3}>ID</Col>
			<Col>Position</Col>
			<Col>Description</Col>
		</Row>
		<Row>
			<Col xs="auto">1</Col>
			<Col xs={3}>
				<a href="https://github.com/zasshuwu/duplicated_accelcamp.git">Inertia Sensing Lab</a>
			</Col>
			<Col>Research Student, Software Architect</Col>
			<Col>Apply machine learning on accelerometric data processing using Python and Tensorflow.</Col>
		</Row>
		<Row>
			<Col xs="auto">2</Col>
			<Col xs={3}>FaceCookery (WIP)</Col>
			<Col>Front-end Developer</Col>
			<Col>A feature-rich recipe-sharing website using React, Bootstrap, Django.</Col>
		</Row>
		<Row>
			<Col xs="auto">3</Col>
			<Col xs={3}>
				<a href="http://maiboatservice.com">Mai Boat Service</a>
			</Col>
			<Col>Full-stack Web Developer and SEO</Col>
			<Col>Family-owned boat repair enterprise based in Orlando, Florida. Static webhosting.</Col>
		</Row>
		<Row>
			<Col xs="auto">4</Col>
			<Col xs={3}>
				<a href="http://github.com/zasshuwu/arduino-phys4eng-w2020.git">Maze navigating vehicle</a>
			</Col>
			<Col>Arduino programmer (C++)</Col>
			<Col>College engineering project. 3D-printed vehicle navigates by ultrasonic sensors controlled by an Arduino Uno.</Col>
		</Row>
		<Row>
			<Col xs="auto">5</Col>
			<Col xs={3}>
				<a href="http://github.com/zasshuwu/mrca-sim-r.git">R project in Statistics</a>
			</Col>
			<Col>n/A</Col>
			<Col>College project using R in statistical analysis. Simulate Most Recent Common Ancestor (MRCA).</Col>
		</Row>
		<Row>
			<Col xs="auto">6</Col>
			<Col xs={3}>
				<a href="https://blog.nogamioka.com">Personal blog</a>
			</Col>
			<Col>n/A</Col>
			<Col>Bilingual blog about aspects of my life. Built with Jekyll blog framework. Hosted on Github Pages.</Col>
		</Row>
		<Row>
			<Col xs="auto">7</Col>
			<Col xs={3}>
				<a href="https://github.com/zasshuwu/researchpapers">Research papers</a>
			</Col>
			<Col>n/A</Col>
			<Col>My (co-)authored research papers.</Col>
		</Row>
	</Container>
);

export default Projects;
