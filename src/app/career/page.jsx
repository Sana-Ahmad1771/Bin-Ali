import React from 'react'
import { Careers } from '../components/pages/careers/Careers'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import CareersSection from '../components/pages/careers/CareersSection'

const page = () => {
  return (
    <>

      <Header />
      <Careers />
      <CareersSection />
      <Footer />
    </>
  )
}

export default page
