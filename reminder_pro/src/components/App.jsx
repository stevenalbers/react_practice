import React, { Component } from 'react';
import { connect } from 'react-redux';
// bindActionCreators: see below
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		}
	}

addReminder() {
	this.props.addReminder(this.state.text, this.state.dueDate);
}

deleteReminder(id) {
	console.log('deleting', id);
	console.log('this.props', this.props);
	this.props.deleteReminder(id);
}

renderReminders() {
	const { reminders } = this.props;
	return (
		<ul className="list-group col-sm-4">
		{
			reminders.map(reminder => {
				return (
					<li key={reminder.id} className="list-group-item">
						<div className="list-item">
							<div>{reminder.text}</div>
							<div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
						</div>
						<button className="btn btn-danger list-item delete-button"
							onClick={() => this.deleteReminder(reminder.id)}>
							&#x2715;
						</button>
					</li>
				)
			})
		}
		</ul>
	)
}

render() {
	return (
		<div className='App'>
			<div className="title">
			Reminder Pro
			</div>
			<div className="form-inline reminder-form">
				<div className="form-group">
					<input 
						className="formControl"
						placeholder="I have to..."
						onChange={event => this.setState({text: event.target.value})}
					/>
					<input
						className="formControl"
						type="datetime-local"
						onChange={event => this.setState({dueDate: event.target.value})}
					/>
				</div>

				<button type="button" 
					className="btn btn-success" 
					onClick={() => this.addReminder()}>
					Add Reminder
				</button>
			</div>
			{ this.renderReminders() }

							<button type="button" 
					className="btn btn-danger" 
					onClick={() => this.props.clearReminders()}>
					Clear All Reminders
				</button>
		</div>
			)
	}

}

// bindActionCreators: if you pass in the key/action to connect, you don't need to explicitly
// write a mapDispatchToProps function. However if you have a lot of actions to connect
// then you should probably do it anyway
/*function mapDispatchToProps(dispatch) {
	return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);*/

function mapStateToProps(state) {
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders} )(App);