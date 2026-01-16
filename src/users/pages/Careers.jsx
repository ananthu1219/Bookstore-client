import React, { useState } from 'react'
import { FaMapMarkerAlt, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Header from '../components/Header';

function Careers() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Header/>
<div className="min-h-screen bg-white py-12 px-6 md:px-16">
      {/* Page Heading */}
      <h1 className="text-3xl font-semibold text-center mb-6">Careers</h1>
      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore placeat nemo
        voluptatem iure, iste asperiores quia amet sint, similique corrupti praesentium delectus
        nesciunt odit laudantium. Beatae repudiandae amet odit! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Soluta, doloremque ullam itaque atque totam quasi molestias
        cumque ducimus fuga voluptate suscipit vel distinctio omnis voluptates obcaecati quidem quas
        iure? Facere?
      </p>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-2xl font-medium mb-4 md:mb-0">Current openings</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Job Title"
            className="border border-gray-300 px-4 py-2 w-64 rounded-l-md focus:outline-none"
          />
          <button className="bg-green-900 text-white px-5 py-2 rounded-r-md hover:bg-green-800">
            Search
          </button>
        </div>
      </div>
 {/* Job Card */}
      <div className="border rounded-md shadow-sm p-6 mb-10">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">HR Assistant</h3>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center gap-1"
          >
            Apply <FaExternalLinkAlt size={14} />
          </button>
        </div>
        <hr className="my-2 border-black" />
        <div className="space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Kochi
          </p>
          <p>Job Type: Full-time</p>
          <p>Salary: ₹20000–30000/month</p>
          <p>Qualification: </p>
          <p>Experience: 1–2 years</p>
          <p>Description: </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-md shadow-lg w-[90%] md:w-[50%] relative">
            {/* Header */}
            <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center rounded-t-md">
              <h2 className="text-xl font-semibold">Application form</h2>
              <button onClick={() => setShowModal(false)}>
                <FaTimes size={22} />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border p-2 rounded focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Qualification"
                    className="border p-2 rounded focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="border p-2 rounded focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="border p-2 rounded focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <textarea
                  placeholder="Cover Letter"
                  rows="3"
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-gray-400"
                ></textarea>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Resume</label>
                  <input type="file" className="border p-2 w-full rounded" />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="reset"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Careers
