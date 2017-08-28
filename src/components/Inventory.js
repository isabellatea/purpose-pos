import React from 'react';
import Item from './Item';
import SkyLight from 'react-skylight';
import AddItemForm from './AddItemForm';

class Inventory extends React.Component {

	render() {
		return (
			<div className="inventory">
	            <ul>
	              {Object.keys(this.props.items)
	                .map(key => <Item key={key} index={key} details={this.props.items[key]} addToCheckout={this.props.addToCheckout}/>)} 
	              
	              <li className="inventory-item">
		          <img src='https://openclipart.org/image/2400px/svg_to_png/218242/1430954247.png' alt="addItem" onClick={() => this.refs.simpleDialog.show()}/>
		          <h3 className="item-name">
		          	Add New Item
		          </h3>
		          <SkyLight hideOnOverlayClicked ref="simpleDialog">

          			<AddItemForm />
       			  </SkyLight>

		  		</li>
		  		<li className="inventory-item">
		          <img src='https://openclipart.org/image/2400px/svg_to_png/218242/1430954247.png' alt="addSamplePuppies" onClick={this.props.loadSamplePuppies}/>
		          <h3 className="item-name">
		          	Add Samples
		          </h3>

		  		</li>
	            </ul>

          </div>


			)
	}
}


export default Inventory;