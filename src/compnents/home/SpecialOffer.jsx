import React from 'react'
import Container from '../utilities/Container'
import HeadingH2 from '../utilities/HeadingH2'
import ProductCard from './ProductCard'

const SpecialOffer = () => {
  return (
    <section className='my-12 md:my-20 lg:my-28'>
        <Container>
            <HeadingH2 content="Special Offers" />
            <div className="w-full flex flex-wrap gap-[26px] justify-center">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
        </Container>
    </section>
  )
}

export default SpecialOffer