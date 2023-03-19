import React, { useState } from 'react'
import bg from '../../../assets/bg.webp'
function WayanadForm() {
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [description, setDescription] = useState("");
    const [testImage, setImage] = useState(null);

    const handleSubmit = async (event) => {
        
        if(place.length ==0 ||  description.length==0 || testImage.length ==0){
            alert ('please fill the required fields')
        }else {

            event.preventDefault();
            const formData = new FormData();
            formData.append("place", place);
            formData.append("price", price);
            formData.append("days", days);
            formData.append('description' , description)
            formData.append("testImage", testImage);
    
            try {
                const response = await fetch("https://trekkandtravel.onrender.com/packages/wayanadresort", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                console.log(data);
                alert('New Destiantion Added Successfully')
            } catch (error) {
                console.error(error);
            }
            console.log(formData);
        }
    };

    const rows = Math.max(3, Math.ceil(description.length / 50))
    return (
        <div className=' w-full min-h-screen h-auto bg-gray-900 bg-cover'  style={{backgroundImage : `url(${bg})`}}>
        <div className='w-full mx-auto h-auto  bg-cover'>
            <div className='  py-[100px]'>
                <h1 className=' text-[100px] uppercase text-white text-center'>add Wayanad resort</h1>
                <hr className=' w-[1000px] mx-auto my-[50px]'/>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 my-10">
                    <label className="block text-[65px] text-gray-400  font-bold mb-10" htmlFor="place">
                        Place:
                    </label>
                    <input
                        className="h-[150px] rounded-3xl pl-10 bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="place"
                        type="text"
                        placeholder="Enter place name"
                        value={place}
                        onChange={(event) => setPlace(event.target.value)}
                    />
                </div>

               
                <div className="mb-4 my-10">
                    <label className="block text-gray-400 text-[65px] font-bold mb-2" htmlFor="days">
                        Description:
                    </label>
                    <textarea
                        className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none  border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="Description"
                        type="textarea"
                        aria-rowspan={rows}
                
                        placeholder="Enter the Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                

                <div className="mb-4 my-10">
                    <label className="block text-gray-400 text-[65px] font-bold mb-5" htmlFor="image">
                        Image:
                    </label>
                    <input
                        className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(event) => setImage(event.target.files[0])}
                    />
                </div>

                <div className=" my-10  flex items-center justify-between">
                    <button
                        className="bg-blue-500 rounded-3xl w-auto text-[65px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default WayanadForm