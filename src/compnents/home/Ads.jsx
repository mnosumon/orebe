import React from 'react'
import Container from '../utilities/Container'
import Image from '../utilities/Image'
import AdsImage01 from '../../assets/svg/adsImage01.svg'
import AdsImage02 from '../../assets/svg/adsImage02.svg'
import AdsImage03 from '../../assets/svg/adsImage03.svg'
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <section>
        <Container>
            <div className="flex gap-2 sm:gap-4 md:gap-5 lg:gap-10 max-h[780px]">
                <Link className="max-w-[50%] max-h-full  block">
                    <Image sourc={AdsImage01} alt="Ads Image01"/>
                </Link>
                <div className="max-w-[50%]  max-h-full flex flex-col justify-between lg:gap-y-10 md:gap-y-5 gap-y-2">
                    <Link className="max-w-full max-h-[370px] block">
                        <Image sourc={AdsImage02} alt="Ads Image02"/>
                    </Link>
                    <Link className="max-w-full max-h-[370px] block ">
                        <Image sourc={AdsImage03} alt="Ads Image03"/>
                    </Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Ads