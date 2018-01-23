import React from 'react'


class AddFishForm extends React.Component {
	createFish() {
		event.preventDefault();
		
		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value,
		}
	}

	render() {
		return (
			<form className="fish-edit" onSubmit="{(e)=> this.createFish(e)}" >
				<input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
				<input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
				<select ref={(input) => this.status = input} name="" id="">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold out</option>
				</select>
				<textarea ref={(input) => this.desc = input} type="text" placeholder="Fish Desc"> </textarea>
				<input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
				<button type="submit"> Add Item </button>
			</form>
		)
	}
}

export default AddFishForm;