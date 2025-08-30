import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function Loyihalar() {
  return (
    <div>
      <div className="w-full flex ">
        <Sidebar />
        <Navbar />
        <div className=" w-[1100px]  relative top-36 left-[350px] flex flex-col gap-3">
          <div className="flex flex-col gap-5 w-full">
            <h1 className="text-3xl flex items-center gap-3 font-mono">
              Loyihalar{" "}
              <p className="text-blue-700">
                <FaChevronRight />
              </p>
            </h1>
            <div className="grid grid-cols-3 gap-5">
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/MERN Stack - Telegram clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">
                  MERN Stack - Telegram clone
                </h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/Next.js - X clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">Next.js - X clone</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/Next.js - Drive clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">Next.js - Drive clone</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/Nux.js - Jira clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">Nux.js - Jira clone</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/Next-js - Notion clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">Next.js - Notion clone</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/React Navite - Netflix clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">
                  React Navite - Netflix clone
                </h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/Next.js - E-Commerce.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">Next.js - E-Commerce</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/React Navite - hh clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">React Navite - hh clone</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/React Navite - Netflix clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">
                  React Navite - Netflix clone
                </h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/React Navite - Kinoteatr.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">React Navite - Kinoteatr</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/HTML CSS JS - Paint clone.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">
                  HTML CSS JS - Paint clone
                </h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/Node.js Telegram bot.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">Node.js Telegram bot</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/React.js - Sammitube.png"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">React.js - Sammitube</h1>
              </div>
              <div className="card w-[97%] border-2  border-gray-600 h-[250px]">
                <img
                  src="/public/Next.js - Blog.pnb.webp"
                  className="bg-white w-full h-[80%] rounded-t-lg"
                  alt=""
                />
                <h1 className="text-2xl ml-5 mt-2">Next.js - Blog</h1>
              </div>
            </div>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Loyihalar;
