import React from 'react';
export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 
		};
	}
	render(){
		return <div className={"view  profile-view" + (this.props.show ? "": " hide-view" )} >
			<div className="user-info">
				<nav className="nav-profile"><span>close</span> <span>edit</span></nav>
				<img className="profile-picture" src="images/268x268-hombre-de-brazos-cruzados.png"/>
				<br/>
				<h2>Jonh Doe</h2>
				<div className="info-box">
					
				</div>
			</div>
			<div className="profile-buttons">
				<button className="profile-button"  >
					<span>Birthdate</span><span>November 28, 1950</span><span className="arrow-profile">›</span>
				</button>
				<button className="profile-button"  >
					<span>Gender</span><span>Male</span><span className="arrow-profile">›</span>
				</button>
				<button className="profile-button"  >
					<span>Blood type</span><span>A+</span><span className="arrow-profile">›</span>
				</button>
				<button className="profile-button"  >
					<span>Condition</span><span>Cardiac arrythmia</span>< span className="arrow-profile">›</span>
				</button>
				<button className="profile-button"  >
					<span>Emergency</span><span>1 800 247-7246</span><span className="arrow-profile">›</span>
				</button>			

			</div>
			<br/>												
			<div className="profile-buttons">
				<button className="profile-button" onClick={()=>{this.props.onSectionSelected("prescriptions")}}>
					<span className="blue">Medical history</span> <span className="arrow-profile">›</span>
				</button>
			</div>	
			<div className="profile-buttons">
				<button className="profile-button" onClick={()=>{this.props.onSectionSelected("prescriptions")}}>
					<span  className="blue">Prescriptions</span> <span className="arrow-profile">›</span>
				</button>
			</div>	
			<div className="profile-buttons">		
				<button className="profile-button" onClick={()=>{this.props.onSectionSelected("orders")}}>
					<span  className="blue">Orders</span> <span className="arrow-profile">›</span>
				</button>
			</div>
			<div className="logout">log out</div>
		</div>

	}

}