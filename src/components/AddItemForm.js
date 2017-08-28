import React from 'react';

class AddItemForm extends React.Component {
	createItem(event) {
		event.preventDefault();
		const item = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}
		this.props.addItem(item);
		this.addItemForm.reset();
	}
	render() {
		return (

		  <div>
			<h1>Add Inventory</h1>

			<form ref={(input) => this.addItemForm = input} className="item-edit" onSubmit={(e) => this.createItem(e)}>
			Item Name:
				<input ref={(input) => this.name = input} type="text"/>
			Item Price: 
				<input ref={(input) => this.price = input} type="text" />
			Description:
				<textarea ref={(input) => this.desc = input}></textarea>
			Photo URL:
				<input ref={(input) => this.image = input} type="text"/>
			<button type="submit" className="modalButton" data-dismiss="modal"> + Add Item</button>
			Status:
				<select ref={(input) => this.status = input}>
					<option value="available">Available</option>
					<option value="unavailable">Out of Stock</option>
				</select> 


			</form>

		  </div>


		)
	}
}



export default AddItemForm;

