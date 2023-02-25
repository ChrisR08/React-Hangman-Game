# React Hangman Game

This is a simple React-based Hangman game. The game displays a series of empty keys representing a word to be guessed, and the user attempts to guess the word by selecting individual letters from the keyboard. 
The game provides feedback on the correctness of the user's guesses, and ends when the user either correctly guesses the word or runs out of guesses.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)

## Installation

To install and run the game locally, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/ChrisR08/hangman.git`
2. Navigate to the project directory using `cd hangman`
3. Install the required dependencies using `npm install`

## Usage

To run the game, use the following command:

npm start

This will start the development server and open the game in your default web browser at http://localhost:3000/.

Game Rules
At the start of the game, the user is presented with a series of underscores representing the word to be guessed.
The user selects letters from the alphabet to guess the word. If the word contains the selected letter, it will display in the relevent position above the keyboard.
The user has 10 incorrect guesses available before the game ends.
If the user correctly guesses the word before running out of guesses, they win the game. If they run out of guesses before correctly guessing the word, they lose the game.



