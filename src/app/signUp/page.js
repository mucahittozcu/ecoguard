"use client"
import { useState } from "react"
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { TbEye } from "react-icons/tb";
import { TbEyeOff } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
const page = () => {
 const [userName,setUserName] = useState("")
 const [password,setPassword] = useState("")
 const [phoneNumber,setPhoneNumber] = useState("")
 const [email,setEmail] = useState("")
 const [showPassword,setShowPassword] = useState(false)
 const handleSubmit = (e) => {
    e.preventDefault()
}
  return (
    <div className="relative overflow-hidden h-screen w-screen bg-image5 bg-cover flex justify-center items-center ">
        <div className="flex absolute top-5 left-5">
          <img src={"img/health.png"} className=" h-[40px] w-[40px] " />
          <h1 className="text-4xl font-bold pl-2 text-gradient ">EcoGuard</h1>
        </div>
       <div className="bg-[#434343] w-[400px] h-[800px] xl:w-[650px] xl:h-[800px] lg:w-[550px] lg:h-[800px] md:w-[500px] md:h-[800px] xl:bg-opacity-80 lg:bg-opacity-80 md:bg-opacity-80 bg-opacity-80 rounded-2xl flex-flex-col xl:p-28 xl:pt-16 lg:p-20 lg:pt-16 md:p-20 md:pt-16 p-14 pt-14">
         <h2 className="text-white text-7xl font-bold ">Sign In</h2>
         <form onSubmit={handleSubmit} className="flex-flex-col">
        <div className="relative mt-10">
         <FaUser className="absolute top-[50%] left-[2%] transform -translate-y-1/2 text-gray-50 " size={20} />
            <input 
              className="w-[300px] h-[55px] xl:w-[450px] xl:h-[55px] lg:w-[400px] lg:h-[55px] md:w-[350px] md:h-[55px] border border-white rounded-xl pl-10 bg-opacity-50 bg-[#434343] text-white "
              type="text"
              placeholder="Username"
              name="username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
        </div>
        <div className="relative mt-10">
          <MdEmail className="absolute top-[50%] left-[2%] transform -translate-y-1/2 text-gray-50 " size={22} />
          <input 
            className="border border-white bg-[#434343] bg-opacity-50 text-white rounded-xl w-[300px] h-[55px] xl:w-[450px] xl:h-[55px] lg:w-[400px] lg:h-[55px] md:w-[350px] md:h-[55px] pl-10"
            required
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="relative mt-10">
           <MdLocalPhone className="absolute top-[50%] left-[2%] transform -translate-y-1/2 text-gray-50 " size={22} />
          <input 
            className="border border-white bg-[#434343] bg-opacity-50 text-white rounded-xl w-[300px] h-[55px] xl:w-[450px] xl:h-[55px] lg:w-[400px] lg:h-[55px] md:w-[350px] md:h-[55px] pl-10"
            required
            type="tel"
            name="phone"
            placeholder="Phone Number"
            maxLength={11}
            minLength={11}
            min={0}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="relative mt-10">
         <IoMdLock className="absolute top-[50%] left-[2%] transform -translate-y-1/2 text-gray-50 " size={22} />
            <input 
              className="w-[300px] h-[55px] xl:w-[450px] xl:h-[55px] lg:w-[400px] lg:h-[55px] md:w-[350px] md:h-[55px] border border-white rounded-xl pl-10 bg-opacity-50 bg-[#434343] text-white "
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
        {showPassword ? <TbEye  className="absolute top-[50%] right-[-2%] transform -translate-y-1/2 cursor-pointer text-gray-50" size={25} onClick={() => setShowPassword((pre) => !pre)} /> :
          <TbEyeOff className="absolute top-[50%] right-[-2%] transform -translate-y-1/2 cursor-pointer text-gray-50" size={25} onClick={() => setShowPassword((pre) => !pre)} />}
         </div>
         <input
          className="pb-5 mt-14"
          type="checkbox"
          id="agree"
          name="agree"
          required
         />
         <label className="pl-2 text-white font-light " htmlFor="agree">I agree <a href="#" className="font-bold">Terms and Conditions & Private Policy </a> by Signing in</label>
         </form>
         <div className=" flex flex-col justify-center items-center pt-14">
         <Link href="/" >
            <button className="w-[250px] h-[60px] xl:w-[350px] xl:h-[60px] lg:w-[300px] lg:h-[60px] md:w-[270px] md:h-[60px] mb-10 text-[#0068C8] bg-white text-2xl font-bold rounded-xl border border-white ">Sign Up</button>
         </Link>
         </div>

       </div>

    </div>
  )
}
export default page