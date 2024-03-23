import React from 'react'
import Container from '../utilities/Container'
import HeadingH2 from '../utilities/HeadingH2'
import ProductCard from './ProductCard'

const NewArivals = () => {
  return (
    <section>
        <Container>
            <HeadingH2 content="New Arrivals" />
            <div className="flex gap-10">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
        </Container>
    </section>
  )
}

export default NewArivals