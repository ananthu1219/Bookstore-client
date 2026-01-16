import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Card } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Label, TextInput } from "flowbite-react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

function AdminCareers() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div>
        <AdminHeader />
        <section>
          <div class="flex  ...">
            <div class="w-64  ...">
              <AdminSideBar />
            </div>
            <div class="w-2/3 ...">
              <div>
                <div>
                  <h1 className='text-center text-2xl my-5'> Careers</h1>
                  <div class="flex flex-row justify-between my-10">
                    <div class="">
                      <div className="flex ms-10 ">
                        <TextInput id="small" type="text" sizing="md" placeholder='Seach Job' /> <Button className='!bg-amber-950'>Search</Button>

                      </div>
                    </div>
                    <div class="">
                      <Button className='!bg-amber-950' onClick={() => setOpenModal(true)}>Add</Button>
                      <Modal show={openModal} onClose={() => setOpenModal(false)}>
                        <ModalHeader>Application form</ModalHeader>
                        <ModalBody>
                          <div className="space-y-6">
                            <div className="flex max-w-xl flex-col gap-4">
                              <div>

                                <TextInput id="small" type="text" sizing="md" placeholder='Job Title' />
                              </div>
                              <div>

                                <TextInput id="base" type="text" sizing="md" placeholder='Location' />
                              </div>
                              <div>

                                <TextInput id="large" type="text" sizing="md" placeholder='Job Type' />
                              </div>
                              <div>

                                <TextInput id="large" type="text" sizing="md" placeholder='Salary' />
                              </div>
                              <div>

                                <TextInput id="large" type="text" sizing="md" placeholder='Qualification' />
                              </div>
                              <div>

                                <TextInput id="large" type="text" sizing="md" placeholder='Experience' />
                              </div>
                              <div>

                                <TextInput id="large" type="text" sizing="lg" placeholder='Description' />
                              </div>
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button className='!bg-amber-950'>ADD</Button>
                          <Button color="alternative" onClick={() => setOpenModal(false)}>
                            Reset
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </div>
                  <div className="ps-10">
                    <Tabs aria-label="Full width tabs" variant="fullWidth">
                      <TabItem active title="Job Post" icon={HiUserCircle}>


                      <div className="flex flex-wrap justify-start gap-6 p-5">
  <Card className="w-[830px] !bg-amber-200 bg-amber-50 rounded-2xl shadow-md p-5">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">HR Assistant</h3>
        <h4 className="text-sm text-gray-600"><b>Location:</b> Kochi</h4>
        <h4 className="text-sm text-gray-600"><b>Type:</b> Full-time</h4>
        <h4 className="text-sm text-gray-600"><b>Salary:</b> 20,000-30,000/month</h4>
        <h4 className="text-sm text-gray-600"><b>Qualification:</b> MBA</h4>
        <h4 className="text-sm text-gray-600"><b>Experience:</b> 1-2 years</h4>
        <h4 className="text-sm text-gray-700 mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </h4>
      </div>
      <Button color="failure" className="!bg-red-600 !text-white">Delete</Button>
    </div>
  </Card>
</div>


                      </TabItem>
                      <TabItem title="View Applicant" icon={MdDashboard}>
                        <div class="flex flex-wrap ">
                          <div class="basis-2xs">
                            <Card
                              className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                              <div className='basis-4xs'>
                                <p>ID : 675987090789</p>
                                <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                              </div>
                              <div className='basis-4xs'>
                                <h5 className=" font-bold tracking-tight text-gray-900">
                                  Manu
                                </h5>
                                <h6>manu@gmail.com</h6>
                              </div>

                            </Card>

                          </div>
                          <div class="basis-2xs">
                            <Card
                              className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                              <div className='basis-4xs'>
                                <p>ID : 675987090789</p>
                                <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                              </div>
                              <div className='basis-4xs'>
                                <h5 className=" font-bold tracking-tight text-gray-900">
                                  Manu
                                </h5>
                                <h6>manu@gmail.com</h6>
                              </div>

                            </Card>

                          </div>
                          <div class="basis-2xs">
                            <Card
                              className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                              <div className='basis-4xs'>
                                <p>ID : 675987090789</p>
                                <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                              </div>
                              <div className='basis-4xs'>
                                <h5 className=" font-bold tracking-tight text-gray-900">
                                  Manu
                                </h5>
                                <h6>manu@gmail.com</h6>
                              </div>

                            </Card>

                          </div>
                          <div class="basis-2xs">
                            <Card
                              className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                              <div className='basis-4xs'>
                                <p>ID : 675987090789</p>
                                <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                              </div>
                              <div className='basis-4xs'>
                                <h5 className=" font-bold tracking-tight text-gray-900">
                                  Manu
                                </h5>
                                <h6>manu@gmail.com</h6>
                              </div>

                            </Card>

                          </div>
                        </div>
                      </TabItem>
                    </Tabs>
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

export default AdminCareers
