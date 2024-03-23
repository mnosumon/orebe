import React from 'react'
import Banner from '../../compnents/home/Banner'
import Information from '../../compnents/home/Information'
import Ads from '../../compnents/home/Ads'
import NewArivals from '../../compnents/home/NewArivals'

const Home = () => {
  return (
    <section>
      <Banner/>
      <Information/>
      <Ads/>
      <NewArivals/>
    </section>
  )
}

export default Home