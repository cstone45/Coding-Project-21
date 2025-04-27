import React, { useState } from 'react';

function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3>{name}</h3>
        <p>
          {showMore ? info : `${info.substring(0, 100)}...`}
          <button
            onClick={() => setShowMore(!showMore)}
            className="toggle-description-btn"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </p>
        <h4>Price: ${price}</h4>
        <button onClick={() => onRemove(id)} className="not-interested-btn">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;