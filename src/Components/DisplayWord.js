// Keyboard
import "./CSS/DisplayWord.css";
import useGameState from "../Hooks/useGameState";
import { DisplayBtn } from "./Buttons";

function DisplayWord() {
    const { gameState } = useGameState();
    // Gets the word and level used in the game from localStorage
    const word = gameState.word;

    // Splits the word into letters and stores in an array
    const wordLetters = word ? word.split("") : [];

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
