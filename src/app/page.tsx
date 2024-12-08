import Image from "next/image";
import React from "react";
export default function Home() {
  return (
   <div className="flex"> 
    <span>
< Image src="/Images/image 32.jpg" width={387} height={387}
alt="Lamp"
className="mt-10"/></span>
  <span className="mt-20">
<p className="text-pink-500">Best furniture For Your Castle</p>
<p className="text-5xl font-bold">New Furniture Collection<br/>
Trends in 2020</p>
 <p>Check the new arrivals of Sofas latest by this month
 </p><br/>
 <br/>
 <button className="bg-rose-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">Shop</button>
  </span>
<span>
< Image src="/Images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.jpg" width={629} height={629}
alt="Arm Chair"
className=""/>
  </span>                  


   </div>
  )
}