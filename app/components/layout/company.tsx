'use client';
import Image from 'next/image';

export default function Company() {
  return (
      <div className="flex justify-center px-10 pt-20 pb-10">
    <div
      className="hero relative w-full max-w-screen h-[70vh] rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url(/office.webp)",
      }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content text-center p-4 md:p-8 lg:p-12">
        <div className="max-w-md mx-auto">
          <img src="/logo.png" alt="KMC LOGO" className='mx-auto mb-6 rounded-2xl' />
          <p className="mb-5 text-white text">
              Philippines' leading provider of flexible workspace solutions, offering premium serviced offices, 
              coworking spaces, and staff leasing services tailored to businesses of all sizes. 
              We empower companies to scale efficiently in the Philippines without the traditional overhead costs.
          </p>
          <div className="flex items-center justify-center mt-4">
            <svg
              className="h-6 w-6 fill-current text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-white"> Picadilly Star 4th Avenue corner 
            27th Street, BGC, PH</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}