import React from 'react'
import { FaCreditCard, FaSignal } from 'react-icons/fa'


function Home() {
   
  return (
    <main className='main-container'>
      <div className='btn12'>
   <button className='btn3'><FaSignal size={30} color='#BDB9D4' style={{ marginLeft: '15px' }} className='sb' /></button>
        <button className='btn4'> <FaCreditCard size={30} color='#BDB9D4' style={{ marginLeft: '25px' }} className='cc' /></button>
      </div>


      <div className='main-cards'>

        <div className='card'>
          <div className='firstcard'>
            <div className='cl1'>   <FaSignal color='#3326AE' size={60} className='ic' /> </div>
            <div className='card-inner'>
              <h3>  VISITORS</h3>
            </div>
            <h1>10,320</h1>
          </div>
        </div>

        <div className='card'>

          <div className='secondcard'>
            <div className='cl2'>   <FaSignal color='#3326AE' size={60} /> </div>
            <div className='card-inner2'>
              <h3>    CUSTOMERS</h3>

            </div>
            <h1>4,628</h1>
          </div>
        </div>

        <div className='card'>
          <div className='thirdcard'>
            <div className='cl3'>   <FaSignal color='#3326AE' size={60} /> </div>
            <div className='card-inner3'>
              <h3>  ORDERS</h3>

            </div>
            <h1>2,980</h1>
          </div>


        </div>


      </div>
    </main>
  )
}

export default Home
