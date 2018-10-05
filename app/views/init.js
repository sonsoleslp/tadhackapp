import React from 'react';
export default class Init extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 
		};
	}
	render(){
		return <div className={"init-view" + (this.props.show ? "":" hide-view")} onClick={e=>{
			let elem = document.body;
			if (elem.requestFullscreen) {
			  elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) { /* Firefox */
			  elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			  elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { /* IE/Edge */
			  elem.msRequestFullscreen();
			}
		}}>
			 <img src="images/logo.svg"/>
		</div>
	}

}