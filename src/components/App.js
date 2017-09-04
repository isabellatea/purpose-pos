import React, { Component } from 'react';
import '../css/style.css';
import Checkout from './Checkout';
import sampleItems from '../sample-items'
import Header from './Header';
import Inventory from './Inventory';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: {},
      checkout: {}
    };
  }
  
  loadSampleData = () => {
    this.setState({items: sampleItems})
  }

  addToCheckout = (key) => {
    const checkout = {...this.state.checkout};
    checkout[key] = this.state.items[key];
    this.setState({checkout: checkout})
  }

  removeFromCheckout = (key) => {
    const checkout = {...this.state.checkout};
    delete checkout[key];
    this.setState({checkout: checkout})
  }

  addItem = (item) => {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    this.setState({items: items})
  }

  payAndUpdate = () => {
    const items = {...this.state.items};
    for (var key in this.state.checkout) {
      items[key].status = 'outofStock';
    }
    this.setState({items: items, checkout: {}})
  }

  restock = () => {
    const items = {...this.state.items};
    for (var key in this.state.items) {
      items[key].status = 'available';
    }
    this.setState({items: items, checkout: {}})
  }

  sortByAvailable = () => {
    const items = {...this.state.items};
    const arrayOfItems = [];
    for (var key in items) {
      arrayOfItems.push(items[key]);
    }
    
    const arrangeBy = function() {
      return function(a, b) {
        if(a['name'] < b['name']){
            return -1;
        }else if(a['name'] > b['name']){
            return 1;
        }else{
            return 0;   
        }
      }
    }
    console.log(items);
    console.log(arrayOfItems);
    console.log(arrayOfItems.sort(arrangeBy()));
  }


  render() {
    return (
      <div>
      <Header items={this.state.items} addItem={this.addItem} loadSampleData={this.loadSampleData} restock={this.restock} sortByAvailable={this.sortByAvailable}/>
        <div className="flex-container">
          <Inventory items={this.state.items} addToCheckout={this.addToCheckout} loadSampleData={this.loadSampleData} addItem={this.addItem}/>
          <Checkout items={this.state.checkout} removeFromCheckout={this.removeFromCheckout} payAndUpdate={this.payAndUpdate}/>
        </div>
      </div>
    )
  }
}


export default App;

