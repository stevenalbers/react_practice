import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';

class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			deadline: "December 25, 2018",
			newDeadline: ""
		}
	}

	ChangeDeadline()
	{
		console.log('state', this.state);
		this.setState({deadline: this.state.newDeadline});
	}

	render()
	{
		return (
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<div>
					<Clock 
						deadline={this.state.deadline}
					/>
				</div>
				<div>
					<input 
						placeholder="new date" 
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<button onClick={() => this.ChangeDeadline()}>Submit</button>
				</div>
			</div>
		)
	}
}

export default App;