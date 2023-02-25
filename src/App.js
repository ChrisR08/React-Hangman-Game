import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import HangmanGame from "./Components/HangmanGame";
import HangmanImage from "./Components/HangmanImage";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="section site-container flex flex-col center-xy even-spacing-l">
                    <header className="App-header">
                        <h1 className="h1 fs-700 center-text center-x">
                            React Hangman Game
                        </h1>
                    </header>
                    <main className="flex flex-col center-xy even-spacing-m">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <HangmanImage />
                                        <Home />
                                    </>
                                }
                            />
                            <Route
                                path="/hangman-game"
                                element={<HangmanGame />}
                            />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
