import React from 'react';
import { range } from '../../utils';
function Guess({label}) {

  let guess = label.split('');

  return (
    <p class="guess">
      {range(5).map((num) => (
        <span class="cell">{guess[num]}</span>
      ))}
    </p>
  );
}

export default Guess;
