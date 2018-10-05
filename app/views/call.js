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
			<img className="pharmacist" src="images/pharmacist.svg"/>
			<div className="call-msg">
			<span>If you have any doubts, <br/>consult the pharmacist</span>
			<div className="call-buttons"> 
				<button className="call-button" onClick={this.call}>
				 	<img src ="images/video_white.svg"/>
				 </button>
				 <button className="call-button" onClick={this.call}>
				 	<img src ="images/silence_white.svg"/>
				 </button>
				 <button className="call-button" onClick={this.call}>
				 	<img src ="images/dots_white.svg"/>
				 </button>
				 <button className="call-button" onClick={this.call}>
				 	<img src ="images/call_white.svg"/>
				 </button>		
			 </div>	 
			 </div>
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