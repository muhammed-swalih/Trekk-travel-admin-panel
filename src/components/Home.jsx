import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.png'
function Home() {
  const navigate = useNavigate();

  const handleHoneymoonClick = () => {
    navigate('/honeymoon');
  };

  const handleFamilyClick = () => {
    navigate('/family');
  };

  const handleHolidayClick = () => {
    navigate('/holiday');
  };

  const handleAdsClick = () => {
    navigate('/ads');
  };
  const handleResortsClick = () => {
    navigate('/resorts');
  };

  const handleDltHoneymoon = () => {
    navigate('/dlthoneymoon');
  };

  const handleDltFamily = () => {
    navigate('/dltfamily');
  };

  const handleDltHoliday = () => {
    navigate('/dltholiday');
  };

  const handleDltAds = () => {
    navigate('/dltads')
  }
  const handleDltResorts = () => {
    navigate('/deleteresorts')
  }

  return (
    <div className=' w-full h-screen bg-slate-900 bg-cover pt-[500px]' style={{ backgroundImage: `url(${bg})` }} >
      <div className='flex justify-between w-4/5 mx-auto h-auto '>
        <div>
        <h1 className=' text-[85px] text-white'>Hey, Shafeeq</h1>
        <h1 className=' text-[150px] text-white'> Dashboard</h1>
        </div>
      </div>

      <div className='flex justify-between w-5/6  gap-[20px] mx-auto mt-[100px] h-60'>
          <div className=' w-1/2 h-[1300px] border border-1 border-gray-400 py-[30px] rounded-[80px]'>
                <div className=' text-white text-[95px] uppercase'>
                    <h1 className=' text-center '>add  destinations</h1>
                </div>
                <div className='  my-[100px] flex justify-between gap-10 w-2/3  mx-auto '>
                    <div  onClick={handleHolidayClick} className='rounded-[80px] w-1/2 h-auto bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center '>Holiday Package</h1></div>
                    <div  onClick={handleHoneymoonClick} className='rounded-[80px] w-1/2 h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Honeymoon Package</h1></div>
                </div>
                <div className=' my-[130px] flex justify-between gap-10 w-2/3 h-60 mx-auto '>
                    <div  onClick={handleFamilyClick} className='rounded-[80px] w-1/2 h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Family Package</h1></div>
                    <div onClick={handleAdsClick} className='rounded-[80px] w-1/2 h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Ads</h1></div>
                </div>
                <div onClick={handleResortsClick} className='  flex justify-between gap-10 w-2/3 h-60 mx-auto'>
                    <div className='mx-auto w-1/2 rounded-[80px] h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Resorts</h1></div>
                    
                </div>
          </div>
          <div className=' w-1/2 h-[1300px] border border-1 border-gray-400 py-[30px] rounded-[80px]'>
                <div className=' text-white text-[95px] uppercase'>
                    <h1 className=' text-center '>Remove</h1>
                </div>
                <div className='  my-[100px] flex justify-between gap-10 w-2/3  mx-auto '>
                    <div onClick={handleDltHoliday} className='rounded-[80px] w-1/2 h-auto bg-black '><h1 className='text-white text-[70px] mt-[45px] text-center '>Holiday Package</h1></div>
                    <div onClick={handleDltHoneymoon} className='rounded-[80px] w-1/2 h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Honeymoon Package</h1></div>
                </div>
                <div className=' my-[130px] flex justify-between gap-10 w-2/3 h-60 mx-auto '>
                    <div onClick={handleDltFamily} className='rounded-[80px] w-1/2 h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Family Package</h1></div>
                    <div onClick={handleDltAds} className='rounded-[80px] w-1/2 h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Ads</h1></div>
                </div>
                <div onClick={handleDltResorts} className='  flex justify-between gap-10 w-2/3 h-60 mx-auto'>
                    <div className='mx-auto w-1/2 rounded-[80px] h-60 bg-black'><h1 className='text-white text-[70px] mt-[45px] text-center'>Resorts</h1></div>
                    
                </div>
          </div>
          
      </div>
      
     
    </div>
  );
}

export default Home