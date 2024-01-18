import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostBox = ({ flex_dir, title, content, img }: any) => {
    return (
        <div className={`p-5 border border-lightGreen rounded-[40px] gap-8 flex ${flex_dir}`}>
            {img &&
                <div className='w-full'>
                    <Image src={img} alt="img" width={376} height={252} className='mx-auto object-contain w-full h-full' />
                </div>
            }
            <div className='w-full'>
                <Link href="#" className='md:text-[32px] md:leading-[35px] text-2xl font-bold text-lightGreen'>
                    {title}
                </Link>
                <p className='md:text-2xl text-lg font-normal text-lightGreen mt-8'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default PostBox