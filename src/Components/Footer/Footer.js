import React from "react";
import "./Footer.scss";

const Footer = () => (
	<>
		<div className="footer-wrapper">
			<div className="footer-content">
				Built with ReactJs.
				<br />
				Styled with Bootstrap.
				<br />
				Hosted on Github Pages.
				<br />
				In case of conflicts or discrepancies between résumé copy and this website, the
				résumé prevails.
			</div>
		</div>
		<div className="footer-copyright">&#169; 2020 Copyright: Nguyen Hoang Anh (Ted)</div>
	</>
);

export default Footer;
