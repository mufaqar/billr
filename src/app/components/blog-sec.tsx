import Link from 'next/link'
import React from 'react'
import PostBox from './postbox'
import { motion } from 'framer-motion'
import { fadeUp } from '../const/animation'

const BlogSec = () => {
  return (
    <section className='py-16' id='why-billr'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className='md:text-[40px] md:leading-[52px] text-4xl font-bold text-primary text-center mb-10'>
          Why choose Billr?
        </motion.h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 '>
          <PostBox
            flex_dir="flex-col"
            title="Earn Frequent Flyer Points"
            content="Every payment through Billr boosts your frequent flyer points, turning your regular business expenses into valuable travel rewards."
            img="/images/post/1.png"
          />
          <PostBox
            flex_dir="flex-col"
            title="Improve Cashflow"
            content="Enhance your business's cash flow by leveraging the credit period of your card. Pay bills now and worry about the cash later, keeping your finances fluid."
            img="/images/post/2.png"
          />
          <PostBox
            flex_dir="flex-col"
            title="Pay Any Supplier"
            content="With Billr, you're not restricted by your suppliers' payment preferences. Whether they accept cards or not, you can pay anyone, ensuring seamless business transactions."
            img="/images/post/3.png"
          />
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}>
          <Link href="#" className='text-lg font-bold text-white bg-primary hover:bg-secondary px-16 py-3 rounded-lg shadow-md block text-center mt-6 max-w-[635px] mx-auto'>
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSec