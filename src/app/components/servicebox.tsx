import Image from 'next/image'
import React from 'react'

const ServiceBox = ({ flex_dir, title, content, img }: any) => {
    return (
        <div className={`bg-[#BCAEFF]/20 md:p-12 p-10 rounded-[40px] gap-8 flex ${flex_dir}`}>
            <div className='w-full'>
                <h3 className='md:text-5xl text-3xl font-bold text-lightGreen mb-8'>
                    {title}
                </h3>
                <p className='md:text-2xl text-lg font-normal text-lightGreen'>
                    {content}
                </p>
            </div>
            {img &&
                <div className='w-full h-[280px]'>
                    <Image src={img} alt="img" width={437} height={277} className='mx-auto object-contain w-full h-full' />
                </div>
            }
        </div>
    )
}

export default ServiceBox