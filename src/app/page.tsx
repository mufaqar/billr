import Image from 'next/image'
import SeoMeta from './components/seo'
import Banner from './components/banner'
import Business_Expense from './components/business-expens'
import Services from './components/services'
import HowIt_Works from './components/how-it-work'
import BlogSec from './components/blog-sec'

export default function Home() {
  return (
    <>
      <SeoMeta title="page title" url="/" description=" " />
      <Banner />
      <Business_Expense />
      <Services />
      <HowIt_Works />
      <BlogSec />
    </>
  )
}
