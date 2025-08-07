import React from 'react'
import products from '../data/Products'
import ProductCard from '../components/ProductCard';
import {Container, Row} from 'react-bootstrap';
function Home() {
  return (
    <Container>
      <h2 className='mt-4'>Products</h2>
      <Row>
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
      </Row>
    </Container>
  )
}

export default Home