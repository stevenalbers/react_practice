import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';


class App extends Component {

	signOut() {
		firebaseApp.auth().signOut();
	}
	render() {
		return (
			<div>
				<h3>Goal Coach</h3>
				<AddGoal />
				<h4>Goals</h4>
				<GoalList />
				<br />
				<h4>Completed Goals</h4>
				<CompleteGoalList />
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
	console.log('state', state);
	return {}
}


export default connect(mapStateToProps, null)(App);