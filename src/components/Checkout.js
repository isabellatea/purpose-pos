import React from 'react';
import CheckoutItem from './CheckoutItem';

class Checkout extends React.Component {
  	
  // validate = (code) => {
  //   if (code === 'test') {
  //   	console.log('yay!')
  //   } else {
  //   	console.log('nay...')
  //   }
  // }

  render() {
	const checkoutItems = Object.keys(this.props.items);
	let total = checkoutItems.reduce((prevTotal, key) => {
	  const item = this.props.items[key];
	  return prevTotal + item.price;
	  }, 0);

	return (
	  <div className="checkout">
		<div className="infobox flex-container">
		  <h3>Total: ${total}</h3>
		  <h4 onClick={() => this.props.payAndUpdate()}>Pay</h4>
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


		// <div className='coupon-code'>
  //         <form>
  //         <span className='coupon-title'>Coupon:</span> <input type="text" ref={(input) => this.couponcode = input}/> 
  //         <button type="submit" onClick={this.validate(this.couponcode)}>Submit</button>
  //         </form>
		// </div>