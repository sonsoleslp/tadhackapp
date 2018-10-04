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
	componentWillReceiveProps(nextProps) {
		if (!this.props.show && nextProps.show ) {
			setTimeout(()=>{
				fetch("https://api4.apidaze.io/cacb5da2/sms/send", {
					method: 'POST',
					mode: 'no-cors',
					body: "api_secret=cc4fbb351b7f3b981b9b02db63bc0875&number=34667854803&subject=Your+order&body=The+Drone+is+Coming"
				})

			},4000)
		}
	}

	/*
		curl -v  -X POST "https://api4.apidaze.io/cacb5da2/sms/send" -d 'api_secret=cc4fbb351b7f3b981b9b02db63bc0875&number=34667854803&subject=Your+order&body=The+Drone+is+Coming'
	*/
}