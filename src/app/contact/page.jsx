import React from 'react'
import { AboutUs, ContactUs } from '../components/pages/contact/ContactUs'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ContactSection from '../components/pages/contact/ContactSection'
import Mapsection from '../components/pages/contact/Mapsection'

const page = () => {
  return (
    <>
    <Header />
    <ContactUs />
    <ContactSection />
    <Mapsection />
    <Footer />
    </>
  )
}

export default page
