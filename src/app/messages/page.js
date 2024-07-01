"use client"
import Link from "next/link"
import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { FaToggleOff,FaToggleOn } from "react-icons/fa6";
import { PiBellSimple } from "react-icons/pi";
import { SlQuestion } from "react-icons/sl";
import Hamburger from "@/components/Hamburger";

const page = () => {
  const [search,setSearch] = useState("")
  const [isToggled, setIsToggled] = useState(false)

    return (
    <div className={`flex relative overflow-x-hidden h-screen w-screen ${isToggled ? "bg-black" : "bg-[#E8F3FC]"}`}>
      
    <Hamburger />

    <div className="flex flex-col  w-full ">
            
      <div className="flex md:flex xl:gap-x-72 lg:gap-x-7 md:gap-x-5 gap-x-1 xl:justify-around  h-[100px] ml-5 md:ml-7 w-full">
            
            <h2 className={`text-xl pt-9 font-bold md:text-2xl md:pt-10 md:font-bold ${isToggled ? "text-white" : "text-black"}`}>Notifications</h2>

         <div className=" pt-5 relative">
            <CiSearch size={30} color="6C7894" className="absolute left-[3%] top-[30%]" />
            <input 
               type="search"
               className="w-[150px] h-[50px] md:w-[300px] md:h-[50px] xl:w-[400px] xl:h-[50px] lg:w-[300px] lg:h-[50px] pl-14 pr-2 rounded-2xl "
               placeholder="Search Anything Here..."
               name="search"
               value={search}
               onChange={(event) => setSearch(event.target.value)}
            /> 
         </div>

         <div className={` flex xl:pt-10 lg:pt-8 md:gap-x-7 gap-x-2 pt-7 md:pt-8 `}>
           <button 
             onClick={() => setIsToggled((pre) => !pre)}
             className="flex justify-center rounded-md focus:outline-none">
             {isToggled ? <FaToggleOff size={45} color="white" /> : <FaToggleOn size={45} color="black" />}
           </button>
           <button className={`flex justify-center items-center ${isToggled ? "border border-white" : "border border-black"}  rounded-xl w-[45px] h-[45px] `}>
              <PiBellSimple size={30} color={`${isToggled ? "white" : "grey"}`} className="" /> 
           </button>
           <button className={`flex justify-center items-center ${isToggled ? "border border-white" : "border border-black"}  rounded-xl w-[45px] h-[45px] `}>
              <SlQuestion size={30} color={`${isToggled ? "white" : "grey"}`} className="" />    
           </button>
         </div>  
      </div>

      <div className="w-[450px] pl-5 pr-1 ml-0 md:w-[720px] md:ml-0 xl:w-[1250px] xl:ml-24 lg:w-[700px] lg:ml-7 md:pl-5 pt-3 mt-10 bg-white h-[90px] md:h-[80px] rounded-xl ">
        <div className="flex gap-x-2">
          <div className="text-white bg-red-600 w-[50px] flex justify-center items-center rounded-lg ">Alert</div>
          <p className="text-sm">5 mins ago</p>
        </div>
        <div className="flex gap-x-0 md:gap-x-3 xl:gap-x-80 lg:gap-x-2">
          <p className="pl-0 text-sm xl:pl-10 lg:pl-0 xl:text-lg lg:text-sm ">Benzene percentage is high. Long exposure to benzene can cause various lungs conditions</p>
          <button className="text-blue-500 text-sm xl:text-lg lg:text-sm font-semibold  ">Wiev All</button>
        </div>
      </div>

      <div className="w-[450px] ml-0 md:w-[720px] md:ml-0 xl:w-[1250px] xl:ml-24 lg:w-[700px] lg:ml-7 pl-5 pt-3 mt-5 bg-white h-[90px] md:h-[80px] rounded-xl ">
        <div className="flex gap-x-2">
          <div className="text-white text-sm bg-red-600 w-[65px] flex justify-center items-center rounded-lg ">Danger</div>
          <p className="text-sm">12 mins ago</p>
        </div>
        <div className="flex gap-x-[180px] md:gap-x-[360px] xl:gap-x-[770px] lg:gap-x-[350px] ">
          <p className="pl-0 text-sm xl:pl-10 lg:pl-0 xl:text-lg lg:text-sm">You Lost 8 mins worth of your lifespan</p>
          <button className="text-blue-500 text-sm xl:text-lg lg:text-sm font-semibold ">Wiev All</button>
        </div>
      </div>
      
      </div>
    </div>
  )
}
export default page