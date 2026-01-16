import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import BookStoreFooter from '../../components/BookStoreFooter'
import { Button } from 'flowbite-react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { getAllBooksAPI } from '../../services/allAPIs';
import { searchContext } from '../../context/SearchContextShare';
function AllBooks() {

  const [token,setToken]=useState('')
  const [allBooks,setAllBooks]=useState([])
  const [tempData,setTempData]=useState([])
  const {searchKey,setSearchKey}=useContext(searchContext)

  const getAllBooks=async(searchKey)=>{
    const reqHeader={
      Authorization:`Bearer ${token}`
    }
    try {
      const response=await getAllBooksAPI(searchKey,reqHeader)
      console.log(response);
      setAllBooks(response.data)
      setTempData(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleFilter=(value)=>{
    setAllBooks(tempData.filter(item=>(item.category).toLowerCase().trim()==value.toLowerCase().trim()))
    
  }

  useEffect(()=>{
    const tok = sessionStorage.getItem('token')
    setToken(tok)
    getAllBooks(searchKey)
  }
  ,[token,searchKey])


   
  return (
    <div>
   <Header/>
    {
      token?
      <>
         <h1 className='text-center mt-20 mb-5 text-4xl'>Collections</h1>
   <section className='flex justify-center items-center'>
            
            <input onChange={(e)=>{setSearchKey(e.target.value)}} type="text" placeholder='Search'  /> <Button className='!bg-amber-950'>Search</Button>
   </section>
   <section className='p-20'>
            <div class="flex ...">
  
  <div class="w-64 flex-none ...">
      <h1>Filters</h1>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Literary Fiction')} name="fltr" id="" />
        <label htmlFor=""> Literary Fiction</label>
      </div>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Philosophy')} name="fltr" id="" />
        <label htmlFor=""> Philosophy</label>
      </div>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Thriller')} name="fltr" id="" />
        <label htmlFor="">Thriller</label>
      </div>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Romance')} name="fltr" id="" />
        <label htmlFor=""> Romance</label>
      </div>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Horror')} name="fltr" id="" />
        <label htmlFor=""> Horror</label>
      </div>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Auto/Biography')} name="fltr" id="" />
        <label htmlFor=""> Auto/Biography</label>
      </div>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Self-Help')} name="fltr" id="" />
        <label htmlFor=""> Self-Help</label>
      </div>
      <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('Politics')} name="fltr" id="" />
        <label htmlFor=""> Politics</label>
      </div>
 
 <div className='my-3'>
        <input type="radio" onClick={()=>handleFilter('No-filter')} name="fltr" id="" />
        <label htmlFor=""> No-filter</label>
      </div>
  </div>

  <div class="flex-1 ...">
      <div className='flex flex-wrap justify-evenly items-center'>
      {
        allBooks?allBooks.map(item=>(
          <Link to={`/viewBook/${item._id} `}>
          <Card
     className="max-w-sm py-20 px-10 shadow-2xl border-0 m-10"
     imgAlt="Meaningful alt text for an image that is not purely decorative"
     style={{
       height:'450px',
       backgroundColor:'wheat'
     }}  
   >
     <img src={item.imageUrl} style={{height:'300px',width:'300px'}}  alt="" />
     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {item.title}<br/>
      
     </h5>
     <p className="font-bold text-2xl text-gray-700 dark:text-red-600">
     {item.price}
     </p>
   </Card>
      </Link>
        )):"no books"
      }
      </div>

  </div>
</div>
   </section>
      </>:
      <>
        <h1>Please Login</h1>
      </>
    }
   <BookStoreFooter/>
    </div>
  )
}

export default AllBooks
