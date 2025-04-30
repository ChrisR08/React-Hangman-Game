# React Hangman Game

This is a simple React-based Hangman game. The game displays a series of blank spaces representing each letter in a randomly chosen word. The user selects individual letters from an on-screen keyboard to guess the word.

The game provides instant feedback on the correctness of each guess and ends when the user either completes the word or runs out of guesses.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Tech Stack](#tech-stack)
- [License](#license)

## Installation

To run this project locally, you must have **Node.js** and **npm** installed on your machine.

### 1. Check if Node and npm are installed

Open a terminal and run:

```bash
node -v
npm -v
```

If version numbers appear, you have them installed and can move to step 2.

If not, you can download and install Node.js (which includes npm) from [https://nodejs.org/](https://nodejs.org/).

### 2. Clone the repository

```bash
git clone https://github.com/ChrisR08/hangman.git
cd hangman
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

This will open the game in your default web browser at [http://localhost:3000](http://localhost:3000).

You can manually navigate to that URL if it doesn't open automatically.

## Usage

Once the development server is running, the game will load in your browser. You can begin playing straight away by selecting letters from the keyboard to guess the hidden word.

## Game Rules

- At the start of the game, the user is presented with a series of underscores representing the hidden word.
- The user selects letters from the on-screen keyboard to try and guess the word.
- If the word contains the selected letter, it will appear in the relevant position(s).
- The user has 10 incorrect guesses before the game ends.
- If the user correctly guesses the entire word before running out of guesses, they win. Otherwise, the game ends in a loss.

## Tech Stack

- React
- JavaScript
- HTML & CSS

## License

This project is licensed under the MIT License.
