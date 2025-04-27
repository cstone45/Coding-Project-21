import React, { useState } from 'react'; //Imports react data from react

function TourCard({ tour, onRemove }) { //Establishes the TourCard component
  const { id, name, info, image, price } = tour; //Establishes what data will be displayed in each TourCard component
  const [showMore, setShowMore] = useState(false); //Establishes a state variable to show more or less of the description depending on the button clicked

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
    </div> //Creates and Displays the not interested button which removes the tour from the list when clicked
  );
} //Establishes the TourCard component which displays the tour data and a button to remove the tour from the list

export default TourCard; //Exports the TourCard component