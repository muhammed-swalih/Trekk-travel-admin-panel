import React, { useState } from 'react'
import bg from '../../../assets/bg.webp'
function VagamonForm() {
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
            formData.append('description' , description)
            formData.append("testImage", testImage);
    
            try {
                const response = await fetch("https://trekkbackend.fun/packages/vagamonresort", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                console.log(data);
                window.location.reload();
                alert('New Destiantion Added Successfully')
            } catch (error) {
                console.error(error);
            }
            console.log(formData);
        }
    };

    const rows = Math.max(3, Math.ceil(description.length / 50))
    return (
        <div className=' w-full min-h-screen h-auto bg-gray-900 bg-cover pt-16' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='uppercase text-2xl font-medium text-white text-center '>add vagamon package</h1>
            <hr className=' my-3 w-60 mx-auto' />
            <div className=' w-6/6  flex flex-col gap-3'>
            <form onSubmit={handleSubmit} className=" shadow-md rounded pl-10  pt-6 pb-8 mb-4">
                    <div className="mb-4 my-2">
                        <label className="block text-lg text-gray-400  font-bold mb-2" htmlFor="place">
                            Place:
                        </label>
                        <input
                            className="h-auto rounded-3xl pl-5 bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="place"
                            type="text"
                            placeholder="Enter place name"
                            value={place}
                            onChange={(event) => setPlace(event.target.value)}
                        />
                    </div>

                   
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Description:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>


                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-5" htmlFor="image">
                            Image:
                        </label>
                        <input
                            className="pl-10  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={(event) => setImage(event.target.files[0])}
                        />
                    </div>

                    <div className=" my-2  flex items-center justify-between">
                        <button
                            className="bg-blue-500 rounded-3xl w-auto text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default VagamonForm