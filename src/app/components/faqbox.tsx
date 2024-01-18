"use client"
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const FaqBox = ({ item, que, ans }: any) => {
    const [open, setOpen] = useState<any>(1);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(null)
        }
        setOpen(id)
    }
    return (
        <div className='bg-white border border-primary p-5 rounded-[20px]'>
            <h3
                onClick={() => handleFaq(item)}
                className='md:text-4xl text-2xl font-bold text-lightGreen flex justify-between items-center gap-8 cursor-pointer'>
                <span>
                    {que}
                </span>
                <FaCaretDown />
            </h3>
            <p className={`md:text-2xl text-lg font-normal text-lightGreen mt-8 ${open === item ? "block" : "hidden"}`}>
                {ans}
            </p>
        </div>
    )
}

export default FaqBox