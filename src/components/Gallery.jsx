import React from 'react'; //Imports react data from react
import TourCard from './TourCard'; //Imports the TourCard component from the components folder

function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
} //Establishes the Gallery component which displays the TourCard components in a grid format and adds an onRemove function to remove the tour from the list when the Not Interested button is clicked

export default Gallery; //Exports the Gallery component