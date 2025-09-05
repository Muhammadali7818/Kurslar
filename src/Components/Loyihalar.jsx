import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { projects } from "../contact";

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
                {projects.map((item,idx)=>(
                      <Link to={item.links} key={idx} className='border-2 border-gray-600 rounded-lg pb-2 w-[340px] h-[250px]'>
                         <img src={item.img} className='w-full rounded-lg h-[208px]' alt={item.text} />
                         <h2 className=' p-2 pb-0 text-xl font-bold font-mono'>{item.text}</h2> 
                      </Link>
                    ))
                    }
</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Loyihalar;
