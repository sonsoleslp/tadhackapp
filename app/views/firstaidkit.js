import React from 'react';
import {medicines} from '../constants/constants'
import {Modal} from 'react-bootstrap';

export default class FAK extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			show: false
		}
	}
	render(){
		let totalPrice = 0;
		let medication = []
		return <div className={"view  fak-view" + (this.props.show ? "": " hide-view" )} >
			<header>My First Aid Kit</header>
			{this.props.shoppingCart.size > 0 ? <div>
			<ul className="fak-list">
				{[...this.props.shoppingCart].map(p=>{
					medication.push({name: medicines[p].name, dose: medicines[p].dose })
					totalPrice += medicines[p].price;
					return <li className="fak-item">
					<img className="fak-icon" src={"images/" + medicines[p].img}/>
					<div className="fak-med-info">
						<b> {medicines[p].name} - 	{medicines[p].price.toFixed(2)} €</b> <br/>
				  		{medicines[p].dose}
				  	</div>
					<br/>
					</li>
				})
				}
				<li className="fak-total-order">
				Total order - {totalPrice.toFixed(2)} €
				</li>
			</ul>
			<div className="fak-footer">
				<button	className="fak-place-order-button" onClick={()=> this.setState({show: true}) } >Place order</button>
			</div>
			</div>: <div className="empty-fak">
				<img src="images/pharmacy_illus.svg"/>
				<h2>Your first aid kit is empty</h2>
				<p>Go to the drugstore</p>

			</div>}
			<div className={"notification" + (this.state.showNotification ? " show": "")} onClick={()=>{this.props.onSectionSelected("orders")}}>
				<img src="images/check.svg"/>
				<p>Your order is being verified, you can check the status in “My orders” section. When the drone is getting closer, we’ll send you a notification.</p>			
			</div>
			<Modal className="order-modal" show={this.state.show} onHide={()=> this.setState({show: false}) }>
          <Modal.Body>
            The order has been placed. When would you like to receive it?<br/><br/> 
            <button className="order-modal-button" onClick={()=>{this.props.orderConfirmation(totalPrice, medication); this.setState({show: false});}}>Deliver now</button><br/>
            <button className="order-modal-button" onClick={()=>{this.props.orderConfirmation(totalPrice, medication); this.setState({show: false});}}>Program delivery</button>
          </Modal.Body>
        </Modal>
		</div>

	}
	componentWillUpdate(nextProps,nextState) {
		if (this.state.show && !nextState.show && nextProps.shoppingCart.size === 0 ) {
			this.setState({showNotification: true})
			setTimeout(()=>{
				this.setState({showNotification: false})
			}, 3000);
			setTimeout(()=>{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://tadhack-sms-server-slp.herokuapp.com/sms', true);

				xhr.onload = function () {
				  // Request finished. Do processing here.
				};

				xhr.send(null);
				// alert('SIMULATE SMS');
			}, 7000);
		}
	}

}