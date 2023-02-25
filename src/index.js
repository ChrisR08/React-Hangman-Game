import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Creating the GameState context
export const GameStateContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

// Index function defines gameState object with initial states for Global Scope
function Index() {
    const [gameState, setGameState] = useState({
        word: "",
        level: "",
        letters: [],
        inCorrectCount: 0,
        incorrectGuesses: [],
        correctGuesses: [],
        maxGuesses: 10,
        gameOver: false,
        gameWon: false,
        userNeedsHelp: false,
        showExitModal: false,
        showResetModal: false,
        showRulesModal: false,
    });

    // The App is wrapped in the BrowserRouter and Context.Provider here for Global Scope
    return (
        <React.StrictMode>
            <GameStateContext.Provider value={{ gameState, setGameState }}>
                <App />
            </GameStateContext.Provider>
        </React.StrictMode>
    );
}
// Renders the Index function in the DOM
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
