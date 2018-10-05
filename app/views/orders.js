import React from 'react';
import {medicines} from '../constants/constants'
export default class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders : [
				{
					date: "12/1/2016",
					status: "Delivered",
					color: "#C40B5A",
					medication: []


				},
				{
					date: "2/4/2016",
					status: "Delivered",
					color: "#9dbae4",
					medication: []


				},
				{
					date: "5/6/2016",
					status: "Delivered",
					color: "#062BE3",
					medication: []


				},
 
				{
					date: "5/10/2018",
					status: "Pending",
					color: "#C40B5A",
					pharmacy: "Goya 89 Pharmacy",
					medication: [
						{ 
							name: "Fluconazol",
							dose: "Prophylactic fungal infection medicine",
						},
						{
							name: "Enantyum",
							dose: "Pain killer"
						}
					],
					price: 7.5

				},
			]
		};
	}
	render(){
		return <div className={"view  orders-view" + (this.props.show ? "": " hide-view" )} >
			<header>My orders</header>
			<ul className="order-list">
				{this.state.orders.map((p,i)=>{
					if (i === this.state.orders.length -1) {
						return <li className="order-item" style={{backgroundColor: p.color, height: this.state.showQR ? '423px':'285px'}} onClick={()=>{this.setState({showQR: !this.state.showQR})}}>
					<span style={{float: 'right'}}>{p.date}</span>
					<h2>{p.pharmacy}</h2>
					<ul className="order-ul">
					{p.medication.map(med=> <li className="order-li"><p ><b>{med.name}</b></p><p>{med.dose}</p></li> )}
					</ul>
					<hr/>
					<p className="right">Total order - {p.price.toFixed(2)}€</p>
					{this.state.showQR ? <div className="qr">
					<br/>
						<img src="images/QR.png" />
					</div>:null}
					</li>
					} else if (!this.state.showQR) {
						return <li className="order-item" style={{backgroundColor: p.color, height: '30px'}}></li>
					}
					return null
					
				})
				}
			</ul>
		</div>
	}


	/*
		curl -v  -X POST "https://api4.apidaze.io/cacb5da2/sms/send" -d 'api_secret=cc4fbb351b7f3b981b9b02db63bc0875&number=34667854803&subject=Your+order&body=The+Drone+is+Coming'
	*/

}