import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/productActions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const renderList = products.map((product) => {
    const { id, title, price, category, image } = product;

    return (
      <div
        className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 mx-auto d-flex justify-content-center"
        key={id}
      >
        <Card
          style={{ width: "18rem", minHeight: "500px", maxHeight: "500px" }}
        >
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="img-fluid pt-3 px-3"
            style={{ maxHeight: "250px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="price">${price}</Card.Text>
            <Card.Text className="category">{category}</Card.Text>
            <Link to={`/products/${id}`}>
              <Button variant="primary" className="bg-custom">
                Details
              </Button>
            </Link>
            <Button
              variant="primary"
              className="bg-custom"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return <>{renderList}</>;
};
export default ProductComponent;
