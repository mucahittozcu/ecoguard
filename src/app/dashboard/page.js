"use client"

import { useState,useEffect } from "react"
import { CiSearch } from "react-icons/ci";
import { FaToggleOff,FaToggleOn } from "react-icons/fa6";
import { PiBellSimple } from "react-icons/pi";
import { SlQuestion } from "react-icons/sl";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import { PiWind } from "react-icons/pi";
import { LuWaves } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineLiving } from "react-icons/md";
import Hamburger from "@/components/Hamburger";
import LineChart, { BarChartWqi } from "@/components/Charts";
import { LineChart2 } from "@/components/Charts";
import { DonutChart } from "@/components/Charts";
import { BarChart } from "@/components/Charts";


const page = () => {
  const [search,setSearch] = useState("")
  const [isToggled, setIsToggled] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showDetails2, setShowDetails2] = useState(false)
  const [wqi,setWqi] = useState([])
  const [aqi,setAqi] = useState([])
  const [voc,setVoc] = useState([])

  useEffect(() => {
   setWqi([
     { name: 'Temperature', value: Math.floor(Math.random() * 100) + 1, smg: "℃" },
     { name: 'PH Value', value: Math.floor(Math.random() * 10) + 1 },
     { name: 'TDS Level', value: Math.floor(Math.random() * 200) + 1 },
   ])
   setAqi([
      { name: 'Temperature', value: Math.floor(Math.random() * 100) + 1, smg: "℃" },
      { name: 'Humidity', value: Math.floor(Math.random() * 100) + 1, smg: "%" },
    ])
    setVoc([
      { name: 'Benzene', value: Math.floor(Math.random() * 100) + 1 },
      { name: 'Toluene', value: Math.floor(Math.random() * 100) + 1 },
      { name: 'Gas 3', value: Math.floor(Math.random() * 100) + 1 },
    ])
 },[])

    return (
   <div className={`flex relative overflow-x-hidden h-screen w-screen ${isToggled ? "bg-black" : "bg-[#E8F3FC]"}`}>
         
      <Hamburger />
      
      <div className="flex flex-col gap-y-5 w-full">

      <div className="flex md:flex xl:gap-x-72 lg:gap-x-7 md:gap-x-5 gap-x-2 xl:justify-around  h-[100px] ml-7 xl:ml-10 lg:ml-5 md:ml-10 w-full">
            
            <h2 className={`text-xl pt-9 font-bold md:text-2xl md:pt-10 md:font-bold  ${isToggled ? "text-white" : "text-black"}`}>Dashboard</h2>

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

         <div className={`flex xl:pt-10 lg:pt-8 md:gap-x-7 gap-x-2 pt-7 md:pt-8 `}>
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
       
      <h2 className={`ml-0 xl:ml-28 lg:ml-0 md:ml-0 text-2xl font-semibold ${isToggled ? "text-white" : "text-black"}`}>Rooms</h2>
      <div className="flex flex-col gap-y-2  md:flex md:flex-row gap-x-7 ml-0 xl:gap-x-7 xl:ml-28 md:ml-0 lg:gap-x-7  lg:ml-0">
         <div className="relative w-[350px] h-[73px] xl:w-[250px] xl:h-[70px] lg:w-[210px] lg:h-[70px] md:w-[210px] md:h-[70px] rounded-2xl bg-white ">
            <MdOutlineBedroomParent size={40} color="5997c9" className="absolute bg-[#cbe7fd] w-[60px] h-[55px] xl:w-[60px] xl:h-[55px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] rounded-xl top-[10%] left-[5%] " />
           <div className="flex flex-col gap-y-1 pt-1 pl-28 xl:pl-28 lg:pl-20 md:pl-20 ">
             <h4 className="text-3xl font-semibold md:text-2xl md:font-semibold">Bedroom</h4>
             <div className="flex justify-center items-center border-[3px] border-green-500 w-[52px] h-[25px] rounded-lg ">Good</div>
           </div>
         </div>
         <div className="relative  w-[350px] h-[73px] xl:w-[250px] xl:h-[70px] lg:w-[210px] lg:h-[70px] md:w-[210px] md:h-[70px] rounded-2xl bg-white ">
            <MdOutlineBedroomParent size={40} color="0f436b" className="absolute bg-[#0f436b] w-[60px] h-[55px] xl:w-[60px] xl:h-[55px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] rounded-xl top-[10%] left-[5%] " />
           <div className="flex flex-col gap-y-1 pt-1 pl-28 xl:pl-28 lg:pl-20 md:pl-20 ">
             <h4 className="text-3xl font-semibold md:text-2xl md:font-semibold">Backyard</h4>
             <div className="flex justify-center items-center border-[3px] border-orange-300 w-[70px] h-[26px] rounded-lg ">Avarage</div>
           </div>
         </div>
         <div className="relative  w-[350px] h-[73px] xl:w-[250px] xl:h-[70px] lg:w-[220px] lg:h-[70px] md:w-[210px] md:h-[70px] rounded-2xl bg-white ">
            <MdOutlineLiving size={40} color="5997c9" className="absolute bg-[#cbe7fd] w-[60px] h-[55px] xl:w-[60px] xl:h-[55px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] rounded-xl top-[10%] left-[5%] " /> 
           <div className="flex flex-col gap-y-1 pt-1 pl-28 xl:pl-24 lg:pl-16 md:pl-20 ">
             <h4 className="text-3xl font-semibold md:text-xl lg:text-2xl md:font-semibold">Living Room</h4>
             <div className="flex justify-center items-center border-[3px] border-green-500 w-[52px] h-[25px] rounded-lg ">Good</div>
           </div>
         </div>
      </div>

        <h2 className={`ml-0 xl:ml-28 lg:ml-0 md:ml-0 text-2xl pt-10 font-semibold ${isToggled ? "text-white" : "text-black"}`}>Levels</h2>
      <div className="ml-0 xl:ml-28 lg:ml-0 md:ml-0 rounded-2xl relative flex justify-between bg-white w-[450px] h-[60px] xl:w-[1300px] xl:h-[60px] lg:w-[710px] lg:h-[60px] md:w-[700px] md:h-[60px] ">
           <PiWind size={40} className="absolute top-[15%] left-[1%] " />
           <h2 className="pt-4 pl-16 text-2xl font-bold">AQI</h2>
           {showDetails ? <MdKeyboardArrowDown size={50} color="blue" onClick={() => setShowDetails((pre) => !pre)} className="mt-2 mr-2 cursor-pointer" /> : <MdKeyboardArrowUp size={50} color="blue" onClick={() => setShowDetails((pre) => !pre)} className="mt-2 mr-2 cursor-pointer" /> }
      </div>
     {showDetails && 
        <div className="flex"> 

         <div className="flex-flex-col">
            <div className="w-[200px] mb-5 h-[225px] xl:w-[550px] xl:mb-5 xl:h-[325px] lg:w-[300px] lg:mb-5 md:w-[300px] md:h-[275px]  md:mb-5 ml-0 xl:ml-28 lg:ml-0 md:ml-0 lg:h-[275px] bg-white rounded-xl ">
               <LineChart />
            </div>
            <div className="w-[200px] h-[225px] xl:w-[550px] xl:mb-5 xl:h-[325px] lg:w-[300px] lg:mb-5 ml-0 md:w-[300px] md:h-[275px]  md:mb-5 xl:ml-28 lg:ml-0 md:ml-0 lg:h-[275px] bg-white rounded-xl ">
               <LineChart2 />
            </div>
         </div>
         
          <div className="flex flex-col gap-y-5">
              <BarChart aqi={aqi} />
             <DonutChart voc={voc} />
          </div>
          
          </div>
      }

      <div className="ml-0 xl:ml-28 lg:ml-0 md:ml-0 relative rounded-2xl flex justify-between bg-white w-[450px] h-[60px] xl:w-[1300px] xl:h-[60px] lg:w-[710px] lg:h-[60px] md:w-[700px] md:h-[60px] ">
           <LuWaves size={35} className="absolute top-[20%] left-[1%] " />
           <h2 className="pt-4 pl-16 text-2xl font-bold">WQI</h2>
           {showDetails2 ? <MdKeyboardArrowDown size={50} color="blue" onClick={() => setShowDetails2((pre) => !pre)} className="mt-2 mr-2 cursor-pointer" /> : <MdKeyboardArrowUp size={50} color="blue" onClick={() => setShowDetails2((pre) => !pre)} className="mt-2 mr-2 cursor-pointer" /> }
      </div>

    {showDetails2 && 
       <BarChartWqi wqi={wqi} />
    } 
      </div>

   </div>
  )
}
export default page