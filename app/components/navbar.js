import React from 'react';

export default class Navbar extends React.Component {
 
	render(){
		let buttons = ["profile", "prescriptions", "call", "orders", "settings"];
		return <nav>{buttons.map((button, index)=>{
			return <button 
			className={this.props.selectedSection === button ? "nav-button nav-button-selected" : "nav-button"}
			key={index} 
			onClick={()=>{this.props.onSectionSelected(button)}} >
				{button}
			</button>
		})}</nav>
	}

}