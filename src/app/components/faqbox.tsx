"use client"
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeUp } from '../const/animation'

const FaqBox = ({ item, que, ans }: any) => {
    const [open, setOpen] = useState<any>(null);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(null)
        }
        setOpen(id)
    }
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className='bg-white/60 border border-primary p-5 rounded-[20px]'>
            <h3
                onClick={() => handleFaq(item)}
                className='md:text-3xl text-xl font-bold text-lightGreen flex justify-between items-center gap-8 cursor-pointer'>
                <span>
                    {que}
                </span>
                <FaCaretDown />
            </h3>
            <p className={`md:text-2xl text-lg font-normal text-lightGreen mt-8 ${open === item ? "block" : "hidden"}`}>
                {ans}
            </p>
        </motion.div>
    )
}

export default FaqBox