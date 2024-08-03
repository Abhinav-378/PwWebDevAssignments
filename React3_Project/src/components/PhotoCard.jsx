import React from 'react';
import { Link } from 'react-router-dom';

function PhotoCard({ id, image }) {
  return (
    <div>
      <Link to={`photo/${id}`}>
        <img src={image} alt="image" className='h-48 rounded-lg' />
      </Link>
    </div>
  );
}

export default PhotoCard;
