import React from 'react';

function List({ arr }) {
  return (
    <div>
      <ul>
        {arr.map((obj, index) => (
          <li key={index}>{obj}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
