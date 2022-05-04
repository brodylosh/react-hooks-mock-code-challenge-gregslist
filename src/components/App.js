import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
  const [listingList, setListingList] = useState([]);

  useEffect(
    () =>
      fetch('http://localhost:6001/listings')
        .then((data) => data.json())
        .then((listings) => setListingList(listings)),
    []
  );

  function deleteListing(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
      .then((data) => data.json())
      .then(
        setListingList(
          [...listingList].filter((listing) => {
            return listing.id === id ? false : true;
          })
        )
      );
  }

  function displaySearch(search) {
    setListingList(
      listingList.filter((listing) =>
        listing.description.toLowerCase().includes(search.toLowerCase())
          ? true
          : false
      )
    );
  }

  function sortData(state) {
    return state
      ? setListingList(
          [listingList].sort((a, b) => a.location.localeCompare(b.location))
        )
      : console.log('Im False');
  }

  return (
    <div className="app">
      <Header displaySearch={displaySearch} sortData={sortData} />
      <ListingsContainer
        listingList={listingList}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
