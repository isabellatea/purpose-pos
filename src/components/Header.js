import React from 'react';
import SkyLight from 'react-skylight';
import AddItemForm from './AddItemForm';

class Header extends React.Component {
  hideModal=() => {
    this.modal.hide();
  }
  
  render() {
    const modalStyle = {
      color: '#000000',
      height: '44%'
    };

	return (
        <div className="header">        
          <ul>
          <li><img src='http://i63.tinypic.com/x5nyo2.png' alt='purposePOS' /></li>
          <li className="navitem"> <textarea></textarea></li> 
          <li className="navitem search">Search: </li>
          <li className="navitem" onClick={this.props.restock}> Restock </li>
          <li className="navitem" onClick={this.props.loadSampleData}> Load Sample Data </li>
          <li className="navitem" onClick={() => this.modal.show()}>Add New Item</li>
        </ul>
          <SkyLight dialogStyles={modalStyle} hideOnOverlayClicked ref={(modal) => this.modal = modal}>
            <AddItemForm addItem={this.props.addItem} modal={this.hideModal}/>
          </SkyLight>
        </div>
	)
  }
}


export default Header;

