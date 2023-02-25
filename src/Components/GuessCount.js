// Guess Count
import useGameState from "../Hooks/useGameState";

function GuessCount() {
    // Fetches gameState
    const { gameState } = useGameState();
    // Gets the number of max guesses from gameState
    const maxGuesses = parseInt(gameState.maxGuesses);
    // Gets the current number of guesses from gameState
    const numOfGuesses = parseInt(gameState.inCorrectCount);
    // Calculates number of guesses left
    let guessesLeft = maxGuesses - numOfGuesses;

    const displayTrys = () => {
        if (guessesLeft <= 0) {
            return 0;
        } else {
            return guessesLeft;
        }
    };

    // Gets the gameState level if set or sets level to false
    const level = localStorage.getItem("level")
        ? localStorage.getItem("level")
        : false;

    const displayLevel = () => {
        // if level has a value, ie not false then returns the level displayed for the user in the GUI
        if (level) {
            return (
                <p className="guess-count fs-500 fw-500">
                    Level:{" "}
                    <span className="guess-count-span fs-500 fw-700">
                        {level}
                    </span>
                </p>
            );
        }
    };

    return (
        <div className="guess-count-container flex flex-col even-spacing-s">
            {displayLevel()}
            <p className="guess-count fs-500 fw-500">
                Tries left:{" "}
                <span className="guess-count-span fs-500 fw-700">
                    {displayTrys()}
                </span>
            </p>
        </div>
    );
}

export default GuessCount;
