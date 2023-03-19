import React, { useState } from 'react'
import bg from '../assets/bg.png'
function HoneyMoon() {

    const [place, setPlace] = useState("");
    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [highlights1, setHighlights1] = useState("");
    const [highlights2, setHighlights2] = useState("");
    const [highlights3, setHighlights3] = useState("");
    const [highlights4, setHighlights4] = useState("");
    const [highlights5, setHighlights5] = useState("");
    const [highlights6, setHighlights6] = useState("");
    const [description, setDescription] = useState("");
    const [testImage, setImage] = useState(null);

    const handleSubmit = async (event) => {
        if(place.length ==0 || price.length ==0 || days.length ==0 || highlights1.length==0 || description.length==0 || testImage.length ==0){
            alert ('please fill the required fields')
        }else {

            event.preventDefault();
            const formData = new FormData();
            formData.append("place", place);
            formData.append("price", price);
            formData.append("days", days);
            formData.append('description' , description)
            formData.append('highlights1' , highlights1)
            formData.append('highlights2' , highlights2)
            formData.append('highlights3' , highlights3)
            formData.append('highlights4' , highlights4)
            formData.append('highlights5' , highlights5)
            formData.append('highlights6' , highlights6)
            formData.append("testImage", testImage);
    
            try {
                const response = await fetch("http://localhost:3001/packages/ads", {
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
          <h1 className=' pt-[100px] text-[100px] text-white pl-[100px]'>post Ad</h1>
        <div className='w-full mx-auto h-auto  bg-cover'>
            <form onSubmit={handleSubmit} className="mx-auto ml-[70px] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                
                

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

export default HoneyMoon