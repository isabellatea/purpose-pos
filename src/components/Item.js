import React from 'react';

class Item extends React.Component {
  render() {
  	const {details, index} = this.props;
  	const available = details.status === 'available';
  	const buttonText = available ? 'Add' : 'Out Of Stock';
  	return (
  	  <li className="inventory-item">
        <img src={details.image} alt="item" />
        <h3 className="item-name"> {details.name} </h3>
        <p>{details.desc}</p>
        <span className="itemPrice">{"$" + details.price}</span>

        <button className ="addButton" type="button" disabled={!available} onClick={() => this.props.addToCheckout(index)}>{ buttonText }</button>
   
  	  </li>
  	) 
  }
}


export default Item;

