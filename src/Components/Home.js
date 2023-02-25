import React from "react";
import "./CSS/Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameStateContext } from "../index";
import { RulesModal } from "./Modals";
import GameWords from "./GameWords";

function Home() {
    // useContext React Hook to make gamestate and setting it avaliable
    const { gameState, setGameState } = useContext(GameStateContext);

    // Unpacks showRulesModal from gameState
    const showRulesModal = gameState.showRulesModal;

    const getWord = async (level) => {
        // Stores the word array imported via GameWords
        const gameWords = GameWords();

        let selectedWord = "";

        // Filters the words from the list by length
        if (level === "Easy") {
            const easyWords = gameWords.filter(
                (word) => word.length >= 3 && word.length <= 5
            );

            // Selects a random word from the filtered array by generating a random number in the range
            selectedWord =
                easyWords[Math.floor(Math.random() * easyWords.length)];
        }
        // Filters the words from the list by length
        else if (level === "Hard") {
            const hardWords = gameWords.filter(
                (word) => word.length >= 6 && word.length <= 9
            );

            // Selects a random word from the filtered array by generating a random number in the range
            selectedWord =
                hardWords[Math.floor(Math.random() * hardWords.length)];
        }
        // Error handling
        else {
            throw new Error("Invalid level: " + level);
        }

        // Sets the selected word in gameState
        await setGameState((prevState) => ({
            ...prevState,
            word: selectedWord,
        }));
    };

    // ========================================================================

    // setLevel passes the event so the innerText of the click link can be accessed
    // Level is then set in gameState
    const setLevel = async (e) => {
        const level = e.target.innerText;

        await setGameState((prevState) => ({
            ...prevState,
            level: level,
        }));

        localStorage.setItem("level", level);
        getWord(level);
    };

    // ========================================================================

    // Alternates the state of userNeedsHelp: boolean
    const showRules = () => {
        setGameState((prevState) => ({
            ...prevState,
            showRulesModal: !showRulesModal,
        }));
    };

    // ========================================================================

    return (
        <>
            <div className="container flex flex-col center-xy even-spacing-m">
                <h2 className="h2 fs-500 fw-600 center-text">
                    Choose a Level to Start the Game
                </h2>
                <ul className="level-ul-wrapper flex flex-col center-xy even-spacing-m">
                    <li className="link-wrapper">
                        <Link
                            onClick={setLevel}
                            className="home-link easy clickable-parent fs-500"
                            to="/hangman-game"
                        >
                            Easy
                        </Link>
                    </li>
                    <li className="link-wrapper">
                        <Link
                            to="/hangman-game"
                            className="home-link hard clickable-parent fs-500"
                            onClick={setLevel}
                        >
                            Hard
                        </Link>
                    </li>
                    <li className="link-wrapper">
                        <button
                            className="home-link rules clickable-parent fs-500"
                            onClick={showRules}
                        >
                            Game Rules
                        </button>
                    </li>
                </ul>
            </div>
            <RulesModal />
        </>
    );
}

export default Home;
