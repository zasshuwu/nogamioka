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
					E-Mail 1 (Official): <code>hoanganh(dot)theodore(at)icloud(dot)com</code>
				</p>
				<p>
					E-Mail 2 (Academic): <code>anhhoang(dot)nguyen(at)concordia(dot)ca</code>
				</p>
				<br></br>
				<script
					src="https://platform.linkedin.com/badges/js/profile.js"
					async
					defer
					type="text/javascript"
				></script>
				<div
					class="badge-base LI-profile-badge"
					data-locale="en_US"
					data-size="large"
					data-theme="dark"
					data-type="VERTICAL"
					data-vanity="aaanh"
					data-version="v1"
				></div>
			</div>
		</Container>
	);
};

export default Contact;
