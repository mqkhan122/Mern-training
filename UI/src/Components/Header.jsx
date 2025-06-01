import React from 'react'
import '../App.css'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <>
    <input type="checkbox" id='check'/>
    <nav className='flex gap-20 items-center w-full p-5 shadow-lg'>
        <h1 className='font-bold text-3xl text-gray-500'>Scrap </h1>

        <ul className='flex gap-10 w-full'>
            <li>Home</li>
            <li>Why Us?</li>
            <li>Scrap Rates</li>
        </ul>


        <div className='w-full'>
        <button class="bg-gray-700 hover:bg-gray-500 float-end text-white font-bold py-2 px-4 rounded">
             Get Started
        </button>
        </div>

        <label htmlFor="check">
            <GiHamburgerMenu />
        </label>
    </nav>

    <section className='flex justify-between p-14 lg:flex-row md:flex-col flex-col items-center  '>
        <div className="ch1">
            <h1 className='text-5xl font-bold'>Sell your recyclables <br />online with ScrapUncle!</h1>
            <h2 className='font-bold text-gray-500 text-2xl mt-3'>Paper - Plastics - Metals - Appliances </h2>
            <h3 className='text-3xl mt-0.5'>You can also download the ScrapUncle App</h3>
            <button class="bg-gray-700 hover:bg-gray-500 mt-3 text-white font-bold py-2 px-4 rounded">
             Get Started
        </button>
        </div>

        <div className='shadow-lg px-10 py-10 mt-10 rounded-3xl'>
            <img src="hero.png" height="100px" width="400px" alt="" />
        </div>
    </section>
     
    </>
  )
}

export default Header