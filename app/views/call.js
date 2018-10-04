import React from 'react';
const APIdaze = require('apidaze-js')

export default class Call extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 
		};
	}
	render(){
		return <div className={"view call-view" + (this.props.show ? "": " hide-view" )} >
			<div className="call-msg">
			<span>Call your pharmacist if you have any doubt regarding your medication</span>
			 <button className="call-button" onClick={this.call}>
			 	<img src ="images/phone.svg"/>
			 </button></div>
		</div>
	}

	call(){
		const client = new APIdaze.CLIENT({
			apiKey: "f4a12d4f", 
			wsurl: "wss://ws2-dev-fr-par-1.apidaze.io",
			 onReady: function() {
             	console.log('I AM READY')
	        },
	        onDisconnected: function() {
	           console.log('I AM READY')
	        },
	        onAudiostats: function(event) {
	           console.log('Disconnected')
	        }
		})
		var call = client.call(
	    {
	        my_parameter_that_contains_a_number: "34667854803",
	        my_web_session_id: "3d1n1de32bge65hbokapdm"
	    },
	    {
	        onRinging: function() {
	            console.log("RINGING")
	        },
	        onAnswer: function() {
	            console.log("answered")
	        },
	        onHangup: function() {
	           console.log("onHangup")
	        }
	    }
	);

	}



}