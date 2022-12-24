import React, { Component } from "react";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch";

// import { connect } from "react-redux";

class ThemeSwitchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: false,
		};
		this.themeSwitchHandler = this.themeSwitchHandler.bind(this);
	}

	themeSwitchHandler = () => {
		console.log(this.state.theme);
		// let prevState = this.state.lang;
		this.setState(
			() => ({
				theme: !this.state.theme,
			}),
			() => {
				document.documentElement.setAttribute(
					"data-theme",
					this.state.theme === false ? "" : "dark"
				);
			}
		);
	};

	render() {
		{
			console.log(this.props);
			console.log(this.state);
		}
		return (
			<ThemeSwitch
				themeSwitchHandler={this.themeSwitchHandler}
				theme={this.state.theme}
			></ThemeSwitch>
		);
	}
}

export default ThemeSwitchContainer;
