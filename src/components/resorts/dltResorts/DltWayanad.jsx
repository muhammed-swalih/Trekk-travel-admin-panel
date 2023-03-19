import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bg from '../../../assets/bg.webp'
function DltWayanad() {
  const [honeymoon, setHoneymoon] = useState([]);

  const fetchHoneymoon = async () => {
    const response = await axios.get('http://localhost:3001/packages/wayanad')
    setHoneymoon(response.data)

  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/packages/deletewayandresort/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((result) => {
        // Remove the deleted item from the data array
        setHoneymoon(honeymoon.filter((item) => item.id !== id));
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchHoneymoon();

  }, [])


  return (
    <div className=' w-full min-h-screen h-auto bg-cover bg-gray-900 pt-10' style={{ backgroundImage: `url(${bg})` }}>
      <div className='  py-[100px]'>
        <h1 className=' text-[100px] uppercase text-white text-center'>delete kochi resorts</h1>
        <hr className=' w-[1000px] mx-auto my-[50px]' />
      </div>
      <div className=' w-5/6 h-auto py-10 px-10'>

        {honeymoon.map((items) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array((items.image.data.data)))
          )
          return (
            <div className=' my-[100px] flex justify-start gap-[220px]'>
              <div className=' rounded-3xl w-[1500px] h-[800px] bg-white'>
                <img className=' rounded-3xl w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
              </div>
              <div className=' my-auto'>
                <h1 className=' my-[50px] text-white text-[120px]'>{items ? items.place : "place"}</h1>
                <h1 className=' my-[50px] text-white text-[80px]'>{items ? items.price : "price"}</h1>
                <button onClick={() => {
                  console.log(items._id);
                  handleDelete(items._id)
                  window.location.reload()
                }} className=' rounded-3xl w-auto px-32 py-[20px] bg-red-500 text-[80px]'>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
 
export default DltWayanad