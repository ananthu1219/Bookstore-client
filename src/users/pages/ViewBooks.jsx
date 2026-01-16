import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BookStoreFooter from '../../components/BookStoreFooter'
import { Button } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { paymentAPI, viewBookAPI } from '../../services/allAPIs'
import {loadStripe} from '@stripe/stripe-js';

function ViewBooks() {
  const [token, setToken] = useState('')
  const [bookdata, setBookData] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
  }, [])
  
  const activeBook = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
  
    const response = await viewBookAPI(id, reqHeader)
    console.log(response)
  
    if (response.status === 200) {
      setBookData(response.data)
    }
  }

  const makePayment=async()=>{
    alert("payment")
    console.log(bookdata);
    const stripe = await loadStripe('pk_test_51SplxHK5bKfF7c09YkoKzZ3cZzSfMxoa2CKnZTRwxuuD9X3HSA9dusVqGUF9hcG5YBqHQvPRKPHDd2kpDoVUX4Py00X1p8t6C2');
    console.log(stripe);
    // API call
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    const reqBody={
      bookDetails:bookdata
    }
    try {
      const response = await paymentAPI(reqBody, reqHeader);
      console.log(response);
    
      const checkoutUrl = response.data.session.url;
      window.location.href = checkoutUrl; // redirect directly
    
      const sessionId = response.data.sessionID; // make sure this exists
      stripe.initCheckout({
        sessionId: sessionId
      });
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(() => {
    if (token) {
      activeBook()
    }
  }, [token])
  
  
  return (

    <div>
        <Header/>
          <div className="flex justify-evenly flex-wrap p-20">
  <div className="w-1/3  ...">
    <img src={bookdata.imageUrl}  alt="" />
  </div>
  <div className="w-2/3 flex flex-wrap ...">
  <h1>Title: {bookdata.title}</h1>
      <h3>Author: {bookdata.author} </h3>
    <h4>  Price : {bookdata.price} </h4>
      <p>   Description : {bookdata.abstract}
</p>
     
        <div className='flex'>
          <Button>back</Button>
          <Button onClick={makePayment}>Buy</Button>
        </div>
  </div>
  
</div>
        <BookStoreFooter/>
    </div>
  )
}

export default ViewBooks
