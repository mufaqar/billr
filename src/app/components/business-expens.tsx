import React from 'react'
import { motion } from 'framer-motion'
import { fadeLeft } from '../const/animation'

const Business_Expense = () => {
    return (
        <section className='bg-[url("/images/business.png")] bg-center bg-cover bg-no-repeat'>
            <div className='bg-gradient-to-r from-lightGreen via-lightGreen/80 to-lightGreen/50'>
                <div className='container mx-auto px-4 min-h-[305px] flex items-center'>
                    <motion.h2
                        variants={fadeLeft}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }}
                        className='md:text-5xl text-4xl font-bold text-white max-w-[700px]'>
                        Are your business expenses WORKING for you?
                    </motion.h2>
                </div>
            </div>
        </section>
    )
}

export default Business_Expense