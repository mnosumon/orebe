import React from 'react'
import Container from '../utilities/Container'
import ProductCard from './ProductCard'
import HeadingH2 from '../utilities/HeadingH2'

const BestSeller = () => {
  return (
    <section>
        <Container>
            <HeadingH2 content="New Arrivals" />
            <div className="flex sm:gap-5 gap-10 flex-wrap justify-center">
                <ProductCard />
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Container>
    </section>
  )
}

export default BestSeller