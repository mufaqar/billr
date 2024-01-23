import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../const/animation'

const Banner = () => {

    return (
        <section className='py-10 md:px-0 px-5'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-10 justify-between bg-secondary md:px-8 md:pt-20 md:pb-10 py-20 rounded-[40px]'>
                <div className='md:w-[40%] w-full banner'>
                    <motion.h1
                        variants={fadeUp}
                        initial="offscreen"
                        animate="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        className='md:text-[32px] md:leading-[40px] text-2xl font-bold text-black max-w-[450px]'>
                        <span className='md:text-[40px] text-2xl font-extrabold'>Maximise</span><br /> Cash Flow & Earn More Frequent Flyer Points
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        className='text-base font-medium text-black mt-6 max-w-[420px]'>
                        Experience the smart way to boost cash flow and maximise credit card rewards on every supplier payment with Billr!
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }} >
                        <Link href="#" className='text-lg font-bold text-white bg-primary hover:bg-white hover:text-primary px-16 py-3 rounded-lg shadow-md block text-center md:mt-16 mt-8 max-w-[210px]'>
                            Join Free
                        </Link>
                    </motion.div>
                </div>
                <div className='md:w-[60%] w-full'>
                    <motion.div
                        variants={fadeUp}
                        initial="offscreen"
                        animate="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        className='relative'>
                        <Image src="/images/banner1.png" alt="banner1" width={454} height={565} className='object-cover w-full' />
                        <ul className='flex gap-5 md:mt-10 mt-8 items-center justify-center w-full md:pl-10'>
                            <li>
                                <Image src="/images/australia.png" alt="australia" width={168} height={61} className='' />
                            </li>
                            <li>
                                <Image src="/images/b-reward.png" alt="b-reward" width={168} height={61} className='' />
                            </li>
                        </ul>
                        <div className='bg-lightGreen py-6 px-10 rounded-2xl max-w-[242px] static md:mt-0 mt-8 md:absolute md:-left-32 left-0 bottom-12'>
                            <Image src="/images/list-before.png" alt="img" width={68} height={69} className='absolute -top-5 -right-5' />
                            <ul className='list-disc flex flex-col gap-2'>
                                <li className='text-sm font-bold text-white'>
                                    Pay any business with card
                                </li>
                                <li className='text-sm font-bold text-white'>
                                    Earn points on any business transaction
                                </li>
                                <li className='text-sm font-bold text-white'>
                                    Optimise your business cashflow
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Banner