// Keyboard
import "./CSS/Keyboard.css";
import { useContext } from "react";
import { GameStateContext } from "../index";
import useGameState from "../Hooks/useGameState";
import { KeyBtn } from "./Buttons";

function Keyboard() {
    const { gameState, setGameState } = useContext(GameStateContext);
    const { guessLetter } = useGameState();
    const incorrectGuesses = gameState.incorrectGuesses;
    const guessedLetters = gameState.letters;
    // Gets the game word and splits it into letters in an array
    const splitWord = gameState.word.split("");

    // handleGuess passes the event to access the letter of the key pressed by the user
    // It works by calling guessLetter and passing the letter as an argument
    const handleGuess = (e) => {
        const inputLetter = e.target.innerText.toLowerCase();
        guessLetter(inputLetter);
    };

    const handleWrongGuess = (e) => {
        // Checks if the letter the user entered is included in the word
        const checkPassed = splitWord.includes(
            e.target.innerText.toLowerCase()
        );

        // if check is false then gameState is set with the letter added to the array of incorrect guesses
        if (!checkPassed) {
            setGameState((prevState) => ({
                ...prevState,
                incorrectGuesses: [
                    ...prevState.incorrectGuesses,
                    e.target.innerText,
                ],
            }));
        }
    };

    console.log(gameState);
    return (
        <div className="keyboard-container flex flex-col even-spacing-m center-xy">
            <ul className="keyboard-ul">
                {/* Calls the KeyBtn component which returns the keys. handleGuess is passed as a prop*/}
                <KeyBtn
                    handleGuess={handleGuess}
                    handleWrongGuess={handleWrongGuess}
                    incorrectGuesses={incorrectGuesses}
                    splitWord={splitWord}
                    guessedLetters={guessedLetters}
                />{" "}
                <li className="space-bar center-xy">
                    <p className="uppercase">Need Help?</p>
                </li>
            </ul>
        </div>
    );
}

export default Keyboard;
