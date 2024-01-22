import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeLeft, fadeRight } from '../const/animation'

const WorkBox = ({ flex_dir, title, content, img }: any) => {
    return (
        <div className={`md:gap-20 gap-8 flex items-center ${flex_dir}`}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeLeft}
                className='w-full'>
                <h3 className='md:text-[32px] md:leading-[64px] text-2xl  font-bold text-lightGreen mb-8'>
                    {title}
                </h3>
                <p className='md:text-xl text-base font-normal text-lightGreen'>
                    {content}
                </p>
            </motion.div>
            {img && <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeRight}
                className='w-full bg-[#F2F2F2] md:p-12 p-10 rounded-[40px] h-[490px]'>
                <Image src={img} alt="img" width={418} height={416} className='mx-auto object-contain w-full h-full' />
            </motion.div>
            }
        </div>
    )
}

export default WorkBox