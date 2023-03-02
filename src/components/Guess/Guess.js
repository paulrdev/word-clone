import React from 'react';
import { range } from '../../utils';
function Guess({guessNum,answers}) {
 
  let guessArray=[];
let isAGuess = !!answers[guessNum];
if (isAGuess){
guessArray = answers[guessNum]['label'].split('');
}


  console.log("which answer am i on" + isAGuess);

  //let guess = thisGuess.split('');
 // console.log(thisGuess['label']);
//  console.log("thisGuess = " + thisGuess['label']);
//console.log(JSON.stringify(thisGuess))
  return (
    <p className="guess" key={guessNum}>
      {range(5).map((num) => (
        <span className="cell" key={num}>{ isAGuess && guessArray[num]
        }</span>
      ))}
    </p>
  );
}

export default Guess;
