import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import BookStoreFooter from '../../components/BookStoreFooter'

function PaymentSuccess() {
  return (
   
    <div>
       <Header/>
      <div class="flex flex-row text-center ms-100  m-20 ">
  <div class=" ">
    <img src="https://www.lappymaker.com/images/greentick-unscreen.gif" alt="" />

  <p className='text-green-500 text-4xl font-extrabold'>Payment Successfull...🎉✨</p>
  <p className='text-2xl text-amber-950 my-5'>Contiue to Shop</p>
  <p>Thanks for trusting Us</p>
  <Link to={'/allBooks'}>
    <button className='bg-amber-950 p-5 rounded-full text-amber-50 shadow-2xl my-4  '>Keep Shopping</button>

  </Link>
  </div>

</div>
<BookStoreFooter/>
    </div>
  )
}

export default PaymentSuccess