import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>; // Displays a Loading message while the data is being fetched
  }

  if (error) {
    return <h2>An Error Has Occurred: {error}</h2>; // Returns an error message if the fetch fails
  }

  if (tours.length === 0) {
    return (
      <div className="App">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="refresh-btn">
          Refresh
        </button>
      </div>
    ); // Displays a "Refresh" button if no tours are left
  }

  return (
    <div className="App">
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  ); // Returns the tour data if the fetch is successful and no errors occur
}

export default App;
