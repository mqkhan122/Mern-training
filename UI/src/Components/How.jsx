import React from 'react'

const How = () => {
  return (
    <>

     <section className='p-9 mt-5'>
        <h1 className='text-center text-3xl font-bold '>How it is Work</h1>
        <div className='flex justify-around mt-5 gap-5 flex-col md:flex-col lg:flex-row'>
            <div className='bg-green-400 p-10 rounded-2xl shadow-2xl'>
                <h2 className='text-2xl font-bold mb-5 text-white'>Schedule a pickup</h2>
                <img src="pickup.png" alt="" />
            </div>

            <div className='bg-green-400 p-10 text-white rounded-2xl shadow-2xl'>
                <h2 className='text-2xl font-bold mb-5'>Pickup at your address</h2>
                <img src="pickup2.png" alt="" />
            </div>

            <div className='bg-green-400 p-10 text-white rounded-2xl shadow-2xl'>
                <h2 className='text-2xl font-bold mb-5'>Receive payment</h2>
                <img src="recive.png" alt="" />
            </div>
        </div>
      </section>

         <div className='bg-gray-400 '>
            <h1 className='text-center text-3xl font-bold mt-20 pt-9 text-white'>Why Us</h1>

        <div className='flex justify-around mt-5 gap-5 flex-col items-center md:flex-col lg:flex-row pb-9'>
            <div className='rounded-2xl bg-white shadow-2xl flex p-7'>
                <div className='flex items-center'>
                    <img src="money.png" alt="" />
                </div>
                <div>
                    <h1 className='text-center font-bold text-gray-400'>Best Rates</h1>
                    <p className='text-center pl-3'>We provide the best value <br /> for your scrap from our <br /> network of Recyclers.</p>
                </div>
            </div>

            <div className='rounded-2xl bg-white shadow-2xl flex p-7'>
                <div className='flex items-center'>
                    <img src="conv.png" alt="" />
                </div>
                <div>
                    <h1 className='text-center font-bold text-gray-400'>Convenience</h1>
                    <p className='text-center pl-3'>We provide the best value <br /> for your scrap from our <br /> network of Recyclers.</p>
                </div>
            </div>

           <div className='rounded-2xl bg-white shadow-2xl flex p-7'>
                <div className='flex items-center'>
                    <img src="sheild.png" alt="" />
                </div>
                <div>
                    <h1 className='text-center font-bold text-gray-400'>Trust</h1>
                    <p className='text-center pl-3'>We provide the best value <br /> for your scrap from our <br /> network of Recyclers.</p>
                </div>
            </div>
           
        </div>
        </div>

        <div className='mb-20'>
            <h1 className='text-center text-3xl  font-bold mt-20'>Leading brands trust ScrapUncle</h1>

            <div className='flex justify-around gap-5 text-center items-center mt-10 flex-col md:flex-col lg:flex-row'>
                <div>
                    <img src="godrej.png" className='h-15' alt="" />
                </div>

                <div>
                    <img src="iid.png" className='h-15' alt="" />
                </div>

                <div>
                    <img src="tata.png" className='h-15' alt="" />
                </div>

                <div>
                    <img src="ther.png" className='h-15' alt="" />
                </div>

                <div>
                    <img src="li.png" className='h-15' alt="" />
                </div>

                <div>
                    <img src="uc.png" className='h-15' alt="" />
                </div>
            </div>
        </div>
     
    
    </>
  )
}

export default How