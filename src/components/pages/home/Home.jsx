import React from 'react'
import Header from '../../partials/Header'
import Banner from './banner/Banner'
import Types from './types/Types'
import Toppings from './toppings/Toppings'
import Benefits from './benefits/Benefits'
import Contact from '../../partials/Contact'
import Footer from '../../partials/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Types/>
      <Toppings/>
      <Benefits/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
