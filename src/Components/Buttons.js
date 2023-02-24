// Buttons
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Buttons.css";

export const KeyBtn = (props) => {
    const letters = ["Esc"];
    // For loop iterates through ASCII charcarters and pushes them to the alphabet array
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }
    // Destructuring props
    const {
        handleGuess,
        handleWrongGuess,
        isGuessCorrect,
        incorrectGuesses,
        correctGuess,
    } = props;

    return (
        <>
            {letters.map((letter, index) => {
                // Checks if the array of incorrect guesses includes the current letter, returns true/false
                const isIncorrectGuess = incorrectGuesses.includes(
                    letter.toUpperCase()
                );
                // The first key is Esc which links to the "homepage"
                if (index === 0) {
                    return (
                        <li key={index} className="key-btn flex center-xy">
                            <Link to="/" className="key-letter center-text">
                                {letter}
                            </Link>
                        </li>
                    );
                }
                // The letter keys are passed the methods that were passed as props
                else {
                    return (
                        <li
                            key={index}
                            onClick={(e) => {
                                handleGuess(e);
                                handleWrongGuess(e);
                            }}
                            className="key-btn flex center-xy"
                        >
                            {/* Classes assign based on the return of incorrectGuesses, if true adds text-red to denote a wrong guess */}
                            <p
                                id={index}
                                className={`key-letter center-text clickable-parent ${
                                    isIncorrectGuess ? "text-red" : ""
                                }`}
                            >
                                {letter}
                            </p>
                        </li>
                    );
                }
            })}
        </>
    );
};

// DisplayBtn takes the array of letters and the array of guessed letters via props
export const DisplayBtn = ({ wordLetters, guessedLetters }) => {
    // Map thoughg the array of word letters and for each letter check if the guessed letters array includes a match
    // A li is return for each letter in the game word.
    // If there is no matching guess the letters are displayed as blank
    // If there is a match and guessed therefore equals true then the correct letter is displayed in order
    return (
        <>
            {wordLetters.map((letter, index) => {
                const guessed = guessedLetters.includes(letter);

                return (
                    <li key={index} className="display-btn flex center-xy">
                        <p className="key-letter center-text fs-400 text-green">
                            {guessed ? letter.toUpperCase() : ""}
                        </p>
                    </li>
                );
            })}
        </>
    );
};
