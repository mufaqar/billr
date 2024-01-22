import Link from 'next/link'
import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

const Model = ({ setOpen, open }: any) => {
    return (
        <div>
            <div className={`fixed left-0 top-0 bg-black/40 h-full w-full overflow-y-auto overflow-x-hidden ${open === true ? "block" : "hidden"}`}>
                <div className={`py-10 px-4 w-full max-w-md bg-white rounded-lg shadow absolute left-1/2 -translate-x-1/2 transform transition-all duration-300 ease-in-out  ${open === true ? "top-1/3 " : "top-[-100%]"}`}>
                    <IoMdCloseCircleOutline
                        onClick={() => setOpen(false)}
                        className='absolute top-3 right-3 text-3xl text-primary cursor-pointer' />
                    <h2 className='md:text-[40px] md:leading-[52px] text-4xl font-bold text-black text-center'>
                        Contact us
                    </h2>
                    <Link href="mailto:hello@billr.com.au"
                        className='text-lg font-bold text-primary hover:text-secondary underline block text-center mt-6 max-w-[306px] mx-auto'>
                        hello@billr.com.au
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Model