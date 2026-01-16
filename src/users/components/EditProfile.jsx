
import React from 'react'
import { Button, Drawer, DrawerHeader, DrawerItems, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";
function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <div>
    
   <Button onClick={() => setIsOpen(true)}   className='me-35 !bg-amber-950 border-2'><FaUserEdit /></Button>
   
      <Drawer open={isOpen} onClose={handleClose} className='!bg-amber-950'>
        <DrawerHeader title="Update Profile"  />
        <FaUserEdit className='text-amber-950'/>
        <DrawerItems>
          <form action="#">
            <div className='relative'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80" alt=""  className='rounded-full shadow-2xl ms-15 ' width={'160px'}/>
              <Button className='relative -top-10 left-45 !bg-amber-50'><FaUserEdit className='text-amber-950'/></Button >

            </div>
            <div className="mb-6 mt-3">
              <Label className="mb-2 block">
                Your Name
              </Label>
              <TextInput  placeholder="Name" type="text" style={{backgroundColor:'wheat'}}/>
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Password
              </Label>
              <TextInput id="subject" type='password' name="subject" style={{backgroundColor:'wheat'}} />
            </div>
             <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
               Confirm Password
              </Label>
              <TextInput id="subject" type='password' name="subject" style={{backgroundColor:'wheat'}} />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Designation 
              </Label>
              <Textarea id="message" name="message" placeholder="Book Store User" rows={4} style={{backgroundColor:'wheat'}} />
            </div>
            <div className="mb-6 flex justify-evenly">
              <Button type="submit" className='!text-amber-950 !bg-amber-50'>
               Update 
              </Button>
               <Button type="submit" className='!text-amber-950 !bg-amber-50' >
            Reset
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:info@company.com" className="hover:underline">
                fadedInk.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:2124567890" className="hover:underline">
                +91 212-456-7890
              </a>
            </p>
          </form>
        </DrawerItems>
      </Drawer>

      
    </div>
  )
}

export default EditProfile
