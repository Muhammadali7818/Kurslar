import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function Kod_manbasi() {
  return (
 <div className="w-full flex ">
      <Sidebar />
      <Navbar/>
      <div className=" w-[1100px]  relative top-36 left-[350px] flex flex-col gap-3">
   
          <div className="flex flex-col gap-5 w-full">
          <h1 className="text-3xl flex items-center gap-3 font-mono">Kod manbalar<p className="text-blue-700"><FaChevronRight /></p></h1>
          <div className="grid grid-cols-3 gap-5">
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Payme  integration - MERN</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">E-Commerce -MERN</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Uzum integration -MERN</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Clikc integration - MERN</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Telegram clone - NextJS</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Advanced backend</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Machine learning - TensorflowJS</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Jira clone - NuxtJS</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Google drive - NextJS</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Notion clone - NextJS</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Twitter clone - MERN Stack</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Netflix clone - MERN Stack</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Paint clone - HTML, CSS & JS</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Netflix - React Native</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Movie app - React Native</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">HH Clone - React Native</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
         
          </div>
        </div>
     
      </div>
    </div>
  )
}

export default Kod_manbasi
