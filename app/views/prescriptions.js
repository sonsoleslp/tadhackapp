import React from 'react';
import {medicines} from '../constants/constants'
export default class Prescriptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prescriptions : [
				{
					id: 22342342,
					from: "3/10/2018",
					to: "23/11/2018",
					dose: "One with every meal"
				},
				{
					id: 34235345,
					from: "3/10/2018",
					to: "13/10/2018",
					dose: "One every morning"
				},
				{
					id: 14242341,
					from: "3/10/2018",
					to: "29/11/2018",
					dose: "One before going to bed"
				},
				{
					id: 64564564,
					from: "3/10/2018",
					to: "29/11/2018",
					dose: "One with every meal"
				},
				{
					id: 75673567,
					from: "4/9/2018",
					to: "29/11/2018",
					dose: "One every 4 hours"
				},
				{
					id: 35345433,
					from: "4/9/2018",
					to: "29/11/2018",
					dose: "One every 6 hours"
				},
				{
					id: 12562645,
					from: "4/9/2018",
					to: "29/11/2018",
					dose: "Two with every meal"
				},
				{
					id: 25664564,
					from: "4/9/2018",
					to: "29/11/2018",
					dose: "One when in pain"
				},
				{
					id: 65653435,
					from: "5/9/2018",
					to: "29/11/2018",
					dose: "One with every meal"
				},
				{
					id: 15135353,
					from: "5/9/2018",
					to: "29/11/2018",
					dose: "One with every meal"
				},
				{
					id: 33434355,
					from: "5/9/2018",
					to: "29/11/2018",
					dose: "One every 8 hours"
				},
				{
					id: 98234242,
					from: "5/9/2018",
					to: "29/11/2018",
					dose: "One every 3 days"
				},
			]
		};
	}
	render(){
		let filtered = {}
		this.state.prescriptions.map(r => {
			if(filtered[r.from]) {
			 	filtered[r.from] =[ ...filtered[r.from], r.id];
			} else {
			 	filtered[r.from] = [r.id];
			}
		});

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