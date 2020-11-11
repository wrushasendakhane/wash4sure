import React, { Fragment, useState } from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { aboutObj, whyObj } from '../components/InfoSection/data';
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing';
import Sidebar from '../components/Sidebar';
import Contact from '../components/Contact';
import { Route, Switch } from 'react-router-dom';
import PrivacyPolicy from '../components/PrivacyPolicy';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...whyObj} />
      <InfoSection {...aboutObj} />
      <Pricing />
      <Contact />
      <PrivacyPolicy />
      <Footer />
    </Fragment>
  )
}

export default Home
