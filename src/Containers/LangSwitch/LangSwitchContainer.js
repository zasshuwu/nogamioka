import React, { Component } from "react";
import LangSwitch from "../../Components/LangSwitch/LangSwitch";

// import { connect } from "react-redux";

class LangSwitchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lang: false,
		};
		this.langSwitchHandler = this.langSwitchHandler.bind(this);
	}

	langSwitchHandler = () => {
		console.log(this.state.lang);
		// let prevState = this.state.lang;
		this.setState(() => ({
			lang: !this.state.lang,
		}));
	};

	render() {
		{
			console.log(this.props);
			console.log(this.state);
		}
		return (
			<LangSwitch
				langSwitchHandler={this.langSwitchHandler}
				lang={this.state.lang}
			></LangSwitch>
		);
	}
}

export default LangSwitchContainer;
