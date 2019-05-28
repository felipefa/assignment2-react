import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
	state = {
		value: ''
	}

	inputHandler = event => {
		this.setState({ value: event.target.value });
	}
	
	deleteCharHandler = charIndex => {
		const chars = this.state.value.split('');
		chars.splice(charIndex, 1);
		const value = chars.join('');
		this.setState({ value: value });
	}

	render() {
		let chars = null;
		
		if (this.state.value.length > 0) {
			chars = (
				<div className="card">
					{this.state.value.split('').map((char, index) => {
						return <Char click={() => this.deleteCharHandler(index)} char={char} key={index} />
					})}
				</div>
			);		
		}

		return (
			<div className="App">
				<header className="App-header">
					<h1>Assignment 2 - Lists & Conditionals</h1>
				</header>
				<div>
					<p className="title">TO DO</p>
					<ol className="list">
						<li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
						<li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
						<li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
						<li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
						<li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
						<li>When you click a CharComponent, it should be removed from the entered text.</li>
					</ol>
					<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
					<hr/>
					<input type="text" onChange={this.inputHandler} value={this.state.value} />
					<p>Input value: {this.state.value}</p>
					<p>Input length: {this.state.value.length}</p>
					<Validation inputLength={this.state.value.length} />
					{chars}
				</div>
			</div>
		);
	}
}

export default App;
