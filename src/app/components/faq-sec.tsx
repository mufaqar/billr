import React from 'react'
import FaqBox from './faqbox'
import Image from 'next/image'
import { Faqs } from '../const/faqs'

const Faq_Sec = () => {
    return (
        <section className='py-16 bg-secondary/30'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-6xl text-4xl font-bold text-primary text-center mb-10'>
                    Frequently Asked Questions
                </h2>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='flex flex-col gap-8'>
                        {Faqs?.map((faq: any, index: number) => (
                            <FaqBox key={index}
                                item={faq.id}
                                que={faq.que}
                                ans={faq.ans}
                            />
                        ))}
                    </div>
                    <div>
                        <Image src="/images/faq.png" alt='faq' width={610} height={709} />
                    </div>
                </div>
                <ul className='grid md:grid-cols-3 grid-cols-2 gap-8 md:mt-16 mt-10'>
                    <li className='bg-white rounded-[10px]'>
                        <Image src="/images/payment/1.png" alt='img' width={76} height={77} className='mx-auto' />
                    </li>
                    <li className='bg-white rounded-[10px]'>
                        <Image src="/images/payment/2.png" alt='img' width={76} height={77} className='mx-auto' />
                    </li>
                    <li className='bg-white rounded-[10px]'>
                        <Image src="/images/payment/3.png" alt='img' width={76} height={77} className='mx-auto' />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Faq_Sec