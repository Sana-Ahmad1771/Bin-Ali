import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import OurProductsSection from '../components/pages/products/OurProductsSection'
import { Products } from '../components/pages/products/Products'
import NewsletterSection from '../components/pages/home/NewsletterSection'

// Enable React 18 streaming
export const dynamic = 'force-static'

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <Products />
        <OurProductsSection />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}

export default Page