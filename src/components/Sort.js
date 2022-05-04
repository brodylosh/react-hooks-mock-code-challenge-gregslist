import React, { useState } from 'react';

function Sort({ sortData }) {
  const [isSorted, setIsSorted] = useState(false);

  function handleClick() {
    setIsSorted((isSorted) => !isSorted);
    sortData(!isSorted);
  }

  return (
    <div>
      <label>Sort By Location: </label>
      <input type="checkbox" onClick={handleClick} />
    </div>
  );
}

export default Sort;
