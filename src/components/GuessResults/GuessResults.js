import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function GuessResults({ guesses }) {

let guessCount = guesses.length;

console.log("guess count = "+ guessCount);

  return (
    <div className="guess-results">

{
range(guessCount).map((num) => (
        <Guess thisGuess={guesses[num]}/>
      ))
      }

      {
      //guesses.map(({ id, label }) => (
      //  <Guess label={label}/>
      //)
      //)
    }

    </div>
  );
}

export default GuessResults;
