import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mb-10 mx-auto">
          <ImageSearch searchText={(text) => setTerm(text)}/>

{!isLoading && images.length === 0 &&  <h1 className="text-4xl text-center mx-auto mt-32">No images...</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 ">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>}
    </div>
  );
}

export default App;







