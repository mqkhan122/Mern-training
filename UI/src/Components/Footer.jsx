import React from 'react'
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
   
     <section className='bg-green-400 flex justify-around text-white p-9 leading-8 flex-col md:flex-col lg:flex-row'>
        <div>
            <h1 className='font-bold text-2xl '>Contact Us</h1>
            <h2 className='flex gap-2 items-center'><IoMdCall /> +91-9876543298 </h2>
            <h2 className='flex gap-2 items-center'> <CiMail /> testing@gmail.com</h2>
            <h1 className='text-1xl font-bold'>Find Us on</h1>
            <div className="flex gap-3">
              <FaInstagram />
              <CiFacebook />
              <CiLinkedin />
              <FaXTwitter />
            </div>
        </div>

        <div>
            <h1 className='font-bold text-2xl '>Our Services</h1>
            <ul>
                <li>Collect scrap items</li>
                <li>Damage Mobile Collection</li>
                <li>Crash Electronics</li>
            </ul>
        </div>

        <div>
            <h1 className='font-bold text-3xl text-white-500'>Scrap </h1>
            <h1 className='font-bold'>Regd. Address : </h1>
            <h1>Shop No.2 New Categoriez Market</h1>
        </div>
     </section>

    </>
  )
}

export default Footer