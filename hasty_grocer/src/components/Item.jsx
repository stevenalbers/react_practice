import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemRef } from '../firebase';

class Item extends Component {

	removeItem() {
		console.log("removed", this.props.item);
		const { email } = this.props.user;
		const { itemName, serverKey } = this.props.item;

		itemRef.child(serverKey).remove();

		// BUG: item maintains the strikethrough status of the element below it
		// when elements are deleted
	}

	strike() {
		const { serverKey } = this.props.item;
		console.log('key', {serverKey});
		var strikeText = document.getElementById(serverKey);
		console.log('striketext', strikeText);
		if(strikeText.getAttribute("style"))
		{
			strikeText.removeAttribute("style")
		}
		else
		{
			strikeText.style.setProperty("text-decoration","line-through");
		}
	}

	render() {
		console.log('Item',this.props.item);
		const { email, itemName, serverKey } = this.props.item;
		return (
			<div>
				<strong
					id={serverKey}
					onClick={() => this.strike()}>
				{ itemName }
				</strong>
				<span> Entered by <em>{email}</em> </span>
				<button 
					className="btn btn-danger"
					onClick={() => this.removeItem()}
				>
				x
				</button>
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