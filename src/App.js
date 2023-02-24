import React from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import Hangman from "./Components/Hangman";
import DisplayWord from "./Components/DisplayWord";

function App() {
    return (
        <div className="section site-container flex flex-col center-xy even-spacing-m">
            <header className="App-header">
                <h1 className="h1 fs-700 center-text center-x">
                    React Hangman Game
                </h1>
            </header>
            <div className="flex flex-col even-spacing-m center-xy">
                <Hangman />
                <DisplayWord />
            </div>
            <Keyboard />
        </div>
    );
}

export default App;
