// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io";

// function Home() {
//   return (
//     <div className="w-full flex ">
//       <Sidebar />
//       <Navbar/>
//       <div className=" w-[1100px]  relative top-36 left-[350px] flex flex-col gap-3">
//         <div className=" w-full h-80 rounded-md   border border-gray-500   flex items-center justify-center gap-20">
//           <div className="mr-20 flex flex-col gap-5">
//             <div>
//               <h1 className="text-4xl font-mono">
//                 Vali Teach - Ayti kurslari
//               </h1>
//               <p className="text-base text-slate-400">
//                 Vali Teach - bu sizga dasturlashni yordam beradigan plartforma.
//                 Pullik darslardagi <br /> ma'lumotlarni bepul olishingiz mumkin.
//                 Barchasi bir joyda!
//               </p>
//             </div>
//             <div className="flex  gap-2">
//               <NavLink
//                 className={
//                   "w-[125px] h-[40px] flex justify-center items-center text-lg bg-white   text-black rounded-[20px] dark:border-2 border-gray-600  "
//                 }
//                 to={"/courses"}
//               >
//                 Kurslar
//               </NavLink>
//               <NavLink
//                 className={
//                   "w-[125px] h-[40px] flex justify-center items-center text-lg bg-zinc-800 text-white rounded-[20px]"
//                 }
//                 to={"/projects"}
//               >
//                 Loyihalar
//               </NavLink>
//             </div>
//           </div>
//           <img src="/public/Vali Teach.png" className=" rounded-full w-[25%] h-[85%]" alt="" />
//         </div>
//         <div className="flex flex-col gap-5 w-full">
//           <h1 className="text-3xl flex items-center  gap-3 font-mono">Kurslar <p className="text-blue-700"><FaChevronRight /></p></h1>
//           <div className="grid grid-cols-3 gap-5">
//             <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
//               <img src="/public/Angular.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">Angular</h1>
//             </div>
//             <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
//               <img src="/public/TypeScript.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">TypeScript</h1>
//             </div>
//             <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
//               <img src="/public/JavaScript.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">JavaScript</h1>
//             </div>
//             <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
//               <img src="/public/React JS & Redux.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">React JS & Redux</h1>
//             </div>
//             <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
//               <img src="/public/Vue Js & Vue X.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">Vue JS & Vue X</h1>
//             </div>
//             <div className="card w-[97%] rounded-[10px]  border-2 border-gray-600 h-[250px]">
//               <img src="/public/Node & ExpressJs.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">NodeJS & ExpressJS</h1>
//             </div>
            
//           </div>
//         </div>
//           <div className="flex flex-col gap-5 w-full">
//           <h1 className="text-3xl flex items-center gap-3 font-mono">Loyihalar <p className="text-blue-700"><FaChevronRight /></p></h1>
//           <div className="grid grid-cols-3 gap-5">
//             <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
//               <img src="/public/MERN Stack - Telegram clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">MERN Stack - Telegram clone</h1>
//             </div>
//             <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
//               <img src="/public/Next.js - X clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">Next.js - X clone</h1>
//             </div>
//             <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
//               <img src="/public/Next.js - Drive clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">Next.js - Drive clone</h1>
//             </div>
//             <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
//               <img src="/public/Nux.js - Jira clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">Nux.js - Jira clone</h1>
//             </div>
//             <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
//               <img src="/public/Node.js Telegram bot.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">Node.js Telegram bot</h1>
//             </div>
//             <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
//               <img src="/public/React Navite - Netflix clone.png" className="bg-white w-full h-[80%] rounded-t-lg" alt="" />
//               <h1 className="text-2xl ml-5 mt-2">React Navite - Netflix clone</h1>
//             </div>
            
//           </div>
//         </div>
//           <div className="flex flex-col gap-5 w-full">
//           <h1 className="text-3xl flex items-center gap-3 font-mono">Kod manbalar<p className="text-blue-700"><FaChevronRight /></p></h1>
//           <div className="grid grid-cols-3 gap-5">
//             <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
//               <h1 className="text-xl ml-5 mt-2">Telegram Clone</h1>
//               <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
//             </div>
//             <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
//               <h1 className="text-xl ml-5 mt-2">X Clone</h1>
//               <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
//             </div>
//             <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
//               <h1 className="text-xl ml-5 mt-2">Google Drive Clone</h1>
//               <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
//             </div>
//             <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
//               <h1 className="text-xl ml-5 mt-2">Payme  integration</h1>
//               <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
//             </div>
//             <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
//               <h1 className="text-xl ml-5 mt-2">Uzum integration</h1>
//               <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
//             </div>
//             <div className="w-[97%] rounded-md   border border-gray-600 flex items-center justify-between h-[70px]">
//               <h1 className="text-xl ml-5 mt-2">Click integration</h1>
//               <IoLogoGithub   className="mr-5 w-[40px] h-[40px]"  />
//             </div>
            
//           </div>
//         </div>
//         <br />
//       </div>
//     </div>
//   );
// }

// export default Home;
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { useState, useEffect } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row">
      {!isMobile && <Sidebar />}
      <Navbar isMobile={isMobile} />
      
      <div className="w-full md:w-[calc(100%-350px)] mt-16 md:mt-0 md:relative md:top-36 md:left-[350px] p-4 md:p-0 flex flex-col gap-5">
        {/* Hero Section */}
        <div className="w-full h-auto md:h-80 rounded-md border border-gray-500 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 p-5 md:p-0">
          <div className="md:mr-20 flex flex-col gap-5 text-center md:text-left">
            <div>
              <h1 className="text-2xl md:text-4xl font-mono">
                Vali Teach - Ayti kurslari
              </h1>
              <p className="text-sm md:text-base text-slate-400 mt-2">
                Vali Teach - bu sizga dasturlashni yordam beradigan plartforma.
                Pullik darslardagi ma'lumotlarni bepul olishingiz mumkin.
                Barchasi bir joyda!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-start">
              <NavLink
                className="w-full md:w-[125px] h-[40px] flex justify-center items-center text-lg bg-white text-black rounded-[20px] dark:border-2 border-gray-600"
                to={"/courses"}
              >
                Kurslar
              </NavLink>
              <NavLink
                className="w-full md:w-[125px] h-[40px] flex justify-center items-center text-lg bg-zinc-800 text-white rounded-[20px] mt-2 md:mt-0"
                to={"/projects"}
              >
                Loyihalar
              </NavLink>
            </div>
          </div>
          <img 
            src="/public/Vali Teach.png" 
            className="rounded-full w-1/2 md:w-[25%] h-auto md:h-[85%] mt-5 md:mt-0" 
            alt="Vali Teach" 
          />
        </div>
        
        {/* Kurslar Section */}
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-2xl md:text-3xl flex items-center gap-3 font-mono">
            Kurslar <span className="text-blue-700"><FaChevronRight /></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { img: "/public/Angular.png", title: "Angular" },
              { img: "/public/TypeScript.png", title: "TypeScript" },
              { img: "/public/JavaScript.png", title: "JavaScript" },
              { img: "/public/React JS & Redux.png", title: "React JS & Redux" },
              { img: "/public/Vue Js & Vue X.png", title: "Vue JS & Vue X" },
              { img: "/public/Node & ExpressJs.png", title: "NodeJS & ExpressJS" }
            ].map((course, index) => (
              <div key={index} className="card w-full rounded-[10px] border-2 border-gray-600 h-[250px]">
                <img src={course.img} className=" w-full h-[80%] rounded-t-lg object-contain" alt={course.title} />
                <h1 className="text-xl md:text-2xl ml-5 mt-2">{course.title}</h1>
              </div>
            ))}
          </div>
        </div>
        
        {/* Loyihalar Section */}
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-2xl md:text-3xl flex items-center gap-3 font-mono">
            Loyihalar <span className="text-blue-700"><FaChevronRight /></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { img: "/public/MERN Stack - Telegram clone.png", title: "MERN Stack - Telegram clone" },
              { img: "/public/Next.js - X clone.png", title: "Next.js - X clone" },
              { img: "/public/Next.js - Drive clone.png", title: "Next.js - Drive clone" },
              { img: "/public/Nux.js - Jira clone.png", title: "Nux.js - Jira clone" },
              { img: "/public/Node.js Telegram bot.png", title: "Node.js Telegram bot" },
              { img: "/public/React Navite - Netflix clone.png", title: "React Native - Netflix clone" }
            ].map((project, index) => (
              <div key={index} className="card w-full border-2 border-gray-600 h-[250px]">
                <img src={project.img} className=" w-full h-[80%] rounded-t-lg object-contain" alt={project.title} />
                <h1 className="text-xl md:text-2xl ml-5 mt-2">{project.title}</h1>
              </div>
            ))}
          </div>
        </div>
        
        {/* Kod manbalari Section */}
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-2xl md:text-3xl flex items-center gap-3 font-mono">
            Kod manbalari <span className="text-blue-700"><FaChevronRight /></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              "Telegram Clone",
              "X Clone",
              "Google Drive Clone",
              "Payme integration",
              "Uzum integration",
              "Click integration"
            ].map((source, index) => (
              <div key={index} className="w-full rounded-md border border-gray-600 flex items-center justify-between h-[70px] p-4">
                <h1 className="text-lg md:text-xl">{source}</h1>
                <IoLogoGithub className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Home;