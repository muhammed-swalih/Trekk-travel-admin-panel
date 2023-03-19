import React from 'react'
import bg from '../../assets/bg.webp'
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
    <div className=' w-full min-h-screen h-auto bg-cover bg-black ' style={{backgroundImage : `url(${bg})`}}>
         <div className='  pt-[100px]'>
                <h1 className=' text-[100px] uppercase text-white text-center'>add resort</h1>
                <hr className=' w-[1000px] mx-auto my-[50px]'/>
            </div>
        <div className=' flex flex-col justify-center w-3/5  h-screen mx-auto gap-[100px] my-auto'>
            <div className=' flex justify-start gap-[50px] mx-auto'>
                <div onClick={navigateTrivandrum} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Trivandrum</h1></div>
                <div onClick={navigateKumarakom} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kumarakom</h1></div>
                <div onClick={navigateAlleppey} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Alleppey</h1></div>
                <div onClick={navigateMunnar} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Munnar</h1></div>
                <div onClick={navigateVagamon} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Vagamon</h1></div>
                <div onClick={navigateThekkady} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Thekkady</h1></div>
            </div>
            <div className=' flex justify-start gap-[50px] mx-auto'>
                <div onClick={navigateKochi} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kochi</h1></div>
                <div onClick={navigateWayanad} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Wayanad</h1></div>
                <div onClick={navigateCalicut} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Calicut</h1></div>
                <div onClick={navigateThrissur} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Thrissur</h1></div>
                <div onClick={navigateMalappuram} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Malappuram</h1></div>
                <div onClick={navigateKannur} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kannur</h1></div>
            </div>
            <div className=' flex justify-start gap-[50px] mx-auto'>
                <div onClick={navigateKasargod} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kasargod</h1></div>
                <div onClick={navigateCoorg} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Coorg</h1></div>
                <div onClick={navigateKodaikkanal} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kodaikkanal</h1></div>
                <div onClick={navigateOoty} className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Ooty</h1></div>
               
            </div>
        </div>
    </div>
  )
}

export default Resorts