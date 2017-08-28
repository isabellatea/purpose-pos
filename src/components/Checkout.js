import React from 'react';
import CheckoutItem from './CheckoutItem';

class Checkout extends React.Component {
	render() {
		return (
			<div className="checkout">
				<div className="infobox">
			<h3>Checkout:</h3>
				</div>
				<ul>
	              {Object.keys(this.props.items)
	                .map(key => <CheckoutItem key={key} index={key} details={this.props.items[key]} removeFromCheckout={this.props.removeFromCheckout}/>)} 
	            </ul>
			</div>


			)
	}
}


export default Checkout;