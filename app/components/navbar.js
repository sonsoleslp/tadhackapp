import React from 'react';

export default class Navbar extends React.Component {
 
	render(){
		let buttons = ["orders","prescriptions", "fak", "profile", "call" ];
		let icons = ["search","pharmacy","mesa","notify","call"]
		return <nav>{buttons.map((button, index)=>{
			return <button 
			className={this.props.selectedSection === button ? "nav-button nav-button-selected" : "nav-button"}
			key={index} 
			onClick={()=>{this.props.onSectionSelected(button)}} >
				<img className={"icon-"+icons[index]} src={`images/${icons[index]}.svg`}/>
				{(button === "fak" && this.props.orders > 0 )? <span className="orderNum">{this.props.orders}</span>:null} 
			</button>
		})}</nav>
	}

}