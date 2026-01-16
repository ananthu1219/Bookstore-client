import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Button, Card } from "flowbite-react";
import { getAdminAPI, updateAdminAPI } from '../../services/allAPIs';
import { serverURL } from '../../services/serverURL';
function AdminSettings() {
  
  const [adminDetails,setAdminDetails]=useState({
    username:'',
    password:'',
    bio:'',
    profile:'' 
  })

  const [token,setToken]=useState('')
  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
  },[])
  useEffect(()=>{
    if(token){
      getAdmin()
    }
  },[token])

  const [preview,setPreview]=useState('')

  const getAdmin=async()=>{
    try {
      const reqHeader={
        Authorization:`Bearer ${token}`
       } 
      // api 
      const result= await getAdminAPI(reqHeader)
      setAdminDetails(result.data)
      console.log(result);

    } catch (error) {
      console.log(error);
      
    }
  }

  const handleUpdate=async()=>{
    console.log(adminDetails);
    const {username,password,bio,profile}=adminDetails
    try {
      const reqHeader={
        Authorization:`Bearer ${token}`
       } 
       const reqBody=new FormData()
       for (let key in adminDetails) {
        reqBody.append(key,adminDetails[key])
      }
      // api 
      const result= await updateAdminAPI(reqBody,reqHeader)
      console.log(result);
 
      if(result.status===200){
        alert(result.data.message)
      }
      else{
        alert(result.response.data)
      }

    } catch (error) {
      console.log(error);
      
    }
  }


  const handleFileUpload=(e)=>{
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    setAdminDetails({...adminDetails,profile:e.target.files[0]})

  }
  console.log(adminDetails);
  
  return (
   <div>
 <div>
<AdminHeader/>
    <section>
          <div class="flex  ...">
  <div class="w-64  ...">
    <AdminSideBar/>
  </div>
  <div class="w-2/3 ...">
   <div>
    <div className="min-h-screen w-full bg-white px-10 py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Text */}
        <div className="text-justify text-gray-700 leading-relaxed font-light">
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            id maxime quia asperiores in cupiditate voluptatum quisquam nemo
            vitae odio, facilis aperiam. Ipsum incidunt labore asperiores!
            Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed neque, facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            id maxime quia asperiores in cupiditate voluptatum quisquam nemo
            vitae odio, facilis aperiam. Ipsum incidunt labore asperiores!
            Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed neque, facilis, consequatur quos eveniet
            inventore ipsam beatae iure fugiat eligendi quae laborum incidunt eum
            quis, est blanditiis exercitationem velit excepturi?
          </p>
        </div>

        {/* Right Side - Profile Card */}
        <div className="bg-blue-100 p-8 rounded-lg shadow-md flex flex-col items-center">
          {/* Image Section */}
          <div className="relative w-28 h-28 mb-6">
            <label htmlFor="uploadImg">
            <input onChange={(e)=>handleFileUpload(e)} type="file" name='uploadImg' id='uploadImg' hidden />
            <img
              src={preview?preview:`${serverURL}/uploads/${adminDetails.profile}`}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border border-gray-300"
            />
            <div id='uploadImg' className="absolute bottom-2 right-2 bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition">
              ✏️
            </div>
            </label>
          </div>

          {/* Input Fields */}
          <div className="w-full flex flex-col gap-4 mb-6">
            <input
              value={adminDetails.username}
              onChange={e=>setAdminDetails({...adminDetails,username:e.target.value})}
              type="text"
              placeholder=""
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              value={adminDetails.password}
              onChange={e=>setAdminDetails({...adminDetails,password:e.target.value})}
              type="password"
              placeholder=""
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              value={adminDetails.bio}
              onChange={e=>setAdminDetails({...adminDetails,bio:e.target.value})}
              type="text"
              placeholder=""
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition">
              Reset
            </button>
            <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
    </section>
    </div>
    </div>
  )
}

export default AdminSettings
