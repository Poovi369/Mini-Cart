import React from 'react'
import {Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductCard({product}) {
  return (
    <Col md={4} className="mb-4">
    <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>₹{product.price}</Card.Text>
            <Link to={`/product/${product.id}`}><Button variant="primary">View Details</Button></Link>
        </Card.Body>
    </Card>
    </Col>
  )
}

export default ProductCard