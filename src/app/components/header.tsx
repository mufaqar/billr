"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks } from '../const/navlinks'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='bg-white py-5 shadow-3xl'>
            <div className='container mx-auto px-4 flex md:flex-row flex-row items-center justify-between '>
                <div className='md:w-1/4 w-1/2'> 
                    <Link href="/" className='inline-block'>
                        <Image src="/images/logo.png" alt='logo' width={180} height={67} />
                    </Link>
                </div>
                <nav className='md:w-3/4 w-1/2 flex justify-end'>
                    <button className='md:hidden block text-3xl' onClick={() => setOpen(!open)}>
                        {!open === true ? (<FaBars />) : (<IoMdClose />)}
                    </button>
                    <ul className={`md:flex-row flex-col md:gap-16 gap-5 md:justify-between md:items-center md:bg-white md:static md:px-0 md:py-0 ${open === true ? "flex absolute bg-white top-20 left-0 right-0 px-5 py-10" : "md:flex hidden "}`}>
                        {NavLinks?.map((item: any, idx: any) => {
                            return <li key={idx}>
                                <Link href={item?.link} className='text-base font-normal text-black hover:text-primary'>
                                    {item?.name}
                                </Link>
                            </li>
                        })}
                        <li>
                            <Link href="https://app.billr.com.au/" className='text-lg font-bold text-black hover:text-primary'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="https://app.billr.com.au/" className='text-lg font-bold text-white bg-primary hover:bg-secondary px-14 py-3 rounded-lg shadow-md block'>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header