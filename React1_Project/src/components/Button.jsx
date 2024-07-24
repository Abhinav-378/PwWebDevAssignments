import React from 'react';

function Button({ text = "Click Me", fun }) {
  return (
    <>
      <button onClick={fun}>
        {text}
      </button>
    </>
  );
}

export default Button;
