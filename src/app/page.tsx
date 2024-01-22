'use client'
import Banner from './components/banner'
import Business_Expense from './components/business-expens'
import Services from './components/services'
import HowIt_Works from './components/how-it-work'
import BlogSec from './components/blog-sec'
import Faq_Sec from './components/faq-sec'
import Cta from './components/cta'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Banner />
      {/* <Business_Expense /> */}
      <Services />
      <HowIt_Works />
      {/* <BlogSec /> */}
      <Faq_Sec />
      <Cta />
    </div>
  )
}
