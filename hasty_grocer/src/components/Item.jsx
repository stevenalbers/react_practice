import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { goalRef } from '../firebase';

class Item extends Component {
	render() {
		console.log('Item',this.props.item);
		const { email, itemName } = this.props.item;
		return (
			<div>
				<strong>
				{ itemName }
				</strong>
				<span> Entered by <em>{email}</em></span>
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

export default connect(mapStateToProps, null)(Item);