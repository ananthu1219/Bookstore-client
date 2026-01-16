
import React from 'react'
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
function AdminHeader() {
  return (
    <div>
 <Navbar fluid className='!bg-amber-950'>
      <NavbarBrand href="/">
        <img src="https://i.pinimg.com/originals/bc/1a/23/bc1a23a1c2d923fe99cf49a673fe17fa.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibol text-amber-50">Faded Ink</span>
      </NavbarBrand>
      <div className="flex md:order-2">
         <Link to={'/login'}>
          <Button className='!bg-amber-50 text-amber-950 mx-3'>LogOut</Button> 
         </Link>
      
        <NavbarToggle />
      </div>
    
         
          </Navbar>
          <marquee behavior="" direction="" className="bg-amber-100">
            Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!
          </marquee>
    </div>
  )
}

export default AdminHeader
