// Keyboard
import "./CSS/DisplayWord.css";
import useGameState from "../Hooks/useGameState";
import { DisplayBtn } from "./Buttons";

function DisplayWord() {
    const { gameState } = useGameState();
    // Gets the word used in the game from gameState and splits into letters in an array
    const wordLetters = gameState.word.split("");
    // Gets the guessed letters from gameState and stores in an array
    const guessedLetters = gameState.letters;

    return (
        <div className="display-word-container">
            <ul className="display-word-ul flex">
                <DisplayBtn
                    wordLetters={wordLetters}
                    guessedLetters={guessedLetters}
                />
            </ul>
        </div>
    );
}

export default DisplayWord;
