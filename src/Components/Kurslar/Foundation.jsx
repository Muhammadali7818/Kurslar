import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { IoPerson } from "react-icons/io5";
import { MdExitToApp, MdOutlineDateRange } from "react-icons/md";
import { IoIosList, IoMdCheckmarkCircleOutline, } from "react-icons/io";

function Foundation() {
  return (
    <div className="w-full flex ">
      <Sidebar />
      <Navbar />
      <div className=" w-[1215px]   relative top-36 left-[301.5px] flex flex-col gap-3">
        <div className="w-full h-[340px] rounded-md   border border-gray-500 flex items-center justify-center gap-10">
          <div className=" flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl">Foundation</h1>
              <p className="text-base text-zinc-500">
                Foundation to'liq kurs o'zbek tilida. HTML, CSS, JavaScript
                (BEM), Bootstrap, SASS (SCSS) va <br /> amaliy loyihlar barchasi bitta
                kurs va asosiysi mutloqo bepul. O'zingizni birinchi web
                saytingizni <br /> yashashingiz mumkin va uni hosting joylashni ham
                sizga batafsil ma'lumot beramiz.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 text-xl">
                <p className="flex items-center justify-center gap-2">
                  <IoPerson /> 1000 o'quvchilar
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MdOutlineDateRange /> 2025, 11-Mart
                </p>
              </div>
              <div className="flex gap-7 text-xl">
                <p>Davomiylik: 12 soat </p>
                <div className="rating ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 "
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/Foundation.png"
            className="w-[37%] h-[80%] rounded-lg"
            alt=""
          />
        </div> 
        <div className="flex justify-between">
          <div className="w-[63.5%]">
        <div className="w-full h-[250px] rounded-md  flex   pl-10 flex-col justify-center gap-4 border border-gray-500">
          <h1 className="text-4xl">Nimalarni o'rganasiz</h1>
          <div className="grid grid-cols-2 grid-rows-5 gap-2">
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> HTML</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> JavaScript</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> SASS</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> Bootstrap</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> Portfolio</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> CSS</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> BEM</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> SCSS</p>
            <p className="flex items-center  gap-2 text-xl" ><IoMdCheckmarkCircleOutline /> Web-Sayt</p>
          </div>
        </div>
        </div>
        <div className="w-[35%]  h-[60%] rounded-md flex items-center justify-center  border border-gray-500">
          <div className=" w-[90%] flex flex-col items-center ">
            <div className="w-full items-start">
            <h1 className="text-2xl ">Kurs narxi</h1>
            <div className="flex gap-2 justify-start items-end">
              <p className="text-2xl">Bepul</p>
              <p className=" line-through text-1xl">250.000 UZS</p>
            </div>
            <hr />
          </div>
          <NavLink to={''} className={'flex items-center justify-center  w-[90%] mt-3 rounded-3xl text-black text-xl bg-white h-[50px] border border-gray-500 '}>
            Kursni ko'r ish <MdExitToApp />
          </NavLink>
          </div>
        </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Foundation;
