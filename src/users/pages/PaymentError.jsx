import React from 'react'
import Header from '../components/Header'
import BookStoreFooter from '../../components/BookStoreFooter'

function PaymentError() {
  return (
       
<div>
  <Header/>
  <div class="flex text-center p-40">
  <div class="w-1/2 ...">
  <p className='text-red-600 text-8xl'>Oh No!</p>
  <p className='text-red-700 text-4xl'>Your payment was Failed</p>
  <p className='text-amber-800 py-5'>We apologize for the inconvience caused and appreciate your visit to our website</p>
   <button className='bg-amber-950 p-5 rounded-full text-amber-50 shadow-2xl my-4  '>Expolre More</button>
  </div>
  <div class="w-1/2 ...">
  <img src="https://cdni.iconscout.com/illustration/premium/thumb/payment-error-2130357-1800921.png" alt="" />
  </div>
</div>
  <BookStoreFooter/>
    </div>
  )
}

export default PaymentError