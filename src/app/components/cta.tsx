import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeLeft } from '../const/animation'
import Image from 'next/image'

const Cta = () => {
    return (
        <section className='py-16 md:px-0 px-5'>
            <div className='container mx-auto px-6 flex md:flex-row flex-col gap-10 items-center justify-between bg-[#EBEBEB] md:px-20 py-5 rounded-[40px]'>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeLeft}
                    className='md:w-[45%] w-full bg-lightGreen md:p-10 p-6 rounded-[30px]'>
                    <h2 className='md:text-5xl text-4xl font-bold text-secondary'>
                        Start Earning More Points Today!
                    </h2>
                    <Link href="https://app.billr.com.au/" target='_blank' className='text-lg font-bold text-lightGreen bg-white hover:bg-secondary hover:text-white px-6 py-3 rounded-lg shadow-md block text-center mt-6 max-w-[279px]'>
                        Join Free
                    </Link>
                </motion.div>
                <div className='md:w-[55%] w-full'>
                    <Image src="/images/earn.png" alt="earn" width={374} height={533} className='md:ml-auto' />
                </div>
            </div>
        </section>
    )
}

export default Cta