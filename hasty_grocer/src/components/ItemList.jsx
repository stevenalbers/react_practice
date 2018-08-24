import React, { Component } from 'react';
import { itemRef } from '../firebase';
import { setItems } from '../actions';
import { connect } from 'react-redux';

class ItemList extends Component {
	componentDidMount() {
		itemRef.on('value', snap => {
			let items = [];
			snap.forEach(item => {
				const { email, itemName } = item.val();
				items.push({ email, itemName });
			})
			console.log('items',items);
			this.props.setItems(items);
		})
	}

	render() {
			console.log('this.props.items', this.props.items);

		return (
			<div>
			{
				this.props.items.map(item => {
					return (
						<div>{item.itemName}</div>
					)
				})
			}
			</div>
		)
	}

}

function mapStateToProps(state) {
	const { items } = state;
	return {
		items
	}
}

export default connect(mapStateToProps, { setItems })(ItemList)