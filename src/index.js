import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Creating the GameState context
export const GameStateContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

// Index function defines gameState object with initial state for Global Scope
function Index() {
    const [gameState, setGameState] = useState({
        word: "coding",
        letters: [],
        correctLetterIds: [],
        inCorrectCount: 0,
        incorrectGuesses: [],
        maxGuesses: 10,
        guessCorrect: false,
        gameOver: false,
        gameWon: false,
    });

    // The App is wrapped in the BrowserRouter and Context.Provider here for Global Scope
    return (
        <React.StrictMode>
            <BrowserRouter>
                <GameStateContext.Provider value={{ gameState, setGameState }}>
                    <App />
                </GameStateContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
// Renders the Index function in the DOM
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
