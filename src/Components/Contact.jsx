import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div >
      <Sidebar/>
      <Navbar/>
      <div className=' w-[42%] h-[480px]  border border-2 rounded-xl  relative top-[160px] left-[40%] flex flex-col justify-between'>
        <div className='w-full  h-[126px] flex flex-col  items-center justify-center gap-2'>
            <h1 className='w-[90%] font-mono text-2xl font-semibold'>Biz bilan bog'lanish</h1>
            <p className='w-[90%] text-sm text-gray-400'>Sammi savol yoki takliflaringiz bo'lsa, biz bilan bog'lanish uchun quyidagi ma'lumotlarni ishlatishingiz mumkin yokida formani to'ldirishingiz mumkin.</p>
        </div>
        <hr />
        <div className='w-full h-[336px]  flex flex-col items-center justify-center gap-5 '> 
            <div className='w-[506px] h-[152px] flex flex-col justify-between'>
                <h1 className='text-base font-medium leading-none peer-disabled:opacity-70'>Savol va taklifingizni yozing</h1>
                <input type="text" className='w-[506px] h-[128px]  rounded-md border border-gray-500  pb-20 pl-3 text-base'  placeholder="Vali Teach saytida yana nima qo'shish kerak"/>
            </div>
            <div className='w-[506px] h-[60px] flex flex-col justify-between'>
                <h1 className='text-base font-medium leading-none peer-disabled:opacity-70'>Ismingiz</h1>
                <input type="text" className=' w-[506px] h-[36px] pl-3 rounded-md border border-gray-500  text-base' placeholder='Rahmatov Sherzodbek' />
            </div>
            <div className='w-[506px] flex '>
              <a href="" className='ml-auto w-32 h-10 rounded-3xl flex items-center justify-center text-white  bg-orange-400 '>Tasdiqlash</a>
              </div>
              
        </div>
      </div>
    </div>
  )
}

export default Contact
