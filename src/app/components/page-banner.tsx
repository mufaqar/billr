import React from 'react'

const PageBanner = ({title} : any) => {
  return (
    <section className='pt-16'>
        <div className='container mx-auto px-4'>
            <h1 className='md:text-[40px] md:leading-[52px] text-4xl font-bold text-primary text-center'>
                {title}
            </h1>
        </div>
    </section>
  )
}

export default PageBanner