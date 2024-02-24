import React, { useState, useEffect } from "react";
import { styled, Box, Stack, ThemeProvider } from "@mui/system";

import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, products, pagination } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {" "}
      {products.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            p: "10px",
            minHeight: "80vh",
            mx: { base: "12", md: "20", lg: "32" },
          }}
        >
          {products.map((product) => {
            return <ProductCard product={product} loading={loading} />;
          })}
        </Box>
      )}
    </>
  );
};

export default Products;
