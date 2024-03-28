import React from 'react'
import Banner from '../../compnents/home/Banner'
import Information from '../../compnents/home/Information'
import Ads from '../../compnents/home/Ads'
import NewArivals from '../../compnents/home/NewArivals'
import BestSeller from '../../compnents/home/BestSeller'
import BigAds from '../../compnents/home/BigAds'

const Home = () => {
  return (
    <section>
      <Banner/>
      <Information/>
      <Ads/>
      <NewArivals/>
      <BestSeller/>
      <BigAds/>
    </section>
  )
}

export default Home