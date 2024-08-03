import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoCard from './components/PhotoCard';
import { Outlet } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [offset, setOffset] = useState(0);

  async function downloadPhotos() {
    console.log(offset);
    const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`);
    const results = response.data.photos;
    console.log(results);
    setIsLoading(false);
    const res = results.map((data) => {
      return {
        id: data.id,
        title: data.title,
        url: data.url,
        desc: data.description,
      };
    });
    setPhotos(res);
    console.log(res);
    console.log(photos);
  }

  function prev() {
    setOffset((prevOffset) => Math.max(prevOffset - 20, 0));
  }

  function next() {
    setOffset((prevOffset) => prevOffset + 20);
  }

  useEffect(() => {
    downloadPhotos();
  }, [offset]);

  return (
    <>
      <div className='flex flex-wrap gap-5 py-5 justify-center items-center'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          photos.map((p) => (
            <PhotoCard key={p.id} name={p.title} image={p.url} id={p.id} />
          ))
        )}
      </div>
      <div className='flex justify-center items-center gap-8 my-5'>
        <button onClick={prev} disabled={offset === 0} className='px-4 py-2 rounded disabled:opacity-50 bg-gray-200'>
          Prev
        </button>
        <button onClick={next} disabled={offset === 120} className='px-4 py-2 rounded disabled:opacity-50 bg-gray-200'>
          Next
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default App;
