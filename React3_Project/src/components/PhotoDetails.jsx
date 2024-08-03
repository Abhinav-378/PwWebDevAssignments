import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PhotoDetails() {
  const { id } = useParams();
  const [photo, setPhoto] = useState();
  async function getDetails(){
    const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
    const resData = response.data.photo;
    console.log(resData);
    setPhoto(resData)
    return resData;    
  }
  useEffect(()=>{
    getDetails();
  },[])
  console.log('Photo',photo);
  
  return (
    <div>
      {
        photo ? 
        <div className='flex flex-col md:flex-row justify-center items-center h-screen bg-blue-950'>
          <div className='flex md:w-[40vw] justify-center items-center p-10'>
            <img src={photo.url} alt="" className='shadow-xl shadow-blue-800/70 rounded-xl' />
          </div>
          <div className=' md: w-[60vw] md:p-12 text-white'>
            <h1 className='text-4xl font-bold mb-8'>
              {photo.title}
            </h1>
            <h3 className='text-2xl font-semibold'>
              {photo.description}
            </h3>
              
          </div>
        </div> 
        : 
        <p>Loading</p>
      }
    </div>
  );
}

export default PhotoDetails;
