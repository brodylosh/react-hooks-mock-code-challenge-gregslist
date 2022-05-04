import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ listingList, deleteListing }) {
  let renderCards = listingList.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
      deleteListing={deleteListing}
    />
  ));

  return (
    <main>
      <ul className="cards">{renderCards}</ul>
    </main>
  );
}

export default ListingsContainer;
