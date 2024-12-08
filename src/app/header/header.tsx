import React from "react"
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link"
function Header() {
  return (
    <header >
        <div>
<ul className="bg-violet-800 flex justify-center  gap-8 text-white">
    <li className="flex gap-2 mr-10"> <FaRegEnvelope  />mhhasanul@gmail.com</li>
<li className="flex  gap-2 mr-10"> <FiPhoneCall />(1234)567890</li>
<li className="flex ml-20 ">English<RiArrowDropDownLine /></li>
<li className="flex ">USD<RiArrowDropDownLine /></li>
<li className="flex ">login <RxPerson /></li>
<li className="flex ">wishlist <CiHeart /></li>
<li ><BsCart2 /></li>
</ul></div>
<div className="flex gap-20 mt-5">
    <span className="font-bold text-4xl ml-20">HEKTO</span>
    <span ><ul className="flex gap-10 text-bold text-xl">
        <li className="hover:text-red-700 flex">Home <RiArrowDropDownLine /></li>
        <li>Pages</li>
        <li>Products</li>
        <li>Blog</li>
        <li>Shop</li>
        <li>Contact</li>
        </ul></span>
        <span className="flex gap-2">
            <input className=" text-xs w-[220px]  lg:block md:block "
             placeholder="Search here" /> 
            <FaSearch />
           
        </span>
</div>

        


{/* <nav className=' text-3xl fixed top-0 left-1/2 transform -translate-x-1/2 w-full bg-gray-800 text-white'>
<ul className=' bg-gray-900 flex justify-center space-x-24 ' >
<li className='transition ease-in-out ' > <Link href='/'className=' hover:text-amber-600' > Home</Link></li>
    <li> <Link href='/about' className=' hover:text-amber-600'> About </Link></li>
    <li><Link href='/contact' className=' hover:text-amber-600'> Contact</Link></li>
    </ul>
    
    


</nav> */}

  </header>
  )
}
export default Header
