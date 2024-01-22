"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Model from './model';

const Footer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Model setOpen={setOpen} open={open} /><footer className='bg-lightGreen'>
        <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 justify-between pt-16 pb-10'>
          <div className='md:w-1/4 w-full'>
            <h6 className='text-xl font-bold text-white mb-6'>
              Contact Information
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <span onClick={() => setOpen(true)} className='text-xl font-medium text-white hover:text-primary cursor-pointer'>
                  Contact Us
                </span>
              </li>
            </ul>
          </div>
          <div className='md:w-1/2 w-full'>
            <h6 className='text-xl font-bold text-white mb-6'>
              Legal
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href="#" className='text-xl font-medium text-white hover:text-primary'>
                  Privacy Police
                </Link>
              </li>
              <li>
                <Link href="#" className='text-xl font-medium text-white hover:text-primary'>
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
          <div className='md:w-1/4 w-full'>
            <h6 className='text-xl font-bold text-white mb-6'>
              Stay conected
            </h6>
            <ul className='flex flex-row gap-3'>
              <li>
                <Link href="https://www.linkedin.com/company/billrau/" target='_blank' className='text-3xl font-medium text-secondary hover:text-primary'>
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 justify-between pt-10 pb-8 items-center'>
          <div className='md:w-1/4 w-full'>
            <Link href="/" className='inline-block'>
              <Image src="/images/footer-logo.png" alt='footer-logo' width={136} height={59} />
            </Link>
          </div>
          <div className='md:w-1/4 w-full'>
            <p className='text-sm font-normal text-white max-w-[236px]'>
              © 2023 Billr Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer