import React from 'react'
import Banner from '../../compnents/home/Banner'
import Information from '../../compnents/home/Information'
import Ads from '../../compnents/home/Ads'
import NewArivals from '../../compnents/home/NewArivals'
import BestSeller from '../../compnents/home/BestSeller'
import BigAds from '../../compnents/home/BigAds'
import SpecialOffer from '../../compnents/home/SpecialOffer'

const Home = () => {
  return (
    <section>
      <Banner/>
      <Information/>
      <Ads/>
      <NewArivals/>
      <BestSeller/>
      <BigAds/>
      <SpecialOffer/>
    </section>
  )
}

export default Home