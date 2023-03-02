import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {

let guessCount = guesses.length;

console.log("guess count = "+ guessCount);

  return (
    <div className="guess-results">

{
range(NUM_OF_GUESSES_ALLOWED).map((num) => (


<Guess key={num} guessNum={num}
answers={guesses}
/>)
)

}


    </div>
  );
}

export default GuessResults;
