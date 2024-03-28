import React from 'react'
import Container from '../utilities/Container'
import Image from '../utilities/Image'
import BigAd from '../../assets/svg/bigAds.svg'

const BigAds = () => {
  return (
    <section>
        <Container>
            <div className="w-full max-h-[370px]"></div>
            <Image sourc={BigAd} />
        </Container>
    </section>
  )
}

export default BigAds