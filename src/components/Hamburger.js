"use client"
import Link from "next/link"
import { useState } from "react"
import { GoHome } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiSquareInfo } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col mt-5 pr-5 ml-5 ">
        
       <RxHamburgerMenu size={40} onClick={() => setIsOpen((pre) => !pre)} className="cursor-pointer absolute top-5 left-4 z-20 lg:hidden" />

       <div className={`transition-transform transform ${isOpen ? 'translate-x-1 translate-y-5' : '-translate-x-full'} shadow-2xl rounded-2xl lg:translate-x-0 duration-300 fixed lg:relative top-0 left-0  lg:top-auto lg:left-auto bg-slate-50 w-[300px] h-[900px] xl:w-[300px] xl:h-[900px] lg:w-[250px] lg:h-[900px] z-10 lg:z-auto`}>

        <div className="flex pt-10 pl-10">
            <img src={"img/Rectangle 2.png"} alt="kullanıcı fotoğrafı" className="h-[40px] w-[40px] " />
            <h3 className="text-xl font-bold pt-2 pl-2 ">Namık Korona</h3>
        </div>
          
        <div className="flex flex-col gap-y-3 pt-16 pl-10 text-[#6C7894]">
            <h4 className="font-bold text-xl pb-3">Menu</h4>
          <div className="relative">
            <GoHome size={30} color="6C7894" className="absolute left-[0%] top-[-5%] " />
            <Link href="/dashboard" className="pl-10 text-xl font-semibold">
               Dashboard
            </Link>
          </div>
          <div className="relative ">
            <MdOutlineMessage size={30} color="6C7894" className="absolute left-[0%] top-[5%] " />
            <Link href="/messages" className="pl-10 text-xl font-semibold">
               Messages
            </Link>
          </div>
        </div>

        <div className=" flex flex-col gap-y-3 pt-32 pl-10 text-[#6C7894]">
            <h4 className="font-bold text-xl pb-3">Settings</h4>
            <div className="relative">
                <FaRegUser size={20} color="6C7894" className="absolute left-[0%] top-[5%] " />
                <button className="pl-10 font-semibold text-lg">Profile</button>
            </div>
            <div className="relative">
                <CiSquareInfo size={30} color="6C7894" className="absolute  left-[-5px] top-[-5%] " />
                <button className="pl-10 font-semibold text-lg">FAQ's</button>
            </div>
            <div className="relative">
                <FiPhoneCall size={20} color="6C7894" className="absolute left-[0%] top-[10%] " />
                <button className="pl-10 font-semibold text-lg">Contact us</button>
            </div>
            <div className="relative">
                <IoLogOutOutline size={27} color="6C7894" className="absolute left-[0%] top-[0%] " />
                <Link href="/" className="pl-10 font-semibold text-lg">Logout</Link>
            </div>
        </div>
       
        <div className="flex pt-40 pl-14 ">
           <img src={"img/health.png"} className=" h-[30px] w-[30px] " />
           <h1 className="text-2xl font-bold pl-2 text-gradient ">EcoGuard</h1>
        </div>

        <div className="relative pl-3 pt-7">
           <RiRobot2Line size={35} color="284680" className="absolute left-[23%] top-[45%] xl:absolute xl:left-[23%] xl:top-[45%] lg:absolute lg:left-[20%] lg:top-[45%] " />
           <button className="bg-[#CCDBFD] w-[270px] h-[60px] xl:w-[270px] xl:h-[60px] lg:w-[220px] lg:h-[60px] text-[#284680] pl-7 pt-1 font-bold text-2xl rounded-2xl ">Chat Bot</button>
        </div>
        </div>
      </div>
  )
}
export default Hamburger