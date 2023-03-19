import React, { useState } from 'react'
import bg from '../assets/bg.png'
function Holiday() {

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
        if (place.length == 0 || price.length == 0 || days.length == 0 || highlights1.length == 0 || description.length == 0 || testImage.length == 0) {
            alert('please fill the required fields')
        } else {

            event.preventDefault();
            const formData = new FormData();
            formData.append("place", place);
            formData.append("price", price);
            formData.append("days", days);
            formData.append('description', description)
            formData.append('highlights1', highlights1)
            formData.append('highlights2', highlights2)
            formData.append('highlights3', highlights3)
            formData.append('highlights4', highlights4)
            formData.append('highlights5', highlights5)
            formData.append('highlights6', highlights6)
            formData.append("testImage", testImage);

            try {
                const response = await fetch("http://localhost:3001/packages/holidayPackage", {
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
        <div className=' w-full h-auto bg-gray-900 bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className='  py-[100px]'>
                <h1 className=' text-[100px] uppercase text-white text-center'>add holiday packages</h1>
                <hr className=' w-[1000px] mx-auto my-[50px]' />
            </div>
            <div className='w-full mx-auto h-auto  bg-cover'>
                <h1>Add Holiday Package</h1>
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
                        <label className="block text-gray-400 text-[65px] font-bold mb-5" htmlFor="price">
                            Price:
                        </label>
                        <input
                            className=" pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-2/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline "
                            id="price"
                            type="text"

                            placeholder="Enter price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>

                    <div className="mb-4 my-10">
                        <label className=" block text-gray-400 text-[65px] font-bold mb-5" htmlFor="days">
                            Days:
                        </label>
                        <input
                            className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-2/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="days"
                            type="text"
                            placeholder="Enter number of days"
                            value={days}
                            onChange={(event) => setDays(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-10">
                        <label className="block text-gray-400 text-[65px] font-bold mb-5" htmlFor="days">
                            Hightlight-1:
                        </label>
                        <input
                            className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Hightlights1"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={highlights1}
                            onChange={(event) => setHighlights1(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-10">
                        <label className="block text-gray-400 text-[65px] font-bold mb-5" htmlFor="days">
                            Highlight-2:
                        </label>
                        <input
                            className=" pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Highlights2"
                            type="text"
                            placeholder="Enter the Highlight two"
                            value={highlights2}
                            onChange={(event) => setHighlights2(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-10">
                        <label className="block text-gray-400 text-[65px] font-bold mb-2" htmlFor="days">
                            Highlights-3:
                        </label>
                        <input
                            className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Highlights3"
                            type="text"
                            placeholder="Enter the Highlight three"
                            value={highlights3}
                            onChange={(event) => setHighlights3(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-10">
                        <label className="block text-gray-400 text-[65px] font-bold mb-2" htmlFor="days">
                            Highlights-4:
                        </label>
                        <input
                            className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Highlights4"
                            type="text"
                            placeholder="Enter the Highlight four"
                            value={highlights4}
                            onChange={(event) => setHighlights4(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-10">
                        <label className="block text-gray-400 text-[65px] font-bold mb-2" htmlFor="days">
                            Highlights-5:
                        </label>
                        <input
                            className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Highlights5"
                            type="text"
                            placeholder="Enter the Highlight five"
                            value={highlights5}
                            onChange={(event) => setHighlights5(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-10">
                        <label className="block text-gray-400 text-[65px] font-bold mb-2" htmlFor="days">
                            Highlights-6:
                        </label>
                        <input
                            className="pl-10 h-[150px] rounded-3xl bg-transparent text-[65px] shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Highlights6"
                            type="text"
                            placeholder="Enter the Highlight six"
                            value={highlights6}
                            onChange={(event) => setHighlights6(event.target.value)}
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

export default Holiday