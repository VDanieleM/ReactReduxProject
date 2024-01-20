import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { ActionTypes } from "../redux/constants/action-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const cart = useSelector((state) => state.allProducts.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const [seconds, setSeconds] = useState(2);

  const removeProduct = (product) => {
    dispatch({ type: ActionTypes.REMOVE_SELECTED_PRODUCT, payload: product });
  };

  useEffect(() => {
    if (cart.length === 0) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [cart, navigate]);

  if (cart === null || cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h1>Il carrello è vuoto</h1>
        <p>Verrai reindirizzato alla home tra {seconds} secondi</p>
      </div>
    );
  }

  return (
    <Table striped bordered hover variant="white" className="text-center mt-5">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product, index) => (
          <tr key={index}>
            <td>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px" }}
                className="rounded-3"
              />
            </td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => removeProduct(product)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="2">Total</td>
          <td>${total.toFixed(2)}</td>
          <td>
            <Button
              variant="primary"
              className="bg-custom"
              as={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Cart;
