import React, { useState } from 'react';

function ListingCard({ listing, deleteListing }) {
  let { id, description, image, location } = listing;

  const [isFavorite, setIsFavorite] = useState(true);

  function handleButtonClick() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  function handleClick() {
    deleteListing(id);
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            className="emoji-button favorite active"
            onClick={handleButtonClick}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleButtonClick}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
