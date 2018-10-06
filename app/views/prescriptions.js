import React from 'react';
import {medicines} from '../constants/constants'
export default class Prescriptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render(){
		let filtered = {}
		this.props.prescriptions.map(r => {
			let date = new Date(r.from);
			let m = date.getMonth();
			let d = date.getDate();
			if(filtered[m]) {
				if( filtered[m][d] ) {
					filtered[m][d] = [...filtered[m][d], {id: r.id }]
				} else {
					filtered[m] = {...filtered[m] , [d]: [{id: r.id }]}
				}
			} else {
				filtered[m] = {[d]: [{id: r.id}]}
			}
		});
		console.log(filtered)
		let dateToday = new Date();
		let locale = "en-us";
		let monthShort = dateToday.getMonth();
		let month = dateToday.toLocaleString(locale, {month: "long"})

		return <div className={"view  prescription-view" + (this.props.show ? "": " hide-view" )} >
			<header>My prescriptions
			</header>
			<p className="prescription-month">{month} ▾ </p>
			<ul className={"prescription-list"  }>
				{Object.keys(filtered[Object.keys(filtered)[0]]).map(d=>{
					let currentDate = (new Date("2018-"+(monthShort+1)+"-"+d));
					return <li className="prescription-month-block">
						<div className="prescription-day-block">
						<span className="day">{(currentDate.toLocaleString(locale, { day: 'numeric' }) )}</span><br/>
						<span className="week">{(currentDate.toLocaleString(locale, {  weekday: 'short' }) )}</span>
						</div>
						<ul className="prescription-items">
						{filtered[Object.keys(filtered)[0]][d].map(p=> {
							return <li className={"prescription-item" + (d > 76 ? " past":"")} >
							<b>{medicines[p.id].name}</b>  - {medicines[p.id].price.toFixed(2)} €<br/>
							{medicines[p.id].dose} 
							<button 
							className="add"
							onClick={()=>{this.props.onPrescriptionSelected(p.id)}}
							>{this.props.shoppingCart.has(p.id) ? "➖":"➕"}</button>
							<br/>
							</li>
						})
						 }
						</ul>
					</li>
				})}
				
			</ul>
		</div>
	}

	 dateOrdinal(d) {
    return d+(31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
		};

}