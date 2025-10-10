import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import OurPartners from '../components/pages/partners/OurPartners'
import Partnership from '../components/pages/partners/Partnership'
import { PartnersHero } from '../components/pages/partners/PartnersHero'

const page = () => {
  return (
    <>
      <Header />
      <PartnersHero />
      <OurPartners />
      <Partnership />
      <Footer />
    </>
  )
}

export default page
