import React from 'react';
export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 
		};
	}
	render(){
		return <div className={"view  profile-view" + (this.props.show ? "": " hide-view" )} >
			<header>My profile</header>
			<div className="user-info">
				<img className="profile-picture" src="images/profile.png"/>
				<div className="info-box">
					<div className="user-name">Antonio Rodríguez Muñoz</div>
					<div className="user-address">4, Genova Street</div>
				</div>
			</div>
			<div className="profile-buttons">
				<button className="profile-button" onClick={()=>{this.props.onSectionSelected("prescriptions")}}>
					My prescriptions
				</button>
				<button className="profile-button" onClick={()=>{this.props.onSectionSelected("orders")}}>
					My orders
				</button>
			</div>
		</div>

	}

}