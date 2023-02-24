import React from "react";
import { useContext } from "react";
import { GameStateContext } from "../index";
import GuessCount from "./GuessCount";
import "./CSS/Hangman.css";

const lines = [
    { x1: "342", y1: "294", x2: "6", y2: "294" },
    { x1: "68", y1: "294", x2: "68", y2: "0" },
    { x1: "6", y1: "0", x2: "277", y2: "0" },
    { x1: "214", y1: "0", x2: "215", y2: "42" },
    { cx: "215", cy: "64", r: "23" },
    { x1: "215", y1: "88", x2: "215", y2: "169" },
    { x1: "215", y1: "111", x2: "166", y2: "159" },
    { x1: "215", y1: "111", x2: "264", y2: "159" },
    { x1: "258", y1: "242", x2: "215", y2: "168" },
    { x1: "175", y1: "244", x2: "215", y2: "169" },
];

function Hangman() {
    // Gets the gameState
    const { gameState } = useContext(GameStateContext);

    // Gets the number of incorrect guess from gameState
    const numOfIncorrectGuesses = parseInt(gameState.incorrectGuesses.length);
    // Gets the number of guesses from gameState
    const numOfGuesses = parseInt(gameState.letters.length);

    // Returns the won/lost message based on conditions
    const displayWonLost = () => {
        if (numOfGuesses > 10) {
            return <p className="text-red fs-600 fw-700">You Lost!</p>;
        } else if (numOfIncorrectGuesses < 10 && gameState.gameWon) {
            return <p className="text-green fs-600 fw-700">You Won!</p>;
        }
    };

    // Returns the hangman area if 1 or more wrong guesses are made
    const displayHangman = () => {
        if (numOfIncorrectGuesses >= 1) {
            return (
                <svg className="hangman-svg" viewBox="0 0 342 294">
                    <g id="c">
                        {/* Map though the svg elements (lines and a circle) and dispalys conditionally */}
                        {lines.map((line, index) => {
                            // Check if number of incorrect guesses is greater than the index position
                            // If true then the class "show" is added to dispaly the svg element
                            const classes =
                                numOfIncorrectGuesses > index ? "show" : "hide";
                            // Handles the circle in the array of svg-elements
                            return line.r ? (
                                <circle
                                    key={index}
                                    cx={line.cx}
                                    cy={line.cy}
                                    r={line.r}
                                    className={classes}
                                    style={{
                                        fill: "none",
                                        stroke: "#f4fafc",
                                        strokeMiterLimit: 1,
                                    }}
                                />
                            ) : (
                                <line
                                    key={index}
                                    x1={line.x1}
                                    y1={line.y1}
                                    x2={line.x2}
                                    y2={line.y2}
                                    className={classes}
                                    style={{
                                        fill: "none",
                                        stroke: "#f4fafc",
                                        strokeMiterLimit: 1,
                                    }}
                                />
                            );
                        })}
                    </g>
                </svg>
            );
        }
    };

    return (
        <>
            {/* Display the WonLost Component if conditions are met */}
            {displayWonLost()}
            <div className="hangman-container game-grid">
                {/* displayHangman conditionally renders the component. 
                Svg element makes up the whole hangman image */}
                <div className="hangman-svg">{displayHangman()}</div>
                <GuessCount />
            </div>
        </>
    );
}

export default Hangman;
