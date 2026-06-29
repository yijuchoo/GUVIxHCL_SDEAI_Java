import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// define the structure of the photo
interface Photo {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}

function App() {
  // store the API data
  const [photos, setPhotos] = useState<Photo[]>([]);

  // loading state
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // access key
  const ACCESS_KEY = "e_wPaprgabbX6nu6Bh9GaFIojt9oEsWPpHy5UnJZzJo";

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos", {
          // query parameters
          params: {
            page: 1,
            per_page: 12,
          },
          // request headers
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });
        // save the API response
        setPhotos(response.data);
      } catch (error) {
        console.log(error);
        setError("Unable to fetch photots");
      } finally {
        // stop the loading
        setLoading(false);
      }
    };

    // call the function
    fetchPhotos();
  }, []); // empty dependency, it should call only once

  // loading UI
  if (loading) {
    return <h1>Loading the images</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container">
      <h1>Unsplash Gallery</h1>
      
      <div className="gallery">
        {photos.map((photo) => (
          <div className="card" key={photo.id}>
            <img className="photos" src={photo.urls.regular} />
            <h2>{photo.user.name}</h2>
            <p>{photo.alt_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// const ACCESS_KEY = "qDcouVODgN7Vu2pHIhRX5Yekl9c_lQg4qZ6ZMO0fArc";
// "https://api.unsplash.com/photos"
