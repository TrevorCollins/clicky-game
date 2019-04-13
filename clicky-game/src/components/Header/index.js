import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar correctGuess={this.props.correct} score={this.props.score} />
                <Title />
            </div>
        )
    }
};

function Navbar({ correctGuess, score }) {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <ul>
                <li className='brand' name="title">
                    Clicky Game
                </li>
                <li name="guessStatus">
                    {correctGuess ? 'You guessed Correctly!' : 'You guessed Incorrectly'}
                </li>
                <li name="score">
                    Score: {score}
                </li>
            </ul>
        </nav>
    )
};

function Title() {
    return(
        <div className="header">
            <h1>Game of Clicks</h1>
            <h2>The North remembers. Do you?</h2>
            <h4>Click on an image to earn points, but don't click it one more than once!</h4>
        </div>
    )
}

export default Header;