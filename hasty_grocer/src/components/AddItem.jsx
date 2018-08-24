import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemRef } from '../firebase';

class AddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: ''
		}
	}

	addItem() {
		console.log("this", this);
		const { itemName } = this.state;
		const { email } = this.props.user;
		itemRef.push({email, itemName});
	}

	render() {
		return ( 
			<div className="form-inline">
				<div className="form-group">
					<input
						type="text"
						placeholder="add item"
						className="form-control"
						onChange={event => this.setState({itemName: event.target.value})}
					/> 

					<button
						className="btn btn-success"
						type="button"
						onClick={() => this.addItem()}
					>
					Submit
					</button>
				</div>
			</div>
		)
	}

}

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	}
}

export default connect(mapStateToProps, null)(AddItem);