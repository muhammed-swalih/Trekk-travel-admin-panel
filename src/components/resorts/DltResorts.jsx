import React from 'react'
import bg from '../../assets/bg.webp'
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
    <div className=' w-full min-h-screen h-auto bg-cover bg-black ' style={{backgroundImage : `url(${bg})`}}>
    <div className='  pt-[100px]'>
           <h1 className=' text-[100px] uppercase text-white text-center'>delete resort</h1>
           <hr className=' w-[1000px] mx-auto my-[50px]'/>
       </div>
   <div className=' flex flex-col justify-center w-3/5  h-screen mx-auto gap-[100px] my-auto'>
       <div className=' flex justify-start gap-[50px] mx-auto'>
           <div onClick={naviagateTrivandum}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Trivandrum</h1></div>
           <div onClick={navigateKumarakom}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kumarakom</h1></div>
           <div onClick={naviagateAlleppey}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Alleppey</h1></div>
           <div onClick={naviagateMunnar}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Munnar</h1></div>
           <div onClick={naviagateVagamon}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Vagamon</h1></div>
           <div onClick={naviagateThekkady}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Thekkady</h1></div>
       </div>
       <div className=' flex justify-start gap-[50px] mx-auto'>
           <div onClick={naviagateKochi}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kochi</h1></div>
           <div onClick={naviagateWayanad}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Wayanad</h1></div>
           <div onClick={naviagateCalicut}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Calicut</h1></div>
           <div onClick={naviagateThrissur}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Thrissur</h1></div>
           <div onClick={naviagateMalappuram}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Malappuram</h1></div>
           <div onClick={naviagateKannur}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kannur</h1></div>
       </div>
       <div className=' flex justify-start gap-[50px] mx-auto'>
           <div onClick={naviagateKasargod}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kasargod</h1></div>
           <div onClick={naviagateCoorg}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Coorg</h1></div>
           <div onClick={naviagateKodaikkanal}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Kodaikkanal</h1></div>
           <div onClick={naviagateOoty}  className=' w-auto px-[50px] h-[150px]  text-white text-[70px] font-semibold border border-1 border-gray-300 rounded-3xl '><h1 className=' my-auto py-5'>Ooty</h1></div>
          
       </div>
   </div>
</div>
  )
}

export default DltResorts