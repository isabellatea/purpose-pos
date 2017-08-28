import React, { Component } from 'react';
// import logo from './logo.svg';
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
    this.addToCheckout = this.addToCheckout.bind(this);
    this.loadSamplePuppies = this.loadSamplePuppies.bind(this);
    this.removeFromCheckout = this.removeFromCheckout.bind(this);
    this.addItem = this.addItem.bind(this);

  }
  
  loadSamplePuppies() {
    this.setState({items: sampleItems})
  }

  addToCheckout(key) {
    const checkout = {...this.state.checkout};
    checkout[key] = this.state.items[key];
    this.setState({checkout: checkout})
  }

  removeFromCheckout(key) {
    const checkout = {...this.state.checkout};
    delete checkout[key];
    this.setState({checkout: checkout})
  }

  addItem(item) {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    this.setState({items: items})
  }


  render() {
    return (
      <div>
      <Header />
        <div className="flex-container">
          <Inventory items={this.state.items} addToCheckout={this.addToCheckout} loadSamplePuppies={this.loadSamplePuppies} addItem={this.addItem}/>
          <Checkout items={this.state.checkout} removeFromCheckout={this.removeFromCheckout} />
        </div>
      </div>

    );
  }
}

export default App;
