import React from 'react';
import Search from './Search';
import Sort from './Sort';

function Header({ displaySearch, sortData }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search displaySearch={displaySearch} />
      <Sort sortData={sortData} />
    </header>
  );
}

export default Header;
