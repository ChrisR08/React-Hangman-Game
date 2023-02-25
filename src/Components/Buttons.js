// Buttons
import React, { useContext, useEffect } from "react";
import { GameStateContext } from "../index";
import useGameState from "../Hooks/useGameState";
import "./CSS/Buttons.css";

export const KeyBtn = () => {
    // Defining the array to populate the keys
    const letters = [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
    ];

    // Gets the gameState and unpacks the relevent states for use in the component methods
    const { gameState, setGameState } = useContext(GameStateContext);
    const { guessLetter } = useGameState();
    const incorrectGuesses = gameState.incorrectGuesses;
    const correctGuesses = gameState.correctGuesses;

    // handleGuess passes the event to access the letter of the key pressed by the user
    // It works by calling guessLetter and passing the letter as an argument
    const handleGuess = (letter) => {
        guessLetter(letter);
    };

    const handleGuessType = (letter) => {
        // Gets the game word and splits it into letters in an array
        const splitWord = gameState.word.split("");
        // Checks if the letter the user entered is included in the word
        const checkPassed = splitWord.includes(letter);

        // if check is false then gameState is set with the letter added to the array of incorrect guesses
        if (!checkPassed) {
            setGameState((prevState) => ({
                ...prevState,
                incorrectGuesses: [...prevState.incorrectGuesses, letter],
            }));
        } else {
            setGameState((prevState) => ({
                ...prevState,
                correctGuesses: [...prevState.correctGuesses, letter],
            }));
        }
    };

    // Handles touch screen user input
    const handleKeyPress = (e) => {
        const letter = e.key.toLowerCase();

        if (letters.includes(letter)) {
            handleGuess(letter);
            handleGuessType(letter);
        }
    };

    // Handles keyboard user input
    const handleKeyDown = (e) => {
        // Check that the key pressed is a letter
        if (letters.includes(e.key)) {
            const letter = e.key.toLowerCase();

            // Call the handleGuess and handleGuessType methods with the pressed key letter
            handleGuess(letter);
            handleGuessType(letter);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <>
            {letters.map((letter, index) => {
                // Checks if the array of incorrect guesses includes the current letter, returns true/false
                const isIncorrectGuess = incorrectGuesses.includes(
                    letter.toLowerCase()
                );
                // Checks if the array of correct guesses includes the current letter, returns true/false
                const isCorrectGuess = correctGuesses.includes(
                    letter.toLowerCase()
                );

                return (
                    <li
                        key={index}
                        onClick={(e) => {
                            handleGuess(e.target.innerText.toLowerCase());
                            handleGuessType(e.target.innerText.toLowerCase());
                        }}
                        onKeyDown={handleKeyPress}
                        tabIndex={0}
                        className="key-btn flex center-xy"
                    >
                        {/* Classes assign based on the return of incorrectGuesses, if true adds text-red to denote a wrong guess */}
                        <p
                            id={index}
                            className={`key-letter center-text clickable-parent ${
                                isIncorrectGuess ? "text-red" : ""
                            } ${isCorrectGuess ? "text-green" : ""}`}
                        >
                            {letter}
                        </p>
                    </li>
                );
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
