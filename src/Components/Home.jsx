import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { courses2 } from "../contact";
  
function Home() {
  return (
    <div className="w-full flex items-start justify-center gap-1 ">
      <div className="w-18%">
      <Sidebar />  
      </div>
      <div className="w-90% mx-auto my-1">
      <Navbar/>
        
      </div>
      
      <div className=" w-[1100px]  relative right-16 top-36  flex flex-col gap-3">
        <div className=" w-full h-80 rounded-md   border border-gray-500   flex items-center justify-center gap-20">
          <div className="mr-20 flex flex-col gap-5">
            <div>
              <h1 className="text-4xl font-mono">
                Vali Teach - Ayti kurslari
              </h1>
              <p className="text-base text-slate-400">
                Vali Teach - bu sizga dasturlashni yordam beradigan plartforma.
                Pullik darslardagi <br /> ma'lumotlarni bepul olishingiz mumkin.
                Barchasi bir joyda!
              </p>
            </div>
            <div className="flex  gap-2">
              <NavLink
                className={
                  "w-[125px] h-[40px] flex justify-center items-center text-lg bg-white   text-black rounded-[20px] dark:border-2 border-gray-600  "
                }
                to={"/courses"}
              >
                Kurslar
              </NavLink>
              <NavLink
                className={
                  "w-[125px] h-[40px] flex justify-center items-center text-lg bg-zinc-800 text-white rounded-[20px]"
                }
                to={"/projects"}
              >
                Loyihalar
              </NavLink>
            </div>
          </div>
          <img src="/public/Vali Teach.png" className=" rounded-full w-[25%] h-[85%]" alt="" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Link to={'/courses'} className="text-3xl flex items-center  gap-3 font-mono">Kurslar <p className="text-blue-700"><FaChevronRight /></p></Link>
              <div className="grid grid-cols-3 gap-5 ">
          {courses2.map((item,idx)=>(
            <Link to={item.links} key={idx} className='border-2 border-gray-600 rounded-lg pb-2 w-[340px] h-[250px]'>
               <img src={item.img} className='w-full rounded-lg h-[208px]' alt={item.text} />
               <h2 className=' p-2 pb-0 text-xl font-bold font-mono'>{item.text}</h2> 
            </Link>
          ))
          }
          </div>
        </div>
          <div className="flex flex-col gap-5 w-full">
          <Link to={'/projects'} className="text-3xl flex items-center gap-3 font-mono">Loyihalar <p className="text-blue-700"><FaChevronRight /></p></Link>
          <div className="grid grid-cols-3 gap-5">
            <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
              <img src="/public/MERN Stack - Telegram clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">MERN Stack - Telegram clone</h1>
            </div>
            <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
              <img src="/public/Next.js - X clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Next.js - X clone</h1>
            </div>
            <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
              <img src="/public/Next.js - Drive clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Next.js - Drive clone</h1>
            </div>
            <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
              <img src="/public/Nux.js - Jira clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Nux.js - Jira clone</h1>
            </div>
            <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
              <img src="/public/Node.js Telegram bot.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">Node.js Telegram bot</h1>
            </div>
            <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
              <img src="/public/React Navite - Netflix clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
              <h1 className="text-2xl ml-5 mt-2">React Navite - Netflix clone</h1>
            </div>
            
          </div>
        </div>
          <div className="flex flex-col gap-5 w-full">
          <Link to={'/source-codes'} className="text-3xl flex items-center gap-3 font-mono">Kod manbalar<p className="text-blue-700"><FaChevronRight /></p></Link>
          <div className="grid grid-cols-3 gap-5">
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Telegram Clone</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">X Clone</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Google Drive Clone</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Payme  integration</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Uzum integration</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
              <h1 className="text-xl ml-5 mt-2">Click integration</h1>
              <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
            </div>
            
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Home;
