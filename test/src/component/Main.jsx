import React from 'react'

function Main() {
  return (
    <div className='relative text-white'>
            <div className=' noise ellipse-gradient-blur mx-96 -m-96'></div>
      <div className=' mx-48 my-28 relative z-10 '>
        <h1 className="text-4xl w-max font-medium">Watch. Learn. Practice. Repeat.</h1>
        <p className='text-[#a8a8a8]  font-medium py-6  max-w-[600px]'>
          Cesium is an AI-powered platform that enhances your learning experience by providing a personalized learning journey.</p>
        <button className='bg-[#8763ff] text-white py-3 px-8 rounded-md font-medium text-sm hover:bg-[#ffffff] hover:text-[#000000] transition duration-500 ease-in-out'>
          Get Started</button>
          <div className='flex justify-center items-center mt-40'>
          <svg className="w-8 h-8 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
          <div className=' items-center bg-[#2a2a2b] rounded-3xl mt-12 py-32'>
          <h1 className=" text-3xl w-max font-medium mb-6 py-11">Unlock Your Learning Potential with Our Top Features.</h1> 
            <div className='flex justify-between items-center'>
              <div> <h2 className='text-xl font-medium'>Engaging Learning Paths Tailored Just for You</h2>
              <p>Discover the best YouTube videos for each topic to enhance your understanding.</p>
              </div>
              <div className='flex justify-center  items-center '>
              <div> <h2 className='text-xl font-medium '>Test Your Knowledge with Interactive Quizzes</h2>
              <p>Challenge yourself with quizzes designed to reinforce what you've learned.</p>
              </div>
              <div> <h2 className='text-xl font-medium'>Prepare with AI Mock Tests
              </h2>
              <p>Practice smarter with AI-curated question papers with 
              accuracy in predicting upcoming patterns.</p>
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Main