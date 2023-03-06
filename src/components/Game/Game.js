import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

let showResults=false;
let won=false;

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(label) {
    const newGuess = {
      label,
      id: Math.random(),
    };

    const nextGuesses = [...guesses, newGuess];

    if (newGuess['label']===answer){
      showResults=true;
      won=true;
    }
    if (guesses.length >= 5 ){
      showResults=true;    
    }

    setGuesses(nextGuesses);
  }


  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {!showResults ? <GuessInput handleGuess={handleGuess} /> :
      <Banner guesses={guesses.length} answer={answer} won={won}/>
      }
    </>
  );
}

export default Game;
