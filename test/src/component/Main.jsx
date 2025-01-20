import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";



function Main() {
  return (
    <div className='relative text-white'>
      <div className=' noise ellipse-gradient-blur mx-96 -m-96'></div>
      <div className='  my-36 mx-48 relative z-10 '>
        <div className="flex flex-col justify-center items-center  text-center">
          <h1 className="text-6xl max-w-3xl font-medium mb-4">Watch. Learn. Practice. Repeat.</h1>
          <p className="text-[#a8a8a8] flex items-center font-medium text-2xl py-6 max-w-[750px] mb-7">
            Cesium is an AI-powered platform that enhances your learning experience by providing a personalized learning journey.
          </p>
          <div className="flex justify-center items-center space-x-0">
            <button className="bg-[#8763ff] text-white py-3 rounded-md font-medium w-32 hover:bg-[#6449be] transition duration-300 ease-in-out hover:text-[#dcdcdc]">
              Get Started
            </button>
            <button className="text-[#8763ff] py-3 rounded-md font-medium w-32">
              Learn more
            </button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-48'>
          <svg className="w-8 h-8 text-[#ab9fc9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        <div className=' flex flex-col justify-center items-center text-center bg-[#1F202A] rounded-3xl mt-8 py-28'>
          <h1 className=" text-4xl w-[700px] font-bold mb-6 py-20 -mt-24 bg-gradient-to-r from-[#b672fe] to-[#f2d193] bg-clip-text text-transparent">Unlock your learning potential with our top features.</h1>
          <div className='flex justify-between items-center space-x-24 mx-10'>
            <div>  <FaYoutube size={32} className='mx-[105px] mb-4 text-gray-200' /> <h2 className='text-xl font-medium text-gray-200 mb-6 w-60'>Engaging Learning Paths Tailored Just for You</h2>
              <p className='text-xs text-[#c7c7c7] w-60'>Discover the best YouTube videos for each topic to enhance your understanding.</p>
            </div>
            <div> <MdQuiz size={32} className='mx-[105px] mb-4 text-gray-200' />
            <h2 className='text-xl font-medium text-gray-200 mb-6 w-60'>Test Your Knowledge with Interactive Quizzes</h2>
              <p className='text-xs text-[#c7c7c7] w-60'>Challenge yourself with quizzes designed to reinforce what you've learned.</p>
            </div>
            <div> <PiExamFill size={32} className='mx-[105px] mb-4 text-gray-200' />
            <h2 className='text-xl font-medium text-gray-200 mb-6 w-60'>Prepare with AI Mock Tests
            </h2>
              <p className='text-xs text-[#c7c7c7] w-[260px]'>Practice smarter with AI-curated question papers with
                accuracy in predicting upcoming patterns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main