import React from 'react'
import { useEffect ,useState} from 'react';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from 'react-router-dom';

function Header() {
  const [token,setToken]=useState('')
  const [userData,setUserData]=useState({})

useEffect(()=>{
  setToken(sessionStorage.getItem("token"))
  setUserData(JSON.parse(sessionStorage.getItem("userDetails")))
},[])
  return (
    <div>
       <Navbar fluid className='!bg-amber-950'>
      <NavbarBrand href="/">
        <img src="https://i.pinimg.com/originals/bc/1a/23/bc1a23a1c2d923fe99cf49a673fe17fa.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibol text-amber-50">Faded Ink</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {
          token?
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <>
            {
            token?
            <img src={userData.profile} width={'50px'} className='rounded-full' alt="profile" referrerPolicy='no-referrer'/>
            :
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
            </>
          }
        >
        

          <DropdownHeader>
            <span className="block text-sm">{userData.username}</span>
            <span className="block truncate text-sm font-medium">{userData.email}</span>
          </DropdownHeader>
          <Link to={'/profile'}>
         <DropdownItem>Dashboard</DropdownItem> 
          </Link>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        :
        <Link to={'/login'}>
        <Button className='!bg-amber-50 text-amber-950 mx-3'>Login</Button> 
       </Link>
        }

        <NavbarToggle />
      </div>
    
             <NavbarCollapse >
              <Link to={"/"} className='text-amber-50'>
        Home
        </Link>
        <Link to={"/allBooks"} className='text-amber-50'>
        Books
        </Link>
        <Link to={"/careers"} className='text-amber-50'>
      Careers
        </Link>
        <Link to={"/contact"} className='text-amber-50'>
        Contact
        </Link>
        {/* <NavbarLink href="/contact">Contact</NavbarLink> */}
    
      </NavbarCollapse>
          </Navbar>
  
    </div>
  )
}

export default Header
