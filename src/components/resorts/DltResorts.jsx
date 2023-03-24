import React from 'react'
import bg from '../../assets/bg.webp'
import cross from '../../assets/Cross Mark.png'
import { useNavigate } from 'react-router'
function DltResorts() {
    const navigate  = useNavigate();
    
    const naviagateTrivandum = ()=>{
        navigate('/deletetrivandrum')
    }

    const navigateKumarakom = () =>{
        navigate('/deletekumarakom')
    }

    const naviagateAlleppey = ()=>{
        navigate('/deletealleppey')
    }

    const naviagateMunnar = ()=>{
        navigate('/deletemunnar')
    }

    const naviagateVagamon = ()=>{
        navigate('/deletevagamon')
    }

    const naviagateThekkady = ()=>{
        navigate('/deletethekkady')
    }

    const naviagateKochi = ()=>{
        navigate('/deletekochi')
    }

    const naviagateWayanad = ()=>{
        navigate('/deletewayanad')
    }

    const naviagateCalicut = ()=>{
        navigate('/deletecalicut')
    }

    const naviagateThrissur = ()=>{
        navigate('/deletethrissur')
    }
    
    const naviagateMalappuram = ()=>{
        navigate('/deletemalappuram')
    }

    const naviagateKannur = ()=>{
        navigate('/deletekannur')
    }

    const naviagateKasargod = ()=>{
        navigate('/deletekasargod')
    }

    const naviagateCoorg = ()=>{
        navigate('/deletecoorg')
    }

    const naviagateKodaikkanal = ()=>{
        navigate('/deletekodaikkanal')
    }

    const naviagateOoty = ()=>{
        navigate('/deleteooty')
    }


   

  return (
    <div className=' w-full min-h-screen h-screen bg-cover bg-black pt-32 ' style={{backgroundImage : `url(${bg})`}}>
    <div className=' w-3/6 h-auto py-10 border border-1 border-gray-400 mx-auto rounded-xl'>
        <h1 className=' text-center text-white text-xl uppercase flex justify-center gap-2 '>remove resorts <span className=' mt-1'><img src={cross} alt="" /></span></h1>
        <div className=' flex flex-wrap w-full px-5 mx-auto gap-1'>
            
            <div  onClick={naviagateTrivandum} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>trivandrum</div>
            <div onClick={navigateKumarakom} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kumarakom</div>
            <div onClick={naviagateAlleppey} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>alleppey</div>
            <div onClick={naviagateVagamon} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>vagamon</div>
            <div onClick={naviagateMunnar} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>munnar</div>
            <div onClick={naviagateThekkady} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>thekkady</div>
            <div onClick={naviagateCalicut} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>calicut</div>
            <div onClick={naviagateKannur} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kannur</div>
            <div onClick={naviagateKochi} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kochi</div>
            <div onClick={naviagateKodaikkanal} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kodaikkanal</div>
            <div onClick={naviagateThrissur} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>thrissur</div>
            <div onClick={naviagateKasargod} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>kasargod</div>
            <div onClick={naviagateMalappuram} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>malappuram</div>
            <div onClick={naviagateWayanad} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>wayanad</div>
            <div onClick={naviagateCoorg} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>coorg</div>
            <div onClick={naviagateOoty} className=' w-36 h-auto cursor-pointer text-white text-lg uppercase text-center border border-1 px-2 py-1 border-gray-400 mx-auto mt-8  rounded-xl '>ooty</div>
        </div>
    </div>
</div>
  )
}

export default DltResorts