import React from 'react';

class CheckoutItem extends React.Component {
  render() {
    const {details, index} = this.props;
    return (
      <li className="checkout-item" onClick={() => this.props.removeFromCheckout(index)}>
        <img src={details.img_url} alt="puppy"/>
        <span className="checkout-price">{"$" + details.price}</span>
        <h3 className="item-name">{details.name}</h3>
        <p>{details.description}</p>
      </li>
    ) 
  }
}


export default CheckoutItem;

