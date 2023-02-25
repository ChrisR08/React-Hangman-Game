// Keyboard
import "./CSS/Keyboard.css";
import { useContext } from "react";
import { GameStateContext } from "../index";
import { KeyBtn } from "./Buttons";

function Keyboard() {
    // useContext React Hook to make gamestate and setting it avaliable
    const { gameState, setGameState } = useContext(GameStateContext);

    // Unpacks userNeedsHelp, showExitModal and showResetModal from gameState
    const userNeedsHelp = gameState.userNeedsHelp;
    const showExitModal = gameState.showExitModal;
    const showResetModal = gameState.showResetModal;

    // Alternates the state of userNeedsHelp: boolean
    const needHelp = () => {
        setGameState((prevState) => ({
            ...prevState,
            userNeedsHelp: !userNeedsHelp,
        }));
    };

    // Alternates the state of showExitmodal: boolean
    const exitModal = () => {
        setGameState((prevState) => ({
            ...prevState,
            showExitModal: !showExitModal,
        }));
    };

    // Alternates the state of showExitmodal: boolean
    const resetModal = () => {
        setGameState((prevState) => ({
            ...prevState,
            showResetModal: !showResetModal,
        }));
    };

    // Returns the keyboard to the GUI
    return (
        <div className="keyboard-container flex flex-col even-spacing-m center-xy">
            <ul className="keyboard-ul">
                {/* Calls the KeyBtn component which returns the keys */}
                <KeyBtn />
                {/* The Exit button. exitModal is called onClick */}
                <li className="key-btn exit-btn flex center-xy">
                    <button
                        className="clickable-parent text-red spare-btn uppercase"
                        onClick={exitModal}
                    >
                        Exit
                    </button>
                </li>
                {/* The Reset button. resetModal is called onClick */}
                <li className="key-btn reset-btn flex center-xy">
                    <button
                        className="spare-btn clickable-parent text-red uppercase"
                        onClick={resetModal}
                    >
                        Reset
                    </button>
                </li>
                {/* The space bar. needHelp is called onClick and modal pops up*/}
                <li className="space-bar center-xy">
                    <button
                        className="clickable-parent uppercase"
                        onClick={needHelp}
                    >
                        Need Help?
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Keyboard;
