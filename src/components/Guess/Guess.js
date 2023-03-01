import React from 'react';
import { range } from '../../utils';
function Guess({thisGuess}) {

  //let guess = label.split('');
console.log("thisGuess = " + thisGuess['label']);
  return (
    <p class="guess">
      {range(5).map((num) => (
        <span class="cell">{//guess[num]
        }</span>
      ))}
    </p>
  );
}

export default Guess;
