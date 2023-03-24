import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.png'
import plus from '../assets/plus.png'
import cross from '../assets/Cross Mark.png'
import logo from '../assets/developed.png'
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
    <div className=' w-full h-auto min-h-screen bg-slate-900 bg-cover pt-20' style={{ backgroundImage: `url(${bg})` }} >
      <div className=' my-auto flex flex-col w-[1150px] h-auto mx-auto '>
          <div className=' flex flex-col gap-2'>
              <h1 className=' text-white text-3xl '>Hey Shafeeq</h1>
              <h1 className=' text-white text-5xl '>Dashboard</h1>
          </div>
          <div className=' w-[1150px] flex justify-between gap-3 mx-auto mt-10'>
              <div className=' w-[500px] h-60  mx-auto rounded-2xl border border-1 border-gray-400'>
                <h1 className=' uppercase text-center text-white text-xl my-3 flex gap-2  justify-center'>add destinations <span><img className=' mt-1' src={plus} alt="" /></span></h1>
                <div className=' flex flex-wrap px-4 py-2 gap-5'>
                    <div onClick={handleHoneymoonClick} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>honeymoon package</div>
                    <div onClick={handleFamilyClick} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>family package</div>
                    <div onClick={handleHolidayClick} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>holiday package</div>
                    <div onClick={handleResortsClick} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>resorts</div>
                    <div onClick={handleAdsClick} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>ads</div>
                </div>

              </div>
              <div className=' w-[500px] h-60  mx-auto rounded-2xl border border-1 border-gray-400'>
              <h1 className=' uppercase text-center text-white text-xl my-3 flex gap-2  justify-center'>Remove destinations <span><img className=' mt-1' src={cross} alt="" /></span></h1>
              <div className=' flex flex-wrap px-4 py-2 gap-5'>
                    <div onClick={handleDltHoneymoon} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>honeymoon package</div>
                    <div onClick={handleDltFamily} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>family package</div>
                    <div onClick={handleDltHoliday} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>holiday package</div>
                    <div onClick={handleDltResorts} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>resorts</div>
                    <div onClick={handleDltAds} className=' min-w-32  border border-1 border-gray-400 w-48 text-center px-2 py-1 rounded-lg cursor-pointer text-white text-md uppercase mx-auto'>ads</div>
                </div>
              </div>
          </div>
          <div className='  items-start  mt-10 w-full'>
              <img className=' ' src={logo} alt="" />
          </div>
      </div>
  
      
     
    </div>
  );
}

export default Home