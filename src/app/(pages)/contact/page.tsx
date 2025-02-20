import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='w-full'>
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact us</h2>
        <p className="mt-4 text-gray-600">
          Write to us if you have any difficulties in working with the service.
          We are open to communication and want to know more about those who trust us.
        </p>

        <div className="flex items-center mt-6">
          <Image
            src="/image/Funday 3.png"
            alt="Questions"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Questions?</h4>
            <p className="text-gray-600">Give us a call right now <strong>09090009999</strong></p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in touch!</h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your message *"
              className="w-full px-4 py-3 border text-black rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <button className="w-full bg-[#FFC602] text-white font-semibold py-3 rounded-md hover:bg-yellow-500 transition">
            Submit form
          </button>
        </form>
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default page