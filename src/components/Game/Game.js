import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(label) {
    const newGuess = {
      label,
      id: Math.random(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
