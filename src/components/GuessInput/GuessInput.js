import React from 'react';

function GuessInput({ handleGuess }) {
  const [label, setLabel] = React.useState('');
  console.log('here');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(label.toUpperCase());
        setLabel('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5,5}"
        required
        title="Word must be 5 characters"
        value={label}
        onChange={(event) => {
          setLabel(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;