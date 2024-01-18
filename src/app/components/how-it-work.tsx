import Link from 'next/link'
import React from 'react'
import WorkBox from './workbox'

const HowIt_Works = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-6xl text-4xl font-bold text-primary text-center mb-10'>
                    How it Works
                </h2>
                <div className='flex flex-col gap-10 mb-14'>
                    <WorkBox
                        flex_dir="md:flex-row flex-col"
                        title="Easy Sign-Up & Invoice Upload:"
                        content="Sign up to Billr in seconds and streamline your payment process! Just register and upload your bills. We make the first step towards efficient payment management straightforward and user-friendly."
                        img="/images/invoice.png"
                    />
                    <WorkBox
                        flex_dir="md:flex-row-reverse flex-col"
                        title="Your Card & Earn Rewards:"
                        content="Pay any bill with your credit card and earn valuable frequent flyer points. With Billr, every transaction is a chance to maximise your credit card cashflow benefits, while we ensure your suppliers are paid however they prefer and on time."
                        img="/images/reward.png"
                    />
                    <WorkBox
                        flex_dir="md:flex-row flex-col"
                        title="Broaden Your Payment Options:"
                        content="Beyond just bills, use Billr to pay the ATO, your staff, and even super contributions. Take advantage of the flexibility to use your credit card for various payments, all while accumulating more rewards."
                        img="/images/payment.png"
                    />
                </div>
                <div>
                    <Link href="#" className='text-lg font-bold text-white bg-primary hover:bg-secondary px-16 py-3 rounded-lg shadow-md block text-center mt-6 max-w-[635px] mx-auto'>
                        Join Billr Free
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HowIt_Works