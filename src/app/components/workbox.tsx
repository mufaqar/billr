import Image from 'next/image'
import React from 'react'

const WorkBox = ({ flex_dir, title, content, img }: any) => {
    return (
        <div className={`md:gap-20 gap-8 flex items-center ${flex_dir}`}>
            <div className='w-full'>
                <h3 className='md:text-5xl text-3xl font-bold text-lightGreen mb-8'>
                    {title}
                </h3>
                <p className='md:text-2xl text-lg font-normal text-lightGreen'>
                    {content}
                </p>
            </div>
            {img && <div className='w-full bg-[#F2F2F2] md:p-12 p-10 rounded-[40px] h-[490px]'>
                <Image src={img} alt="img" width={418} height={416} className='mx-auto object-contain w-full h-full' />
            </div>
            }
        </div>
    )
}

export default WorkBox