import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { dispatch } = useCart();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <Container className="mt-4">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formMobile" className="mt-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            required
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter 10 digit mobile number"
          />
          <Form.Text className="text-muted">
            Enter your 10-digit mobile number without country code.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control required type="text" placeholder="Enter Address" />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">Place Order</Button>
      </Form>
    </Container>
  );
}

export default Checkout;
