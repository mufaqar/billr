import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../const/animation'
import Model from './model'

const Banner = () => {
    const [open, setOpen] = useState(false)
    return (
        <section className='py-10 md:px-0 px-5'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-10 justify-between bg-secondary md:p-16 py-20 rounded-[40px]'>
                <div className='md:w-1/2 w-full'>
                    <motion.h1
                        variants={fadeUp}
                        initial="offscreen"
                        animate="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        className='md:text-[40px] md:leading-[52px] text-4xl font-bold text-black max-w-[568px]'>
                        Maximise Cash Flow and Earn More Frequent Flyer Points
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        className='text-xl font-medium text-black mt-10 max-w-[569px]'>
                        Experience the smart way to boost cash flow and maximise credit card rewards on every supplier payment with Billr!
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }} >
                        <button
                            onClick={() => setOpen(true)}
                            className='text-lg font-bold text-white bg-primary hover:bg-white hover:text-primary px-16 py-3 rounded-lg shadow-md block text-center md:mt-16 mt-8 max-w-[325px] w-full'>
                            Join Free
                        </button>
                    </motion.div>
                </div>
                <div className='md:w-1/2 w-full'>
                    <motion.div
                        variants={fadeUp}
                        initial="offscreen"
                        animate="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        className='relative'>
                        <Image src="/images/banner1.png" alt="banner1" width={454} height={565} className='object-cover w-full' />
                        <ul className='flex gap-1 md:mt-10 mt-8 items-center justify-end w-fit md:ml-auto'>
                            <li>
                                <Image src="/images/kris.png" alt="kris" width={141} height={52} />
                            </li>
                            <li>
                                <Image src="/images/b-reward.png" alt="b-reward" width={141} height={52} />
                            </li>
                            <li>
                                <Image src="/images/australia.png" alt="australia" width={141} height={52} />
                            </li>
                        </ul>
                        <div className='bg-lightGreen py-6 px-10 rounded-2xl max-w-[250px] static md:mt-0 mt-8 md:absolute md:-left-32 left-0 bottom-12'>
                            <Image src="/images/list-before.png" alt="img" width={68} height={69} className='absolute -top-5 -right-5' />
                            <ul className='list-disc flex flex-col gap-2'>
                                <li className='text-sm font-bold text-white'>
                                    Earn miles
                                </li>
                                <li className='text-sm font-bold text-white'>
                                    Get rewards
                                </li>
                                <li className='text-sm font-bold text-white'>
                                    All your payments in one plataform
                                </li>
                                <li className='text-sm font-bold text-white'>
                                    Save time
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Model setOpen={setOpen} open={open} />
        </section>
    )
}

export default Banner