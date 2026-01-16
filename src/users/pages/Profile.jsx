import React from 'react'
import Header from '../components/Header'
import { Button } from 'flowbite-react'
import EditProfile from '../components/EditProfile'
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Card } from "flowbite-react";
import { useState,useEffect } from 'react';
import BookStoreFooter from '../../components/BookStoreFooter';
import { AddBookAPI } from '../../services/allAPIs';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
function Profile() {
  
  const [userData,setUserData]=useState({})
  const [token,setToken]=useState('')
  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
    setUserData(JSON.parse(sessionStorage.getItem("userDetails")))
  },[])

  const [bookDeatails,setBookDetails]=useState({
    title:"",
    author:"",
    noofpages:"",
    imageUrl:"",
    price:"",
    dprice:"",
    abstract:"",
    publisher:"",
    language:"",
    isbn:"",
    category:"",
    UploadedImages:[]
  })

  const [preview,setPreview]=useState('')

  const [previewList,setPreviewlist]=useState([])

  const handleAddBooks=async()=>{
    const {title,author,noofpages,imageUrl,price,dprice,abstract,publisher,language,isbn,category,UploadedImages}=bookDeatails
    console.log(bookDeatails);
    try {
     const reqHeader={
      Authorization:`Bearer ${token}`
     } 

     const reqBody=new FormData()
      for (let key in bookDeatails) {
        if(key!="UploadedImages"){
          reqBody.append(key,bookDeatails[key])
        }
        else{
          bookDeatails.UploadedImages.forEach(item=>(
            reqBody.append("UploadedImages",item)
          ))
        }
     }

     const result= await AddBookAPI(reqBody,reqHeader)
     console.log(result);
     if(result.status===200){
      alert(result.data)
     }
      else{
        alert(result.response.data)
      }
     
     

    } catch (error) {
      console.log(error);
      
    }
    
  }

  const handleUpload=async(e)=>{
    console.log(e.target.files[0]);

    let imgArray=bookDeatails.UploadedImages;
    imgArray.push(e.target.files[0]);
    setBookDetails({...bookDeatails,UploadedImages:imgArray});
    console.log(imgArray);
    const url=URL.createObjectURL(e.target.files[0]);
    setPreview(url)
    let imageListArray=previewList
    imageListArray.push(url)
    setPreviewlist(imageListArray)
  }

  return (
    <div>
        <Header/>
        <div className='bg-amber-50 mt-40' >
          <div className='bg-amber-950 pt-32 pb-16 mt-40 relative'>
                <div className='absolute -top-24 left-24 p-2 bg-amber-50 border-2 border-amber-50 rounded-full'>
                 
                    <img src={userData.profile} referrerPolicy='no-referrer' alt=""  className='rounded-full shadow-2xl ' width={'160px'}/>

                </div>
                <div className="flex flex-row justify-between">
  <div className="flex ">
     <h1 className='text-center ms-25 text-amber-50 font-bold text-3xl'>{userData.username}</h1>
     <img src="https://static.vecteezy.com/system/resources/previews/022/935/713/original/blue-checkmark-icon-approved-free-png.png" width={'45px'} alt="" />
  </div>
  <div className="">
 <EditProfile/>
  </div>
</div>
                
          </div>
        </div>

        <section>
           <section className='px-30 py-5 h-screen '>
          <div className="overflow-x-auto bg-amber-950 p-5 text-amber-50 rounded shadow">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <TabItem active title="Sell Book" icon={HiUserCircle}>
              <form>
      <div className="space-y-12">
       
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">Book Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
             
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,title:e.target.value})}
                  id="first-name"
                  name="first-name"
                  placeholder='Title'
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
               
              <div className="mt-2">
                <input
                onChange={(e)=>setBookDetails({...bookDeatails,author:e.target.value})}
                  id="first-name"
                  name="first-name"
                  placeholder='Author'
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
               
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,noofpages:e.target.value})}
                  id="first-name"
                  placeholder='NoOfPages'
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,imageUrl:e.target.value})}
                  id="first-name"
                  name="first-name"
                  placeholder='ImageURL'
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,price:e.target.value})}
                  id="first-name"
                  name="first-name"
                  placeholder='Price'
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
             
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,dprice:e.target.value})}
                  id="first-name"
                  placeholder='Dprice'
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
               <div className="col-span-full">
           
              <div className="mt-2">
                <textarea
                  onChange={(e)=>setBookDetails({...bookDeatails,abstract:e.target.value})}               
                  id="about"
                  placeholder='Abstract'
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
              
            </div>

            <div className="sm:col-span-3">
             
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,category:e.target.value})}
                  id="last-name"
                  name="last-name"
                  placeholder='Category'
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              
            
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,publisher:e.target.value})}
                  id="last-name"
                  name="last-name"
                  placeholder='Publisher'
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,language:e.target.value})}
                  id="last-name"
                  name="last-name"
                  placeholder='Language'
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
             
              <div className="mt-2">
                <input
                  onChange={(e)=>setBookDetails({...bookDeatails,isbn:e.target.value})}
                  id="last-name"
                  name="last-name"
                  placeholder='Isbn'
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              <div className='ms-40 mt-4'>
              {
                preview?
                <label htmlFor="imgfile" >
                <input id='imgfile' type="file" onChange={(e)=>handleUpload(e)} hidden />
                <div className='flex justify-around align-center'>
                {
                  previewList&& previewList.map(item=>(
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                      <img src={item} width={'200px'} alt="" />
                      </div>
                    </div>
                  ))
                }
                <div className='flex flex-col m-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" width={'50px'} alt="" />
                </div>
                </div>
              </label>
              :
              <label htmlFor="imgfile" >
              <input id='imgfile' type="file" onChange={(e)=>handleUpload(e)} hidden />
              <img src="https://cdn1.iconfinder.com/data/icons/round-vol-4/512/uploading-512.png" width={'200px'} alt="" />
            </label>
              }
              </div>
            </div>

          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-white">
          Cancel
        </button>
        <button
          onClick={handleAddBooks}
          type="button"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
        </TabItem>
        <TabItem title="Book Status" icon={MdDashboard} >
            <Card href="#" className=" w-full ">
              <div className='flex justify-evenly'> 
                <div>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>

      status 
              </div>
              <div>
     <img src="https://tse1.mm.bing.net/th/id/OIP.ntqPvGciO4KeXC1ve8cImgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" width={'200px'} alt="" />
              </div>
              </div>
              
      
     
    </Card>
        </TabItem>
        <TabItem title="Purchase History" icon={HiAdjustments}>
          <Card href="#" className=" w-full ">
              <div className='flex justify-evenly'> 
                <div>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>

      status 
              </div>
              <div>
     <img src="https://tse1.mm.bing.net/th/id/OIP.ntqPvGciO4KeXC1ve8cImgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" width={'200px'} alt="" />
              </div>
              </div>
              
      
     
    </Card>
        </TabItem>
       
      </Tabs>
    </div>
        {/* <div className="flex flex-row my-5">
  <div className="basis-2xs">
    <Button></Button>
  </div>
  <div className="basis-2xs">
     <Button></Button>
  </div>
  <div className="basis-2xs">
     <Button></Button>
  </div>

</div> */}
      </section>
        </section>
        <BookStoreFooter/>
    </div>
  )
}

export default Profile
