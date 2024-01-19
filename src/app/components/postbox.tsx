import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../const/animation'

const PostBox = ({ flex_dir, title, content, img }: any) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className={`p-5 border border-lightGreen rounded-[40px] gap-8 flex ${flex_dir}`}>
            {img &&
                <div className='w-full'>
                    <Image src={img} alt="img" width={376} height={252} className='mx-auto object-contain w-full h-full' />
                </div>
            }
            <div className='w-full'>
                <Link href="#" className='md:text-[32px] md:leading-[35px] text-2xl font-bold text-lightGreen'>
                    {title}
                </Link>
                <p className='md:text-2xl text-lg font-normal text-lightGreen mt-8'>
                    {content}
                </p>
            </div>
        </motion.div>
    )
}

export default PostBox