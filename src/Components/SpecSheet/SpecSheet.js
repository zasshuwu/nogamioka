import React from "react";
import "./SpecSheet.scss";
import { Container } from "react-bootstrap";

const SpecSheet = () => (
	<Container className="specsheet card">
		<div className="section-header">
			<h2>Workstation Specs</h2>
		</div>
		<br></br>
		<div>
			<h3>Desktop</h3>
			<br></br>
			<code>
				<ul>
					<li>CPU: Ryzen 3 3600 @ 3.60GHz</li>
					<li>GPU: nVidia GTX 1080 8GB @ 1721MHz 2560 CUDAs</li>
					<li>RAM: 2x8GB @ 3200MHz DDR4</li>
					<li>OS: Windows 10 Pro 20H2 &amp; Ubuntu 20.04.1</li>
				</ul>
			</code>
		</div>
		<br></br>
		<div>
			<h3>Laptop 1</h3>
			<br></br>
			<code>
				<ul>
					<li>CPU: Core i7-8557U @ 1.70GHz</li>
					<li>GPU: Iris Plus 645</li>
					<li>RAM: 2x8GB @ 2133MHz LPDDR3</li>
					<li>OS: macOS Catalina</li>
				</ul>
			</code>
		</div>
		<br></br>
		<div>
			<h3>Laptop 2</h3>
			<br></br>
			<code>
				<ul>
					<li>CPU: Core i7-6820HQ @ 2.70GHz</li>
					<li>GPU: nVidia Quadro M1000M 2GB @ 993MHz 512 CUDAs</li>
					<li>RAM: 2x8GB @ 2666MHz DDR4</li>
					<li>OS: Windows 10 Pro 1909 &amp; Ubuntu 20.04</li>
				</ul>
			</code>
		</div>
	</Container>
);

export default SpecSheet;
