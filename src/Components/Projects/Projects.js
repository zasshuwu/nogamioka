import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Projects.scss";

const Projects = () => (
	<Container id="projects" className="projects card">
		<div className="section-header">
			<h2>Projects</h2>
		</div>
		<br />
		<div>
			<Row style={{ fontWeight: "bold" }}>
				<Col xs={1}>#</Col>
				<Col>ID</Col>
				<Col>Position</Col>
				<Col xs={7}>Description</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col xs={1}>1</Col>
				<Col>Applied NLP (Concordia University)</Col>
				<Col>Research student</Col>
				<Col xs={7}>
					Assist research progress by running and reporting XLNet models on datasets.
				</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col xs={1}>2</Col>
				<Col>
					<a href="https://islab.ca">Inertial Sensing Lab</a>
				</Col>
				<Col>Web Dev, DevOps</Col>
				<Col xs={7}>
					Applied machine learning on accelerometric data processing using Python and
					Tensorflow.
				</Col>
			</Row>
		</div>
		{/* <div>
			<Row>
				<Col xs={1}>2</Col>
				<Col>FaceCookery (WIP)</Col>
				<Col>Front-end Developer</Col>
				<Col xs={7}>
					A feature-rich recipe-sharing website using React, Bootstrap, Django.
				</Col>
			</Row>
		</div> */}
		{/* <div>
			<Row>
				<Col xs={1}>3</Col>
				<Col>
					<a href="http://maiboatservice.com">Mai Boat Service</a>
				</Col>
				<Col>Full-stack Web Developer and SEO</Col>
				<Col xs={7}>
					Family-owned boat repair enterprise based in Orlando, Florida. Static
					webhosting.
				</Col>
			</Row>
		</div> */}
		<div>
			<Row>
				<Col xs={1}>3</Col>
				<Col>
					<a href="http://github.com/aaanh/arduino-phys4eng-w2020.git">
						Maze navigating vehicle
					</a>
				</Col>
				<Col>Arduino programmer (C++)</Col>
				<Col xs={7}>
					College engineering project. 3D-printed vehicle navigates by ultrasonic sensors
					controlled by an Arduino Uno.
				</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col xs={1}>4</Col>
				<Col>
					<a href="http://github.com/aaanh/mrca-sim-r.git">R project in Statistics</a>
				</Col>
				<Col>n/A</Col>
				<Col xs={7}>
					College project using R in statistical analysis. Simulate Most Recent Common
					Ancestor (MRCA).
				</Col>
			</Row>
		</div>
		{/* <div>
			<Row>
				<Col xs={1}>6</Col>
				<Col>
					<a href="https://blog.nogamioka.com">Personal blog</a>
				</Col>
				<Col>n/A</Col>
				<Col xs={7}>
					Bilingual blog about aspects of my life. Built with Jekyll blog framework.
					Hosted on Github Pages.
				</Col>
			</Row>
		</div> */}
		<br /> <br />
		<div className="research-papers-wrapper">
			<h2>Research papers</h2>
			<p>All the papers I (co-)authored.</p>
			<a href="https://github.com/aaanh/researchpapers">Github Repository</a>
		</div>
	</Container>
);

export default Projects;
