import React from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div>
      <div className='bg-amber-950 h-screen'>
        <img src="https://cdn-icons-png.flaticon.com/512/7068/7068006.png" style={{ height: '200px' }} className='ms-6 pt-5' alt="" />
        <h1 className='text-center text-yellow-50 text-2xl my-5'>Admin</h1>
        <div className=' ms-10  text-amber-50 font-bold'>
          <div className='my-3'>
            <Link to={'/admin-home'}>
              <input type="radio" name="admin" id="" />
              <label htmlFor="">Home</label>
            </Link>

          </div>
          <div className='my-3'>
            <Link to={'/admin-books'}>
              <input type="radio" name="admin" id="" />
              <label htmlFor="">All Books</label>
            </Link>
          </div>
          <div className='my-3'>
            <Link to={'/admin-career'}>
              <input type="radio" name="admin" id="" />
              <label htmlFor="">Careers</label>
            </Link>
          </div>
          <div className='my-3'>
            <Link to={'/admin-settings'}>
              <input type="radio" name="admin" id="" />
              <label htmlFor="">Settings</label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar
