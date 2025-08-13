import React from 'react'
import { useCart } from '../context/CartContext'
import { Button, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Cart() {
  const {cart, dispatch} = useCart();
  const total = cart.reduce((acc, item)=>acc + item.price, 0)
  return (
    <Container className='mt-4'>
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>No items in cart</p>
    ):(
      <>
        <ul>
          {cart.map((item, index)=>(
            <li key={index}>
              {item.name} - ₹{item.price}
              <Button variant='danger' size='sm' onClick={()=>dispatch({type: 'REMOVE_FROM_CART', id: item.id})}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
        <h4>Total:₹{total} </h4>
        <Link to="/checkout">
          <Button variant='success'>Go to Checkout</Button>
        </Link>
      </>
    )}
    </Container>
  )
}

export default Cart