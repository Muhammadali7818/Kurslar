import React from "react";
import { sidebarLinks } from "../contact";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[18%] h-[96.5vh] rounded-md border border-gray-500 mx-1 my-1 fixed ml-[0.5%] mt-3 hidden md:block">
      <p className="text-sm pt-2 pl-2 font-mono text-gray-400">Sahifalar</p>
      <div>
{sidebarLinks.map((item, idx) => (
  <NavLink to={item.href} 
    key={idx}
    className="flex items-center gap-4 mb-4 mt-2 hover:bg-slate-500 px-4 py-4 w-[90%] mx-auto rounded-md"
  >
    {item.logo && (
      <img 
        src={item.logo} 
        alt="logo" 
        className="w-[30px] h-[30px] ml-2 filter dark:invert" 
      />
    )}
    {item.icon && (
      <item.icon className="w-[30px] h-[30px] ml-2 " />
    )}
    <h1 className="text-2xl font-bold">{item.text}</h1>
  </NavLink>
))}

      </div>
    </div>
  );
}

export default Sidebar;
