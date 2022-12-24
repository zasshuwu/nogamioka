import React from "react";
import "./ThemeSwitch.scss";
import { Switch, Button } from "@material-ui/core";

const ThemeSwitch = (props) => {
	return (
		<div className="theme-switch-wrapper">
			<Switch
				checked={props.theme}
				onChange={props.themeSwitchHandler}
				name="theme-switch"
				inputProps={{ "aria-label": "theme switch" }}
			></Switch>
		</div>
	);
};

export default ThemeSwitch;
