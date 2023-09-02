import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col text-center bg-black text-white pt-16 pb-12 px-6 gap-y-4">
    <div>
        <h5 className='font-semibold text-lg mb-4'>Resources</h5>
        <ul className='flex flex-col gap-y-2'>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Site Map</a>
          </li>
        </ul>
    </div>
    <div>
        <h5 className='font-semibold text-lg mb-4'>Legal</h5>
        <ul  className='flex flex-col gap-y-2'>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms of Use</a></li>
        </ul>
    </div>
    <div>
        <h5 className='font-semibold text-lg mb-4'>Company</h5>
        <ul  className='flex flex-col gap-y-2'>
          <li><a href="">About Us</a></li>
          <li><a href=""></a>Contact us</li>
          <li><a href=""></a>History</li>
        </ul>
    </div>
    <p className="border-t border-lightGrey">© 2023 ENFAVEDU. All rights reserved.</p>
  </div>
  )
}

export default Footer
