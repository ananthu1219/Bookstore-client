import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Button, Card } from "flowbite-react";
function AdminHome() {
  return (
    <div>
      <AdminHeader />
      <section>
        <div class="flex  ...">
          <div class="w-64  ...">
            <AdminSideBar />
          </div>
          <div class="w-2/3 ...">
            <div>
              <div class="flex   justify-evenly p-10">
                <div className="basis-2xs">
                  <Card className=" w-40 h-30 m-5 !bg-amber-950">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy  2021
                    </h5>
                  </Card>
                </div>
                <div className="basis-2xs">
                  <Card className=" w-40 h-30 m-5 !bg-amber-950">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy  2021
                    </h5>
                  </Card>
                </div>
                <div className="basis-2xs">
                  <Card className=" w-40 h-30 m-5 !bg-amber-950">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy  2021
                    </h5>
                  </Card>
                </div>
                <div className="basis-2xs">
                  <Card className=" w-40 h-30 m-5 !bg-amber-950">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy  2021
                    </h5>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminHome
