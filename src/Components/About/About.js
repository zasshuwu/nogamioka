import React from "react";
import "./About.scss";
import { Container, Row, Col } from "react-bootstrap";

const About = () => (
	<Container className="alma-mater card">
		<h2>About</h2>
		<br />
		<h3>Quickies</h3>
		<br />
		<div>
			<Row className="quickies">
				<Col>
					<h4>Work hard, but smart.</h4>
					<h4 className="material-icons">work</h4>
				</Col>
				<Col>
					<h4>Passionate.</h4>
					<h4 className="material-icons">favorite</h4>
				</Col>
				<Col>
					<h4>Driven to learn.</h4>
					<h4 className="material-icons">school</h4>
				</Col>
			</Row>
		</div>
		<br />
		<h3>Alma mater</h3>
		<ul>
			<li>(2017 - 2020) Pure &amp; Applied Science. John Abbott College, QC. Canada</li>
			<li>
				(2014 - 2017) Phổ thông Năng khiếu (High School for the Gifted) - VNU.HCM. Vietnam
			</li>
		</ul>
		<br />
		<h3>Tech stacks</h3>
		<ul>
			<li>Cloud Computing: AWS S3 + EC2, GCP AE + CE + Bucket</li>
			<li>Frameworks: Jekyll (blog), React, Vue, Bootstrap, Sass, Electron</li>
			<li>Languages: Python and C-lang</li>
			<li>Machine Learning: Tensorflow (Python + JS)</li>
			<li>Server: Apache2, Nginx, node, vanillaJS</li>
		</ul>
		<br />
		<h3>Language Proficiency</h3>
		<p>Vietnamese &gt; English &gt; French &gt; Japanese, German.</p>
		<br />
		<h3>Hobbies</h3>
		<p>
			Photography, J-Pop, PC master race, gaming with friends, singing/playing guitar, digital
			arts, writing.
		</p>
	</Container>
);

export default About;
