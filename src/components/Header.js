import React from 'react';
import Item from './Item';



class Header extends React.Component {

  hideModal=() => {
    this.modal.hide();
  }



  render() {
	return (
      <div className="header">        
        <ul>
        <li><img src='http://i63.tinypic.com/x5nyo2.png' className='titleimage' alt='purposePOS' /></li>
        <li className="navitem"> <textarea></textarea></li> 
        <li className="navitem search">Search: </li>
        <li className="navitem" onClick={this.props.loadSampleData}> Load Sample Data </li>
        <li className="navitem"> Add New Item </li>

        </ul>


      </div>
	)
  }
}


export default Header;

