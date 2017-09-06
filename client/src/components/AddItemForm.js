import React from 'react';

class AddItemForm extends React.Component {
 	createItem(event) {
		event.preventDefault();
		const item = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			description: this.description.value,
			img_url: this.img_url.value,
			location: this.location.value,
			diet: this.diet.value
		}
		this.props.addItem(item);
		this.addItemForm.reset();
		this.props.modal();
	}

  render() {
	return (
	  <div>
	    <h1>Add New Item</h1>
		  <form ref={(input) => this.addItemForm = input} className="item-edit" onSubmit={(e) => this.createItem(e)}>
			Item Name: <input ref={(input) => this.name = input} type="text"/>
			Item Price: <input ref={(input) => this.price = input} type="text" />
			Description: <textarea ref={(input) => this.description = input}></textarea>
			Photo URL: <input ref={(input) => this.img_url = input} type="text"/>

			Status:
			<select ref={(input) => this.status = input}>
			  <option value="available">Available</option>
			  <option value="unavailable">Out of Stock</option>
			</select>
			<button type="submit" className="modalButton" data-dismiss="modal">Add Item</button>
			Location:
			<select ref={(input) => this.location = input}>
			  <option value="1">Hall: first, Building: blue</option>
			  <option value="2">Hall: second, Building: blue</option>
			  <option value="3">Hall: third, Building: blue</option>
			  <option value="4">Hall: first, Building: green</option>
			</select>
			Diet: 
			<select ref={(input) => this.diet = input}>
			  <option value="1">Vegan</option>
			  <option value="2">Carnivore</option>
			  <option value="3">Omnivore</option>
			</select> 
		  </form>
	  </div>
	)
  }
}


export default AddItemForm;

