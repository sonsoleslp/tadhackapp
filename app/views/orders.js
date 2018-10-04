import React from 'react';
import {medicines} from '../constants/constants'
export default class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders : [
				{
					date: "12/1/2016",
					status: "Delivered"
				},
				{
					date: "2/4/2016",
					status: "Delivered"
				},
				{
					date: "5/6/2016",
					status: "Delivered"
				},
				{
					date: "8/10/2016",
					status: "Delivered"
				},
				{
					date: "15/1/2017",
					status: "Delivered"
				},
				{
					date: "18/4/2017",
					status: "Delivered"
				},
				{
					date: "19/7/2017",
					status: "Delivered"
				},
				{
					date: "21/9/2017",
					status: "Delivered"
				},
				{
					date: "23/12/2017",
					status: "Delivered"
				},
				{
					date: "25/2/2018",
					status: "Pending"
				},
				{
					date: "29/5/2018",
					status: "Pending"
				},
				{
					date: "31/8/2018",
					status: "Pending"
				},
			]
		};
	}
	render(){
		return <div className={"view  orders-view" + (this.props.show ? "": " hide-view" )} >
			<header>My orders</header>
			<ul className="prescription-list">
				{this.state.orders.map(p=>{
					return <li className="prescription-item">
					<b>Date:</b> {p.date} <br/>
				 	<b>Status:</b> <span className={"status" + " status-"+ (p.status)} >{p.status} <span className="little-circle"></span></span>
					<br/>
					</li>
				})
				}
			</ul>
		</div>
	}


	/*
		curl -v  -X POST "https://api4.apidaze.io/cacb5da2/sms/send" -d 'api_secret=cc4fbb351b7f3b981b9b02db63bc0875&number=34667854803&subject=Your+order&body=The+Drone+is+Coming'
	*/

}