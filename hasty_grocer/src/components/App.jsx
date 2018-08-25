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
				<h3>Hasty Grocer</h3>
				<AddItem />
				<br />
				<h4>Grocery List</h4>
				<ItemList />
				<br />
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