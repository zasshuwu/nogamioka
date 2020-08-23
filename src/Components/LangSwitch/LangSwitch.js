import React from "react";
import "./LangSwitch.scss";
import { Switch, Button } from "@material-ui/core";

const LangSwitch = (props) => {
	return (
		<div className="lang-switch-wrapper">
			<Switch
				checked={props.lang}
				onChange={props.langSwitchHandler}
				name="lang-switch"
				inputProps={{ "aria-label": "lang switch" }}
			></Switch>
		</div>
	);
};

export default LangSwitch;
