import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Card } from "flowbite-react"
import { TabItem, Tabs } from "flowbite-react"
import { HiUserCircle } from "react-icons/hi"
import { MdDashboard } from "react-icons/md"
import { getAllBooksAPI, getUsersAPI } from '../../services/allAPIs'

function AdminBooks() {

  const [token, setToken] = useState('')
  const [userData, setUserData] = useState([])
  const [bookData, setBookData] = useState([])

  const getUsers = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    try {
      const response = await getUsersAPI(reqHeader)
      setUserData(response.data)
    } catch (error) {
      console.log("User error:", error)
    }
  }

  const getBooks = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    try {
      const response = await getAllBooksAPI(reqHeader)
      setBookData(response.data)
    } catch (error) {
      console.log("Book error:", error)
    }
  }

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token")
    setToken(storedToken)
  }, [])

  useEffect(() => {
    if (token) {
      getUsers()
      getBooks()
    }
  }, [token])

  return (
    <div>
      <AdminHeader />

      <section className="flex">
        <div className="w-64">
          <AdminSideBar />
        </div>

        <div className="w-2/3">
          <h1 className="text-center text-2xl my-5">All Books</h1>

          <div className="ps-10">
            <Tabs aria-label="Full width tabs" variant="fullWidth">

              {/* BOOK LIST */}
              <TabItem active title="BookList" icon={HiUserCircle}>
                <div className="flex flex-wrap">

                  {bookData.length > 0 &&
                    bookData.map(item => (
                      <div key={item._id} className="basis-2xs">
                        <Card className="w-50 m-5 !bg-amber-50">
                          <img src={item.imageUrl} width="150" alt={item.title} />
                          <h5 className="font-bold text-gray-900">
                            {item.title}
                            <br />
                            <del className="text-red-600">{item.price}</del>
                            <br />
                            MRP:
                            <p className="text-green-500 text-2xl">
                              {item.discount_price}
                            </p>
                          </h5>
                        </Card>
                      </div>
                    ))
                  }

                </div>
              </TabItem>

              {/* USERS LIST */}
              <TabItem title="Users" icon={MdDashboard}>
                <div className="flex flex-wrap">

                  {userData.length > 0 &&
                    userData.map(item => (
                      <div key={item._id} className="basis-2xs">
                        <Card className="flex justify-evenly w-70 m-5 !bg-amber-50">

                          <div>
                            <p>ID: {item._id}</p>

                            <img
                              src={
                                item.profile ||
                                "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png"
                              }
                              className="rounded-full my-2"
                              width="50"
                              alt="profile"
                            />
                          </div>

                          <div>
                            <h5 className="font-bold text-gray-900">
                              {item.username}
                            </h5>
                            <h6>{item.email}</h6>
                          </div>

                        </Card>
                      </div>
                    ))
                  }

                </div>
              </TabItem>

            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminBooks
