import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import randomize from 'randomize-array';
import images from './images';

class App extends Component {
	state = {
		imageClass: "click-item",
		images,
		alreadyClicked: [],
		correct: true,
		score: 0
	}

	handleOnClick = (event) => {
		let id = event.target.id;
		if (this.state.alreadyClicked.includes(id)) {
			console.log('game over, man')
			this.setState({ 
				alreadyClicked: [],
				imageClass: 'click-item shake',
				correct: false
			});
		} else {
			this.state.alreadyClicked.push(id);
			console.log(this.state.alreadyClicked);
			const newImagePositions = randomize(this.state.images);
			this.setState({
				images: newImagePositions,
				imageClass: 'click-item',
				correct: true,
				score: this.state.score + 1
			})
		}
	}

	render() {
		return (
			<div className="App">
				<Header
					correct={this.state.correct}
					score={this.state.score}
				/>
				<Body
					handleOnClick={this.handleOnClick}
					imageClass={this.state.imageClass}
					images={this.state.images}
				/>
			</div>
		);
	}
}

export default App;
