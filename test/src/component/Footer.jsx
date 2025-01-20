import React from 'react'

function Footer() {
  return (
    <div className="bg-[#19181c] text-white py-4 rounded-t-3xl mt-20">
      <div className="flex justify-center">
        <div className="flex flex-col items-center px-10 py-4">
          <h1 className="text-2xl font-medium py-4 ">Social media</h1>
          <a href="https://www.linkedin.com/feed/" className="text-[#a8a8a8] hover:text-[#8763ff]">LinkedIn</a>
          <a href="https://www.instagram.com" className="text-[#a8a8a8] hover:text-[#8763ff]">Instagram</a>
          <a href="https://www.x.com" className="text-[#a8a8a8] hover:text-[#8763ff]">x</a>
        </div>
        <div className="flex flex-col py-4 items-center">
          <h1 className="text-2xl py-4">Contact</h1>
          <a href="#default" className="text-[#a8a8a8] hover:text-[#8763ff]">Email</a>
          <a href="#default" className="text-[#a8a8a8] hover:text-[#8763ff]">Phone</a>
          <a href="#default" className="text-[#a8a8a8] hover:text-[#8763ff]">Address</a>
        </div>
      </div>
      <div className="flex justify-center py-4 pt-4">
        <p className="text-[#a8a8a8]">©2025 Cesium. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer