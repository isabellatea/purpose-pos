


import React from 'react';




class Item extends React.Component {
  render() {
  	const {details, index} = this.props;
  	return (
  		<li className="inventory-item">
          <img src={details.image} alt="100x100" />
          <h3 className="item-name">
          	{details.name}
          </h3>
          <p>{details.desc}</p>
          <span className="itemPrice">{"$" + details.price}</span>
          <button className ="adoptButton" type="button" onClick={() => this.props.addToCheckout(index)}>Adopt Me!</button> 

  		</li>
  	) 
  }
}

export default Item;