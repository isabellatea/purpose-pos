import React from 'react';

class AddItemForm extends React.Component {
	render() {
		return (

		  <div>
			<h1>Add Inventory</h1>

			<form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
				<input ref={(input) => this.name = input} type="text" placeholder="Item Name" />
				<input ref={(input) => this.price = input} type="text" placeholder="Item Price" />
				<select ref={(input) => this.status = input}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={(input) => this.desc = input} placeholder="Description"></textarea>
				<input ref={(input) => this.image = input} type="text" placeholder="Photo URL" />
				<button type="submit"> + Add Item</button>

			</form>

		  </div>


		)
	}
}









export default AddItemForm;

