// Guess Count
import useGameState from "../Hooks/useGameState";

function GuessCount() {
    // Fetches gameState
    const { gameState } = useGameState();
    // Gets the number of max guesses from gameState
    const maxGuesses = parseInt(gameState.maxGuesses);
    // Gets the current number of guesses from gameState
    const numOfGuesses = parseInt(gameState.letters.length);
    // Calculates number of guesses left
    let guessesLeft = maxGuesses - numOfGuesses;

    const displayTrys = () => {
        if (guessesLeft <= 0) {
            return 0;
        } else {
            return guessesLeft;
        }
    };

    return (
        <div className="guess-count-container">
            <p className="guess-count fs-500 fw-500">
                Trys left:{" "}
                <span className="guess-count-span fs-500 fw-700">
                    {displayTrys()}
                </span>
            </p>
        </div>
    );
}

export default GuessCount;
