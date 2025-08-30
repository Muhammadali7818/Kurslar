import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

function Kurslar() {
  return (
    <div className="w-full flex ">
      <Sidebar/>
      <Navbar/>
      <div className=" w-[1100px]  relative top-36 left-[350px] flex flex-col gap-3">
        
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-3xl flex items-center  gap-3 font-mono">Kurslar <p className="text-blue-700"><FaChevronRight /></p></h1>
          <div className="grid grid-cols-3 gap-5">
            <NavLink to={'/courses/foundation'} className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/Foundation.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Foundation</h1>
            </NavLink>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/JavaScript.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">JavaScript</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/TypeScript.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">TypeScript</h1>
            </div>
            
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/React JS & Redux.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">React.js</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/Vue Js & Vue X.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Vue.js</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/Angular.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Angular</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/next-js.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Next.js</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/Node & ExpressJs.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Node.js</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/Nest-js.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Nest.js</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/React JS & Redux.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">React Navite</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/Telegram-bot.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Telegram bot</h1>
            </div>
            <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
              <img src="/public/Webpack.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Webpack</h1>
            </div>
          </div>
        </div>
          
        <br />
      </div>
    </div>
  )
}

export default Kurslar
