import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/Products'
import { Button, Container } from 'react-bootstrap'
import {useCart} from '../context/CartContext'

function ProductDetails() {
  const {id} = useParams();
  const product = products.find((p)=>p.id === parseInt(id));
  const {dispatch} = useCart();
  return (
    <Container className='mt-4'>
    <h2>{product.name}</h2>
    <img src={product.image} alt={product.name}/>
    <p>{product.description}</p>
    <p>₹{product.price}</p>
    <Button onClick={()=>dispatch({type: 'ADD_TO_CART', product})}>Add to Cart</Button>
    </Container>
  )
}

export default ProductDetails