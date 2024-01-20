import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../components/ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Our products</h1>
      <div className="row row-cols-1 row-cols-md-2 mx-auto">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductList;
