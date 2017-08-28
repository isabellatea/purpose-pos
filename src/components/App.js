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
  
  loadSamplePuppies = () => {
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

  payAndUpdate = (checkoutItems) => {
    const items = {...this.state.items};
    for (var key in this.state.checkout) {
      items[key].status = 'outofStock';
    }
    this.setState({items: items, checkout: {}})
  }

  render() {
    return (
      <div>
      <Header />
        <div className="flex-container">
          <Inventory items={this.state.items} addToCheckout={this.addToCheckout} loadSamplePuppies={this.loadSamplePuppies} addItem={this.addItem}/>
          <Checkout items={this.state.checkout} removeFromCheckout={this.removeFromCheckout} payAndUpdate={this.payAndUpdate}/>
        </div>
      </div>
    )
  }
}


export default App;

