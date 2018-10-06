import React from 'react';
export default class OrderConfirmation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 
		};
	}
	render(){
		return <div className={"view orderconfirmation-view" + (this.props.show ? "": " hide-view" )} >
			 This view is still under construction
		</div>
	}
	
}