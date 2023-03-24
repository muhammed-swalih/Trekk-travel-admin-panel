import React from 'react'
import bg from '../../assets/bg.webp'
import plus from '../../assets/plus.png'
import { useNavigate } from 'react-router'
function Resorts() {
    const navigate = useNavigate();

    const navigateTrivandrum = ()=>{
        navigate('/addtrivandrum')
    }
    const navigateKumarakom = ()=>{
        navigate('/addkumarakom')
    }
    const navigateAlleppey = ()=>{
        navigate('/addalleppey')
    }
    const navigateMunnar = ()=>{
        navigate('/addmunnar')
    }
    const navigateVagamon = ()=>{
        navigate('/addvagamon')
    }
    const navigateThekkady = ()=>{
        navigate('/addthekkady')
    }
    const navigateKochi = ()=>{
        navigate('/addkochi')
    }
    const navigateWayanad = ()=>{
        navigate('/addwayanad')
    }
    const navigateCalicut = ()=>{
        navigate('/addcalicut')
    }
    const navigateThrissur = ()=>{
        navigate('/addthrissur')
    }
    const navigateMalappuram = ()=>{
        navigate('/addmalappuram')
    }
    const navigateKannur = ()=>{
        navigate('/addkannur')
    }
    const navigateKasargod = ()=>{
        navigate('/addkasargod')
    }
    const navigateCoorg = ()=>{
        navigate('/addCoorg')
    }
    const navigateKodaikkanal = ()=>{
        navigate('/addkodaikkanal')
    }
    const navigateOoty = ()=>{
        navigate('/addooty')
    }
  return (
    <div className=' w-full min-h-screen h-screen bg-cover bg-black pt-32 ' style={{backgroundImage : `url(${bg})`}}>
        <div className=' w-3/6 h-auto py-10 border border-1 border-gray-400 mx-auto rounded-xl'>
            <h1 className=' text-center text-white text-xl uppercase flex justify-center gap-2 '>add resorts <span className=' mt-1'><img src={plus} alt="" /></span></h1>
            <div className=' flex flex-wrap w-full px-5 mx-auto gap-1'>
                
                <div onClick={navigateTrivandrum} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>trivandrum</div>
                <div onClick={navigateKumarakom} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kumarakom</div>
                <div onClick={navigateAlleppey} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>alleppey</div>
                <div onClick={navigateVagamon} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>vagamon</div>
                <div onClick={navigateMunnar} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>munnar</div>
                <div onClick={navigateThekkady} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>thekkady</div>
                <div onClick={navigateCalicut} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>calicut</div>
                <div onClick={navigateKannur} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kannur</div>
                <div onClick={navigateKochi} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kochi</div>
                <div onClick={navigateKodaikkanal} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kodaikkanal</div>
                <div onClick={navigateThrissur} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>thrissur</div>
                <div onClick={navigateKasargod} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kasargod</div>
                <div onClick={navigateMalappuram} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>malappuram</div>
                <div onClick={navigateWayanad} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>wayanad</div>
                <div onClick={navigateCoorg} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>coorg</div>
                <div onClick={navigateOoty} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>ooty</div>
            </div>
        </div>
    </div>
  )
}

export default Resorts