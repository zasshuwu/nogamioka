import React from "react";
import "./About.scss";
import { Container, Row, Col } from "react-bootstrap";

const About = () => (
	<Container id="about" className="alma-mater card">
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
		<div className="gh-stats-wrapper">
			<img
				style={{
					filter: "none",
				}}
				src="https://camo.githubusercontent.com/02aa33baf0ebed4c72f4720263427b658ac1762d/68747470733a2f2f6769746875622d726561646d652d73746174732e7a617373687577752e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d7a61737368757775266c61796f75743d636f6d70616374267468656d653d746f6b796f6e6967687426686964655f626f726465723d74727565"
			></img>
		</div>
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
