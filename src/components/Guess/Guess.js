import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({guessNum,allGuesses,answer}) {
 
  let guessArray=[];
  let guessResult=[];
let isAGuess = !!allGuesses[guessNum];
if (isAGuess){
guessArray = allGuesses[guessNum]['label'].split('');
guessResult = checkGuess(allGuesses[guessNum]['label'], answer);


}

  return (
    <p className="guess" key={guessNum}>
      {range(5).map((num) => (
        <span className={isAGuess ? `cell ${guessResult[num]['status']}` :"cell" } key={num}>{ isAGuess && guessArray[num]
        }</span>
      ))}
    </p>
  );
}

export default Guess;
