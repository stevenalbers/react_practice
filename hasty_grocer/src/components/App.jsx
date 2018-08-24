import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddItem from './AddItem';
import ItemList from './ItemList';

class App extends Component {

	signOut() {
		firebaseApp.auth().signOut();
	}
	render() {
		return (
			<div>
				<h3>Items</h3>
				<AddItem />
				<ItemList />
				<button 
				className="btn btn-danger" 
				onClick={() => this.signOut()}>
					Sign Out
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	//console.log('state', state);
	return {}
}


export default connect(mapStateToProps, null)(App);