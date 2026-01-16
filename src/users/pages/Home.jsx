import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Footer, Label, TextInput } from "flowbite-react";
import { BsSearch } from "react-icons/bs";
import { Card } from "flowbite-react";
import BookStoreFooter from '../../components/BookStoreFooter';
import { Link } from 'react-router-dom';
import { getHomeBooksAPI } from '../../services/allAPIs';


function Home() {

  const [homeBooks,setHomeBooks]=useState([])
  const getHomeBooks=async()=>{
    try {
      const response=await getHomeBooksAPI()
      console.log(response);
      setHomeBooks(response.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  console.log(homeBooks);
  
  useEffect(()=>{
    getHomeBooks()
  },[])

  return (
    <div>
      <Header />
      <section className='bg-[url(https://cdn.pixabay.com/photo/2017/11/13/22/47/tea-2947015_1280.jpg)]  h-150 bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col p-30 bg-amber-50 w-100 h-30 rounded-2xl ' >
          <h1 className='text-2xl'>Faded Ink</h1>
          <p className=' my-3' >Dusting off the old Pages </p>
          <div className="flex justify-center items-center rounded-2xl w-60 bg-amber-50">
            <TextInput type="text" placeholder="Search your books" required />
            <Button className='!bg-amber-950' > <BsSearch className='text-2xl' /></Button>
          </div>
        </div>
      </section>
      <section className='text-center'>
        <h1 className='text-5xl mt-10'>NEW ARRIVALS</h1>
        <p className='text-3xl my-4'>Explore Our Latest Collection</p>
        <div className='flex justify-evenly'>
          {
            homeBooks.length>0?homeBooks.map(item=>(
              <Card
              className="w-200 m-5 !bg-amber-50"     >
              <img src={item.imageUrl} alt="" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
                236 MRP: {item.price} 20% OFF
              </h5>
            </Card>
            )):"Api error"
          }
        </div>
        <div className='flex items-center justify-center m-10'>
          <Link to={'/allBooks'}>
          <Button className='!bg-amber-950 text-2xl'>Explore More</Button>
          </Link>
        </div>
      </section>
      <section className='h-screen'>
                   <h1 className='text-center my-4 text-4xl'>FEATURED AUTHORS</h1>

        <div class="flex flex-row p-5 mt-20">
          <div class="basis-1/3">
            <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/9o5gfl3qr1353djd0cu2sr3em1.jpg" width={'100%'} height={'600px'} alt="" />
          </div>
          <div class="basis-2/3 p-5">

            <h1 className='text-center text-3xl mb-5'>Captivates with every word</h1>
            <p className='text-justify text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt vel quia voluptates dicta incidunt illo fuga pariatur sequi error.</p>

            <p className='text-justify text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt vel quia voluptates dicta incidunt illo fuga pariatur sequi error.</p>


          </div>
        </div>
      </section>
      <section className='h-screen text-center'>
        <h1 className='text-3xl mb-5'>TESTIMONIALS</h1>
<h1 className='text-3xl mb-5'>See What Others Are Saying</h1>
            <div class="flex flex-row justify-evenly items-center">
  <div className="basis-2xs">
    <Card
      className="max-w-sm !bg-amber-950 shadow-2xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
    >
      <img src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
      <h1 className='text-amber-50'>Aneeta Thomas</h1>
      <p className="font-normal text-amber-50 ">
       Absolutely love this book store , I ordered a couple of rare editions and they arrived in perfect condition.
      </p>
    </Card>
  </div>
  <div className="basis-2xs">
     <Card
      className="max-w-sm !bg-amber-950 shadow-2xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
    >
      <img src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
      <h1 className='text-amber-50'>Aneeta Thomas</h1>
      <p className="font-normal text-amber-50 ">
       Absolutely love this book store , I ordered a couple of rare editions and they arrived in perfect condition.
      </p>
    </Card>
  </div>
  <div className="basis-2xs">
     <Card
      className="max-w-sm !bg-amber-950 shadow-2xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
    >
      <img src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
      <h1 className='text-amber-50'>Aneeta Thomas</h1>
      <p className="font-normal text-amber-50 ">
       Absolutely love this book store , I ordered a couple of rare editions and they arrived in perfect condition.
      </p>
    </Card>
  </div>
  <div className="basis-2xs">
     <Card
      className="max-w-sm !bg-amber-950 shadow-2xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
    >
      <img src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
      <h1 className='text-amber-50'>Aneeta Thomas</h1>
      <p className="font-normal text-amber-50 ">
       Absolutely love this book store , I ordered a couple of rare editions and they arrived in perfect condition.
      </p>
    </Card>
  </div>
</div>
      </section>
      <BookStoreFooter/>
    </div>
  )
}

export default Home
