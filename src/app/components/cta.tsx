import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <section className='py-16 md:px-0 px-5'>
            <div className='container mx-auto px-6 flex md:flex-row flex-col gap-10 items-center justify-between bg-[url("/images/cta.png")] bg-cover bg-no-repeat bg-center md:p-20 py-20 rounded-[40px]'>
                <div className='md:w-1/2 w-full bg-lightGreen p-10 rounded-[30px]'>
                    <h2 className='md:text-5xl text-4xl font-bold text-secondary'>
                        Start Earning More Points Today.
                    </h2>
                    <Link href="#" className='text-lg font-bold text-lightGreen bg-white hover:bg-secondary hover:text-white px-6 py-3 rounded-lg shadow-md block text-center mt-6 max-w-[325px]'>
                    Contact Form/Sign-Up
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Cta