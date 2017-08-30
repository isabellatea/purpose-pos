import React from 'react';
import Item from './Item';
import SkyLight from 'react-skylight';
import AddItemForm from './AddItemForm';



class Inventory extends React.Component {

  hideModal=() => {
    this.modal.hide();
  }

  render() {
	return (
	  <div className="inventory">
	    <ul>
	      {Object.keys(this.props.items)
	        .map(key => <Item key={key} index={key} details={this.props.items[key]} addToCheckout={this.props.addToCheckout}/>)} 
	              
	      <li className="inventory-item">
		    <img src='https://openclipart.org/image/2400px/svg_to_png/218242/1430954247.png' alt="addItem" onClick={() => this.modal.show()}/>
		    <h3 className="item-name"> Add New Item </h3>
		    <SkyLight hideOnOverlayClicked ref={(modal) => this.modal = modal}>
          	  <AddItemForm addItem={this.props.addItem} modal={this.hideModal}/>
       		</SkyLight>
		  </li>
		  
		  <li className="inventory-item">
		    <img src='https://openclipart.org/image/2400px/svg_to_png/218242/1430954247.png' alt="addSamplePuppies" onClick={this.props.loadSampleData}/>
		    <h3 className="item-name"> Load Sample Data </h3>
		  </li>
	    </ul>
      </div>
	)
  }
}


export default Inventory;

