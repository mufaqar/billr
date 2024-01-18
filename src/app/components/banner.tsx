import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <section className='py-16 md:px-0 px-5'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-10 items-center justify-between bg-secondary md:p-20 py-20 rounded-[40px]'>
                <div className='md:w-[55%] w-full'>
                    <h1 className='md:text-5xl text-4xl font-bold text-black'>
                        Maximise Cash Flow and Earn More Frequent  Flyer Points with Every Business Payments
                    </h1>
                    <p className='text-2xl font-medium text-black mt-6 max-w-[569px]'>
                        With Billr, you can ear points on all your business transactions. We provide the tools so business owners can get rewarded for every business expense, even when suppliers don’t accept credit cards!
                    </p>
                    <Link href="#" className='text-lg font-bold text-white bg-primary hover:bg-secondary px-16 py-3 rounded-lg shadow-md block text-center mt-6 max-w-[325px]'>
                        Get Started
                    </Link>
                </div>
                <div className='md:w-[45%] w-full'>
                    <div className='relative'>
                        <div className='bg-lightGreen p-5 rounded-2xl max-w-[158px] absolute md:-left-16 md:bottom-16 left-0 bottom-0'>
                            <Image src="/images/list-before.png" alt="img" width={68} height={69} className='absolute -top-5 -right-5' />
                            <ul className='list-disc list-inside flex flex-col gap-2'>
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
                        <Image src="/images/banner.png" alt="banner" width={454} height={565} className='object-cover w-full' />
                        <Image src="/images/plane.png" alt="img" width={112} height={108} className='absolute md:top-20 md:-right-16 -top-5 -right-1 md:w-auto w-1/5' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner