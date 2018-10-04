import React from 'react';
import {medicines} from '../constants/constants'
export default class Prescriptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prescriptions : [
				{
					id: 22342342,
					from: "23/9/2018",
					to: "23/11/2018",
				},
				{
					id: 34235345,
					from: "13/8/2018",
					to: "13/10/2018",
				},
				{
					id: 14242341,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 64564564,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 75673567,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 35345433,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 12562645,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 25664564,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 65653435,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 15135353,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 33434355,
					from: "24/9/2018",
					to: "29/11/2018"
				},
				{
					id: 98234242,
					from: "24/9/2018",
					to: "29/11/2018"
				},
			]
		};
	}
	render(){
		let noOrder = (this.props.shoppingCart && this.props.shoppingCart.size > 0 ? "" : "  no-order");
		return <div className={"view  prescription-view" + (this.props.show ? "": " hide-view" )} >
			<header>My prescriptions</header>
			<ul className={"prescription-list" + noOrder}>
				{this.state.prescriptions.map(p=>{
					return <li className="prescription-item">
					<b>{medicines[p.id].name}</b> 
					<button 
					className="add"
					onClick={()=>{this.props.onPrescriptionSelected(p.id)}}
					>{this.props.shoppingCart.has(p.id) ? "✓":"➕"}</button>
					<span className="price">{medicines[p.id].price.toFixed(2)} €</span>
					<br/>
						{p.from} - {p.to}
					</li>
				})
				}
			</ul>
			<div className={ "shopping-cart" + noOrder} >
				<button onClick={this.props.orderConfirmation} className="place-order-button"> Place order</button>
				Your shopping cart <br/>
				{this.props.shoppingCart.size} item(s)
			</div>
		</div>
	}

}