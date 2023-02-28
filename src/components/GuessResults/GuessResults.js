import React from 'react';
import Guess from '../Guess/Guess';


function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, label }) => (
        <Guess label={label}/>
      ))}
    </div>
  );
}

export default GuessResults;
