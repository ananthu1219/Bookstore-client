
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import AllBooks from './users/pages/AllBooks'
import ViewBooks from './users/pages/ViewBooks'
import Careers from './users/pages/Careers'
import Profile from './users/pages/Profile'
import PageNotFound from './pages/PageNotFound'
import Contact from './users/pages/Contact'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import AdminSettings from './admin/pages/AdminSettings'
import AdminHome from './admin/pages/AdminHome'
import AdminCareers from './admin/pages/AdminCareers'
import AdminBooks from './admin/pages/AdminBooks'
import PaymentSuccess from './users/pages/PaymentSuccess'
import PaymentError from './users/pages/PaymentError'

function App() {

  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },5000)
  },[])


  return (
    <>
      <Routes>
        <Route path='' element={isLoading?<Home />:<Preloader/>} />
        <Route path='login' element={<Auth />} />
        <Route path='register' element={<Auth register/>} />
        <Route path='allBooks' element={<AllBooks />} />
        <Route path='viewBook/:id' element={<ViewBooks />} />
        <Route path='careers' element={<Careers />} />
        <Route path='contact' element={<Contact />} />
        <Route path='profile' element={<Profile />} />
        <Route path='/payment-success' element={<PaymentSuccess />} />
        <Route path='/payment-error' element={<PaymentError />} />
        {/* Admin Routing */}
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/admin-career' element={<AdminCareers />} />
        <Route path='/admin-settings' element={<AdminSettings />} />

      
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
