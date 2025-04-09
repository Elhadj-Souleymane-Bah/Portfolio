import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
      <footer className='footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white space-x-8' >
        <div className="container p-2 flex justify-center">
          <Image 
            src="/images/facebook.png" 
            alt="icon-facebook" 
            width={50}
            height={50}
            className="filter violet-filter"
          />
          <Image 
            src="/images/tiktok.png" 
            alt="icon-tiktok"
            width={50}
            height={50}
          />
          <Image 
            src="/images/instagram.png" 
            alt="icon-instagram"
            width={50}
            height={50}
          />
        </div>
        <span className='text-slate-300 flex justify-center '>&copy; Portfolio by ELHADJ SOULEYMANE BAH</span>
      </footer>
    )
  }
  
  export default Footer