// Modals
import React from "react";
import "./CSS/Modals.css";
import { useContext } from "react";
import { GameStateContext } from "../index";
import { Link } from "react-router-dom";
import GameWords from "./GameWords";

export function ExitModal() {
    // Gets the gameState
    const { gameState, setGameState } = useContext(GameStateContext);

    // Gets the boolean value for userNeedsHelp from gameState
    const showExitModal = gameState.showExitModal;

    // Alternates the state of userNeedsHelp: boolean
    const exitModal = () => {
        setGameState((prevState) => ({
            ...prevState,
            showExitModal: !showExitModal,
        }));
    };

    const handleReset = () => {
        localStorage.setItem("level", "");

        // Set new state
        setGameState({
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
    };

    return (
        <div className={`${showExitModal ? "modal show" : "modal"}`}>
            <div className="modal-content-wrapper flex center-xy">
                <div className="modal-content flex flex-col center-xy even-spacing-m">
                    <h2 className="h2 uppercase text-red center-text fs-700 fw-700">
                        Warning!
                    </h2>
                    <p className="fs-500 center-text">
                        Are you sure you want to leave the game?
                    </p>
                    <div className="exit-btns-wrapper flex center-xy">
                        <div
                            className="exit-btns text-green fs-600 fw-600"
                            onClick={exitModal}
                        >
                            <p>NO</p>
                        </div>
                        <Link
                            to="/"
                            onClick={() => {
                                exitModal();
                                handleReset();
                            }}
                            className="exit-btns text-red fs-600 fw-600"
                        >
                            YES
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function HelpModal() {
    // Gets the gameState
    const { gameState, setGameState } = useContext(GameStateContext);

    // Gets the boolean value for userNeedsHelp from gameState
    const showModal = gameState.userNeedsHelp;

    // Alternates the state of userNeedsHelp: boolean
    const closeModal = () => {
        setGameState((prevState) => ({
            ...prevState,
            userNeedsHelp: !showModal,
        }));
    };

    return (
        <div className={`${showModal ? "modal show" : "modal"}`}>
            <div className="modal-content-wrapper flex center-xy">
                <div className="modal-content flex flex-col even-spacing-m">
                    <h2 className="h2 uppercase center-text fs-700 fw-700">
                        Help
                    </h2>
                    <ul className="even-spacing-xs">
                        <li>
                            <p>Press the Esc key to exit the game</p>
                        </li>
                        <li>
                            <p>Hint: All words are coding related!</p>
                        </li>
                        <li>
                            <div>
                                <h3 className="h3 fs-600 fw-500">Rules</h3>
                                <ol className="rules even-spacing-xs">
                                    <li>
                                        The objective of the game is to guess
                                        the hidden word.
                                    </li>
                                    <li>
                                        The word length is represented by the
                                        empty keys.
                                    </li>
                                    <li>
                                        If the letter you guessed is in the
                                        word, it will be revealed in its correct
                                        position and the key pressed will also
                                        be highlighted green.
                                    </li>
                                    <li>
                                        If the letter you guessed is not in the
                                        word, the key pressed will be
                                        highlighted red and a part of the
                                        hangman will be drawn.
                                    </li>
                                    <li>There is a maximum of ten guesses.</li>
                                    <li>
                                        Once you have guessed all the letters in
                                        the word, within 10 atttempts you win
                                        the game.
                                    </li>
                                    <li>
                                        If you receive 10 strikes before
                                        guessing the word, you lose the game.
                                    </li>
                                </ol>
                            </div>
                        </li>
                    </ul>
                    <div className="close" onClick={closeModal}>
                        <img src="/close-icon.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ResetModal() {
    // Gets the gameState
    const { gameState, setGameState } = useContext(GameStateContext);

    // Gets the boolean value for userNeedsHelp from gameState
    const showResetModal = gameState.showResetModal;

    // Alternates the state of userNeedsHelp: boolean
    const exitModal = () => {
        setGameState((prevState) => ({
            ...prevState,
            showResetModal: !showResetModal,
        }));
    };

    const handleReset = () => {
        // Set word in localStorage
        localStorage.setItem("word", "");

        // Get new random level
        const levels = ["Easy", "Hard"];
        const newLevel = levels[Math.floor(Math.random() * levels.length)];

        // Uses set level if avaliable or new random one if not
        const level = localStorage.getItem("level");
        const setLevel = level ? level : newLevel;
        console.log(level);
        console.log(setLevel);

        // Generates a new random word
        const gameWords = GameWords();
        let newWord = "";

        // Filters word by length and gets a random one from the array
        if (setLevel === "Easy") {
            const easyWords = gameWords.filter(
                (word) => word.length >= 3 && word.length <= 5
            );
            newWord = easyWords[Math.floor(Math.random() * easyWords.length)];
        } else if (setLevel === "Hard") {
            const hardWords = gameWords.filter(
                (word) => word.length >= 6 && word.length <= 9
            );
            newWord = hardWords[Math.floor(Math.random() * hardWords.length)];
        }

        // Set new state
        setGameState({
            level: setLevel,
            word: newWord,
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
    };

    return (
        <div className={`${showResetModal ? "modal show" : "modal"}`}>
            <div className="modal-content-wrapper flex center-xy">
                <div className="modal-content flex flex-col center-xy even-spacing-m">
                    <h2 className="h2 uppercase text-red center-text fs-700 fw-700">
                        Warning!
                    </h2>
                    <p className="fs-500 center-text">
                        Are you sure you want to reset the game with a new word?
                    </p>
                    <div className="exit-btns-wrapper flex center-xy">
                        <div
                            className="exit-btns text-green fs-600 fw-600"
                            onClick={exitModal}
                        >
                            <p>NO</p>
                        </div>
                        <Link
                            to="/hangman-game"
                            className="exit-btns text-red fs-600 fw-600"
                            onClick={handleReset}
                        >
                            YES
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function RulesModal() {
    // Gets the gameState
    const { gameState, setGameState } = useContext(GameStateContext);

    // Gets the boolean value for userNeedsHelp from gameState
    const showModal = gameState.showRulesModal;

    // Alternates the state of userNeedsHelp: boolean
    const closeModal = () => {
        setGameState((prevState) => ({
            ...prevState,
            showRulesModal: !showModal,
        }));
    };

    return (
        <div className={`${showModal ? "modal show" : "modal"}`}>
            <div className="modal-content-wrapper flex center-xy">
                <div className="modal-content flex flex-col even-spacing-m">
                    <h2 className="h2 uppercase center-text fs-700 fw-700">
                        Rules
                    </h2>
                    <ol className="rules even-spacing-xs">
                        <li>
                            The objective of the game is to guess the hidden
                            word.
                        </li>
                        <li>
                            The word length is represented by the empty keys.
                        </li>
                        <li>
                            The word length is determined by the difficulty
                            selected.
                            <br />
                            Easy: 3-5 letters. Hard: 6-9 letters.
                        </li>
                        <li>
                            If the letter you guessed is in the word, it will be
                            revealed in its correct position and the key pressed
                            will also be highlighted green.
                        </li>
                        <li>
                            If the letter you guessed is not in the word, the
                            key pressed will be highlighted red and a part of
                            the hangman will be drawn.
                        </li>
                        <li>There is a maximum of ten guesses.</li>
                        <li>
                            Once you have guessed all the letters in the word,
                            within 10 atttempts you win the game.
                        </li>
                        <li>
                            If you receive 10 strikes before guessing the word,
                            you lose the game.
                        </li>
                    </ol>
                    <div className="close" onClick={closeModal}>
                        <img src="/close-icon.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
