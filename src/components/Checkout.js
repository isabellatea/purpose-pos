import React from 'react';
import CheckoutItem from './CheckoutItem';

class Checkout extends React.Component {
  render() {
	const checkoutItems = Object.keys(this.props.items);
	const total = checkoutItems.reduce((prevTotal, key) => {
	  const item = this.props.items[key];
	  return prevTotal + item.price;
	  }, 0);

	return (
	  <div className="checkout">
		<div className="infobox flex-container">
		  <h3>Total: ${total}</h3>
		  <h4 onClick={() => this.props.payAndUpdate()}>Buy</h4>
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

