import React from "react";
import { Container } from "react-bootstrap";
import "./demo.scss";

const Demo = () => {
	return (
		<Container id="demo" className="demo card">
			<iframe
				src="https://drive.google.com/file/d/1pcaojhVEJRAeUFi7w_fJtueBfr_Ne4Qm/preview"
				width="640"
				height="480"
			></iframe>
		</Container>
	);
};
