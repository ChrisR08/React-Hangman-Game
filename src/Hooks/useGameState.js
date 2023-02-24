// useGameState Hook
import { useContext } from "react";
import { GameStateContext } from "../index";

function useGameState() {
    // Calling the useContext hook with GameStateContext as the argument
    // Destructuring the return into variables: gameState and setGameState
    const { gameState, setGameState } = useContext(GameStateContext);

    // guessLetter takes the letter entered by the user as an argument
    const guessLetter = (letter) => {
        // setGameState is a HOF used to update the state of the game globally
        // The previous games state is passed an argument to the arrow function
        setGameState((prevState) => {
            // Takes the previous guessed letters from gameState and spreads them into the array and adds the new letter
            const guessedLetters = [...prevState.letters, letter];
            // Checks if the word used in the game state includes the guessed letter
            // If true inCorrectCount does not increase. If false inCorrectCount = previous total + 1
            const inCorrectCount = prevState.word.includes(letter)
                ? prevState.inCorrectCount
                : prevState.inCorrectCount + 1;
            // gameOver is set to true if the number of incorrect guesses is >= the number of max guesses set in gameState
            const gameOver = inCorrectCount >= prevState.maxGuesses;

            // This function checks if the game is won.
            const isGameWon = () => {
                if (prevState.gameOver) {
                    return false;
                } else {
                    let gameWon = prevState.gameWon;
                    let correctLettersCount = 0;
                    // Splits the word into an array of individual letters
                    const splitWord = prevState.word.split("");
                    // Checks that each letter of the word is included in the guessedLetters array
                    splitWord.forEach((letter) => {
                        const checkPassed = guessedLetters.includes(letter);
                        // if true then 1 is added to the correctLettersCount of correct guessed letters
                        if (checkPassed) {
                            correctLettersCount++;
                        }
                    });
                    // gameWon set to true if the amount of correctly guessed letters equals the length of the word
                    gameWon = correctLettersCount === splitWord.length;

                    return gameWon;
                }
            };
            // gameWon is set to true or false based on the return of isGameWon
            const gameWon = isGameWon();

            // Returns the previous state & updated values to be set to gameState
            return {
                ...prevState,
                letters: guessedLetters,
                inCorrectCount,
                gameOver,
                gameWon,
            };
        });
    };

    return { gameState, guessLetter };
}

export default useGameState;
