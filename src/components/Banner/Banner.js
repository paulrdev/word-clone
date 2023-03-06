import React from 'react';

function Banner({guesses,answer,won}) {


  return (
    <>
   {won ?
    <div className="happy banner">
    <p>
    <strong>Congratulations!</strong> Got it in {' '}
    <strong>{guesses} guesses</strong>.
  </p></div>
    : 
    <div className="sad banner">
       <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>}
    </>
)
}

export default Banner;
