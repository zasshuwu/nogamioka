import React from "react";
import { Container } from "react-bootstrap";
import "./Contacts.scss";

const Contact = () => {
	return (
		<Container id="contact" className="contact card">
			<div className="contact-head">
				<h5>Contacts</h5>
			</div>
			<div className="contact-content">
				<p>
					E-Mail: <code>hoanganh.theodore(at)icloud(dot)com</code>
				</p>
				<p>
					Twitter: <a href="https://twitter.com/yeetusmagus/">@yeetusmagus</a>
				</p>
				<p>
					Instagram:{" "}
					<a href="https://instagram.com/iamnguyenhoanganh/">iamnguyenhoanganh</a>
				</p>
			</div>
		</Container>
	);
};

export default Contact;
