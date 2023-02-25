// Hangman game "Page"
import React, { useContext, useEffect } from "react";
import { GameStateContext } from "../index";
import Hangman from "./Hangman";
import DisplayWord from "./DisplayWord";
import Keyboard from "./Keyboard";
import { HelpModal, ExitModal, ResetModal } from "./Modals";
import GameWords from "./GameWords";

function HangmanGame() {
    // useContext React Hook to make gamestate and setting it avaliable
    const { gameState, setGameState } = useContext(GameStateContext);

    useEffect(() => {
        // If there's already a level and word in  gameState just return
        if (gameState.word) {
            return;
        }
        // If there is not then generate random word and level to populate the game
        // Generate a random level and a random word using the words imported from GameWords
        const gameWords = GameWords();

        // Get new random level
        const levels = ["Easy", "Hard"];
        const newLevel = levels[Math.floor(Math.random() * levels.length)];

        // Uses set level if avaliable or new random one if not
        const level = localStorage.getItem("level");
        const setLevel = level ? level : newLevel;

        // This section of code selects a random word from either an array of 3-5 letters for easy or 6-9 letters for hard.
        let selectedWord = "";
        if (setLevel === "Easy") {
            const easyWords = gameWords.filter(
                (word) => word.length >= 3 && word.length <= 5
            );
            selectedWord =
                easyWords[Math.floor(Math.random() * easyWords.length)];
        } else if (setLevel === "Hard") {
            const hardWords = gameWords.filter(
                (word) => word.length >= 6 && word.length <= 9
            );
            selectedWord =
                hardWords[Math.floor(Math.random() * hardWords.length)];
        }

        // Set the random level and word in the game state
        setGameState((prevState) => ({
            ...prevState,
            level: setLevel,
            word: selectedWord,
        }));
    }, [gameState.setLevel, gameState.word, setGameState]);

    // Returns the Hangman game to the GUI
    return (
        <>
            <div className="flex flex-col even-spacing-s center-xy">
                <Hangman />
                <DisplayWord />
            </div>
            <Keyboard />
            <HelpModal />
            <ExitModal />
            <ResetModal />
        </>
    );
}

export default HangmanGame;
