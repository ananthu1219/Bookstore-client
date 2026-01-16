import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Header from '../components/Header';
function Contact() {
  return (
    <div>
      <Header/>
<div className="min-h-screen bg-white py-12 px-6 md:px-16">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-6">Contacts</h1>
      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        inventore placeat nemo voluptatem iure, iste asperiores quia amet sint,
        similique corrupti praesentium delectus nesciunt odit laudantium.
        Beatae repudiandae amet odit! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Soluta, doloremque ullam itaque atque totam quasi
        molestias cumque ducimus fuga voluptate suscipit vel distinctio omnis
        voluptates obcaecati quidem quas iure? Facere?
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
        {/* Address */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-3 rounded-full text-gray-800 text-lg">
            <FaMapMarkerAlt />
          </div>
          <p className="text-gray-700 leading-tight">
            123 Main Street, Apt 4B,
            <br /> Anytown, CA 91234
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-3 rounded-full text-gray-800 text-lg">
            <FaPhoneAlt />
          </div>
          <p className="text-gray-700">+91 9874561230</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-3 rounded-full text-gray-800 text-lg">
            <FaEnvelope />
          </div>
          <p className="text-gray-700">Bookstore@gmail.com</p>
        </div>
      </div>

      {/* Form and Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-start">
        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-md shadow-sm">
          <h2 className="text-center text-lg font-medium mb-6">
            Send me Message
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded flex items-center justify-center gap-2"
            >
              Send <FaPaperPlane />
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.124406891863!2d76.35782837491227!3d9.978702773003846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8e8e07a3c5%3A0x7dc53b47af27b7b8!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699437927659!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md border border-gray-300"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
