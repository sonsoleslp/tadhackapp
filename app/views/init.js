import React from 'react';
export default class Init extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 
		};
	}
	render(){
		return <div className={"init-view" + (this.props.show ? "":" hide-view")} >
			 <img src="images/logo.png"/>
		</div>
	}

}