import React from 'react'
import FaqBox from './faqbox'
import Image from 'next/image'
import { Faqs } from '../const/faqs'
import { motion } from 'framer-motion'
import { fadeUp } from '../const/animation'

const Faq_Sec = () => {
    return (
        <section className='py-16 bg-secondary/30 bg-blend-overlay ' id='faq'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeUp}
                    className='md:text-[40px] md:leading-[52px] text-4xl font-bold text-primary text-center mb-10'>
                    Frequently Asked Questions
                </motion.h2>
                <div className='flex md:flex-row flex-col gap-8 bg-[url("/images/faq.png")] bg-no-repeat bg-contain bg-[80%_50%]'>
                    <div className='md:w-[60%] flex flex-col gap-8'>
                        {Faqs?.map((faq: any, index: number) => (
                            <FaqBox key={index}
                                item={faq.id}
                                que={faq.que}
                                ans={faq.ans}
                            />
                        ))}
                    </div>
                    {/* <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}>
                        <Image src="/images/faq.png" alt='faq' width={610} height={709} />
                    </motion.div> */}
                </div>
                <ul className='flex md:flex-row flex-col gap-8 items-center justify-center md:mt-16 mt-10'>
                    <motion.li
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeUp}
                        className='bg-white rounded-[10px] px-11 py-3'>
                        <Image src="/images/payment/1.png" alt='img' width={76} height={77} className='mx-auto' />
                    </motion.li>
                    <motion.li
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeUp}
                        className='bg-white rounded-[10px] px-11 py-3'>
                        <Image src="/images/payment/2.png" alt='img' width={76} height={77} className='mx-auto' />
                    </motion.li>
                    <motion.li
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        variants={fadeUp}
                        className='bg-white rounded-[10px] px-11 py-3'>
                        <Image src="/images/payment/3.png" alt='img' width={76} height={77} className='mx-auto' />
                    </motion.li>
                </ul>
            </div>
        </section>
    )
}

export default Faq_Sec