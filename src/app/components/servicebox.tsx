import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../const/animation'

const ServiceBox = ({ flex_dir, title, content, img }: any) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={`bg-[#BCAEFF]/20 md:p-12 p-10 rounded-[40px] gap-8 flex ${flex_dir}`}>
            <div className='w-full'>
                <h3 className='md:text-[32px] md:leading-[64px] text-2xl font-bold text-lightGreen mb-8'>
                    {title}
                </h3>
                <p className='md:text-xl text-base font-normal text-lightGreen'>
                    {content}
                </p>
            </div>
            {img &&
                <div className='w-full h-[280px]'>
                    <Image src={img} alt="img" width={437} height={277} className='mx-auto object-contain w-full h-full' />
                </div>
            }
        </motion.div>
    )
}

export default ServiceBox