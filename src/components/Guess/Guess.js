import React from 'react';

function Guess({label}) {

  let guess = label.split();

  return (
    <p class="guess">
      <span class="cell">{label}</span>
      <span class="cell">a</span>
      <span class="cell">a</span>
      <span class="cell">a</span>
      <span class="cell">a</span>
    </p>
  );
}

export default Guess;
