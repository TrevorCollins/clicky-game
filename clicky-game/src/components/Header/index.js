import React, { Component } from 'react';
import './header.css';

function Header(props) {
    return (
        <div id="header">
            <Navbar
                correctGuess={props.correct}
                score={props.score}
                topScore={props.topScore}
            />
            <Title />
        </div>
    )

};

function Navbar({ correctGuess, score, topScore }) {
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
                    Score: {score} || Top Score: {topScore}
                </li>
            </ul>
        </nav>
    )
};

function Title() {
    return (
        <div className="header">
            <h1>Game of Clicks</h1>
            <h2>The North remembers.<br/><br/>Do you?</h2>
            <br/>
            <h4>Click on an image to earn points, but don't click it one more than once!</h4>
        </div>
    )
}

export default Header;