import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, price, category, description, image } = product;
  console.log(id);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.error("Error fetching product detail:", error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
          className="mt-5"
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Card style={{ width: "30rem" }} key={id} className="mt-5 mb-5 ">
            <Card.Img
              variant="top"
              src={image}
              alt={title}
              className="p-5"
              style={{ height: "70%", objectFit: "contain", overflow: "auto" }}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>${price}</Card.Text>
              <Card.Text>{category}</Card.Text>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
