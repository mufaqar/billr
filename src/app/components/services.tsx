import React from 'react'
import ServiceBox from './servicebox'
import Link from 'next/link'

const Services = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-6xl text-4xl font-bold text-primary text-center mb-10'>
                    What our platform does for you
                </h2>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-7 mb-14'>
                    <ServiceBox
                        flex_dir="flex-col"
                        title="Customer Journey"
                        content="Our payments platform will help you boost cash flow and earn rewards on every single business payment in Australia and beyond with our seamless online platform."
                        img="/images/journey.png"
                    />
                    <ServiceBox
                        flex_dir="flex-col"
                        title="Booster your points"
                        content="With Billr, you can earn points on transactions where you normally won’t earn any. We enable businesses to pay the ATO, payroll, and superannuation using your credit or charge card. This will boost your cash flow and allow you to earn uncapped points. "
                        img="/images/points.png"
                    />
                    <ServiceBox
                        flex_dir="md:flex-row flex-col md:col-span-2"
                        title="Pay any Business"
                        content="Billr streamlines your payment flow and enables you to pay suppliers who normally don’y accept credit card payments, using your card! Thanks to our technology, your payment will be handled by Billr who then disperses payments to your suppliers on your behalf. This way, you get the benefits of cash flow and points!"
                        img="/images/boost.png"
                    />
                    <ServiceBox
                        flex_dir="flex-col"
                        title="Stack your points"
                        content="Coming soon: Billr Rewards is our loyalty program which lets you earn flexible rewards on every dollar transacted through our platform. This means you will double dip in rewards from both Billr and your credit card loyalty program. Your Billr Rewards can be converted to some of the biggest airline loyalty programs such as Qantas Frequent Flyer, Velocity, KrisFlyer and Avios. "
                        img=""
                    />
                    <ServiceBox
                        flex_dir="flex-col"
                        title="Security"
                        content="Billr Accepts all Australian credit cards including American Express. This way you can maximise the potential of your card and earn points on all your transactions with no limitations. Safety and security is our number one priority, at Billr we use the latest technology to ensure your payment details are secure. We  work closely with our financial facilitator partners to ensure you’re protected each step of the way. "
                        img=""
                    />
                </div>
                <div>
                    <Link href="#" className='text-lg font-bold text-white bg-primary hover:bg-secondary px-16 py-3 rounded-lg shadow-md block text-center mt-6 max-w-[635px] mx-auto'>
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Services